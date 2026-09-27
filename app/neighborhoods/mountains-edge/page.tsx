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
import NeighborhoodParks from "@/components/sections/NeighborhoodParks";
import CommunityHighlights from "@/components/sections/CommunityHighlights";
import NeighborhoodLifestyle from "@/components/sections/NeighborhoodLifestyle";
import NeighborhoodFaqs from "@/components/sections/NeighborhoodFaqs";
import ExpertQuote from "@/components/sections/ExpertQuote";
import LeftoverBand from "@/components/sections/LeftoverBand";
import RealScoutSearch from "@/components/realscout/RealScoutSearch";

export const metadata: Metadata = pageMetadata({
  path: "/neighborhoods/mountains-edge",
  title: "Berkshire Hathaway HomeServices Mountains Edge | Southwest Las Vegas",
  description:
    "Find Mountains Edge homes with Berkshire Hathaway HomeServices Nevada Properties. Dr. Jan Duffy specializes in this southwest Las Vegas community. Median price $475K. Call (702) 222-1964.",
  keywords: [
    "Berkshire Hathaway HomeServices Mountains Edge",
    "Mountains Edge homes for sale",
    "Mountains Edge Las Vegas",
    "southwest Las Vegas homes",
    "affordable Las Vegas",
  ],
});


export default function MountainsEdgePage() {
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
              Berkshire Hathaway HomeServices Mountains Edge
            </h1>
            <HeadingPhoto path="/neighborhoods/mountains-edge" />

            <p className="text-xl text-slate-600">
              Exploration Peak then I-15/Blue Diamond, 20–30 minutes from Suite 100. $475K median, 27
              DOM, 234 listings with <strong>Berkshire Hathaway HomeServices</strong> and Dr. Jan Duffy.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
            </div>
            <div className="mt-8">
              <RealScoutSearch />
            </div>
          </div>

          <OfficeProximity path="/neighborhoods/mountains-edge" />
          <UniqueInterior path="/neighborhoods/mountains-edge" />
          <LeftoverBand path="/neighborhoods/mountains-edge" />

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto" data-market-snapshot="/neighborhoods/mountains-edge">
            <h2 className="scroll-mt-32 text-2xl font-bold mb-8 text-center">
              234 listings, 27 days — January 2026 Mountains Edge snapshot from Blue Diamond
            </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$475,000</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">27 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">234</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+4.5%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <NeighborhoodLifestyle path="/neighborhoods/mountains-edge" />
              <p>
                <strong>Mountains Edge</strong> delivers what many Las Vegas buyers are seeking:
                master-planned community amenities at prices significantly below Summerlin or
                Henderson. This 3,500-acre community in southwest Las Vegas offers mountain views,
                exceptional parks, and modern homes—without the premium prices of Summerlin
                or The Ridges. <strong>Berkshire Hathaway HomeServices</strong>
                helps value-conscious buyers discover Mountains Edge's potential.
              </p>
              <p>
                The community's crown jewel is Exploration Peak Park—120 acres of open space that
                stands as the Las Vegas Valley's largest park. From the park's summit, residents
                enjoy panoramic views of the Las Vegas Strip, surrounding mountains, and the desert
                floor stretching to the horizon. It's a daily reminder that Mountains Edge offers
                something special: the combination of suburban convenience with genuine connection
                to Southern Nevada's natural beauty.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> serves Mountains
                Edge buyers with the same commitment to excellence we bring to the valley's luxury
                markets. Dr. Jan Duffy understands that value doesn't mean compromise—it means
                finding the right home at the right price. For buyers priced out of Summerlin
                or Henderson, Mountains Edge is compared by square footage, HOA dues, and minutes
                from Suite 100 — not as a swapped Summerlin caption.
              </p>

              <CommunityHighlights path="/neighborhoods/mountains-edge" />

              <NamedCampuses path="/neighborhoods/mountains-edge" />

              <NeighborhoodCommute path="/neighborhoods/mountains-edge" />

              <NeighborhoodAmenities path="/neighborhoods/mountains-edge" />

              <NeighborhoodParks path="/neighborhoods/mountains-edge" />

              <p className="mt-8">
                The current market shows <strong>234 active listings</strong> with homes averaging
                <strong> 27 days on market</strong>. The median price of <strong>$475,000</strong>
                represents steady 4.5% year-over-year appreciation—sustainable growth that suggests
                continuing value. Properties range from $380,000 for entry-level homes to over
                $750,000 for larger properties with premium views and upgraded features.
              </p>
              <p>
                Working with <strong>Berkshire Hathaway HomeServices</strong> in Mountains Edge means
                getting honest guidance about where the community offers the best value. Dr. Jan Duffy
                helps buyers identify neighborhoods with the strongest appreciation potential, homes
                with the best views, and properties that represent genuine value rather than
                superficial appeal. That expertise—combined with the BHHS commitment to client
                service—ensures Mountains Edge buyers make informed decisions.
              </p>
            </div>
          </section>

          <ExpertQuote path="/neighborhoods/mountains-edge" />
          <NeighborhoodFaqs path="/neighborhoods/mountains-edge" />


          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Walk Exploration Peak before you compare the $475,000 median
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Mountains Edge and Exploration Peak listings sit 20–30 minutes southwest on the Beltway.
              Value comps versus Summerlin are reviewed before you leave the office.
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
