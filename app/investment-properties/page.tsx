import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import { Phone, TrendingUp, DollarSign, Building, BarChart, CheckCircle, Calculator } from "lucide-react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CtaActions from "@/components/sections/CtaActions";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import ExpertQuote from "@/components/sections/ExpertQuote";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import IntentFaqs from "@/components/sections/IntentFaqs";
import LeftoverBand from "@/components/sections/LeftoverBand";


export const metadata: Metadata = pageMetadata({
  path: "/investment-properties",
  title: "Las Vegas Investment Properties | Berkshire Hathaway HomeServices",
  description:
    "Invest in Las Vegas real estate with Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. Rental properties, ROI analysis, 1031 exchanges. No state income tax. Call (702) 222-1964.",
  keywords: [
    "Las Vegas investment property",
    "Las Vegas rental property",
    "Henderson real estate investing",
    "Nevada investment homes",
    "1031 exchange Las Vegas",
    "cash flow properties Las Vegas",
  ],
});

const investmentAreas = [
  {
    area: "North Las Vegas",
    avgPrice: "$385K",
    avgRent: "$1,950",
    capRate: "5.2%",
    appreciation: "+3.2%",
  },
  {
    area: "Henderson",
    avgPrice: "$485K",
    avgRent: "$2,300",
    capRate: "4.5%",
    appreciation: "+5.1%",
  },
  {
    area: "Spring Valley",
    avgPrice: "$420K",
    avgRent: "$2,100",
    capRate: "4.8%",
    appreciation: "+4.0%",
  },
  {
    area: "Summerlin",
    avgPrice: "$625K",
    avgRent: "$2,800",
    capRate: "4.0%",
    appreciation: "+6.8%",
  },
  {
    area: "Enterprise",
    avgPrice: "$450K",
    avgRent: "$2,200",
    capRate: "4.6%",
    appreciation: "+4.5%",
  },
  {
    area: "Centennial Hills",
    avgPrice: "$495K",
    avgRent: "$2,400",
    capRate: "4.4%",
    appreciation: "+4.8%",
  },
];

export default function InvestmentPropertiesPage() {
  return (
    <>
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Las Vegas Investment Properties
            </h1>
            <HeadingPhoto path="/investment-properties" />

            <p className="text-xl text-slate-600">
              No state income tax, strong appreciation, and excellent rental yields. Discover why
              investors choose Las Vegas—with guidance from{" "}
              <strong>Berkshire Hathaway HomeServices</strong>.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
          <OfficeProximity path="/investment-properties" />
          <UniqueInterior path="/investment-properties" />

            </div>
          </div>

          <LeftoverBand path="/investment-properties" />

          <LeftoverBand path="/investment-properties" slot={1} />

          <section className="mb-16 max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-slate-200 rounded-lg">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                      Area
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                      Avg Price
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                      Avg Rent
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                      Cap Rate
                    </th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">
                      Appreciation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {investmentAreas.map((area, index) => (
                    <tr
                      key={area.area}
                      className={index % 2 === 0 ? "bg-white" : "bg-slate-50"}
                    >
                      <td className="px-6 py-4 font-medium text-slate-900">{area.area}</td>
                      <td className="px-6 py-4 text-slate-700">{area.avgPrice}</td>
                      <td className="px-6 py-4 text-slate-700">{area.avgRent}/mo</td>
                      <td className="px-6 py-4 text-green-600 font-medium">{area.capRate}</td>
                      <td className="px-6 py-4 text-blue-600 font-medium">{area.appreciation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-slate-500 text-sm mt-4">
              Data represents single-family rental properties. Actual returns vary by property.
            </p>
          </section>

          <ExpertQuote path="/investment-properties" />

          <LeftoverBand path="/investment-properties" slot={2} />

          <section className="mb-16 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Property identification based on your criteria",
                "Cash flow and ROI analysis",
                "Neighborhood appreciation research",
                "Rental market comparisons",
                "1031 exchange coordination",
                "Property management referrals",
                "Multi-family opportunity sourcing",
                "Fix-and-flip opportunity identification",
                "Portfolio building strategy",
                "Out-of-state investor support",
              ].map((service) => (
                <div key={service} className="flex items-center bg-white p-4 rounded-lg border border-slate-200">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700">{service}</span>
                </div>
              ))}
            </div>
          </section>

          <LeftoverBand path="/investment-properties" slot={3} />

          <section className="mb-16 bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-700 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Buy & Hold Rentals</h3>
                <p className="text-blue-200 text-sm">
                  Long-term wealth building through rental income and appreciation. Ideal for
                  passive investors seeking steady cash flow.
                </p>
              </div>
              <div className="bg-blue-700 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Fix & Flip</h3>
                <p className="text-blue-200 text-sm">
                  Value-add opportunities for active investors. We identify underpriced properties
                  with renovation potential.
                </p>
              </div>
              <div className="bg-blue-700 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-2">Short-Term Rentals</h3>
                <p className="text-blue-200 text-sm">
                  Vacation rental opportunities in tourist-friendly areas. Higher yields with
                  active management.
                </p>
              </div>
            </div>
          </section>

          <LeftoverBand path="/investment-properties" slot={4} />

          <section className="mb-16 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <Calculator className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="font-bold text-lg text-slate-900 mb-2">Cap Rate (Capitalization Rate)</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Net Operating Income ÷ Property Value. Las Vegas cap rates range from 4-6%,
                  Higher cap rates typically mean more HOA or vacancy variables — we date them at Suite 100.
                </p>
                <div className="bg-slate-50 rounded p-3 text-sm">
                  <strong>Example:</strong> $485K Henderson home renting at $2,300/mo = ~4.5% cap rate
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <TrendingUp className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="font-bold text-lg text-slate-900 mb-2">Cash-on-Cash Return</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Annual cash flow ÷ Cash invested. With 25% down payment and financing, Las Vegas
                  properties often achieve 8-12% cash-on-cash returns through leverage.
                </p>
                <div className="bg-slate-50 rounded p-3 text-sm">
                  <strong>Example:</strong> $121K down on $485K property with $400/mo net = 4% cash-on-cash
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <BarChart className="h-8 w-8 text-purple-600 mb-4" />
                <h3 className="font-bold text-lg text-slate-900 mb-2">Total Return</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Cash flow + appreciation + loan paydown + tax benefits. Las Vegas's strong appreciation
                  (4-6% annually) combined with rental income creates total returns of 12-18%.
                </p>
                <div className="bg-slate-50 rounded p-3 text-sm">
                  <strong>Note:</strong> Tax benefits include depreciation, mortgage interest, and expense deductions
                </div>
              </div>
              <div className="bg-white border border-slate-200 rounded-xl p-6">
                <DollarSign className="h-8 w-8 text-amber-600 mb-4" />
                <h3 className="font-bold text-lg text-slate-900 mb-2">Price-to-Rent Ratio</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Property price ÷ Annual rent. Las Vegas ratios of 15-18 indicate healthy investment
                  potential. Ratios above 20 suggest overpriced markets.
                </p>
                <div className="bg-slate-50 rounded p-3 text-sm">
                  <strong>Example:</strong> $385K ÷ $23,400/year = 16.5 ratio (favorable)
                </div>
              </div>
            </div>
          </section>

          <LeftoverBand path="/investment-properties" slot={5} />

          <section className="mb-16 bg-slate-50 rounded-2xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-xl text-slate-900 mb-2">North Las Vegas</h3>
                <p className="text-slate-600 mb-4">
                  <strong>Highest published cap rates on this page (5.2%+)</strong> with lower entry prices. Growing population as Amazon, Fanatics, and other employers
                  expand. Compare commute times to named campuses such as Legacy High School.
                </p>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div><span className="font-medium">Entry:</span> $350K-$450K</div>
                  <div><span className="font-medium">Rent:</span> $1,800-$2,200</div>
                  <div><span className="font-medium">Tenant Pool:</span> Warehouse, logistics, and service employees</div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-xl text-slate-900 mb-2">Henderson</h3>
                <p className="text-slate-600 mb-4">
                  <strong>Lower vacancy and longer leases on this page.</strong> Commute times to named campuses such as Coronado High School. Steady
                  appreciation offsets slightly lower cap rates.
                </p>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div><span className="font-medium">Entry:</span> $450K-$600K</div>
                  <div><span className="font-medium">Rent:</span> $2,100-$2,800</div>
                  <div><span className="font-medium">Tenant Pool:</span> Office, medical, and hospitality workers</div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6">
                <h3 className="font-bold text-xl text-slate-900 mb-2">Summerlin</h3>
                <p className="text-slate-600 mb-4">
                  <strong>6.8% YoY appreciation cited on this page.</strong> Lower cap rates but longer lease terms and
                  very low vacancy. Downtown Summerlin amenities and Palo Verde High School commute.
                </p>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div><span className="font-medium">Entry:</span> $550K-$800K</div>
                  <div><span className="font-medium">Rent:</span> $2,500-$3,500</div>
                  <div><span className="font-medium">Tenant Pool:</span> Executives, tech workers, medical professionals</div>
                </div>
              </div>
            </div>
          </section>

          {/* 1031 Exchange Section */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              1031 identification window dated at Suite 100 — bring the APN
            </h2>
            <div className="bg-white border border-slate-200 rounded-xl p-8">
              <p className="text-slate-700 mb-6">
                A 1031 exchange lets you defer capital gains taxes by reinvesting proceeds from
                a sold investment property into a "like-kind" replacement property. Las Vegas is a
                popular destination for 1031 exchanges due to no state income tax, strong cash flow,
                and appreciation potential.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-bold text-slate-900 mb-3">Key Deadlines</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div><strong>45 days:</strong> Identify replacement properties</div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div><strong>180 days:</strong> Close on replacement property</div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div><strong>Day 1:</strong> Begin with qualified intermediary</div>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-3">180-day clock, identified APNs, Nevada tax line</h3>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>No state income tax on rental income — HOA and property tax still apply</div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>Appreciation is dated against comps, not a caption</div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>Cash flow is dated against the rent roll at Suite 100</div>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="text-slate-600 text-sm">
                Dr. Jan works with qualified intermediaries and can help identify replacement properties
                within the 45-day window. Berkshire Hathaway's nationwide network is invaluable for
                clients exchanging into or out of Las Vegas.
              </p>
            </div>
          </section>
          <IntentFaqs path="/investment-properties" />


          {/* CTA */}
          <section className="text-center bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bring the APN and rent roll to Suite 100 — (702) 222-1964
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get expert guidance on Las Vegas investment properties from Dr. Jan Duffy and
              Berkshire Hathaway HomeServices.
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
