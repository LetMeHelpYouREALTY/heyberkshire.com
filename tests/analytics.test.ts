import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { getMeasurementId, parseMeasurementIds } from "@/lib/analytics";

describe("GA4 measurement IDs", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("maps normalized hosts to IDs and skips malformed pairs", () => {
    expect(
      parseMeasurementIds(
        " www.HeyBerkshire.com = G-ABC123 , drjanduffy.com=UA-1, bad, =G-X",
      ),
    ).toEqual({ "heyberkshire.com": "G-ABC123" });
  });

  it("matches www and port variants of a host", () => {
    process.env.GA_MEASUREMENT_IDS = "heyberkshire.com=G-ABC123";
    expect(getMeasurementId("www.heyberkshire.com:443")).toBe("G-ABC123");
  });

  it("returns undefined for hosts without an ID, so no tag loads", () => {
    process.env.GA_MEASUREMENT_IDS = "heyberkshire.com=G-ABC123";
    expect(getMeasurementId("aliantehomesforsale.com")).toBeUndefined();
    delete process.env.GA_MEASUREMENT_IDS;
    expect(getMeasurementId("heyberkshire.com")).toBeUndefined();
  });
});
