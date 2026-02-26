---
name: notion-tech-stack
description: When using Notion (create task, create page, search, database-query, spec-to-implementation, tasks-build, tasks-plan, knowledge-capture, or meeting-intelligence), apply this project's tech stack and conventions so tasks, databases, and docs stay aligned with Next.js 15, RealScout, FUB, real estate domain, Categories (SEO Strategy, Content, etc.), We Do services, GEO/AEO/LLMO/AIO, and Social Media.
user-invocable: false
---

# Notion + Tech Stack

When creating or updating Notion tasks, pages, databases, or docs in this workspace, use the stack and conventions below so everything stays consistent and actionable.

## Tech stack (reference)

| Layer | Stack |
|-------|--------|
| **Framework** | Next.js 15 App Router, React 19, TypeScript |
| **UI** | Tailwind CSS, shadcn/ui |
| **Deploy** | Vercel (primary), Cloudflare (optional) |
| **Tools / Platforms** | Cursor (IDE, MCP, rules), GitHub (repos, Actions, CI/CD), Cloudflare (CDN, Workers, Pages, DNS), Vercel (deploy, previews, serverless) |
| **Integrations** | RealScout (MLS/widgets), Follow Up Boss (FUB) CRM |
| **Domain** | Real estate; Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties; Henderson/Las Vegas; 135+ domains |
| **Code quality** | Biome (lint/format), strict TypeScript |

Use this when naming tasks, tagging work, or writing Notion content so the agent and team know the context.

## Cursor · GitHub · Cloudflare · Vercel

When tasks or content involve these tools or platforms, tag accordingly. Use for database property **Tool** or **Platform** (or add to **Stack**).

| Platform | Use for |
|----------|--------|
| **Cursor** | IDE workflow, MCP servers, rules, skills, Notion plugin. |
| **GitHub** | Repos, Actions, CI/CD, branch strategy, issues, PRs. |
| **Cloudflare** | CDN, Workers, Pages, DNS (gray cloud with Vercel; no orange proxy to avoid SSL conflicts). |
| **Vercel** | Deploy, preview URLs, serverless, env vars; prefer `vercel build` for production. |

**Optional task prefixes:** `[cursor]`, `[github]`, `[cloudflare]`, `[vercel]`. See `reference.md` for the full list.

## We Do (service areas)

When creating tasks or pages, tag by **service area** when relevant. Use for Project/Service database properties or in task descriptions.

| Service | Description |
|--------|-------------|
| **SEO** | Increase search rankings for higher conversions. |
| **SEM/PPC** | Targeted traffic, improved visibility, measurable results. |
| **Link Building Services** | Get backlinks from trusted websites to boost your ranking. |
| **AI Search Engine Optimization** | Get discovered in AI search results and turn visibility into growth. |
| **Web Design & Creative** | Creative visuals to enhance your brand identity. |
| **A/B Testing Services** | Data-driven experiments, higher conversions, smarter decisions. |
| **HubSpot Implementation** | Leverage an efficient customer platform and boost revenue. |
| **Content** | Creating content that attracts, engages, converts. |

**Optional task prefixes** (use with tech tags when the work maps to a service): `[seo]`, `[sem]`, `[links]`, `[ai-seo]`, `[design]`, `[ab-test]`, `[hubspot]`, `[content]`. See `reference.md` for the full We Do list.

## Categories

Use for tagging tasks or pages by work type. Use for database property **Category** (or **Categories**).

| Category |
|----------|
| **SEO Strategy** · **SEO** · **Paid Media** · **PPC** · **Local Search** · **Link Building** · **Generative AI** · **Digital Strategy** · **Digital Marketing** · **Content Strategy** · **Content Creation** · **Content** |

**Optional task prefixes:** `[seo-strategy]`, `[seo]`, `[paid-media]`, `[ppc]`, `[local-search]`, `[link-building]`, `[generative-ai]`, `[digital-strategy]`, `[digital-marketing]`, `[content-strategy]`, `[content-creation]`, `[content]`. See `reference.md` for the full list.

## GEO / AEO / LLMO / AIO (optimization disciplines)

Use these when tasks or content focus on AI and generative discovery. Tag tasks or set database properties accordingly.

| Acronym | Full name | Use for |
|---------|-----------|--------|
| **GEO** | Generative Engine Optimization | Optimizing for generative search / AI-generated answers (e.g. SGE, Perplexity, ChatGPT search). |
| **AEO** | Answer Engine Optimization | Optimizing for answer engines and featured snippets; direct answers, FAQs, structured data. |
| **LLMO** | Large Language Model Optimization | Optimizing content and signals so LLMs cite, summarize, or recommend your brand. |
| **AIO** | Artificial Intelligence Optimization | Broad AI visibility: discoverability across AI assistants, chatbots, and AI-powered search. |

**Optional task prefixes:** `[geo]`, `[aeo]`, `[llmo]`, `[aio]`. See `reference.md` for the full list.

## Social Media

When tasks or content involve social channels, tag by **category** and/or **platform**. Use for database properties (e.g. **Social category**, **Platform**).

**Categories**

| Category | Use for |
|----------|--------|
| **All Social Media** | Cross-channel work, multi-platform campaigns. |
| **Social Media News** | News, updates, trends, algorithm or policy changes. |
| **Social Strategy** | Strategy, planning, calendars, audience, goals. |
| **Social Media Advertising** | Paid social, ads, targeting, creative, reporting. |

**Platforms**

| Platform |
|----------|
| **Bluesky** · **Facebook** · **Instagram** · **LinkedIn** · **TikTok** · **Twitter** · **YouTube** · **Reddit** |

**Optional task prefixes:** Category — `[social]`, `[social-news]`, `[social-strategy]`, `[social-ads]`. Platform — `[bluesky]`, `[facebook]`, `[instagram]`, `[linkedin]`, `[tiktok]`, `[twitter]`, `[youtube]`, `[reddit]`. See `reference.md` for the full list.

## Task naming and tags

- **Prefix by area** when creating tasks so they’re easy to filter:
  - `[next]` — Next.js / App Router / React
  - `[seo]` — SEO, metadata, sitemap, JSON-LD
  - `[geo]` — Generative Engine Optimization
  - `[aeo]` — Answer Engine Optimization
  - `[llmo]` — Large Language Model Optimization
  - `[aio]` — Artificial Intelligence Optimization
  - `[gbp]` — Google Business Profile, NAP, local SEO
  - `[social]` — All Social Media
  - `[social-news]` — Social Media News
  - `[social-strategy]` — Social Strategy
  - `[social-ads]` — Social Media Advertising
  - `[bluesky]` `[facebook]` `[instagram]` `[linkedin]` `[tiktok]` `[twitter]` `[youtube]` `[reddit]` — by platform
  - `[seo-strategy]` `[seo]` `[paid-media]` `[ppc]` `[local-search]` `[link-building]` `[generative-ai]` `[digital-strategy]` `[digital-marketing]` `[content-strategy]` `[content-creation]` `[content]` — by category
  - `[fub]` — Follow Up Boss API or automation
  - `[realscout]` — RealScout widgets or integration
  - `[api]` — API routes, Server Actions, webhooks
  - `[ui]` — UI, Tailwind, shadcn, accessibility
  - `[perf]` — Performance, Core Web Vitals, caching
  - `[csp]` — CSP, security headers, img-src/script-src
  - `[idx]` — IDX/MLS, listing attribution, disclaimers
  - `[deploy]` — Vercel, Cloudflare, build
  - `[cursor]` — Cursor IDE, MCP, rules, skills
  - `[github]` — GitHub, Actions, CI/CD, repos
  - `[cloudflare]` — Cloudflare CDN, Workers, Pages, DNS
  - `[vercel]` — Vercel deploy, previews, serverless
- **Keep titles short and actionable**: e.g. `[next] Add generateMetadata to /neighborhoods/[slug]` not a long sentence.
- **Default tasks database**: Prefer **My tasks** (Notion database; use when user says “my tasks” or doesn’t specify). See `reference.md` for DB identifier if needed.

## Acceptance criteria (templates)

For **spec-to-implementation** or **tasks-build**, use the checklist templates in **`acceptance-criteria.md`** in this skill folder when they apply:

- New page/route → `[next]` template
- API / Server Action → `[api]` template
- SEO / metadata → `[seo]` template
- GBP / NAP → `[gbp]` template
- RealScout widget → `[realscout]` template
- FUB integration → `[fub]` template
- IDX/MLS → `[idx]` template
- Performance → `[perf]` template
- CSP / security → `[csp]` template
- GEO / AI visibility or content → `acceptance-criteria.md` (GEO/Content section)

Paste or adapt the bullets into the task body or a “Criteria” property so implementation can be checked off.

## Database properties to suggest

When creating database rows or suggesting schema:

- **Project / Area**: single-select or multi-select — e.g. `heyberkshire`, `searchforhomesinhenderson`, `RealScout`, `FUB`.
- **Service (We Do)**: single-select or multi-select — `SEO`, `SEM/PPC`, `Link Building`, `AI Search Engine Optimization`, `Web Design & Creative`, `A/B Testing`, `HubSpot Implementation`, `Content`.
- **Category** (or **Categories**): single-select or multi-select — `SEO Strategy`, `SEO`, `Paid Media`, `PPC`, `Local Search`, `Link Building`, `Generative AI`, `Digital Strategy`, `Digital Marketing`, `Content Strategy`, `Content Creation`, `Content`.
- **Optimization (GEO/AEO/LLMO/AIO)**: single-select or multi-select — `GEO`, `AEO`, `LLMO`, `AIO` (see definitions above).
- **Social category**: single-select or multi-select — `All Social Media`, `Social Media News`, `Social Strategy`, `Social Media Advertising`.
- **Platform**: single-select or multi-select — `Bluesky`, `Facebook`, `Instagram`, `LinkedIn`, `TikTok`, `Twitter`, `YouTube`, `Reddit`.
- **Stack**: multi-select — `Next.js`, `TypeScript`, `Tailwind`, `RealScout`, `FUB`, `Vercel`, `Cloudflare`.
- **Tool / Platform**: single-select or multi-select — `Cursor`, `GitHub`, `Cloudflare`, `Vercel` (when task is about that tool).
- **Priority**: use if the DB has it; otherwise mention in description.
- **Status**: match existing DB (e.g. Not started, In progress, Done).

## Create task / create page

- **create-task**: Use the conventions above for title and, if the tool supports it, set or suggest Project/Stack, **Service (We Do)**, **Category** when it fits, and **Social category** / **Platform** when social work. Default to the user’s main tasks database when they said “my tasks” or similar.
- **create-page**: For meeting notes or project pages, include a short “Stack / context” line (e.g. Next.js 15, RealScout, FUB) and **We Do** service area when relevant (SEO, Content, HubSpot, etc.). Add **Category** when relevant. For social work, add **Social category** and **Platform**. Link to relevant code paths (`src/app/`, `src/services/`, `src/components/`) when relevant.

## Spec-to-implementation

- When turning a spec into Notion tasks:
  - Break work into **implementation steps** that map to this codebase: `src/app/`, `src/components/`, `src/services/`, `src/lib/`, config (`next.config.js`, etc.).
  - Tag tasks with stack and area (`[next]`, `[seo]`, etc.) and **Category** when it fits (e.g. SEO Strategy, Content, Generative AI).
  - Add **acceptance criteria** using the templates in `acceptance-criteria.md` when they fit (new page, API, SEO, widget, FUB, IDX, GBP, perf, GEO/content). Otherwise reference the stack (e.g. “Uses Next.js 15 `generateMetadata`”, “RealScout script loaded once in root layout”, “FUB via existing `fubApiService`”).

## Tasks-build (implement from a Notion task)

- Before coding:
  - **Resolve scope**: Identify which app (e.g. heyberkshire vs searchforhomesinhenderson) and which parts of the stack (Next.js, RealScout, FUB).
  - **Follow project rules**: No duplicate platform features (use native RealScout↔FUB integration where it exists); research-first; current Next.js 15 / React 19 patterns; GBP/NAP and IDX compliance where applicable.
- **Implementation**:
  - Use **App Router** patterns only (no `pages/`, no `getStaticProps`/`getServerSideProps`).
  - Prefer **Server Components**; add `'use client'` only when needed.
  - Use **services** in `src/services/` for external APIs (RealScout, FUB); do not call those APIs directly from components.
  - Use **Biome** for lint/format (no ESLint/Prettier in this project).
- After implementation: Update the Notion task status and, if useful, add a short comment or property noting what was done (e.g. “Done: added `generateMetadata` and JSON-LD to page”).

## Knowledge capture

- When capturing conversation or decisions into Notion:
  - Include **stack context** (Next.js 15, RealScout, FUB, Vercel, etc.) and **We Do** service area (SEO, Content, HubSpot, etc.) when relevant. Add **Category** (e.g. SEO Strategy, Content, Generative AI) when relevant. For social work, note **Social category** and **Platform**.
  - Link to **code locations** (file paths, route paths) when discussing implementation.
  - For real estate–specific decisions, note **agent/brand** (Dr. Jan Duffy, Berkshire Hathaway, NAP/GBP) and **compliance** (IDX/MLS disclaimer, fair housing) if relevant.

## Search and find

- When the user asks to search or find in Notion:
  - Prefer **notion-search** for semantic queries (e.g. “tasks about RealScout”, “FUB automation”).
  - Use **notion-fetch** when you need full page or database content after search.
  - If they mention “My tasks” or a known DB name, use that to scope results or create-task target. If they ask by **Category** or **Service (We Do)** (e.g. "SEO tasks", "Content work"), include that in the query or filter context.

## Don’t

- Don’t create tasks that duplicate platform features (e.g. custom RealScout↔FUB sync when native integration exists); align with `.cursor/rules/no-duplicate-features.mdc` and `check-platform-features-first.mdc`.
- Don’t use Pages Router patterns or outdated Next.js patterns in task descriptions or acceptance criteria.
- Don’t put secrets or API keys in Notion page content; reference “use env / config” instead.
