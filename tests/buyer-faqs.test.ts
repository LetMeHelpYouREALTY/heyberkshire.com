import { describe, expect, it } from "vitest";
import {
  buyerFaqPhotoForPath,
  h2PhotoForPath,
  h3PhotoForPath,
  photoForPath,
} from "@/lib/media";
import { buyerFaqs } from "@/lib/buyer-faqs";

const forbidden = [
  "safe neighborhood",
  "good schools",
  "family-friendly",
  "established community",
  "good area",
  "desirable",
  "mccarran",
];

describe("buyerFaqs", () => {
  const paths = Object.keys(buyerFaqs);

  it("covers the buyers hub plus first-time, California, and luxury search paths", () => {
    expect(paths).toHaveLength(4);
  });

  it("keeps H2 copy unique per path", () => {
    const headings = paths.map((path) => buyerFaqs[path].h2);
    expect(new Set(headings).size).toBe(headings.length);
  });

  it("keeps every FAQ question unique across buyer pages", () => {
    const questions = paths.flatMap((path) =>
      buyerFaqs[path].items.map((item) => item.q)
    );
    expect(new Set(questions).size).toBe(questions.length);
  });

  it("does not use swapped down-payment or neighborhood-preference templates", () => {
    const questions = paths.flatMap((path) =>
      buyerFaqs[path].items.map((item) => item.q.toLowerCase())
    );
    for (const q of questions) {
      expect(q.startsWith("how much do i need for a down payment")).toBe(false);
      expect(q.startsWith("what neighborhoods do california relocators prefer")).toBe(
        false
      );
    }
  });

  it("avoids Fair Housing proxies and McCarran", () => {
    const blob = JSON.stringify(buyerFaqs).toLowerCase();
    for (const phrase of forbidden) {
      expect(blob).not.toContain(phrase);
    }
  });

  it("keeps FAQ stills distinct from H1/H2/H3 stills", () => {
    const collisions: string[] = [];
    for (const path of paths) {
      const faq = buyerFaqPhotoForPath(path).src;
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

  it("keeps FAQ stills unique across buyer paths", () => {
    const srcs = paths.map((path) => buyerFaqPhotoForPath(path).src);
    expect(new Set(srcs).size).toBe(srcs.length);
  });
});
