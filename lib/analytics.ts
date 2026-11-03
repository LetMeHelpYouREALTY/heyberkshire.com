/**
 * GA4 measurement IDs and lead event names.
 * One deployment serves every domain in DOMAIN_CONFIGS, so each host gets its
 * own ID from GA_MEASUREMENT_IDS ("heyberkshire.com=G-XXXX,drjanduffy.com=G-YYYY").
 * GA_ROLLUP_MEASUREMENT_ID, when set, also reports every DOMAIN_CONFIGS host
 * (never previews or localhost) into one portfolio property. Hosts with neither load no GA tag.
 * Event names match the shared realtor kit (ga4/realtor-kit/RealtorAnalytics.tsx).
 */

import { normalizeHostname } from "./contact";
import { DOMAIN_CONFIGS } from "./domain-config";

/** Shared key event names, kept identical across every site. */
export const LEAD_EVENTS = {
  generateLead: "generate_lead",
  phoneClick: "phone_click",
  textClick: "text_click",
  emailClick: "email_click",
  realscoutSearch: "realscout_search",
  homeValueRequest: "home_value_request",
  bookAppointment: "book_appointment",
} as const;

export type LeadEventName = (typeof LEAD_EVENTS)[keyof typeof LEAD_EVENTS];

const MEASUREMENT_ID = /^G-[A-Z0-9]+$/;
const PLACEHOLDER_ID = "G-XXXXXXXXXX";

function isMeasurementId(id: string | undefined): id is string {
  return !!id && MEASUREMENT_ID.test(id) && id !== PLACEHOLDER_ID;
}

export function parseMeasurementIds(
  raw: string | undefined,
): Record<string, string> {
  const ids: Record<string, string> = {};
  for (const pair of (raw || "").split(",")) {
    const [host, id] = pair.split("=").map((part) => part?.trim());
    if (!host || !isMeasurementId(id)) continue;
    ids[normalizeHostname(host)] = id;
  }
  return ids;
}

/** The host's own ID, then the portfolio rollup ID; empty means no GA tag. */
export function getMeasurementIds(hostname: string): string[] {
  if (!hostname) return [];
  const host = normalizeHostname(hostname);
  const siteId = parseMeasurementIds(process.env.GA_MEASUREMENT_IDS)[host];
  const rollupId = process.env.GA_ROLLUP_MEASUREMENT_ID?.trim();
  const ids = [siteId];
  if (host in DOMAIN_CONFIGS && isMeasurementId(rollupId)) ids.push(rollupId);
  return Array.from(new Set(ids.filter(isMeasurementId)));
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/** Sends a GA4 event; a no-op when the host has no GA tag. */
export function trackEvent(
  name: LeadEventName,
  params: Record<string, unknown> = {},
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function")
    return;
  window.gtag("event", name, params);
}
