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
  path: "/neighborhoods/centennial-hills",
  title: "Berkshire Hathaway HomeServices Centennial Hills | Las Vegas Homes",
  description:
    "Find Centennial Hills homes with Berkshire Hathaway HomeServices Nevada Properties. Dr. Jan Duffy covers this northwest Las Vegas area near Arbor View High School and Centennial Hills Park. Median price $495K. Call (702) 222-1964.",
  keywords: [
    "Berkshire Hathaway HomeServices Centennial Hills",
    "Centennial Hills homes for sale",
    "Centennial Hills Las Vegas",
    "northwest Las Vegas real estate",
    "homes for sale Las Vegas",
  ],
});


export default function CentennialHillsPage() {
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
              Berkshire Hathaway HomeServices Centennial Hills
            </h1>
            <HeadingPhoto path="/neighborhoods/centennial-hills" />

            <p className="text-xl text-slate-600">
              Arbor View High School commute and Centennial Hills Park, 15–20 minutes from Suite 100.
              $495K median, 25 DOM, 203 listings with <strong>Berkshire Hathaway HomeServices</strong>{" "}
              and Dr. Jan Duffy.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
            </div>
            <div className="mt-8">
              <RealScoutSearch />
            </div>
          </div>

          <OfficeProximity path="/neighborhoods/centennial-hills" />
          <UniqueInterior path="/neighborhoods/centennial-hills" />
          <LeftoverBand path="/neighborhoods/centennial-hills" />

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto" data-market-snapshot="/neighborhoods/centennial-hills">
            <h2 className="scroll-mt-32 text-2xl font-bold mb-8 text-center">
              203 listings, 25 days — January 2026 Centennial Hills snapshot via US-95
            </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$495,000</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">25 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">203</div>
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
              <NeighborhoodLifestyle path="/neighborhoods/centennial-hills" />
              <p>
                <strong>Centennial Hills</strong> represents mature northwest Las Vegas
                living. While newer communities like Skye Canyon attract attention, Centennial Hills
                offers something they can't: mature street trees, named campuses such as Arbor View High School, and
                landscaping that has had nearly two decades to grow.
                <strong> Berkshire Hathaway HomeServices</strong> helps buyers discover why
                Centennial Hills remains a frequently compared northwest Las Vegas address.
              </p>
              <p>
                The community's appeal starts with location. Positioned at the base of the mountains
                with easy access to US-95, Centennial Hills provides quick commutes throughout the
                valley while maintaining a distinctly suburban atmosphere. The mountains are visible
                from most streets, creating the feeling of living closer to nature than Centennial
                Hills' urban conveniences would suggest.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> has represented
                Centennial Hills buyers and sellers since the community's earliest phases. Dr. Jan Duffy knows
                which streets offer the strongest mountain views, commute times to the Strip and
                Downtown Summerlin, and which HOAs publish current reserve studies. This local
                knowledge, combined with the BHHS commitment to client service, ensures Centennial
                Hills buyers and sellers receive exceptional representation.
              </p>

              <CommunityHighlights path="/neighborhoods/centennial-hills" />

              <NamedCampuses path="/neighborhoods/centennial-hills" />

              <NeighborhoodCommute path="/neighborhoods/centennial-hills" />
              <p className="text-slate-600 text-sm mt-2 not-prose">
                Centennial Hills' proximity to US-95 provides excellent north-south access throughout the valley.
              </p>

              <NeighborhoodAmenities path="/neighborhoods/centennial-hills" />

              <NeighborhoodParks path="/neighborhoods/centennial-hills" />

              <p className="mt-8">
                The current market shows <strong>203 active listings</strong> with homes averaging
                <strong> 25 days on market</strong>. The median price of <strong>$495,000</strong>
                represents solid 4.8% year-over-year appreciation while remaining more accessible
                than Summerlin's higher-priced neighborhoods. Properties range from $380,000 for
                smaller homes to over $900,000 for larger properties with premium lots and views.
              </p>
              <p>
                Working with <strong>Berkshire Hathaway HomeServices</strong> in Centennial Hills means
                partnering with agents who understand the community's evolution and can identify
                properties that represent genuine value. Dr. Jan Duffy helps buyers look beyond
                surface features to evaluate factors that matter long-term: construction quality,
                lot positioning, HOA documents, and named school campuses. That expertise translates into
                better purchase decisions and stronger long-term investments.
              </p>
            </div>
          </section>

          <ExpertQuote path="/neighborhoods/centennial-hills" />
          <NeighborhoodFaqs path="/neighborhoods/centennial-hills" />


          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Time Arbor View and the 120-acre park in one US-95 run
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Centennial Hills mountain-view streets sit 15–20 minutes up US-95 from the office.
              Ask Dr. Jan to pair a Floyd Lamb Park loop with live MLS.
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
