import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

const pages: { file: string; needles: string[]; banned: string[] }[] = [
  {
    file: "app/page.tsx",
    needles: [
      '<LeftoverBand path="/" />',
      '<LeftoverBand path="/" slot={1} />',
    ],
    banned: [
      ">What Clients Say About Dr. Jan Duffy<",
      ">Find Your Las Vegas Home<",
      ">Ready to Buy or Sell in Las Vegas?<",
    ],
  },
  {
    file: "app/security-policy/page.tsx",
    needles: [
      '<LeftoverBand path="/security-policy" />',
      '<LeftoverBand path="/security-policy" slot={1} />',
      '<LeftoverBand path="/security-policy" slot={2} />',
      '<LeftoverBand path="/security-policy" slot={3} />',
    ],
    banned: [
      ">Our Commitment to Security<",
      ">Reporting Security Vulnerabilities<",
      ">Security Measures in Place<",
      ">Third-Party Services<",
      ">Responsible Disclosure Policy<",
      ">Out of Scope<",
      ">Your Security<",
      ">Questions?<",
    ],
  },
  {
    file: "app/55-plus-communities/sun-city-anthem/page.tsx",
    needles: [
      '<LeftoverBand path="/55-plus-communities/sun-city-anthem" />',
      "7,100+ Homes, $180–$230 HOA, $350K–$1.2M Band",
    ],
    banned: [
      "Henderson's Premier 55+ Community",
      "Safest Large City",
      "Property Crime",
      "Sun City lifestyle",
      ">About Sun City Anthem<",
      "at a Glance",
    ],
  },
  {
    file: "app/55-plus-communities/page.tsx",
    needles: [
      '<LeftoverBand path="/55-plus-communities" />',
      '<LeftoverBand path="/55-plus-communities" slot={1} />',
      '<LeftoverBand path="/55-plus-communities" slot={2} />',
    ],
    banned: [
      ">Why Active Adults Choose Las Vegas<",
      "like-minded",
      "peace of mind",
      "Summerlin lifestyle",
      ">Las Vegas 55+ Market Overview | January 2026<",
      ">Las Vegas 55+ Communities<",
      "No-Pressure Approach",
      "Specialized Expertise",
      "Relocation Support",
    ],
  },
  {
    file: "app/buyers/luxury-homes-las-vegas/page.tsx",
    needles: [
      '<LeftoverBand path="/buyers/luxury-homes-las-vegas" />',
      '<LeftoverBand path="/buyers/luxury-homes-las-vegas" slot={1} />',
    ],
    banned: [
      ">Premier Luxury Communities<",
      "Celebrity neighborhood",
      ">Las Vegas Luxury Market Performance<",
    ],
  },
  {
    file: "app/luxury-homes/page.tsx",
    needles: [
      '<LeftoverBand path="/luxury-homes" />',
      '<LeftoverBand path="/luxury-homes" slot={1} />',
    ],
    banned: [
      ">Luxury Home Marketing Services<",
      ">Luxury Buyer & Seller Services<",
      ">Las Vegas Luxury Market Statistics | January 2026<",
      "Ultra-exclusive",
      "most prestigious",
      "most exclusive address",
      "Celebrity homes",
    ],
  },
  {
    file: "app/listings/page.tsx",
    needles: [
      '<LeftoverBand path="/listings" />',
      '<LeftoverBand path="/listings" slot={1} />',
    ],
    banned: [
      ">Las Vegas Neighborhoods & Communities<",
      "unique lifestyle",
      ">Las Vegas Real Estate Market Statistics<",
    ],
  },
  {
    file: "app/why-berkshire-hathaway/page.tsx",
    needles: [
      '<LeftoverBand path="/why-berkshire-hathaway" />',
      '<LeftoverBand path="/why-berkshire-hathaway" slot={1} />',
    ],
    banned: [
      ">Your Local BHHS Expert in Las Vegas<",
      ">Backed by Warren Buffett's Legacy<",
    ],
  },
  {
    file: "app/services/page.tsx",
    needles: [
      '<LeftoverBand path="/services" />',
      '<LeftoverBand path="/services" slot={1} />',
    ],
    banned: [
      ">Core Real Estate Services<",
      ">Specialized Real Estate Services<",
    ],
  },
  {
    file: "app/new-construction/page.tsx",
    needles: [
      '<LeftoverBand path="/new-construction" />',
      '<LeftoverBand path="/new-construction" slot={1} />',
      '<LeftoverBand path="/new-construction" slot={2} />',
      '<LeftoverBand path="/new-construction" slot={3} />',
      "Register Dr. Jan at Suite 100 before any Skye Canyon or Inspirada model",
    ],
    banned: [
      "Premier locations",
      ">Las Vegas New Home Builders<",
      ">New Construction Buying Process with BHHS<",
      ">What Dr. Jan Negotiates for New Construction Buyers<",
      ">Ready to Tour New Construction?<",
    ],
  },
  {
    file: "app/google-business/page.tsx",
    needles: [
      '<LeftoverBand path="/google-business" />',
      '<LeftoverBand path="/google-business" slot={1} />',
      "Mon–Fri 9am–6pm, Sat 10am–4pm at Suite 100",
      "Maps pin at 9406 W Lake Mead Blvd",
    ],
    banned: [
      ">Real Estate Services<",
      ">Service Areas<",
      ">Business Hours<",
      ">Visit the Office<",
      ">Your Review Helps Others Find Quality Service<",
    ],
  },
  {
    file: "app/55-plus-communities/del-webb-lake-las-vegas/page.tsx",
    needles: [
      "1,800+ homes, pickleball, and a 320-acre lake",
      '<LeftoverBand path="/55-plus-communities/del-webb-lake-las-vegas" />',
    ],
    banned: [
      "lifestyle programming",
      "lifestyle activities",
      ">About Del Webb at Lake Las Vegas<",
      "The Lake Las Vegas Experience",
    ],
  },
  {
    file: "app/55-plus-communities/sun-city-aliante/page.tsx",
    needles: [
      '<LeftoverBand path="/55-plus-communities/sun-city-aliante" />',
      "2,800+ Homes, $140–$175 HOA, $280K–$550K Band",
      "Aliante Casino, I-215, and Harry Reid International (LAS)",
    ],
    banned: ["same lifestyle", ">About Sun City Aliante<", ">Location Advantages<", "at a Glance"],
  },
  {
    file: "app/about/page.tsx",
    needles: [
      "commute minutes from Suite 100",
      '<LeftoverBand path="/about" />',
      '<LeftoverBand path="/about" slot={1} />',
    ],
    banned: [
      "lifestyle offerings",
      "Areas Served by BHHS Nevada Properties",
      ">Areas of Specialization<",
      ">What Clients Say About Dr. Jan Duffy<",
    ],
  },
  {
    file: "app/buyers/california-relocator/page.tsx",
    needles: [
      "Keep the California paycheck",
      '<LeftoverBand path="/buyers/california-relocator" />',
      '<LeftoverBand path="/buyers/california-relocator" slot={1} />',
      '<LeftoverBand path="/buyers/california-relocator" slot={2} />',
      '<LeftoverBand path="/buyers/california-relocator" slot={3} />',
    ],
    banned: [
      "Remote Work, Vegas Lifestyle",
      ">California vs. Nevada: The Numbers<",
      ">What Your California Equity Buys in Las Vegas<",
      ">Top 3 Neighborhoods for California Relocators<",
      ">Ready to Start Your Tax-Free Life?<",
      "Lowest crime rates",
      "The Irvine of Las Vegas",
      "celebrity neighbors",
    ],
  },
  {
    file: "app/neighborhoods/the-ridges/page.tsx",
    needles: [
      '<LeftoverBand path="/neighborhoods/the-ridges" />',
      "900 homesites across 793 acres",
    ],
    banned: [
      "most prestigious",
      "ultra-exclusive",
      "exclusivity is built",
      "pinnacle of Las Vegas luxury",
      "most exclusive",
    ],
  },
  {
    file: "app/neighborhoods/summerlin/page.tsx",
    needles: ['<LeftoverBand path="/neighborhoods/summerlin" />'],
    banned: [],
  },
  {
    file: "app/neighborhoods/southern-highlands/page.tsx",
    needles: ['<LeftoverBand path="/neighborhoods/southern-highlands" />'],
    banned: [],
  },
  {
    file: "app/neighborhoods/skye-canyon/page.tsx",
    needles: ['<LeftoverBand path="/neighborhoods/skye-canyon" />'],
    banned: ["fastest-growing community"],
  },
  {
    file: "app/neighborhoods/centennial-hills/page.tsx",
    needles: ['<LeftoverBand path="/neighborhoods/centennial-hills" />'],
    banned: [],
  },
  {
    file: "app/neighborhoods/north-las-vegas/page.tsx",
    needles: ['<LeftoverBand path="/neighborhoods/north-las-vegas" />'],
    banned: ["Affordable homeownership"],
  },
  {
    file: "app/neighborhoods/henderson/page.tsx",
    needles: [
      "drive time from Suite 100",
      '<LeftoverBand path="/neighborhoods/henderson" />',
    ],
    banned: ["every lifestyle and budget", "trusted specialist"],
  },
  {
    file: "app/neighborhoods/inspirada/page.tsx",
    needles: [
      "2,000-acre Henderson campus",
      '<LeftoverBand path="/neighborhoods/inspirada" />',
    ],
    banned: ["feel like a vacation", "engaged lifestyle", "Resort-style living"],
  },
  {
    file: "app/neighborhoods/mountains-edge/page.tsx",
    needles: [
      "compared by square footage",
      '<LeftoverBand path="/neighborhoods/mountains-edge" />',
    ],
    banned: ["comparable lifestyle", "Affordable luxury"],
  },
  {
    file: "app/neighborhoods/green-valley/page.tsx",
    needles: [
      "tree canopy age",
      '<LeftoverBand path="/neighborhoods/green-valley" />',
    ],
    banned: ["lifestyle offerings", "original master-planned"],
  },
  {
    file: "app/sellers/page.tsx",
    needles: [
      '<LeftoverBand path="/sellers" />',
      '<LeftoverBand path="/sellers" slot={1} />',
      '<LeftoverBand path="/sellers" slot={2} />',
      '<LeftoverBand path="/sellers" slot={3} />',
      '<LeftoverBand path="/sellers" slot={4} />',
      "January 2026: $450K median, 28 DOM, 2.1 months inventory",
    ],
    banned: [
      ">The Berkshire Hathaway HomeServices Selling Advantage<",
      ">The Home Selling Process<",
      ">Specialized Services for Every Seller<",
      ">What's Included When You List with BHHS<",
      ">What's Your Home Worth?<",
      ">Las Vegas Seller Market Statistics | January 2026<",
    ],
  },
  {
    file: "app/sellers/downsizing/page.tsx",
    needles: [
      '<LeftoverBand path="/sellers/downsizing" />',
      '<LeftoverBand path="/sellers/downsizing" slot={1} />',
      '<LeftoverBand path="/sellers/downsizing" slot={2} />',
      '<LeftoverBand path="/sellers/downsizing" slot={3} />',
    ],
    banned: [
      ">Extract Your Equity, Enjoy Your Life<",
      "maximize their lifestyle",
      ">Top 55+ Communities for Las Vegas Downsizers<",
      ">Popular Downsizing Destinations<",
      ">Key Considerations When Downsizing<",
      ">The Downsizing Process with Dr. Jan Duffy<",
      ">Ready to Simplify Your Life?<",
      "What lifestyle do you want",
    ],
  },
  {
    file: "app/sellers/move-up/page.tsx",
    needles: [
      '<LeftoverBand path="/sellers/move-up" />',
      '<LeftoverBand path="/sellers/move-up" slot={1} />',
      '<LeftoverBand path="/sellers/move-up" slot={2} />',
      '<LeftoverBand path="/sellers/move-up" slot={3} />',
      '<LeftoverBand path="/sellers/move-up" slot={4} />',
    ],
    banned: [
      ">Your Equity Position is Stronger Than You Think<",
      ">Common Upgrade Paths We Help With<",
      ">We Handle Both Transactions Seamlessly<",
      ">Timing Your Move-Up: Three Proven Strategies<",
      ">Financing Your Move-Up Purchase<",
      ">What's Your Home Worth Today?<",
    ],
  },
  {
    file: "app/sellers/relocation/page.tsx",
    needles: [
      '<LeftoverBand path="/sellers/relocation" />',
      '<LeftoverBand path="/sellers/relocation" slot={1} />',
      '<LeftoverBand path="/sellers/relocation" slot={2} />',
      '<LeftoverBand path="/sellers/relocation" slot={3} />',
      '<LeftoverBand path="/sellers/relocation" slot={4} />',
      '<LeftoverBand path="/sellers/relocation" slot={5} />',
    ],
    banned: [
      ">Berkshire Hathaway HomeServices Network<",
      ">How We Handle Your Relocation Sale<",
      ">Relocation Timeline Options<",
      ">Popular Relocation Destinations from Las Vegas<",
      ">The Relocation Process Step by Step<",
      ">Relocating TO Las Vegas?<",
      ">Ready to Make Your Move?<",
      "School district guidance",
    ],
  },
  {
    file: "app/sellers/divorce-probate/page.tsx",
    needles: [
      '<LeftoverBand path="/sellers/divorce-probate" />',
      '<LeftoverBand path="/sellers/divorce-probate" slot={1} />',
      '<LeftoverBand path="/sellers/divorce-probate" slot={2} />',
      '<LeftoverBand path="/sellers/divorce-probate" slot={3} />',
      '<LeftoverBand path="/sellers/divorce-probate" slot={4} />',
    ],
    banned: [
      ">Situations We Help Navigate<",
      ">Our Approach to Sensitive Transactions<",
      ">Nevada-Specific Considerations<",
      ">How We Handle Sensitive Transactions<",
      ">Why Berkshire Hathaway HomeServices for Sensitive Sales<",
      ">Confidential Consultation<",
    ],
  },
  {
    file: "app/relocation/page.tsx",
    needles: [
      "one ZIP per inbound afternoon",
      '<LeftoverBand path="/relocation" />',
      '<LeftoverBand path="/relocation" slot={1} />',
      '<LeftoverBand path="/relocation" slot={2} />',
      "California paycheck, Nevada PITI",
      "Book Suite 100 before the first inbound ZIP",
    ],
    banned: [
      "unique lifestyle",
      "Popular Relocation Destinations",
      ">Why People Are Moving to Las Vegas<",
      ">Moving from California?<",
      ">Planning Your Move to Las Vegas?<",
      "Private school recommendations",
      "quality of life",
      ">Comprehensive Relocation Services<",
      ">Las Vegas Schools & Education<",
      ">The Berkshire Hathaway HomeServices Advantage<",
    ],
  },
  {
    file: "app/market-report/page.tsx",
    needles: [
      '<LeftoverBand path="/market-report" />',
      '<LeftoverBand path="/market-report" slot={1} />',
    ],
    banned: [
      ">Market Data by Area<",
      ">Key Market Trends to Watch<",
      ">Get Personalized Market Insights<",
    ],
  },
  {
    file: "app/investment-properties/page.tsx",
    needles: [
      '<LeftoverBand path="/investment-properties" />',
      '<LeftoverBand path="/investment-properties" slot={1} />',
      '<LeftoverBand path="/investment-properties" slot={2} />',
      '<LeftoverBand path="/investment-properties" slot={3} />',
      '<LeftoverBand path="/investment-properties" slot={4} />',
      '<LeftoverBand path="/investment-properties" slot={5} />',
    ],
    banned: [
      ">Why Invest in Las Vegas?<",
      ">Investment Property Markets | January 2026<",
      ">Investment Property Services<",
      ">Investment Strategies We Support<",
      ">Understanding Las Vegas Investment Metrics<",
      ">Las Vegas Investment Neighborhoods: Deep Dive<",
      ">Ready to Invest in Las Vegas?<",
      "Why Las Vegas for 1031s",
      "higher risk neighborhoods",
      "Best for: Cash flow investors",
      "Best for: Balanced investors",
      "Best for: Appreciation investors",
    ],
  },
  {
    file: "app/home-valuation/page.tsx",
    needles: [
      '<LeftoverBand path="/home-valuation" />',
      '<LeftoverBand path="/home-valuation" slot={1} />',
    ],
    banned: [
      ">Why Online Home Value Estimates Often Miss the Mark<",
      ">Key Factors That Affect Your Las Vegas Home's Value<",
      "School zones",
      ">The BHHS Home Valuation Process<",
      ">Ready to Know What Your Home Is Worth?<",
      ">Schedule Your Free Valuation<",
      ">Las Vegas Neighborhood Home Values | January 2026<",
    ],
  },
  {
    file: "app/buyers/first-time-buyers/page.tsx",
    needles: [
      '<LeftoverBand path="/buyers/first-time-buyers" />',
      '<LeftoverBand path="/buyers/first-time-buyers" slot={1} />',
      '<LeftoverBand path="/buyers/first-time-buyers" slot={2} />',
    ],
    banned: [
      ">First-Time Buyer Financing Options<",
      ">Best Neighborhoods for First-Time Buyers<",
      "new schools",
      ">Rent vs. Buy in Las Vegas<",
      ">Ready to Stop Renting?<",
    ],
  },
  {
    file: "app/contact/page.tsx",
    needles: [
      '<LeftoverBand path="/contact" />',
      '<LeftoverBand path="/contact" slot={1} />',
    ],
    banned: [">Get In Touch<", ">Prefer to Reach Out Directly?<"],
  },
  {
    file: "app/market-insights/page.tsx",
    needles: [
      '<LeftoverBand path="/market-insights" />',
      '<LeftoverBand path="/market-insights" slot={1} />',
      '<LeftoverBand path="/market-insights" slot={2} />',
      '<LeftoverBand path="/market-insights" slot={3} />',
      '<LeftoverBand path="/market-insights" slot={4} />',
      '<LeftoverBand path="/market-insights" slot={5} />',
    ],
    banned: [
      ">5 Forces Driving Las Vegas Real Estate in 2026<",
      ">Las Vegas Tech Transformation<",
      ">California Migration Analysis<",
      ">Economic Diversification<",
      ">2026 Neighborhood Outlook<",
      ">What This Means for You<",
      "safety rankings",
    ],
  },
  {
    file: "app/market-update/page.tsx",
    needles: [
      '<LeftoverBand path="/market-update" />',
      '<LeftoverBand path="/market-update" slot={1} />',
      '<LeftoverBand path="/market-update" slot={2} />',
      '<LeftoverBand path="/market-update" slot={3} />',
      '<LeftoverBand path="/market-update" slot={4} />',
    ],
    banned: [
      ">5 Key Statistics This Week<",
      ">Notable Sale of the Week<",
      ">Dr. Jan Duffy's Expert Analysis<",
      ">What This Means for You<",
      ">This Week by Area<",
    ],
  },
  {
    file: "app/neighborhoods/page.tsx",
    needles: [
      '<LeftoverBand path="/neighborhoods" />',
      '<LeftoverBand path="/neighborhoods" slot={1} />',
    ],
    banned: [
      ">Compare Valley Neighborhoods<",
      ">Neighborhood Services<",
    ],
  },
  {
    file: "app/buyers/page.tsx",
    needles: ['<LeftoverBand path="/buyers" />'],
    banned: [">Las Vegas Buyer Market Statistics | January 2026<"],
  },
  {
    file: "app/faq/page.tsx",
    needles: ['<LeftoverBand path="/faq" />'],
    banned: [">Still Have Questions?<"],
  },
  {
    file: "app/55-plus-communities/sun-city-summerlin/page.tsx",
    needles: [
      '<LeftoverBand path="/55-plus-communities/sun-city-summerlin" />',
      "7,700+ Homes, $155–$195 HOA, $320K–$850K Band",
      "Highlands, Sun Terrace, Eagle Crest, and Palm Valley",
    ],
    banned: [">About Sun City Summerlin<", "at a Glance", ">Sun City Summerlin Neighborhoods<"],
  },
  {
    file: "app/55-plus-communities/trilogy-summerlin/page.tsx",
    needles: [
      '<LeftoverBand path="/55-plus-communities/trilogy-summerlin" />',
      "800+ Shea Homes, $250–$350 HOA, $500K–$1.1M Band",
      "Open plans and first-floor primaries",
    ],
    banned: [">About Trilogy at Summerlin<", "at a Glance", ">Contemporary Home Designs<"],
  },
  {
    file: "app/55-plus-communities/heritage-stonebridge/page.tsx",
    needles: [
      '<LeftoverBand path="/55-plus-communities/heritage-stonebridge" />',
      "1,100+ Homes, $175–$220 HOA, $400K–$750K Band",
      "Downtown Summerlin retail, 12–18 minutes",
    ],
    banned: [">About Heritage at Stonebridge<", "at a Glance", ">Premium Summerlin Location<"],
  },
  {
    file: "app/55-plus-communities/solera-anthem/page.tsx",
    needles: [
      '<LeftoverBand path="/55-plus-communities/solera-anthem" />',
      "1,200+ Homes, $170–$210 HOA, $380K–$650K Band",
      "Anthem parks, staffed gate, 30–35 minutes from Suite 100",
    ],
    banned: [
      ">About Solera at Anthem<",
      "at a Glance",
      ">Location Advantages<",
      "prestigious Anthem",
    ],
  },
];

describe("leftover chassis replacements", () => {
  it("replaces leftover slogan H2 interiors", () => {
    for (const page of pages) {
      const src = readFileSync(join(process.cwd(), page.file), "utf8");
      for (const needle of page.needles) {
        expect(src).toContain(needle);
      }
      for (const banned of page.banned) {
        expect(src).not.toContain(banned);
      }
    }
  });
});
