import { describe, expect, it } from "vitest";
import { uniqueInteriors } from "@/lib/unique-interiors";

const forbidden = [
  "safe neighborhood",
  "good schools",
  "family-friendly",
  "established community",
];

describe("uniqueInteriors", () => {
  const paths = Object.keys(uniqueInteriors);

  it("covers every App Router interior path", () => {
    expect(paths.length).toBeGreaterThanOrEqual(45);
    expect(uniqueInteriors["/"]).toBeDefined();
    expect(uniqueInteriors["/google-business"]).toBeDefined();
    expect(uniqueInteriors["/listings"]).toBeDefined();
  });

  it("keeps H2 copy unique per path", () => {
    const headings = paths.map((path) => uniqueInteriors[path].h2);
    expect(new Set(headings).size).toBe(headings.length);
  });

  it("avoids Fair Housing proxy phrases", () => {
    const blob = JSON.stringify(uniqueInteriors).toLowerCase();
    for (const phrase of forbidden) {
      expect(blob).not.toContain(phrase);
    }
  });
});
