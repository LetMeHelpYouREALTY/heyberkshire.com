import { describe, expect, it } from "vitest";
import { expertQuotes } from "@/lib/expert-quotes";
import {
  buyerFaqPhotoForPath,
  h2PhotoForPath,
  h3PhotoForPath,
  intentFaqPhotoForPath,
  occupiedHeadingStills,
  photoForPath,
  processPhotoForPath,
  quotePhotoForPath,
  supportFaqPhotoForPath,
} from "@/lib/media";
import { processSteps } from "@/lib/process-steps";
import { uniqueInteriors } from "@/lib/unique-interiors";

const forbidden = [
  "safe neighborhood",
  "good schools",
  "family-friendly",
  "established community",
  "desirable",
  "sought-after",
  "mccarran",
  "hidden gems",
  "white-glove",
  "white glove",
  "it's a lifestyle",
  "trusted brand",
  "match your lifestyle",
  "most trusted",
];

describe("processSteps", () => {
  const entries = Object.entries(processSteps).flatMap(([path, slots]) =>
    slots.map((copy, slot) => ({ path, slot, copy }))
  );

  it("covers the leftover Trusted Brand and process chassis paths", () => {
    expect(Object.keys(processSteps).sort()).toEqual([
      "/buyers",
      "/contact",
      "/listings",
      "/luxury-homes",
      "/services",
      "/why-berkshire-hathaway",
    ]);
    expect(processSteps["/services"]).toHaveLength(2);
  });

  it("keeps every process H2 unique", () => {
    const headings = entries.map((entry) => entry.copy.h2);
    expect(new Set(headings).size).toBe(headings.length);
  });

  it("keeps every step title unique across paths", () => {
    const titles = entries.flatMap((entry) =>
      entry.copy.steps.map((step) => step.title)
    );
    expect(new Set(titles).size).toBe(titles.length);
  });

  it("keeps H2s distinct from UniqueInterior and expert-quote headings", () => {
    for (const { path, copy } of entries) {
      expect(copy.h2).not.toBe(uniqueInteriors[path].h2);
      expect(copy.h2).not.toBe(uniqueInteriors[path].h3);
      expect(copy.h2).not.toBe(expertQuotes[path].h2);
      for (const step of copy.steps) {
        expect(step.title).not.toBe(uniqueInteriors[path].h2);
        expect(step.title).not.toBe(uniqueInteriors[path].h3);
        expect(step.title).not.toBe(expertQuotes[path].h2);
      }
    }
  });

  it("avoids Fair Housing proxies and slogan chassis", () => {
    const blob = JSON.stringify(processSteps).toLowerCase();
    for (const phrase of forbidden) {
      expect(blob).not.toContain(phrase);
    }
  });

  it("keeps process stills distinct from other heading stills on that path", () => {
    const collisions: string[] = [];
    for (const { path, slot } of entries) {
      const process = processPhotoForPath(path, slot).src;
      const used = [
        photoForPath(path).src,
        h2PhotoForPath(path).src,
        h3PhotoForPath(path).src,
        quotePhotoForPath(path).src,
      ];
      if (path === "/buyers") used.push(buyerFaqPhotoForPath(path).src);
      if (path === "/listings" || path === "/contact" || path.startsWith("/why-berkshire")) {
        used.push(supportFaqPhotoForPath(path).src);
      }
      if (path.startsWith("/luxury-homes")) {
        used.push(intentFaqPhotoForPath(path).src);
      }
      for (let other = 0; other < slot; other += 1) {
        used.push(processPhotoForPath(path, other).src);
      }
      if (used.includes(process)) {
        collisions.push(`${path}#${slot}: ${process}`);
      }
    }
    expect(collisions).toEqual([]);
  });

  it("registers process stills in occupiedHeadingStills so quotes skip them", () => {
    for (const { path, slot } of entries) {
      expect(occupiedHeadingStills(path).has(processPhotoForPath(path, slot).src)).toBe(
        true
      );
      expect(quotePhotoForPath(path).src).not.toBe(
        processPhotoForPath(path, slot).src
      );
    }
  });
});
