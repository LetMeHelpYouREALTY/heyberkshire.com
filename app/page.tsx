import Navbar from "@/components/layouts/Navbar";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ReviewsSection from "@/components/sections/ReviewsSection";
import FAQSection from "@/components/sections/FAQSection";
import Footer from "@/components/layouts/Footer";
import Link from "next/link";
import { Phone, Home as HomeIcon, TrendingUp, Shield, Users } from "lucide-react";
import { getPageDomainConfig } from "@/lib/get-domain-config";
import { getFaqsForDomain } from "@/lib/faq-config";

// Maps pageType → human-readable FAQ section title/subtitle
const FAQ_SECTION_COPY: Record<
  string,
  { title: string; subtitle: string }
> = {
  community: {
    title: "Community Real Estate FAQ",
    subtitle: "Common questions from buyers and sellers in this neighborhood",
  },
  luxury: {
    title: "Luxury Las Vegas Real Estate FAQ",
    subtitle: "What high-end buyers and sellers ask Dr. Jan most",
  },
  "55plus": {
    title: "55+ Community FAQ",
    subtitle: "Everything active-adult buyers need to know before moving",
  },
  search: {
    title: "Las Vegas Home Search FAQ",
    subtitle: "Straight answers from a 30-year Las Vegas market expert",
  },
  lifestyle: {
    title: "Moving to Las Vegas FAQ",
    subtitle: "What relocating buyers ask Dr. Jan most often",
  },
  investment: {
    title: "Las Vegas Investment Property FAQ",
    subtitle: "Numbers, strategy, and market insight for investors",
  },
};

export default async function Home() {
  const config = await getPageDomainConfig();

  // ── Domain-aware FAQs ────────────────────────────────────────────────────
  const faqs = getFaqsForDomain(config.pageType, config.domain);
  const faqCopy = FAQ_SECTION_COPY[config.pageType] ?? FAQ_SECTION_COPY["search"];

  // Personalise the FAQ title with the neighborhood name for community/55+ pages
  const faqTitle =
    config.pageType === "community" || config.pageType === "55plus"
      ? `${config.neighborhood} FAQ`
      : faqCopy.title;

  // ── Schema: RealEstateAgent ──────────────────────────────────────────────
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: `Dr. Jan Duffy - ${config.neighborhood} Real Estate`,
    url: `https://${config.domain !== "default" ? config.domain : "heyberkshire.com"}`,
    telephone: "+17022221964",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9406 W Lake Mead Blvd, Suite 100",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89134",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "200",
    },
  };

  // ── Schema: FAQPage ──────────────────────────────────────────────────────
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        {/* Domain-Aware Hero */}
        <section className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: "url('/Image/hero_bg_1.jpg')" }}
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

            {/* RealScout Search Widget */}
            <div className="mb-8 flex justify-center">
              <div
                dangerouslySetInnerHTML={{
                  __html: `<realscout-simple-search agent-encoded-id="${config.realscoutAgentId}"></realscout-simple-search>`,
                }}
              />
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">500+</span>
                <span>Families Helped</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">30+ Years</span>
                <span>Las Vegas Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-white">4.9★</span>
                <span>Client Rating</span>
              </div>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Why Work With Dr. Jan Duffy?
              </h2>
              <p className="text-lg text-slate-600">
                Berkshire Hathaway HomeServices Nevada Properties — the most trusted name in Las Vegas real estate.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                { icon: Shield, title: "Trusted Brand", desc: "Backed by Warren Buffett's Berkshire Hathaway — unmatched integrity" },
                { icon: Users, title: "50K+ Network", desc: "Global referral network for seamless moves to or from any market" },
                { icon: TrendingUp, title: "$127M+ Sold", desc: "Proven results across every Las Vegas neighborhood since 2008" },
                { icon: HomeIcon, title: "Full Service", desc: "Buying, selling, 55+, luxury, investment — one expert handles it all" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center p-6">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{title}</h3>
                  <p className="text-slate-600 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Stats */}
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">
                {config.neighborhood} Real Estate Market
              </h2>
              <p className="text-slate-400">Current data — updated regularly</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { value: "$450K", label: "Median Price", sub: "+4.2% YoY" },
                { value: "28", label: "Avg Days on Market", sub: "" },
                { value: "4,850", label: "Active Listings", sub: "" },
                { value: "2.1", label: "Months Inventory", sub: "" },
              ].map(({ value, label, sub }) => (
                <div key={label} className="text-center">
                  <div className="text-4xl font-bold text-blue-400 mb-1">{value}</div>
                  <div className="text-slate-300 text-sm">{label}</div>
                  {sub && <div className="text-green-400 text-xs mt-1">{sub}</div>}
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/market-report" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors">
                Full Market Report
              </Link>
            </div>
          </div>
        </section>

        <RealScoutListings />
        <WhyChooseUs />
        <ReviewsSection />

        {/* Domain-Aware FAQ with FAQPage schema already injected above */}
        <FAQSection
          faqs={faqs}
          title={faqTitle}
          subtitle={faqCopy.subtitle}
        />

        {/* Domain-Specific CTA */}
        <section className="py-16 md:py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {config.ctaHeadline}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {config.ctaSubheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17022221964"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-50 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                Call 702-222-1964
              </a>
              <Link
                href="/contact"
                className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors"
              >
                Send a Message
              </Link>
            </div>
            <p className="mt-6 text-blue-200 text-sm">
              Dr. Jan Duffy | License S.0197614.LLC | Berkshire Hathaway HomeServices Nevada Properties
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
