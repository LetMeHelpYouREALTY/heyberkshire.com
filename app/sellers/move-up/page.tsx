import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  TrendingUp,
  Home as HomeIcon,
  ArrowRight,
  DollarSign,
  CheckCircle,
  Calendar,
  Shield,
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
  path: "/sellers/move-up",
  title: "Move-Up Sellers Las Vegas | Berkshire Hathaway HomeServices",
  description:
    "Ready for your next chapter? Dr. Jan Duffy helps Las Vegas homeowners leverage equity into their dream home. Sell and buy seamlessly. Call (702) 222-1964.",
  keywords: [
    "move up buyer Las Vegas",
    "sell and buy Las Vegas",
    "home equity Las Vegas",
    "upgrade home Las Vegas",
    "Berkshire Hathaway HomeServices seller",
  ],
});

export default function MoveUpSellerPage() {
  return (
    <>
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
{/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <TrendingUp className="h-4 w-4 mr-2" />
              Your Equity Unlocks Your Dream Home
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Ready for Your Next Chapter?
            </h1>
            <HeadingPhoto path="/sellers/move-up" />

            <p className="text-xl text-slate-600 mb-8">
              Your home's equity unlocks your dream home. Let's make the upgrade seamless.
            </p>
            <CtaActions variant="onLight" />
          <OfficeProximity path="/sellers/move-up" />
          <UniqueInterior path="/sellers/move-up" />

          </div>

          <LeftoverBand path="/sellers/move-up" />

          <LeftoverBand path="/sellers/move-up" slot={1} />

          {/* Upgrade Path */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-center">
                <div className="flex-shrink-0 mr-6">
                  <div className="bg-blue-100 rounded-full p-3">
                    <HomeIcon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-slate-900 mb-1">Centennial Hills → Summerlin</h3>
                  <p className="text-slate-600 text-sm">
                    Upgrade from $450K starter to $650K+ in Downtown Summerlin. Palo Verde High
                    School commute, walkable amenities, Red Rock views.
                  </p>
                </div>
                <ArrowRight className="h-6 w-6 text-blue-600 flex-shrink-0 ml-4" />
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-center">
                <div className="flex-shrink-0 mr-6">
                  <div className="bg-green-100 rounded-full p-3">
                    <HomeIcon className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-slate-900 mb-1">Green Valley → MacDonald Ranch</h3>
                  <p className="text-slate-600 text-sm">
                    Move from Green Valley ($520K) to MacDonald Ranch / luxury Henderson ($800K+).
                    Larger lots, custom features, mountain views.
                  </p>
                </div>
                <ArrowRight className="h-6 w-6 text-green-600 flex-shrink-0 ml-4" />
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6 flex items-center">
                <div className="flex-shrink-0 mr-6">
                  <div className="bg-purple-100 rounded-full p-3">
                    <HomeIcon className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="font-bold text-slate-900 mb-1">Inspirada → Southern Highlands</h3>
                  <p className="text-slate-600 text-sm">
                    Inspirada (~$525K published January 2026) to Southern Highlands (~$750K+).
                    Guard-gated streets and Robert Trent Jones Jr. card 74.1 / 140. Confirm the week you tour.
                  </p>
                </div>
                <ArrowRight className="h-6 w-6 text-purple-600 flex-shrink-0 ml-4" />
              </div>
            </div>
          </section>

          <LeftoverBand path="/sellers/move-up" slot={2} />

          {/* How We Handle Both */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  The Sell Side
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Strategic pricing to maximize your equity
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Professional staging and photography
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Negotiate contingencies that protect your purchase
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Coordinate closing timelines
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  The Buy Side
                </h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Priority access to new listings in target neighborhoods
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Competitive offers backed by pre-approval
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Bridge financing options if timing doesn't align
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    Negotiate seller credits and contingencies
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <LeftoverBand path="/sellers/move-up" slot={3} />

          {/* Timing Strategies */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700 mb-8">
              <p>
                The biggest concern move-up buyers have is timing. What happens if you sell before
                finding your next home? What if you find your dream home but can't sell in time?
                <strong> Berkshire Hathaway HomeServices</strong> agents like Dr. Jan Duffy have
                strategies for every scenario, ensuring you never end up homeless or paying two
                mortgages unnecessarily.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-blue-600 font-bold text-xl">1</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Sell First, Then Buy</h3>
                <p className="text-slate-600 text-sm mb-4">
                  The safest approach: sell your home, secure your equity, then purchase with
                  confidence and negotiating power.
                </p>
                <div className="text-sm">
                  <p className="text-green-600 font-medium">Best for:</p>
                  <p className="text-slate-500">Risk-averse buyers; competitive purchase markets</p>
                  <p className="text-amber-600 font-medium mt-2">Consider:</p>
                  <p className="text-slate-500">May need temporary housing; rent-back negotiation possible</p>
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-green-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-green-600 font-bold text-xl">2</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Buy First, Then Sell</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Lock in your dream home before listing. Requires bridge financing or sufficient
                  reserves to carry two properties temporarily.
                </p>
                <div className="text-sm">
                  <p className="text-green-600 font-medium">Best for:</p>
                  <p className="text-slate-500">Buyers with strong equity or savings; hot seller's markets</p>
                  <p className="text-amber-600 font-medium mt-2">Consider:</p>
                  <p className="text-slate-500">Bridge loan costs; carrying costs if sale delays</p>
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <span className="text-purple-600 font-bold text-xl">3</span>
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Simultaneous Close</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Sell and buy on the same day. Requires precise coordination and contingency
                  management, but eliminates double-moving and temporary housing.
                </p>
                <div className="text-sm">
                  <p className="text-green-600 font-medium">Best for:</p>
                  <p className="text-slate-500">Experienced buyers; balanced markets; strong coordination</p>
                  <p className="text-amber-600 font-medium mt-2">Consider:</p>
                  <p className="text-slate-500">Higher stress; requires flexible closing dates</p>
                </div>
              </div>
            </div>
          </section>

          <LeftoverBand path="/sellers/move-up" slot={4} />

          {/* Financing Options */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <p className="text-slate-300 text-center mb-8 max-w-3xl mx-auto">
              Understanding your financing options is crucial for a successful move-up transaction.
              Dr. Jan works with trusted local lenders who specialize in helping Las Vegas homeowners
              leverage their equity into their next home.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-xl p-6">
                <DollarSign className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="font-bold text-lg mb-2">Bridge Loans</h3>
                <p className="text-slate-300 text-sm">
                  Short-term financing that lets you use your current home's equity as a down payment
                  before selling. Typically 6-12 month terms with interest-only payments. Rates are
                  higher than traditional mortgages but provide flexibility.
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <DollarSign className="h-8 w-8 text-blue-400 mb-4" />
                <h3 className="font-bold text-lg mb-2">Home Equity Line of Credit (HELOC)</h3>
                <p className="text-slate-300 text-sm">
                  Access your equity before selling to fund your down payment. Must be established
                  in advance (typically 30-45 days). Lower rates than bridge loans but requires
                  planning ahead.
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <Shield className="h-8 w-8 text-purple-400 mb-4" />
                <h3 className="font-bold text-lg mb-2">Sale Contingency</h3>
                <p className="text-slate-300 text-sm">
                  Make your purchase offer contingent on selling your current home. Less common in
                  competitive markets, but can work with motivated sellers or longer closing windows.
                  Dr. Jan knows how to structure these offers effectively.
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <Calendar className="h-8 w-8 text-amber-400 mb-4" />
                <h3 className="font-bold text-lg mb-2">Rent-Back Agreement</h3>
                <p className="text-slate-300 text-sm">
                  Sell your home but remain as a renter for 30-60 days while you close on your new
                  property. Provides breathing room without needing temporary housing. Common and
                  often negotiable in today's market.
                </p>
              </div>
            </div>
          </section>

          <ExpertQuote path="/sellers/move-up" />
          <SellerFaqs path="/sellers/move-up" />


          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              January 2026 CMA on this APN at Suite 100, not a slogan
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free equity analysis and see what your next home could look like.
              Dr. Jan will show you the numbers and create a strategic plan.
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
