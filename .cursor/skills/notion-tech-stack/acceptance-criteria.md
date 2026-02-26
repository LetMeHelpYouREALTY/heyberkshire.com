# Acceptance criteria templates

Use these when writing spec-to-implementation tasks or tasks-build acceptance criteria. Copy and adapt to the task.

---

## New page / route `[next]`

- [ ] Route lives under `src/app/` (App Router); no `pages/` usage.
- [ ] Uses Server Component by default; `'use client'` only if needed (hooks, browser APIs).
- [ ] If dynamic: `params` / `searchParams` awaited (Next.js 15); `generateStaticParams` if static.
- [ ] Layout and loading/error boundaries considered (`layout.tsx`, `loading.tsx`, `error.tsx`).

---

## API route / Server Action `[api]`

- [ ] Handler in `src/app/api/.../route.ts` or Server Action with `'use server'`.
- [ ] No secrets in client; env vars only on server.
- [ ] Validation on input; typed request/response.
- [ ] Errors return appropriate status (400, 401, 500) and message.

---

## SEO / metadata `[seo]`

- [ ] Page has `metadata` export or `generateMetadata` (Next.js 15).
- [ ] Title and description unique and relevant to route/content.
- [ ] JSON-LD where applicable (LocalBusiness, RealEstateListing, FAQ, etc.).
- [ ] Sitemap/robots considered if new route affects discovery.

---

## Google Business Profile / NAP `[gbp]`

- [ ] NAP (name, address, phone) matches GBP exactly in visible text and LocalBusiness schema.
- [ ] LocalBusiness JSON-LD on page; hours/attributes aligned with GBP.
- [ ] Call / Directions / Reviews CTAs where appropriate; map embed if applicable.

---

## RealScout widget `[realscout]`

- [ ] Script loaded once in root layout (`<Script>`); not in multiple components.
- [ ] CSP allows both `em.realscout.com` (script) and `www.realscout.com` (connect).
- [ ] Widget uses `dangerouslySetInnerHTML` pattern per project rule; no duplicate script load.
- [ ] No custom state-driven widget render that re-executes script.

---

## Follow Up Boss (FUB) `[fub]`

- [ ] All FUB access via `src/services/` (e.g. `fubApiService`); no direct API calls from components.
- [ ] No custom sync or dedup logic that duplicates native RealScout↔FUB integration.
- [ ] Rate limiting / caching considered if adding new API usage.
- [ ] Secrets in env only; not in client bundle.

---

## IDX / MLS compliance `[idx]`

- [ ] MLS disclaimer and listing attribution displayed where required.
- [ ] No changes to `/components/idx/*` without explicit approval (per project rule).
- [ ] Listing data sourced and attributed per MLS/IDX terms.

---

## Performance `[perf]`

- [ ] Images use `next/image`; remote domains in `next.config.js` images config.
- [ ] Heavy or client-only UI lazy-loaded (e.g. `dynamic(..., { ssr: false })` where appropriate).
- [ ] No unnecessary client JS for above-the-fold static content.
- [ ] Core Web Vitals considered (LCP, CLS, INP).

---

## Security / CSP `[csp]`

- [ ] New external script or connect origin added to CSP (script-src, connect-src, img-src) in `next.config.js` (or headers config).
- [ ] No inline scripts without necessity; if used, consider nonce/hash per project policy.
- [ ] Third-party media domains (e.g. feeds, Notion avatars) in `img-src` if images are displayed.

---

## GEO / AI visibility `[geo]` `[aeo]` `[llmo]` `[aio]`

- [ ] Content and structure support generative / answer engine discovery (clear answers, FAQs, structured data).
- [ ] JSON-LD and semantic markup where applicable for AI citation.
- [ ] No blocking of AI crawlers unless required by policy; consider robots/meta for discovery.

---

## Content `[content]`

- [ ] Purpose and audience clear; fits Category (e.g. Content Strategy, Content Creation).
- [ ] SEO and GEO considerations applied where relevant (metadata, headings, structure).
- [ ] Links and CTAs aligned with We Do / project goals.
