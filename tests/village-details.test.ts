import { describe, expect, it } from "vitest";
import { communityHighlights } from "@/lib/community-highlights";
import { expertQuotes } from "@/lib/expert-quotes";
import { namedCampuses } from "@/lib/named-campuses";
import { neighborhoodAmenities } from "@/lib/neighborhood-amenities";
import { neighborhoodCommutes } from "@/lib/neighborhood-commutes";
import { neighborhoodLifestyles } from "@/lib/neighborhood-lifestyle";
import { neighborhoodParks } from "@/lib/neighborhood-parks";
import { uniqueInteriors } from "@/lib/unique-interiors";
import { villageDetails } from "@/lib/village-details";
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
  villageDetailPhotoForPath,
} from "@/lib/media";

const forbidden = [
  "safe neighborhood",
  "good schools",
  "family-friendly",
  "established community",
  "desirable",
  "sought-after",
  "mccarran",
  "hidden gems",
  "white-glove",
  "it's a lifestyle",
];

describe("villageDetails", () => {
  const entries = Object.entries(villageDetails).flatMap(([path, slots]) =>
    slots.map((copy, slot) => ({ path, slot, copy }))
  );

  it("covers the leftover village H3 chassis paths", () => {
    expect(Object.keys(villageDetails).sort()).toEqual([
      "/neighborhoods/henderson",
      "/neighborhoods/inspirada",
      "/neighborhoods/north-las-vegas",
      "/neighborhoods/skye-canyon",
      "/neighborhoods/southern-highlands",
      "/neighborhoods/the-ridges",
    ]);
    expect(villageDetails["/neighborhoods/north-las-vegas"]).toHaveLength(2);
  });

  it("keeps every detail H3 unique", () => {
    const headings = entries.map((entry) => entry.copy.h3);
    expect(new Set(headings).size).toBe(headings.length);
  });

  it("keeps H3s distinct from other section headings on the same path", () => {
    for (const { path, copy } of entries) {
      const h3 = copy.h3;
      expect(h3).not.toBe(uniqueInteriors[path].h2);
      expect(h3).not.toBe(uniqueInteriors[path].h3);
      expect(h3).not.toBe(neighborhoodAmenities[path].h3);
      expect(h3).not.toBe(neighborhoodLifestyles[path].h2);
      expect(h3).not.toBe(namedCampuses[path].h3);
      expect(h3).not.toBe(neighborhoodCommutes[path].h3);
      expect(h3).not.toBe(expertQuotes[path].h2);
      if (communityHighlights[path]) {
        expect(h3).not.toBe(communityHighlights[path].h3);
      }
      if (neighborhoodParks[path]) {
        expect(h3).not.toBe(neighborhoodParks[path].h3);
      }
    }
  });

  it("avoids Fair Housing proxies and slogan chassis", () => {
    const blob = JSON.stringify(villageDetails).toLowerCase();
    for (const phrase of forbidden) {
      expect(blob).not.toContain(phrase);
    }
  });

  it("keeps detail stills distinct from other heading stills on that path", () => {
    const collisions: string[] = [];
    for (const { path, slot } of entries) {
      const detail = villageDetailPhotoForPath(path, slot).src;
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
      if (neighborhoodParks[path]) {
        used.push(parkPhotoForPath(path).src);
      }
      for (let other = 0; other < slot; other += 1) {
        used.push(villageDetailPhotoForPath(path, other).src);
      }
      if (used.includes(detail)) {
        collisions.push(`${path}#${slot}: ${detail}`);
      }
    }
    expect(collisions).toEqual([]);
  });

  it("keeps detail stills unique across leftover village slots", () => {
    const srcs = entries.map(({ path, slot }) =>
      villageDetailPhotoForPath(path, slot).src
    );
    expect(new Set(srcs).size).toBe(srcs.length);
  });
});
