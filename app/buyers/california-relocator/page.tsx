import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Sun,
  Briefcase,
  Plane,
  MapPin,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { nap } from "@/lib/contact";
import CtaActions from "@/components/sections/CtaActions";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import ExpertQuote from "@/components/sections/ExpertQuote";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import BuyerFaqs from "@/components/sections/BuyerFaqs";
import LeftoverBand from "@/components/sections/LeftoverBand";


export const metadata: Metadata = pageMetadata({
  path: "/buyers/california-relocator",
  title: "Relocating from California to Las Vegas | Berkshire Hathaway HomeServices",
  description:
    "Moving from California to Las Vegas? Zero state income tax, 40-60% lower home prices. Dr. Jan Duffy compares California proceeds to Summerlin and Henderson ZIPs. Call (702) 222-1964.",
  keywords: [
    "California to Las Vegas relocation",
    "moving from California to Nevada",
    "California relocator Las Vegas",
    "no state income tax Nevada",
    "Las Vegas homes California buyers",
    "Berkshire Hathaway HomeServices relocation",
  ],
});


const realEstateAgentSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
  telephone: "+17025001942",
  url: "https://heyberkshire.com/buyers/california-relocator",
  address: {
    "@type": "PostalAddress",
    streetAddress: "9406 W Lake Mead Blvd, Suite 100",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89134",
  },
  areaServed: ["Las Vegas", "Henderson", "Summerlin", "North Las Vegas"],
  priceRange: "$350,000 - $10,000,000+",
};

export default function CaliforniaRelocatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(realEstateAgentSchema) }}
      />
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
{/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sun className="h-4 w-4 mr-2" />
              37% of Las Vegas Buyers Are From California
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Relocating from California?<br />
              <span className="text-blue-600">Welcome Home to Las Vegas</span>
            </h1>
            <HeadingPhoto path="/buyers/california-relocator" />

            <p className="text-xl md:text-2xl text-slate-600 mb-8">
              Zero state income tax. 40-60% lower home prices. Same sunshine.
            </p>
            <CtaActions variant="onLight" />
          <OfficeProximity path="/buyers/california-relocator" />
          <UniqueInterior path="/buyers/california-relocator" />

          </div>

          <LeftoverBand path="/buyers/california-relocator" />

          {/* Tax Savings Comparison */}
          <section className="mb-16 bg-gradient-to-br from-green-600 to-green-700 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center bg-white/10 rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">0%</div>
                <div className="text-green-100">Nevada State Income Tax</div>
                <div className="text-sm text-green-200 mt-2">vs. CA 9.3%-13.3%</div>
              </div>
              <div className="text-center bg-white/10 rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">40-60%</div>
                <div className="text-green-100">Lower published home prices</div>
                <div className="text-sm text-green-200 mt-2">January 2026 valley median $450K</div>
              </div>
              <div className="text-center bg-white/10 rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">$150K+</div>
                <div className="text-green-100">5-Year Savings</div>
                <div className="text-sm text-green-200 mt-2">$200K income example</div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-green-100 text-lg">
                A California household earning $250,000/year saves <strong>$25,000+ annually</strong> in state income tax alone by moving to Nevada.
              </p>
            </div>
          </section>

          <LeftoverBand path="/buyers/california-relocator" slot={1} />

          {/* What Your CA Equity Buys */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-red-600 mr-2" />
                  <h3 className="font-bold text-lg text-red-900">In California</h3>
                </div>
                <ul className="space-y-3 text-red-800">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">$1.2M:</span>
                    <span>3BR/2BA 1,800 sq ft on a typical suburban lot</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">$800K:</span>
                    <span>2BR condo or older townhome</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">$600K:</span>
                    <span>Fixer-upper or long commute</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="font-bold text-lg text-green-900">In Las Vegas</h3>
                </div>
                <ul className="space-y-3 text-green-800">
                  <li className="flex items-start">
                    <span className="font-bold mr-2">$700K:</span>
                    <span>4BR/3BA 3,000 sq ft in Summerlin + $500K pocket</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">$550K:</span>
                    <span>4BR in Henderson + cash left over</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-bold mr-2">$450K:</span>
                    <span>Brand new construction, turnkey ready</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <LeftoverBand path="/buyers/california-relocator" slot={2} />

          {/* Top Neighborhoods for CA Relocators */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-blue-600 text-white p-4">
                  <h3 className="font-bold text-xl">Summerlin</h3>
                  <p className="text-blue-100 text-sm">Median: $726K</p>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-4">
                    Master-planned streets with Palo Verde High School commute mapped by address,
                    Downtown Summerlin shopping, and Red Rock Canyon trailheads.
                  </p>
                  <div className="text-sm text-slate-500 mb-4">
                    <strong>Best for:</strong> Buyers from Orange County, coastal CA
                  </div>
                  <ul className="text-sm space-y-1 text-slate-700">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Palo Verde HS nearby
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      150+ parks & trails
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Downtown Summerlin retail
                    </li>
                  </ul>
                  <Link
                    href="/neighborhoods/summerlin"
                    className="block mt-4 text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Explore Summerlin →
                  </Link>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-green-600 text-white p-4">
                  <h3 className="font-bold text-xl">Henderson / Inspirada</h3>
                  <p className="text-green-100 text-sm">Median: $530K</p>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-4">
                    Henderson sits on a tech corridor. Google's data center,
                    parks, recreation campuses, and Inspirada's 2,000-acre town center.
                  </p>
                  <div className="text-sm text-slate-500 mb-4">
                    <strong>Best for:</strong> Tech workers, Inspirada new construction, San Diego relocators
                  </div>
                  <ul className="text-sm space-y-1 text-slate-700">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Tech job growth
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Named rec campuses and parks
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      New construction options
                    </li>
                  </ul>
                  <Link
                    href="/neighborhoods/henderson"
                    className="block mt-4 text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Explore Henderson →
                  </Link>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="bg-purple-600 text-white p-4">
                  <h3 className="font-bold text-xl">The Ridges</h3>
                  <p className="text-purple-100 text-sm">$1.5M - $10M+</p>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 mb-4">
                    Guard-gated lots with Strip or Red Rock views,
                    custom home sites, and a gate list from Suite 100.
                  </p>
                  <div className="text-sm text-slate-500 mb-4">
                    <strong>Best for:</strong> Beverly Hills/Newport Beach luxury buyers
                  </div>
                  <ul className="text-sm space-y-1 text-slate-700">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Guard-gated privacy
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Custom home sites
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Red Rock Canyon access
                    </li>
                  </ul>
                  <Link
                    href="/neighborhoods/the-ridges"
                    className="block mt-4 text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Explore The Ridges →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Remote Work Lifestyle */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="flex items-center mb-6">
              <Briefcase className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">Keep the California paycheck — run Nevada tax math at Suite 100</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-700 mb-4">
                  Keep your California salary, lose the California taxes. Thousands of tech workers,
                  executives, and entrepreneurs have discovered that Las Vegas offers the perfect
                  remote work base:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <TrendingUp className="h-5 w-5 text-green-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Same income, lower costs:</strong> Keep your Bay Area salary while paying Nevada prices</span>
                  </li>
                  <li className="flex items-start">
                    <Plane className="h-5 w-5 text-blue-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Easy travel:</strong> Direct flights to SFO, LAX, SJC for when you need to be in-office</span>
                  </li>
                  <li className="flex items-start">
                    <Sun className="h-5 w-5 text-amber-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Named amenities:</strong> Golf at 2pm, hike Red Rock after work, Downtown Summerlin dining</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Henderson Tech Corridor</h3>
                <p className="text-slate-600 mb-4">
                  Google's $600M data center. Amazon Web Services. Switch Supernap. Henderson is
                  becoming a tech hub, with companies citing zero corporate
                  income tax and commute minutes to Harry Reid International (LAS).
                </p>
                <p className="text-sm text-slate-500">
                  Many California tech workers find themselves with <em>more</em> local job options
                  after moving to Vegas than they expected.
                </p>
              </div>
            </div>
          </section>
          <BuyerFaqs path="/buyers/california-relocator" />


          <ExpertQuote path="/buyers/california-relocator" />

          <LeftoverBand path="/buyers/california-relocator" slot={3} />
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
    </>
  );
}
