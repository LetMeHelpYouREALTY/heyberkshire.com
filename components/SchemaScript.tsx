/**
 * SchemaScript Component
 * Clean JSON-LD structured data injection for Next.js 15
 *
 * Usage:
 * <SchemaScript schema={generateFAQSchema(faqs)} />
 * <SchemaScript schemas={[schema1, schema2]} />
 */

import { combineSchemas, schemaToJsonLd } from "@/lib/schema";
import { headers } from "next/headers";
import { absoluteUrl } from "@/lib/seo";
import { resolveSiteUrl } from "@/lib/contact";

interface SchemaScriptProps {
  /** Single schema object */
  schema?: Record<string, unknown>;
  /** Multiple schema objects (will be combined using @graph) */
  schemas?: Record<string, unknown>[];
  /** Optional id for the script tag */
  id?: string;
}

/**
 * Server component for injecting JSON-LD structured data
 * Can accept either a single schema or multiple schemas
 */
export default function SchemaScript({
  schema,
  schemas,
  id,
}: SchemaScriptProps) {
  // Determine the final schema to render
  let finalSchema: Record<string, unknown>;

  if (schemas && schemas.length > 0) {
    // Multiple schemas provided - combine them
    finalSchema = combineSchemas(...schemas);
  } else if (schema) {
    // Single schema provided
    finalSchema = schema;
  } else {
    // No schema provided - don't render anything
    return null;
  }

  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: schemaToJsonLd(finalSchema) }}
    />
  );
}

/**
 * Helper component for breadcrumb schema
 * Commonly used across all pages
 */
export async function BreadcrumbSchema({
  items,
}: {
  items: Array<{ name: string; url: string }>;
}) {
  const domain = headers().get("x-domain") || "";
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : absoluteUrl(item.url, domain),
    })),
  };

  return <SchemaScript schema={schema} id="breadcrumb-schema" />;
}

/**
 * Helper component for FAQ schema
 * Used on FAQ pages and sections
 */
export function FAQSchema({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return <SchemaScript schema={schema} id="faq-schema" />;
}

/**
 * Helper component for Review/Rating schema
 * Used on pages with testimonials
 */
export async function ReviewSchema({
  reviews,
}: {
  reviews?: Array<{
    author: string;
    rating: number;
    text: string;
    date?: string;
  }>;
}) {
  const domain = headers().get("x-domain") || "";
  const siteUrl = resolveSiteUrl(domain);
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${siteUrl}#organization`,
    name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
  };

  if (reviews && reviews.length > 0) {
    schema.review = reviews.map((review) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: review.author,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: review.rating.toString(),
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: review.text,
      datePublished: review.date || new Date().toISOString().split("T")[0],
    }));
  }

  return <SchemaScript schema={schema} id="review-schema" />;
}

/**
 * Helper component for Place/Neighborhood schema
 */
export async function NeighborhoodSchema({
  name,
  description,
  slug,
  latitude,
  longitude,
  containedIn = "Las Vegas",
}: {
  name: string;
  description: string;
  slug: string;
  latitude?: number;
  longitude?: number;
  containedIn?: string;
}) {
  const domain = headers().get("x-domain") || "";
  const siteUrl = resolveSiteUrl(domain);
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${siteUrl}/neighborhoods/${slug}#place`,
    name: `${name}, Las Vegas`,
    description,
    address: {
      "@type": "PostalAddress",
      addressLocality: containedIn,
      addressRegion: "NV",
      addressCountry: "US",
    },
    containedInPlace: {
      "@type": "City",
      name: containedIn,
      addressRegion: "NV",
    },
  };

  if (latitude && longitude) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude,
      longitude,
    };
  }

  return <SchemaScript schema={schema} id="neighborhood-schema" />;
}

/**
 * Helper component for 55+ Community schema (ResidentialComplex)
 */
export function SeniorCommunitySchema({
  name,
  description,
  numberOfHomes,
  amenities,
  priceRange,
  hoaFees,
  latitude,
  longitude,
  city = "Henderson",
}: {
  name: string;
  description: string;
  numberOfHomes: number;
  amenities: Array<{ name: string; description?: string }>;
  priceRange: string;
  hoaFees?: string;
  latitude?: number;
  longitude?: number;
  city?: string;
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "ResidentialComplex",
    name,
    description,
    address: {
      "@type": "PostalAddress",
      addressLocality: city,
      addressRegion: "NV",
      addressCountry: "US",
    },
    numberOfAccommodationUnits: numberOfHomes,
    amenityFeature: amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity.name,
      value: true,
      ...(amenity.description && { description: amenity.description }),
    })),
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Price Range",
        value: priceRange,
      },
      {
        "@type": "PropertyValue",
        name: "Age Restriction",
        value: "55+",
      },
    ],
  };

  if (hoaFees) {
    (schema.additionalProperty as Array<Record<string, unknown>>).push({
      "@type": "PropertyValue",
      name: "Monthly HOA Fees",
      value: hoaFees,
    });
  }

  if (latitude && longitude) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude,
      longitude,
    };
  }

  return <SchemaScript schema={schema} id="community-schema" />;
}
