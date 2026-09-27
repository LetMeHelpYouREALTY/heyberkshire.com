/**
 * Unique leftover H2 interiors — not swapped Premier / Core Services /
 * Why Active Adults / Local Expert templates.
 * Fair Housing: square footage, amenities, named campuses, commute minutes.
 * Dated 2026-09-15.
 */

export type LeftoverPin = {
  name: string;
  note: string;
};

export type LeftoverCopy = {
  h2: string;
  body: string;
  pins: LeftoverPin[];
};

export const leftoverBands: Record<string, LeftoverCopy[]> = {
  "/": [
    {
      h2: "GBP 4.9 on this homepage — open Google Reviews from the Maps pin, then book Suite 100",
      body: "Reviews on this URL support Maps ranking for 9406 W Lake Mead Blvd, Suite 100. Call (702) 222-1964. Office/GBP (702) 500-1942. Named campuses and commute minutes beat a slogan row.",
      pins: [
        {
          name: "4.9 on the pin",
          note: "Star rating cited on this page. Write the review on the Google listing that matches this NAP.",
        },
        {
          name: "Directions",
          note: "Visitor parking faces W Lake Mead Blvd. Mon–Fri 9am–6pm, Sat 10am–4pm, Sunday by appointment.",
        },
        {
          name: "Two-ZIP clock",
          note: "Summerlin 10–15 minutes. Henderson 25–35. We do not tour twelve ZIPs from a review caption.",
        },
        {
          name: "License on the card",
          note: "S.0197614.LLC. Berkshire Hathaway HomeServices Nevada Properties. Client CTA (702) 222-1964.",
        },
      ],
    },
    {
      h2: "Call (702) 222-1964 from this homepage — Summerlin 10–15 or Henderson 25–35 from W Lake Mead Blvd",
      body: "The Maps pin is this desk. Live MLS is RealScout. We sequence the first loop from 9406 W Lake Mead Blvd, Suite 100. Office/GBP (702) 500-1942.",
      pins: [
        {
          name: "Buyer file",
          note: "Open /buyers. Lender letter, then two ZIPs. Palo Verde and Coronado commutes mapped by address.",
        },
        {
          name: "Listing file",
          note: "Open /sellers or /home-valuation. APN at the desk, then photos at the house.",
        },
        {
          name: "55+ packet",
          note: "Open /55-plus-communities. Occupancy rules before any clubhouse. Sun City Summerlin is 10–15 minutes.",
        },
        {
          name: "California inbound",
          note: "Open /buyers/california-relocator. Net sheet vs ZIP targets, then a three-day itinerary.",
        },
      ],
    },
  ],
  "/55-plus-communities/sun-city-anthem": [
    {
      h2: "Anthem Center 64,000 sq ft, then Liberty, Independence, and Heritage by elevation",
      body: "Sun City Anthem is 30–35 minutes from 9406 W Lake Mead Blvd, Suite 100. Occupancy rules are reviewed at the desk before the Henderson drive. Call (702) 222-1964. Do not mix this with a Summerlin 55+ morning.",
      pins: [
        {
          name: "Anthem Center",
          note: "About 64,000 sq ft: indoor and outdoor pools, fitness, tennis, pickleball, restaurant. First stop on this Henderson clock.",
        },
        {
          name: "Liberty",
          note: "Original phase near Anthem Center. Published January 2026 band starts near $350K. Confirm the week you tour.",
        },
        {
          name: "Independence",
          note: "Mid-elevation streets. Published band often $450K–$700K. McCullough Range views vary by lot — measure from the listing.",
        },
        {
          name: "Heritage",
          note: "Larger lots and custom product. Published band $700K–$1.2M. Call (702) 222-1964. Office/GBP (702) 500-1942.",
        },
      ],
    },
  ],
  "/55-plus-communities": [
    {
      h2: "Occupancy packets at Suite 100, then one rec campus — not a slogan grid",
      body: "HOPA occupancy is reviewed at 9406 W Lake Mead Blvd before we drive. Sun City Summerlin is 10–15 minutes. Anthem campuses are 30–35. Call (702) 222-1964. Nevada has no state income tax; HOA dues still apply.",
      pins: [
        {
          name: "HOA-maintained exteriors",
          note: "Packet lists what the HOA paints and what you maintain. We read it at the desk, then walk one rec building.",
        },
        {
          name: "Named rec square footage",
          note: "Anthem Center is about 64,000 sq ft. Sun City Summerlin has four rec campuses. Trilogy is clubhouse-scale. Pick one afternoon.",
        },
        {
          name: "Clubs and rec programming",
          note: "Club lists sit in the packet. We do not sell a calendar caption. Confirm current clubs the week you tour.",
        },
        {
          name: "Guard lists vs open streets",
          note: "Heritage at Stonebridge is a staffed gate. Sun City Summerlin is not one gate. Ask which applies before the showing clock.",
        },
      ],
    },
    {
      h2: "25,000+ 55+ homes, $280K–$1.2M published bands, HOA $140–$350 — packet at Suite 100",
      body: "January 2026 snapshot on this hub. Occupancy rules are reviewed at 9406 W Lake Mead Blvd before any clubhouse. Call (702) 222-1964. Pick one west campus or one Henderson campus.",
      pins: [
        {
          name: "West first",
          note: "Sun City Summerlin 10–15 minutes. Trilogy and Heritage 12–18. Same west clock as Suite 100.",
        },
        {
          name: "Henderson second",
          note: "Anthem Center, Solera, Del Webb at Lake Las Vegas are 30–45 minutes. Do not stack with Summerlin the same morning.",
        },
        {
          name: "North loop",
          note: "Sun City Aliante is 20–25 minutes. Craig Road employers first if you still work.",
        },
        {
          name: "HOA packet",
          note: "Dues bands on this page are $140–$350. Confirm the week you tour. Office/GBP (702) 500-1942.",
        },
      ],
    },
    {
      h2: "Open one 55+ campus page, then book the rec building from W Lake Mead Blvd",
      body: "The card grid is a menu. The decision is a drive. Call (702) 222-1964. Named rec square footage and commute minutes beat a slogan row.",
      pins: [
        {
          name: "Sun City Summerlin",
          note: "Four rec campuses. 7,700+ homes. 10–15 minutes from Suite 100.",
        },
        {
          name: "Trilogy / Heritage",
          note: "Clubhouse-scale vs staffed gate. Downtown Summerlin retail on the same west hop.",
        },
        {
          name: "Anthem / Solera / Del Webb",
          note: "Henderson 55+ block. Anthem Center about 64,000 sq ft. Lake campus is a longer east clock.",
        },
        {
          name: "Aliante",
          note: "42,000 sq ft rec and 18-hole course on the north loop. Not a Summerlin swap.",
        },
      ],
    },
  ],
  "/buyers/luxury-homes-las-vegas": [
    {
      h2: "Ridges gate, MacDonald Strip view, or Lake Las Vegas shoreline — pick the first clock",
      body: "This URL is buyer luxury search. Gate codes stay off group texts. The /luxury-homes hub is listing-or-search intake. Call (702) 222-1964 from 9406 W Lake Mead Blvd, Suite 100.",
      pins: [
        {
          name: "The Ridges",
          note: "15–20 minutes to the guardhouse. Bear's Best, Falcon Ridge, Azure, Talon Ridge, Silver Ridge, Eagle Hills. Published bands $1.5M–$10M+.",
        },
        {
          name: "MacDonald Highlands / Ascaya",
          note: "Henderson elevated lots and DragonRidge. Strip-view streets are timed on an east afternoon, not stacked with Ridges gates.",
        },
        {
          name: "Southern Highlands",
          note: "25–35 minutes via I-15 south. Robert Trent Jones Jr. card 74.1 / 140. Harry Reid International (LAS) is the airport name.",
        },
        {
          name: "Lake Las Vegas / high-rise",
          note: "Lake Las Vegas is 35–45 minutes. Waldorf Astoria and Veer are lock-and-leave product — HOA and rental caps checked at the desk.",
        },
      ],
    },
    {
      h2: "+161% since 2015, $1.45M Dec 2025 luxury median, 60% cash — dated at this desk",
      body: "Numbers on this URL are a snapshot, not a CMA for one lot. Gate lists stay off group texts. Call (702) 222-1964 from 9406 W Lake Mead Blvd, Suite 100.",
      pins: [
        {
          name: "+161% since 2015",
          note: "Cited on this page. Your street can differ. We will not invent a lot price.",
        },
        {
          name: "#4 national luxury growth",
          note: "Headline on this URL. Offer language is written at Suite 100, not from a rank.",
        },
        {
          name: "$1.45M Dec 2025 median",
          note: "Luxury median cited here. Ridges published bands on this site start near $1.5M.",
        },
        {
          name: "60% cash",
          note: "Cash share cited on this page. Proof of funds is reviewed at the desk before the gate block.",
        },
      ],
    },
  ],
  "/luxury-homes": [
    {
      h2: "Drone, floor plans, and paid placement — initialed before listing day",
      body: "Marketing is a punch list at Suite 100, not a slogan. HOA drone rules and gate vendor lists are confirmed before photographer day. Call (702) 222-1964.",
      pins: [
        {
          name: "Photography scoped in writing",
          note: "Drone, twilight, and floor plans are named on the listing agreement. Social stays off until you initial the set.",
        },
        {
          name: "Off-market window",
          note: "Private showing blocks are booked from 9406 W Lake Mead Blvd. Addresses stay off unsecured threads.",
        },
        {
          name: "Buyer search vs listing hub",
          note: "Buyer-only search lives at /buyers/luxury-homes-las-vegas. This page is listing or search intake for either side.",
        },
        {
          name: "Paid placement punch list",
          note: "BHHS syndication is scoped before go-live. We do not promise a portal we cannot name. Office/GBP (702) 500-1942.",
        },
      ],
    },
    {
      h2: "$1.2M luxury median, 890 $1M+ listings, 45 DOM, +8.5% YoY — January 2026 on this hub",
      body: "Snapshot on this listing-or-search URL. A Ridges CMA is not a MacDonald Highlands CMA. Call (702) 222-1964. 9406 W Lake Mead Blvd, Suite 100.",
      pins: [
        {
          name: "$1.2M luxury median",
          note: "January 2026 figure cited here. Confirm the week you list or search.",
        },
        {
          name: "+8.5% year over year",
          note: "Cited on this page. Your gate file can differ. We will not invent a lot price.",
        },
        {
          name: "890 active $1M+ listings",
          note: "Inventory count on this hub. Filter square footage before you screenshot 40 cards.",
        },
        {
          name: "45 days on market",
          note: "Luxury average cited here. Well-priced files move faster. Office/GBP (702) 500-1942.",
        },
      ],
    },
  ],
  "/security-policy": [
    {
      h2: "Lockbox, showing logs, and wire instructions stay at Suite 100 — not unsecured email",
      body: "Report security@heyberkshire.com or call (702) 222-1964. Desk reply within 48 hours. 9406 W Lake Mead Blvd, Suite 100. We do not collect listing keys by open email.",
      pins: [
        {
          name: "security@heyberkshire.com",
          note: "Written reports. Include steps to reproduce. Do not send listing keys or wire changes on this thread.",
        },
        {
          name: "Client CTA",
          note: "(702) 222-1964. Do not swap with office/GBP (702) 500-1942.",
        },
        {
          name: "48-hour desk reply",
          note: "Hours: Mon–Fri 9am–6pm, Sat 10am–4pm, Sunday by appointment.",
        },
        {
          name: "License S.0197614.LLC",
          note: "Dr. Jan Duffy, BHHS Nevada Properties. Showing access questions stay at this pin.",
        },
      ],
    },
    {
      h2: "Turnstile, CSP, TLS 1.3, and Fair Housing — measures named on this URL",
      body: "This is the desk list, not a slogan. Cloudflare Turnstile, rate limits, CSP, HTTPS, and TLS 1.3 are named here. Call (702) 222-1964 if a message claiming to be Dr. Jan changes wiring details.",
      pins: [
        {
          name: "Protection",
          note: "Turnstile, Upstash rate limits, CSP headers, HTTPS, input sanitization.",
        },
        {
          name: "Monitoring",
          note: "Sentry, Vercel Analytics, automated scans. Alerts are reviewed at Suite 100.",
        },
        {
          name: "Data",
          note: "TLS 1.3, access controls, audit logs. Listing keys are not stored on this form.",
        },
        {
          name: "Compliance named",
          note: "Fair Housing Act, Nevada brokerage rules, WCAG 2.1. Office/GBP (702) 500-1942.",
        },
      ],
    },
    {
      h2: "Vercel, Cloudflare Images, RealScout, Calendly — vendors named, keys stay off email",
      body: "Hosting is Vercel. Still delivery is imagedelivery.net (hosted Images) with git copies in /public/images. MLS is RealScout. Scheduling is Calendly. CRM is Follow Up Boss. Call (702) 222-1964.",
      pins: [
        {
          name: "Vercel",
          note: "Gray-cloud DNS. Do not orange-cloud this hostname.",
        },
        {
          name: "Cloudflare Images",
          note: "Hosted delivery, not /cdn-cgi/image/ on the Vercel origin.",
        },
        {
          name: "RealScout + Calendly",
          note: "Live MLS and appointments. Native FUB sync — we do not duplicate it.",
        },
        {
          name: "Responsible disclosure",
          note: "Good-faith reports get a 48-hour reply. Credit if you ask. Office/GBP (702) 500-1942.",
        },
      ],
    },
    {
      h2: "Padlock on heyberkshire.com, then the Suite 100 pin — phishing stays off this file",
      body: "Confirm the domain and HTTPS before you send documents. Email homes@heyberkshire.com. Call (702) 222-1964. Do not change wiring from a text that is not this number.",
      pins: [
        {
          name: "Correct domain",
          note: "heyberkshire.com with the padlock. Maps pin is 9406 W Lake Mead Blvd, Suite 100.",
        },
        {
          name: "Out of scope",
          note: "Public MLS cards, DoS, and third-party vendor bugs are not this desk's vuln list.",
        },
        {
          name: "Documents",
          note: "homes@heyberkshire.com. Never listing keys or off-platform wire instructions.",
        },
        {
          name: "Walk-in",
          note: "Bring the question to Suite 100. Client CTA (702) 222-1964. Office/GBP (702) 500-1942.",
        },
      ],
    },
  ],
  "/services": [
    {
      h2: "Buyer, listing, 55+, and relocation desks — pick the file type first",
      body: "Each service meeting starts at 9406 W Lake Mead Blvd, Suite 100 so MLS, showing routes, and BHHS paperwork share one start. Call (702) 222-1964.",
      pins: [
        {
          name: "Buyer representation",
          note: "Open /buyers. Lender letter and two-ZIP tours. RealScout holds live MLS.",
        },
        {
          name: "Listing and CMA",
          note: "Open /sellers or /home-valuation. Comps at the desk, then photos at the house.",
        },
        {
          name: "55+ occupancy",
          note: "Open /55-plus-communities. HOPA rules before any clubhouse. Sun City Summerlin is 10–15 minutes.",
        },
        {
          name: "California inbound",
          note: "Open /buyers/california-relocator. Net proceeds vs ZIP targets, then a three-day itinerary.",
        },
      ],
    },
    {
      h2: "Investor math, new-construction registration, and 55+ packets — not a second slogan grid",
      body: "Specialized files still start at Suite 100. Builder registration happens before any model row. HOA rental caps are checked before you fly in. Call (702) 222-1964.",
      pins: [
        {
          name: "Investment",
          note: "Open /investment-properties. Rent comps and HOA rental rules before the area drive.",
        },
        {
          name: "New construction",
          note: "Open /new-construction. Register Dr. Jan at Suite 100 before Skye Canyon, Inspirada, or Cadence models.",
        },
        {
          name: "Relocation calendar",
          note: "Open /relocation. Summerlin day, Henderson day, 55+ or builder day — not four I-15 crossings.",
        },
        {
          name: "Valuation",
          note: "Open /home-valuation. Bring the APN. We do not price from a Zestimate screenshot.",
        },
      ],
    },
  ],
  "/listings": [
    {
      h2: "Village cards with January 2026 medians — commute minutes from Suite 100",
      body: "This hub is inventory. Neighborhood pages hold named campuses and parks. Filter here, then call (702) 222-1964. We will not tour twelve ZIPs in one afternoon.",
      pins: [
        {
          name: "Summerlin $625K",
          note: "10–15 minutes. 342 listings and 22 DOM on the January 2026 snapshot. Palo Verde High School commute mapped by address.",
        },
        {
          name: "Henderson $485K",
          note: "25–35 minutes via I-215 east. Parks and rec campuses compared by acreage, not a slogan.",
        },
        {
          name: "The Ridges $2.5M",
          note: "15–20 minutes to the guardhouse. Gate list from Suite 100.",
        },
        {
          name: "North Las Vegas $385K",
          note: "Aliante rec first. Legacy High School commute at ccsd.net/zoning. Not a Summerlin swap.",
        },
      ],
    },
    {
      h2: "$450K median, 28 DOM, 4,850 listings, +4.2% YoY — valley snapshot at Suite 100, not your street CMA",
      body: "January 2026 figures on this search hub. Offer math lives on /buyers. Call (702) 222-1964. 9406 W Lake Mead Blvd, Suite 100.",
      pins: [
        {
          name: "$450K median",
          note: "Valley snapshot cited here. Summerlin $625K and Henderson $485K live on their village cards.",
        },
        {
          name: "28 days on market",
          note: "Average. Priced-right files move faster. Filter beds, baths, and square footage first.",
        },
        {
          name: "4,850 active listings",
          note: "Live MLS is on this URL. Do not screenshot 40 cards. Save two addresses, then book.",
        },
        {
          name: "+4.2% year over year",
          note: "Cited on this page. Your ZIP can differ. We will not invent a list price. Office/GBP (702) 500-1942.",
        },
      ],
    },
  ],
  "/why-berkshire-hathaway": [
    {
      h2: "License S.0197614.LLC at Suite 100 — the parent company is on the letterhead",
      body: "Ask who photographs, who writes remarks, who negotiates. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties, 9406 W Lake Mead Blvd, Suite 100. Call (702) 222-1964. Closed volume cited on this site: $127M+ since 2008.",
      pins: [
        {
          name: "Brokerage on the contract",
          note: "BHHS Nevada Properties is the named brokerage. Samples are reviewed at this pin before you sign.",
        },
        {
          name: "Referral desk",
          note: "Inbound California and outbound states are briefed from Suite 100. Local showings still start here.",
        },
        {
          name: "Closed-file street comps",
          note: "Ask for recent closes on your street. We will not invent a price. Office/GBP (702) 500-1942.",
        },
        {
          name: "Meet the agent page",
          note: "Open /about for license card photos and office hours. The work is the agent; the parent is Berkshire Hathaway Inc.",
        },
      ],
    },
    {
      h2: "Berkshire Hathaway Inc. on the parent line — then who photographs YOUR listing at Suite 100",
      body: "The parent is Berkshire Hathaway Inc. The file is this desk. Ask for listing-marketing samples at 9406 W Lake Mead Blvd before you sign. Call (702) 222-1964.",
      pins: [
        {
          name: "Parent on the letterhead",
          note: "Berkshire Hathaway Inc. is named on BHHS materials. That is not a CMA for your street.",
        },
        {
          name: "This file at Suite 100",
          note: "Who photographs, who writes remarks, who negotiates — named before photographer day.",
        },
        {
          name: "$127M+ closed since 2008",
          note: "Volume cited on this site. Ask for recent closes on YOUR street. We will not invent a price.",
        },
        {
          name: "License S.0197614.LLC",
          note: "Dr. Jan Duffy, BHHS Nevada Properties. Client CTA (702) 222-1964. Office/GBP (702) 500-1942.",
        },
      ],
    },
  ],
  "/new-construction": [
    {
      h2: "Register at Suite 100, then one builder corridor — Toll, Lennar, KB, or Shea",
      body: "Most Las Vegas and Henderson builders require your agent on the first visit. Register Dr. Jan Duffy at 9406 W Lake Mead Blvd before Skye Canyon, Inspirada, or Cadence. Call (702) 222-1964.",
      pins: [
        {
          name: "Toll Brothers",
          note: "Mesa Ridge, Reverence, Inspirada, Lake Las Vegas, The Ridges. Design-studio credits change weekly — confirm the week you register.",
        },
        {
          name: "Lennar",
          note: "Cadence, Inspirada, Valley Vista, Skye Hills. Rate-buydown flyers expire. Do not rely on last month's sheet.",
        },
        {
          name: "KB Home",
          note: "North Las Vegas and southwest Built to Order rows. Registration first, models second.",
        },
        {
          name: "Shea / Pulte / Taylor Morrison",
          note: "Trilogy, Inspirada, Cadence, Mountains Edge. One corridor per afternoon from this pin.",
        },
      ],
    },
    {
      h2: "Toll, Lennar, KB, Shea — one builder row per afternoon after Suite 100 registration",
      body: "The card grid is a menu. Registration happens before any model. Call (702) 222-1964. Incentives on this page are January 2026 — confirm the week you tour.",
      pins: [
        {
          name: "Northwest rows",
          note: "Skye Canyon and Skye Hills after this desk. Do not walk a model unescorted.",
        },
        {
          name: "South Henderson rows",
          note: "Inspirada and Cadence on an east clock. 25–35 minutes from 9406 W Lake Mead Blvd.",
        },
        {
          name: "Southwest rows",
          note: "Mountains Edge and similar corridors. One afternoon, not four I-15 crossings.",
        },
        {
          name: "Incentive flyers",
          note: "Rate buydowns and design-studio credits expire. Last month's sheet is not this week's. Office/GBP (702) 500-1942.",
        },
      ],
    },
    {
      h2: "Five builder clocks: register, models, design studio, framing walk, punch list — from W Lake Mead Blvd",
      body: "The sequence is written at Suite 100. Most builders require Dr. Jan on visit one. Call (702) 222-1964 before Skye Canyon, Inspirada, or Cadence.",
      pins: [
        {
          name: "Register first",
          note: "Call (702) 222-1964. Agent on the first visit or you may lose cooperating representation.",
        },
        {
          name: "One model row",
          note: "Compare included vs upgrades at one corridor. Do not stack northwest and Henderson the same morning.",
        },
        {
          name: "Design studio",
          note: "Credits and lot premiums are negotiated after registration, not at the model desk.",
        },
        {
          name: "Walkthroughs",
          note: "Framing, pre-drywall, and punch list are scheduled from this file. Office/GBP (702) 500-1942.",
        },
      ],
    },
    {
      h2: "Rate buydown, design-studio credit, lot premium — negotiated after registration, not at the model desk",
      body: "Builder credits belong on the contract, not a lobby flyer. Register Dr. Jan at 9406 W Lake Mead Blvd first. Call (702) 222-1964.",
      pins: [
        {
          name: "Closing-cost and rate credits",
          note: "January 2026 examples on this page include sub-5% buydowns and 6% closing credits. Confirm the week you register.",
        },
        {
          name: "Design-studio dollars",
          note: "$50K+ upgrade credits cited here expire. Prioritize flooring and appliances before extras.",
        },
        {
          name: "Lot premium",
          note: "Corner and view lots are a line item. We do not invent a premium. Ask for the current sheet.",
        },
        {
          name: "Warranty and solar",
          note: "Extended warranty, solar, and garage packages are named on the addendum. Office/GBP (702) 500-1942.",
        },
      ],
    },
  ],
  "/google-business": [
    {
      h2: "Maps, hours, and reviews on this URL must match the Business Profile",
      body: "Name, address, and office line (702) 500-1942 match GBP. Client CTA (702) 222-1964. 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Inconsistent NAP is a Maps ranking leak.",
      pins: [
        {
          name: "Call",
          note: "Use the Call button on this page. Do not swap the office line with the client CTA.",
        },
        {
          name: "Directions",
          note: "The map pin is this Suite 100 address. Visitor parking faces W Lake Mead Blvd.",
        },
        {
          name: "View Google Reviews",
          note: "Review schema and the GBP reviews link stay on this page so Maps and the website agree.",
        },
        {
          name: "Hours",
          note: "Mon–Fri 9am–6pm, Sat 10am–4pm, Sunday by appointment. If GBP hours change, this page updates the same day.",
        },
      ],
    },
    {
      h2: "License S.0197614.LLC, Suite 100 hours, and the Maps pin on one URL",
      body: "This About band is for Google Business Profile alignment. Who, what, and where live here so GBP and heyberkshire.com do not drift. Call (702) 222-1964. Office/GBP (702) 500-1942.",
      pins: [
        {
          name: "Who",
          note: "Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. Closed volume cited on this site: $127M+ since 2008.",
        },
        {
          name: "What",
          note: "Buyer, listing, 55+ occupancy, California inbound, and new-construction registration. MLS is RealScout. Scheduling is Calendly.",
        },
        {
          name: "Where",
          note: "9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Summerlin 10–15 minutes. Henderson 25–35 via I-215 east.",
        },
        {
          name: "Hours",
          note: "Mon–Fri 9am–6pm, Sat 10am–4pm, Sunday by appointment. Match GBP the same day hours change.",
        },
      ],
    },
    {
      h2: "Mon–Fri 9am–6pm, Sat 10am–4pm at Suite 100 — Sunday by appointment",
      body: "Hours on this URL must match Google Business. Walk-ins welcome during posted hours. Call (702) 222-1964. Office/GBP (702) 500-1942. 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134.",
      pins: [
        {
          name: "Monday–Friday",
          note: "9am–6pm. Visitor parking faces W Lake Mead Blvd.",
        },
        {
          name: "Saturday",
          note: "10am–4pm. Showing blocks can start here and continue to the listing.",
        },
        {
          name: "Sunday",
          note: "By appointment. Call (702) 222-1964 for a window.",
        },
        {
          name: "GBP match",
          note: "If hours change on Google, this page updates the same day. Inconsistent hours leak Maps ranking.",
        },
      ],
    },
    {
      h2: "Maps pin at 9406 W Lake Mead Blvd — Directions and Google Reviews on this URL",
      body: "The embed, Get Directions, and View Google Reviews buttons are the GBP actions. Call or text (702) 222-1964. License S.0197614.LLC. Berkshire Hathaway HomeServices Nevada Properties.",
      pins: [
        {
          name: "Get Directions",
          note: "Opens the Suite 100 pin. Do not use a different street for GBP.",
        },
        {
          name: "View Google Reviews",
          note: "Review schema and the GBP reviews link stay on this page.",
        },
        {
          name: "Call",
          note: "Client CTA (702) 222-1964. Office line on Google is (702) 500-1942.",
        },
        {
          name: "Address line",
          note: "9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Same as the footer NAP.",
        },
      ],
    },
  ],
  "/sellers": [
    {
      h2: "Photographer, remarks, and comps scoped at Suite 100 before go-live",
      body: "Listing files start at 9406 W Lake Mead Blvd, Suite 100. Photos and MLS remarks wait until the walkthrough. Call (702) 222-1964. We do not promise a portal we cannot name.",
      pins: [
        {
          name: "BHHS syndication punch list",
          note: "MLS plus named BHHS channels are initialed before live. Social stays off until you approve the set.",
        },
        {
          name: "Street comps, not a Zestimate",
          note: "Bring the APN. January 2026 valley median cited on this site is $450K; your street is a different file.",
        },
        {
          name: "Offer terms at the desk",
          note: "Inspection, appraisal, and occupancy dates are drafted before you leave Suite 100.",
        },
        {
          name: "Net sheet",
          note: "HOA, title, and payoff lines are written here. Office/GBP (702) 500-1942.",
        },
      ],
    },
    {
      h2: "CMA at the desk, photos at the house, then MLS — that is the listing clock",
      body: "The selling sequence is dated at Suite 100. We do not skip the walkthrough. Call (702) 222-1964.",
      pins: [
        {
          name: "Valuation",
          note: "Open /home-valuation. Comps at 9406 W Lake Mead Blvd before photographer day.",
        },
        {
          name: "Prep punch list",
          note: "Paint, repairs, and staging are named in writing. We do not sell a caption.",
        },
        {
          name: "Photography and MLS",
          note: "Drone rules and HOA vendor lists confirmed before the shoot. Then MLS go-live.",
        },
        {
          name: "Contract to close",
          note: "Inspections and appraisal language live on the file. Call (702) 222-1964.",
        },
      ],
    },
    {
      h2: "Move-up, downsize, probate, or outbound sale — open the matching seller URL",
      body: "/sellers/move-up, /sellers/downsizing, /sellers/divorce-probate, and /sellers/relocation are separate clocks from Suite 100. Call (702) 222-1964.",
      pins: [
        {
          name: "Move-up",
          note: "Sale and next purchase share one west-valley start. Contingent vs cash is a numbers talk.",
        },
        {
          name: "Downsize",
          note: "List the larger home or tour Sun City Summerlin the same afternoon — 10–15 minutes from this pin.",
        },
        {
          name: "Divorce or probate",
          note: "Court orders and lockbox rules at Suite 100, not the lobby. Private slot required.",
        },
        {
          name: "Outbound relocation",
          note: "Las Vegas closing dates lined up with the next city. BHHS destination agent briefed from this desk.",
        },
      ],
    },
    {
      h2: "Photo set, MLS remarks, HOA vendor list, and showing calendar — initialed at Suite 100",
      body: "What you get when you list is a punch list, not a slogan. Call (702) 222-1964. 9406 W Lake Mead Blvd, Suite 100. We do not promise a portal we cannot name.",
      pins: [
        {
          name: "Photography",
          note: "Interior, exterior, and drone rules confirmed with the HOA before shoot day.",
        },
        {
          name: "MLS remarks",
          note: "Square footage, HOA dues, and occupancy dates beat a caption. Attribution stays on the listing.",
        },
        {
          name: "Paid placement",
          note: "BHHS channels you initial. Social stays off until you approve the set.",
        },
        {
          name: "Showing calendar",
          note: "Lockbox and occupancy windows written at the desk. Office/GBP (702) 500-1942.",
        },
      ],
    },
    {
      h2: "January 2026 valley median $450K is not your CMA — bring the APN to Suite 100",
      body: "Open /home-valuation with the address. We will not invent your number from a metro headline. Call (702) 222-1964. Typical close cited on this site: $450,000 valley snapshot.",
      pins: [
        {
          name: "MLS comps",
          note: "Recent closes on your street, not a portal average.",
        },
        {
          name: "Condition and HOA",
          note: "Interiors and packets are walked, then written.",
        },
        {
          name: "No obligation to list",
          note: "Valuation first. Listing paperwork is a separate appointment.",
        },
        {
          name: "Dated CMA",
          note: "DOM and inventory move. The sheet is dated the day we pull it.",
        },
      ],
    },
  ],
  "/sellers/downsizing": [
    {
      h2: "List the larger house, then one 55+ rec campus — same afternoon from Suite 100",
      body: "Sun City Summerlin is 10–15 minutes from 9406 W Lake Mead Blvd. Occupancy rules are reviewed before the clubhouse. Call (702) 222-1964. Do not guess at square footage you have not walked.",
      pins: [
        {
          name: "Sun City Summerlin",
          note: "Four rec campuses. Published January 2026 band often $375K–$650K. Confirm the week you tour.",
        },
        {
          name: "Sun City Anthem",
          note: "30–35 minutes. Anthem Center about 64,000 sq ft. Separate Henderson clock.",
        },
        {
          name: "Heritage at Stonebridge",
          note: "Staffed gate. Packet lists HOA-maintained exteriors. Open /55-plus-communities/heritage-stonebridge.",
        },
        {
          name: "Del Webb Lake Las Vegas",
          note: "35–45 minutes. 320-acre lake. Do not stack with a Summerlin 55+ morning.",
        },
      ],
    },
    {
      h2: "55+ rec campus, single-story, or condo sq ft — next file at Suite 100",
      body: "Sun City Summerlin is 10–15 minutes from 9406 W Lake Mead Blvd. Occupancy rules before the clubhouse. Call (702) 222-1964. Published 55+ band on this page: $375K–$650K.",
      pins: [
        {
          name: "55+ rec",
          note: "Named rec square footage in the packet. Open /55-plus-communities.",
        },
        {
          name: "Single-story resale",
          note: "No stairs. Yard size measured from the listing, not a caption.",
        },
        {
          name: "Condo",
          note: "HOA dues and rental rules in writing. Confirm the week you tour.",
        },
        {
          name: "Same afternoon",
          note: "List the larger house, then one campus. Office/GBP (702) 500-1942.",
        },
      ],
    },
    {
      h2: "HOA $140–$250, $500K exclusion, guest-room counts — sheet at Suite 100",
      body: "Numbers on this page are examples, not your tax file. Call (702) 222-1964. CPA for gains above the exclusion. We will not invent your net.",
      pins: [
        {
          name: "HOA dues",
          note: "55+ cited here $140–$250/month. Packet lists what is painted.",
        },
        {
          name: "Capital gains",
          note: "$500,000 married exclusion if you qualify. Confirm with a CPA.",
        },
        {
          name: "Guest room",
          note: "Count bedrooms on the next plan. Measure furniture at the model.",
        },
        {
          name: "Rec vs open streets",
          note: "Club lists vs a smaller resale yard. Pick one clock.",
        },
      ],
    },
    {
      h2: "CMA, occupancy packet, then one rec walk — four steps from W Lake Mead Blvd",
      body: "The sequence is dated at Suite 100. We do not skip the walkthrough. Call (702) 222-1964.",
      pins: [
        {
          name: "CMA",
          note: "APN at 9406 W Lake Mead Blvd. January 2026 valley median $450K is not your number.",
        },
        {
          name: "Occupancy packet",
          note: "HOPA and guest ages in writing before any clubhouse.",
        },
        {
          name: "One rec building",
          note: "Sun City Summerlin 10–15 minutes. Anthem is a separate east clock.",
        },
        {
          name: "List or wait",
          note: "Written at the desk. Office/GBP (702) 500-1942.",
        },
      ],
    },
  ],
  "/sellers/move-up": [
    {
      h2: "2015–2021 purchase equity is a CMA at Suite 100, not a slogan",
      body: "If you bought in that window, bring the APN. We will not invent a gain. January 2026 DOM cited on this site is 28 days for priced-right listings. Call (702) 222-1964.",
      pins: [
        {
          name: "Centennial Hills to Summerlin",
          note: "Palo Verde High School commute mapped by next address at ccsd.net/zoning.",
        },
        {
          name: "Inspirada to Southern Highlands",
          note: "Published January 2026 bands ~$525K to $750K+. Robert Trent Jones Jr. card 74.1 / 140.",
        },
        {
          name: "Two stops from this pin",
          note: "Current house and next ZIP share 9406 W Lake Mead Blvd as the start.",
        },
        {
          name: "Contingent vs non-contingent",
          note: "Written at the desk before you list. Call (702) 222-1964.",
        },
      ],
    },
    {
      h2: "Sq ft, lot, and the next APN — upgrade paths dated at Suite 100",
      body: "Centennial Hills to Summerlin is a Palo Verde High School commute mapped by next address. Call (702) 222-1964. We do not invent the gain on a 2015–2021 purchase.",
      pins: [
        {
          name: "Centennial to Summerlin",
          note: "Published next band on this page often $650K+. Confirm the week you tour.",
        },
        {
          name: "Green Valley to MacDonald Ranch",
          note: "Henderson clock. Coronado High School minutes at ccsd.net/zoning.",
        },
        {
          name: "Inspirada to Southern Highlands",
          note: "Robert Trent Jones Jr. card 74.1 / 140. Gate lists from this desk.",
        },
        {
          name: "Two files",
          note: "Current APN and next ZIP share 9406 W Lake Mead Blvd. Office/GBP (702) 500-1942.",
        },
      ],
    },
    {
      h2: "List this APN and date the next one on one Suite 100 calendar",
      body: "Sale and purchase share one clock at 9406 W Lake Mead Blvd. Call (702) 222-1964. Contingency language is written before you list.",
      pins: [
        {
          name: "Current listing",
          note: "Photos, lockbox, and showing logs from this desk.",
        },
        {
          name: "Next purchase",
          note: "Buyer-agency paperwork before any model row.",
        },
        {
          name: "Occupancy dates",
          note: "Written so two closings do not collide.",
        },
        {
          name: "Office/GBP",
          note: "(702) 500-1942. Client CTA (702) 222-1964.",
        },
      ],
    },
    {
      h2: "Contingent, bridge, or cash-gap — pick one file type at Suite 100",
      body: "Three timing packets, not a slogan. January 2026 DOM cited on this site is 28 days for priced-right listings. Call (702) 222-1964.",
      pins: [
        {
          name: "Sale contingent",
          note: "Written at the desk. Not every seller will wait.",
        },
        {
          name: "Bridge or HELOC",
          note: "Lender letter first. We will not invent a rate.",
        },
        {
          name: "Same-day close",
          note: "Requires both files dated. Do not stack a Henderson luxury afternoon.",
        },
        {
          name: "Rent-back",
          note: "30–60 days if negotiated. Occupancy in writing.",
        },
      ],
    },
    {
      h2: "Equity from this sale, then the next loan — lenders named at Suite 100",
      body: "Bridge, HELOC, or sale-contingent offers are different packets. Call (702) 222-1964. Bring the APN. We will not invent a payment.",
      pins: [
        {
          name: "Bridge loan",
          note: "Short window. Lender letter before you write.",
        },
        {
          name: "HELOC",
          note: "Often 30–45 days to open. Date it before listing photos.",
        },
        {
          name: "Sale contingency",
          note: "Offer language at this desk, not a group text.",
        },
        {
          name: "Rent-back",
          note: "Occupancy after close. Office/GBP (702) 500-1942.",
        },
      ],
    },
  ],
  "/sellers/relocation": [
    {
      h2: "Las Vegas sale calendar plus a named BHHS agent in the next city",
      body: "Outbound files start at Suite 100. Destination agents are briefed from 9406 W Lake Mead Blvd so two closings do not collide. Call (702) 222-1964.",
      pins: [
        {
          name: "Remote listing",
          note: "Photos, lockbox, and showing logs run from this desk. Addresses stay off group texts.",
        },
        {
          name: "50,000-agent desk, local file",
          note: "BHHS destination intro is a Suite 100 call. Local showings still start here until you leave.",
        },
        {
          name: "Two-contract calendar",
          note: "Bring both drafts. Occupancy dates are written before you fly.",
        },
        {
          name: "Office/GBP",
          note: "(702) 500-1942. Client CTA (702) 222-1964. Do not swap the lines.",
        },
      ],
    },
    {
      h2: "Listing photos, lockbox, and showing logs run from Suite 100",
      body: "You can leave. The Las Vegas file stays at 9406 W Lake Mead Blvd. Call (702) 222-1964. Addresses stay off group texts.",
      pins: [
        {
          name: "Remote listing",
          note: "Photos and lockbox from this desk while you start the next city.",
        },
        {
          name: "Showing logs",
          note: "Dated. We do not post occupancy gossip.",
        },
        {
          name: "Destination agent",
          note: "BHHS intro is a Suite 100 call, not a cold transfer.",
        },
        {
          name: "Two closings",
          note: "Occupancy dates written before you fly. Office/GBP (702) 500-1942.",
        },
      ],
    },
    {
      h2: "Job-start date first — 30/60/90 listing windows at this desk",
      body: "The listing window is dated from Suite 100, not a caption. Call (702) 222-1964. January 2026 DOM cited on this site is 28 days for priced-right listings.",
      pins: [
        {
          name: "30 days",
          note: "Priced to the January 2026 snapshot. Confirm the week you list.",
        },
        {
          name: "60 days",
          note: "Buffer for a job-start that slipped. Occupancy in writing.",
        },
        {
          name: "90 days",
          note: "Two-contract calendar. Destination closing does not collide.",
        },
        {
          name: "Remote close",
          note: "E-sign and remote notary routed from this file.",
        },
      ],
    },
    {
      h2: "California, Texas, Arizona destination desks — BHHS intro from Suite 100",
      body: "Outbound is a named agent in the next city, briefed from 9406 W Lake Mead Blvd. Call (702) 222-1964. We do not invent a destination inventory count.",
      pins: [
        {
          name: "California",
          note: "Net sheet vs Nevada PITI. Open /buyers/california-relocator if inbound instead.",
        },
        {
          name: "Texas or Arizona",
          note: "BHHS destination intro from this desk. Local showings still start here until you leave.",
        },
        {
          name: "Two-contract calendar",
          note: "Bring both drafts. Occupancy dates before you fly.",
        },
        {
          name: "Office/GBP",
          note: "(702) 500-1942. Client CTA (702) 222-1964.",
        },
      ],
    },
    {
      h2: "CMA, listing window, remote closing — six steps dated at Suite 100",
      body: "The sequence is written at 9406 W Lake Mead Blvd. Call (702) 222-1964. We do not skip the CMA because the job-start is next month.",
      pins: [
        {
          name: "CMA",
          note: "APN at this desk. Valley median $450K is not your number.",
        },
        {
          name: "Photos and lockbox",
          note: "Can run after you leave. Logs stay here.",
        },
        {
          name: "Offers",
          note: "Dated and routed. Occupancy in writing.",
        },
        {
          name: "Remote close",
          note: "Title and e-sign from this file. Office/GBP (702) 500-1942.",
        },
      ],
    },
    {
      h2: "Inbound to 89134: named ZIP, then a dated CMA at Suite 100",
      body: "If the file is inbound, start at 9406 W Lake Mead Blvd. Call (702) 222-1964. One ZIP per afternoon. Named campuses at ccsd.net/zoning by address.",
      pins: [
        {
          name: "Summerlin",
          note: "10–15 minutes. Palo Verde High School commute mapped by listing.",
        },
        {
          name: "Henderson",
          note: "25–35 minutes. Coronado High School minutes by address.",
        },
        {
          name: "New construction",
          note: "Register Dr. Jan before any model row. Open /new-construction.",
        },
        {
          name: "Video intake",
          note: "Virtual street walk before you fly. Office/GBP (702) 500-1942.",
        },
      ],
    },
  ],
  "/sellers/divorce-probate": [
    {
      h2: "Court orders, lockbox rules, and showing logs at Suite 100 — not the lobby",
      body: "Confidential review is by appointment at 9406 W Lake Mead Blvd, Suite 100. Letters testamentary or court orders come with you. Call (702) 222-1964.",
      pins: [
        {
          name: "Divorce file",
          note: "Neutral process. Both attorneys on the written showing rules. No lobby briefings.",
        },
        {
          name: "Probate / estate",
          note: "Executor documents before the first lockbox. HOA contacts listed on the file.",
        },
        {
          name: "Access",
          note: "Preferred showing window in writing. We do not post occupancy gossip.",
        },
        {
          name: "Offers",
          note: "Documented, dated, and routed to counsel. Office/GBP (702) 500-1942.",
        },
      ],
    },
    {
      h2: "Court dates, two signatures, and one listing file at Suite 100",
      body: "Confidential review is by appointment at 9406 W Lake Mead Blvd. Call (702) 222-1964. We do not brief the lobby.",
      pins: [
        {
          name: "Divorce file",
          note: "Both attorneys on the written showing rules.",
        },
        {
          name: "Probate / estate",
          note: "Letters testamentary before the first lockbox.",
        },
        {
          name: "Access",
          note: "Preferred showing window in writing.",
        },
        {
          name: "Marketing",
          note: "Remarks omit occupancy gossip. Office/GBP (702) 500-1942.",
        },
      ],
    },
    {
      h2: "Nevada community property and probate windows — APN at Suite 100",
      body: "State rules are a packet, not a caption. Call (702) 222-1964. Bring the court order or letters testamentary. We will not invent a timeline.",
      pins: [
        {
          name: "Community property",
          note: "Two signatures when required. Counsel on the file.",
        },
        {
          name: "Probate window",
          note: "Executor documents before MLS. HOA contacts listed.",
        },
        {
          name: "Court-ordered sale",
          note: "Order in the folder. Occupancy and lockbox rules written.",
        },
        {
          name: "Office/GBP",
          note: "(702) 500-1942. Client CTA (702) 222-1964.",
        },
      ],
    },
    {
      h2: "Separate showings, one MLS file, dated notes — not a group text",
      body: "The process is documented at Suite 100. Call (702) 222-1964. Offers route to counsel. We do not post occupancy details.",
      pins: [
        {
          name: "Showing window",
          note: "Written. Separate if the order requires it.",
        },
        {
          name: "One MLS file",
          note: "Remarks omit private facts. Photos from this desk.",
        },
        {
          name: "Offers",
          note: "Dated, documented, routed. No lobby briefings.",
        },
        {
          name: "Close",
          note: "Title and disbursement per the order. Office/GBP (702) 500-1942.",
        },
      ],
    },
    {
      h2: "50,000-agent letterhead, then this file stays confidential at Suite 100",
      body: "BHHS documentation standards are on the letterhead. The file still sits at 9406 W Lake Mead Blvd. Call (702) 222-1964. License S.0197614.LLC.",
      pins: [
        {
          name: "Paper trail",
          note: "Dated notes for counsel. We do not invent a valuation.",
        },
        {
          name: "Attorney referrals",
          note: "Named after the file type is chosen. Not a slogan.",
        },
        {
          name: "Lockbox rules",
          note: "Written showing window. Occupancy stays off marketing.",
        },
        {
          name: "Office/GBP",
          note: "(702) 500-1942. Client CTA (702) 222-1964.",
        },
      ],
    },
  ],
  "/relocation": [
    {
      h2: "No state income tax is a line item — then one Summerlin or Henderson clock",
      body: "Inbound math starts at 9406 W Lake Mead Blvd, Suite 100. Housing prices 40–60% below many California coastal cities is a comparison, not a guarantee. Call (702) 222-1964.",
      pins: [
        {
          name: "Nevada tax line",
          note: "No state income tax. HOA dues and property tax still apply. Run the sheet at the desk.",
        },
        {
          name: "Price comparison",
          note: "January 2026 valley median cited on this site: $450K. Confirm the week you tour.",
        },
        {
          name: "Trailheads and rec acres",
          note: "Golf and hiking are compared by acreage and minutes from Suite 100, not a slogan.",
        },
        {
          name: "Employers",
          note: "Sports, healthcare, and tech briefs are dated. We will not invent a job count.",
        },
      ],
    },
    {
      h2: "Utility setup, HOA packets, and one inbound ZIP — punch list at Suite 100",
      body: "Relocation is a dated list, not a caption. Call (702) 222-1964. 9406 W Lake Mead Blvd, Suite 100. We do not tour twelve ZIPs the day you land.",
      pins: [
        {
          name: "HOA packet",
          note: "Dues, rental caps, and occupancy rules before the first drive.",
        },
        {
          name: "One ZIP",
          note: "Summerlin 10–15 minutes. Henderson 25–35. Pick one afternoon.",
        },
        {
          name: "Utility start dates",
          note: "Written after the occupancy date, not before the APN is known.",
        },
        {
          name: "Office/GBP",
          note: "(702) 500-1942. Client CTA (702) 222-1964.",
        },
      ],
    },
    {
      h2: "Palo Verde, Coronado, Arbor View — campus minutes at ccsd.net/zoning by address",
      body: "Named campuses and drive times, not ratings. Call (702) 222-1964. Zoning is mapped by street the week you tour.",
      pins: [
        {
          name: "Summerlin",
          note: "Palo Verde High School and West Career & Tech Academy minutes from the listing.",
        },
        {
          name: "Henderson",
          note: "Coronado High School and Green Valley High School commute by address.",
        },
        {
          name: "Northwest",
          note: "Arbor View High School on the Centennial clock from Suite 100.",
        },
        {
          name: "ccsd.net/zoning",
          note: "Confirm the week you write. We will not invent a zone.",
        },
      ],
    },
  ],
  "/market-report": [
    {
      h2: "January 2026 medians by ZIP — then a CMA on YOUR APN at Suite 100",
      body: "Valley snapshot: $450K median, 28 DOM, 4,850 active listings, 2.1 months inventory. Area cards are not a substitute for one address. Call (702) 222-1964.",
      pins: [
        {
          name: "Summerlin $625K",
          note: "22 DOM on the January 2026 snapshot. 10–15 minutes from Suite 100.",
        },
        {
          name: "Henderson $485K",
          note: "24 DOM. 25–35 minutes via I-215 east.",
        },
        {
          name: "North Las Vegas $385K",
          note: "32 DOM. Aliante rec first. Not a Summerlin swap.",
        },
        {
          name: "$1M+ $1.2M median",
          note: "45 DOM. Gate lists from 9406 W Lake Mead Blvd. Confirm the week you tour.",
        },
      ],
    },
    {
      h2: "Rates, 4,850 listings, and 28 DOM — dated at Suite 100, not a caption",
      body: "January 2026 snapshot on this page. Apply it to one APN at 9406 W Lake Mead Blvd. Call (702) 222-1964. California inbound is a net-sheet talk, not a slogan.",
      pins: [
        {
          name: "California inbound",
          note: "No Nevada state income tax is a line item. Open /buyers/california-relocator.",
        },
        {
          name: "New construction",
          note: "Register Dr. Jan at Suite 100 before any model row. Open /new-construction.",
        },
        {
          name: "$1M+ streets",
          note: "The Ridges and Southern Highlands. Gate lists from this desk.",
        },
        {
          name: "Your APN",
          note: "Valley median $450K is not a CMA. Office/GBP (702) 500-1942.",
        },
      ],
    },
  ],
  "/investment-properties": [
    {
      h2: "HOA rental caps and rent comps at Suite 100 before any area drive",
      body: "Cap-rate review happens at 9406 W Lake Mead Blvd. Then one ZIP cluster: North Las Vegas, Henderson, or southwest. Call (702) 222-1964. We check rental rules before you fly in.",
      pins: [
        {
          name: "No state income tax",
          note: "Nevada line item. HOA and property tax still apply. Run the sheet at the desk.",
        },
        {
          name: "North Las Vegas ~$385K",
          note: "Published January 2026 average on this page. Confirm rent comps the week you tour.",
        },
        {
          name: "Henderson ~$485K",
          note: "Separate east clock. HOA rental caps kill deals — packet first.",
        },
        {
          name: "1031 calendar",
          note: "Identification windows are dated. Bring the relinquished APN. Office/GBP (702) 500-1942.",
        },
      ],
    },
    {
      h2: "January 2026 published bands: NLV $385K, Henderson $485K — cap rates at Suite 100",
      body: "Table figures on this page are averages, not your deal. Call (702) 222-1964. Confirm rent comps the week you tour.",
      pins: [
        {
          name: "North Las Vegas",
          note: "Published ~$385K on this page. Aliante rec first if that is the brief.",
        },
        {
          name: "Henderson",
          note: "Published ~$485K. HOA rental caps in the packet before the east clock.",
        },
        {
          name: "Southwest cluster",
          note: "Mountains Edge and Southern Highlands product are different files.",
        },
        {
          name: "No invented yield",
          note: "Cap rate is dated the day we pull rents. Office/GBP (702) 500-1942.",
        },
      ],
    },
    {
      h2: "Rental-cap packets and property-manager referrals — initialed at 9406 W Lake Mead Blvd",
      body: "What you get is a punch list: rent comps, HOA rules, 1031 window. Call (702) 222-1964. We do not promise a portal we cannot name.",
      pins: [
        {
          name: "Rent comps",
          note: "Street-level, not a valley average.",
        },
        {
          name: "HOA rental cap",
          note: "Packet before you fly. Caps kill deals.",
        },
        {
          name: "1031 window",
          note: "45-day identification. Bring the relinquished APN.",
        },
        {
          name: "Manager referral",
          note: "Named after the file type is chosen. Call (702) 222-1964.",
        },
      ],
    },
    {
      h2: "Cash-flow, 1031 identification, or multi-unit — pick the file type at Suite 100",
      body: "Buy-and-hold, value-add, or short-term rules are different packets. Call (702) 222-1964. Short-term occupancy is a HOA and city rule, not a caption.",
      pins: [
        {
          name: "Buy and hold",
          note: "Lease math and HOA rental rules first.",
        },
        {
          name: "Value-add",
          note: "Permits and condition walked. We will not invent a after-repair number.",
        },
        {
          name: "Short-term",
          note: "HOA and municipal rules in writing before any listing photo.",
        },
        {
          name: "One ZIP",
          note: "Do not stack NLV and Henderson the same inbound morning.",
        },
      ],
    },
    {
      h2: "DOM, rent comps, and HOA rental rules — dated the day we pull them",
      body: "Metrics without an APN are a snapshot. Bring target cap rate and cash-to-close to 9406 W Lake Mead Blvd. Call (702) 222-1964.",
      pins: [
        {
          name: "Cap rate",
          note: "Rent minus expenses over price. Dated that week.",
        },
        {
          name: "Cash-on-cash",
          note: "Depends on down payment. Run the sheet at the desk.",
        },
        {
          name: "DOM",
          note: "January 2026 valley snapshot: 28 days. Your ZIP differs.",
        },
        {
          name: "HOA rules",
          note: "Rental caps and lease minimums. Office/GBP (702) 500-1942.",
        },
      ],
    },
    {
      h2: "North Las Vegas, Henderson, or southwest — one ZIP cluster per inbound afternoon",
      body: "Do not tour twelve ZIPs the day you land. Call (702) 222-1964. Occupancy and rental packets at Suite 100 first.",
      pins: [
        {
          name: "NLV ~$385K",
          note: "Published January 2026 average on this page. Confirm rents that week.",
        },
        {
          name: "Henderson ~$485K",
          note: "25–35 minutes via I-215 east. Separate clock.",
        },
        {
          name: "Southwest",
          note: "Mountains Edge vs Southern Highlands square footage. Measure from the listing.",
        },
        {
          name: "1031 overlay",
          note: "Identification window dated. Bring the relinquished APN.",
        },
      ],
    },
  ],
  "/home-valuation": [
    {
      h2: "Zestimate screenshots stay in the parking lot — comps are pulled at Suite 100",
      body: "Bring the APN to 9406 W Lake Mead Blvd. AVMs miss interiors and HOA packets. Call (702) 222-1964. A 10% miss on $450K is $45K — we will not invent your number.",
      pins: [
        {
          name: "MLS comps",
          note: "Recent closes on your street, not a portal average.",
        },
        {
          name: "Interior and HOA",
          note: "Condition, permits, and HOA rules are walked, then written.",
        },
        {
          name: "Buyer demand that week",
          note: "DOM and inventory move. The CMA is dated the day we pull it.",
        },
        {
          name: "No obligation to list",
          note: "Valuation first. Listing paperwork is a separate appointment.",
        },
      ],
    },
    {
      h2: "Square footage, named campuses, HOA dues, 2.1 months inventory — comps at Suite 100",
      body: "School-zone slogans are not a CMA. Palo Verde, Coronado, Arbor View, and Legacy High School minutes are mapped by address at ccsd.net/zoning. Call (702) 222-1964. January 2026 inventory cited on this page: 2.1 months.",
      pins: [
        {
          name: "ZIP and commute",
          note: "Summerlin 10–15 minutes from Suite 100. Henderson 25–35. Not a caption premium.",
        },
        {
          name: "Beds, baths, square footage",
          note: "Layout and first-floor primary suites are listing facts. Confirm the week you price.",
        },
        {
          name: "Kitchens, HVAC, roof",
          note: "Condition is walked. We will not invent a dollar-per-upgrade from a blog average.",
        },
        {
          name: "Lot and views",
          note: "Measure from the file. Pool and lot size vary by APN.",
        },
      ],
    },
  ],
  "/buyers/first-time-buyers": [
    {
      h2: "FHA 3.5% at $498,257, VA 0% down, or a builder credit — pick the file type",
      body: "Lender letter is reviewed at 9406 W Lake Mead Blvd, Suite 100 before the first two-ZIP tour. 2026 FHA limit cited on this page: $498,257. Call (702) 222-1964. Confirm with your lender the week you write.",
      pins: [
        {
          name: "FHA",
          note: "3.5% down. Limit $498,257 on this page for 2026. Credit floors are lender-specific.",
        },
        {
          name: "VA",
          note: "Zero-down files for eligible veterans. Entitlement reviewed before models.",
        },
        {
          name: "Conventional / down-payment programs",
          note: "Nevada and Clark County flyers expire. Do not rely on last month's PDF.",
        },
        {
          name: "Builder registration",
          note: "Open /new-construction. Register Dr. Jan at Suite 100 before any model row.",
        },
      ],
    },
    {
      h2: "NLV from $350K, Centennial, or Green Valley — one ZIP, named campuses, commute minutes",
      body: "First-purchase tours start at Suite 100. Legacy High School, Arbor View, and Coronado High School commutes are mapped at ccsd.net/zoning by address. Call (702) 222-1964.",
      pins: [
        {
          name: "North Las Vegas",
          note: "Published band $350K–$450K on this page. New-construction rows after registration.",
        },
        {
          name: "Centennial Hills",
          note: "Northwest clock from W Lake Mead Blvd. Arbor View High School commute by street.",
        },
        {
          name: "Green Valley",
          note: "Henderson. Coronado High School commute mapped by address. 25–35 minutes.",
        },
        {
          name: "Do not tour twelve ZIPs",
          note: "One ZIP per afternoon. Seller-paid buyer-broker fee is typical here — confirm on the listing.",
        },
      ],
    },
    {
      h2: "$1,800 rent vs $1,900 PITI on a $400K / 3.5% FHA file — run the sheet at Suite 100",
      body: "Figures on this page are a worked example, not your payment. Rate cited here: 6.5%. 2026 FHA limit: $498,257. Call (702) 222-1964. Lender letter before the first showing.",
      pins: [
        {
          name: "Rent column",
          note: "$1,800/month cited here. Five-year rent spend on this page: $108,000 with $0 equity.",
        },
        {
          name: "Buy column",
          note: "$1,900/month PITI on a $400K / 3.5% down example. Equity line on this page: $600+/month.",
        },
        {
          name: "FHA 3.5%",
          note: "Limit $498,257 for 2026 on this URL. Confirm with your lender the week you write.",
        },
        {
          name: "Then two ZIPs",
          note: "North Las Vegas, Centennial Hills, or Green Valley. Named campuses by address. Call (702) 222-1964.",
        },
      ],
    },
  ],
  "/contact": [
    {
      h2: "Walk-in hours and (702) 222-1964 at Suite 100 — the Maps pin is this desk",
      body: "Berkshire Hathaway HomeServices Nevada Properties. 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Client CTA (702) 222-1964. Office/GBP (702) 500-1942. Closed volume cited on this site: $127M+ since 2008. Map, Directions, and Google Reviews stay on this URL.",
      pins: [
        {
          name: "Call or text (702) 222-1964",
          note: "Dr. Jan answers this line. Do not swap it with the office number on Google.",
        },
        {
          name: "homes@heyberkshire.com",
          note: "Documents only. Do not send listing keys by unsecured email.",
        },
        {
          name: "9406 W Lake Mead Blvd, Suite 100",
          note: "Las Vegas, NV 89134. Visitor parking faces W Lake Mead Blvd.",
        },
        {
          name: "Hours on the GBP listing",
          note: "Mon–Fri 9am–6pm, Sat 10am–4pm, Sunday by appointment. Walk-ins welcome during posted hours.",
        },
      ],
    },
    {
      h2: "Call the client line or email Homes@HeyBerkshire.com from this URL",
      body: "Skip a second form if you already have the number. Call or text (702) 222-1964. Email homes@heyberkshire.com. Calendly is the appointment column on this page. Office/GBP (702) 500-1942.",
      pins: [
        {
          name: "Client CTA",
          note: "(702) 222-1964. Same-day reply on the number you left.",
        },
        {
          name: "Email",
          note: "homes@heyberkshire.com. Typical reply within two hours during posted hours.",
        },
        {
          name: "Calendly column",
          note: "Phone consult, showing, or Suite 100 meeting. Bring photo ID and target ZIPs.",
        },
        {
          name: "Maps pin",
          note: "9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. License S.0197614.LLC.",
        },
      ],
    },
  ],
  "/market-insights": [
    {
      h2: "37% California in-migration, 0% NV state income tax, $1B+ data-center spend — apply at Suite 100",
      body: "Figures on this page are January 2026 snapshots. They are not a CMA for your APN. Call (702) 222-1964. We apply them at 9406 W Lake Mead Blvd, then drive one ZIP.",
      pins: [
        {
          name: "37% California buyers",
          note: "Cited on this page as a share of Las Vegas buyers. Confirm the week you write.",
        },
        {
          name: "0% Nevada state income tax",
          note: "Tax fact. HOA dues and property tax still apply. Run the sheet at the desk.",
        },
        {
          name: "$1B+ data-center investment",
          note: "Henderson corridor jobs. Commute minutes are mapped by address, not a slogan.",
        },
        {
          name: "45M annual visitors",
          note: "Hospitality demand is a metro input. Your listing still needs comps. Call (702) 222-1964.",
        },
      ],
    },
    {
      h2: "Switch, AWS, and Google power campuses in Henderson — 25–35 minutes from W Lake Mead Blvd",
      body: "Data-center jobs are an east-valley clock from Suite 100. Summerlin is a separate west loop. Call (702) 222-1964. Do not stack both in one afternoon.",
      pins: [
        {
          name: "Henderson corridor",
          note: "Google, Amazon Web Services, Switch, and related operators cited on this page.",
        },
        {
          name: "25–35 minute drive",
          note: "From 9406 W Lake Mead Blvd to Henderson listings. Confirm traffic the morning you tour.",
        },
        {
          name: "Fiber and power",
          note: "Infrastructure notes belong in the briefing. Square footage and HOA dues still decide the offer.",
        },
        {
          name: "Remote-pay files",
          note: "California paycheck vs Nevada tax line is a net-sheet item. Open /buyers/california-relocator.",
        },
      ],
    },
    {
      h2: "Bay Area and LA net sheets vs Summerlin or Henderson ZIP — video intake from Suite 100",
      body: "California remains the top inbound source cited on this page. $250K+ average equity is a snapshot, not your proceeds. Call (702) 222-1964. Four-hour drive or about a one-hour flight to most of California.",
      pins: [
        {
          name: "37% inbound share",
          note: "Cited here for Las Vegas buyers from California. Confirm with current MLS notes.",
        },
        {
          name: "$250K+ equity snapshot",
          note: "Average cited on this page. Your net is a California close plus Nevada purchase math.",
        },
        {
          name: "Bay Area and LA",
          note: "Primary source markets named on this URL. We time Summerlin vs Henderson before a tour week.",
        },
        {
          name: "CA tax line vs NV",
          note: "California state income tax bands cited here at 9.3%–13.3%. Nevada has no state income tax. HOA still applies.",
        },
      ],
    },
    {
      h2: "Allegiant Stadium, Summerlin medical corridor, Nevada film credits — one employer clock at the desk",
      body: "Diversification is three separate drives. Pick one employer cluster before we leave Suite 100. Call (702) 222-1964. Office/GBP (702) 500-1942.",
      pins: [
        {
          name: "Allegiant Stadium district",
          note: "West Las Vegas hospitality and sports jobs. Not a Summerlin village swap.",
        },
        {
          name: "Medical corridors",
          note: "Henderson and Summerlin hospital campuses. Commute minutes mapped by address at the desk.",
        },
        {
          name: "Nevada film incentives",
          note: "Production and studio notes are dated. Confirm current credits the week you underwrite.",
        },
        {
          name: "One cluster per afternoon",
          note: "Do not tour stadium, hospital, and studio ZIPs in one loop. Call (702) 222-1964.",
        },
      ],
    },
    {
      h2: "Henderson Inspirada, Summerlin Ridges, Aliante rec, Mountains Edge trails — January 2026 ZIP notes",
      body: "Outlook copy on this page is a snapshot. Appreciation ranges are not a CMA. Call (702) 222-1964. Named villages and commute minutes beat a caption.",
      pins: [
        {
          name: "Henderson",
          note: "Inspirada, MacDonald Highlands, Green Valley Ranch. 25–35 minutes from Suite 100.",
        },
        {
          name: "Summerlin",
          note: "The Ridges, Paseos, Downtown Summerlin. 10–15 minutes. Palo Verde High School commute by street.",
        },
        {
          name: "North Las Vegas",
          note: "Aliante rec campus. Published entry bands live on /neighborhoods/north-las-vegas. Confirm the week you tour.",
        },
        {
          name: "Mountains Edge",
          note: "Exploration Peak trails. Southwest clock. Square footage vs new-construction rows after registration.",
        },
      ],
    },
    {
      h2: "Apply 2026 forces to one APN: buyer letter or listing CMA at 9406 W Lake Mead Blvd",
      body: "Inventory is wider than 2021–2023 on this page, but well-priced homes still move. Call (702) 222-1964. Builder credits belong on /new-construction after you register Dr. Jan.",
      pins: [
        {
          name: "Buyer letter first",
          note: "Pre-approval before a two-ZIP tour. RealScout holds live MLS. We sequence the drives.",
        },
        {
          name: "Henderson vs west Summerlin",
          note: "Job-corridor clocks are separate. Pick one afternoon.",
        },
        {
          name: "Builder credits",
          note: "Rate buydowns expire. Register at Suite 100 before any model row.",
        },
        {
          name: "Listing CMA",
          note: "Overpriced files sit. Correctly priced files on this page are cited under 30 DOM. Bring the APN.",
        },
      ],
    },
  ],
  "/market-update": [
    {
      h2: "$452,500 median, 847 sales, 4,892 listings, 26 DOM, 98.2% list-to-sale — not your street CMA",
      body: "This week's snapshot on this URL. Week deltas cited here: median +1.2%, sales +8.3%, listings -2.1%, DOM -2 days, list-to-sale +0.4%. Call (702) 222-1964. We will not price your house from a metro headline.",
      pins: [
        {
          name: "$452,500 median",
          note: "This week's figure on this page. January 2026 valley median elsewhere on the site is often cited near $450K.",
        },
        {
          name: "847 homes sold",
          note: "+8.3% vs last week on this page. Volume is not your offer strategy.",
        },
        {
          name: "4,892 active listings",
          note: "-2.1% vs last week. Inventory still needs your ZIP filter.",
        },
        {
          name: "26 DOM / 98.2% list-to-sale",
          note: "Urgency and close-to-ask are dated. Bring the APN to 9406 W Lake Mead Blvd.",
        },
      ],
    },
    {
      h2: "Ridges 8,400 sq ft custom closed at $4.2M in 12 days — one Summerlin gate file",
      body: "6 bed, 7 bath, 8,400 sq ft. Cited at 97% of ask vs a luxury-segment 67-day average on this page. Gate lists stay off group texts. Call (702) 222-1964 from Suite 100.",
      pins: [
        {
          name: "The Ridges",
          note: "15–20 minutes to the guardhouse from 9406 W Lake Mead Blvd. Confirm the list that morning.",
        },
        {
          name: "8,400 sq ft",
          note: "Square footage and bath count are the listing facts. Views vary by lot — measure from the file.",
        },
        {
          name: "12 days on market",
          note: "Below the luxury average cited here. Not a promise for the next Ridges listing.",
        },
        {
          name: "California inbound demand",
          note: "Named on this page as a luxury driver. Your buyer still needs a letter. Office/GBP (702) 500-1942.",
        },
      ],
    },
    {
      h2: "26 DOM and 98.2% close-to-ask — write the offer or list price at Suite 100",
      body: "This week's story on this URL: modest +1.2% prices, +8.3% volume, -2.1% inventory. Call (702) 222-1964. A metro balance is not a CMA. Bring the address.",
      pins: [
        {
          name: "Buyer clock",
          note: "26-day average DOM. Lender letter before the first showing.",
        },
        {
          name: "Seller clock",
          note: "Near-ask closes when priced to comps. Overpricing costs days.",
        },
        {
          name: "Spring inventory",
          note: "If listings keep falling while sales hold, competition can tighten. Dated — re-check the week you list.",
        },
        {
          name: "BHHS paperwork",
          note: "Berkshire Hathaway HomeServices Nevada Properties. License S.0197614.LLC. RealScout holds the saved search.",
        },
      ],
    },
    {
      h2: "Pre-approval on a 26-day clock, or list before spring inventory — pick the file type",
      body: "Buyers: letter, then two ZIPs. Sellers: comps at the desk, then photos. Call (702) 222-1964. 98.2% list-to-sale on this page means deep discounts are uncommon this week.",
      pins: [
        {
          name: "Get the letter",
          note: "FHA, VA, or conventional compared at Suite 100 so the first appointment has a number.",
        },
        {
          name: "Price to comps",
          note: "Homes priced to the CMA are the ones hitting 26 DOM. We will not invent your number.",
        },
        {
          name: "Photos and HOA packet",
          note: "Presentation is a punch list. HOA dues beat a caption.",
        },
        {
          name: "Do not wait for a slogan season",
          note: "January/February inventory on this page can be thinner. Confirm the week you act.",
        },
      ],
    },
    {
      h2: "Summerlin $628K / 21 DOM vs Henderson $487,500 / 23 DOM vs Mountains Edge $478K / 26 DOM",
      body: "Area rows on this page are this week's snapshot. Central Las Vegas is cited at $425,000. Call (702) 222-1964. Two clocks from Suite 100 — not twelve ZIPs.",
      pins: [
        {
          name: "Summerlin $628,000",
          note: "142 sold, 21 DOM this week on this page. 10–15 minutes from W Lake Mead Blvd.",
        },
        {
          name: "Henderson $487,500",
          note: "198 sold, 23 DOM. 25–35 minutes. Separate east afternoon.",
        },
        {
          name: "Central Las Vegas $425,000",
          note: "Cited on this table. Confirm ZIP before you treat it as a Summerlin substitute.",
        },
        {
          name: "Mountains Edge $478,000",
          note: "64 sold, 26 DOM. Southwest clock. Square footage vs new-construction after registration.",
        },
      ],
    },
  ],
  "/neighborhoods": [
    {
      h2: "Open Summerlin or Green Valley first — 10–15 vs 25–35 minutes from Suite 100",
      body: "The card grid is a menu. The decision is a drive. Call (702) 222-1964. Named campuses and commute minutes are on each community page — not a slogan row.",
      pins: [
        {
          name: "Summerlin",
          note: "10–15 minutes. Red Rock trailheads and Downtown Summerlin on the same west clock.",
        },
        {
          name: "Green Valley / Henderson",
          note: "25–35 minutes. Tree canopy age and Coronado High School commute by address.",
        },
        {
          name: "The Ridges vs Southern Highlands",
          note: "Gate list vs I-15 south loop. Do not stack both on day one.",
        },
        {
          name: "North Las Vegas / Centennial Hills",
          note: "Aliante rec vs Arbor View High School commute. Open the page, then book.",
        },
      ],
    },
    {
      h2: "Two-ZIP tour, named-campus commute minutes, RealScout match — book from W Lake Mead Blvd",
      body: "Area tours start at 9406 W Lake Mead Blvd, Suite 100. We map Palo Verde, Coronado, Arbor View, and Legacy High School minutes at ccsd.net/zoning by address. Call (702) 222-1964.",
      pins: [
        {
          name: "Area tours",
          note: "One west loop or one Henderson loop. Parking, trees, and rec campuses — not a caption.",
        },
        {
          name: "Named campuses",
          note: "Commute minutes by street. Enrollment contacts belong on the campus page, not a rating slogan.",
        },
        {
          name: "RealScout match",
          note: "Live MLS filters at the desk. We do not duplicate RealScout AI recommendations.",
        },
        {
          name: "Then drive",
          note: "Open /neighborhoods/[slug], then Calendly. Office/GBP (702) 500-1942.",
        },
      ],
    },
  ],
  "/neighborhoods/the-ridges": [
    {
      h2: "900 homesites on 793 acres — Bear's Best, Falcon Ridge, Azure, Talon Ridge from Suite 100",
      body: "Gate lists are confirmed at 9406 W Lake Mead Blvd, Suite 100 before the 15–20 minute drive. Call (702) 222-1964. January 2026 on this page: $2.5M median, 67 DOM, 42 listings. Architectural guidelines vary by village — compare lot elevation and golf access at the desk.",
      pins: [
        {
          name: "Bear's Best",
          note: "Golf-club streets on this ridge plat. Membership rules are in the packet the week you tour.",
        },
        {
          name: "Falcon Ridge / Azure",
          note: "Two villages, two elevations. Do not stack both with a Henderson loop the same morning.",
        },
        {
          name: "Talon Ridge / Silver Ridge",
          note: "Ridge-top lots vs interior streets. Photography and access are scheduled, not improvised.",
        },
        {
          name: "Eagle Hills",
          note: "Sixth village on this 793-acre plat. Office/GBP (702) 500-1942. License S.0197614.LLC.",
        },
      ],
    },
  ],
  "/neighborhoods/summerlin": [
    {
      h2: "$625K median, 22 DOM, 342 listings, +6.8% YoY — Downtown Summerlin vs Red Rock from Suite 100",
      body: "The snapshot on this URL is not a CMA for your street. Call (702) 222-1964. Palo Verde High School commute minutes by address at 9406 W Lake Mead Blvd, Suite 100. 10–15 minute west-valley clock.",
      pins: [
        {
          name: "Downtown Summerlin",
          note: "Retail and dining on the same west clock. Park once, then fan to village streets.",
        },
        {
          name: "Red Rock trailheads",
          note: "Scenic Drive sits west of the villages. Measure from the listing, not a valley average.",
        },
        {
          name: "Palo Verde High School",
          note: "Named campus commute by street at ccsd.net/zoning. Enrollment contacts stay on the campus page.",
        },
        {
          name: "The Trails / Pueblo",
          note: "Typical first two villages from Suite 100. Red Rock Country Club is a separate golf-street block.",
        },
      ],
    },
  ],
  "/neighborhoods/southern-highlands": [
    {
      h2: "$750K median, 35 DOM, 156 listings, +7.2% YoY — I-15 south golf-and-ridge from Suite 100",
      body: "Southern Highlands is 25–35 minutes via I-15 south from 9406 W Lake Mead Blvd, Suite 100. Call (702) 222-1964. Robert Trent Jones Jr. scorecard 74.1 / 140 is on this page — HOA and golf membership rules are confirmed the week you tour.",
      pins: [
        {
          name: "Clubhouse / fairways",
          note: "Championship golf and ridge-top custom homes. Group them in one south-valley block.",
        },
        {
          name: "Cactus / I-15",
          note: "Typical Strip drive about 15 minutes once you are on I-15. Do not add a Ridges gate the same morning.",
        },
        {
          name: "Janet Lundahl Elementary",
          note: "Named CCSD campus by address. Commute minutes at the desk, not a rating slogan.",
        },
        {
          name: "Harry Reid International (LAS)",
          note: "Airport clock from this south plat. Office/GBP (702) 500-1942.",
        },
      ],
    },
  ],
  "/neighborhoods/skye-canyon": [
    {
      h2: "$550K median, 21 DOM, 124 listings — Skye Center then Floyd Lamb after Suite 100 registration",
      body: "Builder registration happens at 9406 W Lake Mead Blvd, Suite 100 before any northwest model row. Call (702) 222-1964. Then Skye Center, splash pad, and Floyd Lamb Park sit on a 20–25 minute 215 clock.",
      pins: [
        {
          name: "Skye Center",
          note: "Resort pool, splash pad, and sports courts. Walk the rec campus before plan rows.",
        },
        {
          name: "Floyd Lamb Park",
          note: "Immediately west of the villages. Trailheads are a separate stop from the model desk.",
        },
        {
          name: "Builder registration",
          note: "Toll, Lennar, or KB — register Dr. Jan before the first model. Credits are negotiated after registration.",
        },
        {
          name: "215 Beltway",
          note: "Northwest clock from Suite 100. Do not add an Inspirada south-Henderson loop the same afternoon.",
        },
      ],
    },
  ],
  "/neighborhoods/centennial-hills": [
    {
      h2: "$495K median, 25 DOM, 203 listings — Arbor View High School commute from Suite 100",
      body: "Centennial Hills is 15–20 minutes via US-95 from 9406 W Lake Mead Blvd, Suite 100. Call (702) 222-1964. Mountain-view lots near Centennial Hills Park vs closer-in streets toward the hospital campus — compare square footage, not a slogan.",
      pins: [
        {
          name: "Centennial Hills Park",
          note: "About 120 acres on this northwest loop. Start here when the brief includes trails.",
        },
        {
          name: "Arbor View High School",
          note: "Named campus commute by street at ccsd.net/zoning. Enrollment contacts stay on the campus page.",
        },
        {
          name: "Centennial Center",
          note: "Retail on the same US-95 clock. Park once, then fan to listing streets.",
        },
        {
          name: "Mountain View Hospital",
          note: "Hospital pin on this northwest run. Office/GBP (702) 500-1942.",
        },
      ],
    },
  ],
  "/neighborhoods/green-valley": [
    {
      h2: "$520K median, 26 DOM, 187 listings — 1988 canopy and The District from Suite 100",
      body: "Green Valley is 25–35 minutes via I-215 east from 9406 W Lake Mead Blvd, Suite 100. Call (702) 222-1964. Founded in 1988: 35-year street trees and larger lots than most newer Henderson villages. The District is the tour midpoint.",
      pins: [
        {
          name: "The District",
          note: "Green Valley Ranch retail midpoint. Park once, then fan to golf-course HOAs and interior streets.",
        },
        {
          name: "Green Valley High School",
          note: "Named campus commute by address. Do not swap this with a Summerlin Palo Verde clock.",
        },
        {
          name: "Coronado High School",
          note: "Second named Henderson campus on this page. Minutes at ccsd.net/zoning by street.",
        },
        {
          name: "35-year trees",
          note: "Canopy age is the comparison vs Inspirada rec campuses. Office/GBP (702) 500-1942.",
        },
      ],
    },
  ],
  "/neighborhoods/henderson": [
    {
      h2: "$485K median, 24 DOM, 1,280 listings — two Henderson villages per afternoon from Suite 100",
      body: "Green Valley, Anthem, Inspirada, Water Street, and Lake Las Vegas are not interchangeable. Call (702) 222-1964. From 9406 W Lake Mead Blvd, Suite 100 we pick two contrasting villages on a 25–35 minute east run.",
      pins: [
        {
          name: "Green Valley",
          note: "1988 canopy and The District. Open /neighborhoods/green-valley before stacking Inspirada.",
        },
        {
          name: "Inspirada",
          note: "2,000-acre Town Center rec. Builder registration still starts at Suite 100.",
        },
        {
          name: "Water Street",
          note: "Henderson downtown grid. Different HOA and parking than a golf-course village.",
        },
        {
          name: "Lake Las Vegas",
          note: "320-acre lake and shoreline golf. 35–45 minutes — do not add a Summerlin gate the same morning.",
        },
      ],
    },
  ],
  "/neighborhoods/inspirada": [
    {
      h2: "$525K median, 23 DOM, 98 listings — Town Center rec on a 2,000-acre Henderson plat from Suite 100",
      body: "Inspirada is 30–40 minutes from 9406 W Lake Mead Blvd, Suite 100. Call (702) 222-1964. Tours hit the central park, amenity center, and zero-entry pool in one south Henderson run. Builder registration still starts at this desk.",
      pins: [
        {
          name: "Town Center",
          note: "Pools and rec campus. Walk the building before any plan row.",
        },
        {
          name: "St. Rose / Eastern",
          note: "South Henderson commute pins. Measure from the listing, not a valley average.",
        },
        {
          name: "Zero-entry pool",
          note: "Amenity acreage on this plat. Square footage and HOA dues are the comparison points.",
        },
        {
          name: "Builder registration",
          note: "Register Dr. Jan before the first Inspirada model. Office/GBP (702) 500-1942.",
        },
      ],
    },
  ],
  "/neighborhoods/north-las-vegas": [
    {
      h2: "$385K median, 32 DOM, 892 listings — Aliante rec vs Craig Road from Suite 100",
      body: "North Las Vegas is 20–25 minutes via US-95 / I-15 from 9406 W Lake Mead Blvd, Suite 100. Call (702) 222-1964. Aliante recreation, Craig Road employment corridors, and new-construction villages are sequenced together — not mixed with a Henderson afternoon.",
      pins: [
        {
          name: "Aliante rec",
          note: "Golf and rec campus next to the retail strip. First stop when the ZIP is North Las Vegas.",
        },
        {
          name: "Legacy High School",
          note: "Named campus commute by street at ccsd.net/zoning. Enrollment contacts stay on the campus page.",
        },
        {
          name: "Craig Road",
          note: "Employment corridor timed to the actual facility — not a valley average.",
        },
        {
          name: "I-15 / US-95",
          note: "North clock from Suite 100. Entry bands on this page often $350K–$450K for newer product.",
        },
      ],
    },
  ],
  "/neighborhoods/mountains-edge": [
    {
      h2: "$475K median, 27 DOM, 234 listings — Exploration Peak then I-15/Blue Diamond from Suite 100",
      body: "Mountains Edge is 20–30 minutes via the southwest Beltway from 9406 W Lake Mead Blvd, Suite 100. Call (702) 222-1964. Trailheads at Exploration Peak and tile-roof resale streets fit a single southwest loop. Strip about 15–20 minutes; Harry Reid International (LAS) about 20 minutes.",
      pins: [
        {
          name: "Exploration Peak",
          note: "Trailhead first so you see the recreation campus, then listing streets.",
        },
        {
          name: "I-15",
          note: "Strip clock about 15–20 minutes from many streets. Confirm the listing, not a caption.",
        },
        {
          name: "Blue Diamond",
          note: "Southwest arterial on this loop. Do not stack with a Centennial Hills northwest morning.",
        },
        {
          name: "Harry Reid International (LAS)",
          note: "Airport about 20 minutes from this southwest plat. Office/GBP (702) 500-1942.",
        },
      ],
    },
  ],
  "/about": [
    {
      h2: "Ridges $1M+ files, Toll Brothers registration, Sun City packets, CA net sheets — one desk",
      body: "Pick a file type at 9406 W Lake Mead Blvd, Suite 100. License S.0197614.LLC. Call (702) 222-1964. We do not route you through a call center.",
      pins: [
        {
          name: "Residential resale",
          note: "Single-family, condo, and townhome files across Las Vegas and Henderson. Square footage and HOA dues first.",
        },
        {
          name: "$1M+ and new construction",
          note: "The Ridges, MacDonald Highlands, Southern Highlands. Toll Brothers, Lennar, Century — register Dr. Jan before models.",
        },
        {
          name: "55+ occupancy packets",
          note: "Sun City Summerlin, Sun City Anthem, Del Webb at Lake Las Vegas. HOPA rules at the desk, then one rec campus.",
        },
        {
          name: "Investment and California inbound",
          note: "Rental caps and CA net sheets. Nevada has no state income tax — HOA still applies. Open /buyers/california-relocator.",
        },
      ],
    },
    {
      h2: "4.9-star GBP reviews on this URL — Maps ranking uses the Suite 100 pin",
      body: "Review schema and the Google Reviews link stay aligned with 9406 W Lake Mead Blvd, Suite 100. Call (702) 222-1964. Office/GBP (702) 500-1942. License S.0197614.LLC.",
      pins: [
        {
          name: "View Google Reviews",
          note: "Same pin as the footer NAP. Do not use a different street.",
        },
        {
          name: "Dated files",
          note: "Closed volume cited on this site: $127M+ since 2008.",
        },
        {
          name: "Hours",
          note: "Mon–Fri 9am–6pm, Sat 10am–4pm, Sunday by appointment.",
        },
        {
          name: "Call",
          note: "Client CTA (702) 222-1964. Do not swap with the office line.",
        },
      ],
    },
  ],
  "/buyers/california-relocator": [
    {
      h2: "0% NV income tax vs CA 9.3%–13.3% — $25,000+ on a $250K W-2 at Suite 100",
      body: "Run the net sheet at 9406 W Lake Mead Blvd before you fly. Nevada has no state income tax. HOA, property tax, and insurance still apply. Call (702) 222-1964.",
      pins: [
        {
          name: "0% NV state income tax",
          note: "Line item vs CA 9.3%–13.3%. Confirm with your CPA. We will not invent a refund.",
        },
        {
          name: "40–60% lower published prices",
          note: "January 2026 valley median cited on this site is $450K. Summerlin $625K. Henderson $485K.",
        },
        {
          name: "$150K+ five-year example",
          note: "On a $200K income cited on this URL. Your W-2 can differ. Sheet at this desk.",
        },
        {
          name: "$25,000+ on a $250K W-2",
          note: "Annual state-tax example on this page. Property tax and HOA still apply. Office/GBP (702) 500-1942.",
        },
      ],
    },
    {
      h2: "$1.2M CA 1,800 sq ft vs $700K Summerlin 3,000 sq ft — net sheet at this desk",
      body: "California proceeds vs Las Vegas ZIP targets are compared at Suite 100 or by video. Call (702) 222-1964. We will not invent a sale price on either side.",
      pins: [
        {
          name: "$1.2M / 1,800 sq ft CA",
          note: "Example on this URL: 3BR/2BA. Confirm YOUR net with the California listing agent.",
        },
        {
          name: "$700K / 3,000 sq ft Summerlin",
          note: "4BR/3BA example plus cash left. 10–15 minutes from 9406 W Lake Mead Blvd.",
        },
        {
          name: "$550K Henderson 4BR",
          note: "25–35 minutes via I-215 east. Square footage vs Inspirada new rows after registration.",
        },
        {
          name: "$450K new construction",
          note: "Register Dr. Jan at Suite 100 before any model. Open /new-construction. Office/GBP (702) 500-1942.",
        },
      ],
    },
    {
      h2: "Summerlin 10–15 min, Henderson 25–35, Ridges 15–20 — three inbound clocks from W Lake Mead Blvd",
      body: "Pick one west afternoon or one east afternoon. Palo Verde High School and Coronado High School commutes are mapped by address at ccsd.net/zoning. Call (702) 222-1964.",
      pins: [
        {
          name: "Summerlin",
          note: "10–15 minutes. Downtown Summerlin retail, 150+ parks, Red Rock Canyon. Median cited here $726K.",
        },
        {
          name: "Henderson / Inspirada",
          note: "25–35 minutes. 2,000-acre Inspirada campus and named rec. Median cited here $530K.",
        },
        {
          name: "The Ridges",
          note: "15–20 minutes to the guardhouse. Published bands $1.5M–$10M+. Gate list from Suite 100.",
        },
        {
          name: "Three-day inbound week",
          note: "Day 1 Summerlin, Day 2 Henderson, Day 3 55+ or builder after registration. Harry Reid International (LAS).",
        },
      ],
    },
    {
      h2: "Video net sheet at Suite 100, then a three-day inbound week — not a tax slogan",
      body: "Bring California proceeds and a target ZIP. Nevada has no state income tax; HOA still applies. Call (702) 222-1964. 9406 W Lake Mead Blvd, Suite 100.",
      pins: [
        {
          name: "Video intake",
          note: "Net sheet before you buy a ticket. We do not tour twelve ZIPs on day one.",
        },
        {
          name: "Harry Reid International (LAS)",
          note: "Airport name on this file. Direct flights to SFO, LAX, SJC are a calendar item, not a caption.",
        },
        {
          name: "Two-ZIP tour",
          note: "Summerlin then Henderson, or Ridges gate first if the brief is $1.5M+.",
        },
        {
          name: "Client CTA",
          note: "(702) 222-1964. Office/GBP (702) 500-1942. Do not swap the lines.",
        },
      ],
    },
  ],
  "/buyers": [
    {
      h2: "January 2026 buyer snapshot: $450K median, 4,850 listings, 28 DOM — then two ZIPs",
      body: "Valley figures on this page. Summerlin and Henderson medians live on their community pages. Call (702) 222-1964. Lender letter at Suite 100 before the first showing.",
      pins: [
        {
          name: "$450K median",
          note: "January 2026 valley snapshot cited here. Not a CMA for your offer.",
        },
        {
          name: "4,850 active listings",
          note: "Filter beds, baths, and square footage in RealScout. Do not screenshot 40 cards.",
        },
        {
          name: "28 days on market",
          note: "Average. Well-priced files move faster. Letter in hand before we drive.",
        },
        {
          name: "+4.2% year over year",
          note: "Cited on this page. Your ZIP can differ. Two-ZIP tour from 9406 W Lake Mead Blvd.",
        },
      ],
    },
  ],
  "/faq": [
    {
      h2: "Accordion closed? Call (702) 222-1964 or book Calendly at Suite 100",
      body: "FAQ copy is the desk version of the same questions. Bring a ZIP and a pre-approval. 9406 W Lake Mead Blvd, Suite 100 is about 10 minutes from most Summerlin villages. Office/GBP (702) 500-1942.",
      pins: [
        {
          name: "Live Q&A",
          note: "Named campuses and commute minutes replace slogans. Call or text (702) 222-1964.",
        },
        {
          name: "Calendly",
          note: "Phone, showing, or Suite 100 meeting. Photo ID and target ZIPs.",
        },
        {
          name: "Email",
          note: "homes@heyberkshire.com for documents. Do not send listing keys by unsecured email.",
        },
        {
          name: "Maps pin",
          note: "Berkshire Hathaway HomeServices Nevada Properties. License S.0197614.LLC.",
        },
      ],
    },
  ],
  "/55-plus-communities/sun-city-summerlin": [
    {
      h2: "7,700 homes, four rec campuses, 10–15 minutes from 9406 W Lake Mead Blvd",
      body: "Highland Falls, Palm Valley, and Eagle Crest are three courses. Mountain Shadows, Sun Shadows, Pinnacle, and Desert Vista are four rec buildings. Call (702) 222-1964. HOA cited on this page: $155–$195. Age-restriction rules at Suite 100 first.",
      pins: [
        {
          name: "Mountain Shadows",
          note: "Rec campus walk before you pick a street. Same west clock as Suite 100.",
        },
        {
          name: "Highland Falls",
          note: "Original golf campus. Published band on this page starts near $320K. Confirm the week you tour.",
        },
        {
          name: "Eagle Crest",
          note: "Newer plan rows on this campus. Do not tour all three courses in one afternoon.",
        },
        {
          name: "Mountain View Hospital",
          note: "Adjacent pin. Commute minutes mapped from the listing, not a valley average.",
        },
      ],
    },
  ],
  "/55-plus-communities/trilogy-summerlin": [
    {
      h2: "Shea clubhouse, spa, and plan rows — 12–18 minutes from Suite 100",
      body: "Trilogy sits on the office side of the valley. Downtown Summerlin retail is a short hop after the clubhouse. Call (702) 222-1964. HOA cited on this page: $250–$350. Register before walking models.",
      pins: [
        {
          name: "Clubhouse restaurant",
          note: "On-site dining is a HOA amenity you pay for. Walk it before any plan row.",
        },
        {
          name: "Spa and fitness",
          note: "Square footage is clubhouse-scale, not a four-building Sun City rec campus.",
        },
        {
          name: "Shea plans",
          note: "About 800+ homes on this page. Open floor plans are listing facts — confirm the week you tour.",
        },
        {
          name: "Do not add Anthem",
          note: "Henderson 55+ is a separate east clock. Call (702) 222-1964 from 9406 W Lake Mead Blvd.",
        },
      ],
    },
  ],
  "/55-plus-communities/heritage-stonebridge": [
    {
      h2: "Staffed gate, 1,100+ homes, Downtown Summerlin retail — 12–18 minutes from Suite 100",
      body: "Guest lists are booked from 9406 W Lake Mead Blvd so arrival is not improvised. Call (702) 222-1964. Published band on this page: $400K–$750K. HOA $175–$220. This is not a 7,700-home campus.",
      pins: [
        {
          name: "Staffed gate",
          note: "We put you on the list that morning. Gate codes stay off group texts.",
        },
        {
          name: "Clubhouse",
          note: "Smaller rec building than Sun City Summerlin. Walk it before you pick a street.",
        },
        {
          name: "Downtown Summerlin",
          note: "Retail on the same west hop as Suite 100. Not a Henderson add-on.",
        },
        {
          name: "Occupancy packet",
          note: "Age-restriction and guest rules at the desk. Office/GBP (702) 500-1942.",
        },
      ],
    },
  ],
  "/55-plus-communities/solera-anthem": [
    {
      h2: "1,200-home Henderson campus, staffed gate — 30–35 minutes from Suite 100",
      body: "All residents must be 55+ here — confirm the HOA occupancy rule in writing. Call (702) 222-1964. Published band on this page: $380K–$650K. HOA $170–$210. Compare Sun City Anthem on the same east clock only if that is the brief.",
      pins: [
        {
          name: "Occupancy in writing",
          note: "This campus is all-55+. Packet at 9406 W Lake Mead Blvd before the drive.",
        },
        {
          name: "Clubhouse and pool",
          note: "Boutique rec, not Anthem Center's 64,000 sq ft. Walk one building.",
        },
        {
          name: "Staffed gate",
          note: "Guest list from Suite 100. Do not mix with a Summerlin 55+ morning.",
        },
        {
          name: "Anthem parks",
          note: "Nearby parks are on this Henderson clock. Call (702) 222-1964.",
        },
      ],
    },
  ],
  "/55-plus-communities/sun-city-aliante": [
    {
      h2: "42,000 sq ft rec, 18-hole course, 2,800+ homes — 20–25 minutes north from Suite 100",
      body: "Golf and rec sit next to the Aliante retail strip. Call (702) 222-1964. Occupancy rules at 9406 W Lake Mead Blvd before the north loop. Do not add Henderson the same day.",
      pins: [
        {
          name: "42,000 sq ft rec",
          note: "Pools, fitness, tennis, pickleball. Walk the building before fairway vs interior lots.",
        },
        {
          name: "18-hole course",
          note: "Winds through the campus. Resident rates are in the packet — confirm the week you tour.",
        },
        {
          name: "Aliante retail",
          note: "Adjacent strip. Craig Road and I-15 commutes mapped if you still work.",
        },
        {
          name: "North Vista Hospital",
          note: "Hospital pin on this north clock. Call (702) 222-1964. Office/GBP (702) 500-1942.",
        },
      ],
    },
  ],
  "/55-plus-communities/del-webb-lake-las-vegas": [
    {
      h2: "$400K–$900K, pickleball, 320-acre lake — 35–45 minutes from Suite 100",
      body: "Del Webb at Lake Las Vegas is a 2016-to-present 55+ campus. Occupancy at 9406 W Lake Mead Blvd before the Henderson drive. Call (702) 222-1964. HOA cited on this page: $200–$280. Do not stack with a Summerlin 55+ morning.",
      pins: [
        {
          name: "320-acre lake",
          note: "Shoreline and golf are on this east-Henderson clock. Measure from the listing.",
        },
        {
          name: "Pickleball and rec",
          note: "Walk the rec building before any plan row. About 1,800+ homes on this page.",
        },
        {
          name: "2016+ construction",
          note: "Newer product than 1989 Sun City Summerlin. Confirm HOA packet the week you tour.",
        },
        {
          name: "East clock only",
          note: "35–45 minutes from Suite 100. Office/GBP (702) 500-1942.",
        },
      ],
    },
  ],
};
