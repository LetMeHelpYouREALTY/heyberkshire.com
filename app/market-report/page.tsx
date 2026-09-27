import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { TrendingUp, TrendingDown, Home, Calendar, DollarSign, BarChart, Phone } from "lucide-react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CtaActions from "@/components/sections/CtaActions";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import SupportFaqs from "@/components/sections/SupportFaqs";
import ExpertQuote from "@/components/sections/ExpertQuote";
import LeftoverBand from "@/components/sections/LeftoverBand";

export const metadata: Metadata = pageMetadata({
  path: "/market-report",
  title: "Las Vegas Real Estate Market Report January 2026 | Berkshire Hathaway HomeServices",
  description:
    "Get the latest Las Vegas real estate market statistics for January 2026. Median prices, days on market, inventory levels, and expert analysis from Berkshire Hathaway HomeServices Nevada Properties.",
  keywords: [
    "Las Vegas real estate market",
    "Las Vegas home prices 2026",
    "Henderson real estate market",
    "Nevada housing market",
    "Berkshire Hathaway market report",
  ],
});

// Report Schema
const reportSchema = {
  "@context": "https://schema.org",
  "@type": "Report",
  name: "Las Vegas Real Estate Market Report - January 2026",
  author: {
    "@type": "RealEstateAgent",
    name: "Dr. Jan Duffy",
    worksFor: "Berkshire Hathaway HomeServices Nevada Properties",
  },
  datePublished: "2026-01-23",
  about: {
    "@type": "Place",
    name: "Las Vegas, Nevada",
  },
};

export default function MarketReportPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reportSchema) }}
      />
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Market Intelligence
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Las Vegas Real Estate Market Report
            </h1>
            <HeadingPhoto path="/market-report" />

            <p className="text-xl text-slate-600">
              January 2026 | Expert analysis from{" "}
              <strong>Berkshire Hathaway HomeServices Nevada Properties</strong>
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
          <OfficeProximity path="/market-report" />
          <UniqueInterior path="/market-report" />
          <ExpertQuote path="/market-report" />

            </div>
          </div>

          {/* Key Stats Overview */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              January 2026: $450K median, 28 DOM, 4,850 listings, 2.1 months inventory
            </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">$450,000</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
                <div className="flex items-center justify-center mt-1 text-green-400 text-sm">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  +4.2% YoY
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">28</div>
                <div className="text-slate-300 text-sm">Days on Market</div>
                <div className="flex items-center justify-center mt-1 text-green-400 text-sm">
                  <TrendingDown className="h-4 w-4 mr-1" />
                  -3 days
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">4,850</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
                <div className="flex items-center justify-center mt-1 text-yellow-400 text-sm">
                  +12% YoY
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">2.1</div>
                <div className="text-slate-300 text-sm">Months Inventory</div>
                <div className="flex items-center justify-center mt-1 text-slate-400 text-sm">
                  Seller's Market
                </div>
              </div>
            </div>
          </section>

          <LeftoverBand path="/market-report" />

          <LeftoverBand path="/market-report" slot={1} />

          {/* Buyer and seller takeaways */}
          <section className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              What the January 2026 snapshot means at Suite 100
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                  <Home className="h-5 w-5 text-blue-600 mr-2" />
                  For Buyers
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• More inventory = more choices</li>
                  <li>• Negotiating power is returning</li>
                  <li>• Interest rates stabilizing around 6.5%</li>
                  <li>• New construction offering incentives</li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <h3 className="font-bold text-slate-900 mb-4 flex items-center">
                  <DollarSign className="h-5 w-5 text-green-600 mr-2" />
                  For Sellers
                </h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Still a seller's market (2.1 months inventory)</li>
                  <li>• Proper pricing is crucial</li>
                  <li>• 4.2% appreciation in past year</li>
                  <li>• Well-priced homes sell in under 30 days</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Market Trends */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              California inbound, builder credits, $1M+ streets — apply at Suite 100
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">California Migration</h3>
                <p className="text-slate-600 text-sm">
                  Continued influx of California buyers seeking affordability and no state income
                  tax. Summerlin and Henderson remain top destinations.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Home className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">New Construction</h3>
                <p className="text-slate-600 text-sm">
                  Builders offering significant incentives including rate buydowns, closing cost
                  credits, and upgrades. Great time for new home buyers.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <BarChart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Luxury Strength</h3>
                <p className="text-slate-600 text-sm">
                  The $1M+ segment showing strongest appreciation at 8.5% YoY. The Ridges and
                  Southern Highlands leading the luxury market.
                </p>
              </div>
            </div>
          </section>

          <SupportFaqs path="/market-report" />

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bring your APN to Suite 100 for a ZIP-level CMA
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Want to know what these numbers mean for your specific neighborhood or situation? Dr.
              Jan Duffy provides free market consultations.
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
