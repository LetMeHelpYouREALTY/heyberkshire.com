import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { getFubApiKey, getFubSystemKey } from "@/lib/fub/client";

describe("Follow Up Boss env helpers", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = { ...originalEnv };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("uses FOLLOW_UP_BOSS_API_KEY before FUB_API_KEY", () => {
    process.env.FOLLOW_UP_BOSS_API_KEY = " primary-key ";
    process.env.FUB_API_KEY = "legacy-key";
    expect(getFubApiKey()).toBe("primary-key");
  });

  it("falls back to FUB_API_KEY when FOLLOW_UP_BOSS_API_KEY is unset", () => {
    delete process.env.FOLLOW_UP_BOSS_API_KEY;
    process.env.FUB_API_KEY = "legacy-key";
    expect(getFubApiKey()).toBe("legacy-key");
  });

  it("returns undefined when no API key is configured", () => {
    delete process.env.FOLLOW_UP_BOSS_API_KEY;
    delete process.env.FUB_API_KEY;
    expect(getFubApiKey()).toBeUndefined();
  });

  it("trims FUB_SYSTEM_KEY and omits when empty", () => {
    process.env.FUB_SYSTEM_KEY = "  sys-key  ";
    expect(getFubSystemKey()).toBe("sys-key");
    process.env.FUB_SYSTEM_KEY = "   ";
    expect(getFubSystemKey()).toBeUndefined();
  });
});
