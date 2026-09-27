import { describe, expect, it } from "vitest";
import {
  amenityPhotoForPath,
  campusPhotoForPath,
  commutePhotoForPath,
  faqPhotoForPath,
  h2PhotoForPath,
  h3PhotoForPath,
  lifestylePhotoForPath,
  photoForPath,
} from "@/lib/media";
import { neighborhoodLifestyles } from "@/lib/neighborhood-lifestyle";
import { uniqueInteriors } from "@/lib/unique-interiors";

const forbidden = [
  "safe neighborhood",
  "good schools",
  "family-friendly",
  "established community",
  "desirable",
  "sought-after",
  "best value",
  "mccarran",
];

describe("neighborhoodLifestyles", () => {
  const paths = Object.keys(neighborhoodLifestyles);

  it("covers the hub plus ten village paths", () => {
    expect(paths).toHaveLength(11);
  });

  it("keeps lifestyle H2s unique per path", () => {
    const headings = paths.map((path) => neighborhoodLifestyles[path].h2);
    expect(new Set(headings).size).toBe(headings.length);
  });

  it("keeps H2s distinct from UniqueInterior H2/H3", () => {
    for (const path of paths) {
      expect(neighborhoodLifestyles[path].h2).not.toBe(uniqueInteriors[path].h2);
      expect(neighborhoodLifestyles[path].h2).not.toBe(uniqueInteriors[path].h3);
    }
  });

  it("avoids Fair Housing proxies and slogan chassis", () => {
    const blob = JSON.stringify(neighborhoodLifestyles).toLowerCase();
    for (const phrase of forbidden) {
      expect(blob).not.toContain(phrase);
    }
  });

  it("keeps lifestyle stills distinct from H1/H2/H3/campus/commute/FAQ/amenity stills", () => {
    const collisions: string[] = [];
    for (const path of paths) {
      const lifestyle = lifestylePhotoForPath(path).src;
      const used = [
        photoForPath(path).src,
        h2PhotoForPath(path).src,
        h3PhotoForPath(path).src,
        campusPhotoForPath(path).src,
        commutePhotoForPath(path).src,
        faqPhotoForPath(path).src,
        amenityPhotoForPath(path).src,
      ];
      if (used.includes(lifestyle)) {
        collisions.push(`${path}: lifestyle=${lifestyle}`);
      }
    }
    expect(collisions).toEqual([]);
  });
});
