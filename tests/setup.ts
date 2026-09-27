import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { createElement } from "react";
import { afterEach, vi } from "vitest";

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock Next.js router
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
    pathname: "/",
    query: {},
    asPath: "/",
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));

// Mock Next.js Image component (no JSX in .ts setup files)
vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => {
    return createElement("img", props);
  },
}));

// Mock environment variables
process.env.NEXT_PUBLIC_SENTRY_DSN = "https://test@test.ingest.sentry.io/test";
