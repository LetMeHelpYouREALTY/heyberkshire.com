/**
 * Single source of truth for NAP, phones, hours, maps, and social.
 * CTA line: (702) 222-1964 — client-facing call buttons.
 * Office/GBP NAP: (702) 500-1942 — footer schema and Google Business match.
 */

/** Canonical production origin for heyberkshire (www, not apex). */
export const HEYBERKSHIRE_CANONICAL = "https://www.heyberkshire.com";

/** Normalized hostname → canonical origin (when env is unset). */
export const HOST_CANONICAL_ORIGINS: Record<string, string> = {
  "heyberkshire.com": HEYBERKSHIRE_CANONICAL,
};

export function normalizeHostname(hostname: string): string {
  return hostname
    .replace(/^www\./i, "")
    .split(":")[0]
    .toLowerCase();
}

/**
 * Site origin for canonical, og:url, and JSON-LD.
 * 1) NEXT_PUBLIC_SITE_URL when set
 * 2) Host map (heyberkshire → www) or https://{host} for other live domains
 * 3) HeyBerkshire www fallback (never bare apex)
 */
export function resolveSiteUrl(hostname?: string | null): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  const clean = normalizeHostname(hostname ?? "");
  if (clean && clean !== "localhost" && !clean.endsWith(".vercel.app")) {
    return HOST_CANONICAL_ORIGINS[clean] ?? `https://${clean}`;
  }

  return HEYBERKSHIRE_CANONICAL;
}

/** Build-time default for sitemap/robots; set NEXT_PUBLIC_SITE_URL on each Vercel project. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  HEYBERKSHIRE_CANONICAL;

export const ctaPhone = {
  display: "(702) 222-1964",
  displayShort: "702-222-1964",
  tel: "+17022221964",
  href: "tel:+17022221964",
} as const;

export const officePhone = {
  display: "(702) 500-1942",
  displayShort: "702-500-1942",
  tel: "+17025001942",
  href: "tel:+17025001942",
} as const;

export const nap = {
  name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
  shortName: "Dr. Jan Duffy",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
  license: "S.0197614.LLC",
  email: "homes@heyberkshire.com",
  emailHref: "mailto:homes@heyberkshire.com",
  street: "9406 W Lake Mead Blvd, Suite 100",
  city: "Las Vegas",
  state: "NV",
  zip: "89134",
  fullAddress: "9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134",
} as const;

export const geo = {
  /** Matches GBP pin */
  latitude: 36.1941,
  longitude: -115.2678,
} as const;

export const businessHours = [
  {
    day: "Monday",
    opens: "09:00",
    closes: "18:00",
    label: "9:00 AM – 6:00 PM",
  },
  {
    day: "Tuesday",
    opens: "09:00",
    closes: "18:00",
    label: "9:00 AM – 6:00 PM",
  },
  {
    day: "Wednesday",
    opens: "09:00",
    closes: "18:00",
    label: "9:00 AM – 6:00 PM",
  },
  {
    day: "Thursday",
    opens: "09:00",
    closes: "18:00",
    label: "9:00 AM – 6:00 PM",
  },
  {
    day: "Friday",
    opens: "09:00",
    closes: "18:00",
    label: "9:00 AM – 6:00 PM",
  },
  {
    day: "Saturday",
    opens: "10:00",
    closes: "16:00",
    label: "10:00 AM – 4:00 PM",
  },
  { day: "Sunday", opens: null, closes: null, label: "By appointment" },
] as const;

export const hoursSummary =
  "Mon–Fri 9am–6pm · Sat 10am–4pm · Sun by appointment";

export const maps = {
  embedSrc:
    "https://maps.google.com/maps?q=9406+W+Lake+Mead+Blvd+Suite+100+Las+Vegas+NV+89134&z=15&output=embed",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=9406+W+Lake+Mead+Blvd+Suite+100,+Las+Vegas,+NV+89134",
  placeUrl:
    "https://www.google.com/maps/search/?api=1&query=9406+W+Lake+Mead+Blvd+Suite+100+Las+Vegas+NV+89134",
} as const;

export const googleReviewsUrl =
  "https://www.google.com/search?q=Dr+Jan+Duffy+Berkshire+Hathaway+HomeServices+Nevada+Properties+reviews";

export const socialProfiles = {
  facebook: "https://www.facebook.com/drjanduffy",
  instagram: "https://www.instagram.com/drjanduffy",
  linkedin: "https://www.linkedin.com/in/drjanduffy",
  youtube: "https://www.youtube.com/@drjanduffy",
} as const;

export const realscout = {
  agentEncodedId: "QWdlbnQtMjI1MDUw",
  searchUrl: "https://drjanduffy.realscout.com/",
  scriptSrc: "https://em.realscout.com/widgets/realscout-web-components.esm.js",
} as const;

export const calendly = {
  showingUrl: "https://calendly.com/drjanduffy/showing",
} as const;
