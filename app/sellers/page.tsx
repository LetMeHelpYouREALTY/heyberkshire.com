import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  Camera,
  Globe,
  TrendingUp,
  CheckCircle,
  BarChart,
  Users,
  Home,
  Clock,
  Shield,
  ArrowRight,
  Award,
} from "lucide-react";
import type { Metadata } from "next";
import CtaActions from "@/components/sections/CtaActions";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import ExpertQuote from "@/components/sections/ExpertQuote";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import SellerFaqs from "@/components/sections/SellerFaqs";
import LeftoverBand from "@/components/sections/LeftoverBand";
import { pageMetadata } from "@/lib/seo";


export const metadata: Metadata = pageMetadata({
  path: "/sellers",
  title: "Sell Your Las Vegas Home | Berkshire Hathaway HomeServices",
  description:
    "Sell your Las Vegas or Henderson home with Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. Free home valuation. World-class marketing priced to recent comps. Call (702) 222-1964.",
  keywords: [
    "sell home Las Vegas",
    "Las Vegas listing agent",
    "Berkshire Hathaway sell house",
    "Henderson home selling",
    "what is my home worth Las Vegas",
    "Las Vegas real estate agent",
    "Summerlin home selling",
  ],
});

const sellerSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Selling Services Las Vegas",
  provider: {
    "@type": "RealEstateAgent",
    name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
    telephone: "+17025001942",
  },
  areaServed: "Las Vegas, Henderson, Summerlin, Clark County NV",
  serviceType: "Seller Representation",
};

const includedServices = [
  "Professional photography & virtual tour",
  "Drone video for properties with views or large lots",
  "Comprehensive market analysis & pricing strategy",
  "MLS listing syndicated to 100+ websites",
  "Berkshire Hathaway global network exposure",
  "Social media marketing campaign",
  "Targeted digital advertising",
  "Open house coordination",
  "Showing feedback & regular updates",
  "Expert negotiation on all offers",
  "Transaction coordination through closing",
  "Staging consultation with recommendations",
];

export default function SellersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sellerSchema) }}
      />
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Sell Your Las Vegas Home for Top Dollar
            </h1>
            <HeadingPhoto path="/sellers" />

            <p className="text-xl text-slate-600 mb-8">
              When you list with <strong>Berkshire Hathaway HomeServices</strong>, you get
              world-class marketing, expert pricing, and a name that buyers trust. Dr. Jan Duffy 
              has been serving Las Vegas since 2008—helping sellers achieve top-dollar results 
              with proven marketing strategies and skilled negotiation.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Free Home Valuation</span>
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> World-Class Marketing</span>
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Expert Negotiation</span>
            </div>
            <div className="mt-8">
              <CtaActions variant="onLight" />
          <OfficeProximity path="/sellers" />
          <UniqueInterior path="/sellers" />

            </div>
          </div>

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">
              January 2026: $450K median, 28 DOM, 2.1 months inventory — not your APN
            </h2>
<p className="text-slate-300 text-center max-w-3xl mx-auto mb-8">
              The Las Vegas housing market remains favorable for sellers with low inventory and 
              steady demand. Well-priced homes are selling quickly, and appreciation continues 
              to outpace national averages. Here's what sellers need to know about current conditions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+4.2%</div>
                <div className="text-slate-300 text-sm">Year-Over-Year Appreciation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">28 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">2.1 Mo</div>
                <div className="text-slate-300 text-sm">Inventory (Seller's Market)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">98.5%</div>
                <div className="text-slate-300 text-sm">List-to-Sale Price Ratio</div>
              </div>
            </div>
          </section>

          <LeftoverBand path="/sellers" />

          <LeftoverBand path="/sellers" slot={1} />

          <LeftoverBand path="/sellers" slot={2} />

          <ExpertQuote path="/sellers" />

          <LeftoverBand path="/sellers" slot={3} />

          <section className="mb-16 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {includedServices.map((item) => (
                <div key={item} className="flex items-center bg-white p-4 rounded-lg border border-slate-200">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <LeftoverBand path="/sellers" slot={4} />

          <section className="mb-16 text-center max-w-5xl mx-auto">
            <Link
              href="/home-valuation"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-bold hover:bg-blue-700 transition-colors"
            >
              Get Free Valuation
            </Link>
          </section>
          <SellerFaqs path="/sellers" />


          {/* CTA */}
          <section className="text-center bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bring the address to Suite 100 for a January 2026 comp, not a portal guess</h2>
            <p className="text-xl text-slate-300 mb-8">
              Schedule a free listing consultation with Dr. Jan Duffy and discover what your home
              could sell for with Berkshire Hathaway HomeServices. No obligation, no pressure—just 
              honest advice and expert analysis.
            </p>
            <CtaActions variant="onDark" />
          </section>
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
    </>
  );
}
