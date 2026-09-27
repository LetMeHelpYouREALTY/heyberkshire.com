/**
 * Unique FAQ interiors per seller-intent path.
 * Questions are desk/CMA/calendar intent, not a swapped "How long will it
 * take to sell" template. January 2026 figures already published on these
 * pages stay in answers only. Fair Housing: named campuses and commute
 * minutes, no "best area" or familial-status targeting. Dated 2026-09-15.
 */

export type SellerFaqItem = {
  q: string;
  a: string;
};

export type SellerFaqCopy = {
  h2: string;
  items: [SellerFaqItem, SellerFaqItem, SellerFaqItem, SellerFaqItem];
};

export const sellerFaqs: Record<string, SellerFaqCopy> = {
  "/sellers": {
    h2: "CMA at Suite 100, then photos — not a generic selling FAQ",
    items: [
      {
        q: "Where does listing prep start before the photographer is booked?",
        a: "At 9406 W Lake Mead Blvd, Suite 100. Comps are pulled here, then we walk the house. Overpriced homes sit. We price to recent closes, then book BHHS photography. Call (702) 222-1964.",
      },
      {
        q: "What January 2026 days-on-market figure did this page last publish?",
        a: "This page last published about 28 days for well-priced Las Vegas listings and 45+ days for $1 million-plus product. Those are snapshots, not a guarantee. Confirm live MLS the week you list.",
      },
      {
        q: "How does BHHS market a listing once photos are done?",
        a: "Professional photography, virtual tours, drone when the HOA allows it, MLS syndication, BHHS network exposure, and paid digital. Marketing scope is set at Suite 100 before the photographer is booked. Call (702) 222-1964.",
      },
      {
        q: "Are commission rates posted on this page?",
        a: "No. Commission is negotiated in writing at the listing appointment. We walk every cost at 9406 W Lake Mead Blvd, Suite 100. Call (702) 222-1964. Office/GBP line is (702) 500-1942.",
      },
    ],
  },
  "/sellers/move-up": {
    h2: "Contingent vs cash-to-close before you price the current house",
    items: [
      {
        q: "How do we time the sale and the next ZIP from Suite 100?",
        a: "We map the current home and the next street so both tours share 9406 W Lake Mead Blvd as the start. Contingent vs non-contingent is a numbers conversation, not a pep talk. Call (702) 222-1964.",
      },
      {
        q: "What equity range did this page last publish for 2015–2021 purchases?",
        a: "This page last published a planning range of about $100,000–$250,000+ if you bought between 2015 and 2021 with roughly 20–40% equity. That is not your CMA. Bring the APN to Suite 100.",
      },
      {
        q: "Do we list blind and then shop, or see the next street first?",
        a: "See the next street before you price the current one, or at least the same week. Two stops from this pin on tour days. Call (702) 222-1964.",
      },
      {
        q: "Which named campuses do we map if the next house is Summerlin vs Henderson?",
        a: "Palo Verde High School for many Summerlin streets; Coronado High School for many Henderson streets. Price the home, the drive, and recent comps — not a campus rating. Confirm the listing address at ccsd.net/zoning.",
      },
    ],
  },
  "/sellers/downsizing": {
    h2: "HOA packet and rec-campus walk — downsizing questions at Suite 100",
    items: [
      {
        q: "Can we list the larger home and preview 55+ the same afternoon?",
        a: "Yes. Sun City Summerlin is 10–15 minutes from Suite 100. We can list the larger home and walk a rec campus the same day so you are not guessing at square footage you have not measured. Call (702) 222-1964.",
      },
      {
        q: "What net-equity range did this page last publish for a 4–5 bedroom to 55+ move?",
        a: "This page last published a planning range of about $150,000–$350,000+ after costs when moving from a $650,000–$900,000 4–5 bedroom to a $400,000–$550,000 55+ or condo. Confirm with a CMA on your APN — not this range.",
      },
      {
        q: "How do we choose between Sun City Summerlin and a smaller resale with a yard?",
        a: "HOA packet, rec-campus use, yard maintenance, and drive time from 9406 W Lake Mead Blvd. Age-restriction rules are reviewed at the desk before the tour. Call (702) 222-1964.",
      },
      {
        q: "What occupancy rule do we review before a 55+ downsizing tour?",
        a: "HOPA 80/20 vs all-residents-55+ (Solera). Guest-stay limits are in the HOA packet — we do not publish a one-size guest slogan. Call (702) 222-1964.",
      },
    ],
  },
  "/sellers/relocation": {
    h2: "Lockbox after you leave — outbound sale questions from Suite 100",
    items: [
      {
        q: "If the job starts in three weeks, where does the listing file open?",
        a: "At Suite 100 the same day you call. We can list immediately, price to last month's closes, and manage lockbox access after you leave. This page last published 2–4 week urgent sales as possible, not promised. Call (702) 222-1964.",
      },
      {
        q: "Should the Las Vegas closing share a calendar with the next city?",
        a: "Yes. BHHS destination agents are briefed from this office so the sale and the next purchase share dates. Bring both contract drafts to 9406 W Lake Mead Blvd, Suite 100. Call (702) 222-1964.",
      },
      {
        q: "What did this page last publish about corporate buyouts vs open-market?",
        a: "Prior copy put corporate buyouts around 90–95% of appraised value. Sometimes the open market nets more after costs — that is a CMA, not a slogan. We write the comparison at the desk.",
      },
      {
        q: "How are showings handled after you have already left Las Vegas?",
        a: "Lockbox access, feedback, and offer presentation by video from Suite 100. Partially furnished often shows better than empty — we decide what to leave before you pack. Call (702) 222-1964.",
      },
    ],
  },
  "/sellers/divorce-probate": {
    h2: "Letters testamentary and showing windows — private-file questions",
    items: [
      {
        q: "Where are court dates and lockbox rules reviewed?",
        a: "By appointment at 9406 W Lake Mead Blvd, Suite 100. Court dates, attorney contacts, and access rules are not a public-lobby conversation. Call (702) 222-1964 to book a private slot.",
      },
      {
        q: "What Nevada probate timing did this page last publish?",
        a: "This page last published about 6–12 months for the probate process, with listing often possible after Letters Testamentary, and 30–60 days listing-to-close once the personal representative has authority. Confirm with the estate attorney — not this snapshot.",
      },
      {
        q: "What documents do we bring to the private appointment?",
        a: "Letters testamentary or court orders, HOA contacts, and a preferred showing window. Do not email sensitive orders to a shared inbox without a heads-up call. Call (702) 222-1964.",
      },
      {
        q: "How is listing price handled when parties disagree?",
        a: "We write an objective CMA both sides can read. If disagreement persists, a shared-cost appraisal can settle it. Neutral process, documented access, written offers. Call (702) 222-1964.",
      },
    ],
  },
};
