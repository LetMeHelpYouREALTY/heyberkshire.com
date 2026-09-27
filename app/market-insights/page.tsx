import RealScoutListings from "@/components/realscout/RealScoutListings";
import { TrendingUp } from "lucide-react";
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
  path: "/market-insights",
  title: "Las Vegas Real Estate Market Insights 2026 | Berkshire Hathaway HomeServices",
  description:
    "Technology trends, economic forecasts, and market analysis shaping Las Vegas real estate in 2026. AI, data centers, California migration, and what it means for buyers and sellers. Call (702) 222-1964.",
  keywords: [
    "Las Vegas real estate trends 2026",
    "Las Vegas market forecast",
    "Nevada economic outlook",
    "California to Las Vegas migration",
    "Las Vegas tech hub",
    "Berkshire Hathaway market insights",
  ],
});

const reportSchema = {
  "@context": "https://schema.org",
  "@type": "Report",
  name: "Las Vegas Real Estate Market Insights 2026",
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

export default function MarketInsightsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reportSchema) }}
      />
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
{/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="h-4 w-4 mr-2" />
              2026 Economic & Real Estate Analysis
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Las Vegas Market Insights
            </h1>
            <HeadingPhoto path="/market-insights" />

            <p className="text-xl text-slate-600">
              Technology trends, economic forces, and market dynamics shaping Las Vegas
              real estate in 2026 and beyond.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
          <OfficeProximity path="/market-insights" />
          <UniqueInterior path="/market-insights" />

            </div>
          </div>

          <LeftoverBand path="/market-insights" />
          <LeftoverBand path="/market-insights" slot={1} />
          <LeftoverBand path="/market-insights" slot={2} />
          <LeftoverBand path="/market-insights" slot={3} />
          <LeftoverBand path="/market-insights" slot={4} />
          <LeftoverBand path="/market-insights" slot={5} />

          <ExpertQuote path="/market-insights" />

          <SupportFaqs path="/market-insights" />

          {/* CTA */}
          <section className="text-center bg-purple-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Apply this page to your ZIP at 9406 W Lake Mead Blvd
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Bring the APN or a lender letter. Call (702) 222-1964. Dr. Jan Duffy will not invent a rate or a street price.
            </p>
            <CtaActions variant="onDark" />
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
    </>
  );
}
