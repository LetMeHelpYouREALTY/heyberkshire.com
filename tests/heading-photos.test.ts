import { describe, expect, it } from "vitest";
import { h2PhotoForPath, h3PhotoForPath, photoForPath } from "@/lib/media";
import { uniqueInteriors } from "@/lib/unique-interiors";

describe("heading photos", () => {
  const paths = Object.keys(uniqueInteriors);

  it("keeps H1, H2, and H3 stills distinct on every interior path", () => {
    const collisions: string[] = [];
    for (const path of paths) {
      const h1 = photoForPath(path).src;
      const h2 = h2PhotoForPath(path).src;
      const h3 = h3PhotoForPath(path).src;
      if (h1 === h2 || h1 === h3 || h2 === h3) {
        collisions.push(`${path}: H1=${h1} H2=${h2} H3=${h3}`);
      }
    }
    expect(collisions).toEqual([]);
  });
});
