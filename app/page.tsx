import RealScoutListings from "@/components/realscout/RealScoutListings";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReviewsSection from "@/components/sections/ReviewsSection";
import SupportFaqs from "@/components/sections/SupportFaqs";
import ExpertQuote from "@/components/sections/ExpertQuote";
import CtaActions from "@/components/sections/CtaActions";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import LeftoverBand from "@/components/sections/LeftoverBand";
import Link from "next/link";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import { ctaPhone, nap } from "@/lib/contact";
import { marketStats as stats } from "@/lib/site-config";
import { mediaUrl, photos } from "@/lib/media";

export const metadata = pageMetadata({
  path: "/",
  title: "Las Vegas Real Estate | Dr. Jan Duffy, REALTOR® | BHHS Nevada",
  description:
    "Buy or sell Las Vegas, Henderson, and Summerlin homes with Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. Live MLS search. Call (702) 222-1964.",
  keywords: [
    "Las Vegas real estate",
    "Henderson homes for sale",
    "Summerlin realtor",
    "Berkshire Hathaway HomeServices Nevada",
    "Dr. Jan Duffy",
  ],
});

export default async function Home() {
  const config = await getPageDomainConfig();

  return (
    <main id="main-content">
      <section className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden">
        <Image
          src={mediaUrl(photos.homeHero.src)}
          alt={photos.homeHero.alt}
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          {config.ctaBadge && (
            <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
              {config.ctaBadge}
            </span>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {config.heroHeadline}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto">
            {config.heroSubheadline}
          </p>

          <div className="mb-8 flex justify-center">
            <div
              dangerouslySetInnerHTML={{
                __html: `<realscout-simple-search agent-encoded-id="${config.realscoutAgentId}"></realscout-simple-search>`,
              }}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white tabular-nums">500+</span>
              <span>Transactions Closed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">Since 2008</span>
              <span>Las Vegas Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white tabular-nums">4.9★</span>
              <span>Client Rating</span>
            </div>
          </div>
          <div className="mt-8">
            <CtaActions variant="onDark" />
          </div>
        </div>
      </section>
      <div className="container mx-auto px-4">
        <OfficeProximity path="/" />
          <UniqueInterior path="/" />
          <ExpertQuote path="/" />
      </div>

      <section className="py-16 md:py-20 bg-white" data-home-compare="/">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            What we compare first: Summerlin villages vs Henderson parks
          </h2>
          <HeadingPhoto path="/" level="h2" photo={photos.summerlin} priority />
          <p className="text-lg text-slate-600 mb-8 text-center">
            Same west-valley start at 9406 W Lake Mead Blvd, Suite 100. We pick two contrasting
            pins so you are not averaging the whole valley.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-bold text-lg mb-2">Summerlin (10–15 min)</h3>
              <p className="text-slate-600 text-sm">
                Downtown Summerlin retail, The Trails, then Red Rock trailheads on the same clock.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-bold text-lg mb-2">Henderson (25–35 min)</h3>
              <p className="text-slate-600 text-sm">
                Green Valley street trees vs Inspirada rec campus. One east afternoon, not both
                plus Summerlin.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-bold text-lg mb-2">Sun City Summerlin (10–15 min)</h3>
              <p className="text-slate-600 text-sm">
                Four rec buildings if the brief is 55+. Anthem is a separate Henderson day.
              </p>
            </div>
          </div>
          <p className="text-sm text-slate-600 mt-8 mb-6 text-center">
            {nap.brokerage} · {nap.fullAddress} · Call or text {ctaPhone.display}.
          </p>
          <CtaActions variant="onLight" />
        </div>
      </section>

      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">
              January 2026 valley snapshot — then we apply it to your ZIP
            </h2>
            <HeadingPhoto path="/" level="h2" photo={photos.sellers} className="max-w-4xl mx-auto" />
            <p className="text-slate-400">Current data — updated {stats.lastUpdated}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                value: stats.lasVegas.medianPriceFormatted,
                label: "Median Price",
                sub: stats.lasVegas.yearOverYearChange + " YoY",
              },
              { value: String(stats.lasVegas.daysOnMarket), label: "Avg Days on Market", sub: "" },
              {
                value: stats.lasVegas.activeListings.toLocaleString("en-US"),
                label: "Active Listings",
                sub: "",
              },
              {
                value: String(stats.lasVegas.inventoryMonths),
                label: "Months Inventory",
                sub: "",
              },
            ].map(({ value, label, sub }) => (
              <div key={label} className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-1 tabular-nums">{value}</div>
                <div className="text-slate-300 text-sm">{label}</div>
                {sub && <div className="text-green-400 text-xs mt-1 tabular-nums">{sub}</div>}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/market-report"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors"
            >
              Full Las Vegas Market Report
            </Link>
          </div>
        </div>
      </section>

      <RealScoutListings />
      <WhyChooseUs />
      <LeftoverBand path="/" />
      <ReviewsSection showHeading={false} />
      <SupportFaqs path="/" />
      <LeftoverBand path="/" slot={1} />
      <p className="sr-only">
        {nap.name}. {nap.fullAddress}. Call {ctaPhone.display}.
      </p>
    </main>
  );
}
