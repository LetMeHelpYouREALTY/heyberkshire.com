/**
 * Unique /faq hub categories. Each category has its own H2 and questions
 * that are desk/tour/NAP intent, not city-name swaps. January 2026 figures
 * already published on this page stay in answers only. Fair Housing: named
 * campuses and commute minutes, no "best area" or "best investment."
 * Dated 2026-09-15.
 */

import type { FaqHubCategoryId } from "@/lib/media";

export type FaqHubItem = {
  q: string;
  a: string;
};

export type FaqHubCategory = {
  id: FaqHubCategoryId;
  h2: string;
  items: FaqHubItem[];
};

export const faqHubCategories: FaqHubCategory[] = [
  {
    id: "bhhs",
    h2: "BHHS Nevada Properties at Suite 100 — not a national slogan",
    items: [
      {
        q: "Where do I see local BHHS samples before I pick an agent?",
        a: "At 9406 W Lake Mead Blvd, Suite 100. Photography, remarks, and who answers the phone are shown here. Call (702) 222-1964.",
      },
      {
        q: "Is Berkshire Hathaway HomeServices owned by Warren Buffett?",
        a: "BHHS is part of HSF Affiliates LLC, a joint venture of Berkshire Hathaway Inc. and HomeServices of America. Local work is Dr. Jan Duffy, license S.0197614.LLC, BHHS Nevada Properties.",
      },
      {
        q: "Which cities does this office actually tour from Lake Mead Blvd?",
        a: "Las Vegas, Henderson, North Las Vegas, and Clark County streets we can time from Suite 100. Specialized pages exist for Summerlin, The Ridges, Skye Canyon, Southern Highlands, Green Valley, and Inspirada. Call (702) 222-1964.",
      },
      {
        q: "Is BHHS commission posted as a higher rate on this site?",
        a: "No. Commission is negotiated in writing at the appointment. We walk every cost at Suite 100. Call (702) 222-1964.",
      },
    ],
  },
  {
    id: "buying",
    h2: "Pre-approval, registration, and first-tour routing — buyer questions",
    items: [
      {
        q: "How long from offer acceptance to keys did this page last publish?",
        a: "Typically 30–45 days. Cash can close in about 7–14 days when title is clean. Timeline still depends on financing, inspections, and contingencies. Call (702) 222-1964.",
      },
      {
        q: "Do I need a pre-approval before the first Suite 100 meeting?",
        a: "A letter helps on competitive streets, but the first desk meeting can start without it. We introduce local lenders from this office. Call (702) 222-1964.",
      },
      {
        q: "What down-payment types did this hub last publish?",
        a: "FHA 3.5%, conventional typically 3–20%, VA 0% for eligible veterans. Nevada assistance exists for qualified first-time buyers — confirm current program amounts with the lender. Not a live quote.",
      },
      {
        q: "Do I register Dr. Jan before walking a builder model?",
        a: "Yes. Most Las Vegas and Henderson builders require your agent on the first visit. Start at Suite 100, then the model row. Call (702) 222-1964.",
      },
    ],
  },
  {
    id: "selling",
    h2: "CMA at the desk, then photos at the house — selling questions",
    items: [
      {
        q: "Where is a listing CMA pulled before photography is booked?",
        a: "At Suite 100, then we walk the house. Overpriced homes sit. We price to recent closes. Call (702) 222-1964.",
      },
      {
        q: "What January 2026 days-on-market figures did this hub last publish?",
        a: "About 28 days for well-priced Las Vegas listings and 45+ days for luxury. Those are snapshots, not a guarantee. Confirm live MLS the week you list.",
      },
      {
        q: "What listing prep does this desk actually assign?",
        a: "A checklist per house: repairs, paint if comps need it, then BHHS photography. Staging is a tactic, not a slogan. Call (702) 222-1964.",
      },
      {
        q: "How does BHHS market a listing once photos are done?",
        a: "Professional photography, virtual tours, MLS syndication, BHHS network exposure, and paid digital. Scope is set at Suite 100 before the photographer is booked.",
      },
    ],
  },
  {
    id: "investment",
    h2: "Rent comps and HOA rental caps before the investor drive",
    items: [
      {
        q: "Where are rent comps and HOA rental caps reviewed?",
        a: "At Suite 100 before you fly in. HOA rental caps kill deals. Then we tour North Las Vegas, Henderson, or southwest ZIP clusters. Call (702) 222-1964.",
      },
      {
        q: "What cash-on-cash range did this hub last publish?",
        a: "Prior copy put typical Las Vegas rentals around 5–8% cash-on-cash. That is not a live quote on a specific APN. Bring target cap rate and cash-to-close to the desk.",
      },
      {
        q: "Do you work 1031 identification windows from this office?",
        a: "Yes. We work with qualified intermediaries and the 45-day identification window. Call (702) 222-1964.",
      },
    ],
  },
  {
    id: "relocating",
    h2: "Three-day inbound itinerary questions — Summerlin, then Henderson",
    items: [
      {
        q: "Can BHHS coordinate the origin-city sale with this office?",
        a: "Yes. Origin and destination agents are briefed from Suite 100 so both contracts share a calendar. Call (702) 222-1964.",
      },
      {
        q: "Which named campuses do we time on Day 1 vs Day 2?",
        a: "Day 1 Summerlin: Palo Verde High School commute checks. Day 2 Henderson: Coronado High School or Green Valley High School by street. Confirm the listing address at ccsd.net/zoning. No ratings.",
      },
      {
        q: "What Nevada vs California cost facts did this hub last publish?",
        a: "Prior copy put Las Vegas housing and living costs below many California metros, with no Nevada state income tax. Property tax and insurance still apply. Confirm with your tax advisor — not this snapshot.",
      },
    ],
  },
  {
    id: "working",
    h2: "How to reach Dr. Jan Duffy from this pin — working-with FAQ",
    items: [
      {
        q: "What license and brokerage should match GBP?",
        a: "Dr. Jan Duffy, license S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties. Never Janet as the agent name.",
      },
      {
        q: "Which number do I call vs the office/GBP line?",
        a: "Client CTA is (702) 222-1964. Office/GBP is (702) 500-1942. Email homes@heyberkshire.com. Address: 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134.",
      },
      {
        q: "What closed-volume snapshot did this hub last publish?",
        a: "This page last published $127M+ in closed transactions and 500+ clients served since 2008. Ask the desk for current production — do not treat that snapshot as a live ranking.",
      },
    ],
  },
];

export const faqHubAllItems = faqHubCategories.flatMap((category) =>
  category.items.map((item) => ({ question: item.q, answer: item.a }))
);
