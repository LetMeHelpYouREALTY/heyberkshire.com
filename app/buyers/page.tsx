import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  CheckCircle,
  Shield,
  MapPin,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";
import CtaActions from "@/components/sections/CtaActions";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import ExpertQuote from "@/components/sections/ExpertQuote";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import BuyerFaqs from "@/components/sections/BuyerFaqs";
import ProcessSteps from "@/components/sections/ProcessSteps";
import LeftoverBand from "@/components/sections/LeftoverBand";
import { pageMetadata } from "@/lib/seo";


export const metadata: Metadata = pageMetadata({
  path: "/buyers",
  title: "Home Buying Guide Las Vegas | Berkshire Hathaway HomeServices",
  description:
    "Looking to buy a home in Las Vegas? Dr. Jan Duffy with Berkshire Hathaway HomeServices Nevada Properties guides you through every step. Free buyer consultation. Call (702) 222-1964.",
  keywords: [
    "buy home Las Vegas",
    "Las Vegas home buyer",
    "Berkshire Hathaway buyer agent",
    "Henderson homes for sale",
    "first time home buyer Las Vegas",
    "California relocation Las Vegas",
    "55+ communities Las Vegas",
  ],
});

const buyerSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Buying Services Las Vegas",
  provider: {
    "@type": "RealEstateAgent",
    name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
    telephone: "+17025001942",
  },
  areaServed: "Las Vegas, Henderson, Summerlin, Clark County NV",
  serviceType: "Buyer Representation",
};

const neighborhoods = [
  { name: "Summerlin", price: "$625K", description: "10–15 minutes from Suite 100. Red Rock trailheads and Downtown Summerlin on the same west clock." },
  { name: "Henderson", price: "$485K", description: "25–35 minutes via I-215 east. Parks, trails, and named villages compared by square footage." },
  { name: "Green Valley", price: "$520K", description: "35-year street trees and The District. Green Valley High School commute mapped by address." },
  { name: "The Ridges", price: "$2.5M", description: "15–20 minutes to the guardhouse. Gate lists confirmed from Suite 100." },
  { name: "North Las Vegas", price: "$385K", description: "Aliante rec and Craig Road employers first — not a Summerlin swap." },
  { name: "Southern Highlands", price: "$750K", description: "25–35 minutes via I-15 south. Robert Trent Jones Jr. course on that clock." },
];

export default function BuyersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buyerSchema) }}
      />
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Buy Your Las Vegas Home with Confidence
            </h1>
            <HeadingPhoto path="/buyers" />

            <p className="text-xl text-slate-600 mb-8">
              When you work with a <strong>Berkshire Hathaway HomeServices</strong> buyer's agent,
              the seller-paid buyer-broker fee is explained at Suite 100 — and it costs you nothing
              at the closing table. The representation is yours.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Free Buyer Representation</span>
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Full MLS Access</span>
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Inspection coordination</span>
            </div>
            <div className="mt-8">
              <CtaActions variant="onLight" />
          <OfficeProximity path="/buyers" />
          <UniqueInterior path="/buyers" />

            </div>
          </div>

          {/* Value Prop */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">The seller pays the buyer-broker fee — the file is still yours</h2>
<p className="text-slate-300 mb-6">
                  Buyer representation is explained at Suite 100. The seller typically pays the
                  buyer-broker fee, and the agency file is yours.{" "}
                  <strong>Berkshire Hathaway HomeServices</strong> agents write offers, inspections,
                  and occupancy dates for the buyer — not the listing agent. Call (702) 222-1964.
                </p>
                <ul className="space-y-2">
                  {[
                    "Full MLS access + off-market opportunities",
                    "Expert negotiation on your behalf",
                    "Contract and disclosure review",
                    "Inspection coordination and repair negotiation",
                    "Lender and service provider referrals",
                    "Local market expertise since 2008",
                  ].map((item) => (
                    <li key={item} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-slate-800 rounded-lg p-8 text-center">
                <Shield className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                <p className="text-2xl font-bold mb-2">Your Agent, Your Advocate</p>
                <p className="text-slate-400 mb-4">
                  Dr. Jan Duffy works exclusively for your interests throughout the entire
                  transaction—from the first showing to the closing table and beyond.
                </p>
                <div className="text-sm text-slate-500">
                  Serving Las Vegas since 2008 | $127M+ in transactions
                </div>
              </div>
            </div>
          </section>

          <ProcessSteps path="/buyers" />

          {/* Neighborhood Guide */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              January 2026 medians by village — then we time the drive from Suite 100
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Published January 2026 bands, not a live quote. Square footage, HOA dues, and commute
              minutes from 9406 W Lake Mead Blvd beat a slogan. Named campuses are mapped by address
              at ccsd.net/zoning.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {neighborhoods.map((neighborhood) => (
                <div
                  key={neighborhood.name}
                  className="bg-white rounded-lg p-4 border border-slate-200"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-bold text-slate-900">{neighborhood.name}</h3>
                    <span className="text-blue-600 font-semibold">{neighborhood.price}</span>
                  </div>
                  <p className="text-slate-600 text-sm">{neighborhood.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                href="/neighborhoods"
                className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center"
              >
                Explore All Neighborhoods <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </section>

          {/* Buyer Types */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              California, first-time, or $1M+ — three different first desks
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              First-time paperwork is FHA/VA at Suite 100. California relocators compare net proceeds
              to ZIP targets, then a three-day itinerary. Luxury buyers confirm gate lists here.
              Call (702) 222-1964.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/buyers/california-relocator"
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="text-3xl mb-4">🌴</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600">
                  California Relocators
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  0% state income tax, 40-60% lower home prices. See what your CA equity buys in 
                  Las Vegas. Dr. Jan specializes in helping California buyers transition to Nevada.
                </p>
                <span className="text-blue-600 font-semibold text-sm">Learn More →</span>
              </Link>
              <Link
                href="/buyers/first-time-buyers"
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="text-3xl mb-4">🔑</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600">
                  First-Time Buyers
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  Down payment assistance programs, FHA/VA loans, and builder incentives explained. 
                  Step-by-step guidance through your first home purchase.
                </p>
                <span className="text-blue-600 font-semibold text-sm">Learn More →</span>
              </Link>
              <Link
                href="/buyers/luxury-homes-las-vegas"
                className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="text-3xl mb-4">💎</div>
                <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-blue-600">
                  Luxury Home Buyers
                </h3>
                <p className="text-slate-600 text-sm mb-3">
                  $1M+ properties with discrete service. The Ridges, MacDonald Highlands, Southern 
                  Highlands, and Las Vegas Strip views. Off-market opportunities available.
                </p>
                <span className="text-blue-600 font-semibold text-sm">Learn More →</span>
              </Link>
            </div>
          </section>

          {/* Why BHHS */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="scroll-mt-32 text-3xl font-bold text-slate-900 mb-4 text-center">
              Buyer-agency paperwork at Suite 100 before any model row
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Representation is signed at 9406 W Lake Mead Blvd, Suite 100. License S.0197614.LLC
              is on the card. Call (702) 222-1964 before the first builder visit.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Buyer-agency form at the desk</h3>
                <p className="text-slate-600 text-sm">
                  BHHS Nevada Properties is on the form. We do not walk models unregistered.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">California-to-Nevada referral desk</h3>
                <p className="text-slate-600 text-sm">
                  50,000+ BHHS agents for a West Coast sale timed against a Las Vegas purchase
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">West-valley start, then the listing street</h3>
                <p className="text-slate-600 text-sm">
                  Dr. Jan has served Las Vegas since 2008 with $127M+ in transactions from Suite 100
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Offer math at 9406 W Lake Mead Blvd</h3>
                <p className="text-slate-600 text-sm">
                  500+ closed files. Escalation and inspection terms are written at the desk.
                </p>
              </div>
            </div>
          </section>

          <ExpertQuote path="/buyers" />

          <LeftoverBand path="/buyers" />
          <BuyerFaqs path="/buyers" />


          {/* CTA */}
          <section className="text-center bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Register as buyer agent at 9406 W Lake Mead Blvd before any model</h2>
            <p className="text-xl text-slate-300 mb-8">
              Questions about buying in Las Vegas? Call or text Dr. Jan Duffy for a free buyer
              consultation. Get expert guidance backed by Berkshire Hathaway HomeServices—the 
              seller pays the commission, so representation is free for you.
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
