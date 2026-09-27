/**
 * Unique FAQ interiors for remaining conversion hubs: luxury listing
 * intake, inbound relocation, CMA/valuation, new construction, and
 * investment. Questions are desk/tour intent. Published January 2026
 * figures stay in answers only. Fair Housing: no "best area." Dated 2026-09-15.
 */

export type IntentFaqItem = {
  q: string;
  a: string;
};

export type IntentFaqCopy = {
  h2: string;
  items: [IntentFaqItem, IntentFaqItem, IntentFaqItem, IntentFaqItem];
};

export const intentFaqs: Record<string, IntentFaqCopy> = {
  "/luxury-homes": {
    h2: "Off-market windows and gate-code logistics — luxury FAQ",
    items: [
      {
        q: "Is this hub for listing intake, buyer search, or both?",
        a: "Both, scoped at Suite 100. H1 on this URL is listing-or-search intake. Buyer-only search lives at /buyers/luxury-homes-las-vegas. Call (702) 222-1964.",
      },
      {
        q: "What days-on-market did this page last publish for $1 million-plus listings?",
        a: "This page last published about 45 days for luxury vs about 28 days for the overall market snapshot. Exceptional, priced-to-comps product can move faster. Confirm live MLS the week you list or offer.",
      },
      {
        q: "Can a luxury listing stay off public MLS?",
        a: "Yes. Off-market and pocket windows are confirmed at 9406 W Lake Mead Blvd, Suite 100. Gate codes stay off group texts. We confirm HOA vendor lists and drone rules before listing day. Call (702) 222-1964.",
      },
      {
        q: "How far are The Ridges, Southern Highlands, and Lake Las Vegas from Suite 100?",
        a: "Ridges about 15–20 minutes, Southern Highlands 25–35, Lake Las Vegas 35–45. We pick one campus per afternoon so you are not recrossing the valley. Call (702) 222-1964.",
      },
    ],
  },
  "/relocation": {
    h2: "Day-1 Summerlin vs Day-2 Henderson — inbound questions at Suite 100",
    items: [
      {
        q: "What does a three-day inbound itinerary look like from Suite 100?",
        a: "Day 1 Summerlin (10–15 minutes from 9406 W Lake Mead Blvd). Day 2 Henderson (25–35 minutes via I-215 east). Day 3 55+ or new construction if that is the brief. Video first is possible; the tour week still starts here. Call (702) 222-1964.",
      },
      {
        q: "Which named campuses do we time on Day 1 vs Day 2?",
        a: "Day 1: Palo Verde High School commute checks in Summerlin. Day 2: Coronado High School or Green Valley High School by street in Henderson. Confirm the listing address at ccsd.net/zoning. No ratings.",
      },
      {
        q: "What Nevada vs California cost facts did this page last publish?",
        a: "Prior copy put Las Vegas housing and living costs about 30–40% below LA/Orange County and 50%+ below San Francisco, with no Nevada state income tax vs California rates up to 13.3%. That is a planning range, not a CPA letter. Confirm with your tax advisor.",
      },
      {
        q: "Do you coordinate the origin-city sale through BHHS?",
        a: "Yes. Destination and origin agents are briefed from this office so both contracts share a calendar. Call (702) 222-1964. Berkshire Hathaway HomeServices Nevada Properties is at 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134.",
      },
    ],
  },
  "/home-valuation": {
    h2: "Zestimate vs CMA — valuation questions at Suite 100",
    items: [
      {
        q: "Where are comps pulled before photos at the house?",
        a: "Bring the APN or address to 9406 W Lake Mead Blvd, Suite 100. Comps are pulled here before we drive for photos and pricing. Call (702) 222-1964. Office/GBP line is (702) 500-1942.",
      },
      {
        q: "What did this page last publish about Zestimate accuracy vs a CMA?",
        a: "This page last published that automated estimates can miss by 5–15% or more because they skip condition, upgrades, views, and lot. A CMA uses recent closed sales and current competition. Not a live quote for your APN until we pull it.",
      },
      {
        q: "Is a CMA the same as a lender appraisal?",
        a: "No. A CMA is the agent's market read for listing or offer strategy. An appraisal is a licensed-appraiser opinion, typically required by a lender. This page last published appraisal cost at about $400–$600. CMAs from this desk are the listing-decision tool.",
      },
      {
        q: "Do I need the house staged before the first valuation walk-through?",
        a: "No. An initial read can start from records and MLS. A brief walk-through catches upgrades a portal misses. Staging is a later listing tactic, not a requirement for the first CMA. Call (702) 222-1964.",
      },
    ],
  },
  "/new-construction": {
    h2: "Guest-registry first — builder-row questions before the models",
    items: [
      {
        q: "Do I register Dr. Jan at Suite 100 before the first model visit?",
        a: "Yes. Most Las Vegas and Henderson builders require your agent on the first visit. Sign the guest registry alone and you can forfeit buyer representation. Call (702) 222-1964. Start at 9406 W Lake Mead Blvd, Suite 100.",
      },
      {
        q: "What January 2026 builder incentive range did this page last publish?",
        a: "This page last published about 4–6% toward closing costs, some rate buydowns advertised as low as 4.99%, and upgrade packages in a $15,000–$50,000 range. Incentives change. Confirm the builder sheet the week you register — not this snapshot.",
      },
      {
        q: "Is the builder sales rep my agent?",
        a: "No. Builder reps work for the builder. Dr. Jan reviews the contract, lot premiums, and design-center extras for you. This page last published that builders typically pay the buyer-broker fee from their marketing budget when you registered first.",
      },
      {
        q: "Which builder corridors do we pick per tour day?",
        a: "One corridor per day: northwest (Skye Canyon) or south Henderson (Inspirada/Cadence), not both. Registration first, models second. Call (702) 222-1964.",
      },
    ],
  },
  "/investment-properties": {
    h2: "1031 windows and HOA rental caps — investment questions at the desk",
    items: [
      {
        q: "Where are rent comps and HOA rental caps reviewed before we drive?",
        a: "At Suite 100. HOA rental caps kill deals — we check them before you fly in. Then we tour North Las Vegas, Henderson, or southwest ZIP clusters. Call (702) 222-1964.",
      },
      {
        q: "What cap-rate range did this page last publish?",
        a: "This page last published typical cap rates around 4–6%, with separate appreciation commentary of about 4–5% in recent years. That is not a live cap-rate quote on a specific APN. Bring target cap rate and cash-to-close to the desk.",
      },
      {
        q: "Do you work 1031 identification windows from Suite 100?",
        a: "Yes. We work with qualified intermediaries and the 45-day identification window. BHHS's nationwide network is useful when exchanging into or out of Las Vegas. Call (702) 222-1964.",
      },
      {
        q: "Are North Las Vegas, Henderson, and Summerlin interchangeable for rentals?",
        a: "No. This page previously contrasted North Las Vegas for published cap-rate ranges, Summerlin for published appreciation, and Henderson as a mix — still a CMA per APN, not a slogan. Downtown mid-rise vs suburban 3/2 product is a separate loop.",
      },
    ],
  },
};
