import { describe, expect, it } from "vitest";
import { communityHighlights } from "@/lib/community-highlights";
import { expertQuotes } from "@/lib/expert-quotes";
import { namedCampuses } from "@/lib/named-campuses";
import { neighborhoodAmenities } from "@/lib/neighborhood-amenities";
import { neighborhoodCommutes } from "@/lib/neighborhood-commutes";
import { neighborhoodLifestyles } from "@/lib/neighborhood-lifestyle";
import { neighborhoodParks } from "@/lib/neighborhood-parks";
import { uniqueInteriors } from "@/lib/unique-interiors";
import {
  amenityPhotoForPath,
  campusPhotoForPath,
  commutePhotoForPath,
  faqPhotoForPath,
  h2PhotoForPath,
  h3PhotoForPath,
  highlightPhotoForPath,
  lifestylePhotoForPath,
  parkPhotoForPath,
  photoForPath,
  quotePhotoForPath,
} from "@/lib/media";

const forbidden = [
  "safe neighborhood",
  "good schools",
  "family-friendly",
  "established community",
  "desirable",
  "sought-after",
  "mccarran",
];

describe("neighborhoodParks", () => {
  const paths = Object.keys(neighborhoodParks);

  it("covers Centennial Hills and Mountains Edge", () => {
    expect(paths.sort()).toEqual([
      "/neighborhoods/centennial-hills",
      "/neighborhoods/mountains-edge",
    ]);
  });

  it("keeps park H3s unique per path", () => {
    const headings = paths.map((path) => neighborhoodParks[path].h3);
    expect(new Set(headings).size).toBe(headings.length);
  });

  it("keeps H3s distinct from other section headings on the same path", () => {
    for (const path of paths) {
      const h3 = neighborhoodParks[path].h3;
      expect(h3).not.toBe(uniqueInteriors[path].h2);
      expect(h3).not.toBe(uniqueInteriors[path].h3);
      expect(h3).not.toBe(neighborhoodAmenities[path].h3);
      expect(h3).not.toBe(neighborhoodLifestyles[path].h2);
      expect(h3).not.toBe(namedCampuses[path].h3);
      expect(h3).not.toBe(neighborhoodCommutes[path].h3);
      expect(h3).not.toBe(expertQuotes[path].h2);
      expect(h3).not.toBe(communityHighlights[path].h3);
    }
  });

  it("avoids Fair Housing proxies and McCarran", () => {
    const blob = JSON.stringify(neighborhoodParks).toLowerCase();
    for (const phrase of forbidden) {
      expect(blob).not.toContain(phrase);
    }
  });

  it("keeps park stills distinct from other heading stills on that path", () => {
    const collisions: string[] = [];
    for (const path of paths) {
      const park = parkPhotoForPath(path).src;
      const used = [
        photoForPath(path).src,
        h2PhotoForPath(path).src,
        h3PhotoForPath(path).src,
        campusPhotoForPath(path).src,
        commutePhotoForPath(path).src,
        faqPhotoForPath(path).src,
        amenityPhotoForPath(path).src,
        lifestylePhotoForPath(path).src,
        highlightPhotoForPath(path).src,
        quotePhotoForPath(path).src,
      ];
      if (used.includes(park)) {
        collisions.push(`${path}: park=${park}`);
      }
    }
    expect(collisions).toEqual([]);
  });

  it("keeps park stills unique across the two paths", () => {
    const srcs = paths.map((path) => parkPhotoForPath(path).src);
    expect(new Set(srcs).size).toBe(srcs.length);
  });
});
