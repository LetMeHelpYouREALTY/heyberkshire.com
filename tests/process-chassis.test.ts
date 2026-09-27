import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const pages: { file: string; needles: string[]; banned: string[] }[] = [
  {
    file: "app/buyers/page.tsx",
    needles: ['<ProcessSteps path="/buyers" />'],
    banned: [
      ">The Home Buying Process in Las Vegas<",
      "Get Pre-Approved for Financing",
      "match your lifestyle",
    ],
  },
  {
    file: "app/listings/page.tsx",
    needles: ['<ProcessSteps path="/listings" />'],
    banned: [
      ">How to Use This Live MLS Search<",
      "Get Pre-Approved for Financing",
      "match your lifestyle",
    ],
  },
  {
    file: "app/services/page.tsx",
    needles: [
      '<ProcessSteps path="/services" />',
      '<ProcessSteps path="/services" slot={1} />',
    ],
    banned: [
      ">The Berkshire Hathaway HomeServices Difference<",
      ">How Our Real Estate Services Work<",
      ">Free Consultation<",
      ">Global Network<",
    ],
  },
  {
    file: "app/why-berkshire-hathaway/page.tsx",
    needles: ['<ProcessSteps path="/why-berkshire-hathaway" />'],
    banned: [
      ">The BHHS Advantage<",
      ">Unmatched Trust<",
      ">Most Trusted Brand<",
      ">Experience the Berkshire Hathaway Difference<",
    ],
  },
  {
    file: "app/contact/page.tsx",
    needles: ['<ProcessSteps path="/contact" />'],
    banned: [
      ">Why Contact Berkshire Hathaway HomeServices?<",
      "Trusted Brand:",
      ">Areas We Serve<",
    ],
  },
  {
    file: "app/luxury-homes/page.tsx",
    needles: ['<ProcessSteps path="/luxury-homes" />'],
    banned: [
      ">Why Choose Berkshire Hathaway for Luxury Real Estate<",
      "White Glove",
      ">Premier Las Vegas Luxury Communities<",
    ],
  },
];

describe("process chassis replacements", () => {
  it("replaces Trusted Brand and copied process-step interiors", () => {
    for (const page of pages) {
      const src = readFileSync(join(process.cwd(), page.file), "utf8");
      for (const needle of page.needles) {
        expect(src).toContain(needle);
      }
      for (const banned of page.banned) {
        expect(src).not.toContain(banned);
      }
    }
  });
});
