/**
 * Cloudflare Worker - Security Headers
 * 
 * Adds comprehensive security headers to all responses
 * for enhanced security and compliance.
 */

export default {
  async fetch(request: Request): Promise<Response> {
    // Fetch the response from origin
    const response = await fetch(request);
    
    // Clone response so we can modify headers
    const newResponse = new Response(response.body, response);
    
    // Add security headers
    const securityHeaders = {
      // Content Security Policy
      'Content-Security-Policy': [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://em.realscout.com https://www.realscout.com https://assets.calendly.com https://www.googletagmanager.com https://www.google-analytics.com",
        "style-src 'self' 'unsafe-inline' https://em.realscout.com https://www.realscout.com https://assets.calendly.com",
        "img-src 'self' data: blob: https: http:",
        "font-src 'self' data: https://assets.calendly.com",
        "connect-src 'self' https://em.realscout.com https://www.realscout.com https://openrouter.ai https://api.openai.com https://calendly.com https://www.google-analytics.com https://analytics.google.com",
        "frame-src 'self' https://em.realscout.com https://www.realscout.com https://calendly.com https://assets.calendly.com https://www.google.com https://maps.google.com https://*.google.com",
        "worker-src 'self' blob:",
      ].join('; '),
      
      // Strict Transport Security
      'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
      
      // Prevent MIME type sniffing
      'X-Content-Type-Options': 'nosniff',
      
      // Prevent clickjacking
      'X-Frame-Options': 'SAMEORIGIN',
      
      // Referrer policy
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      
      // Permissions policy
      'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
      
      // DNS prefetch control
      'X-DNS-Prefetch-Control': 'on',
      
      // XSS protection (for older browsers)
      'X-XSS-Protection': '1; mode=block',
    };
    
    // Apply all security headers
    Object.entries(securityHeaders).forEach(([key, value]) => {
      newResponse.headers.set(key, value);
    });
    
    return newResponse;
  },
};
