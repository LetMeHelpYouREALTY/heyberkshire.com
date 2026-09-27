/**
 * Unique lifestyle H2s per village — named pins, not "sought-after" slogans.
 * Fair Housing: square footage, amenities, named campuses, commute minutes.
 * Dated 2026-09-15.
 */

export type NeighborhoodLifestyleCopy = {
  h2: string;
};

export const neighborhoodLifestyles: Record<string, NeighborhoodLifestyleCopy> =
  {
    "/neighborhoods/summerlin": {
      h2: "Downtown Summerlin retail vs Red Rock trailheads — two west-valley days",
    },
    "/neighborhoods/the-ridges": {
      h2: "Guard-gated ridge lots vs Downtown Summerlin — two Ridges days",
    },
    "/neighborhoods/southern-highlands": {
      h2: "Southern Highlands Golf Club vs I-15/Cactus — two south-valley days",
    },
    "/neighborhoods/skye-canyon": {
      h2: "Skye Center vs Floyd Lamb Park — two northwest days",
    },
    "/neighborhoods/centennial-hills": {
      h2: "Centennial Hills Park vs Arbor View High School commute — two northwest days",
    },
    "/neighborhoods/green-valley": {
      h2: "The District vs 35-year street trees — two Green Valley days",
    },
    "/neighborhoods/henderson": {
      h2: "Green Valley trees vs Inspirada rec campus — two Henderson days",
    },
    "/neighborhoods/inspirada": {
      h2: "Town Center pools vs St. Rose/Eastern — two Inspirada days",
    },
    "/neighborhoods/north-las-vegas": {
      h2: "Aliante rec vs Nellis AFB commute — two North Las Vegas days",
    },
    "/neighborhoods/mountains-edge": {
      h2: "Exploration Peak vs I-15/Blue Diamond — two southwest days",
    },
    "/neighborhoods": {
      h2: "West retail loop vs Henderson loop — pick the first afternoon from Suite 100",
    },
  };
