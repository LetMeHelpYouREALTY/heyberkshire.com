import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { getMeasurementIds, parseMeasurementIds } from "@/lib/analytics";

describe("GA4 measurement IDs", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
    delete process.env.GA_MEASUREMENT_IDS;
    delete process.env.GA_ROLLUP_MEASUREMENT_ID;
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("maps normalized hosts to IDs and skips malformed or placeholder pairs", () => {
    expect(
      parseMeasurementIds(
        " www.HeyBerkshire.com = G-ABC123 , drjanduffy.com=UA-1, bad, =G-X, aliantehomesforsale.com=G-XXXXXXXXXX",
      ),
    ).toEqual({ "heyberkshire.com": "G-ABC123" });
  });

  it("matches www and port variants of a host", () => {
    process.env.GA_MEASUREMENT_IDS = "heyberkshire.com=G-ABC123";
    expect(getMeasurementIds("www.heyberkshire.com:443")).toEqual(["G-ABC123"]);
  });

  it("returns no IDs for hosts without one, so no tag loads", () => {
    process.env.GA_MEASUREMENT_IDS = "heyberkshire.com=G-ABC123";
    expect(getMeasurementIds("aliantehomesforsale.com")).toEqual([]);
    expect(getMeasurementIds("")).toEqual([]);
  });

  it("adds the rollup ID for portfolio hosts but not previews", () => {
    process.env.GA_MEASUREMENT_IDS = "heyberkshire.com=G-ABC123";
    process.env.GA_ROLLUP_MEASUREMENT_ID = "G-ROLLUP1";
    expect(getMeasurementIds("heyberkshire.com")).toEqual([
      "G-ABC123",
      "G-ROLLUP1",
    ]);
    expect(getMeasurementIds("aliantehomesforsale.com")).toEqual(["G-ROLLUP1"]);
    expect(getMeasurementIds("my-branch.vercel.app")).toEqual([]);
  });
});
