/**
 * Lead Capture API - Send leads to Follow Up Boss
 * 
 * Features:
 * - Auto-enrichment with source tracking
 * - Duplicate detection
 * - Stage assignment
 * - Tag management
 * - Integration with Claude AI for qualification
 */

import { NextRequest, NextResponse } from 'next/server';
import { FollowUpBossClient } from '@/lib/fub/client';
import { leadFormLimiter, getClientId, checkRateLimit, getRateLimitHeaders } from '@/lib/rate-limit';

export interface LeadCaptureRequest {
  // Required
  firstName?: string;
  lastName?: string;
  name?: string;
  email?: string;
  phone?: string;

  // Optional
  source?: string;
  stage?: string;
  tags?: string[];
  message?: string;
  
  // Property search criteria
  propertyType?: string;
  priceMin?: number;
  priceMax?: number;
  bedrooms?: number;
  bathrooms?: number;
  neighborhoods?: string[];

  // Additional info
  timeline?: string;
  financing?: string;
  preApproved?: boolean;
  
  // Security
  turnstileToken?: string;
  
  // Custom fields
  customFields?: Record<string, any>;
}

// Verify Cloudflare Turnstile token
async function verifyTurnstileToken(token: string): Promise<boolean> {
  if (!process.env.TURNSTILE_SECRET_KEY) {
    console.warn('TURNSTILE_SECRET_KEY not configured - skipping verification');
    return true; // Allow in development
  }

  try {
    const response = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          secret: process.env.TURNSTILE_SECRET_KEY,
          response: token,
        }),
      }
    );

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error('Turnstile verification error:', error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: LeadCaptureRequest = await request.json();

    // Check rate limit (5 submissions per hour per IP)
    const clientId = getClientId(request);
    const rateLimit = await checkRateLimit(leadFormLimiter, clientId);
    
    if (!rateLimit.success) {
      const resetDate = new Date(rateLimit.reset);
      const minutesUntilReset = Math.ceil((rateLimit.reset - Date.now()) / 60000);
      
      return NextResponse.json(
        { 
          error: `Too many submissions. Please try again in ${minutesUntilReset} minute${minutesUntilReset > 1 ? 's' : ''}.`,
          retryAfter: resetDate.toISOString(),
        },
        { 
          status: 429,
          headers: getRateLimitHeaders(rateLimit),
        }
      );
    }

    // Verify Turnstile CAPTCHA (if configured)
    if (process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && process.env.TURNSTILE_SECRET_KEY) {
      if (!data.turnstileToken) {
        return NextResponse.json(
          { error: 'CAPTCHA verification required' },
          { status: 400 }
        );
      }

      const isValid = await verifyTurnstileToken(data.turnstileToken);
      if (!isValid) {
        return NextResponse.json(
          { error: 'CAPTCHA verification failed. Please try again.' },
          { status: 403 }
        );
      }
    }

    // Validate required fields
    if (!data.email && !data.phone) {
      return NextResponse.json(
        { error: 'Email or phone is required' },
        { status: 400 }
      );
    }

    if (!data.firstName && !data.lastName && !data.name) {
      return NextResponse.json(
        { error: 'Name is required' },
        { status: 400 }
      );
    }

    // Initialize FUB client
    const fub = new FollowUpBossClient({
      apiKey: process.env.FUB_API_KEY || '',
      systemKey: process.env.FUB_SYSTEM_KEY,
    });

    // Check for existing lead (deduplication)
    let existingPerson = null;
    if (data.email) {
      existingPerson = await fub.findPerson({ email: data.email });
    } else if (data.phone) {
      existingPerson = await fub.findPerson({ phone: data.phone });
    }

    // Prepare person data
    const personData: any = {
      name: data.name || `${data.firstName || ''} ${data.lastName || ''}`.trim(),
      emails: data.email ? [{ value: data.email }] : undefined,
      phones: data.phone ? [{ value: data.phone }] : undefined,
      source: enrichSource(data.source, request),
      stage: data.stage || 'New Lead',
      customFields: {
        ...data.customFields,
        propertyType: data.propertyType,
        priceMin: data.priceMin,
        priceMax: data.priceMax,
        bedrooms: data.bedrooms,
        bathrooms: data.bathrooms,
        neighborhoods: data.neighborhoods?.join(', '),
        timeline: data.timeline,
        financing: data.financing,
        preApproved: data.preApproved,
        capturedAt: new Date().toISOString(),
        captureUrl: request.headers.get('referer') || 'direct',
      },
    };

    // Create or update person
    const person = await fub.upsertPerson(personData);

    // Add tags
    const tags = [
      ...(data.tags || []),
      'website-lead',
      getSourceTag(data.source),
      ...getPropertyTags(data),
    ].filter((t): t is string => Boolean(t));

    for (const tag of tags) {
      try {
        await fub.addTag(person.id, tag);
      } catch (error) {
        console.error(`Error adding tag "${tag}":`, error);
      }
    }

    // Create initial event with message
    if (data.message) {
      await fub.createEvent({
        source: 'website',
        type: 'Inbound Lead',
        message: `Lead message: ${data.message}`,
        personId: person.id,
        data: {
          formType: data.source || 'contact-form',
          url: request.headers.get('referer'),
        },
      });
    }

    // Build search criteria summary
    const searchCriteria = buildSearchCriteria(data);
    if (searchCriteria) {
      await fub.createEvent({
        source: 'website',
        type: 'Property Search',
        message: `Search criteria:\n${searchCriteria}`,
        personId: person.id,
        data: {
          priceMin: data.priceMin,
          priceMax: data.priceMax,
          bedrooms: data.bedrooms,
          bathrooms: data.bathrooms,
          neighborhoods: data.neighborhoods,
        },
      });
    }

    return NextResponse.json(
      {
        success: true,
        personId: person.id,
        isNew: !existingPerson,
        message: existingPerson 
          ? 'Lead updated successfully' 
          : 'Lead created successfully',
      },
      {
        headers: getRateLimitHeaders(rateLimit),
      }
    );

  } catch (error) {
    console.error('[Lead Capture] Error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to capture lead',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

/**
 * Enrich source with UTM parameters and referrer
 */
function enrichSource(source: string | undefined, request: NextRequest): string {
  const url = new URL(request.url);
  
  // Check UTM parameters
  const utmSource = url.searchParams.get('utm_source');
  const utmMedium = url.searchParams.get('utm_medium');
  const utmCampaign = url.searchParams.get('utm_campaign');

  if (utmSource) {
    return `${utmSource}${utmMedium ? `/${utmMedium}` : ''}${utmCampaign ? `/${utmCampaign}` : ''}`;
  }

  // Check referrer
  const referrer = request.headers.get('referer');
  if (referrer) {
    try {
      const refUrl = new URL(referrer);
      if (!refUrl.hostname.includes('heyberkshire.com')) {
        return `referral/${refUrl.hostname}`;
      }
    } catch (e) {
      // Invalid URL
    }
  }

  return source || 'website/direct';
}

/**
 * Get source-specific tag
 */
function getSourceTag(source?: string): string | null {
  if (!source) return null;

  const lowerSource = source.toLowerCase();

  if (lowerSource.includes('facebook')) return 'facebook-lead';
  if (lowerSource.includes('google')) return 'google-lead';
  if (lowerSource.includes('zillow')) return 'zillow-lead';
  if (lowerSource.includes('realtor')) return 'realtor-lead';
  if (lowerSource.includes('instagram')) return 'instagram-lead';
  
  return null;
}

/**
 * Get property-specific tags
 */
function getPropertyTags(data: LeadCaptureRequest): string[] {
  const tags: string[] = [];

  // Neighborhood tags
  if (data.neighborhoods) {
    tags.push(...data.neighborhoods);
  }

  // Budget tags
  if (data.priceMax) {
    if (data.priceMax > 1000000) {
      tags.push('luxury');
    } else if (data.priceMax < 300000) {
      tags.push('first-time-buyer');
    }
  }

  // Property type tags
  if (data.propertyType) {
    tags.push(data.propertyType.toLowerCase());
  }

  // Financing tags
  if (data.preApproved) {
    tags.push('pre-approved');
  }

  // Timeline tags
  if (data.timeline) {
    const lowerTimeline = data.timeline.toLowerCase();
    if (lowerTimeline.includes('immediately') || lowerTimeline.includes('asap')) {
      tags.push('urgent');
    }
  }

  return tags;
}

/**
 * Build search criteria summary
 */
function buildSearchCriteria(data: LeadCaptureRequest): string | null {
  const criteria: string[] = [];

  if (data.propertyType) {
    criteria.push(`Type: ${data.propertyType}`);
  }

  if (data.priceMin || data.priceMax) {
    const min = data.priceMin ? `$${data.priceMin.toLocaleString()}` : 'Any';
    const max = data.priceMax ? `$${data.priceMax.toLocaleString()}` : 'Any';
    criteria.push(`Price: ${min} - ${max}`);
  }

  if (data.bedrooms) {
    criteria.push(`Bedrooms: ${data.bedrooms}+`);
  }

  if (data.bathrooms) {
    criteria.push(`Bathrooms: ${data.bathrooms}+`);
  }

  if (data.neighborhoods && data.neighborhoods.length > 0) {
    criteria.push(`Areas: ${data.neighborhoods.join(', ')}`);
  }

  if (data.timeline) {
    criteria.push(`Timeline: ${data.timeline}`);
  }

  if (data.financing) {
    criteria.push(`Financing: ${data.financing}`);
  }

  return criteria.length > 0 ? criteria.join('\n') : null;
}
