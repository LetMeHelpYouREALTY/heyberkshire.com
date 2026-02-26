/**
 * Follow Up Boss API Client - Optimized
 * 
 * Features:
 * - Rate limiting (250 req/10s global, endpoint-specific limits)
 * - Response caching (reduce duplicate requests)
 * - Error handling with exponential backoff
 * - Automatic retries
 * - Type-safe API
 * - Lead deduplication
 * - Pagination helpers
 */

export interface FUBConfig {
  apiKey: string;
  systemKey?: string; // Increases rate limits
  enableCaching?: boolean;
  enableRateLimiting?: boolean;
  retryAttempts?: number;
}

export interface FUBPerson {
  id: number;
  firstName?: string;
  lastName?: string;
  name?: string;
  emails?: Array<{ value: string; type?: string }>;
  phones?: Array<{ value: string; type?: string }>;
  stage?: string;
  source?: string;
  tags?: string[];
  assignedUser?: {
    id: number;
    name: string;
    email: string;
  };
  customFields?: Record<string, any>;
  created: string;
  updated: string;
}

export interface FUBEvent {
  source: string;
  type: string;
  message: string;
  personId?: number;
  data?: Record<string, any>;
}

export interface FUBListOptions {
  limit?: number; // Max 100, recommended 25-50
  offset?: number;
  next?: string; // Cursor-based pagination
  orderBy?: string;
  createdAfter?: string;
  updatedAfter?: string;
  email?: string;
  phone?: string;
  stage?: string;
  source?: string;
  ids?: number[];
}

export class FollowUpBossClient {
  private config: FUBConfig;
  private baseUrl = 'https://api.followupboss.com/v1';
  private rateLimiter: FUBRateLimiter;
  private cache: Map<string, { data: any; timestamp: number }>;
  private cacheTTL = 60000; // 1 minute

  constructor(config: FUBConfig) {
    this.config = {
      enableCaching: true,
      enableRateLimiting: true,
      retryAttempts: 3,
      ...config,
    };

    this.rateLimiter = new FUBRateLimiter({
      systemKey: config.systemKey,
    });

    this.cache = new Map();
  }

  /**
   * Get a person by ID
   */
  async getPerson(id: number): Promise<FUBPerson> {
    const cacheKey = `person:${id}`;
    const cached = this.getFromCache(cacheKey);
    if (cached) return cached;

    const response = await this.request(`/people/${id}`);
    this.setCache(cacheKey, response);
    return response;
  }

  /**
   * List people with filtering and pagination
   */
  async listPeople(options: FUBListOptions = {}): Promise<{
    people: FUBPerson[];
    next?: string;
    total?: number;
  }> {
    const params = new URLSearchParams();
    
    // Recommended pagination
    params.append('limit', String(options.limit || 50));
    
    if (options.offset) params.append('offset', String(options.offset));
    if (options.next) params.append('next', options.next);
    if (options.orderBy) params.append('orderBy', options.orderBy);
    if (options.createdAfter) params.append('createdAfter', options.createdAfter);
    if (options.updatedAfter) params.append('updatedAfter', options.updatedAfter);
    if (options.email) params.append('email', options.email);
    if (options.phone) params.append('phone', options.phone);
    if (options.stage) params.append('stage', options.stage);
    if (options.source) params.append('source', options.source);
    if (options.ids) params.append('ids', options.ids.join(','));

    const cacheKey = `people:${params.toString()}`;
    const cached = this.getFromCache(cacheKey);
    if (cached) return cached;

    const response = await this.request(`/people?${params.toString()}`);
    this.setCache(cacheKey, response);
    return response;
  }

  /**
   * Create or update a person (lead)
   */
  async upsertPerson(data: Partial<FUBPerson> & { 
    emails?: Array<{ value: string }> | string[];
    phones?: Array<{ value: string }> | string[];
  }): Promise<FUBPerson> {
    // Normalize email/phone formats
    const normalizedData = {
      ...data,
      emails: data.emails?.map(e => 
        typeof e === 'string' ? { value: e } : e
      ),
      phones: data.phones?.map(p => 
        typeof p === 'string' ? { value: p } : p
      ),
    };

    // Use PUT for upsert
    const response = await this.request('/people', {
      method: 'PUT',
      body: JSON.stringify(normalizedData),
    });

    // Invalidate cache
    this.clearCache('people:');
    if (response.id) {
      this.clearCache(`person:${response.id}`);
    }

    return response;
  }

  /**
   * Add a tag to a person
   */
  async addTag(personId: number, tag: string): Promise<void> {
    await this.request(`/people/${personId}/tags`, {
      method: 'POST',
      body: JSON.stringify({ tag }),
    });

    this.clearCache(`person:${personId}`);
  }

  /**
   * Update person stage
   */
  async updateStage(personId: number, stage: string): Promise<void> {
    await this.request(`/people/${personId}`, {
      method: 'PUT',
      body: JSON.stringify({ stage }),
    });

    this.clearCache(`person:${personId}`);
  }

  /**
   * Create an event (activity)
   */
  async createEvent(event: FUBEvent): Promise<{ id: string }> {
    // Events endpoint has unlimited rate limit
    return await this.request('/events', {
      method: 'POST',
      body: JSON.stringify(event),
    }, 'events');
  }

  /**
   * Search for person by email or phone (with deduplication)
   */
  async findPerson(identifier: { email?: string; phone?: string }): Promise<FUBPerson | null> {
    if (identifier.email) {
      const results = await this.listPeople({ email: identifier.email, limit: 1 });
      return results.people[0] || null;
    }

    if (identifier.phone) {
      const results = await this.listPeople({ phone: identifier.phone, limit: 1 });
      return results.people[0] || null;
    }

    return null;
  }

  /**
   * Batch get people by IDs
   */
  async batchGetPeople(ids: number[]): Promise<FUBPerson[]> {
    const results = await this.listPeople({ ids, limit: 100 });
    return results.people;
  }

  /**
   * Get all people (with automatic pagination)
   */
  async *getAllPeople(options: Omit<FUBListOptions, 'next'> = {}): AsyncGenerator<FUBPerson> {
    let next: string | undefined = undefined;

    do {
      const response = await this.listPeople({ ...options, next });
      
      for (const person of response.people) {
        yield person;
      }

      next = response.next;
    } while (next);
  }

  /**
   * Make authenticated request to FUB API
   */
  private async request(
    path: string,
    options: RequestInit = {},
    context: 'global' | 'events' | 'people' = 'global'
  ): Promise<any> {
    // Check rate limit
    if (this.config.enableRateLimiting) {
      await this.rateLimiter.checkLimit(context);
    }

    const url = `${this.baseUrl}${path}`;
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${Buffer.from(`${this.config.apiKey}:`).toString('base64')}`,
    };

    // Add system key for higher rate limits
    if (this.config.systemKey) {
      headers['X-System-Key'] = this.config.systemKey;
    }

    let lastError: Error | null = null;
    let delay = 1000; // Initial delay for retries

    for (let attempt = 0; attempt <= (this.config.retryAttempts || 3); attempt++) {
      try {
        const response = await fetch(url, {
          ...options,
          headers: { ...headers, ...options.headers },
        });

        // Handle rate limiting
        if (response.status === 429) {
          const retryAfter = response.headers.get('Retry-After');
          const waitTime = retryAfter ? parseInt(retryAfter) * 1000 : delay;
          
          await this.sleep(waitTime);
          delay *= 2; // Exponential backoff
          continue;
        }

        // Handle other errors
        if (!response.ok) {
          const error = await response.json().catch(() => ({}));
          throw new Error(
            `FUB API Error (${response.status}): ${error.message || response.statusText}`
          );
        }

        return await response.json();
      } catch (error) {
        lastError = error as Error;
        
        if (attempt < (this.config.retryAttempts || 3)) {
          await this.sleep(delay);
          delay *= 2;
        }
      }
    }

    throw lastError || new Error('Request failed after retries');
  }

  /**
   * Cache helpers
   */
  private getFromCache(key: string): any | null {
    if (!this.config.enableCaching) return null;

    const cached = this.cache.get(key);
    if (cached && Date.now() - cached.timestamp < this.cacheTTL) {
      return cached.data;
    }

    return null;
  }

  private setCache(key: string, data: any): void {
    if (!this.config.enableCaching) return;
    this.cache.set(key, { data, timestamp: Date.now() });
  }

  private clearCache(prefix: string): void {
    Array.from(this.cache.keys()).forEach(key => {
      if (key.startsWith(prefix)) {
        this.cache.delete(key);
      }
    });
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

/**
 * Rate Limiter - Sliding 10-second window
 */
class FUBRateLimiter {
  private requests: Map<string, number[]> = new Map();
  private limits = {
    global: 250,      // 250 with X-System-Key, 125 without
    events: 20,       // 20 with X-System-Key, 10 without (GET only)
    people: 25,       // PUT operations
  };

  constructor(config: { systemKey?: string }) {
    // Adjust limits based on system key
    if (!config.systemKey) {
      this.limits.global = 125;
      this.limits.events = 10;
    }
  }

  async checkLimit(context: 'global' | 'events' | 'people'): Promise<void> {
    const now = Date.now();
    const windowStart = now - 10000; // 10-second sliding window

    // Get recent requests
    const recentRequests = (this.requests.get(context) || [])
      .filter(t => t > windowStart);

    // Check limit
    const limit = this.limits[context];
    if (recentRequests.length >= limit) {
      const oldestRequest = Math.min(...recentRequests);
      const waitTime = oldestRequest + 10000 - now;
      await this.sleep(waitTime);
    }

    // Add current request
    recentRequests.push(now);
    this.requests.set(context, recentRequests);
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
