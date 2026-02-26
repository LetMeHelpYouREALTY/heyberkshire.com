/**
 * Rate Limiting with Upstash Redis
 * 
 * Implements token bucket algorithm to prevent API abuse and control costs.
 * Works across multiple instances (stateless, cloud-based).
 */

import { Ratelimit, type Duration } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Initialize Redis client (uses env vars automatically)
const redis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null;

/**
 * Lead Form Rate Limiter
 * 
 * Limits: 5 submissions per hour per IP
 * Use case: Prevent spam while allowing legitimate retries
 */
export const leadFormLimiter = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, '1 h'),
      analytics: true,
      prefix: '@heyberkshire/lead-form',
    })
  : null;

/**
 * Claude AI Rate Limiter
 * 
 * Limits: 10 requests per minute per user
 * Use case: Control AI API costs, prevent abuse
 */
export const claudeAiLimiter = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(10, '1 m'),
      analytics: true,
      prefix: '@heyberkshire/claude-ai',
    })
  : null;

/**
 * General API Rate Limiter
 * 
 * Limits: 100 requests per minute per IP
 * Use case: Protect all API routes from DDoS
 */
export const apiLimiter = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(100, '1 m'),
      analytics: true,
      prefix: '@heyberkshire/api',
    })
  : null;

/**
 * Get client identifier from request
 * 
 * Tries multiple sources in order:
 * 1. X-Forwarded-For (behind proxy)
 * 2. X-Real-IP (some proxies)
 * 3. Request IP (direct connection)
 * 4. User ID (if authenticated)
 */
export function getClientId(
  request: Request,
  userId?: string
): string {
  if (userId) {
    return `user:${userId}`;
  }

  // Try X-Forwarded-For header (most common)
  const forwardedFor = request.headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  // Try X-Real-IP header
  const realIp = request.headers.get('x-real-ip');
  if (realIp) {
    return realIp;
  }

  // Fallback to request IP (may not be available in all environments)
  return 'anonymous';
}

/**
 * Check rate limit and return result
 * 
 * @param limiter - The rate limiter to use
 * @param identifier - Unique identifier (IP, user ID, etc.)
 * @returns Object with success status and metadata
 */
export async function checkRateLimit(
  limiter: Ratelimit | null,
  identifier: string
): Promise<{
  success: boolean;
  limit: number;
  remaining: number;
  reset: number;
  pending?: Promise<unknown>;
}> {
  // If rate limiter not configured, allow all requests (development)
  if (!limiter) {
    return {
      success: true,
      limit: 999999,
      remaining: 999999,
      reset: Date.now() + 60000,
    };
  }

  try {
    const result = await limiter.limit(identifier);
    
    return {
      success: result.success,
      limit: result.limit,
      remaining: result.remaining,
      reset: result.reset,
      pending: result.pending,
    };
  } catch (error) {
    console.error('Rate limit check failed:', error);
    
    // Fail open (allow request) if rate limiter is down
    return {
      success: true,
      limit: 0,
      remaining: 0,
      reset: Date.now() + 60000,
    };
  }
}

/**
 * Create custom rate limiter with specific limits
 * 
 * @example
 * const customLimiter = createRateLimiter({
 *   requests: 20,
 *   window: '30 s',
 *   prefix: 'custom-endpoint'
 * })
 */
export function createRateLimiter(config: {
  requests: number;
  window: Duration;
  prefix: string;
}) {
  if (!redis) return null;

  return new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(config.requests, config.window),
    analytics: true,
    prefix: `@heyberkshire/${config.prefix}`,
  });
}

/**
 * Rate limit response headers
 * 
 * Add these to your API responses for client-side rate limit awareness
 */
export function getRateLimitHeaders(result: {
  limit: number;
  remaining: number;
  reset: number;
}): Record<string, string> {
  return {
    'X-RateLimit-Limit': result.limit.toString(),
    'X-RateLimit-Remaining': result.remaining.toString(),
    'X-RateLimit-Reset': new Date(result.reset).toISOString(),
  };
}
