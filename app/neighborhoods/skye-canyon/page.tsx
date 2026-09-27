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
  path: "/neighborhoods/skye-canyon",
  title: "Berkshire Hathaway HomeServices Skye Canyon | Northwest Las Vegas",
  description:
    "Find Skye Canyon homes with Berkshire Hathaway HomeServices Nevada Properties. Register at Suite 100 before any northwest builder row. January 2026 median $550K. Call (702) 222-1964.",
  keywords: [
    "Berkshire Hathaway HomeServices Skye Canyon",
    "Skye Canyon homes for sale",
    "Skye Canyon Las Vegas",
    "northwest Las Vegas homes",
    "new construction Skye Canyon",
  ],
});


export default function SkyeCanyonPage() {
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
              Berkshire Hathaway HomeServices Skye Canyon
            </h1>
            <HeadingPhoto path="/neighborhoods/skye-canyon" />

            <p className="text-xl text-slate-600">
              Register at Suite 100, then Skye Center and Floyd Lamb on a 20–25 minute northwest
              clock with <strong>Berkshire Hathaway HomeServices</strong> and Dr. Jan Duffy.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
            </div>
            <div className="mt-8">
              <RealScoutSearch />
            </div>
          </div>

          <OfficeProximity path="/neighborhoods/skye-canyon" />
          <UniqueInterior path="/neighborhoods/skye-canyon" />
          <LeftoverBand path="/neighborhoods/skye-canyon" />

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto" data-market-snapshot="/neighborhoods/skye-canyon">
            <h2 className="scroll-mt-32 text-2xl font-bold mb-8 text-center">
              124 listings, 21 days — January 2026 Skye Canyon model-and-resale snapshot
            </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$550,000</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">21 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">124</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+5.5%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <NeighborhoodLifestyle path="/neighborhoods/skye-canyon" />
              <p>
                <strong>Skye Canyon</strong> represents the future of Las Vegas master-planned living.
                This 1,700-acre community in northwest Las Vegas sits next to Floyd Lamb Park
                with Skye Center as the rec campus. <strong>Berkshire Hathaway HomeServices</strong>
                registers you at Suite 100 before the first model row so builder tours stay on one northwest clock.
              </p>
              <p>
                What sets Skye Canyon apart is Skye Center—a stunning 15-acre amenity complex that
                rivals resort facilities. The facility features multiple pools including a zero-entry
                resort pool and lap pool, a state-of-the-art fitness center, tennis and pickleball
                courts, and flexible event spaces that host community gatherings throughout the year.
                From summer movie nights to holiday celebrations, Skye Center creates the kind of
                community connections that transform neighborhoods into true communities.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> offers free buyer
                representation on all Skye Canyon new construction purchases. This is crucial because
                when you walk into a builder's sales center, those agents work for the builder—not you.
                Dr. Jan Duffy represents your interests, negotiates upgrades, reviews contracts for
                hidden pitfalls, and ensures you're getting fair value. This service costs buyers
                nothing—builders pay the commission.
              </p>

              <CommunityHighlights path="/neighborhoods/skye-canyon" />

              <NamedCampuses path="/neighborhoods/skye-canyon" />

              <NeighborhoodCommute path="/neighborhoods/skye-canyon" />

              <VillageDetails path="/neighborhoods/skye-canyon" />

              <NeighborhoodAmenities path="/neighborhoods/skye-canyon" />

              <p className="mt-8">
                The current Skye Canyon market shows <strong>124 active listings</strong> with homes
                averaging just <strong>21 days on market</strong>—among the fastest in the valley.
                The median price of <strong>$550,000</strong> reflects 5.5% year-over-year appreciation,
                driven by continued demand from buyers seeking modern homes with exceptional amenities.
                New construction from builders like Toll Brothers, Lennar, and Woodside Homes ranges
                from $450,000 to $800,000.
              </p>
              <p>
                Choosing <strong>Berkshire Hathaway HomeServices</strong> for your Skye Canyon purchase
                means working with agents who know which builders offer the best quality, which lots
                have the best views, and which upgrades deliver the best value. Dr. Jan Duffy has
                helped dozens of buyers find their Skye Canyon homes, and that experience translates
                into better outcomes for buyers navigating this competitive market.
              </p>
            </div>
          </section>

          <ExpertQuote path="/neighborhoods/skye-canyon" />
          <NeighborhoodFaqs path="/neighborhoods/skye-canyon" />


          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Register at Suite 100, then walk Skye Center the same day
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Walk Skye Canyon model rows and resale streets in one northwest loop. The 215
              puts the community 20–25 minutes from the office pin.
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
