import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Shield,
  Scale,
  Heart,
  Clock,
  FileText,
  CheckCircle,
  Lock,
  Users,
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
  path: "/sellers/divorce-probate",
  title: "Divorce & Probate Home Sales Las Vegas | Berkshire Hathaway HomeServices",
  description:
    "Sensitive real estate situations handled with discretion. Dr. Jan Duffy helps with divorce sales, probate, estate liquidation, and court-ordered sales. Call (702) 222-1964.",
  keywords: [
    "divorce home sale Las Vegas",
    "probate real estate Las Vegas",
    "estate sale Las Vegas",
    "court ordered sale Nevada",
    "Berkshire Hathaway HomeServices divorce",
  ],
});

export default function DivorceProbatePage() {
  return (
    <>
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
{/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-slate-100 text-slate-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Handled with Discretion & Professionalism
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Difficult Situations,<br />Expert Guidance
            </h1>
            <HeadingPhoto path="/sellers/divorce-probate" />

            <p className="text-xl text-slate-600 mb-8">
              When life gets complicated, you need an agent who handles sensitive transactions
              with discretion, expertise, and compassion.
            </p>
            <CtaActions variant="onLight" />
          <OfficeProximity path="/sellers/divorce-probate" />
          <UniqueInterior path="/sellers/divorce-probate" />

          </div>

          <LeftoverBand path="/sellers/divorce-probate" />

          <LeftoverBand path="/sellers/divorce-probate" slot={1} />

          {/* Our Approach */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Lock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Confidentiality First</h3>
                <p className="text-slate-600 text-sm">
                  Your situation stays private. We don't discuss circumstances with other agents
                  or include details in marketing that could compromise your privacy.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Scale className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Neutral & Professional</h3>
                <p className="text-slate-600 text-sm">
                  In multi-party situations, we represent the property's sale—not one party over
                  another. Fair, documented processes protect everyone.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">Compassionate Guidance</h3>
                <p className="text-slate-600 text-sm">
                  These aren't just transactions—they're life transitions. We handle them with
                  the care and respect your situation deserves.
                </p>
              </div>
            </div>
          </section>

          {/* Legal Coordination */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <FileText className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="font-bold text-xl text-slate-900">
                  We Work With Your Legal Team
                </h3>
              </div>
              <p className="text-slate-700 mb-4">
                Divorce, probate, and estate sales involve legal complexities beyond standard
                real estate. We coordinate seamlessly with:
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Family law attorneys
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Estate planning lawyers
                  </li>
                </ul>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Probate court requirements
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Tax professionals
                  </li>
                </ul>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Mediators
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Financial advisors
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <LeftoverBand path="/sellers/divorce-probate" slot={2} />

          {/* Nevada-Specific Information */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700 mb-8">
              <p>
                Nevada has unique laws that affect divorce and probate real estate sales. Understanding
                these nuances is critical for a smooth transaction. Dr. Jan Duffy has extensive experience
                navigating Nevada's specific requirements.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-4">Nevada Divorce Sales</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <Scale className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Community Property State:</strong> Nevada is one of nine community property
                      states. Assets acquired during marriage are typically split 50/50, including real
                      estate appreciation.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Scale className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Joint Decision Required:</strong> Both spouses must agree on listing price,
                      offers, and closing terms—or a court order is needed. Dr. Jan facilitates agreement
                      through documented processes.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Scale className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Court Approval:</strong> Some divorce decrees require court approval for
                      real estate sales. Dr. Jan coordinates timing with your attorney.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <h3 className="font-bold text-lg text-slate-900 mb-4">Nevada Probate Sales</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Probate Timeline:</strong> Nevada probate typically takes 6-12 months. Real
                      estate can often be sold during this period with proper court authorization.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Letters Testamentary:</strong> The personal representative needs Letters
                      Testamentary to legally sell. We wait for these before listing but can prepare
                      the property in advance.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FileText className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Court Confirmation:</strong> Some sales require court confirmation, especially
                      if sold below appraised value. Dr. Jan understands these requirements and timelines.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <LeftoverBand path="/sellers/divorce-probate" slot={3} />

          {/* The Process */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Confidential Initial Consultation</h3>
                  <p className="text-slate-600">
                    We start with a private conversation—in person, by phone, or video. Dr. Jan learns about
                    your situation, timeline, and concerns. For divorce cases, she can meet with parties
                    separately if needed. All discussions are confidential.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Professional Valuation & Documentation</h3>
                  <p className="text-slate-600">
                    A comprehensive market analysis provides an objective valuation—crucial for divorce
                    settlements and probate proceedings. This documented valuation can be submitted to
                    courts and attorneys as needed.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Coordinated Listing Strategy</h3>
                  <p className="text-slate-600">
                    Once all parties agree (or court authorization is obtained), we list the property with
                    appropriate marketing. We can use discrete marketing if privacy is a priority, or
                    full exposure if speed is the goal.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Multi-Party Communication</h3>
                  <p className="text-slate-600">
                    All parties and their representatives receive the same information simultaneously.
                    Showings, offers, and negotiations are documented and shared transparently. No one
                    is left out of the loop.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">5</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Clean Closing & Distribution</h3>
                  <p className="text-slate-600">
                    We coordinate with the title company to ensure proceeds are distributed according to
                    court orders or agreements. For probate, we ensure proper documentation for estate
                    accounting.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <SellerFaqs path="/sellers/divorce-probate" />


          <LeftoverBand path="/sellers/divorce-probate" slot={4} />

          {/* Why BHHS Matters */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <Shield className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Credibility & Trust</h3>
                <p className="text-slate-600 text-sm">
                  The Berkshire Hathaway name carries weight with attorneys, judges, and opposing
                  parties. Our valuations and processes are respected because of the brand's
                  reputation for integrity.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <Scale className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Professional Standards</h3>
                <p className="text-slate-600 text-sm">
                  BHHS agents follow strict ethical guidelines and documentation standards. This
                  protects all parties and provides a defensible paper trail for legal proceedings.
                </p>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6 text-center">
                <Users className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-slate-900 mb-2">Expert Network</h3>
                <p className="text-slate-600 text-sm">
                  Dr. Jan has established relationships with family law attorneys, probate
                  specialists, and estate planners throughout Las Vegas. She can refer trusted
                  professionals if you need legal guidance.
                </p>
              </div>
            </div>
          </section>

          <ExpertQuote path="/sellers/divorce-probate" />

          {/* CTA */}
          <section className="text-center bg-slate-800 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Call (702) 222-1964 — this file is not a group showing
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Discuss your situation privately with Dr. Jan. No pressure, no judgment—just
              professional guidance to help you move forward.
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
