import { describe, expect, it } from "vitest";
import {
  amenityPhotoForPath,
  campusPhotoForPath,
  commutePhotoForPath,
  faqPhotoForPath,
  h2PhotoForPath,
  h3PhotoForPath,
  photoForPath,
} from "@/lib/media";
import { neighborhoodAmenities } from "@/lib/neighborhood-amenities";
import { uniqueInteriors } from "@/lib/unique-interiors";

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
];

describe("neighborhoodAmenities", () => {
  const paths = Object.keys(neighborhoodAmenities);

  it("covers the hub plus ten village paths", () => {
    expect(paths).toHaveLength(11);
  });

  it("keeps amenity H3s unique per path", () => {
    const headings = paths.map((path) => neighborhoodAmenities[path].h3);
    expect(new Set(headings).size).toBe(headings.length);
  });

  it("keeps H3s distinct from UniqueInterior H2/H3", () => {
    for (const path of paths) {
      expect(neighborhoodAmenities[path].h3).not.toBe(uniqueInteriors[path].h2);
      expect(neighborhoodAmenities[path].h3).not.toBe(uniqueInteriors[path].h3);
    }
  });

  it("avoids Fair Housing proxies and McCarran", () => {
    const blob = JSON.stringify(neighborhoodAmenities).toLowerCase();
    for (const phrase of forbidden) {
      expect(blob).not.toContain(phrase);
    }
  });

  it("keeps amenity stills distinct from H1/H2/H3/campus/commute/FAQ stills", () => {
    const collisions: string[] = [];
    for (const path of paths) {
      const amenity = amenityPhotoForPath(path).src;
      const used = [
        photoForPath(path).src,
        h2PhotoForPath(path).src,
        h3PhotoForPath(path).src,
        campusPhotoForPath(path).src,
        commutePhotoForPath(path).src,
        faqPhotoForPath(path).src,
      ];
      if (used.includes(amenity)) {
        collisions.push(`${path}: amenity=${amenity}`);
      }
    }
    expect(collisions).toEqual([]);
  });

  it("keeps amenity stills unique across neighborhood paths", () => {
    const srcs = paths.map((path) => amenityPhotoForPath(path).src);
    expect(new Set(srcs).size).toBe(srcs.length);
  });
});
