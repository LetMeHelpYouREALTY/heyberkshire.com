/**
 * Claude Response Cache - Redis/KV Store
 * 
 * Caches Claude API responses to reduce costs and improve response times.
 * Compatible with Redis, Cloudflare KV, or Vercel KV.
 */

export interface CacheConfig {
  ttl: number; // Time to live in seconds
  enabled: boolean;
  keyPrefix: string;
}

export interface CacheEntry {
  response: string;
  usage: {
    inputTokens: number;
    outputTokens: number;
  };
  cost: number;
  timestamp: number;
  model: string;
}

export class ClaudeCache {
  private config: CacheConfig;
  private memoryCache: Map<string, CacheEntry>;

  constructor(config: Partial<CacheConfig> = {}) {
    this.config = {
      ttl: 3600, // 1 hour default
      enabled: true,
      keyPrefix: 'claude:',
      ...config,
    };
    this.memoryCache = new Map();
  }

  /**
   * Generate cache key from messages
   */
  private generateKey(messages: Array<{ role: string; content: string }>, systemPrompt?: string): string {
    const content = [
      systemPrompt || '',
      ...messages.map(m => `${m.role}:${m.content}`),
    ].join('|');

    return `${this.config.keyPrefix}${this.hashString(content)}`;
  }

  /**
   * Simple hash function for cache keys
   */
  private hashString(str: string): string {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash).toString(36);
  }

  /**
   * Get cached response
   */
  async get(
    messages: Array<{ role: string; content: string }>,
    systemPrompt?: string
  ): Promise<CacheEntry | null> {
    if (!this.config.enabled) return null;

    const key = this.generateKey(messages, systemPrompt);

    // Check memory cache first
    const memCached = this.memoryCache.get(key);
    if (memCached && Date.now() - memCached.timestamp < this.config.ttl * 1000) {
      return memCached;
    }

    // Check external cache (Redis/KV) if available
    if (typeof process !== 'undefined' && process.env.REDIS_URL) {
      return await this.getFromRedis(key);
    }

    // Check Cloudflare KV if available
    if (typeof process !== 'undefined' && process.env.CLOUDFLARE_KV_NAMESPACE) {
      return await this.getFromCloudflareKV(key);
    }

    return null;
  }

  /**
   * Set cached response
   */
  async set(
    messages: Array<{ role: string; content: string }>,
    entry: CacheEntry,
    systemPrompt?: string
  ): Promise<void> {
    if (!this.config.enabled) return;

    const key = this.generateKey(messages, systemPrompt);

    // Set in memory cache
    this.memoryCache.set(key, entry);

    // Set in external cache if available
    if (typeof process !== 'undefined' && process.env.REDIS_URL) {
      await this.setInRedis(key, entry);
    }

    // Set in Cloudflare KV if available
    if (typeof process !== 'undefined' && process.env.CLOUDFLARE_KV_NAMESPACE) {
      await this.setInCloudflareKV(key, entry);
    }

    // Clean up old entries from memory cache
    this.cleanupMemoryCache();
  }

  /**
   * Clean up expired entries from memory cache
   */
  private cleanupMemoryCache() {
    const now = Date.now();
    const maxSize = 100; // Keep max 100 entries in memory

    // Remove expired entries
    Array.from(this.memoryCache.entries()).forEach(([key, entry]) => {
      if (now - entry.timestamp > this.config.ttl * 1000) {
        this.memoryCache.delete(key);
      }
    });

    // Remove oldest entries if cache is too large
    if (this.memoryCache.size > maxSize) {
      const entries = Array.from(this.memoryCache.entries())
        .sort((a, b) => a[1].timestamp - b[1].timestamp);
      
      const toRemove = entries.slice(0, entries.length - maxSize);
      toRemove.forEach(([key]) => this.memoryCache.delete(key));
    }
  }

  /**
   * Get from Redis (if configured)
   */
  private async getFromRedis(key: string): Promise<CacheEntry | null> {
    try {
      // Placeholder - implement with your Redis client
      // const redis = await getRedisClient();
      // const data = await redis.get(key);
      // return data ? JSON.parse(data) : null;
      return null;
    } catch (error) {
      console.error('Redis get error:', error);
      return null;
    }
  }

  /**
   * Set in Redis (if configured)
   */
  private async setInRedis(key: string, entry: CacheEntry): Promise<void> {
    try {
      // Placeholder - implement with your Redis client
      // const redis = await getRedisClient();
      // await redis.set(key, JSON.stringify(entry), 'EX', this.config.ttl);
    } catch (error) {
      console.error('Redis set error:', error);
    }
  }

  /**
   * Get from Cloudflare KV (if configured)
   */
  private async getFromCloudflareKV(key: string): Promise<CacheEntry | null> {
    try {
      // Placeholder - implement with Cloudflare KV binding
      // const data = await env.CLAUDE_CACHE.get(key, 'json');
      // return data as CacheEntry | null;
      return null;
    } catch (error) {
      console.error('Cloudflare KV get error:', error);
      return null;
    }
  }

  /**
   * Set in Cloudflare KV (if configured)
   */
  private async setInCloudflareKV(key: string, entry: CacheEntry): Promise<void> {
    try {
      // Placeholder - implement with Cloudflare KV binding
      // await env.CLAUDE_CACHE.put(key, JSON.stringify(entry), {
      //   expirationTtl: this.config.ttl,
      // });
    } catch (error) {
      console.error('Cloudflare KV set error:', error);
    }
  }

  /**
   * Get cache statistics
   */
  getStats() {
    return {
      entriesInMemory: this.memoryCache.size,
      oldestEntry: Math.min(
        ...Array.from(this.memoryCache.values()).map(e => e.timestamp)
      ),
      newestEntry: Math.max(
        ...Array.from(this.memoryCache.values()).map(e => e.timestamp)
      ),
    };
  }

  /**
   * Clear all caches
   */
  clear() {
    this.memoryCache.clear();
  }
}

/**
 * Default cache instance
 */
export const defaultCache = new ClaudeCache({
  ttl: 3600, // 1 hour
  enabled: true,
  keyPrefix: 'claude:response:',
});
