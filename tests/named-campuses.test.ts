import { describe, expect, it } from "vitest";
import {
  campusPhotoForPath,
  h2PhotoForPath,
  h3PhotoForPath,
  photoForPath,
} from "@/lib/media";
import { namedCampuses } from "@/lib/named-campuses";

const forbidden = [
  "safe neighborhood",
  "good schools",
  "family-friendly",
  "established community",
  "best schools",
  "top-rated",
  "greatschools",
];

describe("namedCampuses", () => {
  const paths = Object.keys(namedCampuses);

  it("covers every neighborhood interior path plus the hub", () => {
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
    expect(paths).toHaveLength(11);
  });

  it("keeps H3 copy unique per path", () => {
    const headings = paths.map((path) => namedCampuses[path].h3);
    expect(new Set(headings).size).toBe(headings.length);
  });

  it("keeps body copy unique per path", () => {
    const bodies = paths.map((path) => namedCampuses[path].body);
    expect(new Set(bodies).size).toBe(bodies.length);
  });

  it("avoids Fair Housing proxy phrases and school ratings", () => {
    const blob = JSON.stringify(namedCampuses).toLowerCase();
    for (const phrase of forbidden) {
      expect(blob).not.toContain(phrase);
    }
  });

  it("keeps campus stills distinct from H1, H2, and unique-interior H3", () => {
    const collisions: string[] = [];
    for (const path of paths) {
      const h1 = photoForPath(path).src;
      const h2 = h2PhotoForPath(path).src;
      const h3 = h3PhotoForPath(path).src;
      const campus = campusPhotoForPath(path).src;
      if (campus === h1 || campus === h2 || campus === h3) {
        collisions.push(`${path}: campus=${campus} H1=${h1} H2=${h2} H3=${h3}`);
      }
    }
    expect(collisions).toEqual([]);
  });

  it("keeps campus stills unique across neighborhood paths", () => {
    const srcs = paths.map((path) => campusPhotoForPath(path).src);
    expect(new Set(srcs).size).toBe(srcs.length);
  });
});
