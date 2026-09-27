import { describe, expect, it } from "vitest";
import { expertQuotes } from "@/lib/expert-quotes";
import { communityHighlights } from "@/lib/community-highlights";
import { fiftyFiveAmenities } from "@/lib/fifty-five-amenities";
import { neighborhoodAmenities } from "@/lib/neighborhood-amenities";
import { neighborhoodLifestyles } from "@/lib/neighborhood-lifestyle";
import { neighborhoodParks } from "@/lib/neighborhood-parks";
import { villageDetails } from "@/lib/village-details";
import { occupiedHeadingStills, quotePhotoForPath } from "@/lib/media";
import { uniqueInteriors } from "@/lib/unique-interiors";

const forbidden = [
  "safe neighborhood",
  "good schools",
  "family-friendly",
  "established community",
  "desirable",
  "sought-after",
  "hidden gems",
  "mccarran",
  "it's a lifestyle",
  "white-glove",
];

describe("expertQuotes", () => {
  const paths = Object.keys(expertQuotes);

  it("covers every UniqueInterior path", () => {
    expect(paths.sort()).toEqual(Object.keys(uniqueInteriors).sort());
  });

  it("keeps quote H2s unique per path", () => {
    const headings = paths.map((path) => expertQuotes[path].h2);
    expect(new Set(headings).size).toBe(headings.length);
  });

  it("keeps quote bodies unique per path", () => {
    const quotes = paths.map((path) => expertQuotes[path].quote);
    expect(new Set(quotes).size).toBe(quotes.length);
  });

  it("keeps H2s distinct from UniqueInterior, amenity, and lifestyle headings", () => {
    for (const path of paths) {
      const h2 = expertQuotes[path].h2;
      expect(h2).not.toBe(uniqueInteriors[path].h2);
      expect(h2).not.toBe(uniqueInteriors[path].h3);
      if (neighborhoodAmenities[path]) {
        expect(h2).not.toBe(neighborhoodAmenities[path].h3);
      }
      if (neighborhoodLifestyles[path]) {
        expect(h2).not.toBe(neighborhoodLifestyles[path].h2);
      }
      if (fiftyFiveAmenities[path]) {
        expect(h2).not.toBe(fiftyFiveAmenities[path].h2);
      }
      if (communityHighlights[path]) {
        expect(h2).not.toBe(communityHighlights[path].h3);
      }
      if (neighborhoodParks[path]) {
        expect(h2).not.toBe(neighborhoodParks[path].h3);
      }
      if (villageDetails[path]) {
        for (const detail of villageDetails[path]) {
          expect(h2).not.toBe(detail.h3);
        }
      }
    }
  });

  it("avoids Fair Housing proxies and slogan chassis", () => {
    const blob = JSON.stringify(expertQuotes).toLowerCase();
    for (const phrase of forbidden) {
      expect(blob).not.toContain(phrase);
    }
  });

  it("keeps quote stills distinct from other heading stills on that path", () => {
    const collisions: string[] = [];
    for (const path of paths) {
      const quote = quotePhotoForPath(path).src;
      if (occupiedHeadingStills(path).has(quote)) {
        collisions.push(`${path}: quote=${quote}`);
      }
    }
    expect(collisions).toEqual([]);
  });
});
