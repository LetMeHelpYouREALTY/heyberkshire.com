import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  MapPin,
  DollarSign,
  Trophy,
  Dumbbell,
  Users,
  CheckCircle,
  Car,
  TrendingUp,
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
  path: "/55-plus-communities/sun-city-aliante",
  title: "Sun City Aliante Homes for Sale | Most Affordable Sun City | Dr. Jan Duffy",
  description:
    "Sun City Aliante - the most affordable Sun City in Las Vegas. Homes from $280K-$550K with full amenities. 18-hole golf course, pools, fitness center. Dr. Jan Duffy, BHHS. Call (702) 222-1964.",
  keywords: [
    "Sun City Aliante homes for sale",
    "Sun City Aliante Las Vegas",
    "55 plus communities North Las Vegas",
    "affordable 55+ community Las Vegas",
    "Sun City Aliante HOA fees",
    "Berkshire Hathaway Sun City Aliante",
  ],
  openGraph: {
    title: "Sun City Aliante - Most Affordable Sun City in Las Vegas",
    description:
      "Full amenities at the lowest price point. Golf, pools, fitness, 100+ clubs. From $280K. Dr. Jan Duffy, BHHS Nevada Properties.",
    type: "website",
  },
});

const communitySchema = {
  "@context": "https://schema.org",
  "@type": "Place",
  name: "Sun City Aliante",
  description:
    "The most affordable Sun City community in Las Vegas with 2,800+ homes and full amenities",
  address: {
    "@type": "PostalAddress",
    addressLocality: "North Las Vegas",
    addressRegion: "NV",
    postalCode: "89084",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.2868,
    longitude: -115.1523,
  },
};

export default function SunCityAliantePage() {
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
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <DollarSign className="h-4 w-4 mr-2" />
              Most Affordable Sun City in Las Vegas
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Sun City Aliante
            </h1>
            <HeadingPhoto path="/55-plus-communities/sun-city-aliante" />

            <p className="text-xl text-slate-600">
              Full Sun City amenities at the best value. Golf, pools, fitness, and
              100+ clubs—from $280K.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
            </div>
            <div className="mt-8 max-w-xl mx-auto text-left">
              <p className="text-sm font-semibold text-slate-700 mb-3 text-center">Search live MLS inventory</p>
              <RealScoutSearch />
            </div>
          </div>
          <OfficeProximity path="/55-plus-communities/sun-city-aliante" />
          <UniqueInterior path="/55-plus-communities/sun-city-aliante" />


          {/* Quick Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              2,800+ Homes, $140–$175 HOA, $280K–$550K Band — Stats Before the North Loop
            </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">
                  $280K-$550K
                </div>
                <div className="text-slate-300 text-sm">Price Range</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">
                  $140-$175
                </div>
                <div className="text-slate-300 text-sm">Monthly HOA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">2,800+</div>
                <div className="text-slate-300 text-sm">Homes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">55+</div>
                <div className="text-slate-300 text-sm">Age Requirement</div>
              </div>
            </div>
          </section>

          <LeftoverBand path="/55-plus-communities/sun-city-aliante" />

          <FiftyFiveAmenities path="/55-plus-communities/sun-city-aliante" />

          {/* Location Benefits */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Aliante Casino, I-215, and Harry Reid International (LAS) from this North Campus
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start">
                  <Car className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      Easy Freeway Access
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Direct access to I-215 and US-95. Downtown Las Vegas and the
                      Strip are just 20-25 minutes away.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      Aliante Casino & Hotel
                    </h3>
                    <p className="text-slate-600 text-sm">
                      Walking distance to Aliante Casino with dining, entertainment,
                      and movie theater.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start">
                  <DollarSign className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      Lower Property Taxes
                    </h3>
                    <p className="text-slate-600 text-sm">
                      North Las Vegas offers some of the lowest property tax rates
                      in the valley.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">
                      Growing Area
                    </h3>
                    <p className="text-slate-600 text-sm">
                      North Las Vegas is one of the fastest-growing cities in
                      Nevada with ongoing development and improvements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Sun City Aliante */}
          <ExpertQuote path="/55-plus-communities/sun-city-aliante" />

          <FiftyFiveFaqs path="/55-plus-communities/sun-city-aliante" />


          {/* CTA */}
          <section className="text-center bg-green-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sun City Aliante rec sits on the north loop with North Vista Hospital
            </h2>
            <p className="text-xl text-green-100 mb-8">
              See Sun City Aliante's course, rec campus, and HOA dues on a 20–25 minute north loop.
            </p>
            <CtaActions variant="onDark" />
            <p className="text-green-200">
              Aliante 55+ and the adjoining retail strip fit one north-valley tour from the office.
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
