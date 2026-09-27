import RealScoutListings from "@/components/realscout/RealScoutListings";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CtaActions from "@/components/sections/CtaActions";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import ExpertQuote from "@/components/sections/ExpertQuote";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import FaqHub from "@/components/sections/FaqHub";
import LeftoverBand from "@/components/sections/LeftoverBand";
import { faqHubAllItems } from "@/lib/faq-hub";
import SchemaScript from "@/components/SchemaScript";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
  generateWebPageSchema,
  combineSchemas,
} from "@/lib/schema";

export const metadata: Metadata = pageMetadata({
  path: "/faq",
  title: "FAQ | Berkshire Hathaway HomeServices Las Vegas Real Estate",
  description:
    "Frequently asked questions about Las Vegas real estate, Berkshire Hathaway HomeServices, buying, selling, and working with Dr. Jan Duffy at BHHS Nevada Properties.",
  keywords: [
    "Berkshire Hathaway HomeServices FAQ",
    "Las Vegas real estate questions",
    "buying a home Las Vegas",
    "selling a home Henderson",
    "BHHS agent questions",
  ],
});

// Breadcrumb items
const breadcrumbs = [
  { name: "Home", url: "/" },
  { name: "FAQ", url: "/faq" },
];

const pageSchemas = combineSchemas(
  generateBreadcrumbSchema(breadcrumbs),
  generateWebPageSchema({
    name: "Frequently Asked Questions | Berkshire Hathaway HomeServices Las Vegas",
    description:
      "Comprehensive FAQ about Las Vegas real estate, buying, selling, investing, and working with Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties.",
    url: "/faq",
    dateModified: "2026-09-15",
  }),
  generateFAQSchema(faqHubAllItems)
);

export default function FAQPage() {
  return (
    <>
      {/* Combined JSON-LD Schema: Breadcrumb + WebPage + FAQPage (all categories) */}
      <SchemaScript schema={pageSchemas} id="faq-page-schema" />
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h1>
            <HeadingPhoto path="/faq" />

            <p className="text-xl text-slate-600">
              Everything you need to know about working with{" "}
              <strong>Berkshire Hathaway HomeServices</strong> in Las Vegas
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
          <OfficeProximity path="/faq" />
          <UniqueInterior path="/faq" />
          <ExpertQuote path="/faq" />

            </div>
          </div>

          <FaqHub />

          <LeftoverBand path="/faq" />
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
    </>
  );
}
