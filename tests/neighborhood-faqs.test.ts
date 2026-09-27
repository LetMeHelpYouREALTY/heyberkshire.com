import { describe, expect, it } from "vitest";
import {
  campusPhotoForPath,
  commutePhotoForPath,
  faqPhotoForPath,
  h2PhotoForPath,
  h3PhotoForPath,
  photoForPath,
} from "@/lib/media";
import { neighborhoodFaqs } from "@/lib/neighborhood-faqs";

const forbidden = [
  "safe neighborhood",
  "good schools",
  "family-friendly",
  "established community",
  "good area",
  "mccarran",
  "celebrities",
];

describe("neighborhoodFaqs", () => {
  const paths = Object.keys(neighborhoodFaqs);

  it("covers every neighborhood interior path plus the hub", () => {
    expect(paths).toHaveLength(11);
  });

  it("keeps H2 copy unique per path", () => {
    const headings = paths.map((path) => neighborhoodFaqs[path].h2);
    expect(new Set(headings).size).toBe(headings.length);
  });

  it("keeps every FAQ question unique across neighborhood pages", () => {
    const questions = paths.flatMap((path) =>
      neighborhoodFaqs[path].items.map((item) => item.q)
    );
    expect(new Set(questions).size).toBe(questions.length);
  });

  it("does not use the city-swapped median-price question template", () => {
    const questions = paths.flatMap((path) =>
      neighborhoodFaqs[path].items.map((item) => item.q.toLowerCase())
    );
    for (const q of questions) {
      expect(q.startsWith("what is the current median home price in")).toBe(
        false
      );
    }
  });

  it("avoids Fair Housing proxies, McCarran, and celebrity targeting", () => {
    const blob = JSON.stringify(neighborhoodFaqs).toLowerCase();
    for (const phrase of forbidden) {
      expect(blob).not.toContain(phrase);
    }
  });

  it("keeps FAQ stills distinct from H1/H2/H3/campus/commute stills", () => {
    const collisions: string[] = [];
    for (const path of paths) {
      const faq = faqPhotoForPath(path).src;
      const used = [
        photoForPath(path).src,
        h2PhotoForPath(path).src,
        h3PhotoForPath(path).src,
        campusPhotoForPath(path).src,
        commutePhotoForPath(path).src,
      ];
      if (used.includes(faq)) {
        collisions.push(`${path}: faq=${faq}`);
      }
    }
    expect(collisions).toEqual([]);
  });

  it("keeps FAQ stills unique across neighborhood paths", () => {
    const srcs = paths.map((path) => faqPhotoForPath(path).src);
    expect(new Set(srcs).size).toBe(srcs.length);
  });
});
