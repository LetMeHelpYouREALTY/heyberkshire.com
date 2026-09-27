/**
 * Unique named-campus copy per neighborhood path.
 * Fair Housing: campus names and commute notes only — no ratings, "best
 * schools," or "family-friendly" framing. CCSD zones by street, not by
 * master-plan marketing name. Dated 2026-09-15.
 */

export type NamedCampus = {
  name: string;
  note: string;
};

export type NamedCampusCopy = {
  h3: string;
  body: string;
  campuses: [NamedCampus, NamedCampus, NamedCampus, NamedCampus];
};

export const namedCampuses: Record<string, NamedCampusCopy> = {
  "/neighborhoods": {
    h3: "Named campuses by village, never a valley-wide slogan",
    body: "Each neighborhood page lists campuses we can place on a map from 9406 W Lake Mead Blvd, Suite 100. Summerlin pages lead with Palo Verde High School. Henderson pages lead with Coronado High School or Green Valley High School. Northwest pages lead with Arbor View High School or Shadow Ridge High School. We publish names and drive times, not star ratings.",
    campuses: [
      {
        name: "Palo Verde High School",
        note: "Pavilion Center Drive; west-valley tours from the GBP office pin",
      },
      {
        name: "Coronado High School",
        note: "South Henderson comparison when the listing is east of I-215",
      },
      {
        name: "Arbor View High School",
        note: "Centennial Hills / northwest loop via US-95 from Suite 100",
      },
      {
        name: "CCSD Zoning Search",
        note: "Official street-level assignment at ccsd.net/zoning before an offer",
      },
    ],
  },
  "/neighborhoods/summerlin": {
    h3: "Palo Verde, Rogich, and West CTA — named, then verified by street",
    body: "Summerlin villages do not share one feeder. Palo Verde High School sits on Pavilion Center Drive. Sig Rogich Middle School is the west-valley campus we map most often from Suite 100. West Career & Technical Academy is a magnet with an application, not a default zone. John C. Vanderburg Elementary is a Henderson campus and is not a Summerlin-wide assignment.",
    campuses: [
      {
        name: "Palo Verde High School",
        note: "333 S Pavilion Center Dr; timed from 9406 W Lake Mead Blvd before we leave",
      },
      {
        name: "Sig Rogich Middle School",
        note: "West-valley middle campus on the same Summerlin loop as many 89135 streets",
      },
      {
        name: "West Career & Technical Academy",
        note: "Magnet / application campus in Summerlin — not a zoned default",
      },
      {
        name: "William R. Lummis Elementary",
        note: "Named Summerlin-area elementary; confirm the listing street on CCSD Zoning Search",
      },
    ],
  },
  "/neighborhoods/the-ridges": {
    h3: "Gate-to-campus minutes from The Ridges, not a copied Summerlin grid",
    body: "The Ridges is inside the Summerlin master plan. We time Palo Verde High School and Sig Rogich Middle School from the specific gate on the showing sheet, then confirm CCSD zoning for that street. Private campuses buyers compare on the same west-valley loop include The Meadows School and Bishop Gorman High School.",
    campuses: [
      {
        name: "Palo Verde High School",
        note: "Typical west-valley high-school name from Ridges gates; still verify the APN",
      },
      {
        name: "Sig Rogich Middle School",
        note: "Mapped as drive time from the guardhouse, not as a community slogan",
      },
      {
        name: "The Meadows School",
        note: "Private K–12 on the west-valley loop; independent of CCSD zoning",
      },
      {
        name: "Bishop Gorman High School",
        note: "Private comparison via I-15; not a Ridges CCSD feeder",
      },
    ],
  },
  "/neighborhoods/southern-highlands": {
    h3: "Southwest campuses split by street — we pull CCSD before the tour",
    body: "Southern Highlands is not one feeder. Named campuses on southwest-valley tours include Liberty High School, Sierra Vista High School, Janet Lundahl Elementary, and Bishop Gorman High School north on I-15. Coronado High School is a Henderson campus; treat any blog that assigns the whole master plan to Coronado as unverified until CCSD Zoning Search says so for that street.",
    campuses: [
      {
        name: "Liberty High School",
        note: "Southwest comprehensive campus named on I-15 / 89141 tours",
      },
      {
        name: "Sierra Vista High School",
        note: "Named southwest high school; assignment depends on the listing street",
      },
      {
        name: "Janet Lundahl Elementary",
        note: "Named CCSD elementary on southwest-valley maps; confirm by address",
      },
      {
        name: "Bishop Gorman High School",
        note: "Private campus about 12 minutes north on I-15 from the clubhouse area",
      },
    ],
  },
  "/neighborhoods/skye-canyon": {
    h3: "Shadow Ridge now, plus a new elementary under construction on Shaumber",
    body: "On 2026-06-24 the Las Vegas Sun reported CCSD groundbreaking for a new elementary at North Shaumber Road and Skye Canyon Park Drive, planned to open August 2027. Until that campus opens, northwest tours map Shadow Ridge High School and nearby elementaries by listing address. Arbor View High School is a Centennial Hills campus we compare when commute minutes are the decision.",
    campuses: [
      {
        name: "Shadow Ridge High School",
        note: "Current northwest high-school name for most Skye Canyon streets we tour",
      },
      {
        name: "Skye Canyon elementary (opening 2027)",
        note: "Shaumber Rd at Skye Canyon Park Dr; Las Vegas Sun, 2026-06-24",
      },
      {
        name: "Arbor View High School",
        note: "Centennial Hills comparison when the buyer wants a second northwest commute",
      },
      {
        name: "Floyd Lamb Park trailheads",
        note: "Adjacent recreation, not a campus — included so the same loop is one drive",
      },
    ],
  },
  "/neighborhoods/centennial-hills": {
    h3: "Arbor View, Centennial High, and park-loop minutes",
    body: "Centennial Hills tours from Suite 100 map Arbor View High School and Centennial High School by the listing street, then add Centennial Hills Park and Centennial Center so the day stays one northwest loop. John R. Hummel Elementary sits in the southwest valley, not this master plan — it is not copied onto this page.",
    campuses: [
      {
        name: "Arbor View High School",
        note: "Named northwest high school timed from 9406 W Lake Mead Blvd via US-95",
      },
      {
        name: "Centennial High School",
        note: "Second named high school on the Centennial Hills map; verify the street",
      },
      {
        name: "Ernest Becker Middle School",
        note: "Northwest middle campus buyers ask us to time with park-loop showings",
      },
      {
        name: "Centennial Hills Park",
        note: "Recreation pin on the same loop as Centennial Center retail",
      },
    ],
  },
  "/neighborhoods/green-valley": {
    h3: "Green Valley High, Coronado, and Wolff — Henderson names, street-checked",
    body: "Green Valley High School and Elise L. Wolff Elementary sit inside the Green Valley map we actually drive. Coronado High School is the south-Henderson campus buyers compare when the listing sits closer to Inspirada or Anthem. Confirm the listing address at ccsd.net/zoning before we write an offer.",
    campuses: [
      {
        name: "Green Valley High School",
        note: "Named Henderson campus inside the original Green Valley master plan",
      },
      {
        name: "Elise L. Wolff Elementary",
        note: "Green Valley-area elementary we time with The District listing tours",
      },
      {
        name: "Coronado High School",
        note: "South Henderson comparison — not every Green Valley street feeds Coronado",
      },
      {
        name: "The District at Green Valley Ranch",
        note: "Retail midpoint for Henderson tours; 25–35 minutes from Suite 100 via I-215",
      },
    ],
  },
  "/neighborhoods/henderson": {
    h3: "Four Henderson high-school names, then the listing address",
    body: "Henderson is not one zone. Named campuses on east-valley tours include Coronado High School, Green Valley High School, Foothill High School, and Basic Academy. Vanderburg and Wolff are Green Valley-area elementaries we time when the listing is in 89012 or 89014. No ratings — commute minutes and campus names only.",
    campuses: [
      {
        name: "Coronado High School",
        note: "South Henderson high-school name on Inspirada / Anthem comparison tours",
      },
      {
        name: "Green Valley High School",
        note: "Original Green Valley campus; 15–25 minute Strip drives from most listings",
      },
      {
        name: "Foothill High School",
        note: "East Henderson campus timed when the listing sits toward Lake Las Vegas",
      },
      {
        name: "John C. Vanderburg Elementary",
        note: "Henderson elementary near Desert Shadow Trail — not a Summerlin campus",
      },
    ],
  },
  "/neighborhoods/inspirada": {
    h3: "Inspirada Elementary plus Coronado commute, not a copied Green Valley grid",
    body: "Inspirada Elementary was built with the master plan. Coronado High School is the high-school name we map most often from Inspirada streets; Foothill High School is the comparison when the listing sits east. Wright Elementary is a southwest Las Vegas campus and is not an Inspirada default.",
    campuses: [
      {
        name: "Inspirada Elementary",
        note: "Campus built with the Henderson master plan; still confirm the street",
      },
      {
        name: "Coronado High School",
        note: "Primary high-school name on most Inspirada showing sheets we run",
      },
      {
        name: "Foothill High School",
        note: "East-Henderson comparison when commute minutes beat a name-swap",
      },
      {
        name: "Inspirada Town Center",
        note: "Walkable retail pin on the same loop as the elementary campus",
      },
    ],
  },
  "/neighborhoods/north-las-vegas": {
    h3: "Canyon Springs, Legacy, and Aliante campuses — not a downtown magnet",
    body: "North Las Vegas tours map Canyon Springs High School, Legacy High School, and Aliante-area campuses by address. Mabel Hoggard Elementary is a magnet near downtown Las Vegas, not a North Las Vegas zoned default, so it is off this list. Nellis-area streets can pull different feeders — CCSD search first.",
    campuses: [
      {
        name: "Canyon Springs High School",
        note: "Named North Las Vegas high school on many east-NLV showing routes",
      },
      {
        name: "Legacy High School",
        note: "Named NLV high school; assignment is by street, not by city slogan",
      },
      {
        name: "Aliante Elementary",
        note: "Aliante village campus we time with the recreation and golf loop",
      },
      {
        name: "Nellis Air Force Base commute",
        note: "Employment pin east of the city; campus zones change near the base",
      },
    ],
  },
  "/neighborhoods/mountains-edge": {
    h3: "Sierra Vista, Liberty, and Exploration Peak on one southwest loop",
    body: "Mountains Edge tours pair Exploration Peak Park with named campuses such as Sierra Vista High School, Liberty High School, and Stuckey Elementary. Del E. Webb Middle School is a Henderson campus; we only add it when CCSD shows that street. Bishop Gorman High School is an I-15 north private comparison, not a CCSD zone.",
    campuses: [
      {
        name: "Sierra Vista High School",
        note: "Named southwest high school on Mountains Edge / 89178 tours",
      },
      {
        name: "Liberty High School",
        note: "Second southwest high-school name; confirm which street feeds which campus",
      },
      {
        name: "Mark L. Stuckey Elementary",
        note: "Named Mountains Edge-area elementary; verify on CCSD Zoning Search",
      },
      {
        name: "Exploration Peak Park",
        note: "120-acre trail and summit pin on the same southwest showing block",
      },
    ],
  },
};
