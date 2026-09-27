/**
 * Unique amenity interiors per 55+ campus path.
 * Named rec buildings and golf — not a swapped "World-Class Amenities"
 * template. Fair Housing: HOPA/occupancy facts already on UniqueInterior;
 * no "active lifestyle" slogans. Dated 2026-09-15.
 */

export type FiftyFiveAmenityPin = {
  name: string;
  note: string;
};

export type FiftyFiveAmenityCopy = {
  h2: string;
  body: string;
  pins: [FiftyFiveAmenityPin, FiftyFiveAmenityPin, FiftyFiveAmenityPin];
};

export const fiftyFiveAmenities: Record<string, FiftyFiveAmenityCopy> = {
  "/55-plus-communities": {
    h2: "Which rec campus we walk first from Suite 100",
    body: "Sun City Summerlin is 10–15 minutes. Anthem campuses are 30–35. We review HOA packets at 9406 W Lake Mead Blvd before we drive to clubhouses.",
    pins: [
      {
        name: "Sun City Summerlin rec",
        note: "Four rec centers (Mountain Shadows, Sun Shadows, Pinnacle, Desert Vista) plus three golf courses. First west-valley 55+ stop.",
      },
      {
        name: "Anthem Center",
        note: "About 64,000 sq ft in Henderson. Pair with Sun City Anthem or Solera — not with Summerlin rec on the same afternoon.",
      },
      {
        name: "Lake Las Vegas Del Webb",
        note: "35–45 minutes. Lakefront rec, not a Summerlin clone. Call (702) 222-1964.",
      },
    ],
  },
  "/55-plus-communities/sun-city-summerlin": {
    h2: "Highland Falls, Palm Valley, Eagle Crest — three courses, four rec buildings",
    body: "We pick one rec building and one course per visit so you are not touring 7,700 homes in a blur. Suite 100 is 10–15 minutes.",
    pins: [
      {
        name: "Mountain Shadows Recreation Center",
        note: "One of four rec campuses. Confirm which building matches the listing street before we leave the desk.",
      },
      {
        name: "Palm Valley / Eagle Crest / Highland Falls",
        note: "Championship and executive golf. Resident rate cards are in the HOA packet — not invented here.",
      },
      {
        name: "Pinnacle and Desert Vista rec",
        note: "The other two rec buildings. We do not walk all four the first afternoon. Call (702) 222-1964.",
      },
    ],
  },
  "/55-plus-communities/sun-city-anthem": {
    h2: "Anthem Center first — 64,000 sq ft before any Henderson golf add-on",
    body: "30–35 minutes from Suite 100. Anthem Center is the indoor/outdoor rec campus. Golf is a second pin, not the H2.",
    pins: [
      {
        name: "Anthem Center",
        note: "About 64,000 sq ft: indoor and outdoor pools, fitness, tennis, pickleball, restaurant.",
      },
      {
        name: "Anthem Country Club",
        note: "Member golf adjacent. Revere Golf Club is the public alternative — we name which one is on the brief.",
      },
      {
        name: "McCullough Range views",
        note: "Fairway and street views vary by block. Measure from the listing, not the clubhouse lawn. Call (702) 222-1964.",
      },
    ],
  },
  "/55-plus-communities/trilogy-summerlin": {
    h2: "Club restaurant, spa, then the pool terrace — Trilogy rec in one west stop",
    body: "Trilogy sits in Summerlin, 10–20 minutes from Suite 100. Rec is clubhouse-scale, not a four-building Sun City campus.",
    pins: [
      {
        name: "On-site restaurant",
        note: "Indoor and patio seating. We walk it with the HOA dining rules, not a brochure tasting.",
      },
      {
        name: "Spa and wellness",
        note: "Treatment rooms and fitness. Confirm resident vs guest access in the packet.",
      },
      {
        name: "Pool terrace",
        note: "Resort pool at the clubhouse. Pair with Downtown Summerlin only if time remains. Call (702) 222-1964.",
      },
    ],
  },
  "/55-plus-communities/heritage-stonebridge": {
    h2: "Staffed gate, then Downtown Summerlin — boutique 1,100-home rec",
    body: "Heritage is not a 7,700-home Sun City campus. We time the gate and the clubhouse, then one Downtown Summerlin stop.",
    pins: [
      {
        name: "Staffed gate",
        note: "Vendor lists and guest rules are in the HOA packet. Codes stay off group texts.",
      },
      {
        name: "Clubhouse pool and fitness",
        note: "Scaled to 1,100+ homes. Measure it — do not assume Sun City Summerlin rec hours.",
      },
      {
        name: "Downtown Summerlin",
        note: "West-valley retail after the gate. Call (702) 222-1964.",
      },
    ],
  },
  "/55-plus-communities/solera-anthem": {
    h2: "All-residents-55+ rules, then the Solera clubhouse — not Anthem Center",
    body: "Solera occupancy is all residents 55+, not HOPA 80/20. Rec is the Solera clubhouse, not the 64,000 sq ft Anthem Center unless the brief adds it.",
    pins: [
      {
        name: "Solera clubhouse and pool",
        note: "Boutique rec. Walk it after we review occupancy at Suite 100.",
      },
      {
        name: "Tennis / pickleball",
        note: "On-campus courts. Anthem Center is a separate Henderson add-on.",
      },
      {
        name: "St. Rose / Henderson Hospital",
        note: "Henderson hospital pins on the same east clock. Call (702) 222-1964.",
      },
    ],
  },
  "/55-plus-communities/sun-city-aliante": {
    h2: "Aliante rec and golf, then Craig Road — North Las Vegas 55+ pins",
    body: "Not a Summerlin rec day. Aliante rec sits with desert-hills golf. Suite 100 is a west-valley start; we drive northwest as its own loop.",
    pins: [
      {
        name: "Sun City Aliante recreation",
        note: "Golf and rec campus in North Las Vegas. First pin when the brief is this community.",
      },
      {
        name: "Aliante Casino retail",
        note: "Adjacent retail. Not Downtown Summerlin.",
      },
      {
        name: "Craig Road employers",
        note: "Commute check for anyone still working. Call (702) 222-1964.",
      },
    ],
  },
  "/55-plus-communities/del-webb-lake-las-vegas": {
    h2: "MonteLago, the lake path, then the Del Webb clubhouse — 35–45 minutes",
    body: "Lake Las Vegas is not a west-valley add-on. We do not pair it with Sun City Summerlin the same afternoon.",
    pins: [
      {
        name: "Del Webb clubhouse and pools",
        note: "Resort rec on the lake plat. Walk it after the HOA packet at Suite 100.",
      },
      {
        name: "MonteLago Village",
        note: "Lakeside shops and dining. Separate from Henderson's Galleria mall.",
      },
      {
        name: "Lake path / shoreline",
        note: "Measure the walk from the listing, not the marketing aerial. Call (702) 222-1964.",
      },
    ],
  },
};
