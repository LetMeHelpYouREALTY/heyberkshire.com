/**
 * Unique FAQ interiors per buyer-intent path.
 * Questions are desk/tour/program intent, not a swapped "How much down
 * payment" template. January 2026 / published loan figures stay in answers
 * only. Fair Housing: named campuses and commute minutes, no "best
 * neighborhood" or "desirable area." Dated 2026-09-15.
 */

export type BuyerFaqItem = {
  q: string;
  a: string;
};

export type BuyerFaqCopy = {
  h2: string;
  items: [BuyerFaqItem, BuyerFaqItem, BuyerFaqItem, BuyerFaqItem];
};

export const buyerFaqs: Record<string, BuyerFaqCopy> = {
  "/buyers": {
    h2: "Pre-approval and first-tour routing — not a generic Las Vegas FAQ",
    items: [
      {
        q: "Where does buyer-agent onboarding start before the first tour?",
        a: "At 9406 W Lake Mead Blvd, Suite 100. RealScout does matching; we sequence the drives and the offer. Call (702) 222-1964 when pre-approval is in hand.",
      },
      {
        q: "What down-payment types did this page last publish for Las Vegas?",
        a: "FHA 3.5%, conventional typically 3–20%, VA 0% for eligible veterans, USDA 0% where rural rules apply. Nevada down-payment assistance exists for qualified first-time buyers — confirm current program amounts with the lender we introduce. Not a live quote.",
      },
      {
        q: "Do you represent buyers on new construction if I walk a model first?",
        a: "Register Dr. Jan at Suite 100 before the first model visit. Most Las Vegas and Henderson builders require your agent on that first visit. The builder typically pays the buyer-broker fee; she still reviews the contract and upgrades for you. Call (702) 222-1964.",
      },
      {
        q: "How do you sequence Summerlin vs Henderson on a first-tour day?",
        a: "Summerlin first (10–15 minutes from Suite 100), Henderson second (25–35 minutes via I-215 east). Named campuses we time by street: Palo Verde High School, Coronado High School, Arbor View High School. No ratings. Call (702) 222-1964.",
      },
    ],
  },
  "/buyers/first-time-buyers": {
    h2: "FHA, VA, and Nevada assistance — first-time questions at Suite 100",
    items: [
      {
        q: "What paperwork do we review at Suite 100 before an FHA or VA tour?",
        a: "Lender intro, program checklist, and pre-approval status at 9406 W Lake Mead Blvd, Suite 100. Then we schedule model or resale tours. Call (702) 222-1964.",
      },
      {
        q: "What 2026 FHA loan limit did this page last publish for Clark County?",
        a: "This page last published $498,257 for a single-family home in Clark County for 2026. That figure is not a live underwriting quote — confirm with the lender the week you write an offer.",
      },
      {
        q: "Which entry ZIPs do we compare by square footage and commute?",
        a: "North Las Vegas, Mountains Edge, and Centennial Hills are common entry ZIPs on this page. We map Arbor View High School and Legacy High School by listing address at ccsd.net/zoning. Ask for current list ranges the week you tour — we do not invent a live median here.",
      },
      {
        q: "Do first-time buyers pay Dr. Jan's commission on resale or new construction?",
        a: "Buyer-broker fees on resale are typically paid from the listing side; new-construction builders usually pay the buyer agent if you registered before the first model visit. Confirm the fee exhibit in writing. Representation is not a DIY model-row walk. Call (702) 222-1964.",
      },
    ],
  },
  "/buyers/california-relocator": {
    h2: "California net proceeds vs a three-day Las Vegas itinerary",
    items: [
      {
        q: "How do we turn California sale proceeds into a Las Vegas tour week?",
        a: "We compare your California net to Las Vegas ZIP targets at Suite 100 or on video, then lock a concentrated Summerlin-then-Henderson week so you are not flying in for a random open-house hopscotch. Call (702) 222-1964.",
      },
      {
        q: "What Nevada tax fact vs remaining costs did this page last publish?",
        a: "Nevada has no state income tax. Property tax and insurance still apply. This page previously published California income-tax brackets of 9.3%–13.3% and 40–60% lower home prices as a planning range — not a personalized tax opinion. Confirm with your CPA.",
      },
      {
        q: "Which named campuses do we time on Day 1 vs Day 2 of a relocator itinerary?",
        a: "Day 1 Summerlin: Palo Verde High School commute checks. Day 2 Henderson: Coronado High School or Green Valley High School by street. Day 3 is 55+ or new construction if that is the brief. No ratings.",
      },
      {
        q: "What did this page last publish about flights from Harry Reid to California?",
        a: "Harry Reid International (LAS) has frequent flights to LAX, SFO, and SAN on Southwest, United, and other carriers. Prior copy put flight time at about 1–1.5 hours. Re-check the airline the week you book.",
      },
    ],
  },
  "/buyers/luxury-homes-las-vegas": {
    h2: "Private luxury search — gate codes stay off group texts",
    items: [
      {
        q: "Do Ridges gate codes go on a group text from this luxury search page?",
        a: "No. The Ridges is typically 15–20 minutes from Suite 100. Gate codes and off-market windows are confirmed at 9406 W Lake Mead Blvd, Suite 100. We do not send a PDF of 40 estates. Call (702) 222-1964.",
      },
      {
        q: "What December 2025 luxury median did this page last publish?",
        a: "This page last published a December 2025 luxury median of $1.45 million, with cash buyers around 60% of luxury transactions and 161% appreciation since 2015 as a previously published national-rank note. Confirm live MLS before an offer.",
      },
      {
        q: "Which luxury campuses do we sequence from Suite 100 vs a Henderson block?",
        a: "West-valley: The Ridges from this office pin. Henderson luxury (MacDonald Highlands, Ascaya) is a separate east block. Strip corridor high-rises are a third loop. Silverado High School commute is a Henderson luxury check when the listing street pulls that way.",
      },
      {
        q: "How is this search page different from the /luxury-homes hub?",
        a: "This URL is the buyer luxury search (H1: Private Luxury Home Search in Las Vegas). The /luxury-homes hub is listing-or-search intake for either side. Tell Dr. Jan the view you want — Strip, Red Rock, or golf — then we time one campus, not forty PDFs.",
      },
    ],
  },
};
