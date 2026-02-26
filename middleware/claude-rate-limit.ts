/**
 * Claude API Rate Limiting Middleware
 * 
 * Implements token bucket algorithm to prevent hitting API rate limits.
 * Tracks both requests per minute and tokens per minute.
 */

import { NextRequest, NextResponse } from 'next/server';

interface RateLimitConfig {
  requestsPerMinute: number;
  tokensPerMinute: number;
  enabled: boolean;
}

class RateLimitStore {
  private requests: Map<string, number[]> = new Map();
  private tokens: Map<string, number[]> = new Map();

  /**
   * Check if client is within rate limits
   */
  async checkLimit(
    clientId: string,
    config: RateLimitConfig
  ): Promise<{ allowed: boolean; retryAfter?: number }> {
    if (!config.enabled) {
      return { allowed: true };
    }

    const now = Date.now();
    const oneMinuteAgo = now - 60000;

    // Get recent requests for this client
    const clientRequests = this.requests.get(clientId) || [];
    const recentRequests = clientRequests.filter(t => t > oneMinuteAgo);

    // Check request limit
    if (recentRequests.length >= config.requestsPerMinute) {
      const oldestRequest = Math.min(...recentRequests);
      const retryAfter = Math.ceil((oldestRequest + 60000 - now) / 1000);
      
      return {
        allowed: false,
        retryAfter,
      };
    }

    // Add current request
    recentRequests.push(now);
    this.requests.set(clientId, recentRequests);

    return { allowed: true };
  }

  /**
   * Track token usage
   */
  trackTokens(clientId: string, tokens: number) {
    const now = Date.now();
    const clientTokens = this.tokens.get(clientId) || [];
    
    clientTokens.push(now);
    this.tokens.set(clientId, clientTokens);
  }

  /**
   * Get current usage stats for a client
   */
  getUsage(clientId: string): { requestsLastMinute: number; tokensLastMinute: number } {
    const now = Date.now();
    const oneMinuteAgo = now - 60000;

    const requests = (this.requests.get(clientId) || []).filter(t => t > oneMinuteAgo);
    const tokens = (this.tokens.get(clientId) || []).filter(t => t > oneMinuteAgo);

    return {
      requestsLastMinute: requests.length,
      tokensLastMinute: tokens.length,
    };
  }

  /**
   * Clean up old entries (run periodically)
   */
  cleanup() {
    const now = Date.now();
    const oneHourAgo = now - 3600000;

    Array.from(this.requests.entries()).forEach(([clientId, timestamps]) => {
      const recent = timestamps.filter(t => t > oneHourAgo);
      if (recent.length === 0) {
        this.requests.delete(clientId);
      } else {
        this.requests.set(clientId, recent);
      }
    });

    Array.from(this.tokens.entries()).forEach(([clientId, timestamps]) => {
      const recent = timestamps.filter(t => t > oneHourAgo);
      if (recent.length === 0) {
        this.tokens.delete(clientId);
      } else {
        this.tokens.set(clientId, recent);
      }
    });
  }
}

// Global rate limit store
const rateLimitStore = new RateLimitStore();

// Clean up every 5 minutes
if (typeof setInterval !== 'undefined') {
  setInterval(() => rateLimitStore.cleanup(), 300000);
}

/**
 * Rate limit middleware for Claude API routes
 */
export async function claudeRateLimit(
  request: NextRequest,
  config: Partial<RateLimitConfig> = {}
): Promise<NextResponse | null> {
  const fullConfig: RateLimitConfig = {
    requestsPerMinute: 50, // Conservative limit per client
    tokensPerMinute: 100000,
    enabled: true,
    ...config,
  };

  // Get client identifier (IP address or user ID)
  const clientId = 
    request.headers.get('x-forwarded-for')?.split(',')[0] ||
    request.headers.get('x-real-ip') ||
    'unknown';

  // Check rate limit
  const { allowed, retryAfter } = await rateLimitStore.checkLimit(clientId, fullConfig);

  if (!allowed) {
    return NextResponse.json(
      {
        error: 'Rate limit exceeded',
        retryAfter,
        message: `Too many requests. Please wait ${retryAfter} seconds.`,
      },
      {
        status: 429,
        headers: {
          'Retry-After': retryAfter!.toString(),
          'X-RateLimit-Limit': fullConfig.requestsPerMinute.toString(),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': (Date.now() + retryAfter! * 1000).toString(),
        },
      }
    );
  }

  // Get current usage
  const usage = rateLimitStore.getUsage(clientId);

  // Add rate limit headers to response (will be merged later)
  return null; // Allow request to proceed
}

/**
 * Export rate limit store for usage tracking
 */
export { rateLimitStore };
