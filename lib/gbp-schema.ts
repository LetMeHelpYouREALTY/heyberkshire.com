// Google Business Profile Schema Data
// Supports GBP ranking factors: Relevance, Distance, Prominence

export const businessInfo = {
  // NAP - Must match GBP exactly
  name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
  address: {
    streetAddress: "9406 W Lake Mead Blvd, Suite 100",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89134",
    addressCountry: "US",
  },
  phone: {
    display: "(702) 500-1942",
    tel: "+17025001942",
  },
  email: "homes@heyberkshire.com",
  url: "https://heyberkshire.com",

  // Business Details
  license: "S.0197614.LLC",
  priceRange: "$$",

  // Hours - Match GBP exactly
  hours: {
    monday: "09:00-18:00",
    tuesday: "09:00-18:00",
    wednesday: "09:00-18:00",
    thursday: "09:00-18:00",
    friday: "09:00-18:00",
    saturday: "10:00-16:00",
    sunday: "By Appointment",
  },

  // Geo coordinates for distance ranking
  geo: {
    latitude: 36.1941,
    longitude: -115.2678,
  },

  // Service areas - Start focused, expand with prominence
  serviceAreas: [
    // Primary (immediate city)
    "Las Vegas, NV",
    "Summerlin, NV",
    // Secondary (close ZIPs)
    "Henderson, NV",
    "North Las Vegas, NV",
    // Tertiary (county expansion)
    "Clark County, NV",
  ],

  // Categories - Primary + Secondary for GBP
  categories: {
    primary: "Real Estate Agent",
    secondary: [
      "Real Estate Agency",
      "Real Estate Consultant",
    ],
  },

  // Services - Each creates searchable fields in GBP
  services: [
    // Core Services
    { name: "Buyer Representation", description: "Full-service home buying assistance" },
    { name: "Seller Representation", description: "List and sell your home priced to recent comps" },
    { name: "Luxury Home Sales", description: "High-end properties $1M+" },
    // Niche Services (trigger intent phrases)
    { name: "California Relocation Services", description: "Helping CA buyers transition to Las Vegas" },
    { name: "55+ Community Specialist", description: "Sun City, Anthem, Del Webb communities" },
    { name: "First-Time Home Buyer Guidance", description: "FHA, VA, down payment assistance" },
    { name: "Probate Real Estate Sales", description: "Estate and probate property transactions" },
    { name: "Divorce Real Estate Sales", description: "Neutral representation for marital asset division" },
    { name: "Relocation Services", description: "Corporate and individual relocation assistance" },
    { name: "Investment Property Consulting", description: "Rental properties and investment analysis" },
    { name: "New Construction Representation", description: "Builder negotiations and buyer protection" },
    { name: "Military/VA Home Buying", description: "Specialized service for veterans" },
    { name: "Downsizing Consultation", description: "Transition to smaller, maintenance-free living" },
    { name: "Luxury Condo Sales", description: "High-rise and resort-style condominiums" },
  ],

  // Attributes for GBP - Fill out ALL available
  attributes: {
    // Accessibility (important for GBP)
    accessibility: [
      "Wheelchair accessible entrance",
      "Wheelchair accessible parking lot",
      "Wheelchair accessible restroom",
    ],
    // Service options
    serviceOptions: [
      "Online appointments",
      "Onsite services",
      "Same-day appointments",
    ],
    // Highlights
    highlights: [
      "Identifies as women-owned",
      "LGBTQ+ friendly",
      "Veteran-led",
    ],
    // Offerings
    offerings: [
      "Free consultation",
      "Free estimates",
    ],
    // Amenities
    amenities: [
      "Free Wi-Fi",
      "Free parking",
    ],
    // Planning
    planning: [
      "Appointment required",
      "Accepts new clients",
    ],
    // Payments (if applicable)
    payments: [
      "Credit cards",
      "Checks",
      "Wire transfer",
    ],
  },

  // Social profiles for sameAs schema
  socialProfiles: [
    "https://www.facebook.com/drjanduffy",
    "https://www.instagram.com/drjanduffy",
    "https://www.linkedin.com/in/drjanduffy",
    "https://www.youtube.com/@drjanduffy",
    "https://twitter.com/drjanduffy",
  ],

  // Languages spoken
  languages: ["English", "Spanish"],

  // Payment methods accepted
  paymentAccepted: ["Credit Card", "Check", "Wire Transfer"],

  // Year established
  foundingDate: "2010",
};

// 750-word GBP Description (3 sections)
export const gbpDescription = {
  // Section 1: Who you are/mission (~250 words)
  whoWeAre: `Dr. Jan Duffy is a trusted REALTOR® with Berkshire Hathaway HomeServices Nevada Properties, serving the Las Vegas real estate market since 2008. Backed by Warren Buffett's Berkshire Hathaway—the most recognized name in real estate—Dr. Jan combines local expertise with world-class resources to deliver exceptional results for buyers and sellers alike.

With $127 million in closed transactions and hundreds of satisfied clients, Dr. Jan has earned a reputation for integrity, market knowledge, and personalized service. Whether you're a first-time buyer navigating the process, a luxury home seeker exploring The Ridges or MacDonald Highlands, or a California buyer relocating for Nevada's tax advantages, Dr. Jan provides the guidance you need to make confident real estate decisions.`,

  // Section 2: What/why - Value proposition (~250 words)
  whatWeDo: `What sets Dr. Jan apart is a commitment to education and advocacy. Clients receive comprehensive market analysis, expert negotiation, and honest advice—not sales pressure. As a Berkshire Hathaway HomeServices agent, Dr. Jan offers access to a global network of 50,000+ agents, world-class marketing for sellers, and off-market opportunities for buyers.

Specialized services include: buyer and seller representation, luxury home sales, 55+ active adult community expertise (Sun City Summerlin, Sun City Anthem, Del Webb Lake Las Vegas), California relocation assistance, probate and divorce real estate, investment property consulting, new construction representation, and first-time buyer programs including FHA, VA, and down payment assistance guidance.

Dr. Jan's approach is simple: treat every client with the same care, know the market inside and out, and never stop working until the deal closes successfully.`,

  // Section 3: Where - Areas served (~250 words)
  whereWeServe: `Dr. Jan serves the entire Las Vegas Valley with specialized knowledge of Las Vegas, Summerlin, Henderson, North Las Vegas, and all of Clark County. Neighborhood expertise includes Summerlin's master-planned communities, Henderson's Green Valley and Inspirada, the luxury enclaves of The Ridges and Southern Highlands, Centennial Hills and Skye Canyon, and Mountains Edge and North Las Vegas.

55+ active adult community specialization covers Sun City Summerlin (Nevada's largest 55+ community), Sun City Anthem in Henderson, Del Webb Lake Las Vegas, and Solera at Anthem. Investment property expertise spans single-family rentals, multi-family opportunities, and short-term rental analysis across the Las Vegas metro area.

Office located at 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Available Monday through Friday 9am-6pm, Saturday 10am-4pm, and Sunday by appointment. Call (702) 500-1942 for a free consultation or visit heyberkshire.com to start your Las Vegas real estate journey today.`,
};

// FAQ Schema for GBP Q&A section
export const gbpFAQs = [
  {
    question: "What areas does Dr. Jan Duffy serve in Las Vegas?",
    answer: "Dr. Jan serves all of Las Vegas, Summerlin, Henderson, North Las Vegas, and Clark County. Specialized neighborhood expertise includes Summerlin, Green Valley, The Ridges, Southern Highlands, Centennial Hills, Skye Canyon, Inspirada, and Mountains Edge.",
  },
  {
    question: "Does Dr. Jan help buyers relocating from California?",
    answer: "Yes! California relocation is a specialty. Dr. Jan helps CA buyers understand Nevada's 0% state income tax advantage, compare home values (40-60% lower than comparable CA properties), and find the perfect Las Vegas neighborhood. Call (702) 500-1942 for California relocation assistance.",
  },
  {
    question: "What 55+ communities does Dr. Jan specialize in?",
    answer: "Dr. Jan specializes in Sun City Summerlin (Nevada's largest 55+ community with 7,700+ homes), Sun City Anthem in Henderson, Del Webb Lake Las Vegas, and Solera at Anthem. Each community offers different amenities and price points for active adult living.",
  },
  {
    question: "Does Berkshire Hathaway HomeServices help with new construction?",
    answer: "Yes! Dr. Jan provides free buyer representation for new construction purchases from builders like Toll Brothers, Lennar, and Century Communities. The builder pays the commission, but Dr. Jan works exclusively for you—protecting your interests during the build process.",
  },
  {
    question: "How does Dr. Jan help with probate or divorce real estate sales?",
    answer: "Dr. Jan handles sensitive transactions with discretion and professionalism. For probate sales, she coordinates with estate attorneys and ensures court compliance. For divorce sales, she provides neutral representation and works with both parties' attorneys. Call (702) 500-1942 for a confidential consultation.",
  },
  {
    question: "What is the average home price in Las Vegas in 2026?",
    answer: "As of January 2026, the Las Vegas median home price is $450,000, up 4.2% year-over-year. Henderson's median is slightly higher at $485,000. Luxury communities like Summerlin average $625,000, while The Ridges averages $2.5 million. Contact Dr. Jan for current market data.",
  },
  {
    question: "Does Dr. Jan work with first-time home buyers?",
    answer: "Absolutely! Dr. Jan guides first-time buyers through every step, including pre-approval, loan programs (FHA 3.5% down, VA 0% down, conventional options), Nevada down payment assistance programs, and new construction incentives. Free buyer consultations available.",
  },
  {
    question: "Why choose Berkshire Hathaway HomeServices over other agencies?",
    answer: "Berkshire Hathaway HomeServices is backed by Warren Buffett's Berkshire Hathaway Inc.—the only real estate brand with this level of financial stability and trust. You get a global network of 50,000+ agents, world-class marketing, and a name synonymous with integrity.",
  },
  {
    question: "How do I schedule a consultation with Dr. Jan Duffy?",
    answer: "Call or text (702) 500-1942 for immediate assistance, or email homes@heyberkshire.com. Office visits available at 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Monday-Friday 9am-6pm, Saturday 10am-4pm, Sunday by appointment.",
  },
  {
    question: "Does Dr. Jan help with investment properties in Las Vegas?",
    answer: "Yes! Dr. Jan provides investment property consulting including rental property analysis, cap rate calculations, short-term rental regulations, and multi-family opportunities across the Las Vegas Valley. Contact (702) 500-1942 for investment property guidance.",
  },
];

// Generate LocalBusiness Schema
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": "https://heyberkshire.com/#organization",
    name: businessInfo.name,
    image: [
      "https://heyberkshire.com/images/dr-jan-duffy.jpg",
      "https://heyberkshire.com/images/hero/office-lake-mead-blvd.jpg",
      "https://heyberkshire.com/images/hero/west-las-vegas-office-exterior.jpg",
    ],
    logo: "https://heyberkshire.com/images/dr-jan-duffy.jpg",
    url: businessInfo.url,
    telephone: businessInfo.phone.tel,
    email: businessInfo.email,
    priceRange: businessInfo.priceRange,
    hasMap: "https://www.google.com/maps/search/?api=1&query=9406+W+Lake+Mead+Blvd+Suite+100+Las+Vegas+NV+89134",
    openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-16:00"],
    knowsAbout: [
      "Las Vegas real estate",
      "Summerlin homes",
      "Henderson homes",
      "55+ communities",
      "California relocation",
    ],
    address: {
      "@type": "PostalAddress",
      ...businessInfo.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessInfo.geo.latitude,
      longitude: businessInfo.geo.longitude,
    },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "16:00" },
    ],
    areaServed: businessInfo.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Real Estate Services",
      itemListElement: businessInfo.services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200",
      bestRating: "5",
    },
    sameAs: [
      ...businessInfo.socialProfiles,
      "https://www.google.com/maps/search/?api=1&query=9406+W+Lake+Mead+Blvd+Suite+100+Las+Vegas+NV+89134",
    ],
  };
}

// Generate FAQPage Schema
export function generateFAQSchema(faqs = gbpFAQs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
