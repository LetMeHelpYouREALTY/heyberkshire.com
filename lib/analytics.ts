/**
 * GA4 measurement IDs and lead event names.
 * One deployment serves every domain in DOMAIN_CONFIGS, so each host gets its
 * own ID from GA_MEASUREMENT_IDS ("heyberkshire.com=G-XXXX,drjanduffy.com=G-YYYY").
 * Hosts without an ID load no GA tag.
 */

import { normalizeHostname } from "./contact";

/** Shared key event names, kept identical across every site. */
export const LEAD_EVENTS = {
  generateLead: "generate_lead",
  phoneClick: "phone_click",
  textClick: "text_click",
  realscoutSearch: "realscout_search",
  homeValueRequest: "home_value_request",
  bookAppointment: "book_appointment",
} as const;

export type LeadEventName = (typeof LEAD_EVENTS)[keyof typeof LEAD_EVENTS];

const MEASUREMENT_ID = /^G-[A-Z0-9]+$/;

export function parseMeasurementIds(
  raw: string | undefined,
): Record<string, string> {
  const ids: Record<string, string> = {};
  for (const pair of (raw || "").split(",")) {
    const [host, id] = pair.split("=").map((part) => part?.trim());
    if (!host || !id || !MEASUREMENT_ID.test(id)) continue;
    ids[normalizeHostname(host)] = id;
  }
  return ids;
}

export function getMeasurementId(hostname: string): string | undefined {
  if (!hostname) return undefined;
  return parseMeasurementIds(process.env.GA_MEASUREMENT_IDS)[
    normalizeHostname(hostname)
  ];
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
