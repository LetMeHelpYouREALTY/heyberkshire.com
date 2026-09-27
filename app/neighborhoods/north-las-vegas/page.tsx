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
  path: "/neighborhoods/north-las-vegas",
  title: "Berkshire Hathaway HomeServices North Las Vegas | Affordable Homes",
  description:
    "Find North Las Vegas homes with Berkshire Hathaway HomeServices Nevada Properties. January 2026 median $385K. Named campuses and commute minutes from Suite 100. Call (702) 222-1964.",
  keywords: [
    "Berkshire Hathaway HomeServices North Las Vegas",
    "North Las Vegas homes for sale",
    "affordable homes Las Vegas",
    "first time home buyer Las Vegas",
    "new construction North Las Vegas",
  ],
});


export default function NorthLasVegasPage() {
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
              Berkshire Hathaway HomeServices North Las Vegas
            </h1>
            <HeadingPhoto path="/neighborhoods/north-las-vegas" />

            <p className="text-xl text-slate-600">
              $385K median, 32 DOM, 892 listings — Aliante rec vs Craig Road, 20–25 minutes from Suite
              100 with <strong>Berkshire Hathaway HomeServices</strong> and Dr. Jan Duffy.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
            </div>
            <div className="mt-8">
              <RealScoutSearch />
            </div>
          </div>

          <OfficeProximity path="/neighborhoods/north-las-vegas" />
          <UniqueInterior path="/neighborhoods/north-las-vegas" />
          <LeftoverBand path="/neighborhoods/north-las-vegas" />

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto" data-market-snapshot="/neighborhoods/north-las-vegas">
            <h2 className="scroll-mt-32 text-2xl font-bold mb-8 text-center">
              892 listings, 32 days — January 2026 North Las Vegas snapshot from Aliante
            </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$385,000</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">32 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">892</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+3.2%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <NeighborhoodLifestyle path="/neighborhoods/north-las-vegas" />
              <p>
                <strong>North Las Vegas</strong> has undergone a remarkable transformation over the past
                decade. What was once considered a distant suburb is now a thriving city with new
                master-planned communities, major employers, and infrastructure improvements that make
                it an inventory band to compare at Suite 100. <strong>Berkshire
                Hathaway HomeServices</strong> compares $385K median listings, named campuses, and
                commute minutes on this north clock.
              </p>
              <p>
                With a median home price of <strong>$385,000</strong>—roughly $65,000 less than Las Vegas
                and $100,000 less than Henderson—North Las Vegas listings at that band are compared
                by square footage and commute, not a caption. Buyers priced
                out of Summerlin $625K or Henderson $485K January 2026 medians can walk North Las Vegas
                product at $385K. And with Nevada's lack of
                state income tax, more of a paycheck can go toward the PITI line.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> provides the same
                expert service in North Las Vegas as we do in the valley's luxury markets. Dr. Jan Duffy
                helps compare square footage, named campuses, and financing files on this north clock.
                For new construction—where builders' sales agents represent the
                builder, not you—BHHS provides free buyer representation that can save thousands in
                upgrades and negotiations.
              </p>

              <CommunityHighlights path="/neighborhoods/north-las-vegas" />

              <VillageDetails path="/neighborhoods/north-las-vegas" />

              <NamedCampuses path="/neighborhoods/north-las-vegas" />

              <NeighborhoodCommute path="/neighborhoods/north-las-vegas" />

              <NeighborhoodAmenities path="/neighborhoods/north-las-vegas" />

              <VillageDetails path="/neighborhoods/north-las-vegas" slot={1} />

              <p className="mt-8">
                The current market shows <strong>892 active listings</strong> with homes averaging
                <strong> 32 days on market</strong>—slightly longer than the valley average, giving
                buyers more time to make informed decisions. Year-over-year appreciation of <strong>3.2%</strong>
                is more modest than luxury markets but represents solid, sustainable growth. Investors
                find particularly strong opportunities here, with rental yields often exceeding 6%.
              </p>
              <p>
                Working with <strong>Berkshire Hathaway HomeServices</strong> in North Las Vegas means
                getting honest guidance about which neighborhoods offer the best value, which builders
                have the best reputations, and which areas are poised for the strongest appreciation.
                Dr. Jan Duffy won't push you toward a more expensive area when North Las Vegas fits
                your needs—that integrity is what sets BHHS apart from agencies focused solely on
                commission.
              </p>
            </div>
          </section>

          <ExpertQuote path="/neighborhoods/north-las-vegas" />
          <NeighborhoodFaqs path="/neighborhoods/north-las-vegas" />


          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start at Aliante rec, then Craig Road — one north loop
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              North Las Vegas and Aliante new-construction villages are 20–25 minutes via US-95/I-15.
              Dr. Jan groups Craig Road employment-corridor stops into one north loop.
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
