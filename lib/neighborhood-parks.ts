/**
 * Unique parks interiors for villages that still used a "Parks & Recreation"
 * chassis. Named acreage and rec buildings — not a swapped green box.
 * Fair Housing: square footage, amenities, commute minutes. Dated 2026-09-15.
 */

export type NeighborhoodParkPin = {
  name: string;
  note: string;
};

export type NeighborhoodParkCopy = {
  h3: string;
  body: string;
  pins: [
    NeighborhoodParkPin,
    NeighborhoodParkPin,
    NeighborhoodParkPin,
    NeighborhoodParkPin,
  ];
};

export const neighborhoodParks: Record<string, NeighborhoodParkCopy> = {
  "/neighborhoods/centennial-hills": {
    h3: "120-acre Centennial Hills Park vs Floyd Lamb lakes — two northwest rec acres",
    body: "We measure park acreage on the same US-95 afternoon as mountain-view streets. Suite 100 is 15–20 minutes west. Do not treat a listing photo as the park.",
    pins: [
      {
        name: "Centennial Hills Park",
        note: "About 120 acres: sports fields, playground, skate park, dog park. First rec stop from 9406 W Lake Mead Blvd on a Centennial Hills day.",
      },
      {
        name: "Centennial Hills YMCA",
        note: "Indoor pool and fitness on the same northwest cluster. Walk it if the brief includes year-round rec, not only desert trails.",
      },
      {
        name: "Floyd Lamb Park",
        note: "About 680 acres with lakes. Roughly 15 minutes from Centennial Hills Park — a second rec clock, often paired with Skye Canyon instead.",
      },
      {
        name: "Angel Park Golf Club",
        note: "Two public courses, 36 holes, on the west-valley side toward Summerlin. Call (702) 222-1964 to sequence golf vs the 120-acre park.",
      },
    ],
  },
  "/neighborhoods/mountains-edge": {
    h3: "Exploration Peak summit trail vs Mountains Edge Regional Park splash pad",
    body: "Southwest rec is two parks, not one caption. We walk a trail at Exploration Peak before the splash pad so acreage and elevation are facts. Suite 100 is 20–30 minutes via the Beltway.",
    pins: [
      {
        name: "Exploration Peak Park",
        note: "About 120 acres. Summit trail with Strip and mountain views. First stop from Suite 100 on a Mountains Edge day.",
      },
      {
        name: "Mountains Edge Regional Park",
        note: "Sports fields, playground, splash pad, walking paths inside the plat — a different pin from the summit trail.",
      },
      {
        name: "HOA pools and desert trail connectors",
        note: "Multiple pool campuses plus miles of paths between villages. Measure shade vs new stucco in person.",
      },
      {
        name: "Rhodes Ranch Golf Club",
        note: "Public golf near the southwest plat. Southern Highlands Golf Club is a separate I-15 add-on. Call (702) 222-1964.",
      },
    ],
  },
};
