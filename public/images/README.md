# Image Assets Guide

## Folder Structure

```
images/
├── hero/           # Homepage hero backgrounds
├── agent/          # Dr. Jan Duffy photos
├── properties/     # Listing photos
├── neighborhoods/  # Area/community photos
├── testimonials/   # Client headshots
└── logos/          # Brand assets
```

## Recommended Specifications

| Folder | Size | Format | Notes |
|--------|------|--------|-------|
| hero/ | 1920x1080+ | WebP, JPG | 16:9 ratio, compress <200KB |
| agent/ | 400x400+ | WebP, JPG | Square, professional headshot |
| properties/ | 1200x800+ | WebP, JPG | Landscape, MLS-quality |
| neighborhoods/ | 1200x800+ | WebP, JPG | Scenic community shots |
| testimonials/ | 200x200 | WebP, JPG | Square, optional |
| logos/ | Various | PNG, SVG | Transparent background |

## Naming Conventions

- Use lowercase with hyphens: `summerlin-aerial.webp`
- Be descriptive: `dr-jan-duffy-headshot.jpg`
- Include size if multiple: `hero-desktop.webp`, `hero-mobile.webp`

## Image Optimization

Before uploading, optimize images:

1. **Online tools**: [Squoosh](https://squoosh.app), [TinyPNG](https://tinypng.com)
2. **CLI**: `npx @squoosh/cli --webp '{"quality":80}' image.jpg`
3. **Target**: <200KB for hero, <100KB for thumbnails

## Cloudflare Images (primary) + Git (backup)

Originals in this folder are the git backup. Production heading stills request
Cloudflare hosted Images first, then this folder if delivery 404s.

Account hash (public, in every delivery URL): `byE6BTe9lNqo21V57n4aPQ`

Delivery (hosted Images, Apr 2026 docs):

`https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/<git-path>/public`

Custom ID = path under `public/` (example: `images/hero/las-vegas-valley-homes.jpg`).

1. Set GitHub secret `CLOUDFLARE_API_TOKEN` (Images edit). Account ID
   `2cc579c1ec9e426ed585e933ebf4753b` is already the sync-script default.
2. Run `pnpm cloudflare:sync-images` or the **Cloudflare Images Sync** workflow.
3. Leave Vercel DNS gray-cloud. Do not deploy Workers on `heyberkshire.com/*`.
4. `NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED=false` forces git-only stills.
5. Optional R2: `NEXT_PUBLIC_MEDIA_CDN=https://images.heyberkshire.com`

`lib/media.ts` and `HeadingPhoto` map each route’s H1/H2/H3 to a heading-appropriate
photo. Cloudflare Images is primary; git copies in this folder are the backup.

```tsx
import Image from 'next/image'

<Image 
  src="/images/hero/las-vegas-skyline.webp"
  alt="Las Vegas skyline at sunset"
  width={1920}
  height={1080}
  priority // for above-fold images
/>
```

## Notes

- Next.js auto-optimizes images via `next/image`
- WebP preferred for web (30% smaller than JPEG)
- Always include descriptive alt text for SEO/accessibility
