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
import NeighborhoodLifestyle from "@/components/sections/NeighborhoodLifestyle";
import NeighborhoodFaqs from "@/components/sections/NeighborhoodFaqs";
import ExpertQuote from "@/components/sections/ExpertQuote";
import LeftoverBand from "@/components/sections/LeftoverBand";
import RealScoutSearch from "@/components/realscout/RealScoutSearch";

export const metadata: Metadata = pageMetadata({
  path: "/neighborhoods/green-valley",
  title: "Berkshire Hathaway HomeServices Green Valley | Henderson Real Estate",
  description:
    "Find Green Valley homes with Berkshire Hathaway HomeServices Nevada Properties. Dr. Jan Duffy specializes in this Henderson community with parks, shopping, and Green Valley High School nearby. Median price $520K. Call (702) 222-1964.",
  keywords: [
    "Berkshire Hathaway HomeServices Green Valley",
    "Green Valley homes for sale",
    "Green Valley Henderson",
    "Green Valley real estate",
    "Green Valley Ranch",
  ],
});


export default function GreenValleyPage() {
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
              Berkshire Hathaway HomeServices Green Valley
            </h1>
            <HeadingPhoto path="/neighborhoods/green-valley" />

            <p className="text-xl text-slate-600">
              1988 tree canopy, The District midpoint, 25–35 minutes from Suite 100. $520K median,
              26 DOM with <strong>Berkshire Hathaway HomeServices</strong> and Dr. Jan Duffy.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
            </div>
            <div className="mt-8">
              <RealScoutSearch />
            </div>
          </div>

          <OfficeProximity path="/neighborhoods/green-valley" />
          <UniqueInterior path="/neighborhoods/green-valley" />
          <LeftoverBand path="/neighborhoods/green-valley" />

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto" data-market-snapshot="/neighborhoods/green-valley">
            <h2 className="scroll-mt-32 text-2xl font-bold mb-8 text-center">
              187 listings, 26 days — January 2026 Green Valley snapshot from The District
            </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$520,000</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">26 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">187</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+4.8%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <NeighborhoodLifestyle path="/neighborhoods/green-valley" />
              <p>
                <strong>Green Valley</strong> was established in 1988 as Henderson&apos;s first
                large-scale plat with HOA streets, parks, and golf. Three decades later the comparison
                is canopy age and lot size vs newer Henderson rec campuses. Today,{" "}
                <strong>Berkshire Hathaway HomeServices</strong> sequences Green Valley tours from
                Suite 100: The District first, then golf-course HOAs and interior streets on a 25–35
                minute I-215 east clock.
              </p>
              <p>
                What makes Green Valley unique is something that can't be replicated: time. Over three
                decades, the community has matured into a verdant oasis with towering trees, HOA-maintained
                landscaping, and parks. While newer villages offer newer amenity campuses,
                Green Valley offers named campuses such as Green Valley High School,
                35-year-old street trees, and HOA amenities that have been operating since the late 1980s.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> agents have been selling
                homes in Green Valley since the beginning. Dr. Jan Duffy knows which streets offer the strongest
                mountain views, named campuses such as Green Valley High School, and which HOAs publish
                current reserve studies. This local knowledge, combined with the
                resources and reputation of BHHS, gives Green Valley buyers and sellers a distinct advantage.
              </p>

              <CommunityHighlights path="/neighborhoods/green-valley" />

              <NamedCampuses path="/neighborhoods/green-valley" />

              <NeighborhoodCommute path="/neighborhoods/green-valley" />

              <NeighborhoodAmenities path="/neighborhoods/green-valley" />

              <p className="mt-8">
                The current Green Valley market shows <strong>187 active listings</strong> with homes
                averaging <strong>26 days on market</strong>. The median price of <strong>$520,000</strong>
                reflects demand for 35-year-old street trees, golf, and The District retail. Properties range from well-maintained townhomes in the $400,000s to
                custom homes exceeding $1.2 million in Green Valley Ranch and Green Valley South.
              </p>
              <p>
                Working with a <strong>Berkshire Hathaway HomeServices</strong> agent in Green Valley
                means understanding the subtle differences between Green Valley proper, Green Valley Ranch,
                and Green Valley South. Each area is compared by tree canopy age, golf-course adjacency,
                The District retail, and commute minutes from Suite 100. Call (702) 222-1964.
              </p>
            </div>
          </section>

          <ExpertQuote path="/neighborhoods/green-valley" />
          <NeighborhoodFaqs path="/neighborhoods/green-valley" />


          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Park at The District, then walk 1988 street trees
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Meet at The District, then tour Green Valley's mature-tree streets. Henderson is
              25–35 minutes east of the Lake Mead Blvd office via I-215.
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
