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
  path: "/neighborhoods/southern-highlands",
  title: "Berkshire Hathaway HomeServices Southern Highlands | Las Vegas Golf Community",
  description:
    "Find Southern Highlands homes with Berkshire Hathaway HomeServices Nevada Properties. I-15 south, 25–35 minutes from Suite 100. January 2026 median $750K. Call (702) 222-1964.",
  keywords: [
    "Berkshire Hathaway HomeServices Southern Highlands",
    "Southern Highlands homes for sale",
    "Southern Highlands golf",
    "Las Vegas golf community",
    "guard gated Las Vegas",
  ],
});


export default function SouthernHighlandsPage() {
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
              Berkshire Hathaway HomeServices Southern Highlands
            </h1>
            <HeadingPhoto path="/neighborhoods/southern-highlands" />

            <p className="text-xl text-slate-600">
              Robert Trent Jones Jr. scorecard 74.1 / 140, then 25–35 minutes via I-15 south from
              Suite 100. <strong>Berkshire Hathaway HomeServices</strong> and Dr. Jan Duffy.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
            </div>
            <div className="mt-8">
              <RealScoutSearch />
            </div>
          </div>

          <OfficeProximity path="/neighborhoods/southern-highlands" />
          <UniqueInterior path="/neighborhoods/southern-highlands" />
          <LeftoverBand path="/neighborhoods/southern-highlands" />

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto" data-market-snapshot="/neighborhoods/southern-highlands">
            <h2 className="scroll-mt-32 text-2xl font-bold mb-8 text-center">
              156 listings, 35 days — January 2026 I-15 south golf-and-ridge snapshot
            </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$750,000</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">35 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">156</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+7.2%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <NeighborhoodLifestyle path="/neighborhoods/southern-highlands" />
              <p>
                <strong>Southern Highlands</strong> stands as southwest Las Vegas's answer to Summerlin—a
                meticulously planned 2,200-acre community centered around an award-winning championship
                golf course. For buyers seeking luxury living with convenient access to the Strip, airport,
                and I-15 corridor, <strong>Berkshire Hathaway HomeServices</strong> considers Southern
                Highlands among Las Vegas's finest residential options.
              </p>
              <p>
                The community's crown jewel is the Southern Highlands Golf Club, featuring a stunning
                Robert Trent Jones Jr. designed course that winds through the community's terrain.
                The private club offers members world-class golf, elegant dining, and a social calendar
                that brings the community together. Even non-golfing residents benefit from the course's
                presence—golf course views command premium prices and the manicured greens enhance the
                entire community's aesthetic.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> has represented buyers
                and sellers in Southern Highlands for over two decades. Dr. Jan Duffy understands the
                community's various sections—from the guard-gated luxury estates surrounding the golf
                course to the residential neighborhoods with parks and trails in the community's newer phases. Whether
                you're seeking a golf course lot with Strip views or a 4-bedroom home near Elise Wolff
                Elementary, BHHS has the local expertise to guide your search.
              </p>

              <CommunityHighlights path="/neighborhoods/southern-highlands" />

              <NamedCampuses path="/neighborhoods/southern-highlands" />

              <NeighborhoodCommute path="/neighborhoods/southern-highlands" />

              <NeighborhoodAmenities path="/neighborhoods/southern-highlands" />

              <VillageDetails path="/neighborhoods/southern-highlands" />

              <p className="mt-8">
                The Southern Highlands market currently shows <strong>156 active listings</strong> with
                homes averaging <strong>35 days on market</strong>. The median price of <strong>$750,000</strong>
                reflects strong appreciation of 7.2% year-over-year, driven by demand from buyers seeking
                luxury without the premium prices of The Ridges or MacDonald Highlands. Properties range
                from $500,000 in non-gated sections to over $3 million for golf course estates.
              </p>
              <p>
                Choosing <strong>Berkshire Hathaway HomeServices</strong> for Southern Highlands means
                working with agents who understand the community's unique value proposition. Dr. Jan Duffy
                can explain the differences between various sections, which lots offer the best views,
                and how HOA fees vary across the community. This knowledge, combined with the BHHS
                reputation for excellence, ensures Southern Highlands buyers and sellers receive
                exceptional service.
              </p>
            </div>
          </section>

          <ExpertQuote path="/neighborhoods/southern-highlands" />
          <NeighborhoodFaqs path="/neighborhoods/southern-highlands" />


          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lock a Southern Highlands I-15 south block
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Southern Highlands golf and ridge-top listings are a 25–35 minute I-15 run from
              the office. Call for a south-valley tour block.
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
