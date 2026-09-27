import { describe, expect, it } from "vitest";
import {
  h2PhotoForPath,
  h3PhotoForPath,
  photoForPath,
  sellerFaqPhotoForPath,
} from "@/lib/media";
import { sellerFaqs } from "@/lib/seller-faqs";
import { uniqueInteriors } from "@/lib/unique-interiors";

const forbidden = [
  "safe neighborhood",
  "good schools",
  "family-friendly",
  "established community",
  "good area",
  "best area",
  "mccarran",
];

describe("sellerFaqs", () => {
  const paths = Object.keys(sellerFaqs);

  it("covers the sellers hub plus four seller-intent paths", () => {
    expect(paths).toHaveLength(5);
  });

  it("keeps H2 copy unique per path", () => {
    const headings = paths.map((path) => sellerFaqs[path].h2);
    expect(new Set(headings).size).toBe(headings.length);
  });

  it("keeps every FAQ question unique across seller pages", () => {
    const questions = paths.flatMap((path) =>
      sellerFaqs[path].items.map((item) => item.q)
    );
    expect(new Set(questions).size).toBe(questions.length);
  });

  it("does not use the swapped days-on-market selling template", () => {
    const questions = paths.flatMap((path) =>
      sellerFaqs[path].items.map((item) => item.q.toLowerCase())
    );
    for (const q of questions) {
      expect(q.startsWith("how long will it take to sell")).toBe(false);
    }
  });

  it("avoids Fair Housing proxies and McCarran", () => {
    const blob = JSON.stringify(sellerFaqs).toLowerCase();
    for (const phrase of forbidden) {
      expect(blob).not.toContain(phrase);
    }
  });

  it("keeps FAQ stills distinct from H1/H2/H3 stills", () => {
    const collisions: string[] = [];
    for (const path of paths) {
      const faq = sellerFaqPhotoForPath(path).src;
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

  it("keeps FAQ H2s distinct from UniqueInterior H2s", () => {
    for (const path of paths) {
      expect(sellerFaqs[path].h2).not.toBe(uniqueInteriors[path].h2);
    }
  });

  it("keeps FAQ stills unique across seller paths", () => {
    const srcs = paths.map((path) => sellerFaqPhotoForPath(path).src);
    expect(new Set(srcs).size).toBe(srcs.length);
  });
});
