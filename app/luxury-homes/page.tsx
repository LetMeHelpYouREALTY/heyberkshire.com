import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import CtaActions from "@/components/sections/CtaActions";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import ExpertQuote from "@/components/sections/ExpertQuote";
import ProcessSteps from "@/components/sections/ProcessSteps";
import LeftoverBand from "@/components/sections/LeftoverBand";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import IntentFaqs from "@/components/sections/IntentFaqs";
import { pageMetadata } from "@/lib/seo";


export const metadata: Metadata = pageMetadata({
  path: "/luxury-homes",
  title: "Las Vegas Luxury Homes for Sale | Berkshire Hathaway HomeServices",
  description:
    "Discover Las Vegas luxury real estate with Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. The Ridges, MacDonald Highlands, Summerlin, Southern Highlands. $1M+ homes. Call (702) 222-1964.",
  keywords: [
    "Las Vegas luxury homes",
    "The Ridges Las Vegas",
    "Summerlin luxury real estate",
    "Southern Highlands homes",
    "Berkshire Hathaway luxury",
    "million dollar homes Las Vegas",
    "MacDonald Highlands Henderson",
    "luxury real estate agent Las Vegas",
  ],
});

const luxurySchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Las Vegas Luxury Home Services",
  provider: {
    "@type": "RealEstateAgent",
    name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
    telephone: "+17025001942",
  },
  areaServed: "Las Vegas, Henderson, Summerlin luxury communities",
  serviceType: "Luxury Real Estate",
  priceRange: "$1,000,000+",
};

const luxuryNeighborhoods = [
  {
    name: "The Ridges",
    location: "Summerlin",
    priceRange: "$2M - $15M+",
    description:
      "Guard-gated Summerlin ridge lots, Bear's Best Golf Club, and custom estates. January 2026 median $2.5M. Gate lists from Suite 100.",
    features: ["Guard-gated", "Custom estates", "Red Rock views", "Golf course"],
  },
  {
    name: "MacDonald Highlands",
    location: "Henderson",
    priceRange: "$1.5M - $10M+",
    description:
      "Hillside Henderson lots, Dragon Ridge Country Club, and Strip-view streets. $1.5M–$10M+ published band. 25–35 minutes from Suite 100.",
    features: ["Hillside location", "Strip views", "Country club", "Private lots"],
  },
  {
    name: "Southern Highlands",
    location: "Las Vegas",
    priceRange: "$800K - $5M+",
    description:
      "Guard-gated luxury community featuring championship golf, stunning mountain views, and resort-style living. Multiple neighborhoods within the community.",
    features: ["Guard-gated", "Golf community", "Mountain views", "Multiple villages"],
  },
  {
    name: "The Summit Club",
    location: "Summerlin",
    priceRange: "$3M - $20M+",
    description:
      "Tom Fazio golf, 250 homesites, membership by invitation. $3M–$20M+ published band. Gate lists confirmed at Suite 100.",
    features: ["Private golf", "250 homesites", "Invitation only", "Tom Fazio design"],
  },
  {
    name: "Ascaya",
    location: "Henderson",
    priceRange: "$2M - $12M+",
    description:
      "Modern architectural community with panoramic views and contemporary custom homes. Known for innovative design and dramatic hillside settings.",
    features: ["Modern architecture", "Panoramic views", "Custom homes", "Hillside lots"],
  },
  {
    name: "Lake Las Vegas",
    location: "Henderson",
    priceRange: "$800K - $8M+",
    description:
      "Resort-style living on a 320-acre private lake with Mediterranean-inspired architecture. Golf, water sports, and a European village atmosphere.",
    features: ["Lakefront living", "Resort amenities", "Golf courses", "Mediterranean style"],
  },
];

export default function LuxuryHomesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(luxurySchema) }}
      />
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              List or Buy Las Vegas Luxury Homes With BHHS
            </h1>
            <HeadingPhoto path="/luxury-homes" />

            <p className="text-xl text-slate-600 mb-8">
              <strong>Berkshire Hathaway HomeServices</strong> represents the gold standard in
              luxury real estate. When you're buying or selling a $1M+ home, trust matters more than
              ever. Our global network, discretion, and expertise ensure your luxury transaction 
              receives the exceptional service it deserves.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Gate lists confirmed at Suite 100</span>
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Off-market windows in writing</span>
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Addresses stay off group texts</span>
            </div>
            <div className="mt-8">
              <CtaActions variant="onLight" bookLabel="Request Private Showing" />
          <OfficeProximity path="/luxury-homes" />
          <UniqueInterior path="/luxury-homes" />

            </div>
          </div>

          {/* Luxury Stats */}
          <LeftoverBand path="/luxury-homes" slot={1} />
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">$1.2M</div>
                <div className="text-slate-300 text-sm">Median Luxury Price</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">+8.5%</div>
                <div className="text-slate-300 text-sm">YoY Appreciation</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">890</div>
                <div className="text-slate-300 text-sm">Active $1M+ Listings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">45 Days</div>
                <div className="text-slate-300 text-sm">Avg. Days on Market</div>
              </div>
            </div>
          </section>

          <ProcessSteps path="/luxury-homes" />

          <ExpertQuote path="/luxury-homes" />

          {/* Luxury Neighborhoods */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Ridges, Highlands, and Lake Las Vegas — one campus per afternoon
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Guard-gated, golf-course, and lakefront luxury product is compared by square footage,
              HOA packet, and drive time from Suite 100—not by slogan. From The Ridges to Southern
              Highlands to Lake Las Vegas, we sequence one campus per afternoon.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {luxuryNeighborhoods.map((neighborhood) => (
                <div
                  key={neighborhood.name}
                  className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-bold text-lg text-slate-900">{neighborhood.name}</h3>
                      <p className="text-sm text-slate-500">{neighborhood.location}</p>
                    </div>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                      {neighborhood.priceRange}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm mb-4">{neighborhood.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.features.map((feature) => (
                      <span key={feature} className="bg-slate-100 text-slate-600 text-xs px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/neighborhoods"
                className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center"
              >
                Explore All Neighborhoods <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </section>

          <LeftoverBand path="/luxury-homes" />

          <IntentFaqs path="/luxury-homes" />


          {/* CTA */}
          <section className="text-center bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Gate lists for The Ridges and MacDonald Highlands start at the desk
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Whether buying or selling a luxury property, Dr. Jan Duffy provides the expertise and
              Berkshire Hathaway prestige your transaction deserves. Confidential consultations 
              available for discerning clients.
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
