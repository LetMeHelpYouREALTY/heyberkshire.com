/**
 * Unique commute interiors per neighborhood path.
 * Times are ranges already published on these pages or in unique-interiors
 * (office-to-village) plus the prior destination tables. Harry Reid
 * International Airport is the current LAS name (renamed 2021). Dated 2026-09-15.
 * Do not treat these as live Google Maps ETAs — we re-time the listing street
 * from 9406 W Lake Mead Blvd, Suite 100 before a showing.
 */

export type CommutePin = {
  pin: string;
  typical: string;
  why: string;
};

export type NeighborhoodCommuteCopy = {
  h3: string;
  body: string;
  pins: [CommutePin, CommutePin, CommutePin, CommutePin];
};

export const neighborhoodCommutes: Record<string, NeighborhoodCommuteCopy> = {
  "/neighborhoods": {
    h3: "One west-valley start, two contrasting afternoon loops",
    body: "Comparison tours leave 9406 W Lake Mead Blvd, Suite 100. Summerlin villages are typically 10–15 minutes. Green Valley is a 25–35 minute I-215 east run. We do not send you across the valley twice in one day unless the listings require it.",
    pins: [
      {
        pin: "BHHS office, Suite 100",
        typical: "Tour start",
        why: "GBP pin and builder-registration desk before any model row",
      },
      {
        pin: "Summerlin villages",
        typical: "10–15 min",
        why: "West-valley loop: trails, Pavilion Center, Red Rock trailheads",
      },
      {
        pin: "Green Valley / The District",
        typical: "25–35 min via I-215",
        why: "East-valley contrast: 35-year-old trees vs newer Henderson rec campuses",
      },
      {
        pin: "Harry Reid International (LAS)",
        typical: "Timed per village",
        why: "Airport minutes change more than village slogans — we map the listing street",
      },
    ],
  },
  "/neighborhoods/summerlin": {
    h3: "Lake Mead Blvd to Pavilion Center, then Scenic Drive — not a Strip table",
    body: "Most Summerlin streets are 10–15 minutes from Suite 100. We time Palo Verde High School on Pavilion Center Drive before we leave, then add Red Rock Canyon Scenic Drive on the west end of the same loop. Harry Reid International is a Charleston / 215 run from central Summerlin, previously published at about 15 miles and 20 minutes off-peak.",
    pins: [
      {
        pin: "9406 W Lake Mead Blvd, Suite 100",
        typical: "Tour start",
        why: "GBP office pin; The Trails or Pueblo is the usual first stop",
      },
      {
        pin: "Palo Verde High School, Pavilion Center Dr",
        typical: "Mapped per street",
        why: "Named campus on the west-valley loop — not a copied Henderson feeder",
      },
      {
        pin: "Red Rock Canyon Scenic Drive",
        typical: "About 10 min from west villages (5 miles on the prior table)",
        why: "Trailhead pin unique to Summerlin; rush is usually 10–15 min",
      },
      {
        pin: "Harry Reid International (LAS)",
        typical: "About 20 min off-peak / 30–45 min rush from central Summerlin",
        why: "15 miles on the prior Summerlin table; we re-time the listing, not the ZIP",
      },
    ],
  },
  "/neighborhoods/the-ridges": {
    h3: "Gate-list minutes from Suite 100, then Downtown Summerlin after the ridge",
    body: "Ridges showings are 15–20 minutes from 9406 W Lake Mead Blvd once the gate list is confirmed. Downtown Summerlin was previously published at 3 miles / about 8 minutes from the gates. Henderson Executive (HND) is the private-aviation pin on this page — 12 miles / about 18 minutes on the prior table — not a copied Strip row.",
    pins: [
      {
        pin: "Suite 100 gate-list desk",
        typical: "15–20 min to the guardhouse",
        why: "Estate addresses are not texted on unsecured threads",
      },
      {
        pin: "Downtown Summerlin",
        typical: "About 8 min / 3 miles from the gates",
        why: "Retail context after ridge streets, not a second freeway hop",
      },
      {
        pin: "Red Rock Canyon",
        typical: "About 10 min / 4 miles",
        why: "West-edge trailhead unique to this master-plan edge",
      },
      {
        pin: "Henderson Executive Airport (HND)",
        typical: "About 18 min / 12 miles on the prior Ridges table",
        why: "Private aviation pin — Harry Reid (LAS) is a separate 25 min / 18 mile row",
      },
    ],
  },
  "/neighborhoods/southern-highlands": {
    h3: "I-15 south block: clubhouse first, then Harry Reid without a valley recross",
    body: "Southern Highlands is 25–35 minutes via I-15 south from the Lake Mead Blvd office. Once you are on I-15, the prior table put the Strip at about 8 miles / 12 minutes off-peak. Harry Reid International was 10 miles / about 15 minutes. We keep golf-course lots and ridge streets in one south-valley block.",
    pins: [
      {
        pin: "Lake Mead Blvd office via I-15 south",
        typical: "25–35 min",
        why: "South-valley block so you are not crossing the valley twice",
      },
      {
        pin: "Southern Highlands Golf Club / clubhouse",
        typical: "First stop on the showing sheet",
        why: "Fairway vs ridge-top lots are compared on the same run",
      },
      {
        pin: "Harry Reid International (LAS)",
        typical: "About 15 min off-peak / 20–30 min rush (10 miles)",
        why: "I-15 north from the clubhouse area — faster than a west-valley airport run",
      },
      {
        pin: "Las Vegas Strip via I-15",
        typical: "About 12 min off-peak / 18–25 min rush (8 miles)",
        why: "Published Strip time once you are already on I-15, not from Suite 100",
      },
    ],
  },
  "/neighborhoods/skye-canyon": {
    h3: "215 northwest: register at Suite 100, then Floyd Lamb before the models",
    body: "Skye Canyon is 20–25 minutes via the 215 from 9406 W Lake Mead Blvd. Builder registration happens at the office first. Floyd Lamb Park is adjacent (about 5 minutes on the prior table). Centennial Hills is the 5 mile / about 10 minute comparison so you are not mixing two northwest master plans by accident.",
    pins: [
      {
        pin: "Suite 100 builder registration",
        typical: "Before the first model",
        why: "Dr. Jan is registered as buyer agent before Skye Center rows",
      },
      {
        pin: "Skye Canyon via the 215",
        typical: "20–25 min from the GBP pin",
        why: "Northwest loop; no second freeway hop to walk models and resales",
      },
      {
        pin: "Floyd Lamb Park trailheads",
        typical: "About 5 min / adjacent",
        why: "Park pin unique to this master plan — not a copied Strip row",
      },
      {
        pin: "Centennial Hills / Arbor View comparison",
        typical: "About 10 min / 5 miles",
        why: "Second northwest commute when the buyer wants two named high schools timed",
      },
    ],
  },
  "/neighborhoods/centennial-hills": {
    h3: "US-95 from Suite 100 to Centennial Hills Park, then Arbor View minutes",
    body: "Centennial Hills is 15–20 minutes via US-95 from Suite 100. Downtown Summerlin was previously published at 6 miles / about 12 minutes off-peak from Centennial streets. We add Centennial Hills Park and Centennial Center on the same northwest loop so retail and trail pins are not a separate day.",
    pins: [
      {
        pin: "Suite 100 via US-95",
        typical: "15–20 min",
        why: "Northwest start; mountain-view lots vs hospital-campus streets",
      },
      {
        pin: "Centennial Hills Park / Centennial Center",
        typical: "Same loop as the listings",
        why: "Park and retail pins unique to this page — not a Henderson table",
      },
      {
        pin: "Downtown Summerlin",
        typical: "About 12 min off-peak / 18–25 min rush (6 miles)",
        why: "West-valley retail comparison without driving to The District",
      },
      {
        pin: "Arbor View High School",
        typical: "Mapped per listing street",
        why: "Named campus commute — Hummel Elementary is not on this map",
      },
    ],
  },
  "/neighborhoods/green-valley": {
    h3: "I-215 east to The District, then Green Valley High — not a Summerlin grid",
    body: "Green Valley is 25–35 minutes via I-215 east from Suite 100. The District at Green Valley Ranch is the tour midpoint. Downtown Henderson was previously published at 3 miles / about 8 minutes. Harry Reid International was 7 miles / about 12 minutes off-peak — closer than the west-valley airport run.",
    pins: [
      {
        pin: "Suite 100 via I-215 east",
        typical: "25–35 min",
        why: "Henderson block; 35-year-old trees vs newer villages in one afternoon",
      },
      {
        pin: "The District at Green Valley Ranch",
        typical: "Midpoint of the listing day",
        why: "Retail pin unique to Green Valley Ranch — meet here or at Suite 100",
      },
      {
        pin: "Downtown Henderson / Water Street",
        typical: "About 8 min / 3 miles from Green Valley streets",
        why: "City-center pin, not a copied Downtown Las Vegas row",
      },
      {
        pin: "Harry Reid International (LAS)",
        typical: "About 12 min off-peak / 18–25 min rush (7 miles)",
        why: "East-valley airport advantage vs Summerlin's 20 minute off-peak row",
      },
    ],
  },
  "/neighborhoods/henderson": {
    h3: "Two Henderson villages from one west-valley start — trees vs rec campus",
    body: "From Suite 100 we pick two contrasting Henderson villages as a 25–35 minute east run. Strip drives from many Henderson streets were previously published at about 8 miles / 15 minutes off-peak. Lake Mead was 15 miles / about 20 minutes. Coronado vs Green Valley High is timed by the listing street, not by the city name.",
    pins: [
      {
        pin: "Suite 100 east run",
        typical: "25–35 min to the first Henderson village",
        why: "Green Valley vs Inspirada vs Water Street vs Lake Las Vegas — pick two",
      },
      {
        pin: "Las Vegas Strip from Henderson streets",
        typical: "About 15 min off-peak / 20–35 min rush (8 miles)",
        why: "Village-level Strip time, not a city-wide slogan",
      },
      {
        pin: "Lake Mead National Recreation Area",
        typical: "About 20 min / 15 miles on the prior Henderson table",
        why: "East-valley recreation pin unique vs Red Rock on Summerlin pages",
      },
      {
        pin: "Harry Reid International (LAS)",
        typical: "About 12 min off-peak / 15–25 min rush (6 miles)",
        why: "Closer than the west-valley office-to-airport run",
      },
    ],
  },
  "/neighborhoods/inspirada": {
    h3: "South Henderson rec campus first, Green Valley second — one east day",
    body: "Inspirada is 30–40 minutes from 9406 W Lake Mead Blvd. Tours hit the central park and amenity center, then Green Valley (previously 5 miles / about 10 minutes) if you want 35-year-old trees on the same day. Harry Reid International was 10 miles / about 15 minutes off-peak on the prior Inspirada table.",
    pins: [
      {
        pin: "Suite 100 to Inspirada Town Center",
        typical: "30–40 min",
        why: "South Henderson block; builder registration still starts west",
      },
      {
        pin: "Inspirada Elementary / central park",
        typical: "Same stop as the amenity campus",
        why: "Walkable rec pin — not a copied Green Valley High row",
      },
      {
        pin: "Green Valley / The District",
        typical: "About 10 min / 5 miles",
        why: "Mature-tree contrast on the same east-valley day",
      },
      {
        pin: "Harry Reid International (LAS)",
        typical: "About 15 min off-peak / 20–30 min rush (10 miles)",
        why: "I-215 / I-15 from south Henderson, not from Summerlin",
      },
    ],
  },
  "/neighborhoods/north-las-vegas": {
    h3: "US-95 / I-15 north: Aliante rec first, Craig Road employment second",
    body: "North Las Vegas is 20–25 minutes via US-95 / I-15 from Suite 100. Aliante recreation is the north anchor. Downtown Las Vegas was previously published at 8 miles / about 15 minutes off-peak. Nellis-area streets can change campus zones — we do not copy a downtown magnet onto this commute.",
    pins: [
      {
        pin: "Suite 100 via US-95 / I-15",
        typical: "20–25 min",
        why: "Aliante, Craig Road, and new villages sequenced as one north tour",
      },
      {
        pin: "Aliante golf and recreation campus",
        typical: "North-tour anchor",
        why: "Rec pin unique to NLV — not a copied Downtown Summerlin row",
      },
      {
        pin: "Downtown Las Vegas / Craig Road corridor",
        typical: "About 15 min off-peak / 20–30 min rush (8 miles)",
        why: "Employment commute many NLV buyers actually drive",
      },
      {
        pin: "Harry Reid International (LAS)",
        typical: "About 20 min off-peak / 30–45 min rush (15 miles)",
        why: "North-to-airport run; longer than Henderson's 6–7 mile tables",
      },
    ],
  },
  "/neighborhoods/mountains-edge": {
    h3: "Southwest Beltway to Exploration Peak, then Southern Highlands if needed",
    body: "Mountains Edge is 20–30 minutes via the southwest Beltway from the GBP pin. I-215 / I-15 access: Strip about 15–20 minutes, airport about 20 minutes on the unique-interior facts. Southern Highlands is the 5 mile / about 10 minute golf comparison so southwest luxury is not mixed with Exploration Peak trails by accident.",
    pins: [
      {
        pin: "Suite 100 via southwest Beltway",
        typical: "20–30 min",
        why: "Trailhead first, then tile-roof resale streets on one loop",
      },
      {
        pin: "Exploration Peak Park summit trail",
        typical: "Same showing block as the listings",
        why: "120-acre park pin unique to Mountains Edge",
      },
      {
        pin: "Southern Highlands Golf Club",
        typical: "About 10 min / 5 miles",
        why: "Southwest golf comparison without a second I-15 start from the office",
      },
      {
        pin: "Harry Reid International (LAS)",
        typical: "About 18 min off-peak / 25–35 min rush (12 miles)",
        why: "Southwest airport run; Strip was 10 miles / about 15 min off-peak",
      },
    ],
  },
};
