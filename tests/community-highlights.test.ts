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
  parkPhotoForPath,
  photoForPath,
  quotePhotoForPath,
  lifestylePhotoForPath,
} from "@/lib/media";

const forbidden = [
  "safe neighborhood",
  "good schools",
  "family-friendly",
  "established community",
  "good area",
  "best area",
  "desirable",
  "sought-after",
  "mccarran",
  "hidden gems",
  "white-glove",
  "it's a lifestyle",
];

describe("communityHighlights", () => {
  const paths = Object.keys(communityHighlights);

  it("covers the ten village paths that used the chassis H3", () => {
    expect(paths).toHaveLength(10);
  });

  it("keeps highlight H3s unique per path", () => {
    const headings = paths.map((path) => communityHighlights[path].h3);
    expect(new Set(headings).size).toBe(headings.length);
  });

  it("keeps H3s distinct from other section headings on the same path", () => {
    for (const path of paths) {
      const h3 = communityHighlights[path].h3;
      expect(h3).not.toBe(uniqueInteriors[path].h2);
      expect(h3).not.toBe(uniqueInteriors[path].h3);
      expect(h3).not.toBe(neighborhoodAmenities[path].h3);
      expect(h3).not.toBe(neighborhoodLifestyles[path].h2);
      expect(h3).not.toBe(namedCampuses[path].h3);
      expect(h3).not.toBe(neighborhoodCommutes[path].h3);
      expect(h3).not.toBe(expertQuotes[path].h2);
      if (neighborhoodParks[path]) {
        expect(h3).not.toBe(neighborhoodParks[path].h3);
      }
    }
  });

  it("avoids Fair Housing proxies and McCarran", () => {
    const blob = JSON.stringify(communityHighlights).toLowerCase();
    for (const phrase of forbidden) {
      expect(blob).not.toContain(phrase);
    }
  });

  it("keeps highlight stills distinct from other heading stills on that path", () => {
    const collisions: string[] = [];
    for (const path of paths) {
      const highlight = highlightPhotoForPath(path).src;
      const used = [
        photoForPath(path).src,
        h2PhotoForPath(path).src,
        h3PhotoForPath(path).src,
        campusPhotoForPath(path).src,
        commutePhotoForPath(path).src,
        faqPhotoForPath(path).src,
        amenityPhotoForPath(path).src,
        lifestylePhotoForPath(path).src,
        quotePhotoForPath(path).src,
      ];
      if (neighborhoodParks[path]) {
        used.push(parkPhotoForPath(path).src);
      }
      if (used.includes(highlight)) {
        collisions.push(`${path}: highlight=${highlight}`);
      }
    }
    expect(collisions).toEqual([]);
  });

  it("keeps highlight stills unique across village paths", () => {
    const srcs = paths.map((path) => highlightPhotoForPath(path).src);
    expect(new Set(srcs).size).toBe(srcs.length);
  });
});
