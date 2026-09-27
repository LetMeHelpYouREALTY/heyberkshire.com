import RealScoutListings from "@/components/realscout/RealScoutListings";
import RealScoutHomeValue from "@/components/realscout/RealScoutHomeValue";
import CalendlyWidget from "@/components/calendly/CalendlyWidget";
import Link from "next/link";
import { Phone, CheckCircle } from "lucide-react";
import type { Metadata } from "next";
import CtaActions from "@/components/sections/CtaActions";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import ExpertQuote from "@/components/sections/ExpertQuote";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import IntentFaqs from "@/components/sections/IntentFaqs";
import LeftoverBand from "@/components/sections/LeftoverBand";
import { pageMetadata } from "@/lib/seo";


export const metadata: Metadata = pageMetadata({
  path: "/home-valuation",
  title: "Free Home Valuation Las Vegas | What's Your Home Worth? | Berkshire Hathaway HomeServices",
  description:
    "Get a free, accurate home valuation in Las Vegas from Dr. Jan Duffy at Berkshire Hathaway HomeServices. Expert CMA analysis for Summerlin, Henderson, Green Valley & all Las Vegas neighborhoods. Call (702) 222-1964.",
  keywords: [
    "home valuation Las Vegas",
    "what is my home worth Las Vegas",
    "free home value estimate",
    "CMA Las Vegas",
    "Berkshire Hathaway home valuation",
    "Summerlin home value",
    "Henderson home value",
  ],
});


export default function HomeValuationPage() {
  return (
    <>
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
{/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              What's Your Las Vegas Home Worth?
            </h1>
            <HeadingPhoto path="/home-valuation" />

            <p className="text-xl text-slate-600">
              Get a free, no-obligation home valuation from Dr. Jan Duffy at{" "}
              <strong>Berkshire Hathaway HomeServices</strong>. Accurate pricing backed by 17+ years
              of Las Vegas market expertise and $127M+ in closed transactions.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" bookLabel="Book a Valuation" />
          <OfficeProximity path="/home-valuation" />
          <UniqueInterior path="/home-valuation" />

            </div>
          </div>

          <section className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-3 text-center">
              RealScout estimate first, then a dated CMA at Suite 100
            </h2>
<p className="text-slate-600 text-center mb-6">
              Enter your Las Vegas or Henderson address for a live estimate, then book a CMA with
              Dr. Jan Duffy for a price backed by recent comps.
            </p>
            <RealScoutHomeValue />
          </section>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
            {/* Calendly Widget */}
            <div className="bg-white border border-slate-200 rounded-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-4 text-center">
                <h2 className="text-2xl font-bold">Book the CMA at Suite 100 — Calendly on this column</h2>
                <p className="text-blue-100 text-sm mt-1">
                  Book a consultation with Dr. Jan Duffy
                </p>
              </div>
              <CalendlyWidget url="showing" height="650px" />
              <p className="text-xs text-slate-500 text-center p-4 border-t border-slate-200">
                No obligation. No pressure. Just accurate information from Berkshire Hathaway
                HomeServices.
              </p>
            </div>

            {/* Value Prop */}
            <div className="space-y-8">
              <div className="bg-slate-900 text-white rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">APN at Suite 100 — comps, not a portal screenshot</h2>
                <p className="text-slate-300 mb-6">
                  Online estimators like Zillow's "Zestimate" can be off by 10% or more—that's
                  $45,000+ on a typical Las Vegas home. Dr. Jan Duffy provides a comprehensive
                  market analysis using current MLS data, recent comparable sales, and her expertise
                  serving Las Vegas since 2008. The result? Accurate pricing that helps you sell
                  faster and for more money.
                </p>
                <div className="space-y-3">
                  {[
                    "Accurate pricing based on actual market data",
                    "Consideration of your home's unique features",
                    "Current buyer demand analysis",
                    "Neighborhood-specific insights",
                    "No obligation or pressure to sell",
                  ].map((item) => (
                    <div key={item} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Market Stats */}
              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="font-bold text-slate-900 mb-4">Las Vegas Market | January 2026</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">$450K</div>
                    <div className="text-sm text-slate-600">Median Home Price</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">+4.2%</div>
                    <div className="text-sm text-slate-600">YoY Appreciation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">28 Days</div>
                    <div className="text-sm text-slate-600">Avg. Days on Market</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">2.1 Mo</div>
                    <div className="text-sm text-slate-600">Inventory</div>
                  </div>
                </div>
              </div>

          <ExpertQuote path="/home-valuation" />

              {/* Call Option */}
              <div className="text-center">
                <p className="text-slate-600 mb-4">Prefer to talk? Call Dr. Jan directly:</p>
                <a
                  href="tel:+17022221964"
                  className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-bold transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  (702) 222-1964
                </a>
              </div>
            </div>
          </div>

          <LeftoverBand path="/home-valuation" />

          <LeftoverBand path="/home-valuation" slot={1} />

          {/* Neighborhood Values */}
          <section className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              January 2026 medians: Summerlin $625K, Henderson $485K, NLV $385K — not your APN
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-slate-200 rounded-lg">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Neighborhood</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Median Price</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">YoY Change</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Avg $/SqFt</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { area: "Summerlin", price: "$625,000", change: "+6.8%", sqft: "$285" },
                    { area: "Henderson", price: "$485,000", change: "+5.1%", sqft: "$245" },
                    { area: "Green Valley", price: "$520,000", change: "+4.5%", sqft: "$255" },
                    { area: "Southern Highlands", price: "$750,000", change: "+5.5%", sqft: "$295" },
                    { area: "North Las Vegas", price: "$385,000", change: "+3.2%", sqft: "$210" },
                    { area: "Centennial Hills", price: "$495,000", change: "+4.8%", sqft: "$240" },
                  ].map((row, index) => (
                    <tr key={row.area} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-6 py-4 font-medium text-slate-900">{row.area}</td>
                      <td className="px-6 py-4 text-slate-700">{row.price}</td>
                      <td className="px-6 py-4 text-green-600 font-medium">{row.change}</td>
                      <td className="px-6 py-4 text-slate-700">{row.sqft}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-slate-500 text-sm mt-4">
              Values represent single-family homes. Your specific home may vary based on features and condition.
            </p>
          </section>

          {/* The Valuation Process */}
          <section className="max-w-5xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              APN, street comps, then a dated CMA at Suite 100 — four steps
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Share Your Property Details</h3>
                  <p className="text-slate-600">
                    Schedule a consultation through the calendar above or call Dr. Jan directly.
                    Provide your address, basic property information, and any recent upgrades or
                    improvements you've made. Photos are helpful but not required initially.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Comprehensive Market Analysis</h3>
                  <p className="text-slate-600">
                    Dr. Jan researches recent comparable sales, current active listings, and expired
                    listings in your area. She analyzes price trends, days on market, and buyer
                    demand specific to your neighborhood and property type.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Feature Adjustments</h3>
                  <p className="text-slate-600">
                    Your home's unique features are factored in: upgrades, lot characteristics,
                    views, pool, solar, and condition. These adjustments ensure the valuation
                    reflects what buyers will actually pay for your specific property.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Pricing Strategy Consultation</h3>
                  <p className="text-slate-600">
                    Within 24-48 hours, you'll receive a detailed CMA report with a recommended
                    price range. Dr. Jan will walk you through the data, explain the methodology,
                    and answer any questions—with absolutely no pressure to list.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <IntentFaqs path="/home-valuation" />


          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bring the APN to Suite 100 — (702) 222-1964 or Calendly
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free, no-obligation home valuation from Dr. Jan Duffy and Berkshire Hathaway
              HomeServices Nevada Properties. Accurate pricing. Expert guidance. Zero pressure.
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
