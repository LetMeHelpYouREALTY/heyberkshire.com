import { describe, expect, it } from "vitest";
import {
  campusPhotoForPath,
  commutePhotoForPath,
  h2PhotoForPath,
  h3PhotoForPath,
  photoForPath,
} from "@/lib/media";
import { neighborhoodCommutes } from "@/lib/neighborhood-commutes";

const forbidden = [
  "safe neighborhood",
  "good schools",
  "family-friendly",
  "established community",
  "mccarran",
];

describe("neighborhoodCommutes", () => {
  const paths = Object.keys(neighborhoodCommutes);

  it("covers every neighborhood interior path plus the hub", () => {
    expect(paths).toHaveLength(11);
    expect(paths).toEqual(
      expect.arrayContaining([
        "/neighborhoods",
        "/neighborhoods/summerlin",
        "/neighborhoods/the-ridges",
        "/neighborhoods/southern-highlands",
        "/neighborhoods/skye-canyon",
        "/neighborhoods/centennial-hills",
        "/neighborhoods/green-valley",
        "/neighborhoods/henderson",
        "/neighborhoods/inspirada",
        "/neighborhoods/north-las-vegas",
        "/neighborhoods/mountains-edge",
      ])
    );
  });

  it("keeps H3 copy unique per path", () => {
    const headings = paths.map((path) => neighborhoodCommutes[path].h3);
    expect(new Set(headings).size).toBe(headings.length);
  });

  it("keeps body copy unique per path", () => {
    const bodies = paths.map((path) => neighborhoodCommutes[path].body);
    expect(new Set(bodies).size).toBe(bodies.length);
  });

  it("avoids Fair Housing proxies and the retired airport name", () => {
    const blob = JSON.stringify(neighborhoodCommutes).toLowerCase();
    for (const phrase of forbidden) {
      expect(blob).not.toContain(phrase);
    }
  });

  it("keeps commute stills distinct from H1, H2, unique-interior H3, and campus stills", () => {
    const collisions: string[] = [];
    for (const path of paths) {
      const commute = commutePhotoForPath(path).src;
      const used = [
        photoForPath(path).src,
        h2PhotoForPath(path).src,
        h3PhotoForPath(path).src,
        campusPhotoForPath(path).src,
      ];
      if (used.includes(commute)) {
        collisions.push(`${path}: commute=${commute}`);
      }
    }
    expect(collisions).toEqual([]);
  });

  it("keeps commute stills unique across neighborhood paths", () => {
    const srcs = paths.map((path) => commutePhotoForPath(path).src);
    expect(new Set(srcs).size).toBe(srcs.length);
  });
});
