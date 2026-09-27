import Link from "next/link";
import {
  MapPin,
  DollarSign,
  TrendingUp,
  Search,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";
import CtaActions from "@/components/sections/CtaActions";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import SupportFaqs from "@/components/sections/SupportFaqs";
import ExpertQuote from "@/components/sections/ExpertQuote";
import ProcessSteps from "@/components/sections/ProcessSteps";
import LeftoverBand from "@/components/sections/LeftoverBand";
import RealScoutSearch from "@/components/realscout/RealScoutSearch";
import MlsDisclaimer from "@/components/shared/MlsDisclaimer";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Las Vegas Homes for Sale | MLS Property Search | Berkshire Hathaway HomeServices",
  description:
    "Browse all Las Vegas and Henderson homes for sale with live MLS listings. Search by neighborhood, price, and features. Dr. Jan Duffy, Berkshire Hathaway HomeServices. Call (702) 222-1964.",
  path: "/listings",
  keywords: [
    "Las Vegas homes for sale",
    "Henderson real estate",
    "MLS listings Las Vegas",
    "Summerlin homes",
    "houses for sale Las Vegas",
    "Berkshire Hathaway listings",
  ],
});

const listingsSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateListing",
  name: "Las Vegas MLS Property Listings",
  description: "Live MLS property listings for Las Vegas, Henderson, and Summerlin homes for sale",
  provider: {
    "@type": "RealEstateAgent",
    name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
    telephone: "+17025001942",
  },
  areaServed: [
    { "@type": "City", name: "Las Vegas, NV" },
    { "@type": "City", name: "Henderson, NV" },
    { "@type": "City", name: "Summerlin, NV" },
  ],
};

const popularSearches = [
  { name: "Summerlin Homes", href: "/neighborhoods/summerlin", count: "1,200+" },
  { name: "Henderson Properties", href: "/neighborhoods/henderson", count: "980+" },
  { name: "Green Valley", href: "/neighborhoods/green-valley", count: "450+" },
  { name: "The Ridges Luxury", href: "/neighborhoods/the-ridges", count: "85+" },
  { name: "55+ Communities", href: "/55-plus-communities", count: "320+" },
  { name: "New Construction", href: "/new-construction", count: "600+" },
];

const priceRanges = [
  { range: "Under $400K", description: "Starter homes, condos, townhomes", count: "1,500+" },
  { range: "$400K - $600K", description: "3–4 bedroom homes, 1,800–2,400 sq ft typical", count: "2,100+" },
  { range: "$600K - $1M", description: "Premium locations, larger homes", count: "1,200+" },
  { range: "$1M - $2M", description: "Luxury homes, guard-gated communities", count: "450+" },
  { range: "$2M+", description: "Ultra-luxury estates, custom builds", count: "180+" },
];

export default function ListingsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listingsSchema) }}
      />
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
<div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Las Vegas Homes for Sale
            </h1>
            <HeadingPhoto path="/listings" />

            <p className="text-xl text-slate-600 mb-8">
              Search thousands of Las Vegas, Henderson, and Summerlin properties with live MLS 
              listings updated every 15 minutes. Find your dream home with expert guidance from 
              Dr. Jan Duffy at <strong>Berkshire Hathaway HomeServices</strong>.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500 mb-8">
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Live MLS Data</span>
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Updated Every 15 Min</span>
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> 5,000+ Active Listings</span>
            </div>
            <div className="mb-8">
              <CtaActions variant="onLight" />
          <OfficeProximity path="/listings" />
          <UniqueInterior path="/listings" />
          <ExpertQuote path="/listings" />

            </div>
            <RealScoutSearch />
          </div>

          {/* RealScout Widget - Live MLS Listings */}
          <section className="mb-16">
            <div className="max-w-7xl mx-auto">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<realscout-office-listings 
                    agent-encoded-id="QWdlbnQtMjI1MDUw" 
                    sort-order="NEWEST" 
                    listing-status="For Sale" 
                    property-types=",SFR,MF,TC"
                  ></realscout-office-listings>`,
                }}
              />
              <MlsDisclaimer className="mt-4" />
            </div>
          </section>

          {/* Popular Searches Section */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              MLS slices already tagged — Summerlin, Henderson, Ridges, 55+, new builds
            </h2>
<p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Each card is a live GLVAR MLS slice: Summerlin, Henderson, Green Valley, The Ridges,
              55+ campuses, and new construction. Palo Verde High School and Coronado High School
              commutes are mapped by address at ccsd.net/zoning, not as a slogan. Call (702) 222-1964.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {popularSearches.map((search) => (
                <Link
                  key={search.name}
                  href={search.href}
                  className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-lg hover:border-blue-300 transition-all group flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-bold text-slate-900 group-hover:text-blue-600">
                      {search.name}
                    </h3>
                    <span className="text-sm text-slate-500">{search.count} listings</span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-blue-600" />
                </Link>
              ))}
            </div>
          </section>

          {/* Price Range Guide */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              January 2026 price bands — under $400K through $2M+ estates
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Nevada has no state income tax. Confirm the week you tour: under $400K condos and
              townhomes, $400K–$600K at 1,800–2,400 sq ft typical, $1M+ guard-gated product. Call
              (702) 222-1964 from 9406 W Lake Mead Blvd, Suite 100.
            </p>
            <div className="space-y-4">
              {priceRanges.map((price, index) => (
                <div
                  key={price.range}
                  className="bg-white rounded-lg p-4 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between"
                >
                  <div className="flex items-center mb-2 md:mb-0">
                    <DollarSign className="h-5 w-5 text-green-600 mr-3" />
                    <div>
                      <h3 className="font-bold text-slate-900">{price.range}</h3>
                      <p className="text-sm text-slate-600">{price.description}</p>
                    </div>
                  </div>
                  <span className="text-blue-600 font-semibold">{price.count} homes</span>
                </div>
              ))}
            </div>
          </section>

          <LeftoverBand path="/listings" />

          {/* Why Use an Agent Section */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <h2 className="scroll-mt-32 text-3xl font-bold mb-6 text-center">
              Live MLS from Suite 100, then the first two ZIP loops
            </h2>
            <p className="text-slate-300 text-center max-w-3xl mx-auto mb-8">
              Search is opened at 9406 W Lake Mead Blvd. Dr. Jan Duffy sequences Summerlin
              10–15 minutes west, then a Henderson loop if that is the brief. Call (702) 222-1964.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Search className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Off-market windows from the desk</h3>
                <p className="text-slate-400 text-sm">
                  Pocket listings come through the BHHS network. We do not text addresses on unsecured threads.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Escalation language written at Suite 100</h3>
                <p className="text-slate-400 text-sm">
                  $127M+ in closed files. Inspection and appraisal terms are drafted before you leave the office.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Named campuses and commute minutes by street</h3>
                <p className="text-slate-400 text-sm">
                  Palo Verde, Coronado, Arbor View — mapped at ccsd.net/zoning, not as a slogan
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="font-bold mb-2">Buyer-agency is on the seller's commission</h3>
                <p className="text-slate-400 text-sm">
                  Full representation. The listing side pays the cooperating fee in a typical Las Vegas sale.
                </p>
              </div>
            </div>
          </section>

          {/* Market Stats */}
          <LeftoverBand path="/listings" slot={1} />
          <section className="mb-16 max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">$450K</div>
                <div className="text-sm text-slate-600">Median Home Price</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">28</div>
                <div className="text-sm text-slate-600">Avg Days on Market</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">4,850</div>
                <div className="text-sm text-slate-600">Active Listings</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">+4.2%</div>
                <div className="text-sm text-slate-600">Year-Over-Year</div>
              </div>
            </div>
          </section>

          <ProcessSteps path="/listings" />

          <SupportFaqs path="/listings" />

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Search live MLS from Suite 100, then drive the first two ZIPs
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy for personalized guidance, off-market listings, and expert 
              representation backed by Berkshire Hathaway HomeServices. Free buyer consultations 
              available—the seller pays the commission.
            </p>
            <CtaActions variant="onDark" />
          </section>
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
    </>
  );
}
