/**
 * Anthropic Claude API Client - Optimized
 * 
 * Features:
 * - Prompt caching (90% cost reduction, 85% latency reduction)
 * - Rate limiting with token bucket algorithm
 * - Cost tracking and monitoring
 * - Streaming support
 * - Automatic retries with exponential backoff
 * - Type-safe API
 */

import Anthropic from '@anthropic-ai/sdk';

export interface ClaudeConfig {
  apiKey: string;
  maxRetries?: number;
  timeout?: number;
  enableCaching?: boolean;
  enableCostTracking?: boolean;
}

export interface ClaudeMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ClaudeRequest {
  messages: ClaudeMessage[];
  model?: string;
  maxTokens?: number;
  temperature?: number;
  systemPrompt?: string;
  enableCache?: boolean;
}

export interface ClaudeResponse {
  content: string;
  usage: {
    inputTokens: number;
    outputTokens: number;
    cacheCreationInputTokens?: number;
    cacheReadInputTokens?: number;
  };
  cost: {
    input: number;
    output: number;
    cacheWrite?: number;
    cacheRead?: number;
    total: number;
  };
  model: string;
  stopReason: string;
}

export class ClaudeClient {
  private client: Anthropic;
  private config: ClaudeConfig;
  private costTracker: CostTracker;
  private rateLimiter: RateLimiter;

  // Pricing per million tokens (as of 2026)
  private static readonly PRICING = {
    'claude-3-5-sonnet-20241022': {
      input: 3.00,           // $3 per million input tokens
      output: 15.00,         // $15 per million output tokens
      cacheWrite: 3.75,      // 125% of input price
      cacheRead: 0.30,       // 10% of input price
    },
    'claude-3-5-haiku-20241022': {
      input: 0.80,
      output: 4.00,
      cacheWrite: 1.00,
      cacheRead: 0.08,
    },
  };

  constructor(config: ClaudeConfig) {
    this.config = {
      maxRetries: 3,
      timeout: 60000,
      enableCaching: true,
      enableCostTracking: true,
      ...config,
    };

    this.client = new Anthropic({
      apiKey: config.apiKey,
      maxRetries: this.config.maxRetries,
      timeout: this.config.timeout,
    });

    this.costTracker = new CostTracker();
    this.rateLimiter = new RateLimiter({
      requestsPerMinute: 400000,
      tokensPerMinute: 200,
    });
  }

  /**
   * Send a message to Claude with automatic optimization
   */
  async sendMessage(request: ClaudeRequest): Promise<ClaudeResponse> {
    const model = request.model || 'claude-3-5-sonnet-20241022';
    
    // Check rate limits
    await this.rateLimiter.checkLimit();

    // Build request with prompt caching if enabled
    const messageParams: Anthropic.MessageCreateParams = {
      model,
      max_tokens: request.maxTokens || 4096,
      temperature: request.temperature ?? 1.0,
      messages: request.messages.map(msg => ({
        role: msg.role,
        content: msg.content,
      })),
    };

    // Add system prompt with cache control if caching is enabled
    if (request.systemPrompt && this.config.enableCaching && request.enableCache !== false) {
      (messageParams as unknown as Record<string, unknown>).system = [
        {
          type: 'text',
          text: request.systemPrompt,
          cache_control: { type: 'ephemeral' },
        },
      ];
    } else if (request.systemPrompt) {
      messageParams.system = request.systemPrompt;
    }

    try {
      const response = await this.client.messages.create(messageParams);

      // Calculate costs
      const cost = this.calculateCost(model, response.usage);

      // Track costs if enabled
      if (this.config.enableCostTracking) {
        this.costTracker.addRequest(cost);
      }

      return {
        content: response.content[0].type === 'text' ? response.content[0].text : '',
        usage: {
          inputTokens: response.usage.input_tokens,
          outputTokens: response.usage.output_tokens,
          cacheCreationInputTokens: (response.usage as any).cache_creation_input_tokens,
          cacheReadInputTokens: (response.usage as any).cache_read_input_tokens,
        },
        cost,
        model: response.model,
        stopReason: response.stop_reason || 'unknown',
      };
    } catch (error) {
      if (error instanceof Anthropic.APIError) {
        if (error.status === 429) {
          // Rate limit exceeded - wait and retry
          const retryAfter = parseInt(error.headers?.['retry-after'] || '60');
          await this.sleep(retryAfter * 1000);
          return this.sendMessage(request);
        }
        throw new Error(`Claude API Error (${error.status}): ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Stream a response from Claude
   */
  async *streamMessage(request: ClaudeRequest): AsyncGenerator<string, void, unknown> {
    const model = request.model || 'claude-3-5-sonnet-20241022';
    
    await this.rateLimiter.checkLimit();

    const messageParams: Anthropic.MessageCreateParams = {
      model,
      max_tokens: request.maxTokens || 4096,
      temperature: request.temperature ?? 1.0,
      messages: request.messages.map(msg => ({
        role: msg.role,
        content: msg.content,
      })),
      stream: true,
    };

    if (request.systemPrompt && this.config.enableCaching && request.enableCache !== false) {
      (messageParams as unknown as Record<string, unknown>).system = [
        {
          type: 'text',
          text: request.systemPrompt,
          cache_control: { type: 'ephemeral' },
        },
      ];
    } else if (request.systemPrompt) {
      messageParams.system = request.systemPrompt;
    }

    const stream = await this.client.messages.create(messageParams);

    for await (const event of stream) {
      if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') {
        yield event.delta.text;
      }
    }
  }

  /**
   * Calculate cost based on token usage
   */
  private calculateCost(model: string, usage: any): ClaudeResponse['cost'] {
    const pricing = ClaudeClient.PRICING[model as keyof typeof ClaudeClient.PRICING];
    if (!pricing) {
      throw new Error(`Unknown model pricing: ${model}`);
    }

    const inputCost = (usage.input_tokens / 1_000_000) * pricing.input;
    const outputCost = (usage.output_tokens / 1_000_000) * pricing.output;
    
    let cacheWriteCost = 0;
    let cacheReadCost = 0;

    if (usage.cache_creation_input_tokens) {
      cacheWriteCost = (usage.cache_creation_input_tokens / 1_000_000) * pricing.cacheWrite;
    }

    if (usage.cache_read_input_tokens) {
      cacheReadCost = (usage.cache_read_input_tokens / 1_000_000) * pricing.cacheRead;
    }

    return {
      input: inputCost,
      output: outputCost,
      cacheWrite: cacheWriteCost > 0 ? cacheWriteCost : undefined,
      cacheRead: cacheReadCost > 0 ? cacheReadCost : undefined,
      total: inputCost + outputCost + cacheWriteCost + cacheReadCost,
    };
  }

  /**
   * Get cost statistics
   */
  getCostStats() {
    return this.costTracker.getStats();
  }

  /**
   * Reset cost tracking
   */
  resetCostTracking() {
    this.costTracker.reset();
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

/**
 * Cost Tracker - Monitor API usage costs
 */
class CostTracker {
  private requests: Array<{ timestamp: number; cost: ClaudeResponse['cost'] }> = [];

  addRequest(cost: ClaudeResponse['cost']) {
    this.requests.push({
      timestamp: Date.now(),
      cost,
    });
  }

  getStats() {
    const now = Date.now();
    const last24h = this.requests.filter(r => now - r.timestamp < 24 * 60 * 60 * 1000);
    const last7d = this.requests.filter(r => now - r.timestamp < 7 * 24 * 60 * 60 * 1000);

    return {
      total: {
        requests: this.requests.length,
        cost: this.requests.reduce((sum, r) => sum + r.cost.total, 0),
      },
      last24h: {
        requests: last24h.length,
        cost: last24h.reduce((sum, r) => sum + r.cost.total, 0),
      },
      last7d: {
        requests: last7d.length,
        cost: last7d.reduce((sum, r) => sum + r.cost.total, 0),
      },
    };
  }

  reset() {
    this.requests = [];
  }
}

/**
 * Rate Limiter - Token bucket algorithm
 */
class RateLimiter {
  private requestTokens: number;
  private tokenBucketSize: number;
  private lastRefill: number;
  private config: {
    requestsPerMinute: number;
    tokensPerMinute: number;
  };

  constructor(config: { requestsPerMinute: number; tokensPerMinute: number }) {
    this.config = config;
    this.requestTokens = config.requestsPerMinute;
    this.tokenBucketSize = config.requestsPerMinute;
    this.lastRefill = Date.now();
  }

  async checkLimit(): Promise<void> {
    this.refillTokens();

    if (this.requestTokens < 1) {
      const waitTime = this.getWaitTime();
      await this.sleep(waitTime);
      this.refillTokens();
    }

    this.requestTokens -= 1;
  }

  private refillTokens() {
    const now = Date.now();
    const timePassed = now - this.lastRefill;
    const tokensToAdd = (timePassed / 60000) * this.config.requestsPerMinute;
    
    this.requestTokens = Math.min(
      this.tokenBucketSize,
      this.requestTokens + tokensToAdd
    );
    
    this.lastRefill = now;
  }

  private getWaitTime(): number {
    const tokensNeeded = 1 - this.requestTokens;
    return (tokensNeeded / this.config.requestsPerMinute) * 60000;
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
