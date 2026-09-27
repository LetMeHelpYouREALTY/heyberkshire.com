/**
 * Unique village highlight interiors — not a swapped "Community Highlights"
 * H3. Named plats, acreage, and vintage. Fair Housing: square footage,
 * amenities, named campuses already covered elsewhere, commute minutes.
 * Dated 2026-09-15.
 */

export type CommunityHighlightPin = {
  name: string;
  note: string;
};

export type CommunityHighlightCopy = {
  h3: string;
  body: string;
  pins: [CommunityHighlightPin, CommunityHighlightPin];
};

export const communityHighlights: Record<string, CommunityHighlightCopy> = {
  "/neighborhoods/summerlin": {
    h3: "Nine golf courses and 150 parks on the Howard Hughes plat — counted, not captioned",
    body: "Summerlin is not one village. We count parks, trail miles, and golf campuses on the west loop from Suite 100 so the 22,500-acre plat is a map, not a slogan.",
    pins: [
      {
        name: "150+ parks and 150+ trail miles",
        note: "Howard Hughes villages share the trail spine. We walk one park and one trailhead the same afternoon as The Trails or Pueblo — typically 10–15 minutes from 9406 W Lake Mead Blvd.",
      },
      {
        name: "Nine golf campuses including Red Rock Country Club",
        note: "Public and private courses sit on the same west clock as Downtown Summerlin. Call (702) 222-1964 to sequence golf streets vs interior lots.",
      },
    ],
  },
  "/neighborhoods/the-ridges": {
    h3: "Six Ridges villages and about 900 home sites — names before the gate",
    body: "The Ridges is nearly 800 acres above Red Rock Country Club. Gate lists are confirmed at Suite 100. Village names on the showing sheet are Bear's Best, Falcon Ridge, Azure, Talon Ridge, Silver Ridge, and Eagle Hills.",
    pins: [
      {
        name: "About 900 custom home sites",
        note: "Typical list prices exceed $2 million. Photography and access are scheduled from 9406 W Lake Mead Blvd, Suite 100 — usually 15–20 minutes to the guardhouse.",
      },
      {
        name: "Bear's Best Golf Club inside the plat",
        note: "Jack Nicklaus tribute holes wind through the villages. We time the club campus before any public-mall stop. Call (702) 222-1964 for a private gate window.",
      },
    ],
  },
  "/neighborhoods/southern-highlands": {
    h3: "Fairway lots vs ridge streets on the 2,200-acre Southern Highlands plat",
    body: "This is an I-15 south block, 25–35 minutes from Suite 100. We do not mix it with a Summerlin village day. Fairway lots and ridge-top streets are two different showing clocks on the same plat.",
    pins: [
      {
        name: "Robert Trent Jones Jr. course and 35,000 sq ft clubhouse",
        note: "Golf-course streets are sequenced first when the brief includes membership questions. HOA dues and golf rules are reviewed at the desk before we drive.",
      },
      {
        name: "Guard-gated enclaves on ridge streets",
        note: "Custom and semi-custom lots sit above the fairways. Guest lists are confirmed from Suite 100. Call (702) 222-1964. Janet Lundahl Elementary is mapped by address at ccsd.net/zoning.",
      },
    ],
  },
  "/neighborhoods/skye-canyon": {
    h3: "Model rows vs adjacent resales — Skye Canyon inventory that is not Centennial Hills",
    body: "Northwest afternoon, 20–25 minutes via the 215. Builder registration happens at Suite 100 first. New rows and resale streets sit next to the 15-acre Skye Center — we walk both so vintage vs new stucco is obvious.",
    pins: [
      {
        name: "Active builder model rows",
        note: "Register Dr. Jan as buyer agent before the first model visit. Plans and lot premiums change by phase; we pull the current sheet at 9406 W Lake Mead Blvd.",
      },
      {
        name: "Resales next to Floyd Lamb Park",
        note: "About 680 acres of park sit immediately west. Compare shade and trail access against new-construction streets. Call (702) 222-1964.",
      },
    ],
  },
  "/neighborhoods/centennial-hills": {
    h3: "1,800–3,500 sq ft floor plans vs new Skye Canyon rows — two northwest vintages",
    body: "Centennial Hills is 15–20 minutes via US-95. 1990s–2000s streets have mountain views and finished landscaping that new northwest rows do not copy. We tour this on a different afternoon from Skye Canyon.",
    pins: [
      {
        name: "1,800–3,500 sq ft product mix",
        note: "Median often cited near $398,000–$495,000 depending on vintage and lot (January 2026 figures on this page). Measure mountain-view lots near Centennial Hills Park in person.",
      },
      {
        name: "Centennial Center on the Durango cluster",
        note: "Target, Costco, and theatres without a Summerlin hopscotch. Call (702) 222-1964 to time Arbor View High School by address after the park loop.",
      },
    ],
  },
  "/neighborhoods/green-valley": {
    h3: "1988 street trees plus golf-course lots — Green Valley plats that new Henderson rows do not copy",
    body: "Founded in 1988. 35-year canopy and larger lots than most newer Henderson villages. The District is the tour midpoint, 25–35 minutes via I-215 east from Suite 100.",
    pins: [
      {
        name: "35-year street trees and larger lots",
        note: "Many interiors have mature landscaping and fruit trees. We walk a block after The District so canopy vs new stucco is a fact, not a listing caption.",
      },
      {
        name: "Golf-course HOAs on the same Henderson clock",
        note: "Green Valley High School and Coronado High School are named campuses by street. Call (702) 222-1964. Do not add Downtown Summerlin on this afternoon.",
      },
    ],
  },
  "/neighborhoods/henderson": {
    h3: "Water Street civic row vs MacDonald Highlands custom lots — two Henderson scales",
    body: "Henderson is Nevada's second-largest city, 25–35 minutes from Suite 100. We pick two contrasting villages on the first east day so you are not listing every mall. 60+ city parks sit under the civic layer.",
    pins: [
      {
        name: "Water Street District",
        note: "Downtown Henderson civic and dining row. Pair with Green Valley or Inspirada — not both plus Lake Las Vegas — on the first east afternoon.",
      },
      {
        name: "MacDonald Highlands and Lake Las Vegas",
        note: "Custom lots and shoreline product are a second Henderson clock. Call (702) 222-1964 with the commute target (Strip, Harry Reid International, or a named campus).",
      },
    ],
  },
  "/neighborhoods/inspirada": {
    h3: "Toll Brothers and Lennar rows around a 2,000-acre rec campus",
    body: "Inspirada is 30–40 minutes from 9406 W Lake Mead Blvd. The rec campus is the point of the drive. Builder registration still starts at the west-valley office.",
    pins: [
      {
        name: "Town Center resort pool and 10+ miles of paths",
        note: "Zero-entry pool, slides, cabanas, splash pad. Walk it before any builder model if you have not registered Dr. Jan.",
      },
      {
        name: "Toll Brothers, Lennar, and resale streets",
        note: "Plan rows change by village inside the 2,000 acres. St. Rose Dominican — Siena is the hospital pin. Call (702) 222-1964.",
      },
    ],
  },
  "/neighborhoods/north-las-vegas": {
    h3: "$320,000s entry product vs Aliante golf lots — two North Las Vegas price bands",
    body: "North Las Vegas is 20–25 minutes via US-95 / I-15. This is not a Summerlin retail swap. Entry product and Aliante golf-adjacent lots are two different showing clocks.",
    pins: [
      {
        name: "Entry listings often in the $320,000s–$450,000s",
        note: "Newer product in published $320K–$450K bands is common on this north loop. Confirm current list prices the week you tour — we do not invent a number.",
      },
      {
        name: "Aliante golf and rec campus",
        note: "Golf, rec, and casino retail as the north anchor. Legacy High School is mapped by street at ccsd.net/zoning. Call (702) 222-1964.",
      },
    ],
  },
  "/neighborhoods/mountains-edge": {
    h3: "Blue Diamond access and Rhodes Ranch golf — Mountains Edge pins that are not the summit trail",
    body: "Southwest loop, 20–30 minutes via the Beltway from the GBP pin. Exploration Peak acreage is covered in the parks section. Here we pin freeway access and nearby golf so the plat is not one park caption.",
    pins: [
      {
        name: "I-15 / Blue Diamond commute pin",
        note: "Strip about 15–20 minutes, Harry Reid International about 20 minutes from many streets. Timed from Suite 100 the week you tour.",
      },
      {
        name: "Rhodes Ranch Golf Club nearby",
        note: "Public golf adjacent to the southwest plat. Southern Highlands Golf Club is a separate I-15 add-on, not the same stop. Call (702) 222-1964.",
      },
    ],
  },
};
