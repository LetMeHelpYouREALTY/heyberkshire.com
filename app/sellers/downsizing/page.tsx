import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Heart,
  Home as HomeIcon,
  DollarSign,
  CheckCircle,
  Users,
  ArrowDownRight,
  Shield,
  Sun,
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
  path: "/sellers/downsizing",
  title: "Downsizing in Las Vegas | Berkshire Hathaway HomeServices",
  description:
    "Ready to simplify? Dr. Jan Duffy helps Las Vegas homeowners extract equity and transition to low-maintenance living. 55+ communities, condos, and more. Call (702) 222-1964.",
  keywords: [
    "downsizing Las Vegas",
    "sell large home Las Vegas",
    "55 plus communities Las Vegas",
    "empty nester Las Vegas",
    "Berkshire Hathaway HomeServices downsizing",
  ],
});

export default function DownsizingPage() {
  return (
    <>
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
{/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Heart className="h-4 w-4 mr-2" />
              Embrace Low-Maintenance Living
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Simplify. Downsize. Enjoy.
            </h1>
            <HeadingPhoto path="/sellers/downsizing" />

            <p className="text-xl text-slate-600 mb-8">
              Extract your equity. Embrace low-maintenance living. Start your next chapter.
            </p>
            <CtaActions variant="onLight" />
          <OfficeProximity path="/sellers/downsizing" />
          <UniqueInterior path="/sellers/downsizing" />

          </div>

          <LeftoverBand path="/sellers/downsizing" />

          <LeftoverBand path="/sellers/downsizing" slot={1} />

          <section className="mb-16 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Sun className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">55+ Communities</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Sun City Summerlin, Del Webb, Heritage at Stonebridge. HOA-maintained exteriors,
                  rec square footage listed in the occupancy packet.
                </p>
                <div className="text-blue-600 font-semibold">$375K - $650K</div>
                <Link
                  href="/55-plus-communities"
                  className="block mt-3 text-sm text-blue-600 hover:text-blue-700"
                >
                  Explore 55+ Communities →
                </Link>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <HomeIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Single-Story Homes</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Right-sized single-story in neighborhoods with HOA landscaping. No stairs,
                  smaller yard, lower utility costs. Age-in-place features available.
                </p>
                <div className="text-blue-600 font-semibold">$400K - $600K</div>
                <Link
                  href="/contact"
                  className="block mt-3 text-sm text-blue-600 hover:text-blue-700"
                >
                  Search Single-Story Homes →
                </Link>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">Lock-and-Leave Condos</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Secure, zero-maintenance living. Travel for months without worry.
                  Guard-gated options available in Summerlin and Henderson.
                </p>
                <div className="text-blue-600 font-semibold">$275K - $500K</div>
                <Link
                  href="/contact"
                  className="block mt-3 text-sm text-blue-600 hover:text-blue-700"
                >
                  View Condo Options →
                </Link>
              </div>
            </div>
          </section>

          {/* Dual Transaction Expertise */}
          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Sale file and next-home file share one Suite 100 clock
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-4">Selling Your Large Home</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Strategic pricing to attract qualified buyers quickly</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Professional staging that showcases everyday living features</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Negotiate closing timeline that works with your purchase</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Coordinate with estate/trust attorneys if needed</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-4">Finding Your Right-Sized Home</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Tour 55+ communities with expert guidance on amenities and fees</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Identify single-story homes with accessibility features</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Compare HOA fees, reserves, and community stability</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Coordinate timing so you're never without a home</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Emotional Support */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8">
              <div className="flex items-center mb-4">
                <Heart className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="font-bold text-lg text-slate-900">
                  We Understand This Is Emotional
                </h3>
              </div>
              <p className="text-slate-700 mb-4">
                Your home holds decades of memories—first steps, holiday dinners, backyard
                barbecues. Downsizing isn't just a real estate transaction; it's a life transition.
              </p>
              <p className="text-slate-700">
                Dr. Jan approaches downsizing with empathy and patience. She'll never rush you,
                and she'll help you find a new home that feels right—not just financially, but
                emotionally. Many of her downsizing clients have become friends because she
                genuinely cares about their happiness, not just the sale.
              </p>
            </div>
          </section>

          {/* 55+ Community Comparison */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Sun City, Heritage, Del Webb, Solera — HOA dues and rec campuses, January 2026 bands
            </h2>
            <p className="text-slate-600 text-center mb-8 max-w-3xl mx-auto">
              Occupancy packets are reviewed at Suite 100. Compare HOA-maintained exteriors and rec
              square footage, then drive one campus. Call (702) 222-1964.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-slate-200 rounded-lg">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Community</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Price Range</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">HOA/Mo</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Top Amenity</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Sun City Summerlin", price: "$375K-$650K", hoa: "$165-$220", amenity: "4 golf courses" },
                    { name: "Sun City Anthem", price: "$400K-$700K", hoa: "$150-$200", amenity: "Mountain views" },
                    { name: "Heritage at Stonebridge", price: "$450K-$600K", hoa: "$175-$225", amenity: "Resort pool" },
                    { name: "Del Webb Lake Las Vegas", price: "$400K-$650K", hoa: "$180-$250", amenity: "Lake access" },
                    { name: "Solera at Anthem", price: "$375K-$550K", hoa: "$140-$180", amenity: "Smaller, intimate" },
                  ].map((community, index) => (
                    <tr key={community.name} className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-4 py-3 font-medium text-slate-900">{community.name}</td>
                      <td className="px-4 py-3 text-slate-700">{community.price}</td>
                      <td className="px-4 py-3 text-slate-700">{community.hoa}</td>
                      <td className="px-4 py-3 text-slate-700">{community.amenity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center mt-4">
              <Link href="/55-plus-communities" className="text-blue-600 hover:text-blue-700 font-semibold">
                View Detailed 55+ Community Guide →
              </Link>
            </p>
          </section>

          <LeftoverBand path="/sellers/downsizing" slot={2} />

          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-4">Financial Factors</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <DollarSign className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>HOA Fees:</strong> 55+ communities range from $140-$250/month. Ensure you understand what's included (landscaping, exterior maintenance, amenities).
                    </div>
                  </li>
                  <li className="flex items-start">
                    <DollarSign className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Capital Gains:</strong> If you've lived in your home 2+ years, up to $500,000 (married) in gains are tax-free. Consult a CPA for larger gains.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <DollarSign className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Insurance Costs:</strong> Smaller homes and condos often have lower insurance. Some 55+ communities include exterior coverage in HOA.
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900 mb-4">Square footage, HOA, and guest-room counts</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Guest Space:</strong> Overnight guests still visit. Consider a home with a guest room or nearby vacation rentals for overflow.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Healthcare Access:</strong> Proximity to hospitals matters. Summerlin Hospital, Henderson Hospital, and Centennial Hills Hospital serve different areas.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>Rec square footage:</strong> Walk one clubhouse before you pick a street. Green Valley and Summerlin are separate clocks from 55+ occupancy packets.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <LeftoverBand path="/sellers/downsizing" slot={3} />

          <section className="mb-16 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Discovery Conversation</h3>
                  <p className="text-slate-600">
                    We start with a no-pressure conversation about your goals. What's driving your decision?
                    Which rec campus and HOA dollar band? Single-story vs condo square footage? This helps
                    Dr. Jan date the next file before any clubhouse walk.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Equity Analysis & Options Review</h3>
                  <p className="text-slate-600">
                    Dr. Jan provides a comprehensive market analysis of your current home, showing exactly
                    how much equity you have. Then she presents downsizing options that fit your budget,
                    comparing 55+ rec campuses, single-story homes, and condos by square footage.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Tour & Compare</h3>
                  <p className="text-slate-600">
                    Visit potential new homes and communities at your pace. Dr. Jan provides insight into
                    HOA financial health, community culture, and resale trends. No pressure—this is about
                    finding what feels right.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                <div className="bg-white border border-slate-200 rounded-xl p-6 flex-grow">
                  <h3 className="font-bold text-slate-900 mb-2">Coordinated Transaction</h3>
                  <p className="text-slate-600">
                    When you're ready, Dr. Jan coordinates both the sale of your current home and purchase
                    of your new one. Timing is synchronized so you're never homeless or carrying two mortgages.
                    She handles all the details while you focus on your next chapter.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <SellerFaqs path="/sellers/downsizing" />


          <ExpertQuote path="/sellers/downsizing" />

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bring the APN to Suite 100 — then one 55+ rec campus
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free home valuation and explore your downsizing options.
              Dr. Jan will show you what's possible without any pressure.
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
