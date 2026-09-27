import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Clock,
  CheckCircle,
  AlertTriangle,
  MapPin,
  Calendar,
} from "lucide-react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CtaActions from "@/components/sections/CtaActions";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import ExpertQuote from "@/components/sections/ExpertQuote";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import IntentFaqs from "@/components/sections/IntentFaqs";
import LeftoverBand from "@/components/sections/LeftoverBand";
import RealScoutSearch from "@/components/realscout/RealScoutSearch";


export const metadata: Metadata = pageMetadata({
  path: "/new-construction",
  title: "Berkshire Hathaway HomeServices New Construction Las Vegas | Buyer's Guide",
  description:
    "Free buyer representation on new construction homes in Las Vegas. Dr. Jan Duffy helps you navigate builder contracts, negotiate upgrades, and secure incentives. Call (702) 222-1964.",
  keywords: [
    "Berkshire Hathaway HomeServices new construction Las Vegas",
    "new homes Las Vegas",
    "new construction Henderson",
    "Las Vegas builders",
    "Toll Brothers Las Vegas",
    "Lennar Las Vegas",
    "KB Home Las Vegas",
  ],
});


const builders = [
  {
    name: "Toll Brothers",
    segment: "Luxury",
    priceRange: "$600,000 - $2,500,000+",
    communities: [
      "Summerlin (Mesa Ridge, Reverence)",
      "Henderson (Inspirada, Lake Las Vegas)",
      "The Ridges",
    ],
    currentIncentives: "Up to $50K in design studio credits on select inventory",
    incentiveDeadline: "February 28, 2026",
    highlights: [
      "Luxury finishes standard",
      "Highly customizable floor plans",
      "Mesa Ridge, Reverence, Inspirada",
    ],
  },
  {
    name: "Lennar",
    segment: "Production",
    priceRange: "$380,000 - $900,000",
    communities: [
      "Summerlin (various)",
      "Henderson (Cadence, Inspirada)",
      "North Las Vegas (Valley Vista)",
      "Southwest (Skye Hills)",
    ],
    currentIncentives: "4.99% rate buydown + $25K toward closing with Lennar Mortgage",
    incentiveDeadline: "January 31, 2026",
    highlights: [
      "Everything's Included® packages",
      "Smart home technology standard",
      "Wide price range",
    ],
  },
  {
    name: "KB Home",
    segment: "Entry-Level to Mid-Range",
    priceRange: "$350,000 - $650,000",
    communities: [
      "North Las Vegas (multiple)",
      "Southwest Las Vegas",
      "Henderson",
    ],
    currentIncentives: "Up to 6% closing cost credit + free premium lot on select homes",
    incentiveDeadline: "February 15, 2026",
    highlights: [
      "Built to Order™ customization",
      "Energy-efficient construction",
      "Built to Order rows in North Las Vegas",
    ],
  },
  {
    name: "Taylor Morrison",
    segment: "Mid-Range to Luxury",
    priceRange: "$450,000 - $1,200,000",
    communities: [
      "Summerlin",
      "Henderson (Cadence, Lake Las Vegas)",
      "Mountains Edge",
    ],
    currentIncentives: "$30K flex credit on quick move-in homes",
    incentiveDeadline: "Rolling (inventory dependent)",
    highlights: [
      "Award-winning designs",
      "Strong energy efficiency",
      "Quality construction reputation",
    ],
  },
  {
    name: "Pulte Homes",
    segment: "Mid-Range",
    priceRange: "$400,000 - $800,000",
    communities: [
      "Henderson (Inspirada)",
      "North Las Vegas",
      "Southwest Las Vegas",
    ],
    currentIncentives: "Up to $20K design center credit + rate buydown",
    incentiveDeadline: "January 31, 2026",
    highlights: [
      "Life Tested® floor plans",
      "Consumer-focused designs",
      "Strong warranty program",
    ],
  },
  {
    name: "Richmond American",
    segment: "Entry-Level to Mid-Range",
    priceRange: "$380,000 - $700,000",
    communities: [
      "North Las Vegas",
      "Henderson",
      "Southwest Las Vegas",
    ],
    currentIncentives: "Up to $15K HomeGallery credit + 5.25% rate with preferred lender",
    incentiveDeadline: "February 28, 2026",
    highlights: [
      "PersonalizedSM options",
      "Wide community selection",
      "Flexible designs",
    ],
  },
  {
    name: "Shea Homes",
    segment: "55+ & Luxury",
    priceRange: "$500,000 - $1,100,000",
    communities: [
      "Trilogy at Summerlin (55+)",
      "Trilogy at Inspirada (55+)",
    ],
    currentIncentives: "Resort membership included + up to $40K in upgrades",
    incentiveDeadline: "Ongoing",
    highlights: [
      "Award-winning 55+ communities",
      "Resort-style amenities",
      "Innovative designs",
    ],
  },
  {
    name: "Century Communities",
    segment: "Entry-Level",
    priceRange: "$320,000 - $550,000",
    communities: [
      "North Las Vegas",
      "Southwest Las Vegas",
      "Pahrump",
    ],
    currentIncentives: "Up to 5% closing costs + appliance package",
    incentiveDeadline: "January 31, 2026",
    highlights: [
      "Most affordable new construction",
      "First-time buyer programs",
      "Quick move-in inventory",
    ],
  },
];

export default function NewConstructionPage() {
  return (
    <>
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
{/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Free Buyer Representation
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Berkshire Hathaway HomeServices New Construction Las Vegas
            </h1>
            <HeadingPhoto path="/new-construction" />

            <p className="text-xl text-slate-600 mb-8">
              Your complete buyer's guide to new homes in Las Vegas. Free representation,
              expert contract review, and insider knowledge of builder incentives.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-left max-w-2xl mx-auto mb-8">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-900 mb-1">
                    Important: Register Dr. Jan Duffy as Your Agent FIRST
                  </h3>
                  <p className="text-amber-800 text-sm">
                    Most builders require agent registration on your <strong>first visit</strong>.
                    Call <a href="tel:+17022221964" className="font-bold underline">(702) 222-1964</a> to 
                    register Dr. Jan Duffy as your buyer's agent before visiting any model home—or you 
                    may lose your right to free professional representation.
                  </p>
                </div>
              </div>
            </div>
            <CtaActions variant="onLight" bookLabel="Register Before You Tour" />
          <OfficeProximity path="/new-construction" />
          <UniqueInterior path="/new-construction" />

            <div className="mt-8 max-w-xl mx-auto">
              <p className="text-sm font-semibold text-slate-700 mb-3">Search live MLS inventory</p>
              <RealScoutSearch />
            </div>
          </div>

          <LeftoverBand path="/new-construction" />

          {/* Current Incentives Alert */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
              <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                  <Calendar className="h-7 w-7 text-green-600 mr-3" />
                  January 2026 Builder Incentives
                </h2>
                <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Limited Time Offers
                </span>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-5 border border-green-100">
                  <div className="text-3xl font-bold text-green-600 mb-1">4.99%</div>
                  <div className="text-slate-700 font-medium">Rate Buydowns</div>
                  <div className="text-slate-500 text-sm mt-1">
                    Multiple builders offering sub-5% rates with preferred lenders
                  </div>
                </div>
                <div className="bg-white rounded-xl p-5 border border-green-100">
                  <div className="text-3xl font-bold text-green-600 mb-1">$50K+</div>
                  <div className="text-slate-700 font-medium">Upgrade Credits</div>
                  <div className="text-slate-500 text-sm mt-1">
                    Design center and premium options at no additional cost
                  </div>
                </div>
                <div className="bg-white rounded-xl p-5 border border-green-100">
                  <div className="text-3xl font-bold text-green-600 mb-1">6%</div>
                  <div className="text-slate-700 font-medium">Closing Cost Credits</div>
                  <div className="text-slate-500 text-sm mt-1">
                    Significant credits to offset buyer closing costs
                  </div>
                </div>
              </div>
              <p className="text-center text-slate-600 mt-6">
                Incentives change frequently. Contact Dr. Jan Duffy for current offers specific
                to your preferred communities.
              </p>
            </div>
          </section>

          {/* Builders Grid */}
          <LeftoverBand path="/new-construction" slot={1} />
          <section className="mb-16 max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-6">
              {builders.map((builder) => (
                <div
                  key={builder.name}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="bg-slate-900 text-white p-5 flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold">{builder.name}</h3>
                      <span className="text-slate-400 text-sm">{builder.segment}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-blue-400 font-bold">{builder.priceRange}</div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="mb-4">
                      <div className="text-xs text-slate-500 uppercase tracking-wide mb-2">
                        Current Communities
                      </div>
                      <ul className="text-sm text-slate-600 space-y-1">
                        {builder.communities.map((community) => (
                          <li key={community} className="flex items-center">
                            <MapPin className="h-3 w-3 text-slate-400 mr-2" />
                            {community}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-green-50 rounded-lg p-4 mb-4">
                      <div className="text-xs text-green-700 uppercase tracking-wide mb-1">
                        Current Incentive
                      </div>
                      <div className="text-slate-900 font-medium text-sm">
                        {builder.currentIncentives}
                      </div>
                      <div className="text-xs text-slate-500 mt-1 flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        Deadline: {builder.incentiveDeadline}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {builder.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* The Process */}
          <LeftoverBand path="/new-construction" slot={2} />
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">
                    Register Dr. Jan Duffy as Your Agent BEFORE Visiting
                  </h3>
                  <p className="text-slate-600">
                    Call{" "}
                    <a href="tel:+17022221964" className="text-blue-600 font-semibold hover:underline">
                      (702) 222-1964
                    </a>{" "}
                    to register Dr. Jan Duffy as your buyer's agent before any builder visits. We'll 
                    discuss your needs, budget, and preferred locations, then accompany you to model homes.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">
                    Explore Communities & Compare Builders
                  </h3>
                  <p className="text-slate-600">
                    Tour model homes, review floor plans, and understand what's included vs.
                    upgrades. Dr. Jan provides objective comparisons—no builder pays us more than
                    another.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">
                    Negotiate Contract & Design Center Selections
                  </h3>
                  <p className="text-slate-600">
                    We review the purchase agreement, negotiate upgrades and incentives, and guide
                    you through design center selections. Many buyers overspend here—we help you
                    prioritize.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">
                    Monitor Construction & Conduct Walkthroughs
                  </h3>
                  <p className="text-slate-600">
                    We schedule walkthroughs at key stages: framing, pre-drywall (when systems are
                    visible), and final. Issues caught early are fixed properly.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  5
                </div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">
                    Final Walkthrough & Closing
                  </h3>
                  <p className="text-slate-600">
                    Comprehensive final inspection with punch list creation. We ensure everything
                    promised is delivered before you take possession of your new home.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <ExpertQuote path="/new-construction" />
          <IntentFaqs path="/new-construction" />


          {/* What We Negotiate */}
          <LeftoverBand path="/new-construction" slot={3} />
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Closing cost credits",
                "Rate buydowns",
                "Design center credits",
                "Free premium lot",
                "Upgraded flooring",
                "Appliance packages",
                "Extended warranties",
                "Landscaping packages",
                "Pool/spa credits",
                "Solar panel inclusion",
                "Garage upgrades",
                "Smart home packages",
              ].map((item) => (
                <div key={item} className="flex items-center bg-white border border-slate-200 rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Register Dr. Jan at Suite 100 before any Skye Canyon or Inspirada model
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Call <strong>(702) 222-1964</strong> to register Dr. Jan Duffy as your buyer's agent 
              <strong> before</strong> visiting any model home—or you may lose your right to free 
              professional representation. Current incentive information available.
            </p>
            <CtaActions variant="onDark" />
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">
          Last Updated: January 2026 | Incentives subject to change
        </div>
      </main>
      <RealScoutListings />
    </>
  );
}
