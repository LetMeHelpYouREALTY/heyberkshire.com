import { describe, expect, it } from "vitest";
import {
  h2PhotoForPath,
  h3PhotoForPath,
  intentFaqPhotoForPath,
  photoForPath,
} from "@/lib/media";
import { intentFaqs } from "@/lib/intent-faqs";
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

describe("intentFaqs", () => {
  const paths = Object.keys(intentFaqs);

  it("covers luxury, relocation, valuation, new construction, and investment hubs", () => {
    expect(paths).toHaveLength(5);
  });

  it("keeps H2 copy unique per path", () => {
    const headings = paths.map((path) => intentFaqs[path].h2);
    expect(new Set(headings).size).toBe(headings.length);
  });

  it("keeps every FAQ question unique across intent pages", () => {
    const questions = paths.flatMap((path) =>
      intentFaqs[path].items.map((item) => item.q)
    );
    expect(new Set(questions).size).toBe(questions.length);
  });

  it("does not use swapped best-area or Zestimate-only templates", () => {
    const questions = paths.flatMap((path) =>
      intentFaqs[path].items.map((item) => item.q.toLowerCase())
    );
    for (const q of questions) {
      expect(q.includes("best area for investment")).toBe(false);
      expect(q.startsWith("how accurate are online home value estimates")).toBe(
        false
      );
    }
  });

  it("avoids Fair Housing proxies and McCarran", () => {
    const blob = JSON.stringify(intentFaqs).toLowerCase();
    for (const phrase of forbidden) {
      expect(blob).not.toContain(phrase);
    }
  });

  it("keeps FAQ stills distinct from H1/H2/H3 stills", () => {
    const collisions: string[] = [];
    for (const path of paths) {
      const faq = intentFaqPhotoForPath(path).src;
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
      expect(intentFaqs[path].h2).not.toBe(uniqueInteriors[path].h2);
    }
  });

  it("keeps FAQ stills unique across intent paths", () => {
    const srcs = paths.map((path) => intentFaqPhotoForPath(path).src);
    expect(new Set(srcs).size).toBe(srcs.length);
  });
});
