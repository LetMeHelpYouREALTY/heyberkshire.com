/**
 * Claude API Configuration
 * 
 * Centralized configuration for Claude API integration
 * with environment-based settings and best practices.
 */

export interface ClaudeConfiguration {
  // API Settings
  apiKey: string;
  model: string;
  maxTokens: number;
  temperature: number;
  
  // Caching Settings
  promptCaching: {
    enabled: boolean;
    ttl: number; // seconds
  };
  
  responseCaching: {
    enabled: boolean;
    ttl: number; // seconds
  };
  
  // Rate Limiting
  rateLimit: {
    enabled: boolean;
    requestsPerMinute: number;
    tokensPerMinute: number;
  };
  
  // Cost Management
  costTracking: {
    enabled: boolean;
    alertThreshold: number; // dollars
    dailyLimit: number; // dollars
  };
  
  // Retry Policy
  retry: {
    maxAttempts: number;
    initialDelay: number; // ms
    maxDelay: number; // ms
    backoffMultiplier: number;
  };
  
  // Streaming
  streaming: {
    enabled: boolean;
    chunkSize: number;
  };
}

/**
 * Get Claude configuration from environment
 */
export function getClaudeConfig(): ClaudeConfiguration {
  return {
    // API Settings
    apiKey: process.env.ANTHROPIC_API_KEY || '',
    model: process.env.CLAUDE_MODEL || 'claude-3-5-sonnet-20241022',
    maxTokens: parseInt(process.env.CLAUDE_MAX_TOKENS || '4096'),
    temperature: parseFloat(process.env.CLAUDE_TEMPERATURE || '1.0'),
    
    // Prompt Caching (90% cost savings!)
    promptCaching: {
      enabled: process.env.CLAUDE_PROMPT_CACHING !== 'false',
      ttl: 300, // 5 minutes (Claude's default)
    },
    
    // Response Caching (avoid duplicate queries)
    responseCaching: {
      enabled: process.env.CLAUDE_RESPONSE_CACHING !== 'false',
      ttl: 3600, // 1 hour
    },
    
    // Rate Limiting (prevent API errors)
    rateLimit: {
      enabled: process.env.CLAUDE_RATE_LIMIT !== 'false',
      requestsPerMinute: parseInt(process.env.CLAUDE_RPM || '50'), // Conservative per-client limit
      tokensPerMinute: parseInt(process.env.CLAUDE_TPM || '100000'),
    },
    
    // Cost Management
    costTracking: {
      enabled: process.env.CLAUDE_COST_TRACKING !== 'false',
      alertThreshold: parseFloat(process.env.CLAUDE_COST_ALERT_THRESHOLD || '10.00'),
      dailyLimit: parseFloat(process.env.CLAUDE_DAILY_LIMIT || '50.00'),
    },
    
    // Retry Policy (exponential backoff)
    retry: {
      maxAttempts: parseInt(process.env.CLAUDE_MAX_RETRIES || '3'),
      initialDelay: 1000, // 1 second
      maxDelay: 60000, // 60 seconds
      backoffMultiplier: 2,
    },
    
    // Streaming
    streaming: {
      enabled: process.env.CLAUDE_STREAMING !== 'false',
      chunkSize: 100, // characters per chunk
    },
  };
}

/**
 * Validate Claude configuration
 */
export function validateConfig(config: ClaudeConfiguration): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (!config.apiKey) {
    errors.push('ANTHROPIC_API_KEY is required');
  }

  if (config.maxTokens < 1 || config.maxTokens > 200000) {
    errors.push('maxTokens must be between 1 and 200000');
  }

  if (config.temperature < 0 || config.temperature > 1) {
    errors.push('temperature must be between 0 and 1');
  }

  if (config.rateLimit.requestsPerMinute < 1) {
    errors.push('requestsPerMinute must be at least 1');
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Model pricing information (2026 rates)
 */
export const MODEL_PRICING = {
  'claude-3-5-sonnet-20241022': {
    name: 'Claude 3.5 Sonnet',
    input: 3.00, // $ per million tokens
    output: 15.00,
    cacheWrite: 3.75, // 125% of input
    cacheRead: 0.30, // 10% of input
    contextWindow: 200000,
    description: 'Best balance of intelligence and speed',
    recommended: true,
  },
  'claude-3-5-haiku-20241022': {
    name: 'Claude 3.5 Haiku',
    input: 0.80,
    output: 4.00,
    cacheWrite: 1.00,
    cacheRead: 0.08,
    contextWindow: 200000,
    description: 'Fastest and most cost-effective',
    recommended: false,
  },
  'claude-3-opus-20240229': {
    name: 'Claude 3 Opus',
    input: 15.00,
    output: 75.00,
    cacheWrite: 18.75,
    cacheRead: 1.50,
    contextWindow: 200000,
    description: 'Most capable for complex tasks',
    recommended: false,
  },
};

/**
 * Calculate estimated monthly cost based on usage
 */
export function estimateMonthlyCost(config: {
  requestsPerDay: number;
  avgInputTokens: number;
  avgOutputTokens: number;
  cacheHitRate: number; // 0-1
  model: keyof typeof MODEL_PRICING;
}): {
  withoutCaching: number;
  withCaching: number;
  savings: number;
  savingsPercent: number;
} {
  const pricing = MODEL_PRICING[config.model];
  const requestsPerMonth = config.requestsPerDay * 30;

  // Without caching
  const inputCost = (config.avgInputTokens / 1_000_000) * pricing.input;
  const outputCost = (config.avgOutputTokens / 1_000_000) * pricing.output;
  const withoutCaching = (inputCost + outputCost) * requestsPerMonth;

  // With caching (accounting for cache hits)
  const cacheHits = requestsPerMonth * config.cacheHitRate;
  const cacheMisses = requestsPerMonth - cacheHits;
  
  const cacheWriteCost = (config.avgInputTokens / 1_000_000) * pricing.cacheWrite * cacheMisses;
  const cacheReadCost = (config.avgInputTokens / 1_000_000) * pricing.cacheRead * cacheHits;
  const outputCostWithCache = outputCost * requestsPerMonth; // Output not cached
  
  const withCaching = cacheWriteCost + cacheReadCost + outputCostWithCache;

  return {
    withoutCaching,
    withCaching,
    savings: withoutCaching - withCaching,
    savingsPercent: ((withoutCaching - withCaching) / withoutCaching) * 100,
  };
}

/**
 * Best practices recommendations
 */
export const BEST_PRACTICES = {
  promptCaching: {
    enabled: true,
    reason: 'Reduces costs by 90% and latency by 85% for repeated system prompts',
    implementation: 'Automatically applied to system prompts in all templates',
  },
  
  responseCaching: {
    enabled: true,
    ttl: 3600,
    reason: 'Avoids duplicate API calls for identical queries',
    implementation: 'Cached responses served from memory/Redis/KV',
  },
  
  rateLimiting: {
    enabled: true,
    limit: 50,
    reason: 'Prevents hitting API rate limits (400k RPM, 200 TPM)',
    implementation: 'Token bucket algorithm with per-client tracking',
  },
  
  modelSelection: {
    default: 'claude-3-5-sonnet-20241022',
    reason: 'Best balance of capability and cost for most use cases',
    alternatives: {
      'claude-3-5-haiku-20241022': 'Use for simple queries (75% cheaper)',
      'claude-3-opus-20240229': 'Use for complex reasoning (5x more expensive)',
    },
  },
  
  maxTokens: {
    recommended: 4096,
    reason: 'Sufficient for most responses without wasting tokens',
    adjust: 'Reduce for simple queries, increase for detailed responses',
  },
  
  temperature: {
    recommended: 1.0,
    reason: 'Balanced creativity and consistency',
    adjust: 'Lower (0.5-0.7) for factual responses, higher (1.0) for creative content',
  },
};
