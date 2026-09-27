import { describe, expect, it } from "vitest";
import { fiftyFiveAmenities } from "@/lib/fifty-five-amenities";
import { uniqueInteriors } from "@/lib/unique-interiors";
import {
  campusPhotoForPath,
  commutePhotoForPath,
  fiftyFiveAmenityPhotoForPath,
  fiftyFiveFaqPhotoForPath,
  h2PhotoForPath,
  h3PhotoForPath,
  photoForPath,
} from "@/lib/media";

const forbidden = [
  "safe neighborhood",
  "good schools",
  "family-friendly",
  "established community",
  "desirable",
  "sought-after",
  "mccarran",
  "world-class amenities",
];

describe("fiftyFiveAmenities", () => {
  const paths = Object.keys(fiftyFiveAmenities);

  it("covers the hub plus seven community paths", () => {
    expect(paths).toHaveLength(8);
  });

  it("keeps amenity H2s unique per path", () => {
    const headings = paths.map((path) => fiftyFiveAmenities[path].h2);
    expect(new Set(headings).size).toBe(headings.length);
  });

  it("keeps H2s distinct from UniqueInterior H2/H3", () => {
    for (const path of paths) {
      expect(fiftyFiveAmenities[path].h2).not.toBe(uniqueInteriors[path].h2);
      expect(fiftyFiveAmenities[path].h2).not.toBe(uniqueInteriors[path].h3);
    }
  });

  it("avoids Fair Housing proxies, McCarran, and chassis slogans", () => {
    const blob = JSON.stringify(fiftyFiveAmenities).toLowerCase();
    for (const phrase of forbidden) {
      expect(blob).not.toContain(phrase);
    }
  });

  it("keeps amenity stills distinct from H1/H2/H3/campus/commute/FAQ stills", () => {
    const collisions: string[] = [];
    for (const path of paths) {
      const amenity = fiftyFiveAmenityPhotoForPath(path).src;
      const used = [
        photoForPath(path).src,
        h2PhotoForPath(path).src,
        h3PhotoForPath(path).src,
        campusPhotoForPath(path).src,
        commutePhotoForPath(path).src,
        fiftyFiveFaqPhotoForPath(path).src,
      ];
      if (used.includes(amenity)) {
        collisions.push(`${path}: amenity=${amenity}`);
      }
    }
    expect(collisions).toEqual([]);
  });
});
