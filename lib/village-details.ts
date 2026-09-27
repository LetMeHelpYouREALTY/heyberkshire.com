/**
 * Unique leftover village H3 interiors — builders, employers, named villages,
 * golf-club facts. Not a swapped "Major Employers" / "Active Builders" template.
 * Fair Housing: named employers, builder rows, acreage, commute minutes.
 * Dated 2026-09-15.
 */

export type VillageDetailPin = {
  name: string;
  note: string;
};

export type VillageDetailCopy = {
  h3: string;
  body: string;
  pins: VillageDetailPin[];
};

export const villageDetails: Record<string, VillageDetailCopy[]> = {
  "/neighborhoods/the-ridges": [
    {
      h3: "Bear's Best, Falcon Ridge, Azure, Talon Ridge, Silver Ridge, Eagle Hills",
      body: "Six named villages sit on the Ridges gate sheet. We confirm which village is on the appointment before we leave Suite 100 — 15–20 minutes to the guardhouse. List prices on this page are January 2026 bands, not a live quote.",
      pins: [
        {
          name: "Bear's Best",
          note: "Golf-course lots around Bear's Best Golf Club. Published band $2M–$8M. Timed before any public-mall stop.",
        },
        {
          name: "Falcon Ridge",
          note: "Elevated custom lots. Published band $2.5M–$10M. Gate list from 9406 W Lake Mead Blvd, Suite 100.",
        },
        {
          name: "Azure",
          note: "Contemporary plans with Strip views. Published band $1.8M–$5M.",
        },
        {
          name: "Talon Ridge",
          note: "Semi-custom product with Red Rock backdrop. Published band $1.5M–$3M — the entry band on this plat, not a slogan.",
        },
        {
          name: "Silver Ridge",
          note: "Custom-lot streets. Published band $3M–$15M. Photography scheduled, not improvised.",
        },
        {
          name: "Eagle Hills",
          note: "Newer village with desert-contemporary plans. Published band $2M–$6M. Call (702) 222-1964.",
        },
      ],
    },
  ],
  "/neighborhoods/southern-highlands": [
    {
      h3: "Robert Trent Jones Jr. scorecard: 74.1 / 140, then the 35,000 sq ft clubhouse",
      body: "The course is the south-valley centerpiece, not a copied Ridges golf caption. Membership and HOA packets are reviewed at Suite 100 before the 25–35 minute I-15 drive.",
      pins: [
        {
          name: "Championship tees",
          note: "Course rating 74.1 / slope 140 on the championship tees. Confirm current card the week you tour.",
        },
        {
          name: "35,000 sq ft clubhouse",
          note: "Dining, banquet, and practice range on the same stop as fairway-lot showings.",
        },
        {
          name: "Equity vs non-equity membership",
          note: "Ask which option applies before writing an offer. Call (702) 222-1964. Janet Lundahl Elementary is mapped by address at ccsd.net/zoning.",
        },
        {
          name: "Practice campus",
          note: "Full range, short-game area, putting greens — walked if golf is on the brief, skipped if it is not.",
        },
      ],
    },
  ],
  "/neighborhoods/skye-canyon": [
    {
      h3: "Toll, Woodside, Shea vs Lennar, KB, Century — two Skye Canyon registration clocks",
      body: "Builder registration happens at Suite 100 first. Premium rows and value rows are not the same model visit. Prices below are January 2026 bands on this page — confirm the week you tour.",
      pins: [
        {
          name: "Toll Brothers",
          note: "Published band $600K–$800K. Quality and option sheets reviewed at the desk before the northwest drive.",
        },
        {
          name: "Woodside Homes",
          note: "Published band $500K–$700K. Mid-to-premium plans next to Skye Center.",
        },
        {
          name: "Shea Homes",
          note: "Published band $550K–$750K. Energy-efficient plan rows on the same loop.",
        },
        {
          name: "Lennar",
          note: "Published band $450K–$600K. Everything's Included packages — register Dr. Jan before the first model.",
        },
        {
          name: "KB Home",
          note: "Published band $420K–$550K. Energy Star plans. Call (702) 222-1964.",
        },
        {
          name: "Century Communities",
          note: "Published band $400K–$520K. Entry product on a separate clock from Toll rows.",
        },
      ],
    },
  ],
  "/neighborhoods/inspirada": [
    {
      h3: "Toll and Beazer vs Lennar, Woodside, Richmond, Century — one south Henderson registration",
      body: "Inspirada builder rows wrap the 2,000-acre rec campus. Register at 9406 W Lake Mead Blvd before walking models. Bands below are January 2026 figures on this page.",
      pins: [
        {
          name: "Toll Brothers",
          note: "Published band $600K–$750K. Walk Town Center pool first if you have not registered Dr. Jan.",
        },
        {
          name: "Beazer Homes",
          note: "Published band $500K–$650K. Energy-efficient plans on the same south Henderson afternoon.",
        },
        {
          name: "Lennar",
          note: "Published band $450K–$580K. Everything's Included — not a Skye Canyon clone.",
        },
        {
          name: "Woodside Homes",
          note: "Published band $480K–$620K. Mid-range rows inside the trail loop.",
        },
        {
          name: "Richmond American",
          note: "Published band $450K–$550K. Personalization options reviewed at Suite 100.",
        },
        {
          name: "Century Communities",
          note: "Published band $420K–$500K. Call (702) 222-1964. St. Rose Siena is the hospital pin.",
        },
      ],
    },
  ],
  "/neighborhoods/henderson": [
    {
      h3: "Barclays, Credit One, St. Rose, and Station — Henderson job pins from Suite 100",
      body: "Henderson is 25–35 minutes east. We time two employer pins against two villages so the commute is a clock, not a slogan. Confirm drive minutes the week you tour.",
      pins: [
        {
          name: "Barclays",
          note: "Credit-card operations campus, often cited about 3,000 employees. Pair with Green Valley or Anthem, not both plus Water Street on day one.",
        },
        {
          name: "Credit One Bank",
          note: "Corporate HQ on the Henderson clock. Map the listing street, not a city average.",
        },
        {
          name: "St. Rose Dominican and Henderson Hospital",
          note: "Name the campus nearest the listing. Siena is the common south-Henderson pin.",
        },
        {
          name: "Station Casinos — Green Valley Ranch and Sunset Station",
          note: "Hospitality shifts. Call (702) 222-1964 to sequence The District vs Water Street.",
        },
        {
          name: "Levi Strauss distribution and nearby Amazon",
          note: "Warehouse commute check — timed separately from a Water Street dining stop.",
        },
        {
          name: "City of Henderson",
          note: "Municipal campus. Coronado High School and Green Valley High School are named campuses by street at ccsd.net/zoning.",
        },
      ],
    },
  ],
  "/neighborhoods/north-las-vegas": [
    {
      h3: "Amazon, Fanatics, Sephora, Chewy — Craig Road job pins, then Nellis",
      body: "North Las Vegas is 20–25 minutes via US-95 / I-15. We time warehouse shifts to the actual facility, then Legacy High School by street. Not a Summerlin retail swap.",
      pins: [
        {
          name: "Amazon fulfillment",
          note: "Multiple centers; employment often cited 5,000+. Confirm the facility address the week you tour.",
        },
        {
          name: "Fanatics",
          note: "Sports-merchandise distribution, often cited about 3,000 jobs on the north clock.",
        },
        {
          name: "Sephora and Chewy distribution",
          note: "Craig Road corridor. Pair with Aliante rec, not Downtown Summerlin, on the first north day.",
        },
        {
          name: "Nellis Air Force Base",
          note: "East of the city. Commute minutes mapped from the listing street, not a valley average.",
        },
        {
          name: "North Las Vegas Airport and Motor Speedway",
          note: "Aviation and event-shift pins. Call (702) 222-1964.",
        },
        {
          name: "City of North Las Vegas",
          note: "Municipal workforce. North Vista Hospital is the hospital check on the same loop.",
        },
      ],
    },
    {
      h3: "Aliante, Tule Springs, Valley Vista, Camino Al Norte — four north builder plats",
      body: "New rows are not interchangeable with Aliante golf lots. Register at Suite 100. Bands below are January 2026 figures on this page — confirm live list prices.",
      pins: [
        {
          name: "Aliante",
          note: "Golf, rec, casino retail. Published band $400K–$550K. First pin when the ZIP is North Las Vegas.",
        },
        {
          name: "Tule Springs",
          note: "Near I-215. KB Home and Lennar often cited. Published band $380K–$500K.",
        },
        {
          name: "Valley Vista",
          note: "Parks and HOA pools. Century Communities. Published band $350K–$450K.",
        },
        {
          name: "Camino Al Norte",
          note: "Near the 215. Multiple builders. Published band $380K–$480K. Call (702) 222-1964.",
        },
        {
          name: "North Vista Hospital",
          note: "Full-service hospital and ER on the north clock — not a downtown magnet campus.",
        },
        {
          name: "VA Southern Nevada Healthcare",
          note: "Craig Road medical pin. Timed with warehouse shifts if that is the brief.",
        },
      ],
    },
  ],
};
