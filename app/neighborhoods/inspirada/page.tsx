import RealScoutListings from "@/components/realscout/RealScoutListings";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CtaActions from "@/components/sections/CtaActions";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import NamedCampuses from "@/components/sections/NamedCampuses";
import NeighborhoodCommute from "@/components/sections/NeighborhoodCommute";
import NeighborhoodAmenities from "@/components/sections/NeighborhoodAmenities";
import CommunityHighlights from "@/components/sections/CommunityHighlights";
import VillageDetails from "@/components/sections/VillageDetails";
import NeighborhoodLifestyle from "@/components/sections/NeighborhoodLifestyle";
import NeighborhoodFaqs from "@/components/sections/NeighborhoodFaqs";
import ExpertQuote from "@/components/sections/ExpertQuote";
import LeftoverBand from "@/components/sections/LeftoverBand";
import RealScoutSearch from "@/components/realscout/RealScoutSearch";

export const metadata: Metadata = pageMetadata({
  path: "/neighborhoods/inspirada",
  title: "Berkshire Hathaway HomeServices Inspirada | Henderson Resort Living",
  description:
    "Find Inspirada homes with Berkshire Hathaway HomeServices Nevada Properties. Dr. Jan Duffy specializes in Henderson's resort-style community. Median price $525K. Call (702) 222-1964.",
  keywords: [
    "Berkshire Hathaway HomeServices Inspirada",
    "Inspirada homes for sale",
    "Inspirada Henderson",
    "Henderson master planned",
    "resort style community",
  ],
});


export default function InspiradaPage() {
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
              Berkshire Hathaway HomeServices Inspirada
            </h1>
            <HeadingPhoto path="/neighborhoods/inspirada" />

            <p className="text-xl text-slate-600">
              2,000-acre Henderson campus, 30–40 minutes from Suite 100. $525K median, 23 DOM, 98
              listings (January 2026) with <strong>Berkshire Hathaway HomeServices</strong> and Dr. Jan
              Duffy.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
            </div>
            <div className="mt-8">
              <RealScoutSearch />
            </div>
          </div>

          <OfficeProximity path="/neighborhoods/inspirada" />
          <UniqueInterior path="/neighborhoods/inspirada" />
          <LeftoverBand path="/neighborhoods/inspirada" />

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto" data-market-snapshot="/neighborhoods/inspirada">
            <h2 className="scroll-mt-32 text-2xl font-bold mb-8 text-center">
              98 listings, 23 days — January 2026 Inspirada rec-campus snapshot
            </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$525,000</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">23 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">98</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+5.0%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <NeighborhoodLifestyle path="/neighborhoods/inspirada" />
              <p>
                <strong>Inspirada</strong> is a 2,000-acre Henderson campus. Pools, slides, cabanas,
                and trail mileage are in the HOA packet. Call (702) 222-1964 from 9406 W Lake Mead
                Blvd, Suite 100. Do not stack this with a Summerlin gate afternoon.
              </p>
              <p>
                The community's amenity package rivals many resorts. Multiple pools feature water
                slides, splash pads, and cabanas. Miles of walking and biking trails wind through
                the community, connecting to neighborhood parks and gathering spaces. Sports courts,
                fitness facilities, and a town-center calendar sit on this campus. Amenities are
                listed in the HOA packet and confirmed the week you tour — not as a slogan.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> provides free
                buyer representation on Inspirada new construction purchases. With multiple builders
                offering homes in the community, navigating options can be overwhelming. Dr. Jan Duffy
                helps buyers compare builders, negotiate upgrades, and avoid common new construction
                pitfalls. For resales, BHHS agents identify properties where previous owners made
                smart upgrade decisions, delivering better value than comparable new construction.
              </p>

              <CommunityHighlights path="/neighborhoods/inspirada" />

              <NamedCampuses path="/neighborhoods/inspirada" />

              <NeighborhoodCommute path="/neighborhoods/inspirada" />

              <NeighborhoodAmenities path="/neighborhoods/inspirada" />

              <VillageDetails path="/neighborhoods/inspirada" />

              <p className="mt-8">
                The current Inspirada market shows <strong>98 active listings</strong> with homes
                averaging <strong>23 days on market</strong>—reflecting demand for the Town Center
                rec campus. The median price of <strong>$525,000</strong> represents
                solid 5.0% year-over-year appreciation. New construction from builders like Toll
                Brothers, Lennar, and Beazer ranges from $450,000 to $750,000, while resales with
                resale yards with mature trees and upgraded features offer compelling alternatives.
              </p>
              <p>
                Choosing <strong>Berkshire Hathaway HomeServices</strong> for your Inspirada purchase
                means working with agents who understand the community's various neighborhoods, which
                builders offer the best quality, and which lots provide the best value. Dr. Jan Duffy
                has helped dozens of buyers find their Inspirada homes, and that experience
                translates into better outcomes for buyers navigating this popular community.
              </p>
            </div>
          </section>

          <ExpertQuote path="/neighborhoods/inspirada" />
          <NeighborhoodFaqs path="/neighborhoods/inspirada" />


          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Walk the Town Center pool before any Inspirada model
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Inspirada amenity centers and builder rows are a 30–40 minute south Henderson block.
              Dr. Jan sequences Toll Brothers, Lennar, and resale in one trip.
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
