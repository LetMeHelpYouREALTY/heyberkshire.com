import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  DollarSign,
  Key,
  CheckCircle,
  Calendar,
  FileText,
  Users,
  TrendingUp,
  Building,
  Shield,
} from "lucide-react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CtaActions from "@/components/sections/CtaActions";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import ExpertQuote from "@/components/sections/ExpertQuote";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import BuyerFaqs from "@/components/sections/BuyerFaqs";
import LeftoverBand from "@/components/sections/LeftoverBand";
import { nap } from "@/lib/contact";


export const metadata: Metadata = pageMetadata({
  path: "/buyers/first-time-buyers",
  title: "First-Time Home Buyers Las Vegas | Berkshire Hathaway HomeServices",
  description:
    "First-time buyer in Las Vegas? Down payment assistance, builder incentives, and expert guidance from Dr. Jan Duffy at Berkshire Hathaway HomeServices. Call (702) 222-1964.",
  keywords: [
    "first time home buyer Las Vegas",
    "first time buyer Nevada",
    "down payment assistance Las Vegas",
    "FHA loans Las Vegas",
    "VA loans Las Vegas",
    "Berkshire Hathaway HomeServices first time buyer",
  ],
});


export default function FirstTimeBuyersPage() {
  return (
    <>
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
{/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Key className="h-4 w-4 mr-2" />
              Down Payment Assistance Available
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Your First Home in Las Vegas<br />
              <span className="text-blue-600">Starts Here</span>
            </h1>
            <HeadingPhoto path="/buyers/first-time-buyers" />

            <p className="text-xl text-slate-600 mb-8">
              Down payment assistance. Builder incentives. Expert guidance every step of the way.
            </p>
            <CtaActions variant="onLight" />
          <OfficeProximity path="/buyers/first-time-buyers" />
          <UniqueInterior path="/buyers/first-time-buyers" />

          </div>

          <LeftoverBand path="/buyers/first-time-buyers" />

          <LeftoverBand path="/buyers/first-time-buyers" slot={1} />

          <LeftoverBand path="/buyers/first-time-buyers" slot={2} />

          {/* Timeline */}
          <BuyerFaqs path="/buyers/first-time-buyers" />


          <ExpertQuote path="/buyers/first-time-buyers" />

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lender letter at Suite 100, then two ZIPs — Calendly or (702) 222-1964
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's talk about your options. Dr. Jan Duffy will help you understand what you can
              afford and create a plan to make homeownership happen.
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
