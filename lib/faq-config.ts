/**
 * Domain-aware FAQ sets for Dr. Jan Duffy's real estate network.
 * Keyed by DomainConfig.pageType — each pageType gets targeted Q&A
 * that matches what real visitors on that domain are actually asking.
 */

export interface FAQ {
  question: string;
  answer: string;
}

// ─── PAGE-TYPE FAQ SETS ────────────────────────────────────────────────────

export const FAQ_BY_PAGE_TYPE: Record<string, FAQ[]> = {

  community: [
    { question: "What is the current median home price in this community?",
      answer: "Median prices shift monthly. Call/text Dr. Jan at 702-222-1964 for a live comp pull — she tracks every sale in this community and can give you a precise number within minutes." },
    { question: "How long do homes stay on the market here?",
      answer: "Well-priced homes in master-planned Las Vegas communities typically sell in 14–28 days. Overpriced listings can sit for 60+ days. Dr. Jan's insider knowledge of days-on-market data helps buyers spot value and sellers price right the first time." },
    { question: "Are there HOA fees in this community?",
      answer: "Most Las Vegas master-planned communities have HOA fees ranging from $50–$350/month depending on amenities. Dr. Jan will give you the exact HOA amount, what it covers, and any special assessments before you make an offer." },
    { question: "What new construction options are available?",
      answer: "Builder availability changes weekly. Dr. Jan works directly with on-site sales teams at all major builders — Toll Brothers, Lennar, Century, KB Home — and can alert you to new lots, spec homes, and builder incentives before they're publicly listed." },
    { question: "Can I use a buyer's agent for new construction?",
      answer: "Yes — and you should. Builder representation is free to buyers (the builder pays the commission), but an independent agent like Dr. Jan negotiates upgrades, closing costs, and contract terms that on-site sales reps won't offer on their own." },
    { question: "What schools serve this community?",
      answer: "School assignments are based on your specific address. Dr. Jan can provide the exact school district information for any home you're considering in this community." },
  ],

  luxury: [
    { question: "What defines 'luxury' in the Las Vegas real estate market?",
      answer: "In Las Vegas, luxury typically starts at $1M+ with guard-gated access, premium finishes, and resort-style amenities. The top tier — $3M+ — includes custom builds, golf-front lots, and Strip view penthouses. Dr. Jan specializes in all tiers and knows which listings offer true value vs. inflated pricing." },
    { question: "Are luxury homes in Las Vegas a good investment?",
      answer: "Guard-gated communities like The Ridges and MacDonald Highlands have appreciated 40–60% over the past five years. Las Vegas luxury benefits from no state income tax, which attracts high-net-worth buyers from California, New York, and internationally — supporting long-term demand." },
    { question: "How discreet is the buying process for high-value properties?",
      answer: "Very. Dr. Jan regularly handles off-market transactions and can structure showings privately. Many luxury listings in Las Vegas never appear on the public MLS — call 702-222-1964 for confidential access." },
    { question: "What financing options exist for luxury properties?",
      answer: "Jumbo loans, portfolio lending, and cash purchases are all common in the luxury segment. Dr. Jan works with specialized luxury mortgage advisors who understand high-value transactions and can close quickly without disrupting your privacy." },
    { question: "How long do luxury homes typically take to sell?",
      answer: "Well-positioned luxury homes in Las Vegas sell in 30–90 days. Correctly priced guard-gated properties often see multiple offers. Dr. Jan's market-specific pricing strategy consistently achieves 97–102% of list price." },
    { question: "Can I tour luxury homes without committing?",
      answer: "Absolutely. Dr. Jan arranges private, no-pressure showings at your convenience. Many luxury sellers require pre-qualification before showings — she handles that process discreetly so you can tour freely." },
  ],

  "55plus": [
    { question: "What are the age requirements for 55+ communities in Las Vegas?",
      answer: "Federal law (HUD's Housing for Older Persons Act) requires that 80% of occupied units have at least one resident who is 55+. Most Las Vegas communities enforce this strictly. Dr. Jan knows the exact rules for Sun City Summerlin, Del Webb, Trilogy, and Heritage at Stonebridge." },
    { question: "What amenities do Las Vegas 55+ communities offer?",
      answer: "Top communities offer golf courses, resort pools, fitness centers, tennis and pickleball courts, social clubs, arts studios, and on-site restaurants. Sun City Summerlin has 3 golf courses and 5 recreation centers. Heritage at Stonebridge has a 27,000 sq ft clubhouse. Dr. Jan can match your lifestyle priorities to the right community." },
    { question: "Are 55+ homes more affordable than standard neighborhoods?",
      answer: "Generally yes — 55+ homes in Las Vegas range from $280K to $900K+ depending on community and size. Sun City tends to be the most affordable, while Heritage at Stonebridge and Trilogy command a premium for newer construction and amenities." },
    { question: "Can family members under 55 visit or live with me?",
      answer: "Visiting family is always welcome. Permanent residents under 55 are permitted under the 20% rule, but this varies by community. Spouses under 55 are typically allowed if the primary resident qualifies. Dr. Jan will clarify the exact rules for your target community before you purchase." },
    { question: "How is the resale market for 55+ homes?",
      answer: "Strong and growing. Baby Boomers are retiring in record numbers and Nevada's tax advantages make Las Vegas a top relocation destination. Dr. Jan has sold more Sun City Summerlin homes than any other agent and sees consistent demand — often with multiple offers on well-priced listings." },
    { question: "What's the difference between Sun City, Del Webb, and Trilogy?",
      answer: "Sun City Summerlin (built 1988–2003) is the most established — larger lots, mature landscaping, proven community culture. Del Webb communities are newer with modern floor plans. Trilogy at Sunstone is the newest, with luxury-level amenities. Dr. Jan offers a free community comparison consultation — call 702-222-1964." },
  ],

  search: [
    { question: "How current is your MLS data?",
      answer: "Dr. Jan pulls directly from the Las Vegas MLS, which updates every 15 minutes. Unlike public portals that can lag 24–72 hours, you'll see new listings, price drops, and status changes in real time when working with her directly." },
    { question: "What's the fastest way to find a home before it sells?",
      answer: "Sign up for a personalized RealScout search. Dr. Jan sets up automated alerts matched to your exact criteria — you get notified the moment a qualifying home hits the market, often before buyers using public portals even see it." },
    { question: "What is the current Las Vegas market like for buyers?",
      answer: "As of 2026, Las Vegas has about 2.1 months of inventory — a slight seller's advantage, but more balanced than the frenzy of 2021–2022. Well-priced homes under $500K still see multiple offers. Over $700K, buyers have more negotiating room. Dr. Jan adjusts strategy by price point and neighborhood." },
    { question: "Do I need a pre-approval before I start looking?",
      answer: "Not to start looking — but you'll need one before making an offer. Dr. Jan recommends getting pre-approved early so you're ready to move fast on good properties. She works with trusted local lenders who can turn pre-approvals around in 24 hours." },
    { question: "Are there homes available under $400K in Las Vegas?",
      answer: "Yes — the North Las Vegas and East Las Vegas submarkets have solid inventory under $400K. Condos and townhomes in Henderson and Summerlin also hit this price point. Dr. Jan will show you exactly what's available in your budget right now — call 702-222-1964." },
    { question: "How do I make a competitive offer in Las Vegas?",
      answer: "Strong pre-approval, clean contract terms, flexible close date, and realistic pricing. Dr. Jan's offer strategy — refined over 500+ transactions — consistently wins in competitive situations. She'll advise on escalation clauses, appraisal gaps, and seller concessions specific to each listing." },
  ],

  lifestyle: [
    { question: "Why are people moving from California to Las Vegas?",
      answer: "Three big reasons: no state income tax (saves a California family $15K–$50K+/year), home prices 30–50% lower than comparable California markets, and no capital gains tax on home sales. Las Vegas also has 300+ days of sunshine and a 20-minute commute vs. California's 60–90 minutes." },
    { question: "What Las Vegas neighborhoods are most popular with California relocators?",
      answer: "Summerlin is the #1 choice — master-planned, safe, green, and reminiscent of suburban California. Henderson's Green Valley and MacDonald Ranch are strong seconds. Both offer top-tier amenities, newer construction, and easy airport access for those still traveling back to California for work." },
    { question: "How does the buying process work if I'm relocating from out of state?",
      answer: "Dr. Jan specializes in relocation buyers. She conducts live video tours, sends detailed neighborhood comparisons, and can represent you through the entire process remotely if needed. Most relocation clients close without ever physically visiting until moving day." },
    { question: "Is Las Vegas a good place to raise a family?",
      answer: "Absolutely — especially in master-planned communities. Summerlin, Henderson, and North Las Vegas have excellent parks, rec centers, and highly-rated schools. The cost of living advantage means families can afford more space and better neighborhoods than they could in California or the Pacific Northwest." },
    { question: "What hidden costs should I know about moving to Nevada?",
      answer: "Las Vegas has relatively low property taxes (about 0.5–0.7% of assessed value) but Nevada has higher vehicle registration fees. HOA fees in master-planned communities run $50–$350/month. Dr. Jan gives every relocation client a full cost comparison worksheet before they commit." },
    { question: "How fast can I close if I find the right home?",
      answer: "Cash buyers can close in 7–10 days. Financed buyers typically close in 21–30 days. Dr. Jan's network of local title companies and lenders can expedite the process significantly — important if you have a lease ending or a job start date to hit." },
  ],

  investment: [
    { question: "What are typical cap rates for Las Vegas rental properties?",
      answer: "Single-family rentals in Las Vegas currently yield 4–6% cap rates. Multi-family and small commercial run 5–7%. Short-term rental properties near the Strip can push 8–12% but require active management. Dr. Jan runs full ROI analysis before every investment purchase — call 702-222-1964." },
    { question: "Is Las Vegas a landlord-friendly state?",
      answer: "Very. Nevada has no rent control, relatively short eviction timelines (30–45 days for non-payment), and no state income tax on rental income. This makes it significantly more favorable than California, Oregon, or New York for rental property owners." },
    { question: "What neighborhoods have the best rental demand?",
      answer: "Henderson and Summerlin command premium rents from long-term tenants. North Las Vegas offers lower entry prices with solid cash flow. Areas near UNLV, the Medical District, and the Strip benefit from short-term rental demand. Dr. Jan maps rental comps by zip code to find the best yield-to-price ratio." },
    { question: "Should I buy a short-term or long-term rental property?",
      answer: "Depends on your time commitment. STRs (Airbnb/VRBO) near the Strip yield more but require active management or a 20–30% property management fee. Long-term rentals are passive and stable. Dr. Jan analyzes both scenarios with real numbers from current Las Vegas rental data." },
    { question: "How do I identify undervalued investment properties?",
      answer: "Dr. Jan watches for estate sales, divorce sales, and out-of-state owners who've let properties sit. She also tracks price-per-square-foot anomalies by neighborhood. Her investor clients get off-market alerts before properties hit the public MLS." },
    { question: "What are the tax benefits of Las Vegas investment properties?",
      answer: "Depreciation, mortgage interest deduction, repair deductions, and no Nevada state income tax on rental income. Combined with 1031 exchange options for California investors moving capital to Nevada, the tax advantages are substantial. Dr. Jan works alongside your CPA to structure purchases optimally." },
  ],
};

// ─── DOMAIN-SPECIFIC OVERRIDES ────────────────────────────────────────────
// For key domains where generic pageType FAQs aren't quite right

export const FAQ_DOMAIN_OVERRIDES: Record<string, FAQ[]> = {

  "heritagestoneridgevalue.com": [
    { question: "How do I get an accurate Heritage Stonebridge home valuation?",
      answer: "Dr. Jan pulls live Heritage Stonebridge comps — every sale in the past 6 months, adjusted for upgrades, floor plan, and lot position. She does this free with no obligation. Call 702-222-1964 for your personalized valuation." },
    { question: "What's my Heritage Stonebridge home worth right now?",
      answer: "Heritage Stonebridge values shift with season and interest rates. The most accurate number comes from recent closed sales in your specific floor plan. Dr. Jan has sold more homes in this community than any other agent — she knows what buyers are paying right now." },
    { question: "How is Heritage Stonebridge priced compared to other 55+ Summerlin communities?",
      answer: "Heritage Stonebridge commands a 10–20% premium over Sun City Summerlin due to newer construction (built 2018–present), larger floor plans, and superior amenities. Del Webb comparables run within 5% of Heritage pricing." },
    { question: "What upgrades add the most value in Heritage Stonebridge?",
      answer: "Extended covered patios, upgraded cabinetry packages, and owned solar panels consistently return 80–110% of their cost at resale. Pool additions return 50–70%. Dr. Jan advises sellers on which upgrades to highlight and which to price-adjust around." },
    { question: "How long does it take to sell a Heritage Stonebridge home?",
      answer: "Well-priced Heritage Stonebridge homes sell in 14–30 days. The 55+ buyer pool is active and pre-qualified. Overpriced listings can sit for 60+ days. Dr. Jan's pricing strategy achieves list price or above in 94% of her Heritage listings." },
    { question: "Can I sell my Heritage Stonebridge home if it has an HOA lien?",
      answer: "Yes — liens are typically resolved at closing from sale proceeds. Dr. Jan has handled HOA lien situations before and works with a title team that resolves these efficiently. Call 702-222-1964 for a confidential consultation." },
  ],

  "yourdivorcerealtor.com": [
    { question: "Can I sell my home during a divorce?",
      answer: "Yes. A divorce doesn't stop a sale — it just requires both spouses to agree or a court order. Dr. Jan handles court-ordered sales with complete discretion. She's worked with family law attorneys across Las Vegas and understands the documentation required." },
    { question: "What happens if my spouse and I disagree on the sale price?",
      answer: "Dr. Jan provides an independent, third-party CMA that both attorneys can rely on. If necessary, the court can appoint a real estate professional — Dr. Jan is experienced in this process and presents data clearly for legal proceedings." },
    { question: "How confidential is the selling process?",
      answer: "Completely. Dr. Jan does not discuss client situations with anyone outside the transaction. She can schedule showings around your schedule, handle all communication through attorneys if preferred, and structure the process to minimize stress." },
    { question: "How quickly can we close a divorce property sale?",
      answer: "Timeline depends on court requirements and financing. Cash sales can close in 10–14 days. Financed transactions close in 21–30 days. Dr. Jan coordinates with both parties' legal teams to meet court deadlines." },
    { question: "Who pays the real estate commission in a divorce sale?",
      answer: "Commission is paid from sale proceeds and split between both parties as part of the net distribution — it comes out before either party receives their share. Your attorney handles the final distribution accounting." },
    { question: "What if the home is underwater or has equity issues?",
      answer: "Dr. Jan has handled short sales, equity disputes, and contested valuations. She works with both attorneys to present accurate market data and help navigate options including short sale negotiation if needed." },
  ],

  "speedycashhomeoffers.com": [
    { question: "How fast can I get a cash offer?",
      answer: "Dr. Jan's cash buyer network can provide a preliminary offer within 24 hours of receiving basic property information. Formal written offers typically arrive within 48–72 hours. No showings, no repairs, no open houses required." },
    { question: "Is a cash offer always lower than the market price?",
      answer: "Cash offers average 85–92% of market value in exchange for speed and certainty. Dr. Jan also presents a traditional listing option so you can compare the net difference and make the decision that's right for your situation." },
    { question: "What types of homes qualify for a cash offer?",
      answer: "Any residential property in Las Vegas — regardless of condition, tenant situation, or title issues. Distressed properties, probate homes, inherited properties, and homes needing major repairs all qualify. Call 702-222-1964 for a no-obligation assessment." },
    { question: "Are there fees or commissions with a cash sale?",
      answer: "Dr. Jan's cash buyer program charges no seller commission. Closing costs are typically covered by the buyer. Your net proceeds are clearly stated in the offer with no surprises." },
    { question: "Can I sell if I'm behind on payments or facing foreclosure?",
      answer: "Yes — and time matters. A cash sale can close before a foreclosure completes, protecting your credit and potentially leaving you with equity proceeds. Dr. Jan has helped numerous Las Vegas homeowners avoid foreclosure through a fast, confidential sale." },
    { question: "What if I change my mind after accepting an offer?",
      answer: "You have a 3-day right of rescission under Nevada law. Dr. Jan ensures you fully understand the terms before signing and never pressures a decision." },
  ],
};

// ─── LOOKUP FUNCTION ──────────────────────────────────────────────────────

export function getFaqsForDomain(pageType: string, domain: string): FAQ[] {
  // Domain-specific override takes priority
  if (FAQ_DOMAIN_OVERRIDES[domain]) {
    return FAQ_DOMAIN_OVERRIDES[domain];
  }
  // Fall back to pageType set
  return FAQ_BY_PAGE_TYPE[pageType] ?? FAQ_BY_PAGE_TYPE["search"];
}
