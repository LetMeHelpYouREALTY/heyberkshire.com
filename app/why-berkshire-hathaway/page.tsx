import RealScoutListings from "@/components/realscout/RealScoutListings";
import type { Metadata } from "next";
import { pageMetadata, absoluteUrl } from "@/lib/seo";
import CtaActions from "@/components/sections/CtaActions";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import SupportFaqs from "@/components/sections/SupportFaqs";
import ExpertQuote from "@/components/sections/ExpertQuote";
import ProcessSteps from "@/components/sections/ProcessSteps";
import LeftoverBand from "@/components/sections/LeftoverBand";

export const metadata: Metadata = pageMetadata({
  path: "/why-berkshire-hathaway",
  title: "Why Work With Dr. Jan Duffy | Las Vegas Real Estate",
  description:
    "See what Dr. Jan Duffy puts on a listing file. Marketing samples at Suite 100. Call (702) 500-1942.",
  keywords: [
    "Berkshire Hathaway HomeServices",
    "why choose BHHS",
    "Warren Buffett real estate",
    "trusted real estate brand",
    "BHHS Nevada Properties",
  ],
});

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Berkshire Hathaway HomeServices",
  url: "https://www.bhhs.com",
  logo: absoluteUrl("/favicon-32x32.png"),
  description:
    "Berkshire Hathaway HomeServices is a real estate brokerage network, part of Berkshire Hathaway Inc., one of the world's most respected and trusted companies.",
  parentOrganization: {
    "@type": "Corporation",
    name: "Berkshire Hathaway Inc.",
    founder: "Warren Buffett",
  },
};

export default function WhyBerkshireHathawayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Top 1% Las Vegas REALTOR®
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Why Work With Dr. Jan Duffy?
            </h1>
            <HeadingPhoto path="/why-berkshire-hathaway" />

            <p className="text-xl text-slate-600 leading-relaxed">
              When you work with Dr. Jan Duffy, you get a REALTOR® in real
              estate since 1983, known for trust and ethical standards.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
              <OfficeProximity path="/why-berkshire-hathaway" />
              <UniqueInterior path="/why-berkshire-hathaway" />
              <ExpertQuote path="/why-berkshire-hathaway" />
            </div>
          </div>

          <LeftoverBand path="/why-berkshire-hathaway" slot={1} />

          <ProcessSteps path="/why-berkshire-hathaway" />

          <LeftoverBand path="/why-berkshire-hathaway" />

          <SupportFaqs path="/why-berkshire-hathaway" />

          {/* CTA */}
          <section className="text-center bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ask who photographs, who writes remarks, who negotiates — then
              sign
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Call (702) 500-1942. Suite 100 on W Lake Mead Blvd.
            </p>
            <CtaActions variant="onDark" />
          </section>
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">
          Last Updated: January 2026
        </div>
      </main>
      <RealScoutListings />
    </>
  );
}
