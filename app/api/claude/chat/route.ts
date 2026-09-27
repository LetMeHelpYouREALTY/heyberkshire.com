/**
 * Claude API Route - Optimized Chat Endpoint
 * 
 * Features:
 * - Prompt caching (90% cost savings)
 * - Response caching (reduce duplicate queries)
 * - Rate limiting
 * - Cost tracking
 * - Streaming support
 * - Error handling
 */

import { NextRequest, NextResponse } from 'next/server';
import { ClaudeClient } from '@/lib/claude/client';
import { defaultCache } from '@/lib/claude/cache';
import {
  realEstateAgentTemplate,
  propertySearchTemplate,
  homeValuationTemplate,
  customerSupportTemplate,
  createCachedPrompt,
} from '@/lib/claude/prompt-templates';

// Initialize Claude client
const claude = new ClaudeClient({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
  enableCaching: true,
  enableCostTracking: true,
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { messages, templateType, stream = false } = body;

    // Validate request
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages array is required' },
        { status: 400 }
      );
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'Claude API key not configured' },
        { status: 500 }
      );
    }

    // Select prompt template
    const template = getTemplate(templateType);
    const lastMessage = messages[messages.length - 1];

    // Check response cache first
    const cachedResponse = await defaultCache.get(messages, template.system);
    if (cachedResponse) {
      return NextResponse.json({
        response: cachedResponse.response,
        usage: cachedResponse.usage,
        cost: cachedResponse.cost,
        cached: true,
        cacheAge: Math.floor((Date.now() - cachedResponse.timestamp) / 1000),
      });
    }

    // Stream response
    if (stream) {
      const encoder = new TextEncoder();
      const stream = new ReadableStream({
        async start(controller) {
          try {
            for await (const chunk of claude.streamMessage({
              messages: messages.map((m: any) => ({
                role: m.role,
                content: m.content,
              })),
              systemPrompt: template.system,
              maxTokens: 4096,
              enableCache: true,
            })) {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content: chunk })}\n\n`));
            }
            controller.enqueue(encoder.encode('data: [DONE]\n\n'));
            controller.close();
          } catch (error) {
            controller.error(error);
          }
        },
      });

      return new Response(stream, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
        },
      });
    }

    // Non-streaming response
    const response = await claude.sendMessage({
      messages: messages.map((m: any) => ({
        role: m.role,
        content: m.content,
      })),
      systemPrompt: template.system,
      maxTokens: 4096,
      enableCache: true,
    });

    // Cache the response
    await defaultCache.set(
      messages,
      {
        response: response.content,
        usage: {
          inputTokens: response.usage.inputTokens,
          outputTokens: response.usage.outputTokens,
        },
        cost: response.cost.total,
        timestamp: Date.now(),
        model: response.model,
      },
      template.system
    );

    // Return response with metrics
    return NextResponse.json({
      response: response.content,
      usage: response.usage,
      cost: response.cost,
      model: response.model,
      cached: false,
    });
  } catch (error) {
    console.error('Claude API error:', error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * GET endpoint for cost statistics
 */
export async function GET(request: NextRequest) {
  try {
    const stats = claude.getCostStats();
    const cacheStats = defaultCache.getStats();

    return NextResponse.json({
      costs: stats,
      cache: cacheStats,
      templates: {
        realEstateAgent: realEstateAgentTemplate.estimatedTokens,
        propertySearch: propertySearchTemplate.estimatedTokens,
        homeValuation: homeValuationTemplate.estimatedTokens,
        customerSupport: customerSupportTemplate.estimatedTokens,
      },
    });
  } catch (error) {
    console.error('Stats error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch statistics' },
      { status: 500 }
    );
  }
}

/**
 * Get template by type
 */
function getTemplate(type?: string) {
  switch (type) {
    case 'property-search':
      return propertySearchTemplate;
    case 'home-valuation':
      return homeValuationTemplate;
    case 'customer-support':
      return customerSupportTemplate;
    case 'real-estate-agent':
    default:
      return realEstateAgentTemplate;
  }
}
