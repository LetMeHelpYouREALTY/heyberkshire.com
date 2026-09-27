// GBP Posts - Weekly posts for freshness signal
// Posts are a modest but real ranking factor (a few percent)

export interface GBPPost {
  id: string;
  type: "update" | "offer" | "event" | "product";
  title: string;
  content: string;
  cta?: {
    text: string;
    url: string;
  };
  publishDate: string;
  expiresDate?: string;
  keywords: string[]; // Natural keyword inclusion
}

// Template posts - Rotate these weekly
export const gbpPostTemplates: GBPPost[] = [
  {
    id: "market-update-jan-2026",
    type: "update",
    title: "Las Vegas Real Estate Market Update - January 2026",
    content: `The Las Vegas housing market remains strong heading into 2026! Here's what buyers and sellers need to know:

📊 Median home price: $450,000 (+4.2% YoY)
🏠 Active listings: 4,850 homes
⏱️ Average days on market: 28 days
📈 Inventory: 2.1 months (seller's market)

Whether you're buying your first home in Henderson, selling in Summerlin, or looking at 55+ communities like Sun City, now is a great time to make your move.

Call Dr. Jan Duffy at (702) 500-1942 for a free market analysis of your home or neighborhood.`,
    cta: {
      text: "Get Free Market Analysis",
      url: "https://heyberkshire.com/home-valuation",
    },
    publishDate: "2026-01-20",
    keywords: ["Las Vegas real estate", "Henderson homes", "Summerlin", "55+ communities", "market update"],
  },
  {
    id: "california-relocation",
    type: "update",
    title: "California Buyers: Your Home Equity Goes Further in Las Vegas",
    content: `Thinking about relocating from California to Las Vegas? Here's why 37% of Las Vegas home buyers come from CA:

✅ 0% state income tax (save thousands annually)
✅ 40-60% lower home prices vs. comparable CA properties
✅ Same-quality schools, better affordability
✅ 4-hour drive to LA, easy flights everywhere

A $1.2M California home could buy you a luxury property in Summerlin or The Ridges. Dr. Jan Duffy specializes in California-to-Nevada relocations and can help you maximize your equity.

Call (702) 500-1942 for a free California equity comparison.`,
    cta: {
      text: "California Relocation Guide",
      url: "https://heyberkshire.com/buyers/california-relocator",
    },
    publishDate: "2026-01-13",
    keywords: ["California relocation", "Las Vegas", "no state income tax", "Summerlin", "The Ridges"],
  },
  {
    id: "55-plus-spotlight",
    type: "update",
    title: "55+ Active Adult Communities in Las Vegas - Your Options",
    content: `Looking for 55+ living in the Las Vegas Valley? Here are the top communities:

🏌️ Sun City Summerlin - Nevada's largest 55+ community (7,700+ homes, 3 golf courses)
🌄 Sun City Anthem - Henderson location with mountain views
🌊 Del Webb Lake Las Vegas - Resort-style lakefront living
⛳ Solera at Anthem - 1,200-home guard-gated Henderson campus

Each offers different amenities, price points, and lifestyles. Dr. Jan Duffy specializes in 55+ communities and can help you find the perfect fit.

Schedule a community tour: (702) 500-1942`,
    cta: {
      text: "Explore 55+ Communities",
      url: "https://heyberkshire.com/55-plus-communities",
    },
    publishDate: "2026-01-06",
    keywords: ["55+ communities", "Sun City Summerlin", "Sun City Anthem", "Del Webb", "active adult"],
  },
  {
    id: "first-time-buyer",
    type: "offer",
    title: "First-Time Home Buyer? Down Payment Assistance Available",
    content: `Nevada offers several programs to help first-time buyers:

💰 FHA loans: Only 3.5% down required
🎖️ VA loans: 0% down for veterans
🏠 Nevada Housing Division: Down payment assistance up to 5%
🏗️ Builder incentives: Many offering closing cost credits

Dr. Jan Duffy guides first-time buyers through every step—from pre-approval to keys. Free consultation, no pressure.

Popular first-time buyer neighborhoods:
- North Las Vegas (median $385K)
- Mountains Edge (median $475K)
- Centennial Hills (median $495K)

Call (702) 500-1942 to start your homeownership journey.`,
    cta: {
      text: "First-Time Buyer Guide",
      url: "https://heyberkshire.com/buyers/first-time-buyers",
    },
    publishDate: "2025-12-30",
    keywords: ["first-time buyer", "down payment assistance", "FHA", "VA loan", "Las Vegas"],
  },
  {
    id: "seller-tips",
    type: "update",
    title: "Selling Your Las Vegas Home? 5 Tips for Top Dollar",
    content: `Thinking about selling? Here's how to maximize your sale price:

1️⃣ Price right from day one (overpriced homes sit)
2️⃣ Professional photography is non-negotiable
3️⃣ Declutter and depersonalize
4️⃣ Address minor repairs before listing
5️⃣ Work with an agent who knows your neighborhood

Current seller stats:
📈 +4.2% appreciation YoY
⏱️ 28 days average time to sell
💰 98.5% list-to-sale ratio

Get a free home valuation from Dr. Jan Duffy: (702) 500-1942`,
    cta: {
      text: "Get Free Home Valuation",
      url: "https://heyberkshire.com/home-valuation",
    },
    publishDate: "2025-12-23",
    keywords: ["sell home Las Vegas", "home valuation", "listing agent", "Summerlin", "Henderson"],
  },
  {
    id: "luxury-homes",
    type: "update",
    title: "Luxury Living in Las Vegas: The Ridges, MacDonald Highlands & More",
    content: `Las Vegas luxury real estate offers world-class living at Nevada prices:

🏔️ The Ridges, Summerlin - Guard-gated, custom estates from $2M+
⛰️ MacDonald Highlands - Henderson hillside luxury with Strip views
🌆 Strip High-Rises - Waldorf, Veer, Panorama condos
🌳 Southern Highlands - Golf course living from $800K+

Why luxury buyers choose Las Vegas:
✅ No state income tax
✅ Privacy and discretion
✅ World-class dining, entertainment, golf
✅ 40-60% lower than comparable CA/NY properties

Confidential luxury home search: (702) 500-1942`,
    cta: {
      text: "Luxury Home Search",
      url: "https://heyberkshire.com/buyers/luxury-homes-las-vegas",
    },
    publishDate: "2025-12-16",
    keywords: ["luxury homes Las Vegas", "The Ridges", "MacDonald Highlands", "high-rise condos"],
  },
];

// Review Response Templates
// Respond promptly and in depth using who/what/when/where/why
export const reviewResponseTemplates = {
  fiveStarBuyer: (clientName: string, neighborhood: string, details: string) => `
Thank you so much, ${clientName}! It was truly a pleasure helping you find your perfect home in ${neighborhood}. ${details}

Working with buyers who know what they want makes my job a joy. I'm always here if you have questions about your new home or need recommendations for local services.

Welcome to the neighborhood! 🏠

- Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
`,

  fiveStarSeller: (clientName: string, neighborhood: string, details: string) => `
Thank you for the kind words, ${clientName}! Selling your ${neighborhood} home was a great experience, and I'm thrilled we were able to ${details}.

The Las Vegas market is competitive, but with the right pricing strategy and marketing, we got you excellent results. Wishing you all the best in your next chapter!

- Dr. Jan Duffy, BHHS Nevada Properties
`,

  fourStar: (clientName: string, details: string) => `
Thank you for your review, ${clientName}! I appreciate your feedback about ${details}. Your satisfaction is my priority, and I'm always looking for ways to improve.

If there's anything I can help with going forward, please don't hesitate to reach out. I value your trust in choosing Berkshire Hathaway HomeServices.

- Dr. Jan Duffy
`,

  constructive: (clientName: string, issue: string, resolution: string) => `
${clientName}, thank you for sharing your experience. I take all feedback seriously, and I apologize that ${issue}.

${resolution}

Real estate transactions can be complex, and I'm committed to learning from every experience. If you'd like to discuss this further, please call me directly at (702) 500-1942.

- Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties
`,
};

// Citation Sources for NAP consistency
export const citationSources = {
  // Tier 1: Major aggregators
  tier1: [
    { name: "Google Business Profile", url: "https://business.google.com", priority: "critical" },
    { name: "Bing Places", url: "https://www.bingplaces.com", priority: "high" },
    { name: "Apple Maps", url: "https://mapsconnect.apple.com", priority: "high" },
    { name: "Yelp", url: "https://biz.yelp.com", priority: "high" },
  ],
  // Tier 2: Real estate specific
  tier2: [
    { name: "Realtor.com", url: "https://www.realtor.com/realestateagents", priority: "critical" },
    { name: "Zillow", url: "https://www.zillow.com/agent-finder", priority: "critical" },
    { name: "Homes.com", url: "https://www.homes.com", priority: "high" },
    { name: "Trulia", url: "https://www.trulia.com", priority: "high" },
    { name: "Redfin", url: "https://www.redfin.com", priority: "medium" },
  ],
  // Tier 3: Local Nevada/Las Vegas directories
  tier3: [
    { name: "Nevada Real Estate Division", url: "https://red.nv.gov", priority: "high" },
    { name: "Las Vegas Chamber of Commerce", url: "https://www.lvchamber.com", priority: "medium" },
    { name: "Henderson Chamber of Commerce", url: "https://www.hendersonchamber.com", priority: "medium" },
    { name: "Vegas.com Business Directory", url: "https://www.vegas.com", priority: "low" },
  ],
  // Tier 4: General business directories
  tier4: [
    { name: "Facebook Business", url: "https://www.facebook.com/business", priority: "high" },
    { name: "LinkedIn", url: "https://www.linkedin.com", priority: "high" },
    { name: "BBB", url: "https://www.bbb.org", priority: "medium" },
    { name: "Yellow Pages", url: "https://www.yellowpages.com", priority: "low" },
  ],
};

// Photo categories for GBP
export const photoCategories = [
  {
    category: "Office & Team",
    description: "Exterior office, interior, team photos",
    examples: ["Office exterior", "Reception area", "Dr. Jan headshot", "Team photo"],
    count: "5-10 photos",
  },
  {
    category: "Neighborhoods",
    description: "Local area photos showing geography expertise",
    examples: ["Summerlin views", "Henderson parks", "Las Vegas Strip", "Red Rock Canyon"],
    count: "10-15 photos",
  },
  {
    category: "Listings & Closings",
    description: "Active listings, sold properties, closing day photos",
    examples: ["Featured listings", "Sold signs", "Key handoff photos", "Happy clients"],
    count: "15-20 photos",
  },
  {
    category: "55+ Communities",
    description: "Community amenities, clubhouses, golf courses",
    examples: ["Sun City clubhouse", "Golf courses", "Recreation centers", "Community pools"],
    count: "10-15 photos",
  },
  {
    category: "Luxury Properties",
    description: "High-end listings and neighborhoods",
    examples: ["The Ridges homes", "Custom estates", "Strip views", "Pool/backyard features"],
    count: "10-15 photos",
  },
];
