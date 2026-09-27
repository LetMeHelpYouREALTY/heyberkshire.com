import { describe, expect, it } from "vitest";
import {
  faqHubPhotoForCategory,
  h2PhotoForPath,
  h3PhotoForPath,
  photoForPath,
  type FaqHubCategoryId,
} from "@/lib/media";
import { faqHubCategories } from "@/lib/faq-hub";
import { uniqueInteriors } from "@/lib/unique-interiors";

const forbidden = [
  "safe neighborhood",
  "good schools",
  "family-friendly",
  "established community",
  "good area",
  "best area",
  "best investment",
  "desirable",
  "mccarran",
];

describe("faqHubCategories", () => {
  it("covers six unique categories", () => {
    expect(faqHubCategories).toHaveLength(6);
    const ids = faqHubCategories.map((category) => category.id);
    expect(new Set(ids).size).toBe(6);
  });

  it("keeps category H2s unique and distinct from UniqueInterior", () => {
    const headings = faqHubCategories.map((category) => category.h2);
    expect(new Set(headings).size).toBe(headings.length);
    for (const h2 of headings) {
      expect(h2).not.toBe(uniqueInteriors["/faq"].h2);
    }
  });

  it("keeps every FAQ question unique on the hub", () => {
    const questions = faqHubCategories.flatMap((category) =>
      category.items.map((item) => item.q)
    );
    expect(new Set(questions).size).toBe(questions.length);
  });

  it("avoids Fair Housing proxies and McCarran", () => {
    const blob = JSON.stringify(faqHubCategories).toLowerCase();
    for (const phrase of forbidden) {
      expect(blob).not.toContain(phrase);
    }
  });

  it("keeps category stills distinct from /faq H1/H2/H3 and from each other", () => {
    const used = [
      photoForPath("/faq").src,
      h2PhotoForPath("/faq").src,
      h3PhotoForPath("/faq").src,
    ];
    const srcs = faqHubCategories.map(
      (category) => faqHubPhotoForCategory(category.id).src
    );
    expect(new Set(srcs).size).toBe(srcs.length);
    for (const src of srcs) {
      expect(used).not.toContain(src);
    }
  });

  it("covers every FaqHubCategoryId", () => {
    const ids = new Set(faqHubCategories.map((category) => category.id));
    const expected: FaqHubCategoryId[] = [
      "bhhs",
      "buying",
      "selling",
      "investment",
      "relocating",
      "working",
    ];
    for (const id of expected) {
      expect(ids.has(id)).toBe(true);
    }
  });
});
