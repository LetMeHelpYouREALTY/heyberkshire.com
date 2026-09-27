import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Home as HomeIcon,
  DollarSign,
  Users,
  Dumbbell,
  Trophy,
  Heart,
  Mountain,
  CheckCircle,
} from "lucide-react";
import type { Metadata } from "next";
import CtaActions from "@/components/sections/CtaActions";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import LeftoverBand from "@/components/sections/LeftoverBand";
import RealScoutSearch from "@/components/realscout/RealScoutSearch";
import FiftyFiveFaqs from "@/components/sections/FiftyFiveFaqs";
import ExpertQuote from "@/components/sections/ExpertQuote";
import FiftyFiveAmenities from "@/components/sections/FiftyFiveAmenities";
import { pageMetadata } from "@/lib/seo";


export const metadata: Metadata = pageMetadata({
  path: "/55-plus-communities/sun-city-summerlin",
  title: "Sun City Summerlin Homes for Sale | Berkshire Hathaway HomeServices",
  description:
    "Nevada's largest 55+ community. Sun City Summerlin homes from $320K-$850K. 3 golf courses, 4 rec centers, 100+ clubs. Dr. Jan Duffy, BHHS specialist. Call (702) 222-1964.",
  keywords: [
    "Sun City Summerlin homes for sale",
    "Sun City Summerlin Las Vegas",
    "55 plus communities Summerlin",
    "retirement community Las Vegas",
    "Berkshire Hathaway Sun City",
  ],
});

const communitySchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Sun City Summerlin",
  description: "Nevada's largest 55+ active adult community with 7,700+ homes",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89134",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.2048,
    longitude: -115.2954,
  },
};


export default function SunCitySummerlinPage() {
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
            <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Trophy className="h-4 w-4 mr-2" />
              Nevada's Largest 55+ Community
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Sun City Summerlin
            </h1>
            <HeadingPhoto path="/55-plus-communities/sun-city-summerlin" />

            <p className="text-xl text-slate-600">
              7,700+ homes. 3 golf courses. 4 recreation centers. The gold standard of active adult living.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
            </div>
            <div className="mt-8 max-w-xl mx-auto text-left">
              <p className="text-sm font-semibold text-slate-700 mb-3 text-center">Search live MLS inventory</p>
              <RealScoutSearch />
            </div>
          </div>
          <OfficeProximity path="/55-plus-communities/sun-city-summerlin" />
          <UniqueInterior path="/55-plus-communities/sun-city-summerlin" />


          {/* Quick Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              7,700+ Homes, $155–$195 HOA, $320K–$850K Band — Stats Before the Rec Walk
            </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-1">$320K-$850K</div>
                <div className="text-slate-300 text-sm">Price Range</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-1">$155-$195</div>
                <div className="text-slate-300 text-sm">Monthly HOA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">7,700+</div>
                <div className="text-slate-300 text-sm">Homes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">55+</div>
                <div className="text-slate-300 text-sm">Age Requirement</div>
              </div>
            </div>
          </section>

          <LeftoverBand path="/55-plus-communities/sun-city-summerlin" />

          <FiftyFiveAmenities path="/55-plus-communities/sun-city-summerlin" />

          {/* Neighborhoods */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Highlands, Sun Terrace, Eagle Crest, and Palm Valley — named villages on this campus
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">The Highlands</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Original section with mature landscaping. Walking distance to Highland Falls golf
                  and Mountain Shadows rec center. Homes $320K-$500K.
                </p>
                <div className="text-xs text-slate-500">Best for: Golf lovers, budget-conscious buyers</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Sun Terrace</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Elevated homes with Strip and mountain views. Near Sun Shadows rec center.
                  Premium lots command $450K-$700K.
                </p>
                <div className="text-xs text-slate-500">Best for: View seekers, larger homes</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Eagle Crest</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Newer section (2000s) with updated floor plans. Adjacent to Eagle Crest golf course.
                  Homes $400K-$650K.
                </p>
                <div className="text-xs text-slate-500">Best for: Modern amenities, golf course views</div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-2">Pinnacle/Del Webb</h3>
                <p className="text-slate-600 text-sm mb-3">
                  Premium custom and semi-custom homes. Largest lots, highest elevations, best views.
                  $600K-$850K+.
                </p>
                <div className="text-xs text-slate-500">Best for: Luxury buyers, privacy</div>
              </div>
            </div>
          </section>

          {/* Why Choose */}
          <ExpertQuote path="/55-plus-communities/sun-city-summerlin" />

          <FiftyFiveFaqs path="/55-plus-communities/sun-city-summerlin" />


          {/* CTA */}
          <section className="text-center bg-amber-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Walk one rec building and one course — 10–15 minutes from Suite 100
            </h2>
            <p className="text-xl text-amber-100 mb-8">
              Highland Falls, Palm Valley, and Eagle Crest plus four rec campuses. Pick one course and one rec building per visit. Call (702) 222-1964.
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
