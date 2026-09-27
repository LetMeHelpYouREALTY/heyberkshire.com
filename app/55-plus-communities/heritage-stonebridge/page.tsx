import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Shield,
  Home as HomeIcon,
  Dumbbell,
  Users,
  CheckCircle,
  ShoppingBag,
  Mountain,
  Star,
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
  path: "/55-plus-communities/heritage-stonebridge",
  title: "Heritage at Stonebridge Homes for Sale | Guard-Gated 55+ Summerlin | Dr. Jan Duffy",
  description:
    "Heritage at Stonebridge - boutique guard-gated 55+ community in Summerlin. Homes from $400K-$750K. Near Downtown Summerlin, Red Rock Canyon. Dr. Jan Duffy, BHHS. Call (702) 222-1964.",
  keywords: [
    "Heritage at Stonebridge homes for sale",
    "Heritage Stonebridge Summerlin",
    "guard-gated 55+ community Las Vegas",
    "Summerlin 55+ communities",
    "boutique 55+ community Las Vegas",
    "Berkshire Hathaway Heritage Stonebridge",
  ],
  openGraph: {
    title: "Heritage at Stonebridge - Guard-Gated 55+ Living in Summerlin",
    description:
      "Boutique community with premium Summerlin location. Guard-gated security, near Downtown Summerlin. From $400K. Dr. Jan Duffy, BHHS.",
    type: "website",
  },
});

const communitySchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Heritage at Stonebridge",
  description:
    "Guard-gated 55+ community in Summerlin with 1,100+ homes and premium location",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89134",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.1912,
    longitude: -115.3124,
  },
};

export default function HeritageAtStonebridgePage() {
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
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Guard-Gated Summerlin 55+ Community
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Heritage at Stonebridge
            </h1>
            <HeadingPhoto path="/55-plus-communities/heritage-stonebridge" />

            <p className="text-xl text-slate-600">
              Boutique 55+ living with guard-gated privacy in the heart of
              Summerlin.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
            </div>
            <div className="mt-8 max-w-xl mx-auto text-left">
              <p className="text-sm font-semibold text-slate-700 mb-3 text-center">Search live MLS inventory</p>
              <RealScoutSearch />
            </div>
          </div>
          <OfficeProximity path="/55-plus-communities/heritage-stonebridge" />
          <UniqueInterior path="/55-plus-communities/heritage-stonebridge" />


          {/* Quick Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              1,100+ Homes, $175–$220 HOA, $400K–$750K Band — Stats Before the Guest List
            </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">
                  $400K-$750K
                </div>
                <div className="text-slate-300 text-sm">Price Range</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">
                  $175-$220
                </div>
                <div className="text-slate-300 text-sm">Monthly HOA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">1,100+</div>
                <div className="text-slate-300 text-sm">Homes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">
                  Guard-Gated
                </div>
                <div className="text-slate-300 text-sm">24/7 Security</div>
              </div>
            </div>
          </section>

          <LeftoverBand path="/55-plus-communities/heritage-stonebridge" />

          <FiftyFiveAmenities path="/55-plus-communities/heritage-stonebridge" />

          {/* Location Benefits */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Downtown Summerlin retail, 12–18 minutes from 9406 W Lake Mead Blvd
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start">
                  <ShoppingBag className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      Downtown Summerlin
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Minutes from 125+ stores, restaurants, and entertainment.
                      Major retailers, fine dining, and a vibrant social scene.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start">
                  <Mountain className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      Red Rock Canyon
                    </h3>
                    <p className="text-slate-600 text-sm">
                      World-class hiking and scenic drives just 15 minutes away.
                      Stunning desert landscapes and outdoor recreation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      TPC Las Vegas & Golf
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Multiple championship courses nearby. Pay-as-you-play
                      flexibility without mandatory golf memberships.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-purple-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      Central to Everything
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Easy access to the Strip, airport, hospitals, and all major
                      Las Vegas attractions and services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Heritage */}
          <ExpertQuote path="/55-plus-communities/heritage-stonebridge" />

          <FiftyFiveFaqs path="/55-plus-communities/heritage-stonebridge" />


          {/* CTA */}
          <section className="text-center bg-purple-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get on the Heritage gate list from Suite 100, then Downtown Summerlin
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Heritage sits 10–20 minutes from Suite 100. Tour the staffed gate
              and clubhouse with Dr. Jan Duffy, then Downtown Summerlin if time remains.
            </p>
            <CtaActions variant="onDark" />
            <p className="text-purple-200">
              The Heritage gate is 12–18 minutes from 9406 W Lake Mead Blvd, next to Downtown Summerlin.
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
