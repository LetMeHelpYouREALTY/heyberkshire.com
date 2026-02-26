# Stack reference for Notion

Quick copy-paste reference when creating tasks or tagging in Notion.

## Default tasks database

- **Name:** My tasks
- **Use when:** User says “my tasks” or doesn’t specify a database.
- **URL:** https://www.notion.so/d79cd9675e1c4c04922ff3e2d8c707eb (ID: `d79cd967-5e1c-4c04-922f-f3e2d8c707eb`)

## We Do (service areas — for DB property “Service” or “We Do”)

- **SEO** — Increase search rankings for higher conversions.
- **SEM/PPC** — Targeted traffic, improved visibility, measurable results.
- **Link Building Services** — Get backlinks from trusted websites to boost your ranking.
- **AI Search Engine Optimization** — Get discovered in AI search results and turn visibility into growth.
- **Web Design & Creative** — Creative visuals to enhance your brand identity.
- **A/B Testing Services** — Data-driven experiments, higher conversions, smarter decisions.
- **HubSpot Implementation** — Leverage an efficient customer platform and boost revenue.
- **Content** — Creating content that attracts, engages, converts.

**Service tags (optional task prefixes):** `[seo]` `[sem]` `[links]` `[ai-seo]` `[design]` `[ab-test]` `[hubspot]` `[content]`

## Categories (for DB property “Category” or “Categories”)

SEO Strategy · SEO · Paid Media · PPC · Local Search · Link Building · Generative AI · Digital Strategy · Digital Marketing · Content Strategy · Content Creation · Content

**Category tags (optional task prefixes):** `[seo-strategy]` `[seo]` `[paid-media]` `[ppc]` `[local-search]` `[link-building]` `[generative-ai]` `[digital-strategy]` `[digital-marketing]` `[content-strategy]` `[content-creation]` `[content]`

## GEO / AEO / LLMO / AIO (optimization disciplines)

- **GEO** — Generative Engine Optimization. Optimizing for generative search / AI-generated answers.
- **AEO** — Answer Engine Optimization. Optimizing for answer engines and featured snippets.
- **LLMO** — Large Language Model Optimization. Optimizing so LLMs cite, summarize, or recommend your brand.
- **AIO** — Artificial Intelligence Optimization. Broad AI visibility across assistants, chatbots, AI search.

**Optimization tags (optional task prefixes):** `[geo]` `[aeo]` `[llmo]` `[aio]`

## Social Media

**Categories (for DB property “Social category”):** All Social Media · Social Media News · Social Strategy · Social Media Advertising

**Platforms (for DB property “Platform”):** Bluesky · Facebook · Instagram · LinkedIn · TikTok · Twitter · YouTube · Reddit

**Category tags:** `[social]` `[social-news]` `[social-strategy]` `[social-ads]`  
**Platform tags:** `[bluesky]` `[facebook]` `[instagram]` `[linkedin]` `[tiktok]` `[twitter]` `[youtube]` `[reddit]`

## Stack tags (for task titles or DB properties)

- `[next]` — Next.js 15, App Router, React 19
- `[seo]` — SEO, metadata, sitemap, JSON-LD
- `[geo]` — Generative Engine Optimization
- `[aeo]` — Answer Engine Optimization
- `[llmo]` — Large Language Model Optimization
- `[aio]` — Artificial Intelligence Optimization
- `[gbp]` — Google Business Profile, NAP, local SEO
- `[social]` — All Social Media | `[social-news]` `[social-strategy]` `[social-ads]` — Social categories
- `[bluesky]` `[facebook]` `[instagram]` `[linkedin]` `[tiktok]` `[twitter]` `[youtube]` `[reddit]` — Platforms
- `[fub]` — Follow Up Boss
- `[realscout]` — RealScout
- `[api]` — API routes, Server Actions, webhooks
- `[ui]` — UI, Tailwind, shadcn, a11y
- `[perf]` — Performance, Core Web Vitals
- `[csp]` — CSP, security headers
- `[idx]` — IDX/MLS, listing attribution
- `[deploy]` — Vercel, Cloudflare
- `[cursor]` — Cursor (IDE, MCP, rules, skills)
- `[github]` — GitHub (repos, Actions, CI/CD)
- `[cloudflare]` — Cloudflare (CDN, Workers, Pages, DNS)
- `[vercel]` — Vercel (deploy, previews, serverless)

## Cursor · GitHub · Cloudflare · Vercel (for DB property "Tool" or "Platform")

- **Cursor** — IDE workflow, MCP, rules, skills, Notion plugin.
- **GitHub** — Repos, Actions, CI/CD, issues, PRs.
- **Cloudflare** — CDN, Workers, Pages, DNS; use DNS-only (gray cloud) with Vercel.
- **Vercel** — Deploy, previews, serverless; prefer `vercel build` for production.

**Tool/Platform tags:** `[cursor]` `[github]` `[cloudflare]` `[vercel]`

## Code paths (this repo)

- `src/app/` — App Router routes and pages
- `src/components/` — React components
- `src/services/` — RealScout, FUB, market insights, etc.
- `src/lib/` — Utilities, API clients
- `next.config.js` / `next.config.*.js` — Build and image config

## Key rules (cursor rules)

- No duplicate platform features (use native integrations)
- Research-first; check platform docs before building
- Next.js 15 + React 19 patterns only
- GBP/NAP and IDX compliance for real estate pages
