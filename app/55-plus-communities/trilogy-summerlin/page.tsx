import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Star,
  UtensilsCrossed,
  Dumbbell,
  Users,
  CheckCircle,
  Sparkles,
  Home as HomeIcon,
  Heart,
} from "lucide-react";
import type { Metadata } from "next";
import CtaActions from "@/components/sections/CtaActions";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import LeftoverBand from "@/components/sections/LeftoverBand";
import FiftyFiveFaqs from "@/components/sections/FiftyFiveFaqs";
import ExpertQuote from "@/components/sections/ExpertQuote";
import FiftyFiveAmenities from "@/components/sections/FiftyFiveAmenities";
import RealScoutSearch from "@/components/realscout/RealScoutSearch";
import { pageMetadata } from "@/lib/seo";


export const metadata: Metadata = pageMetadata({
  path: "/55-plus-communities/trilogy-summerlin",
  title: "Trilogy at Summerlin Homes for Sale | Luxury Resort 55+ Living | Dr. Jan Duffy",
  description:
    "Trilogy at Summerlin - luxury resort-style 55+ community. Homes from $500K-$1.1M. On-site farm-to-table restaurant, spa, contemporary designs. Dr. Jan Duffy, BHHS. Call (702) 222-1964.",
  keywords: [
    "Trilogy at Summerlin homes for sale",
    "Trilogy Summerlin Las Vegas",
    "luxury 55+ community Las Vegas",
    "resort style 55+ Las Vegas",
    "Shea Homes Trilogy",
    "Berkshire Hathaway Trilogy Summerlin",
  ],
  openGraph: {
    title: "Trilogy at Summerlin - Luxury Resort 55+ Living",
    description:
      "Where resort living meets 55+ community. Farm-to-table dining, spa, contemporary homes. From $500K. Dr. Jan Duffy, BHHS.",
    type: "website",
  },
});

const communitySchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Trilogy at Summerlin",
  description:
    "Luxury resort-style 55+ community in Summerlin with 800+ homes and upscale amenities",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89135",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.1523,
    longitude: -115.3456,
  },
};

export default function TrilogySummerlinPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(communitySchema) }}
      />
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
{/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-rose-100 text-rose-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              Luxury Resort-Style 55+ Living
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Trilogy at Summerlin
            </h1>
            <HeadingPhoto path="/55-plus-communities/trilogy-summerlin" />

            <p className="text-xl text-slate-600">
              Where five-star resort living meets 55+ community. Farm-to-table
              dining, world-class spa, and contemporary homes.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
            </div>
            <div className="mt-8 max-w-xl mx-auto text-left">
              <p className="text-sm font-semibold text-slate-700 mb-3 text-center">Search live MLS inventory</p>
              <RealScoutSearch />
            </div>
          </div>
          <OfficeProximity path="/55-plus-communities/trilogy-summerlin" />
          <UniqueInterior path="/55-plus-communities/trilogy-summerlin" />


          {/* Quick Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              800+ Shea Homes, $250–$350 HOA, $500K–$1.1M Band — Stats Before the Clubhouse
            </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-400 mb-1">
                  $500K-$1.1M
                </div>
                <div className="text-slate-300 text-sm">Price Range</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-400 mb-1">
                  $250-$350
                </div>
                <div className="text-slate-300 text-sm">Monthly HOA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">800+</div>
                <div className="text-slate-300 text-sm">Homes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-400 mb-1">
                  Luxury
                </div>
                <div className="text-slate-300 text-sm">Resort Amenities</div>
              </div>
            </div>
          </section>

          <LeftoverBand path="/55-plus-communities/trilogy-summerlin" />

          <FiftyFiveAmenities path="/55-plus-communities/trilogy-summerlin" />

          {/* Home Features */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Open plans and first-floor primaries — walk one Shea row from Suite 100
            </h2>
            <p className="text-lg text-slate-600 text-center mb-8 max-w-3xl mx-auto">
              Trilogy homes break the mold of traditional 55+ construction with
              modern architecture, open layouts, and designer-selected finishes.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-3">
                  Architecture & Design
                </h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Contemporary desert modern aesthetic
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Open floor plans with great rooms
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Indoor-outdoor living spaces
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Large windows for natural light
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-3">
                  Features & Finishes
                </h3>
                <ul className="text-slate-600 text-sm space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Chef's kitchens with premium appliances
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Spa-inspired master bathrooms
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Smart home technology
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Energy-efficient construction
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Why Choose Trilogy */}
          <ExpertQuote path="/55-plus-communities/trilogy-summerlin" />

          <FiftyFiveFaqs path="/55-plus-communities/trilogy-summerlin" />


          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Walk the Trilogy clubhouse pool 12–18 minutes from Suite 100
            </h2>
            <p className="text-xl text-rose-100 mb-8">
              Clubhouse, spa, and Shea plan rows sit 12–18 minutes from 9406 W Lake Mead Blvd. Register before walking models. Call (702) 222-1964.
            </p>
            <CtaActions variant="onDark" />
            <p className="text-rose-200">
              Clubhouse, spa, and Shea plans are 12–18 minutes from the Lake Mead Blvd office.
            </p>
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">
          Last Updated: January 2026
        </div>
      </main>
      <RealScoutListings />
    </>
  );
}
