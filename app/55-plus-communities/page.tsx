import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  Users,
  Home as HomeIcon,
  Dumbbell,
  Calendar,
  Shield,
  DollarSign,
  MapPin,
  Heart,
  Sun,
  Trophy,
  Palmtree,
  CheckCircle,
  Waves,
  Mountain,
  Star,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";
import CtaActions from "@/components/sections/CtaActions";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import FiftyFiveFaqs from "@/components/sections/FiftyFiveFaqs";
import ExpertQuote from "@/components/sections/ExpertQuote";
import FiftyFiveAmenities from "@/components/sections/FiftyFiveAmenities";
import LeftoverBand from "@/components/sections/LeftoverBand";
import { pageMetadata } from "@/lib/seo";


export const metadata: Metadata = pageMetadata({
  path: "/55-plus-communities",
  title:
    "55+ Active Adult Communities Las Vegas | Sun City, Del Webb, Heritage | Dr. Jan Duffy",
  description:
    "Find your perfect 55+ community in Las Vegas. Sun City Summerlin, Sun City Aliante, Del Webb Lake Las Vegas, Heritage at Stonebridge, Solera, Trilogy. Dr. Jan Duffy specializes in active adult living. Call (702) 222-1964.",
  keywords: [
    "55+ communities Las Vegas",
    "active adult communities Las Vegas",
    "Sun City Summerlin",
    "Sun City Aliante",
    "Del Webb Lake Las Vegas",
    "Heritage at Stonebridge",
    "Solera at Anthem",
    "Trilogy Summerlin",
    "retirement communities Nevada",
    "55 plus homes Las Vegas",
  ],
  openGraph: {
    title: "Find Your Perfect 55+ Community in Las Vegas | Dr. Jan Duffy",
    description:
      "Sun City, Del Webb, Heritage at Stonebridge & more—Dr. Duffy specializes in active adult living. Berkshire Hathaway HomeServices Nevada Properties.",
    type: "website",
  },
});


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
  description:
    "55+ community specialist helping active adults find their perfect Las Vegas retirement home",
  telephone: "(702) 222-1964",
  url: "https://heyberkshire.com/55-plus-communities",
  areaServed: {
    "@type": "City",
    name: "Las Vegas",
    containedIn: "Nevada",
  },
  knowsAbout: [
    "55+ Communities",
    "Active Adult Living",
    "Sun City Summerlin",
    "Sun City Aliante",
    "Del Webb",
    "Heritage at Stonebridge",
  ],
};

const communities = [
  {
    name: "Sun City Summerlin",
    slug: "sun-city-summerlin",
    location: "Summerlin, Las Vegas",
    ageRequirement: "55+ (at least one resident)",
    hoaFees: "$155-$195/month",
    priceRange: "$320,000 - $850,000",
    homes: "7,700+ homes",
    amenities: ["3 golf courses", "4 rec centers", "100+ clubs", "Pools"],
    highlights: [
      "Nevada's largest 55+ community",
      "3 championship golf courses",
      "4 recreation centers with pools",
      "100+ clubs and activities",
      "Mountain View Hospital nearby",
    ],
    description:
      "Nevada's largest 55+ community with unparalleled amenities against the backdrop of the Spring Mountains.",
    color: "amber",
  },
  {
    name: "Sun City Anthem",
    slug: "sun-city-anthem",
    location: "Henderson",
    ageRequirement: "55+ (at least one resident)",
    hoaFees: "$180-$230/month",
    priceRange: "$350,000 - $1,200,000",
    homes: "7,100+ homes",
    amenities: ["2 golf courses", "64K sf clubhouse", "80+ clubs", "Pools"],
    highlights: [
      "Henderson 55+ campus with a 64,000 sq ft clubhouse",
      "2 championship golf courses",
      "McCullough Range views on many upper streets",
      "Henderson location with parks and recreation campuses",
    ],
    description:
      "Henderson 55+ campus with a 64,000 sq ft clubhouse, two golf courses, and McCullough Range views.",
    color: "green",
  },
  {
    name: "Sun City Aliante",
    slug: "sun-city-aliante",
    location: "North Las Vegas",
    ageRequirement: "55+ (at least one resident)",
    hoaFees: "$140-$175/month",
    priceRange: "$280,000 - $550,000",
    homes: "2,800+ homes",
    amenities: ["Golf course", "Fitness center", "Pools", "Tennis"],
    highlights: [
      "Most affordable Sun City option",
      "18-hole championship golf course",
      "Brand new Aliante Casino nearby",
      "Easy freeway access",
    ],
    description:
      "The most affordable Sun City in Las Vegas with full amenities and great value.",
    color: "blue",
  },
  {
    name: "Del Webb at Lake Las Vegas",
    slug: "del-webb-lake-las-vegas",
    location: "Henderson (Lake Las Vegas)",
    ageRequirement: "55+ (at least one resident)",
    hoaFees: "$200-$280/month",
    priceRange: "$400,000 - $900,000",
    homes: "1,800+ homes",
    amenities: ["Lake access", "Resort pools", "Fitness", "Pickleball"],
    highlights: [
      "Lakefront and mountain views",
      "Resort-style amenities",
      "Newest construction (2016+)",
      "Del Webb clubs and rec programming",
    ],
    description:
      "The newest Del Webb community combines modern construction with stunning Lake Las Vegas setting.",
    color: "blue",
  },
  {
    name: "Heritage at Stonebridge",
    slug: "heritage-stonebridge",
    location: "Summerlin",
    ageRequirement: "55+ (at least one resident)",
    hoaFees: "$175-$220/month",
    priceRange: "$400,000 - $750,000",
    homes: "1,100+ homes",
    amenities: ["Clubhouse", "Pool & spa", "Fitness", "Social clubs"],
    highlights: [
      "Premium Summerlin location",
      "Guard-gated entry",
      "1,100+ homes",
      "Near Downtown Summerlin",
    ],
    description:
      "A boutique 55+ community offering guard-gated privacy in the heart of Summerlin.",
    color: "purple",
  },
  {
    name: "Solera at Anthem",
    slug: "solera-anthem",
    location: "Henderson",
    ageRequirement: "55+ (all residents)",
    hoaFees: "$170-$210/month",
    priceRange: "$380,000 - $650,000",
    homes: "1,200+ homes",
    amenities: ["Guard-gated", "Clubhouse", "Fitness", "Tennis"],
    highlights: [
      "Guard-gated security",
      "About 1,200 homes with a staffed gate",
      "Lower HOA than larger communities",
      "Henderson location",
    ],
    description:
      "A smaller 1,200-home 55+ campus in Henderson with a staffed gate.",
    color: "teal",
  },
  {
    name: "Trilogy at Summerlin",
    slug: "trilogy-summerlin",
    location: "Summerlin",
    ageRequirement: "55+ (at least one resident)",
    hoaFees: "$250-$350/month",
    priceRange: "$500,000 - $1,100,000",
    homes: "800+ homes",
    amenities: ["Farm-to-table dining", "Spa", "Fitness", "Resort pool"],
    highlights: [
      "Luxury resort-style living",
      "On-site farm-to-table restaurant",
      "Spa and wellness center",
      "Contemporary home designs",
    ],
    description:
      "Luxury resort-style 55+ living with upscale amenities and contemporary designs.",
    color: "rose",
  },
  {
    name: "Siena",
    slug: null, // No dedicated page yet
    location: "Summerlin",
    ageRequirement: "55+ (at least one resident)",
    hoaFees: "$140-$180/month",
    priceRange: "$280,000 - $550,000",
    homes: "2,300+ homes",
    amenities: ["Golf course", "Pools", "Fitness", "Social clubs"],
    highlights: [
      "Most affordable Summerlin 55+ option",
      "18-hole golf course",
      "Opened in the 1990s with an 18-hole golf course",
      "Strong sense of community",
    ],
    description:
      "Siena is a smaller Summerlin 55+ campus with an 18-hole course. Confirm occupancy rules at Suite 100.",
    color: "slate",
  },
];

export default function FiftyFiveCommunitiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
{/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sun className="h-4 w-4 mr-2" />
              Active Adult Living Specialist
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Find Your Perfect 55+ Community in Las Vegas
            </h1>
            <HeadingPhoto path="/55-plus-communities" />

            <p className="text-xl md:text-2xl text-slate-600 mb-8">
              Sun City, Del Webb, Heritage at Stonebridge & more—
              <br className="hidden md:block" />
              <strong>Dr. Duffy specializes in active adult living</strong>
            </p>
            <CtaActions variant="onLight" />
          <OfficeProximity path="/55-plus-communities" />
          <UniqueInterior path="/55-plus-communities" />

          </div>

          <LeftoverBand path="/55-plus-communities" />
          <LeftoverBand path="/55-plus-communities" slot={1} />

          {/* Age Requirements */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8">
              <div className="flex items-start">
                <Users className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    HOPA 80/20 occupancy — packet at Suite 100 before any clubhouse
                  </h3>
                  <div className="text-slate-700 space-y-3">
                    <p>
                      <strong>Federal HOPA:</strong> At least 80% of occupied units must have one
                      resident 55 or older. Individual HOAs can be stricter. We read the packet at
                      9406 W Lake Mead Blvd before we drive.
                    </p>
                    <p>
                      <strong>Co-occupant rules:</strong> Minimum ages for a co-occupant vary by
                      campus (often 40–45). Confirm in writing. Call (702) 222-1964.
                    </p>
                    <p className="text-blue-800 font-medium">
                      Sun City Summerlin is 10–15 minutes. Anthem campuses are 30–35. Pick one clock.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <LeftoverBand path="/55-plus-communities" slot={2} />
          <section id="communities" className="mb-16 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {communities.map((community) => (
                <div
                  key={community.name}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="bg-slate-900 text-white p-6">
                    <h3 className="text-xl font-bold mb-1">{community.name}</h3>
                    <div className="flex items-center text-slate-300 text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      {community.location}
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 mb-4">{community.description}</p>

                    {/* Key Amenities */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {community.amenities.map((amenity) => (
                        <span
                          key={amenity}
                          className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                          Starting Price
                        </div>
                        <div className="font-bold text-slate-900">
                          {community.priceRange.split(" - ")[0]}+
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                          HOA Fees
                        </div>
                        <div className="font-bold text-slate-900">
                          {community.hoaFees}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                          Age Requirement
                        </div>
                        <div className="font-bold text-slate-900 text-sm">
                          {community.ageRequirement}
                        </div>
                      </div>
                      <div>
                        <div className="text-xs text-slate-500 uppercase tracking-wide mb-1">
                          Community Size
                        </div>
                        <div className="font-bold text-slate-900">
                          {community.homes}
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-slate-100 pt-4">
                      <div className="text-xs text-slate-500 uppercase tracking-wide mb-2">
                        Highlights
                      </div>
                      <ul className="space-y-1 mb-4">
                        {community.highlights.slice(0, 3).map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start text-sm text-slate-600"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {community.slug ? (
                      <Link
                        href={`/55-plus-communities/${community.slug}`}
                        className="block text-center bg-blue-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-blue-700 transition-colors"
                      >
                        View Homes in {community.name.split(" at ")[0]} →
                      </Link>
                    ) : (
                      <a
                        href="tel:+17022221964"
                        className="block text-center bg-slate-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-slate-700 transition-colors"
                      >
                        Call for {community.name} Info
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <FiftyFiveAmenities path="/55-plus-communities" />

          <ExpertQuote path="/55-plus-communities" />
          <FiftyFiveFaqs path="/55-plus-communities" />


          {/* Why BHHS */}
          <section className="mb-16 max-w-4xl mx-auto" data-fifty-five-why="/55-plus-communities">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              HOA packets at Suite 100 before any 55+ clubhouse drive
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <Heart className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    Age-qualification packets and HOA reserves — read at Suite 100
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Occupancy rules, guest ages, and HOA reserve lines are reviewed at 9406 W Lake
                    Mead Blvd before any clubhouse. Call (702) 222-1964.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    Out-of-state occupancy packet, then one rec campus from Suite 100
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Virtual tours and BHHS destination intros start at 9406 W Lake Mead Blvd. We
                    do not stack a Summerlin 55+ morning with a Henderson 55+ drive.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    Occupancy rules in writing before any clubhouse
                  </h3>
                  <p className="text-slate-600 text-sm">
                    The Berkshire Hathaway name is on the paperwork at 9406 W Lake Mead Blvd,
                    Suite 100. We review age-qualification and guest rules before the drive.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <DollarSign className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">
                    One campus per afternoon — occupancy packet before the drive
                  </h3>
                  <p className="text-slate-600 text-sm">
                    We review HOA occupancy and guest rules at 9406 W Lake Mead Blvd, Suite 100,
                    then tour one rec building. Call (702) 222-1964. We do not stack Summerlin and
                    Henderson 55+ on the same morning.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Compare two 55+ campuses from Suite 100 — west first, Henderson second
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Sun City Summerlin is 10–15 minutes. Anthem campuses are 30–35. Call (702) 222-1964 with occupancy questions before we drive.
            </p>
            <CtaActions variant="onDark" />
            <p className="mt-4 text-blue-300 text-sm">
              Berkshire Hathaway HomeServices Nevada Properties · 9406 W Lake Mead Blvd, Suite 100,
              Las Vegas, NV 89134
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
