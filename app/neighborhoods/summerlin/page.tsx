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

import SchemaScript from "@/components/SchemaScript";
import {
  generateBreadcrumbSchema,
  generateNeighborhoodSchema,
  combineSchemas,
} from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  path: "/neighborhoods/summerlin",
  title: "Berkshire Hathaway HomeServices Summerlin | Las Vegas Luxury Real Estate",
  description:
    "Find Summerlin homes with Berkshire Hathaway HomeServices Nevada Properties. Downtown Summerlin and Red Rock trailheads are 10–15 minutes from Suite 100. January 2026 median $625K. Call (702) 222-1964.",
  keywords: [
    "Berkshire Hathaway HomeServices Summerlin",
    "Summerlin homes for sale",
    "Summerlin real estate agent",
    "Summerlin Las Vegas",
    "luxury homes Summerlin",
  ],
});

// Breadcrumb items for this page
const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "Neighborhoods", url: "/neighborhoods" },
  { name: "Summerlin", url: "/neighborhoods/summerlin" },
];

// Combined page schemas (FAQ JSON-LD lives in NeighborhoodFaqs)
const pageSchemas = combineSchemas(
  generateBreadcrumbSchema(breadcrumbs),
  generateNeighborhoodSchema({
    name: "Summerlin",
    slug: "summerlin",
    description:
      "Howard Hughes 22,500-acre west-valley plat with Red Rock Canyon trailheads, 150+ parks, named campuses such as Palo Verde High School, and published list bands from $400K to $10M+.",
    latitude: 36.1672,
    longitude: -115.331,
    containedIn: "Las Vegas",
  })
);

export default function SummerlinPage() {
  return (
    <>
      {/* Combined JSON-LD Schema: Breadcrumb + Place */}
      <SchemaScript schema={pageSchemas} id="summerlin-schema" />
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
{/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Berkshire Hathaway HomeServices Summerlin
            </h1>
            <HeadingPhoto path="/neighborhoods/summerlin" />

            <p className="text-xl text-slate-600">
              Downtown Summerlin and Red Rock trailheads share a 10–15 minute clock from Suite 100
              with Dr. Jan Duffy at <strong>Berkshire Hathaway HomeServices</strong> Nevada Properties.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
            </div>
            <div className="mt-8">
              <RealScoutSearch />
            </div>
          </div>

          <OfficeProximity path="/neighborhoods/summerlin" />
          <UniqueInterior path="/neighborhoods/summerlin" />
          <LeftoverBand path="/neighborhoods/summerlin" />

          {/* Market Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto" data-market-snapshot="/neighborhoods/summerlin">
            <h2 className="scroll-mt-32 text-2xl font-bold mb-8 text-center">
              342 listings, 22 days — January 2026 Summerlin snapshot from Suite 100
            </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$625,000</div>
                <div className="text-slate-300 text-sm">Median Home Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">22 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">342</div>
                <div className="text-slate-300 text-sm">Active Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+6.8%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
            </div>
          </section>

          {/* Main Content */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <NeighborhoodLifestyle path="/neighborhoods/summerlin" />
              <p>
                When homebuyers compare Las Vegas master-planned communities, <strong>Summerlin</strong> is
                the Howard Hughes 22,500-acre west-valley plat. As a <strong>Berkshire Hathaway HomeServices</strong>
                agent specializing in Summerlin real estate, Dr. Jan Duffy times village tours from Suite 100
                so you compare The Trails, Downtown Summerlin, and Red Rock trailheads on the same clock.
              </p>
              <p>
                Developed by The Howard Hughes Corporation since 1990, Summerlin spans 22,500 acres along the
                western rim of the Las Vegas Valley. Red Rock Canyon trailheads sit on the same west
                clock as the villages — hiking and bike paths minutes from listing streets. With over
                150 parks, 150 miles of trails, and nine golf courses, we compare acreage and drive time
                from Suite 100, not a slogan.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> has deep roots in Summerlin,
                and our agents understand the nuances of each village—from the parks and recreation amenities of
                The Paseos parks to The Ridges estate streets. Affinity condo square footage and
                Red Rock Country Club custom lots are separate files. BHHS
                maps both from Suite 100.
              </p>

              <CommunityHighlights path="/neighborhoods/summerlin" />

              <NamedCampuses path="/neighborhoods/summerlin" />

              <NeighborhoodCommute path="/neighborhoods/summerlin" />

              <NeighborhoodAmenities path="/neighborhoods/summerlin" />

              <p className="mt-8">
                The current Summerlin real estate market shows strong demand with <strong>342 active listings</strong> and
                an average of just <strong>22 days on market</strong>. The median home price of <strong>$625,000</strong> represents
                solid appreciation while still offering value compared to similar communities in California.
                Buyers relocating from the West Coast compare January 2026 medians at Suite 100
                against California net proceeds — with no Nevada state income tax.
              </p>
              <p>
                Working with a <strong>Berkshire Hathaway HomeServices</strong> agent gives you access to listings
                before they hit the market and offer math written at 9406 W Lake Mead Blvd.
                Dr. Jan Duffy has been serving Summerlin since 2008 — which streets have mountain views
                and which builder rows we register first are desk facts, not a search screenshot.
              </p>
            </div>
          </section>

          <ExpertQuote path="/neighborhoods/summerlin" />

          <NeighborhoodFaqs path="/neighborhoods/summerlin" />

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Book a Red Rock and Trails loop from Lake Mead Blvd
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Tour Red Rock trailheads and Summerlin villages with Dr. Jan Duffy. Same-day showings
              start 10–15 minutes from the Lake Mead Blvd office.
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
