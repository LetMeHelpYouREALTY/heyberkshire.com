import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import {
  Phone,
  Waves,
  Mountain,
  Home as HomeIcon,
  Star,
  Dumbbell,
  CheckCircle,
} from "lucide-react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CtaActions from "@/components/sections/CtaActions";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import LeftoverBand from "@/components/sections/LeftoverBand";
import FiftyFiveFaqs from "@/components/sections/FiftyFiveFaqs";
import ExpertQuote from "@/components/sections/ExpertQuote";
import FiftyFiveAmenities from "@/components/sections/FiftyFiveAmenities";
import RealScoutSearch from "@/components/realscout/RealScoutSearch";


export const metadata: Metadata = pageMetadata({
  path: "/55-plus-communities/del-webb-lake-las-vegas",
  title: "Del Webb at Lake Las Vegas Homes | Berkshire Hathaway HomeServices",
  description:
    "Lakefront 55+ living at Del Webb Lake Las Vegas. Homes from $400K-$900K. Resort amenities, stunning lake and mountain views. Dr. Jan Duffy. Call (702) 222-1964.",
  keywords: [
    "Del Webb Lake Las Vegas",
    "Lake Las Vegas 55 plus",
    "Del Webb homes Henderson",
    "lakefront retirement community",
    "Berkshire Hathaway Del Webb",
  ],
});

export default function DelWebbLakeLasVegasPage() {
  return (
    <>
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
{/* Hero */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Waves className="h-4 w-4 mr-2" />
              Lakefront 55+ Living
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Del Webb at Lake Las Vegas
            </h1>
            <HeadingPhoto path="/55-plus-communities/del-webb-lake-las-vegas" />

            <p className="text-xl text-slate-600">
              Modern homes. Lake views. Resort living. The newest Del Webb in Las Vegas.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" />
            </div>
            <div className="mt-8 max-w-xl mx-auto text-left">
              <p className="text-sm font-semibold text-slate-700 mb-3 text-center">Search live MLS inventory</p>
              <RealScoutSearch />
            </div>
          </div>
          <OfficeProximity path="/55-plus-communities/del-webb-lake-las-vegas" />
          <UniqueInterior path="/55-plus-communities/del-webb-lake-las-vegas" />


          <LeftoverBand path="/55-plus-communities/del-webb-lake-las-vegas" />

          {/* About */}
          <section className="mb-16 max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-slate-700">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                1,800+ homes, pickleball, and a 320-acre lake — 35–45 minutes from Suite 100
              </h2>
<p>
                <strong>Del Webb at Lake Las Vegas</strong> is a 2016-to-present 55+ campus on
                Lake Las Vegas. Occupancy rules are reviewed at 9406 W Lake Mead Blvd, Suite 100
                before the Henderson drive. Call (702) 222-1964. Do not stack this with a
                Summerlin 55+ morning.
              </p>
              <p>
                Open floor plans, fitness, pools, and pickleball sit on this campus. Lake, mountain,
                or golf-course views vary by lot — measure from the listing. Club lists are in the
                packet; we confirm them the week you tour.
              </p>
              <p>
                <strong>Berkshire Hathaway HomeServices Nevada Properties</strong> helps buyers
                navigate Del Webb's various floor plans and lot positions. Dr. Jan Duffy provides
                guidance on which phases offer the best value and which premium lots justify
                their price premiums.
              </p>
            </div>
          </section>

          {/* Lake Las Vegas shoreline pins */}
          <section className="mb-16 max-w-5xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8">
              <div className="flex items-start">
                <Waves className="h-8 w-8 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    320-acre lake, Reflection Bay, and the Village shops — timed as one Henderson clock
                  </h3>
                  <p className="text-slate-700 mb-4">
                    Lake Las Vegas is a 320-acre private lake surrounded by luxury resorts, golf
                    courses, and residential communities. Del Webb residents enjoy access to:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Lake activities (kayaking, paddleboarding)
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Village restaurants & shops
                      </li>
                    </ul>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Reflection Bay Golf Club
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        Westin resort amenities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <FiftyFiveAmenities path="/55-plus-communities/del-webb-lake-las-vegas" />

          {/* Why Del Webb Lake Las Vegas */}
          <ExpertQuote path="/55-plus-communities/del-webb-lake-las-vegas" />

          <FiftyFiveFaqs path="/55-plus-communities/del-webb-lake-las-vegas" />


          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lake Las Vegas 55+ is a Henderson block — HOA packet at the desk first
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Tour Del Webb at Lake Las Vegas with Dr. Jan Duffy. See the shoreline streets and rec campus on one Henderson afternoon.
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
