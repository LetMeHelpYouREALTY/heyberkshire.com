/**
 * Unique process-step / Why-BHHS interiors — not swapped Trusted Brand,
 * Global Network, or Get Pre-Approved templates.
 * Fair Housing: square footage, amenities, named campuses, commute minutes.
 * Dated 2026-09-15.
 */

export type ProcessStep = {
  title: string;
  body: string;
};

export type ProcessCopy = {
  h2: string;
  body: string;
  steps: ProcessStep[];
};

export const processSteps: Record<string, ProcessCopy[]> = {
  "/buyers": [
    {
      h2: "Five buyer clocks from Suite 100, not a copied MLS-search loop",
      body: "This page is representation: lender letter, two-ZIP tours, inspections, and occupancy. Live inventory search lives on /listings. Call (702) 500-1942. 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134.",
      steps: [
        {
          title: "Lender letter before the first showing",
          body: "FHA, VA, conventional, and down-payment programs are compared at the desk so the first appointment has a number. We do not tour without a letter.",
        },
        {
          title: "Beds, baths, and square footage on the saved search",
          body: "RealScout holds the live MLS. We set filters at Suite 100 so alerts match the budget on the letter, not a wish list.",
        },
        {
          title: "Two-ZIP tour, not twelve",
          body: "Summerlin is 10–15 minutes from this pin. Henderson is 25–35. We sequence one west loop or one east loop — not both plus North Las Vegas on day one.",
        },
        {
          title: "Inspection, appraisal, and HOA docs in writing",
          body: "Repair credits and occupancy dates are written at 9406 W Lake Mead Blvd. Named campuses (Palo Verde, Coronado, Arbor View) are commute minutes by address at ccsd.net/zoning.",
        },
        {
          title: "Keys after the occupancy date is on the calendar",
          body: "Typical close is 30–45 days from acceptance. Call (702) 500-1942 when the letter is in hand.",
        },
      ],
    },
  ],
  "/listings": [
    {
      h2: "Filter this MLS, save addresses, then book — offer math lives on /buyers",
      body: "This hub is inventory. Pre-approval, inspections, and closing are the buyers page. Agent ID QWdlbnQtMjI1MDUw. Call (702) 500-1942 when two addresses are tour-ready.",
      steps: [
        {
          title: "Set price and bed filters before you scroll",
          body: "Live MLS updates here. Do not screenshot 40 cards. Filter beds, baths, and square footage first.",
        },
        {
          title: "Open HOA dues and lot size on the listing card",
          body: "HOA packets and square footage beat a photo caption. MLS disclaimer and listing attribution stay on this page.",
        },
        {
          title: "Save a shortlist of addresses, not a camera roll",
          body: "RealScout saves the search. We sequence Summerlin, Henderson, or 55+ from 9406 W Lake Mead Blvd, Suite 100.",
        },
        {
          title: "Book the showing clock, not a random open-house hopscotch",
          body: "Call (702) 500-1942 with the saved-search link. Same-day tours start at this pin. Do not add twelve ZIPs to one afternoon.",
        },
        {
          title: "Leave the offer, inspection, and keys on the buyers page",
          body: "This URL is search chassis. Representation, lender letters, and occupancy dates are /buyers. Office/GBP (702) 500-1942.",
        },
      ],
    },
  ],
  "/services": [
    {
      h2: "Intake, MLS filters, and closing paperwork — four clocks, one west-valley desk",
      body: "Buyer, listing, 55+, and relocation files start at 9406 W Lake Mead Blvd, Suite 100 so showing routes and paperwork share one start. Call (702) 500-1942.",
      steps: [
        {
          title: "Intake on address, timeline, and occupancy",
          body: "Bring pre-approval or an APN. We map commute minutes before any tour. Sunday appointments are booked, not assumed.",
        },
        {
          title: "MLS filters or listing date written down",
          body: "RealScout does matching. We write the filters or the photographer date so the file is not a slogan.",
        },
        {
          title: "Showings or seller photos executed from this pin",
          body: "West loop or Henderson loop, not both plus a north-valley add-on on day one. Follow Up Boss is the CRM — native RealScout sync.",
        },
        {
          title: "Closing with keys, utilities, and HOA transfer",
          body: "Keys after occupancy is on the calendar. Call (702) 500-1942.",
        },
      ],
    },
    {
      h2: "What actually goes on the contract",
      body: "Dr. Duffy Group career sales: $127M+. Call (702) 500-1942.",
      steps: [
        {
          title: "Brokerage line on every listing and buyer agreement",
          body: "Dr. Jan Duffy, licensed since 2008. 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Office/GBP (702) 500-1942.",
        },
        {
          title: "Written disclosure standards on every file",
          body: "Ethics and disclosure are paperwork, not a badge. We review them at the desk before you sign.",
        },
        {
          title: "Referral desks for inbound California and outbound states",
          body: "Destination agents are briefed from this office. Local showings still start at Suite 100 — 10–15 minutes to most Summerlin villages.",
        },
      ],
    },
  ],
  "/why-berkshire-hathaway": [
    {
      h2: "Brokerage, syndication, and photography — named on the listing file",
      body: "Brand questions are answered on-site: who photographs, who writes remarks, who negotiates. Call (702) 500-1942.",
      steps: [
        {
          title: "Your listing agreement",
          body: "The brokerage on the contract is Samples are reviewed at 9406 W Lake Mead Blvd, Suite 100.",
        },
        {
          title: "Listing syndication beyond the local MLS",
          body: "Syndication is scoped in writing before photographer day. We do not promise a portal you cannot name.",
        },
        {
          title: "Drone, floor plans, and paid placement scoped in writing",
          body: "Marketing is a punch list, not a slogan. HOA drone rules are confirmed before listing day.",
        },
        {
          title: "Disclosure packet on the file before you sign",
          body: "Ask who writes remarks and who negotiates. The work is the agent; the brokerage is on the page.",
        },
        {
          title: "Who does the work, not a slogan",
          body: "Financial backing is the parent company name. Local showing still starts at Suite 100.",
        },
        {
          title: "Closed-file street comps you can ask for at the desk",
          body: "Ask for recent closes on your street. Call (702) 500-1942. We will not invent a price.",
        },
      ],
    },
  ],
  "/contact": [
    {
      h2: "What happens after you call the Lake Mead Blvd desk",
      body: "Walk-ins during posted hours are welcome at Suite 100. Calendly showings can start here and continue to the property. Call or text (702) 500-1942. Email homes@heyberkshire.com for documents — not listing keys.",
      steps: [
        {
          title: "A named agent, not a round-robin call center",
          body: "Dr. Jan Duffy, Las Vegas REALTOR®. The Maps pin is 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134.",
        },
        {
          title: "Same-day reply on the number you left",
          body: "Call (702) 500-1942. Hours: Mon–Fri 9am–6pm, Sat 10am–4pm, Sunday by appointment.",
        },
        {
          title: "Showing or listing appointment on the calendar",
          body: "Calendly is on this page. Bring photo ID, lender contact, and target ZIPs. We map commute minutes before the first tour.",
        },
      ],
    },
  ],
  "/luxury-homes": [
    {
      h2: "How a $1M+ listing is marketed from Suite 100",
      body: "Photography, gate access, and off-market windows are scoped at 9406 W Lake Mead Blvd before any public caption. Drive times: Ridges 15–20 minutes, Southern Highlands 25–35, Lake Las Vegas 35–45. Call (702) 500-1942.",
      steps: [
        {
          title: "Named brokerage on the listing agreement",
          body: "Buyer-only search lives at /buyers/luxury-homes-las-vegas.",
        },
        {
          title: "Off-market and private showing options in writing",
          body: "Gate lists stay off group texts. We confirm HOA vendor lists and drone rules before listing day.",
        },
        {
          title: "Marketing that stays off social until you approve it",
          body: "Paid placement and social are a punch list you initial. Square footage and HOA dues beat a slogan.",
        },
        {
          title: "A dedicated listing coordinator, not a concierge caption",
          body: "Who photographs, who writes remarks, who negotiates — named at the desk. Call (702) 500-1942.",
        },
      ],
    },
  ],
};
