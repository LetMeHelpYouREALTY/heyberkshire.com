/**
 * Unique FAQ interiors per neighborhood path.
 * Questions are tour/campus/commute intent, not a city-swapped median-price
 * template. January 2026 prices already published on these pages stay in
 * answers only. Fair Housing: no ratings, "good area," or celebrity targeting.
 * Dated 2026-09-15.
 */

export type NeighborhoodFaqItem = {
  q: string;
  a: string;
};

export type NeighborhoodFaqCopy = {
  h2: string;
  items: [NeighborhoodFaqItem, NeighborhoodFaqItem, NeighborhoodFaqItem, NeighborhoodFaqItem];
};

export const neighborhoodFaqs: Record<string, NeighborhoodFaqCopy> = {
  "/neighborhoods": {
    h2: "Which two villages should we time from Suite 100 first?",
    items: [
      {
        q: "Which Las Vegas neighborhoods should I compare first from the office pin?",
        a: "Start with commute from 9406 W Lake Mead Blvd, Suite 100, then HOA dues and home size. Summerlin villages are typically 10–15 minutes. Green Valley is a 25–35 minute I-215 east run. January 2026 medians already published on those pages: Summerlin about $625,000, Henderson about $485,000, North Las Vegas about $385,000. Call (702) 222-1964.",
      },
      {
        q: "Can Dr. Jan Duffy tour more than one village in a day?",
        a: "Yes. Call (702) 222-1964 to book a clustered tour. Berkshire Hathaway HomeServices Nevada Properties is at 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. We pair a west-valley loop with one east or northwest block so you are not recrossing the valley twice.",
      },
      {
        q: "Do these neighborhood pages use live MLS data?",
        a: "Each neighborhood page includes a RealScout search widget fed by live MLS. Listings update throughout the day; confirm status with Dr. Jan Duffy before writing an offer.",
      },
      {
        q: "Do you publish school ratings on these pages?",
        a: "No. We publish named campuses and drive times, then confirm the listing street at ccsd.net/zoning. Palo Verde High School leads Summerlin pages. Coronado High School or Green Valley High School leads Henderson pages. Arbor View High School or Shadow Ridge High School leads northwest pages.",
      },
    ],
  },
  "/neighborhoods/summerlin": {
    h2: "Summerlin questions we actually answer before we leave Suite 100",
    items: [
      {
        q: "How long is a Summerlin village tour from 9406 W Lake Mead Blvd?",
        a: "Most Summerlin streets are 10–15 minutes from Suite 100. We typically start in The Trails or Pueblo, time Palo Verde High School on Pavilion Center Drive, then add Red Rock Canyon Scenic Drive on the west end of the same loop. Call (702) 222-1964.",
      },
      {
        q: "What January 2026 median was published for Summerlin on this page?",
        a: "As of January 2026, the median home price in Summerlin is $625,000, representing a 6.8% increase year-over-year. Listings in The Ridges and other guard-gated villages can exceed $2 million. Confirm live MLS with Dr. Jan before an offer.",
      },
      {
        q: "How many days on market did this page last publish for Summerlin?",
        a: "Summerlin homes currently average 22 days on market, faster than the Las Vegas Valley average of 28 days on the same January 2026 snapshot. Well-priced homes in villages we tour from Suite 100 often receive multiple offers within the first week.",
      },
      {
        q: "What makes a Summerlin loop different from a Henderson day?",
        a: "Summerlin is a west-valley loop from the GBP office pin: 150+ parks, 150+ miles of trails, Palo Verde High School, and Red Rock trailheads. Henderson is a 25–35 minute I-215 east run with Green Valley High School or Coronado High School timed by street. Call (702) 222-1964 to book one afternoon, not two slogans.",
      },
    ],
  },
  "/neighborhoods/the-ridges": {
    h2: "Ridges gate-list questions — not a copied Summerlin FAQ",
    items: [
      {
        q: "Do Ridges showings start at the gate or at Suite 100?",
        a: "Both. Gate lists and off-market windows are confirmed at 9406 W Lake Mead Blvd, Suite 100. The drive to the guardhouse is typically 15–20 minutes. We do not text estate addresses on unsecured threads. Call (702) 222-1964.",
      },
      {
        q: "What January 2026 median was published for The Ridges?",
        a: "As of January 2026, The Ridges median home price is $2.5 million. Properties range from $1.5 million for smaller homes to over $15 million for custom estates with Strip and Red Rock views. Confirm live MLS before you tour.",
      },
      {
        q: "How many home sites and villages are on a Ridges showing sheet?",
        a: "About 900 home sites across six villages, with 24/7 guard-gated check-in and architectural guidelines. We sequence gate windows from Suite 100 so you are not sitting in valley traffic between ridge streets.",
      },
      {
        q: "Is Henderson Executive Airport on the Ridges commute map?",
        a: "Yes. The prior Ridges table put HND at about 12 miles / 18 minutes. Harry Reid International (LAS) is a separate 18 mile / about 25 minute row. Downtown Summerlin is about 8 minutes from the gates after the ridge loop.",
      },
    ],
  },
  "/neighborhoods/southern-highlands": {
    h2: "I-15 south questions: clubhouse, Harry Reid, and Suite 100",
    items: [
      {
        q: "How far is Southern Highlands from the Lake Mead Blvd office versus Harry Reid?",
        a: "The office run is 25–35 minutes via I-15 south from Suite 100. Once you are on I-15, Harry Reid International was previously published at about 10 miles / 15 minutes off-peak. The Strip was about 8 miles / 12 minutes off-peak. Call (702) 222-1964 to keep golf and ridge streets in one south-valley block.",
      },
      {
        q: "What January 2026 median was published for Southern Highlands?",
        a: "As of January 2026, Southern Highlands' median home price is $750,000, up 7.2% year-over-year. Prices range from $500,000 for non-gated homes to over $3 million in guard-gated sections. Confirm live MLS with Dr. Jan Duffy.",
      },
      {
        q: "Do we tour the golf clubhouse and ridge lots the same afternoon?",
        a: "Yes. Southern Highlands Golf Club (Robert Trent Jones Jr. course, private membership and clubhouse dining) is the first stop on the showing sheet. Fairway vs ridge-top lots are compared on the same I-15 block so you are not recrossing the valley.",
      },
      {
        q: "Is every Southern Highlands street zoned to Coronado High School?",
        a: "No. Coronado High School is a Henderson campus. Named southwest campuses on this page include Liberty High School, Sierra Vista High School, and Janet Lundahl Elementary. Confirm the listing street at ccsd.net/zoning before we write an offer.",
      },
    ],
  },
  "/neighborhoods/skye-canyon": {
    h2: "Skye Canyon registration, Floyd Lamb, and the 2027 elementary",
    items: [
      {
        q: "Do I register at Suite 100 before walking Skye Canyon models?",
        a: "Yes. Builder registration happens at 9406 W Lake Mead Blvd, Suite 100 first. The 215 northwest run is typically 20–25 minutes. Then we walk model rows and adjacent resales without a second freeway hop. Call (702) 222-1964.",
      },
      {
        q: "What January 2026 median was published for Skye Canyon?",
        a: "As of January 2026, Skye Canyon's median home price is $550,000, up 5.5% year-over-year. New construction ranges from $450,000 to $800,000, with resales across other price points. Confirm live MLS before a model visit.",
      },
      {
        q: "What is Skye Center, and how close is Floyd Lamb Park?",
        a: "Skye Center is a 15-acre amenity campus with resort-style pools, fitness, sports courts, and event lawn. Floyd Lamb Park is adjacent — about 5 minutes on the prior commute table. Trails connect the villages to that park pin.",
      },
      {
        q: "When did CCSD break ground on the Skye Canyon elementary?",
        a: "The Las Vegas Sun reported 2026-06-24 groundbreaking at North Shaumber Road and Skye Canyon Park Drive, planned to open August 2027. Until then, northwest tours map Shadow Ridge High School by listing address at ccsd.net/zoning.",
      },
    ],
  },
  "/neighborhoods/centennial-hills": {
    h2: "US-95 questions: park loop, Arbor View, and Suite 100",
    items: [
      {
        q: "Is Centennial Hills a US-95 loop from Suite 100 or a 215 hop?",
        a: "US-95 from 9406 W Lake Mead Blvd, Suite 100 is typically 15–20 minutes. We compare mountain-view lots near Centennial Hills Park with closer-in streets toward the hospital campus, then map Arbor View High School by address. Call (702) 222-1964.",
      },
      {
        q: "What January 2026 median was published for Centennial Hills?",
        a: "As of January 2026, Centennial Hills' median home price is $495,000, up 4.8% year-over-year. Prices range from $380,000 for smaller homes to over $900,000 for larger properties with mountain views. Confirm live MLS.",
      },
      {
        q: "What retail sits on the same loop as Centennial Hills Park?",
        a: "Centennial Center (Target, Costco, dining) is on the same northwest loop as the park. Downtown Summerlin was previously published at about 6 miles / 12 minutes off-peak from Centennial streets — a west-valley retail comparison without driving to The District.",
      },
      {
        q: "Is John R. Hummel Elementary on this Centennial Hills map?",
        a: "No. Hummel sits in the southwest valley. This page maps Arbor View High School, Centennial High School, and Ernest Becker Middle School by listing street at ccsd.net/zoning.",
      },
    ],
  },
  "/neighborhoods/green-valley": {
    h2: "The District midpoint — Green Valley questions that are not a Summerlin FAQ",
    items: [
      {
        q: "Do Green Valley tours meet at The District or at Lake Mead Blvd?",
        a: "Either. The office run is 25–35 minutes via I-215 east from Suite 100. The District at Green Valley Ranch is the practical midpoint for listing tours. Call (702) 222-1964 and we will pick the start that saves a freeway hop.",
      },
      {
        q: "What January 2026 median and days on market were published for Green Valley?",
        a: "As of January 2026, Green Valley's median home price is $520,000, with 4.8% appreciation year-over-year. Homes averaged 26 days on market. Prices range from about $400,000 to over $1.2 million. Confirm live MLS.",
      },
      {
        q: "What can newer Henderson villages not copy from Green Valley?",
        a: "Founded in 1988: 35-year-old street trees, larger lots than most newer villages, golf, The District retail, and Green Valley High School as a named campus. Typical Strip commute from many streets is 15–25 minutes. Harry Reid International was previously about 7 miles / 12 minutes off-peak.",
      },
      {
        q: "Is every Green Valley street zoned to Coronado High School?",
        a: "No. Green Valley High School and Elise L. Wolff Elementary sit inside the map we drive. Coronado High School is the south-Henderson comparison when the listing sits closer to Inspirada or Anthem. Confirm the APN at ccsd.net/zoning.",
      },
    ],
  },
  "/neighborhoods/henderson": {
    h2: "Two-village Henderson days from one west-valley start",
    items: [
      {
        q: "Can we compare two Henderson villages in one afternoon from Suite 100?",
        a: "Yes. From 9406 W Lake Mead Blvd we pick two contrasting villages as a 25–35 minute east run so you compare 35-year-old trees vs new rec campuses in one day. Call (702) 222-1964.",
      },
      {
        q: "What January 2026 median was published for Henderson as a city?",
        a: "As of January 2026, Henderson's median home price is $485,000, up 5.1% from last year. Prices range from $350,000 for condos to over $2 million in MacDonald Highlands. Village-level inventory is tighter than a city median — confirm live MLS.",
      },
      {
        q: "Which Henderson villages do you actually sequence?",
        a: "Green Valley (mature trees, The District), Inspirada (town center and rec campus), MacDonald Highlands (custom estates), Anthem (recreation campuses), and Lake Las Vegas (waterfront). Each has its own commute and HOA — they are not interchangeable.",
      },
      {
        q: "Which named high schools do Henderson tours map?",
        a: "Coronado High School, Green Valley High School, Foothill High School, and Basic Academy. Vanderburg and Wolff are Green Valley-area elementaries we time in 89012/89014. No ratings — campus names and drive times only, then ccsd.net/zoning.",
      },
    ],
  },
  "/neighborhoods/inspirada": {
    h2: "Inspirada rec campus vs Green Valley trees — same east day",
    items: [
      {
        q: "Is Inspirada a same-day add-on after Green Valley from Suite 100?",
        a: "Yes. Inspirada is 30–40 minutes from 9406 W Lake Mead Blvd. Green Valley was previously about 5 miles / 10 minutes from Inspirada streets. Tours hit the central park and amenity campus, then The District if you want 35-year-old trees the same afternoon. Call (702) 222-1964.",
      },
      {
        q: "What January 2026 median was published for Inspirada?",
        a: "As of January 2026, Inspirada's median home price is $525,000, up 5.0% year-over-year. New construction ranges from $450,000 to $750,000, with resales and mature-tree yards as alternatives. Confirm live MLS.",
      },
      {
        q: "What is on the Inspirada amenity campus besides the pools?",
        a: "Resort-style pools with water features, 10+ miles of walking trails, multiple parks, sports courts, and the town center. Builder registration still starts at the west-valley office before model rows.",
      },
      {
        q: "Which campuses do you time on an Inspirada showing sheet?",
        a: "Inspirada Elementary (built with the master plan) and Coronado High School are the names we map most often. Foothill High School is the east comparison. Wright Elementary is a southwest Las Vegas campus and is not an Inspirada default. Confirm at ccsd.net/zoning.",
      },
    ],
  },
  "/neighborhoods/north-las-vegas": {
    h2: "Aliante rec, Craig Road jobs, and Suite 100 — not a downtown FAQ",
    items: [
      {
        q: "Is Aliante sequenced with Craig Road from Suite 100?",
        a: "Yes. North Las Vegas is 20–25 minutes via US-95 / I-15 from 9406 W Lake Mead Blvd. Aliante recreation is the north anchor; Craig Road employment corridors and new-construction villages are sequenced on the same tour. Call (702) 222-1964.",
      },
      {
        q: "What January 2026 median was published for North Las Vegas?",
        a: "As of January 2026, North Las Vegas' median home price is $385,000. Newer product often lists from the $320,000s, with new construction commonly $380,000 to $550,000 on this page. Confirm live MLS. Rental-yield figures on older copy are not a live cap-rate quote.",
      },
      {
        q: "Which builders and villages are on a north-tour showing sheet?",
        a: "Lennar, KB Home, Richmond American, and Century Communities appear on recent north-valley sheets. Villages we group include Aliante, Tule Springs, Valley Vista, and Camino Al Norte. Register Dr. Jan as buyer agent at Suite 100 before models.",
      },
      {
        q: "Which named campuses do North Las Vegas tours map?",
        a: "Canyon Springs High School, Legacy High School, and Aliante Elementary by listing address. Mabel Hoggard Elementary is a downtown magnet, not an NLV zoned default. Nellis-area streets can pull different feeders — ccsd.net/zoning first.",
      },
    ],
  },
  "/neighborhoods/mountains-edge": {
    h2: "Exploration Peak first — southwest FAQ that is not a Summerlin clone",
    items: [
      {
        q: "Do Mountains Edge tours start at Exploration Peak or at Suite 100?",
        a: "Suite 100 first (20–30 minutes via the southwest Beltway), then Exploration Peak Park as the trailhead pin on the same showing block. Call (702) 222-1964. Southern Highlands Golf Club is about 5 miles / 10 minutes if you want a southwest golf comparison the same day.",
      },
      {
        q: "What January 2026 median was published for Mountains Edge?",
        a: "As of January 2026, Mountains Edge's median home price is $475,000, up 4.5% year-over-year. Prices range from $380,000 for smaller homes to over $750,000 for larger properties with mountain and Strip views. Confirm live MLS.",
      },
      {
        q: "What are the published Strip and Harry Reid times from Mountains Edge?",
        a: "Unique-interior facts on this site: Strip about 15–20 minutes, airport about 20 minutes via I-215 / I-15. The prior table put Harry Reid International at about 12 miles / 18 minutes off-peak. We re-time the listing street before we leave.",
      },
      {
        q: "Which named campuses sit on the Mountains Edge loop?",
        a: "Sierra Vista High School, Liberty High School, and Mark L. Stuckey Elementary. Del E. Webb Middle School is a Henderson campus — we only add it when CCSD shows that street. Confirm at ccsd.net/zoning.",
      },
    ],
  },
};
