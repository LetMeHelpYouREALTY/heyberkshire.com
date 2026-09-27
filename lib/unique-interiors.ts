/**
 * Unique H2/H3 body copy for every App Router page.
 * Google Maps/GBP ranking (2026): one useful page per intent, matching NAP,
 * place-specific photos and facts—not city-name swaps.
 */

export type UniqueInteriorCopy = {
  h2: string;
  body: string;
  facts: [string, string, string];
  h3: string;
  h3Body: string;
};

export const uniqueInteriors: Record<string, UniqueInteriorCopy> = {
  "/neighborhoods/summerlin": {
    h2: "What a Summerlin tour from Lake Mead Blvd actually covers",
    body: "From 9406 W Lake Mead Blvd, Suite 100 we typically start in The Trails or Pueblo, then loop Red Rock Country Club if the budget includes golf-course streets. Palo Verde High School commute minutes are mapped to each listing before we leave the office.",
    facts: [
      "150+ parks and 150+ miles of trails inside the Howard Hughes villages",
      "10–15 minute drive from the GBP office pin to most Summerlin streets",
      "Median about $625,000 (January 2026); The Ridges and RCC list much higher",
    ],
    h3: "Red Rock trailheads and named campuses on the same loop",
    h3Body:
      "Scenic Drive and Red Rock Canyon trailheads sit west of the villages. Named campuses on the same west-valley loop include Palo Verde High School, West Career & Technical Academy, and Sig Rogich Middle School. Call (702) 222-1964 to lock a same-afternoon village tour.",
  },
  "/neighborhoods/the-ridges": {
    h2: "Guard-gate timing for The Ridges estate showings",
    body: "Ridges appointments are booked from Suite 100 so gate lists and off-market windows are confirmed before we drive. Typical run is 15–20 minutes from 9406 W Lake Mead Blvd. We do not text estate addresses on unsecured threads.",
    facts: [
      "Custom estates, golf, and ridge-top views above Red Rock Country Club",
      "Guard-gate check-in coordinated the morning of the tour",
      "Listings often exceed $2 million; photography and access are scheduled, not improvised",
    ],
    h3: "Pool terraces and valley overlooks on the showing route",
    h3Body:
      "Most Ridges tours include the club campus, selected ridge streets, and a return to Downtown Summerlin if you also want retail context. Call (702) 222-1964 for a private gate window.",
  },
  "/neighborhoods/southern-highlands": {
    h2: "South-valley golf and ridge streets in one tour block",
    body: "Southern Highlands is 25–35 minutes via I-15 south from the Lake Mead Blvd office. We group golf-course fairway lots and ridge-top streets into one south-valley block so you are not crossing the valley twice.",
    facts: [
      "Championship golf, clubhouse, and ridge-top custom homes",
      "Typical Strip drive about 15 minutes once you are on I-15",
      "Janet Lundahl Elementary and other named CCSD campuses by address",
    ],
    h3: "Clubhouse, fairways, and I-15 access",
    h3Body:
      "Ask for current HOA dues, golf membership rules, and commute minutes to Harry Reid International Airport. Call (702) 222-1964 to schedule the south-valley block from Suite 100.",
  },
  "/neighborhoods/skye-canyon": {
    h2: "Skye Canyon model rows and resale streets in one northwest loop",
    body: "Skye Canyon is 20–25 minutes via the 215 from 9406 W Lake Mead Blvd. Builder registration happens at the office first. Then we walk model rows and adjacent resale streets without a second freeway hop.",
    facts: [
      "New construction plus resales next to Skye Center and trailheads",
      "Floyd Lamb Park sits immediately west of the villages",
      "Register Dr. Jan as buyer agent before the first model visit",
    ],
    h3: "Trails, splash pad, and northwest commute minutes",
    h3Body:
      "Resort pool, splash pad, sports courts, and desert trails are the amenity core. Call (702) 222-1964 to register and tour the same day.",
  },
  "/neighborhoods/centennial-hills": {
    h2: "Mountain-view streets near Floyd Lamb from the office pin",
    body: "Centennial Hills is 15–20 minutes via US-95 from Suite 100. We compare mountain-view lots near Centennial Hills Park with closer-in streets toward the hospital campus, then map Arbor View High School commute minutes by address.",
    facts: [
      "Northwest Las Vegas with US-95 access and desert mountain backdrop",
      "Centennial Center retail and Centennial Hills Park on the same loop",
      "Median often cited near $398,000–$450,000 depending on vintage and lot",
    ],
    h3: "Arbor View High School commute, not slogans",
    h3Body:
      "Named campuses and drive times replace generic school talk. Call (702) 222-1964 with the addresses you want timed from the office.",
  },
  "/neighborhoods/green-valley": {
    h2: "Green Valley trees, golf, and The District as a Henderson block",
    body: "Green Valley is 25–35 minutes via I-215 east. Founded in 1988, the streets have 35-year-old trees and larger lots than most newer Henderson villages. The District at Green Valley Ranch is the practical midpoint for listing tours.",
    facts: [
      "Median about $520,000 (January 2026); 26 days on market typical",
      "Green Valley High School and Coronado High School named campuses",
      "Golf, The District retail, and 15–25 minute Strip drives from many streets",
    ],
    h3: "The District as the tour midpoint",
    h3Body:
      "We often park at The District, then fan out to golf-course HOAs and interior streets. Call (702) 222-1964 to start that Henderson block from Lake Mead Blvd.",
  },
  "/neighborhoods/inspirada": {
    h2: "Inspirada amenity center and builder rows as a south Henderson block",
    body: "Inspirada is 30–40 minutes from 9406 W Lake Mead Blvd. Tours hit the central park, amenity center, zero-entry pool, and builder/resale rows in one south Henderson run.",
    facts: [
      "Median about $525,000 (January 2026)",
      "Central park, walking paths, and resort-style rec campus",
      "Builder registration still starts at the west-valley office",
    ],
    h3: "Central park and rec campus on the same stop",
    h3Body:
      "Square footage, HOA dues, and park acreage are the comparison points—not slogans. Call (702) 222-1964 to schedule the south Henderson block.",
  },
  "/neighborhoods/henderson": {
    h2: "Henderson villages sequenced from one west-valley start",
    body: "Green Valley, Anthem, Inspirada, Water Street, and Lake Las Vegas are not interchangeable. From Suite 100 we pick two contrasting villages and tour them as a 25–35 minute east run so you compare trees vs new rec campuses in one afternoon.",
    facts: [
      "Nevada's second-largest city; 60+ parks and 15–25 minute Strip drives by village",
      "Coronado High School commute is a common Henderson comparison",
      "Office NAP matches Google Business: 9406 W Lake Mead Blvd, Suite 100",
    ],
    h3: "Which Henderson village first",
    h3Body:
      "Tell Dr. Jan Duffy your commute target (Strip, airport, or a named campus) and HOA budget. Call (702) 222-1964. We will not city-swap copy—each village gets its own facts.",
  },
  "/neighborhoods/mountains-edge": {
    h2: "Exploration Peak trails and southwest resales in one loop",
    body: "Mountains Edge is 20–30 minutes via the southwest Beltway from the GBP pin. Trailheads at Exploration Peak and tile-roof resale streets fit a single southwest loop.",
    facts: [
      "I-215 / I-15 access: Strip about 15–20 minutes, airport about 20 minutes",
      "Parks, desert trails, and newer construction mix",
      "Value comparison often vs Centennial Hills and North Las Vegas",
    ],
    h3: "Trailhead first, then streets",
    h3Body:
      "We start at the trailhead so you see the recreation campus, then drive listing streets. Call (702) 222-1964 to lock the southwest loop.",
  },
  "/neighborhoods/north-las-vegas": {
    h2: "Aliante, Craig Road, and new villages grouped as a north tour",
    body: "North Las Vegas is 20–25 minutes via US-95 / I-15. Aliante recreation, Craig Road employment corridors, and new-construction villages are sequenced together from Suite 100.",
    facts: [
      "Entry price points often $350,000–$450,000 for newer product",
      "Legacy High School commute is a common named-campus check",
      "Aliante golf and rec campus sit next to the retail strip",
    ],
    h3: "Aliante rec campus as the north anchor",
    h3Body:
      "If you work warehouse or medical shifts on the north end, we time drive minutes to the actual facility—not a valley average. Call (702) 222-1964.",
  },
  "/55-plus-communities/sun-city-summerlin": {
    h2: "Three golf campuses and four rec centers without a long freeway run",
    body: "Sun City Summerlin is 10–15 minutes from 9406 W Lake Mead Blvd. Highland Falls, Palm Valley, and Eagle Crest plus Mountain Shadows, Sun Shadows, Pinnacle, and Desert Vista rec centers can be previewed in one west-valley afternoon.",
    facts: [
      "About 7,700 homes; prices typically $320,000–$850,000",
      "HOA about $155–$195/month (confirm current packet)",
      "Mountain View Hospital sits adjacent to the campus",
    ],
    h3: "Rec-center tour before you pick a street",
    h3Body:
      "We walk one rec center and one golf campus before writing offers so you know the amenity you will actually use. Call (702) 222-1964. Age-restriction rules are reviewed at Suite 100 first.",
  },
  "/55-plus-communities/sun-city-anthem": {
    h2: "Anthem Center and upper-elevation streets as a Henderson 55+ block",
    body: "Sun City Anthem is 30–35 minutes from the Lake Mead Blvd pin. Anthem Center, golf, and upper-elevation streets are one Henderson 55+ block—not mixed with Summerlin 55+ the same morning.",
    facts: [
      "Del Webb 55+ campus in Henderson with golf and rec",
      "McCullough Range views on many upper streets",
      "HOA and age-qualification rules reviewed at Suite 100 before the drive",
    ],
    h3: "Golf fairways against the McCullough Range",
    h3Body:
      "Bring the HOA packet questions to the office, then we tour fairway vs interior streets. Call (702) 222-1964 to book the Henderson 55+ block.",
  },
  "/55-plus-communities/trilogy-summerlin": {
    h2: "Trilogy clubhouse, spa, and Shea plans on the office side of the valley",
    body: "Trilogy at Summerlin is 12–18 minutes from Suite 100. Clubhouse, spa, and Shea Homes plan rows sit on the same west-valley side as 9406 W Lake Mead Blvd—no Henderson freeway tax.",
    facts: [
      "Shea 55+ campus with resort clubhouse and pool terrace",
      "Downtown Summerlin retail is a short hop after the clubhouse",
      "Register for a private tour before walking model streets",
    ],
    h3: "Clubhouse pool terrace as the first stop",
    h3Body:
      "See the amenity you will pay HOA for, then walk plans. Call (702) 222-1964. Berkshire Hathaway HomeServices Nevada Properties holds the listing or buyer paperwork at Suite 100.",
  },
  "/55-plus-communities/heritage-stonebridge": {
    h2: "24/7 gate and Downtown Summerlin retail from Lake Mead Blvd",
    body: "Heritage at Stonebridge is 12–18 minutes from the GBP office. The staffed gate and Downtown Summerlin retail are a short west-valley hop—useful if you want 55+ with a Summerlin ZIP and a gate, not a 7,700-home campus.",
    facts: [
      "Smaller 55+ campus with a staffed gate",
      "Downtown Summerlin shops and dining next door",
      "Age-restriction and guest rules reviewed at Suite 100",
    ],
    h3: "Gate arrival, then clubhouse",
    h3Body:
      "We put you on the guest list from the office so arrival is not improvised. Call (702) 222-1964.",
  },
  "/55-plus-communities/solera-anthem": {
    h2: "Solera's 1,200-home campus toured with nearby Anthem parks",
    body: "Solera at Anthem is 30–35 minutes from Suite 100. This smaller 55+ campus (about 1,200 homes) is toured with nearby Anthem parks rather than hopscotching the whole valley. All residents must be 55+ here—confirm the HOA occupancy rule in writing.",
    facts: [
      "Typical list range about $380,000–$650,000",
      "HOA often cited about $170–$210/month (confirm packet)",
      "Staffed gate, clubhouse, resort pool, fitness",
    ],
    h3: "Boutique clubhouse and pool, not a mega rec campus",
    h3Body:
      "If you want fewer homes and a staffed gate in Henderson, Solera is the comparison to Sun City Anthem. Call (702) 222-1964 to see both in one Henderson 55+ block only if that is the brief.",
  },
  "/55-plus-communities/sun-city-aliante": {
    h2: "18-hole course and rec campus next to the Aliante retail strip",
    body: "Sun City Aliante is 20–25 minutes from 9406 W Lake Mead Blvd. The golf course and rec campus sit next to Aliante retail for a compact north tour—no need to add Henderson the same day.",
    facts: [
      "North Las Vegas 55+ with golf and rec in one campus",
      "Aliante Casino and retail strip adjacent",
      "Desert-hills backdrop on many streets",
    ],
    h3: "Rec campus first, then fairway vs interior lots",
    h3Body:
      "We time Craig Road and I-15 commutes if you still work. Call (702) 222-1964 to book the north 55+ loop.",
  },
  "/55-plus-communities/del-webb-lake-las-vegas": {
    h2: "Lake-adjacent Del Webb plans as an east-Henderson half day",
    body: "Del Webb at Lake Las Vegas is 35–45 minutes from the office pin. Lake-adjacent plans and Reflection Bay golf are blocked as an east-Henderson half day so you are not mixing Summerlin 55+ into the same morning.",
    facts: [
      "Henderson lake setting with golf and Del Webb plans",
      "Longer drive is the trade for water and golf context",
      "HOA and dock/golf rules reviewed at Suite 100 first",
    ],
    h3: "Shoreline and golf before floor plans",
    h3Body:
      "See the lake and golf setting, then walk interiors. Call (702) 222-1964. Start at 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134.",
  },
  "/": {
    h2: "Same-day Summerlin-then-Henderson routing from the Maps pin",
    body: "Buyer and seller appointments start at Berkshire Hathaway HomeServices Nevada Properties, 9406 W Lake Mead Blvd, Suite 100. We loop Summerlin first (10–15 minutes) and Henderson second (25–35 minutes) so you are not crisscrossing I-15.",
    facts: [
      "GBP name, address, and office line (702) 500-1942 match this pin",
      "Call or text (702) 222-1964 for a same-day showing window",
      "Live MLS search sits on RealScout; we sequence the tour from this desk",
    ],
    h3: "Office hours and how to start",
    h3Body:
      "Mon–Fri 9am–6pm, Sat 10am–4pm, Sunday by appointment. License S.0197614.LLC. Book a consult, then we drive. Directions and Google Reviews links are in the footer on every page.",
  },
  "/about": {
    h2: "Meet Dr. Jan Duffy at Suite 100, not a call center",
    body: "License S.0197614.LLC appointments are held at 9406 W Lake Mead Blvd, Suite 100 unless we meet at a listing. The west-valley office is the Google Business pin—walk in during posted hours or book Calendly.",
    facts: [
      "Brokerage: Berkshire Hathaway HomeServices Nevada Properties",
      "Markets: Las Vegas, Henderson, Summerlin",
      "Client CTA (702) 222-1964 · office/GBP (702) 500-1942",
    ],
    h3: "Parking, hours, and the consult desk",
    h3Body:
      "Visitor parking faces W Lake Mead Blvd. Bring pre-approval or an APN. Call (702) 222-1964 if you need a Sunday appointment.",
  },
  "/contact": {
    h2: "Walk-in desk and Calendly showings from the same pin",
    body: "Walk-ins during posted hours are welcome at Suite 100. Calendly showings can start here and continue to the property. Email homes@heyberkshire.com for documents; do not send listing keys by unsecured email.",
    facts: [
      "Address: 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134",
      "Call or text (702) 222-1964 · office (702) 500-1942",
      "Map embed, Directions, and View Google Reviews are on this page and the footer",
    ],
    h3: "What to bring to the contact desk",
    h3Body:
      "Photo ID, lender contact, and target ZIPs. We map commute minutes before the first tour. Call (702) 222-1964 if you are already in the parking lot.",
  },
  "/google-business": {
    h2: "This page exists so Maps, GBP, and the website say the same thing",
    body: "Name, address, and office line (702) 500-1942 match the Google listing. Call or text (702) 222-1964 for a same-day reply. Hours, map pin, reviews, and photos on this URL are kept aligned with the Business Profile.",
    facts: [
      "9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134",
      "Mon–Fri 9am–6pm, Sat 10am–4pm, Sunday by appointment",
      "Reviews, posts, and photos should match what you see on Google",
    ],
    h3: "Call, Directions, and Reviews from this URL",
    h3Body:
      "Use the buttons on this page to call, get directions, or open Google Reviews. Inconsistent NAP is a Maps ranking leak—this page is the on-site source of truth.",
  },
  "/faq": {
    h2: "Live Q&A is 10 minutes from most Summerlin villages",
    body: "Bring loan pre-approval and a target ZIP to Suite 100. We map commute minutes to listings from this desk instead of answering with valley-wide averages only.",
    facts: [
      "FAQs below are Fair Housing-safe: square footage, amenities, named campuses, commute times",
      "Client CTA (702) 222-1964",
      "Office NAP matches GBP",
    ],
    h3: "Still stuck after the accordion",
    h3Body:
      "Call (702) 222-1964 or book Calendly. Dr. Jan Duffy will answer from the actual addresses you care about.",
  },
  "/services": {
    h2: "Buy, sell, 55+, and relocation paperwork start at one desk",
    body: "Each service meeting starts at 9406 W Lake Mead Blvd, Suite 100 so MLS, showing routes, and BHHS paperwork use the same west-valley start.",
    facts: [
      "Buyer representation, listing, 55+ campuses, California relocation",
      "RealScout handles property matching; we do not duplicate that engine",
      "Follow Up Boss is the CRM—native RealScout sync, no custom clone",
    ],
    h3: "Pick a service, then pick a drive",
    h3Body:
      "Call (702) 222-1964. We will not send you to a generic city page—each service has its own interior and next-step CTA.",
  },
  "/security-policy": {
    h2: "Showing access and data questions stay at Suite 100",
    body: "Privacy, lockbox, and showing-access questions are handled at the office. We do not collect listing keys by unsecured email.",
    facts: [
      "Email homes@heyberkshire.com for written policy questions",
      "Office (702) 500-1942 matches GBP · CTA (702) 222-1964",
      "Address: 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134",
    ],
    h3: "What we will not do",
    h3Body:
      "No unsecured key photos, no off-platform wire instructions. Call (702) 222-1964 if a message claiming to be Dr. Jan asks you to change wiring details.",
  },
  "/listings": {
    h2: "Live MLS search, then a sequenced tour from Lake Mead Blvd",
    body: "Save RealScout results on this page, then we sequence Summerlin, Henderson, or 55+ stops from the office pin. This hub is the search chassis—not a copy of the buyer-process page.",
    facts: [
      "Agent ID QWdlbnQtMjI1MDUw on RealScout widgets",
      "MLS disclaimer and listing attribution stay visible",
      "Same-day tours start at 9406 W Lake Mead Blvd, Suite 100",
    ],
    h3: "How to use the live search without getting lost",
    h3Body:
      "Filter beds, baths, and square footage, save the list, then call (702) 222-1964. We will not tour 12 ZIPs in one day.",
  },
  "/home-valuation": {
    h2: "Comps at the desk, then photos at the house",
    body: "Bring the APN or address to Suite 100. Comps are pulled here before we drive to the house for photos and pricing. Overpriced homes sit; we price to recent closed sales, not a wish list.",
    facts: [
      "CMA review on-site or at your property",
      "BHHS marketing scope is set before the photographer is booked",
      "Call (702) 222-1964 · office (702) 500-1942",
    ],
    h3: "What a priced-to-comps listing looks like",
    h3Body:
      "Days on market climb when the ask ignores last month's closes. Call (702) 222-1964 for a CMA that starts at this office.",
  },
  "/new-construction": {
    h2: "Register the buyer agent before any model-home visit",
    body: "Most Las Vegas and Henderson builders require your agent on the first visit. Register Dr. Jan Duffy at 9406 W Lake Mead Blvd, Suite 100 before you walk a model row in Skye Canyon, Inspirada, or Cadence.",
    facts: [
      "Registration first, models second",
      "Incentives and lot premiums change weekly—do not rely on last month's flyer",
      "Resale vs new is compared with warranties, HOA, and lot size",
    ],
    h3: "Northwest vs south Henderson builder rows",
    h3Body:
      "We pick one builder corridor per tour day. Call (702) 222-1964 to register, then drive.",
  },
  "/buyers": {
    h2: "Pre-approval, search criteria, and first-tour routing at one desk",
    body: "Buyer-agent onboarding happens at Suite 100 so you are not touring without a plan. RealScout does matching; we sequence the drives and the offer.",
    facts: [
      "Named campuses and commute minutes, not school ratings as slogans",
      "Call (702) 222-1964 to start",
      "NAP matches Google Business",
    ],
    h3: "Keys-on-the-counter is the last step, not the first",
    h3Body:
      "Search, tour, offer, inspection, close. Call (702) 222-1964 when pre-approval is in hand.",
  },
  "/buyers/first-time-buyers": {
    h2: "FHA, VA, and Nevada down-payment programs before the first tour",
    body: "First-time paperwork is reviewed at 9406 W Lake Mead Blvd, Suite 100. Then we schedule model or resale tours. North Las Vegas, Mountains Edge, and Centennial Hills are common entry ZIPs—compared by square footage and commute, not slogans.",
    facts: [
      "Lender intro and program checklist at this desk",
      "Arbor View High School and Legacy High School commute mapping by address",
      "Call (702) 222-1964",
    ],
    h3: "Entry ZIPs without guessing prices",
    h3Body:
      "Ask for current list ranges the week you tour. Call (702) 222-1964. UNKNOWN figures are not invented here.",
  },
  "/buyers/california-relocator": {
    h2: "California sale proceeds vs Las Vegas ZIP targets, then a tour week",
    body: "We compare your California net to Las Vegas ZIP targets at Suite 100 (or video), then schedule a concentrated Summerlin-then-Henderson tour week so you are not flying in for a random open-house hopscotch.",
    facts: [
      "No state income tax in Nevada; property-tax and insurance still apply",
      "Palo Verde High School and Coronado High School are named commute checks",
      "BHHS destination coordination from this office",
    ],
    h3: "Three-day itinerary, not a week of wasted drives",
    h3Body:
      "Day 1 Summerlin, Day 2 Henderson, Day 3 55+ or new construction. Call (702) 222-1964 to lock dates.",
  },
  "/buyers/luxury-homes-las-vegas": {
    h2: "Private luxury search—gate codes stay off group texts",
    body: "The Ridges is about 15–20 minutes from Suite 100. Gate codes and off-market times are confirmed here. This page is the buyer luxury search; the /luxury-homes hub is listing-or-search intake for either side.",
    facts: [
      "H1 on this URL: Private Luxury Home Search in Las Vegas",
      "Silverado High School commute is a Henderson luxury check when relevant",
      "Call (702) 222-1964",
    ],
    h3: "Infinity-pool estates vs golf-course lots",
    h3Body:
      "Tell Dr. Jan the view you want (Strip, Red Rock, or golf). We will not send a PDF of 40 estates. Call (702) 222-1964.",
  },
  "/sellers": {
    h2: "Pricing and BHHS marketing scoped at Suite 100, then the CMA walkthrough",
    body: "Listing prep happens at the office, then we go on-site. Homes priced above last month's closes sit. We price to the comps and launch BHHS marketing once photos are done.",
    facts: [
      "Photographer and copy are booked after the walkthrough",
      "Call (702) 222-1964 for a listing appointment",
      "Office/GBP (702) 500-1942",
    ],
    h3: "Staged living room is a tactic, not a slogan",
    h3Body:
      "We will tell you whether paint, furniture, or price is the lever. Call (702) 222-1964.",
  },
  "/sellers/move-up": {
    h2: "Sale and purchase timed from one west-valley start",
    body: "We map your current home and your next ZIP so both tours share 9406 W Lake Mead Blvd as the start. Contingent vs non-contingent is a numbers conversation, not a pep talk.",
    facts: [
      "Two stops from this pin on tour days",
      "Palo Verde vs Coronado commute if campuses matter to the next house",
      "Call (702) 222-1964",
    ],
    h3: "Do not list blind and then shop",
    h3Body:
      "See the next street before you price the current one, or at least the same week. Call (702) 222-1964.",
  },
  "/sellers/downsizing": {
    h2: "List the larger home or tour 55+ the same day from Lake Mead Blvd",
    body: "Sun City Summerlin is 10–15 minutes from Suite 100. We can list the larger home and preview 55+ campuses the same afternoon so you are not guessing at square footage you have not walked.",
    facts: [
      "HOA-maintained 55+ vs a smaller resale with a yard",
      "Age-restriction rules reviewed before you tour",
      "Call (702) 222-1964",
    ],
    h3: "Square footage you will actually use",
    h3Body:
      "Measure furniture against plan widths at the office or the model. Call (702) 222-1964.",
  },
  "/sellers/relocation": {
    h2: "Las Vegas closing dates lined up with the next city",
    body: "BHHS destination agents are briefed from this office so your Las Vegas sale and the next purchase share a calendar. Outbound sale coordination is a Suite 100 plus destination-agent call.",
    facts: [
      "Corporate and individual relocations",
      "Named campuses and commute times for the destination if you stay local first",
      "Call (702) 222-1964",
    ],
    h3: "Do not let two closings collide",
    h3Body: "Bring both contract drafts to the desk. Call (702) 222-1964.",
  },
  "/sellers/divorce-probate": {
    h2: "Court dates and showing access at Suite 100, not the lobby",
    body: "Confidential file review is by appointment at 9406 W Lake Mead Blvd, Suite 100. Court dates, attorney contacts, and lockbox rules are handled here—not in a public lobby conversation.",
    facts: [
      "Neutral process, documented access, written offers",
      "Call (702) 222-1964 to schedule a private slot",
      "Do not email sensitive orders to a shared inbox without a heads-up call",
    ],
    h3: "What to bring",
    h3Body:
      "Letters testamentary or court orders, HOA contacts, and a preferred showing window. Call (702) 222-1964.",
  },
  "/relocation": {
    h2: "Three-day inbound itinerary: Summerlin, then Henderson",
    body: "Inbound relocation planning starts at this pin. We build a three-day Summerlin-then-Henderson itinerary so you are not crisscrossing the valley on a two-day house-hunting trip.",
    facts: [
      "Palo Verde High School and Coronado High School commute mapping",
      "HOA dues and park acreage as comparison points",
      "Call (702) 222-1964",
    ],
    h3: "Remote buying is possible; the tour week still starts here",
    h3Body:
      "Video walkthroughs, then a concentrated trip. Call (702) 222-1964.",
  },
  "/investment-properties": {
    h2: "Rent comps and HOA rental rules before the area drive",
    body: "Cap-rate review happens at Suite 100. Then we tour North Las Vegas, Henderson, or southwest ZIP clusters. HOA rental caps kill deals—we check them before you fly in.",
    facts: [
      "Downtown and mid-rise product vs suburban 3/2 rentals",
      "Named campus commutes only as a location fact, not a targeting pitch",
      "Call (702) 222-1964",
    ],
    h3: "Do not buy the photo; buy the lease math",
    h3Body: "Bring target cap rate and cash-to-close. Call (702) 222-1964.",
  },
  "/luxury-homes": {
    h2: "Luxury listing or search intake—Ridges, Highlands, or Lake Las Vegas",
    body: "This hub is for sellers and buyers who need photography, gate access, and marketing scoped at the office. Drive times: Ridges 15–20 minutes, Southern Highlands 25–35, Lake Las Vegas 35–45.",
    facts: [
      "H1 here: List or Buy Las Vegas Luxury Homes With BHHS",
      "Buyer-only search lives at /buyers/luxury-homes-las-vegas",
      "Call (702) 222-1964",
    ],
    h3: "Gate access is a logistics problem",
    h3Body:
      "We confirm HOA vendor lists and drone rules before listing day. Call (702) 222-1964.",
  },
  "/why-berkshire-hathaway": {
    h2: "BHHS network samples at Suite 100 before you sign a listing agreement",
    body: "Brand questions are answered on-site: referral network, listing marketing samples, and who actually answers the phone. Dr. Jan Duffy, license S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties.",
    facts: [
      "Global referral network for inbound and outbound moves",
      "Local showing still starts at 9406 W Lake Mead Blvd, Suite 100",
      "Call (702) 222-1964",
    ],
    h3: "Reputation is the brokerage; the work is the agent",
    h3Body:
      "Ask who photographs, who writes remarks, who negotiates. Call (702) 222-1964.",
  },
  "/market-insights": {
    h2: "January 2026 inventory walked against your ZIP, not a valley average only",
    body: "Market briefing is at the desk. Days on market, inventory, and ZIP-level notes are applied to your search or listing. Figures that cannot be sourced stay UNKNOWN.",
    facts: [
      "Valley median often cited near $450,000 (January 2026)",
      "Summerlin median often cited near $625,000",
      "Call (702) 222-1964 to interpret YOUR address",
    ],
    h3: "Skyline photos are context; comps are the decision",
    h3Body: "Bring the address. Call (702) 222-1964.",
  },
  "/market-update": {
    h2: "This week's numbers against your address or buyer criteria",
    body: "Weekly stats are interpreted at this desk or by phone from Suite 100—not as a valley-wide average only.",
    facts: [
      "DOM and inventory move; we will not invent a rate or a price",
      "Office hours Mon–Fri 9am–6pm, Sat 10am–4pm",
      "Call (702) 222-1964",
    ],
    h3: "Subscribe to a conversation, not a blast",
    h3Body:
      "If you want the update applied to a listing, send the APN. Call (702) 222-1964.",
  },
  "/market-report": {
    h2: "Full CMA and report review with the property address in the room",
    body: "Bring the property address to 9406 W Lake Mead Blvd, Suite 100. We pull comps at this desk and map them to your next step—list, wait, or buy.",
    facts: [
      "Report date on this page: January 2026",
      "Area breakdown is not a substitute for a CMA on one APN",
      "Call (702) 222-1964",
    ],
    h3: "Snapshot vs decision",
    h3Body:
      "The dark stats band is a snapshot. The decision needs your address. Call (702) 222-1964.",
  },
  "/neighborhoods": {
    h2: "Two contrasting areas from one west-valley start",
    body: "Neighborhood comparison starts at Suite 100. Example: Summerlin (10–15 min) vs Green Valley (25–35 min) in one afternoon so the difference is trees, HOA, and commute—not a slogan.",
    facts: [
      "Each community page has its own H1 photo and drive-time note",
      "Named campuses and commute times, not ratings as marketing",
      "Call (702) 222-1964",
    ],
    h3: "Do not pick a ZIP from a card grid alone",
    h3Body:
      "Open the community page, then book the drive. Call (702) 222-1964.",
  },
  "/55-plus-communities": {
    h2: "Age-restriction rules at the desk, clubhouses on the drive",
    body: "Sun City Summerlin is 10–15 minutes; Anthem campuses are 30–35. HOA packets and HOPA occupancy rules are reviewed at Suite 100 before we drive to clubhouses.",
    facts: [
      "Price bands on this hub span roughly $280,000–$1.2 million depending on campus",
      "California relocators: we still tour by amenity, not by slogan",
      "Call (702) 222-1964",
    ],
    h3: "HOPA 80/20 vs all-residents-55+",
    h3Body:
      "Solera requires all residents 55+. Most other campuses follow HOPA with a younger-spouse rule. Confirm in the HOA docs. Call (702) 222-1964.",
  },
};
