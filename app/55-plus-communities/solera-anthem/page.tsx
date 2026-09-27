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
  Heart,
  Mountain,
  DollarSign,
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
  path: "/55-plus-communities/solera-anthem",
  title: "Solera at Anthem Homes for Sale | Intimate Guard-Gated 55+ Henderson | Dr. Jan Duffy",
  description:
    "Solera at Anthem - guard-gated 55+ community in Henderson with about 1,200 homes. Homes from $380K-$650K. Lower HOA fees, staffed gate. Dr. Jan Duffy, BHHS. Call (702) 222-1964.",
  keywords: [
    "Solera at Anthem homes for sale",
    "Solera Anthem Henderson",
    "guard-gated 55+ community Henderson",
    "Henderson 55+ communities",
    "Henderson 55+ communities",
    "Berkshire Hathaway Solera Anthem",
  ],
  openGraph: {
    title: "Solera at Anthem - Intimate Guard-Gated 55+ in Henderson",
    description:
      "Close-knit community with a staffed gate. Lower HOA fees. From $380K. Dr. Jan Duffy, BHHS.",
    type: "website",
  },
});

const communitySchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Solera at Anthem",
  description:
    "Guard-gated 55+ community in Henderson with 1,200+ homes and a boutique clubhouse campus",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Henderson",
    addressRegion: "NV",
    postalCode: "89052",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 35.9982,
    longitude: -115.0961,
  },
};

export default function SoleraAnthemPage() {
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
            <div className="inline-flex items-center bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Heart className="h-4 w-4 mr-2" />
              Intimate Guard-Gated 55+ Community
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Solera at Anthem
            </h1>
            <HeadingPhoto path="/55-plus-communities/solera-anthem" />

            <p className="text-xl text-slate-600">
              Guard-gated 55+ living in Henderson's Anthem area.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
            </div>
            <div className="mt-8 max-w-xl mx-auto text-left">
              <p className="text-sm font-semibold text-slate-700 mb-3 text-center">Search live MLS inventory</p>
              <RealScoutSearch />
            </div>
          </div>
          <OfficeProximity path="/55-plus-communities/solera-anthem" />
          <UniqueInterior path="/55-plus-communities/solera-anthem" />


          {/* Quick Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              1,200+ Homes, $170–$210 HOA, $380K–$650K Band — Stats Before the Henderson Drive
            </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-1">
                  $380K-$650K
                </div>
                <div className="text-slate-300 text-sm">Price Range</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-1">
                  $170-$210
                </div>
                <div className="text-slate-300 text-sm">Monthly HOA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">1,200+</div>
                <div className="text-slate-300 text-sm">Homes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-1">
                  55+ Only
                </div>
                <div className="text-slate-300 text-sm">All Residents</div>
              </div>
            </div>
          </section>

          <LeftoverBand path="/55-plus-communities/solera-anthem" />

          <FiftyFiveAmenities path="/55-plus-communities/solera-anthem" />

          {/* Henderson Location */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Anthem parks, staffed gate, 30–35 minutes from Suite 100
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-teal-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      Guard-Gated Access
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Solera at Anthem is a smaller 55+ community with a staffed gate, HOA-maintained
                      streets, and a short drive to Anthem Center recreation.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start">
                  <Mountain className="h-6 w-6 text-teal-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      Anthem Master-Planned Community
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Located inside the Anthem master-planned streets in Henderson.
                      Mountain and desert views. 30–35 minutes from Suite 100.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-teal-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      Near Sun City Anthem
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Adjacent to Sun City Anthem with access to nearby golf,
                      dining, and the vibrant Anthem community.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start">
                  <DollarSign className="h-6 w-6 text-teal-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      Lower HOA Than Larger Communities
                    </h3>
                    <p className="text-slate-600 text-sm">
                      $170-$210/month—less than Sun City Anthem's $180-$230
                      because you're not subsidizing massive amenity complexes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Solera */}
          <ExpertQuote path="/55-plus-communities/solera-anthem" />

          <FiftyFiveFaqs path="/55-plus-communities/solera-anthem" />


          {/* CTA */}
          <section className="text-center bg-teal-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Tour Solera's 1,200-home campus with nearby Anthem parks
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Discover why Solera at Anthem offers a staffed gate and boutique clubhouse
              that 7,000-home campuses do not. Tour with Dr. Jan Duffy.
            </p>
            <CtaActions variant="onDark" />
            <p className="text-teal-200">
              Solera tours run with Anthem parks on a 30–35 minute Henderson block from the office.
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
