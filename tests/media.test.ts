import { afterEach, describe, expect, it } from "vitest";
import {
  CLOUDFLARE_IMAGES_ACCOUNT_HASH,
  cloudflareImageId,
  gitBackupUrl,
  isCloudflareImagesEnabled,
  mediaUrl,
} from "@/lib/media";

const src = "/images/hero/las-vegas-valley-homes.jpg";

describe("Cloudflare Images media URLs", () => {
  afterEach(() => {
    delete process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED;
    delete process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH;
    delete process.env.NEXT_PUBLIC_MEDIA_CDN;
  });

  it("uses the git path as the hosted custom ID", () => {
    expect(cloudflareImageId(src)).toBe("images/hero/las-vegas-valley-homes.jpg");
    expect(gitBackupUrl(src)).toBe(src);
  });

  it("serves hosted Images as the primary URL with the public variant", () => {
    expect(isCloudflareImagesEnabled()).toBe(true);
    expect(mediaUrl(src)).toBe(
      `https://imagedelivery.net/${CLOUDFLARE_IMAGES_ACCOUNT_HASH}/images/hero/las-vegas-valley-homes.jpg/public`
    );
  });

  it("falls back to git stills when Images is disabled", () => {
    process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED = "false";
    expect(isCloudflareImagesEnabled()).toBe(false);
    expect(mediaUrl(src)).toBe(src);
  });

  it("lets an R2 custom domain override Images", () => {
    process.env.NEXT_PUBLIC_MEDIA_CDN = "https://images.heyberkshire.com/";
    expect(mediaUrl(src)).toBe(
      "https://images.heyberkshire.com/images/hero/las-vegas-valley-homes.jpg"
    );
  });
});
