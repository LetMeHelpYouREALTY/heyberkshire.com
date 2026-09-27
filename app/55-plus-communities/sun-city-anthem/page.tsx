import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Mountain,
  Trophy,
  Shield,
  Dumbbell,
  Users,
  CheckCircle,
} from "lucide-react";
import type { Metadata } from "next";
import CtaActions from "@/components/sections/CtaActions";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import RealScoutSearch from "@/components/realscout/RealScoutSearch";
import FiftyFiveFaqs from "@/components/sections/FiftyFiveFaqs";
import ExpertQuote from "@/components/sections/ExpertQuote";
import FiftyFiveAmenities from "@/components/sections/FiftyFiveAmenities";
import LeftoverBand from "@/components/sections/LeftoverBand";
import { pageMetadata } from "@/lib/seo";

import SchemaScript from "@/components/SchemaScript";
import {
  generateBreadcrumbSchema,
  generateSeniorCommunitySchema,
  combineSchemas,
} from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  path: "/55-plus-communities/sun-city-anthem",
  title: "Sun City Anthem Homes for Sale | Berkshire Hathaway HomeServices",
  description:
    "Henderson 55+ campus with a 64,000 sq ft clubhouse. Sun City Anthem homes from $350K-$1.2M. 2 championship golf courses, McCullough Range views. Dr. Jan Duffy. Call (702) 222-1964.",
  keywords: [
    "Sun City Anthem homes for sale",
    "Sun City Anthem Henderson",
    "55 plus communities Henderson",
    "active adult Henderson",
    "Berkshire Hathaway Sun City Anthem",
  ],
});

// Breadcrumb items
const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "55+ Communities", url: "/55-plus-communities" },
  { name: "Sun City Anthem", url: "/55-plus-communities/sun-city-anthem" },
];

// Community amenities for schema
const communityAmenities = [
  { name: "Championship Golf Courses", description: "Anthem Country Club and Revere Golf Club" },
  { name: "Anthem Center Clubhouse", description: "64,000 sq ft facility with pools, fitness, and dining" },
  { name: "Indoor Swimming Pool", description: "Year-round heated indoor pool" },
  { name: "Outdoor Swimming Pool", description: "Resort-style outdoor pool" },
  { name: "Fitness Center", description: "State-of-the-art fitness equipment and classes" },
  { name: "Tennis Courts", description: "Multiple lighted tennis courts" },
  { name: "Pickleball Courts", description: "Dedicated pickleball facilities" },
  { name: "Walking Trails", description: "Miles of walking and hiking trails" },
  { name: "Restaurant", description: "On-site dining at the clubhouse" },
  { name: "Social Clubs", description: "80+ clubs and activity groups" },
];


// Combined page schemas
const pageSchemas = combineSchemas(
  generateBreadcrumbSchema(breadcrumbs),
  generateSeniorCommunitySchema({
    name: "Sun City Anthem",
    description:
      "Del Webb 55+ campus in Henderson with 7,100+ homes, Anthem Center about 64,000 sq ft, two golf courses, and McCullough Range views on many upper streets.",
    priceRange: "$350,000 - $1,200,000",
    numberOfHomes: 7100,
    yearBuilt: "1998-2008",
    amenities: communityAmenities,
    hoaFees: "$180-$230/month",
    latitude: 35.9631,
    longitude: -115.0892,
    ageRestriction: "55+",
  }),
);

export default function SunCityAnthemPage() {
  return (
    <>
      {/* Combined JSON-LD Schema: Breadcrumb + ResidentialComplex */}
      <SchemaScript schema={pageSchemas} id="sun-city-anthem-schema" />
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
{/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Mountain className="h-4 w-4 mr-2" />
              64,000 sq ft Anthem Center · 30–35 minutes from Suite 100
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Sun City Anthem
            </h1>
            <HeadingPhoto path="/55-plus-communities/sun-city-anthem" />

            <p className="text-xl text-slate-600">
              7,100+ homes. Mountain views. Championship golf. Anthem Center recreation.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
            </div>
            <div className="mt-8 max-w-xl mx-auto text-left">
              <p className="text-sm font-semibold text-slate-700 mb-3 text-center">Search live MLS inventory</p>
              <RealScoutSearch />
            </div>
          </div>
          <OfficeProximity path="/55-plus-communities/sun-city-anthem" />
          <UniqueInterior path="/55-plus-communities/sun-city-anthem" />


          {/* Quick Stats */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">
              7,100+ Homes, $180–$230 HOA, $350K–$1.2M Band — Stats Before Anthem Center
            </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">$350K-$1.2M</div>
                <div className="text-slate-300 text-sm">Price Range</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">$180-$230</div>
                <div className="text-slate-300 text-sm">Monthly HOA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-1">7,100+</div>
                <div className="text-slate-300 text-sm">Homes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">55+</div>
                <div className="text-slate-300 text-sm">Age Requirement</div>
              </div>
            </div>
          </section>

          <LeftoverBand path="/55-plus-communities/sun-city-anthem" />

          <FiftyFiveAmenities path="/55-plus-communities/sun-city-anthem" />

          <ExpertQuote path="/55-plus-communities/sun-city-anthem" />
          <FiftyFiveFaqs path="/55-plus-communities/sun-city-anthem" />


          {/* CTA */}
          <section className="text-center bg-green-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Anthem Center first — 30–35 minutes east, packet at the desk
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Anthem Center is about 64,000 sq ft. We review occupancy rules at Suite 100, then drive. Call (702) 222-1964.
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
