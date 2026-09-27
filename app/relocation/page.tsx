import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { 
  Phone, 
  Plane, 
  MapPin, 
  Users, 
  CheckCircle, 
  Sun, 
  DollarSign, 
  Building,
  Home,
  School,
  ArrowRight,
  Car,
  Shield,
  Globe,
} from "lucide-react";
import type { Metadata } from "next";
import CtaActions from "@/components/sections/CtaActions";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import ExpertQuote from "@/components/sections/ExpertQuote";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import IntentFaqs from "@/components/sections/IntentFaqs";
import LeftoverBand from "@/components/sections/LeftoverBand";
import { pageMetadata } from "@/lib/seo";


export const metadata: Metadata = pageMetadata({
  path: "/relocation",
  title: "Relocating to Las Vegas | Berkshire Hathaway HomeServices",
  description:
    "Moving to Las Vegas? Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties provides comprehensive relocation services. Named campuses, commute times, cost of living. Call (702) 222-1964.",
  keywords: [
    "relocating to Las Vegas",
    "moving to Las Vegas",
    "Las Vegas relocation services",
    "moving to Henderson Nevada",
    "California to Las Vegas",
    "Las Vegas relocation agent",
    "moving from California to Nevada",
    "Las Vegas real estate relocation",
  ],
});

const relocationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Las Vegas Relocation Services",
  provider: {
    "@type": "RealEstateAgent",
    name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
    telephone: "+17025001942",
  },
  areaServed: "Las Vegas, Henderson, Summerlin, Clark County NV",
  serviceType: "Relocation Services",
};

const popularRelocationAreas = [
  {
    name: "Summerlin",
    best: "Red Rock access, Downtown Summerlin",
    highlights: "150+ parks, trails, Palo Verde High School commute, master-planned villages",
    from: "$500K",
  },
  {
    name: "Henderson",
    best: "Parks, recreation centers, Green Valley Ranch",
    highlights: "60+ parks, trails, Coronado High School commute, master-planned villages",
    from: "$450K",
  },
  {
    name: "Green Valley",
    best: "Mature landscaping, golf, shopping",
    highlights: "Championship golf, shopping and dining, Henderson location",
    from: "$480K",
  },
  {
    name: "Skye Canyon",
    best: "New construction, mountain trails",
    highlights: "Newest construction, mountain trail access, modern amenities, growing area",
    from: "$500K",
  },
  {
    name: "Southern Highlands",
    best: "Golf, guard-gated sections, mountain views",
    highlights: "Championship golf, mountain views, resort living",
    from: "$700K",
  },
  {
    name: "Inspirada",
    best: "Resort pools, trails, new homes",
    highlights: "Resort-style pools, extensive trails, new homes, Henderson convenience",
    from: "$450K",
  },
];

const relocationServices = [
  "Personalized neighborhood matching based on your priorities",
  "School district research and tour coordination",
  "Virtual home tours before you arrive",
  "Coordination with your current BHHS agent",
  "Cost of living and budget comparison",
  "Commute time analysis to your workplace",
  "HOA packets and named-campus commute maps",
  "Moving company referrals and coordination",
  "Utility setup assistance and provider recommendations",
  "Local service provider recommendations",
  "HOA and community fee analysis",
  "Property tax comparison by area",
];

export default function RelocationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(relocationSchema) }}
      />
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Relocating to Las Vegas?
            </h1>
            <HeadingPhoto path="/relocation" />

            <p className="text-xl text-slate-600 mb-8">
              <strong>Berkshire Hathaway HomeServices</strong> makes your move seamless. With
              50,000+ agents nationwide, we coordinate your relocation from anywhere in the country.
              Whether you're moving from California, the Midwest, or across the globe, Dr. Jan Duffy 
              provides comprehensive relocation services to ensure your transition is stress-free.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> 50,000+ Agent Network</span>
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Virtual Home Tours</span>
              <span className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-1" /> Campus commute times</span>
            </div>
            <div className="mt-8">
              <CtaActions variant="onLight" />
          <OfficeProximity path="/relocation" />
          <UniqueInterior path="/relocation" />

            </div>
          </div>

          <LeftoverBand path="/relocation" />

          <ExpertQuote path="/relocation" />

          <LeftoverBand path="/relocation" slot={1} />

          <section className="mb-16 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {relocationServices.map((service) => (
                <div key={service} className="flex items-center bg-white p-4 rounded-lg border border-slate-200">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{service}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Neighborhoods */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Summerlin, Henderson, or 55+ — one ZIP per inbound afternoon
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Inbound itineraries start at 9406 W Lake Mead Blvd, Suite 100. Named campuses,
              commute minutes, trailheads, and HOA packets are compared at the desk, then we
              drive one ZIP. Call (702) 222-1964. We will not tour twelve ZIPs the day you land.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularRelocationAreas.map((area) => (
                <div
                  key={area.name}
                  className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-slate-900">{area.name}</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                      From {area.from}
                    </span>
                  </div>
                  <p className="text-sm text-blue-600 mb-3">Best for: {area.best}</p>
                  <p className="text-slate-600 text-sm">{area.highlights}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/neighborhoods" className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center">
                Explore All Neighborhoods <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </section>

          <LeftoverBand path="/relocation" slot={2} />

          <section className="mb-16 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center">
                  <School className="h-5 w-5 text-blue-600 mr-2" />
                  Named School Campuses
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Summerlin:</strong> Palo Verde HS, West Career & Tech Academy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Henderson:</strong> Coronado HS, Green Valley HS, The Meadows</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Private:</strong> The Meadows, Bishop Gorman, Faith Lutheran</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-4 flex items-center">
                  <Home className="h-5 w-5 text-blue-600 mr-2" />
                  Campus commute information
                </h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Named campuses and typical drive times</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Zoned school identification for specific addresses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Magnet and charter school options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <span>Named campus minutes at ccsd.net/zoning</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Coming From California */}
          <section className="mb-16 bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">California paycheck, Nevada PITI — run the net at Suite 100</h2>
            <p className="text-blue-100 text-center max-w-3xl mx-auto mb-8">
              California to Nevada inbound files start at 9406 W Lake Mead Blvd, Suite 100. Housing
              prices 40–60% below many California coastal cities is a comparison, not a guarantee.
              Call (702) 222-1964. No Nevada state income tax is a line item on the net sheet.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-3">What You'll Save</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• <strong>State income tax:</strong> 0% vs CA's up to 13.3%</li>
                  <li>• <strong>Home prices:</strong> 40-60% lower than LA/SF</li>
                  <li>• <strong>Property taxes:</strong> Typically lower rates</li>
                  <li>• <strong>Cost of living:</strong> 30-40% less overall</li>
                  <li>• <strong>Example:</strong> $200K earner saves $20K+ in taxes annually</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-3">What You'll Gain</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>• <strong>More home:</strong> 50%+ more space for your budget</li>
                  <li>• <strong>Short commutes:</strong> 20-30 min vs 60+ in CA</li>
                  <li>• <strong>Outdoor recreation:</strong> Red Rock, Lake Mead, skiing</li>
                  <li>• <strong>Entertainment:</strong> World-class dining, shows, sports</li>
                  <li>• <strong>Easy visits back:</strong> 4-hour drive, 1-hour flight to SoCal</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link 
                href="/buyers/california-relocator" 
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                California Relocator Guide <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </section>

          {/* BHHS Network */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              50,000-agent referral, then a dated calendar at Suite 100
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              With 50,000+ agents in 1,500+ offices worldwide, Berkshire Hathaway HomeServices 
              provides seamless coordination for relocations. Your agent back home can connect 
              directly with Dr. Jan to ensure a smooth transition—no gaps, no miscommunication.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Nationwide Network</h3>
                <p className="text-slate-600 text-sm">
                  Seamless referrals from any BHHS agent in the country directly to Dr. Jan
                </p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Coordinated Transactions</h3>
                <p className="text-slate-600 text-sm">
                  Sell your current home and buy in Las Vegas with coordinated timelines
                </p>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-xl">
                <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Trusted Referrals</h3>
                <p className="text-slate-600 text-sm">
                  Not using BHHS? Dr. Jan can recommend a trusted agent in your area
                </p>
              </div>
            </div>
          </section>

          <IntentFaqs path="/relocation" />

          {/* CTA */}
          <section className="text-center bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Suite 100 before the first inbound ZIP — (702) 222-1964</h2>
            <p className="text-xl text-slate-300 mb-8">
              Let Dr. Jan Duffy and Berkshire Hathaway HomeServices make your relocation stress-free.
              Whether you're moving next month or exploring options, a free consultation can help 
              you understand the Las Vegas market and plan your transition.
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
