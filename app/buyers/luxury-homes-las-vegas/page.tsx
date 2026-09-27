import RealScoutListings from "@/components/realscout/RealScoutListings";
import { Shield, Eye, Lock, Star, DollarSign } from "lucide-react";
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
  path: "/buyers/luxury-homes-las-vegas",
  title: "Luxury Homes Las Vegas | Berkshire Hathaway HomeServices",
  description:
    "Las Vegas luxury real estate from $1.2M to $10M+. Guard-gated estates, Strip penthouses, and custom homes. Dr. Jan Duffy provides discrete, expert representation. Call (702) 222-1964.",
  keywords: [
    "luxury homes Las Vegas",
    "The Ridges Las Vegas",
    "MacDonald Highlands",
    "luxury real estate Henderson",
    "guard gated communities Las Vegas",
    "Berkshire Hathaway luxury homes",
  ],
});


export default function LuxuryHomesPage() {
  return (
    <>
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
{/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-slate-900 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Star className="h-4 w-4 mr-2" />
              $1.2M - $10M+
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Private Luxury Home Search in Las Vegas
            </h1>
            <HeadingPhoto path="/buyers/luxury-homes-las-vegas" />

            <p className="text-xl text-slate-600 mb-8">
              Guard-gated estates. Strip penthouses. Uncompromising privacy.
            </p>
            <CtaActions variant="onLight" bookLabel="Request Private Showing" />
          <OfficeProximity path="/buyers/luxury-homes-las-vegas" />
          <UniqueInterior path="/buyers/luxury-homes-las-vegas" />

          </div>

          {/* Market Performance */}
          <LeftoverBand path="/buyers/luxury-homes-las-vegas" slot={1} />
          <section className="mb-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">+161%</div>
                <div className="text-slate-300 text-sm">Appreciation Since 2015</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">#4</div>
                <div className="text-slate-300 text-sm">National Luxury Growth</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">$1.45M</div>
                <div className="text-slate-300 text-sm">Luxury Median (Dec 2025)</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-400 mb-2">60%</div>
                <div className="text-slate-300 text-sm">Cash Transactions</div>
              </div>
            </div>
            <p className="text-center text-slate-300">
              Las Vegas luxury real estate continues to outperform national averages, driven by
              California migration, favorable tax environment, and world-class amenities.
            </p>
          </section>

          <LeftoverBand path="/buyers/luxury-homes-las-vegas" />

          {/* Privacy & Discretion */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="flex items-center mb-6">
              <Lock className="h-8 w-8 text-slate-700 mr-3" />
              <h2 className="text-3xl font-bold text-slate-900">
                Gate codes, LLC names, and showing logs stay off group texts
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-700 mb-4">
                  Luxury transactions require a level of discretion that most agents can't provide.
                  Dr. Jan Duffy and <strong>Berkshire Hathaway HomeServices</strong> understand that
                  privacy isn't a luxury—it's a requirement.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Eye className="h-5 w-5 text-slate-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Off-market access:</strong> Not every luxury home is publicly listed.
                    We have relationships that provide access to properties before they hit the market.</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="h-5 w-5 text-slate-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Confidential showings:</strong> Private appointments, no sign-in sheets,
                    discrete documentation.</span>
                  </li>
                  <li className="flex items-start">
                    <DollarSign className="h-5 w-5 text-slate-600 mr-2 mt-1 flex-shrink-0" />
                    <span><strong>Financial privacy:</strong> We work with your advisors and attorneys
                    to structure transactions that protect your interests.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <h3 className="font-bold text-slate-900 mb-4">Wealth Management Coordination</h3>
                <p className="text-slate-600 mb-4">
                  Luxury purchases often involve complex financial considerations—1031 exchanges,
                  trust purchases, LLC structures, and more. Dr. Jan coordinates with your:
                </p>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li>• Financial advisors</li>
                  <li>• Estate planning attorneys</li>
                  <li>• CPAs and tax professionals</li>
                  <li>• Insurance specialists</li>
                </ul>
              </div>
            </div>
          </section>

          <ExpertQuote path="/buyers/luxury-homes-las-vegas" />

          <BuyerFaqs path="/buyers/luxury-homes-las-vegas" />

          {/* CTA */}
          <section className="text-center bg-gradient-to-r from-slate-900 to-slate-800 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ridges or MacDonald Highlands first — book the gate block from Suite 100
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Call (702) 222-1964. Addresses stay off unsecured threads. 9406 W Lake Mead Blvd,
              Suite 100 is where the showing clock is written.
            </p>
            <CtaActions variant="onDark" bookLabel="Request Private Showing" />
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
    </>
  );
}
