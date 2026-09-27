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
  path: "/neighborhoods/the-ridges",
  title: "Berkshire Hathaway HomeServices The Ridges | Las Vegas Luxury Real Estate",
  description:
    "Find The Ridges homes with Berkshire Hathaway HomeServices Nevada Properties. Guard-gated Summerlin ridge lots, 15–20 minutes from Suite 100. Median $2.5M, 42 listings, 67 DOM (January 2026). Call (702) 222-1964.",
  keywords: [
    "Berkshire Hathaway HomeServices The Ridges",
    "The Ridges homes for sale",
    "The Ridges Summerlin",
    "luxury homes Las Vegas",
    "guard gated Summerlin",
  ],
});


export default function TheRidgesPage() {
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
              Berkshire Hathaway HomeServices The Ridges
            </h1>
            <HeadingPhoto path="/neighborhoods/the-ridges" />

            <p className="text-xl text-slate-600">
              Guard-gated ridge lots, 15–20 minutes from Suite 100. $2.5M median, 67 DOM, 42 listings
              (January 2026) with <strong>Berkshire Hathaway HomeServices</strong> and Dr. Jan Duffy.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
            </div>
            <div className="mt-8">
              <RealScoutSearch />
            </div>
          </div>

          <OfficeProximity path="/neighborhoods/the-ridges" />
          <UniqueInterior path="/neighborhoods/the-ridges" />
          <LeftoverBand path="/neighborhoods/the-ridges" />

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto" data-market-snapshot="/neighborhoods/the-ridges">
            <h2 className="scroll-mt-32 text-2xl font-bold mb-8 text-center">
              42 listings, 67 days — January 2026 Ridges gate-list snapshot
            </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$2.5M</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">67 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">42</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+8.2%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <NeighborhoodLifestyle path="/neighborhoods/the-ridges" />
              <p>
                <strong>The Ridges</strong> sits in Summerlin along the foothills of Red Rock Canyon:
                900 homesites across 793 acres, a staffed gate, and ridge-top lots with Strip, mountain,
                and desert views. When buyers compare ridge-top lots to Downtown Summerlin retail, they
                start with <strong>Berkshire Hathaway HomeServices</strong> so gate lists and showing
                windows are confirmed from Suite 100.
              </p>
              <p>
                Six villages—Bear&apos;s Best, Falcon Ridge, Azure, Talon Ridge, Silver Ridge, and Eagle
                Hills—share architectural guidelines. Square footage, lot elevation, and golf-club access
                vary by village. Compare those numbers at 9406 W Lake Mead Blvd, Suite 100 instead of a
                slogan. Photography and access are scheduled, not improvised.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> has represented buyers
                and sellers in The Ridges since the community's inception. Dr. Jan Duffy understands that
                luxury transactions require gate lists, photography scoped in writing, and addresses
                kept off group texts. The BHHS referral desk connects Ridges appointments from
                9406 W Lake Mead Blvd, Suite 100 — typically 15–20 minutes to the guardhouse.
              </p>

              <CommunityHighlights path="/neighborhoods/the-ridges" />

              <VillageDetails path="/neighborhoods/the-ridges" />

              <NeighborhoodCommute path="/neighborhoods/the-ridges" />

              <NeighborhoodAmenities path="/neighborhoods/the-ridges" />

              <NamedCampuses path="/neighborhoods/the-ridges" />

              <p className="mt-8">
                The current Ridges market shows <strong>42 active listings</strong> with homes averaging
                <strong> 67 days on market</strong>—longer than the valley average, reflecting the careful
                consideration luxury buyers give to properties at this level. The median price of
                <strong> $2.5 million</strong> represents exceptional value compared to comparable
                communities in California or Hawaii. Properties range from $1.5 million to over $15
                million for the most spectacular custom estates.
              </p>
              <p>
                Working with <strong>Berkshire Hathaway HomeServices</strong> in The Ridges means working
                with agents who schedule gate lists, photography, and off-market windows from Suite 100.
                Dr. Jan Duffy coordinates access with architects, designers, and property managers when
                the brief includes those vendors. When the list price is measured in millions,
                the Berkshire Hathaway name is on the paperwork at 9406 W Lake Mead Blvd.
              </p>
            </div>
          </section>

          <ExpertQuote path="/neighborhoods/the-ridges" />
          <NeighborhoodFaqs path="/neighborhoods/the-ridges" />


          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Put your name on a Ridges gate list from Suite 100
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Book a confidential Ridges gate tour. Estate showings are sequenced from the
              9406 W Lake Mead Blvd office so you are not sitting in valley traffic between villages.
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
