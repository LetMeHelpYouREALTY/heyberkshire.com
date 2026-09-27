import { describe, expect, it } from "vitest";
import {
  h2PhotoForPath,
  h3PhotoForPath,
  photoForPath,
  supportFaqPhotoForPath,
} from "@/lib/media";
import { supportFaqs } from "@/lib/support-faqs";
import { uniqueInteriors } from "@/lib/unique-interiors";

const forbidden = [
  "safe neighborhood",
  "good schools",
  "family-friendly",
  "established community",
  "good area",
  "best area",
  "desirable",
  "mccarran",
];

describe("supportFaqs", () => {
  const paths = Object.keys(supportFaqs);

  it("covers home, contact, BHHS, listings, GBP, and three market URLs", () => {
    expect(paths).toHaveLength(8);
    expect(paths).toEqual(
      expect.arrayContaining([
        "/",
        "/contact",
        "/why-berkshire-hathaway",
        "/listings",
        "/google-business",
        "/market-report",
        "/market-insights",
        "/market-update",
      ])
    );
  });

  it("keeps H2 copy unique per path", () => {
    const headings = paths.map((path) => supportFaqs[path].h2);
    expect(new Set(headings).size).toBe(headings.length);
  });

  it("keeps every FAQ question unique across support pages", () => {
    const questions = paths.flatMap((path) =>
      supportFaqs[path].items.map((item) => item.q)
    );
    expect(new Set(questions).size).toBe(questions.length);
  });

  it("does not use swapped generic market or contact templates", () => {
    const questions = paths.flatMap((path) =>
      supportFaqs[path].items.map((item) => item.q.toLowerCase())
    );
    for (const q of questions) {
      expect(q.startsWith("is now a good time to buy")).toBe(false);
      expect(q.startsWith("what should i expect during my first consultation")).toBe(
        false
      );
      expect(q.includes("best time of year to buy")).toBe(false);
    }
  });

  it("avoids Fair Housing proxies and McCarran", () => {
    const blob = JSON.stringify(supportFaqs).toLowerCase();
    for (const phrase of forbidden) {
      expect(blob).not.toContain(phrase);
    }
  });

  it("keeps FAQ H2s distinct from UniqueInterior H2s", () => {
    for (const path of paths) {
      expect(supportFaqs[path].h2).not.toBe(uniqueInteriors[path].h2);
    }
  });

  it("keeps FAQ stills distinct from H1/H2/H3 stills", () => {
    const collisions: string[] = [];
    for (const path of paths) {
      const faq = supportFaqPhotoForPath(path).src;
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

  it("keeps FAQ stills unique across support paths", () => {
    const srcs = paths.map((path) => supportFaqPhotoForPath(path).src);
    expect(new Set(srcs).size).toBe(srcs.length);
  });
});
