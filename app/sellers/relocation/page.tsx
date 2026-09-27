import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Plane,
  Globe,
  Clock,
  CheckCircle,
  Home as HomeIcon,
  MapPin,
  Briefcase,
  Calendar,
} from "lucide-react";
import type { Metadata } from "next";
import CtaActions from "@/components/sections/CtaActions";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import ExpertQuote from "@/components/sections/ExpertQuote";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import SellerFaqs from "@/components/sections/SellerFaqs";
import LeftoverBand from "@/components/sections/LeftoverBand";
import { pageMetadata } from "@/lib/seo";


export const metadata: Metadata = pageMetadata({
  path: "/sellers/relocation",
  title: "Relocation Home Sales Las Vegas | Berkshire Hathaway HomeServices",
  description:
    "Leaving Las Vegas for a new opportunity? Dr. Jan Duffy helps relocating homeowners sell fast and coordinates with BHHS offices nationwide. Call (702) 222-1964.",
  keywords: [
    "relocation sale Las Vegas",
    "job relocation Las Vegas",
    "sell home fast Las Vegas",
    "Berkshire Hathaway relocation services",
    "corporate relocation Nevada",
  ],
});

export default function RelocationPage() {
  return (
    <>
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
{/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Plane className="h-4 w-4 mr-2" />
              Nationwide BHHS Network
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              New Opportunity?<br />We Handle Your Sale.
            </h1>
            <HeadingPhoto path="/sellers/relocation" />

            <p className="text-xl text-slate-600 mb-8">
              Sell your Las Vegas home while you focus on your new chapter.
              We coordinate both ends of your move.
            </p>
            <CtaActions variant="onLight" />
          <OfficeProximity path="/sellers/relocation" />
          <UniqueInterior path="/sellers/relocation" />

          </div>

          <LeftoverBand path="/sellers/relocation" />

          <LeftoverBand path="/sellers/relocation" slot={1} />

          {/* How We Help */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-xl text-slate-900 mb-4 flex items-center">
                  <HomeIcon className="h-6 w-6 text-blue-600 mr-2" />
                  Selling Your Las Vegas Home
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Remote-Friendly Process</strong>
                      <p className="text-slate-600 text-sm">
                        Virtual walkthroughs, electronic signatures, and video updates so you
                        can manage your sale from anywhere.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Property Oversight</strong>
                      <p className="text-slate-600 text-sm">
                        We coordinate showings, staging, and maintenance while you're
                        focused on your new job or location.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Strategic Pricing</strong>
                      <p className="text-slate-600 text-sm">
                        If you need a fast sale, we price for speed. If you have time,
                        we maximize your return. Your timeline, your strategy.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Flexible Closings</strong>
                      <p className="text-slate-600 text-sm">
                        We negotiate closing dates that align with your start date and
                        corporate relocation requirements.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-xl text-slate-900 mb-4 flex items-center">
                  <MapPin className="h-6 w-6 text-green-600 mr-2" />
                  Buying in Your New City
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">BHHS Agent Referrals</strong>
                      <p className="text-slate-600 text-sm">
                        We connect you with top-producing BHHS agents in your destination city—
                        professionals we trust to take care of you.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Coordinated Timing</strong>
                      <p className="text-slate-600 text-sm">
                        We communicate with your destination agent to align sale and
                        purchase timelines, minimizing gaps.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Equity Transfer Strategies</strong>
                      <p className="text-slate-600 text-sm">
                        Bridge loans, contingent offers, and lease-back arrangements—
                        we help structure deals that work for both transactions.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-slate-900">Corporate Relo Compliance</strong>
                      <p className="text-slate-600 text-sm">
                        We work with corporate relocation companies and understand
                        BVO, appraisal, and buyout processes.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <LeftoverBand path="/sellers/relocation" slot={2} />

          {/* Timeline Options */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-red-600 mr-2" />
                  <h3 className="font-bold text-slate-900">Urgent (2-4 weeks)</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Job starts soon. Aggressive pricing, immediate listing, cash buyer outreach.
                </p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Pre-listing preparation</li>
                  <li>• Investor/cash buyer network</li>
                  <li>• Accelerated marketing</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-amber-600 mr-2" />
                  <h3 className="font-bold text-slate-900">Standard (30-60 days)</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Typical corporate timeline. Strategic pricing with room for negotiation.
                </p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Professional staging</li>
                  <li>• Full marketing campaign</li>
                  <li>• Maximum exposure</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="flex items-center mb-4">
                  <Briefcase className="h-6 w-6 text-green-600 mr-2" />
                  <h3 className="font-bold text-slate-900">Flexible (60-90 days)</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Company allows time. Price for maximum return, strategic timing.
                </p>
                <ul className="text-sm text-slate-700 space-y-1">
                  <li>• Premium positioning</li>
                  <li>• Rent-back negotiation</li>
                  <li>• Optimal market timing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Corporate Relocation */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <Briefcase className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="font-bold text-xl text-slate-900">
                  Corporate Relocation Packages
                </h3>
              </div>
              <p className="text-slate-700 mb-4">
                If your employer offers relocation assistance, we're experienced with major
                relocation management companies and understand their processes:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    BVO (Buyer Value Option)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Guaranteed buyout programs
                  </li>
                </ul>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Appraisal management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Loss-on-sale provisions
                  </li>
                </ul>
                <ul className="space-y-2 text-slate-700 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Home finding services
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Temporary housing coordination
                  </li>
                </ul>
              </div>
              <p className="text-sm text-slate-600">
                Major corporate relo providers we work with: Cartus, SIRVA, Graebel, BGRS, and others.
              </p>
            </div>
          </section>

          <LeftoverBand path="/sellers/relocation" slot={3} />

          {/* Common Relocation Destinations */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { city: "Phoenix, AZ", insight: "Lower housing costs than coastal California. Healthcare and tech employers listed on the inbound brief.", time: "4-5 hour drive" },
                { city: "Dallas/Fort Worth, TX", insight: "No state income tax, booming corporate relocation hub. Major employers: AT&T, Toyota, CBRE.", time: "3-hour flight" },
                { city: "Los Angeles, CA", insight: "Entertainment, aerospace, tech. Higher cost but familiar Southwest climate.", time: "4-hour drive" },
                { city: "Denver, CO", insight: "Trailheads and four seasons. Growing tech employers. Higher altitude — confirm with your physician.", time: "2-hour flight" },
                { city: "Austin, TX", insight: "Tech boom, no state income tax. Tesla, Oracle, Apple campuses.", time: "2.5-hour flight" },
                { city: "Seattle, WA", insight: "Amazon, Microsoft, Boeing. Rainy but vibrant tech scene.", time: "2.5-hour flight" },
              ].map((dest) => (
                <div key={dest.city} className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="font-bold text-slate-900 mb-2">{dest.city}</h3>
                  <p className="text-slate-600 text-sm mb-3">{dest.insight}</p>
                  <p className="text-blue-600 text-xs font-medium">Travel: {dest.time}</p>
                </div>
              ))}
            </div>
          </section>

          <LeftoverBand path="/sellers/relocation" slot={4} />

          {/* The Relocation Process */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Initial Consultation</h3>
                  <p className="text-slate-600">
                    Discuss your timeline, job start date, corporate relo benefits (if any), and priorities.
                    Dr. Jan creates a customized plan whether you have 2 weeks or 2 months.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Destination Agent Connection</h3>
                  <p className="text-slate-600">
                    Dr. Jan introduces you to a top-producing BHHS agent in your new city. They're briefed
                    on your timeline, budget, and preferences before your first conversation.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Las Vegas Home Preparation</h3>
                  <p className="text-slate-600">
                    While you focus on your new opportunity, Dr. Jan coordinates staging, photography,
                    and any needed repairs. She oversees everything so you don't need to be present.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Coordinated Sale & Purchase</h3>
                  <p className="text-slate-600">
                    Both agents communicate to align timelines. Dr. Jan negotiates closing dates,
                    rent-backs, and contingencies that protect you on both ends of the transaction.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Remote Closing</h3>
                  <p className="text-slate-600">
                    Electronic signatures and remote notarization mean you can close from anywhere.
                    Dr. Jan coordinates with the title company and ensures everything transfers smoothly.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <SellerFaqs path="/sellers/relocation" />


          <LeftoverBand path="/sellers/relocation" slot={5} />

          {/* Coming TO Las Vegas */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="bg-green-50 border border-green-200 rounded-xl p-8">
              <p className="text-slate-700 mb-4">
                If you're moving TO Las Vegas from another city, Dr. Jan welcomes referrals from BHHS
                agents nationwide. She provides:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Virtual neighborhood tours before you arrive
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Named campus minutes at ccsd.net/zoning by address
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    New construction vs resale comparisons
                  </li>
                </ul>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Temporary housing recommendations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Local service provider referrals
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Coordination with your selling agent
                  </li>
                </ul>
              </div>
              <p className="text-green-800 font-medium mt-4">
                Moving to Las Vegas? <Link href="/contact" className="underline">Contact Dr. Jan</Link> to start your home search.
              </p>
            </div>
          </section>

          <ExpertQuote path="/sellers/relocation" />

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Call (702) 222-1964 — listing window on this file, not a slogan
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's create a relocation plan that works with your timeline.
              Dr. Jan will coordinate everything so you can focus on your new opportunity.
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
