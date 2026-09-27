import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const villages = [
  "summerlin",
  "the-ridges",
  "southern-highlands",
  "skye-canyon",
  "centennial-hills",
  "green-valley",
  "henderson",
  "inspirada",
  "north-las-vegas",
  "mountains-edge",
];

describe("village chassis replacements", () => {
  it("removes copy-paste Community Highlights and Parks H3s", () => {
    for (const slug of villages) {
      const src = readFileSync(
        join(process.cwd(), "app/neighborhoods", slug, "page.tsx"),
        "utf8"
      );
      expect(src).not.toContain(">Community Highlights<");
      expect(src).not.toContain(">Parks & Recreation<");
      expect(src).toContain(`<CommunityHighlights path="/neighborhoods/${slug}" />`);
    }
  });

  it("replaces city-name market H2 chassis with listing counts", () => {
    for (const slug of villages) {
      const src = readFileSync(
        join(process.cwd(), "app/neighborhoods", slug, "page.tsx"),
        "utf8"
      );
      expect(src).not.toMatch(/Real Estate Market \| January 2026/);
      expect(src).not.toMatch(/Luxury Market \| January 2026/);
      expect(src).toContain('data-market-snapshot=');
    }
  });

  it("replaces leftover builders/employers/villages H3 chassis", () => {
    const leftovers = {
      "the-ridges": '<VillageDetails path="/neighborhoods/the-ridges" />',
      "southern-highlands":
        '<VillageDetails path="/neighborhoods/southern-highlands" />',
      "skye-canyon": '<VillageDetails path="/neighborhoods/skye-canyon" />',
      inspirada: '<VillageDetails path="/neighborhoods/inspirada" />',
      henderson: '<VillageDetails path="/neighborhoods/henderson" />',
      "north-las-vegas":
        '<VillageDetails path="/neighborhoods/north-las-vegas" />',
    };
    for (const [slug, needle] of Object.entries(leftovers)) {
      const src = readFileSync(
        join(process.cwd(), "app/neighborhoods", slug, "page.tsx"),
        "utf8"
      );
      expect(src).toContain(needle);
      expect(src).not.toContain(">The Six Villages of The Ridges<");
      expect(src).not.toContain(">Southern Highlands Golf Club<");
      expect(src).not.toContain(">Active Builders in Skye Canyon<");
      expect(src).not.toContain(">Builders in Inspirada<");
      expect(src).not.toContain(">Major Henderson Employers<");
      expect(src).not.toContain(">Major North Las Vegas Employers<");
      expect(src).not.toContain(">New Construction Communities<");
    }
  });

  it("avoids premier slogan copy on village pages", () => {
    for (const slug of villages) {
      const src = readFileSync(
        join(process.cwd(), "app/neighborhoods", slug, "page.tsx"),
        "utf8"
      );
      expect(src.toLowerCase()).not.toContain("premier");
    }
  });

  it("avoids exclusive/prestigious slogan copy on village pages", () => {
    for (const slug of villages) {
      const src = readFileSync(
        join(process.cwd(), "app/neighborhoods", slug, "page.tsx"),
        "utf8"
      ).toLowerCase();
      expect(src).not.toContain("prestigious");
      expect(src).not.toContain("ultra-exclusive");
      expect(src).not.toContain("exclusivity");
    }
  });

  it("keeps market snapshot H2s unique across village files", () => {
    const headings: string[] = [];
    for (const slug of villages) {
      const src = readFileSync(
        join(process.cwd(), "app/neighborhoods", slug, "page.tsx"),
        "utf8"
      );
      const match = src.match(
        /data-market-snapshot="[^"]+"[\s\S]*?<h2[^>]*>\s*([^<]+)/
      );
      expect(match).toBeTruthy();
      headings.push(match![1].trim());
    }
    expect(new Set(headings).size).toBe(headings.length);
  });
});
