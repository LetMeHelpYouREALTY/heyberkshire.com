import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CtaActions from "@/components/sections/CtaActions";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import NamedCampuses from "@/components/sections/NamedCampuses";
import NeighborhoodCommute from "@/components/sections/NeighborhoodCommute";
import NeighborhoodAmenities from "@/components/sections/NeighborhoodAmenities";
import NeighborhoodLifestyle from "@/components/sections/NeighborhoodLifestyle";
import NeighborhoodFaqs from "@/components/sections/NeighborhoodFaqs";
import ExpertQuote from "@/components/sections/ExpertQuote";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import RealScoutSearch from "@/components/realscout/RealScoutSearch";
import LeftoverBand from "@/components/sections/LeftoverBand";

export const metadata: Metadata = pageMetadata({
  path: "/neighborhoods",
  title: "Las Vegas Neighborhoods | Berkshire Hathaway HomeServices",
  description:
    "Explore Las Vegas and Henderson neighborhoods with Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. Summerlin, Henderson, The Ridges, Southern Highlands & more.",
  keywords: [
    "Las Vegas neighborhoods",
    "Henderson communities",
    "Summerlin real estate",
    "Las Vegas neighborhood guide",
    "where to live Las Vegas",
  ],
});

const neighborhoods = [
  {
    name: "Summerlin",
    slug: "summerlin",
    medianPrice: "$625,000",
    priceChange: "+6.8%",
    description: "Howard Hughes 22,500-acre west-valley plat with parks, trails, and Red Rock Canyon trailheads",
    highlights: ["150+ Parks", "150+ Miles of Trails", "Red Rock Views", "Downtown Summerlin"],
    bestFor: "Parks, trails, Red Rock access",
  },
  {
    name: "Henderson",
    slug: "henderson",
    medianPrice: "$485,000",
    priceChange: "+5.1%",
    description: "Nevada's second-largest city known for parks, trails, and community recreation",
    highlights: ["60+ Parks", "Recreation Centers", "Lake Las Vegas", "Green Valley"],
    bestFor: "Master-planned villages, commute options",
  },
  {
    name: "Green Valley",
    slug: "green-valley",
    medianPrice: "$520,000",
    priceChange: "+4.8%",
    description: "Henderson community with mature landscaping and golf amenities",
    highlights: ["Golf Courses", "Walking Trails", "The District", "Mature Trees"],
    bestFor: "Golf, shopping, 35-year-old street trees",
  },
  {
    name: "The Ridges",
    slug: "the-ridges",
    medianPrice: "$2,500,000",
    priceChange: "+8.5%",
    description: "Ultra-luxury guard-gated community with custom estates and celebrity residents",
    highlights: ["Guard-Gated", "Custom Estates", "Bear's Best Golf", "Strip Views"],
    bestFor: "Luxury estates, privacy, golf",
  },
  {
    name: "Southern Highlands",
    slug: "southern-highlands",
    medianPrice: "$750,000",
    priceChange: "+7.2%",
    description: "Master-planned luxury community with championship golf and mountain views",
    highlights: ["Golf Community", "Guard-Gated", "Mountain Views", "Luxury Amenities"],
    bestFor: "Golf, mountain views, custom homes",
  },
  {
    name: "North Las Vegas",
    slug: "north-las-vegas",
    medianPrice: "$385,000",
    priceChange: "+3.2%",
    description: "Rapidly growing area with affordable new construction and parks",
    highlights: ["New Construction", "Affordable", "Growing Area", "Parks and Trails"],
    bestFor: "New construction, rental comps, northwest commute",
  },
  {
    name: "Skye Canyon",
    slug: "skye-canyon",
    medianPrice: "$550,000",
    priceChange: "+5.5%",
    description: "Newer master-planned community in northwest Las Vegas with mountain views",
    highlights: ["New Homes", "Mountain Views", "Skye Center", "Floyd Lamb Park"],
    bestFor: "New homes, trails, northwest commute",
  },
  {
    name: "Centennial Hills",
    slug: "centennial-hills",
    medianPrice: "$495,000",
    priceChange: "+4.8%",
    description: "Northwest Las Vegas community with mountain proximity and recreation amenities",
    highlights: ["Mountain Access", "Parks", "Shopping", "Recreation Centers"],
    bestFor: "Mountain access, shopping, parks",
  },
  {
    name: "Inspirada",
    slug: "inspirada",
    medianPrice: "$525,000",
    priceChange: "+5.0%",
    description: "Henderson master-planned community with resort-style living and modern homes",
    highlights: ["Resort Pools", "Walking Trails", "New Construction", "Town Center"],
    bestFor: "Resort amenities, new homes, walkability",
  },
  {
    name: "Mountains Edge",
    slug: "mountains-edge",
    medianPrice: "$475,000",
    priceChange: "+4.5%",
    description: "Southwest Las Vegas master-planned community with mountain views and parks",
    highlights: ["Mountain Views", "Parks", "Growing Area", "Affordable Luxury"],
    bestFor: "Southwest commute, parks, value",
  },
];

export default function NeighborhoodsPage() {
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
              Las Vegas & Henderson Neighborhoods
            </h1>
            <HeadingPhoto path="/neighborhoods" />

            <p className="text-xl text-slate-600">
              Compare Las Vegas and Henderson neighborhoods with Dr. Jan Duffy, your{" "}
              <strong>Berkshire Hathaway HomeServices</strong> neighborhood expert
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
          <OfficeProximity path="/neighborhoods" />
          <UniqueInterior path="/neighborhoods" />

            </div>
            <div className="mt-8">
              <RealScoutSearch />
            </div>
          </div>

          <LeftoverBand path="/neighborhoods" />
          <section className="mb-16 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {neighborhoods.map((neighborhood) => (
                <Link
                  key={neighborhood.slug}
                  href={`/neighborhoods/${neighborhood.slug}`}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg transition-all hover:border-blue-300 group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {neighborhood.name}
                      </h2>
                      <p className="text-sm text-slate-500">{neighborhood.bestFor}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-slate-900">{neighborhood.medianPrice}</div>
                      <div className="text-sm text-green-600">{neighborhood.priceChange} YoY</div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-4">{neighborhood.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <ExpertQuote path="/neighborhoods" />

          <LeftoverBand path="/neighborhoods" slot={1} />

          <section className="mb-16 max-w-4xl mx-auto">
            <NamedCampuses path="/neighborhoods" />
            <NeighborhoodCommute path="/neighborhoods" />
            <NeighborhoodAmenities path="/neighborhoods" />
            <NeighborhoodLifestyle path="/neighborhoods" />
          </section>
          <NeighborhoodFaqs path="/neighborhoods" />

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto" data-neighborhood-cta="/neighborhoods">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Time one west loop and one Henderson loop from Suite 100
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Summerlin is 10–15 minutes. Green Valley is 25–35. Call (702) 222-1964 with two ZIPs — we will not city-swap a recommendation.
            </p>
            <CtaActions variant="onDark" />
          </section>
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
    </>
  );
}
