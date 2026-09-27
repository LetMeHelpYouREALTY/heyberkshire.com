import RealScoutListings from "@/components/realscout/RealScoutListings";
import { Calendar } from "lucide-react";
import type { Metadata } from "next";
import CtaActions from "@/components/sections/CtaActions";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import SupportFaqs from "@/components/sections/SupportFaqs";
import ExpertQuote from "@/components/sections/ExpertQuote";
import LeftoverBand from "@/components/sections/LeftoverBand";
import { pageMetadata } from "@/lib/seo";


export const metadata: Metadata = pageMetadata({
  path: "/market-update",
  title: "Berkshire Hathaway HomeServices Las Vegas Market Update | January 2026",
  description:
    "Weekly Las Vegas real estate market update from Berkshire Hathaway HomeServices Nevada Properties. Get the latest stats, notable sales, and expert analysis from Dr. Jan Duffy. Call (702) 222-1964.",
  keywords: [
    "Berkshire Hathaway HomeServices Las Vegas market update",
    "Las Vegas real estate market",
    "Las Vegas housing market 2026",
    "Henderson real estate market",
    "Las Vegas home prices",
  ],
});

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Las Vegas Real Estate Market Update - Week of January 20, 2026",
  description:
    "Weekly market analysis from Berkshire Hathaway HomeServices Nevada Properties covering Las Vegas Valley real estate trends, statistics, and expert insights.",
  datePublished: "2026-01-20",
  dateModified: "2026-01-24",
  author: {
    "@type": "Person",
    name: "Dr. Jan Duffy",
    jobTitle: "REALTOR®",
    worksFor: {
      "@type": "RealEstateAgent",
      name: "Berkshire Hathaway HomeServices Nevada Properties",
    },
  },
  publisher: {
    "@type": "Organization",
    name: "Berkshire Hathaway HomeServices Nevada Properties",
    url: "https://heyberkshire.com",
  },
};

export default function MarketUpdatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
{/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              Week of January 20, 2026
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Berkshire Hathaway HomeServices Las Vegas Market Update
            </h1>
            <HeadingPhoto path="/market-update" />

            <p className="text-xl text-slate-600">
              Your weekly insider report on Las Vegas Valley real estate from{" "}
              <strong>Berkshire Hathaway HomeServices Nevada Properties</strong>
            </p>
            <div className="flex items-center justify-center mt-6 text-slate-500 text-sm">
              <span>By Dr. Jan Duffy, REALTOR® | BHHS Nevada Properties</span>
            </div>
            <div className="mt-8">
              <CtaActions variant="onLight" />
          <OfficeProximity path="/market-update" />
          <UniqueInterior path="/market-update" />
          <ExpertQuote path="/market-update" />

            </div>
          </div>

          <LeftoverBand path="/market-update" />
          <LeftoverBand path="/market-update" slot={1} />
          <LeftoverBand path="/market-update" slot={2} />
          <LeftoverBand path="/market-update" slot={3} />
          <LeftoverBand path="/market-update" slot={4} />

          <SupportFaqs path="/market-update" />

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Price this week against your APN at Suite 100
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              $452,500 median is a snapshot. Call (702) 222-1964. Bring the address to 9406 W Lake Mead Blvd.
            </p>
            <CtaActions variant="onDark" />
          </section>

          {/* Newsletter Signup */}
          <section className="mt-16 max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Monday briefing from 9406 W Lake Mead Blvd — not a valley blast
            </h3>
            <p className="text-slate-600 mb-6">
              Join 2,500+ Las Vegas homeowners and investors who receive Dr. Jan's weekly market
              analysis every Monday morning.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="mt-3 text-xs text-slate-500">
              No spam. Unsubscribe anytime. Your data is protected.
            </p>
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-12">
          Last Updated: January 24, 2026 | Data Source: Las Vegas REALTORS® MLS
        </div>
      </main>
      <RealScoutListings />
    </>
  );
}
