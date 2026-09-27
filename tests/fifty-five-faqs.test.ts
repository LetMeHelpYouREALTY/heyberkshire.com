import { describe, expect, it } from "vitest";
import {
  fiftyFiveFaqPhotoForPath,
  h2PhotoForPath,
  h3PhotoForPath,
  photoForPath,
} from "@/lib/media";
import { fiftyFiveFaqs } from "@/lib/fifty-five-faqs";

const forbidden = [
  "safe neighborhood",
  "good schools",
  "family-friendly",
  "established community",
  "good area",
  "good investment",
  "mccarran",
  "grandchildren",
];

describe("fiftyFiveFaqs", () => {
  const paths = Object.keys(fiftyFiveFaqs);

  it("covers the 55+ hub plus every campus interior path", () => {
    expect(paths).toHaveLength(8);
  });

  it("keeps H2 copy unique per path", () => {
    const headings = paths.map((path) => fiftyFiveFaqs[path].h2);
    expect(new Set(headings).size).toBe(headings.length);
  });

  it("keeps every FAQ question unique across 55+ pages", () => {
    const questions = paths.flatMap((path) =>
      fiftyFiveFaqs[path].items.map((item) => item.q)
    );
    expect(new Set(questions).size).toBe(questions.length);
  });

  it("does not use the campus-swapped price-range question template", () => {
    const questions = paths.flatMap((path) =>
      fiftyFiveFaqs[path].items.map((item) => item.q.toLowerCase())
    );
    for (const q of questions) {
      expect(q.startsWith("what is the price range at")).toBe(false);
      expect(q.startsWith("how do i tour with dr. jan duffy")).toBe(false);
    }
  });

  it("avoids Fair Housing proxies, McCarran, and familial-status guest marketing", () => {
    const blob = JSON.stringify(fiftyFiveFaqs).toLowerCase();
    for (const phrase of forbidden) {
      expect(blob).not.toContain(phrase);
    }
  });

  it("keeps FAQ stills distinct from H1/H2/H3 stills", () => {
    const collisions: string[] = [];
    for (const path of paths) {
      const faq = fiftyFiveFaqPhotoForPath(path).src;
      const used = [
        photoForPath(path).src,
        h2PhotoForPath(path).src,
        h3PhotoForPath(path).src,
      ];
      if (used.includes(faq)) {
        collisions.push(`${path}: faq=${faq}`);
      }
    }
    expect(collisions).toEqual([]);
  });

  it("keeps FAQ stills unique across 55+ paths", () => {
    const srcs = paths.map((path) => fiftyFiveFaqPhotoForPath(path).src);
    expect(new Set(srcs).size).toBe(srcs.length);
  });
});
