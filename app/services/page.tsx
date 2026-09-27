import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CtaActions from "@/components/sections/CtaActions";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import ExpertQuote from "@/components/sections/ExpertQuote";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import ProcessSteps from "@/components/sections/ProcessSteps";
import LeftoverBand from "@/components/sections/LeftoverBand";

export const metadata: Metadata = pageMetadata({
  path: "/services",
  title: "Real Estate Services Las Vegas | Berkshire Hathaway HomeServices",
  description:
    "Comprehensive real estate services from Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. Buying, selling, luxury, investment, relocation, 55+ communities, and new construction. Call (702) 222-1964.",
  keywords: [
    "Las Vegas real estate services",
    "Berkshire Hathaway services",
    "home buying Las Vegas",
    "home selling Henderson",
    "luxury real estate services",
    "55+ community specialist",
    "California relocation Las Vegas",
  ],
});

const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "RealEstateAgent",
    name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
    telephone: "+17025001942",
  },
  areaServed: "Las Vegas, Henderson, Summerlin, Clark County NV",
  serviceType: "Real Estate Services",
};

const buyerTypes = [
  {
    title: "California Relocators",
    href: "/buyers/california-relocator",
    description: "Moving from CA? Save on state income tax and enjoy 40-60% lower home prices.",
  },
  {
    title: "First-Time Home Buyers",
    href: "/buyers/first-time-buyers",
    description: "FHA, VA, down payment assistance, and step-by-step guidance for your first purchase.",
  },
  {
    title: "Luxury Home Buyers",
    href: "/buyers/luxury-homes-las-vegas",
    description: "Guard-gated estates, Strip views, custom builds, and discrete representation.",
  },
];

const sellerTypes = [
  {
    title: "Move-Up Sellers",
    href: "/sellers/move-up",
    description: "Coordinate the sale and the next purchase from Suite 100 so dates do not collide.",
  },
  {
    title: "Downsizing Sellers",
    href: "/sellers/downsizing",
    description: "Extract equity and transition to low-maintenance living in 55+ communities.",
  },
  {
    title: "Divorce & Probate Sales",
    href: "/sellers/divorce-probate",
    description: "Sensitive situations handled with discretion, fairness, and legal coordination.",
  },
  {
    title: "Relocation Sellers",
    href: "/sellers/relocation",
    description: "Selling from out of state? Remote coordination with BHHS network support.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Las Vegas Real Estate Services
            </h1>
            <HeadingPhoto path="/services" />

            <p className="text-xl text-slate-600 mb-8">
              Comprehensive real estate solutions from Dr. Jan Duffy, backed by the most trusted
              name in the business—<strong>Berkshire Hathaway HomeServices</strong>. Whether you're 
              buying your first home, selling a luxury estate, or relocating from California, 
              you'll receive expert guidance every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>Serving Las Vegas Since 2008</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>$127M+ in Transactions</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>500+ Satisfied Clients</span>
              </div>
            </div>
            <div className="mt-8">
              <CtaActions variant="onLight" />
          <OfficeProximity path="/services" />
          <UniqueInterior path="/services" />
          <ExpertQuote path="/services" />

            </div>
          </div>

          <LeftoverBand path="/services" />

          <LeftoverBand path="/services" slot={1} />

          {/* Buyer Types */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              California inbound, first purchase, or Ridges gate — pick the buyer URL
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              /buyers/california-relocator, /buyers/first-time-buyers, and
              /buyers/luxury-homes-las-vegas are separate clocks from Suite 100. We do not stack
              a Henderson luxury afternoon with a first-purchase FHA briefing. Call (702) 222-1964.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {buyerTypes.map((type) => (
                <Link
                  key={type.href}
                  href={type.href}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-300 transition-all group"
                >
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600">
                    {type.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-3">{type.description}</p>
                  <span className="text-blue-600 text-sm font-semibold flex items-center">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Seller Types */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Move-up, downsize, probate, or out-of-state listing — open the matching seller page
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              /sellers/move-up, /sellers/downsizing, /sellers/divorce-probate, and
              /sellers/relocation start with dates at 9406 W Lake Mead Blvd, Suite 100. The MLS
              remarks wait until the occupancy and next-address clock is written. Call (702) 222-1964.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {sellerTypes.map((type) => (
                <Link
                  key={type.href}
                  href={type.href}
                  className="bg-white border border-slate-200 rounded-lg p-5 hover:shadow-lg hover:border-blue-300 transition-all group"
                >
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 text-sm">
                    {type.title}
                  </h3>
                  <p className="text-slate-600 text-xs mb-2">{type.description}</p>
                  <span className="text-blue-600 text-xs font-semibold">Learn More →</span>
                </Link>
              ))}
            </div>
          </section>

          <ProcessSteps path="/services" />
          <ProcessSteps path="/services" slot={1} />

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pick buying, selling, or relocation — then we time the first loop</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact Dr. Jan Duffy for a free consultation about any of our real estate services. 
              Whether you're buying, selling, investing, or relocating, you'll receive expert 
              guidance backed by Berkshire Hathaway HomeServices.
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
