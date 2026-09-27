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
  path: "/neighborhoods/henderson",
  title: "Berkshire Hathaway HomeServices Henderson | Nevada Real Estate",
  description:
    "Find Henderson homes with Berkshire Hathaway HomeServices Nevada Properties. Dr. Jan Duffy specializes in Henderson's residential communities with parks and recreation. Median price $485K. Call (702) 222-1964.",
  keywords: [
    "Berkshire Hathaway HomeServices Henderson",
    "Henderson homes for sale",
    "Henderson real estate agent",
    "Henderson Nevada",
    "Green Valley Henderson",
  ],
});

const neighborhoodSchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Henderson, Nevada",
  description: "Nevada's second-largest city known for parks, trails, and residential communities with parks and recreation",
  geo: {
    "@type": "GeoCoordinates",
    latitude: "36.0395",
    longitude: "-114.9817",
  },
};


export default function HendersonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(neighborhoodSchema) }}
      />
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
{/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Berkshire Hathaway HomeServices Henderson
            </h1>
            <HeadingPhoto path="/neighborhoods/henderson" />

            <p className="text-xl text-slate-600">
              Green Valley trees vs Inspirada rec — two villages, 25–35 minutes from Suite 100.
              $485K median, 1,280 listings with <strong>Berkshire Hathaway HomeServices</strong> and
              Dr. Jan Duffy.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
            </div>
            <div className="mt-8">
              <RealScoutSearch />
            </div>
          </div>

          <OfficeProximity path="/neighborhoods/henderson" />
          <UniqueInterior path="/neighborhoods/henderson" />
          <LeftoverBand path="/neighborhoods/henderson" />

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto" data-market-snapshot="/neighborhoods/henderson">
            <h2 className="scroll-mt-32 text-2xl font-bold mb-8 text-center">
              1,280 listings, 24 days — January 2026 Henderson city snapshot, not one village
            </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$485,000</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">24 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">1,280</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+5.1%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <NeighborhoodLifestyle path="/neighborhoods/henderson" />
              <p>
                <strong>Henderson</strong> is Nevada's second-largest city with over 320,000 residents.
                Compare streets by square footage, HOA dues, parks, and commute minutes from
                9406 W Lake Mead Blvd—not by slogan. <strong>Berkshire Hathaway
                HomeServices</strong> has been helping buyers find Henderson homes for decades,
                and Dr. Jan Duffy brings unmatched expertise to every transaction.
              </p>
              <p>
                What sets Henderson apart is scale and planning: 60+ parks, recreation centers, and
                master-planned villages 15–25 minutes from the Strip. Nevada has no state income tax,
                which is why many California buyers compare Henderson floor plans and HOA amenities
                before they list a West Coast home.
              </p>
              <p>
                The Henderson real estate market offers remarkable diversity. From the tree-lined
                streets of <strong>Green Valley</strong> to the town-center amenities of <strong>Inspirada</strong>,
                from the luxury estates of <strong>MacDonald Highlands</strong> to the waterfront properties at
                <strong> Lake Las Vegas</strong>—Green Valley, Inspirada, MacDonald Highlands, and
                the 320-acre lake are compared by square footage, HOA packet, and drive time from Suite 100.
                <strong> Berkshire Hathaway HomeServices Nevada Properties</strong> agents know each of these
                communities intimately.
              </p>

              <CommunityHighlights path="/neighborhoods/henderson" />

              <NamedCampuses path="/neighborhoods/henderson" />

              <NeighborhoodCommute path="/neighborhoods/henderson" />
              <p className="text-slate-600 text-sm mt-2 not-prose">
                Henderson's central location provides excellent access to the 215 Beltway and I-515/US-95,
                making commutes to all parts of the valley convenient.
              </p>

              <VillageDetails path="/neighborhoods/henderson" />

              <NeighborhoodAmenities path="/neighborhoods/henderson" />

              <p className="mt-8">
                With <strong>1,280 active listings</strong> and homes averaging just <strong>24 days on market</strong>,
                Henderson's real estate market moves quickly. The median price of <strong>$485,000</strong> offers
                excellent value compared to similar communities in California, Arizona, or Colorado. First-time
                buyers find attainable options starting in the $350,000s, while luxury buyers can explore
                properties exceeding $2 million in guard-gated communities.
              </p>
              <p>
                Choosing <strong>Berkshire Hathaway HomeServices</strong> for your Henderson home search means
                working with agents who understand the subtle differences between Henderson's many communities.
                Dr. Jan Duffy can map commute times to named campuses such as Coronado High School
                and Green Valley High School, review HOA documents, and compare recent sales. That
                local knowledge, backed by the resources and reputation of Berkshire Hathaway, makes all the
                difference.
              </p>
            </div>
          </section>

          <ExpertQuote path="/neighborhoods/henderson" />
          <NeighborhoodFaqs path="/neighborhoods/henderson" />


          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pick two Henderson villages from Suite 100 — trees or rec campus
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Compare Green Valley, Anthem, Inspirada, and Water Street from one Henderson day.
              Drive time from the office is typically 25–35 minutes.
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
