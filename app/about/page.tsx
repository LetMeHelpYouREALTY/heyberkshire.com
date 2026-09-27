import RealScoutListings from "@/components/realscout/RealScoutListings";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail, 
  Award, 
  Users, 
  Home, 
  TrendingUp, 
  MapPin,
  Shield,
  Star,
  Clock,
  ArrowRight,
} from "lucide-react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CtaActions from "@/components/sections/CtaActions";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import ExpertQuote from "@/components/sections/ExpertQuote";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import LeftoverBand from "@/components/sections/LeftoverBand";

import { maps, googleReviewsUrl } from "@/lib/contact";
import { mediaUrl, photos } from "@/lib/media";

export const metadata: Metadata = pageMetadata({
  path: "/about",
  title: "About Dr. Jan Duffy | Berkshire Hathaway HomeServices Las Vegas",
  description:
    "Meet Dr. Jan Duffy, your trusted Berkshire Hathaway HomeServices Nevada Properties agent. Serving Las Vegas since 2008, $127M+ in transactions, Henderson & Summerlin specialist. Call (702) 222-1964.",
  keywords: [
    "Dr. Jan Duffy",
    "Berkshire Hathaway HomeServices agent",
    "Las Vegas realtor",
    "BHHS Nevada Properties",
    "Henderson real estate agent",
    "Summerlin realtor",
  ],
});

// Person Schema for Dr. Jan Duffy
const personSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Dr. Jan Duffy",
  image: "https://heyberkshire.com/images/dr-jan-duffy.jpg",
  jobTitle: "REALTOR®",
  description:
    "Licensed real estate agent with Berkshire Hathaway HomeServices Nevada Properties, serving Las Vegas, Henderson, and Summerlin since 2008.",
  telephone: "+17025001942",
  email: "homes@heyberkshire.com",
  url: "https://heyberkshire.com/about",
  worksFor: {
    "@type": "RealEstateAgent",
    name: "Berkshire Hathaway HomeServices Nevada Properties",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9406 W Lake Mead Blvd, Suite 100",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89134",
    },
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Real Estate License",
    credentialNumber: "S.0197614.LLC",
  },
  knowsAbout: [
    "Las Vegas real estate",
    "Henderson properties",
    "Summerlin homes",
    "Luxury real estate",
    "Investment properties",
    "55+ communities",
    "California relocation",
  ],
};

const areasServed = [
  "Las Vegas",
  "Henderson",
  "Summerlin",
  "Green Valley",
  "North Las Vegas",
  "Southern Highlands",
  "Skye Canyon",
  "Centennial Hills",
  "The Ridges",
  "Inspirada",
  "Mountains Edge",
  "Spring Valley",
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Meet Your Berkshire Hathaway HomeServices Agent
            </h1>
            <HeadingPhoto path="/about" />
            <p className="text-xl text-slate-600">
              Dr. Jan Duffy has been serving Las Vegas since 2008—backed by the most
              trusted name in real estate. Whether you're buying, selling, investing, or 
              relocating, you'll receive expert guidance with integrity and professionalism.
            </p>
            <div className="mt-8">
              <CtaActions variant="onLight" bookLabel="Book a Consultation" />
          <OfficeProximity path="/about" />
          <UniqueInterior path="/about" />
          <ExpertQuote path="/about" />

            </div>
          </div>

          {/* Agent Profile */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Dr. Jan Duffy</h2>
<p className="text-lg text-blue-600 mb-6">
                  REALTOR® | License S.0197614.LLC
                </p>

                <div className="prose prose-lg text-slate-700 mb-8 space-y-4">
                  <p>
                    When you choose to work with <strong>Berkshire Hathaway HomeServices</strong>,
                    you're choosing a legacy of trust, integrity, and excellence. I'm proud to
                    represent this iconic brand in the Las Vegas real estate market, bringing 
                    world-class resources and local expertise to every client I serve.
                  </p>
                  <p>
                    Since 2008, I've closed $127 million in transactions and
                    helped hundreds of buyers and sellers find the right home in Las Vegas, Henderson,
                    Summerlin, and throughout Southern Nevada. My expertise spans luxury properties,
                    new construction, investment real estate, 55+ active adult communities, and 
                    relocations—particularly for California buyers seeking Nevada's tax advantages.
                  </p>
                  <p>
                    What sets <strong>Berkshire Hathaway HomeServices Nevada Properties</strong>{" "}
                    apart? We're backed by Warren Buffett's Berkshire Hathaway Inc.—a name synonymous
                    with financial strength and ethical standards. When you're making the biggest
                    financial decision of your life, that trust matters. You deserve an agent who 
                    puts your interests first, provides honest advice, and has the resources to 
                    deliver exceptional results.
                  </p>
                  <p>
                    Files start at Suite 100. Square-footage tours, listing APNs, 55+ occupancy
                    packets, and California inbound nets get the same dated CMA. Real estate is a
                    walkthrough and a number, not a caption.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="bg-slate-50 rounded-lg p-6 mb-8">
                  <h3 className="font-bold text-slate-900 mb-4">Contact Dr. Jan Duffy</h3>
<div className="space-y-3">
                    <a
                      href="tel:+17022221964"
                      className="flex items-center text-slate-700 hover:text-blue-600"
                    >
                      <Phone className="h-5 w-5 mr-3 text-blue-600" />
                      <span className="font-semibold">(702) 222-1964</span>
                    </a>
                    <a
                      href="mailto:homes@heyberkshire.com"
                      className="flex items-center text-slate-700 hover:text-blue-600"
                    >
                      <Mail className="h-5 w-5 mr-3 text-blue-600" />
                      Homes@HeyBerkshire.com
                    </a>
                    <div className="flex items-start text-slate-700">
                      <MapPin className="h-5 w-5 mr-3 text-blue-600 mt-0.5" />
                      <address className="not-italic">
                        9406 W Lake Mead Blvd, Suite 100<br />
                        Las Vegas, NV 89134
                      </address>
                    </div>
                    <div className="flex items-center text-slate-700">
                      <Clock className="h-5 w-5 mr-3 text-blue-600" />
                      Mon-Fri 9am-6pm, Sat 10am-4pm, Sun by appointment
                    </div>
                  </div>
                  <div className="rounded-lg overflow-hidden mt-6 border border-slate-200">
                    <iframe
                      title="Map to Berkshire Hathaway HomeServices Nevada Properties, 9406 W Lake Mead Blvd"
                      src={maps.embedSrc}
                      className="w-full h-56"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <a
                      href={maps.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700"
                    >
                      Get Directions
                    </a>
                    <a
                      href={googleReviewsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 rounded-md border border-slate-300 text-slate-900 font-semibold hover:bg-slate-50"
                    >
                      View Google Reviews
                    </a>
                  </div>
                </div>

              </div>

              {/* Stats & Credentials */}
              <div className="space-y-6">
                <div className="relative rounded-lg overflow-hidden aspect-square">
                  <Image
                    src={mediaUrl(photos.agent.src)}
                    alt={photos.agent.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                  />
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">Since 2008</div>
                    <div className="text-sm text-slate-600">Serving Las Vegas</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">$127M+</div>
                    <div className="text-sm text-slate-600">Volume Closed</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
                    <div className="text-sm text-slate-600">Transactions</div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">4.9★</div>
                    <div className="text-sm text-slate-600">Client Rating</div>
                  </div>
                </div>

                {/* Quick Services */}
                <div className="bg-white border border-slate-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Quick Links</h3>
                  <div className="space-y-2">
                    <Link href="/buyers" className="flex items-center text-slate-700 hover:text-blue-600">
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                      Home Buying Guide
                    </Link>
                    <Link href="/sellers" className="flex items-center text-slate-700 hover:text-blue-600">
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                      Selling Your Home
                    </Link>
                    <Link href="/home-valuation" className="flex items-center text-slate-700 hover:text-blue-600">
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                      Free Home Valuation
                    </Link>
                    <a href="http://drjanduffy.realscout.com/" target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-700 hover:text-blue-600">
                      <ArrowRight className="h-4 w-4 mr-2 text-blue-600" />
                      Browse Listings
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <LeftoverBand path="/about" />

          <LeftoverBand path="/about" slot={1} />

          {/* Why BHHS Section */}
          <section className="mb-16 bg-slate-900 text-white rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
            <h2 className="scroll-mt-32 text-3xl md:text-4xl font-bold mb-4 text-center">
              License S.0197614.LLC on the card at 9406 W Lake Mead Blvd
            </h2>
            <p className="text-slate-300 text-center max-w-3xl mx-auto mb-8">
              Berkshire Hathaway HomeServices Nevada Properties holds the desk. Appointments start
              at Suite 100. Call or text (702) 222-1964. The office line on Google is (702) 500-1942.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">BHHS Nevada Properties on the paperwork</h3>
                <p className="text-slate-300 text-sm">
                  The brokerage on the contract is Berkshire Hathaway HomeServices Nevada Properties,
                  not a slogan. Suite 100 is the Maps pin.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">West Coast sale timed against a Las Vegas purchase</h3>
                <p className="text-slate-300 text-sm">
                  50,000+ BHHS agents for a California listing referral paired with a Suite 100 buyer file.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-xl mb-2">No-pressure consult, then a dated tour block</h3>
                <p className="text-slate-300 text-sm">
                  We review HOA packets and commute minutes at the desk before we drive. Call (702) 222-1964.
                </p>
              </div>
            </div>
            <div className="text-center">
              <Link
                href="/why-berkshire-hathaway"
                className="inline-block bg-white text-slate-900 px-8 py-3 rounded-md font-semibold hover:bg-slate-100 transition-colors"
              >
                Learn More About BHHS
              </Link>
            </div>
          </section>

          {/* Areas Served */}
          <section className="mb-16 max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              The Ridges, Summerlin, Henderson, NLV — commute minutes from Suite 100
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Files start at 9406 W Lake Mead Blvd, Suite 100. Summerlin is 10–15 minutes.
              The Ridges gate is 15–20. Henderson is 25–35 via I-215 east. North Las Vegas
              new construction is a separate afternoon. Call (702) 222-1964.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {areasServed.map((area) => (
                <div key={area} className="bg-slate-50 rounded-lg p-4 text-center hover:bg-blue-50 transition-colors">
                  <Home className="h-5 w-5 mx-auto mb-2 text-blue-600" />
                  <span className="text-slate-700 font-medium">{area}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                href="/neighborhoods"
                className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center"
              >
                Explore All Neighborhoods <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </section>

          {/* Client Testimonials */}
          <section className="mb-16 max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Dated files and Google Reviews — 4.9 on the Suite 100 pin
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              With a 4.9-star rating and hundreds of satisfied clients, Dr. Jan has built a 
              reputation for excellence, integrity, and personalized service.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                <p className="text-slate-600 italic mb-3">
                  "Dr. Jan made our California to Las Vegas relocation seamless. She understood 
                  exactly what we were looking for and found us the perfect home in Summerlin. 
                  Her knowledge of the market is exceptional."
                </p>
                <p className="text-slate-900 font-semibold">— Michael & Sarah T., Summerlin</p>
              </div>
              <div className="bg-white border border-slate-200 rounded-lg p-6">
                <div className="flex items-center mb-3">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                  <Star className="h-5 w-5 text-yellow-400" />
                </div>
                <p className="text-slate-600 italic mb-3">
                  "As first-time home buyers, we were nervous about the process. Dr. Jan walked 
                  us through every step, explained everything clearly, and helped us get a great 
                  deal. Highly recommend!"
                </p>
                <p className="text-slate-900 font-semibold">— Jennifer & David K., Henderson</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="text-center bg-blue-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Suite 100 — license S.0197614.LLC is on the card</h2>
            <p className="text-xl text-blue-100 mb-8">
              Questions about buying or selling in Las Vegas? Call or text Dr. Jan Duffy today 
              for a free consultation. Whether you're ready to start your search or just exploring 
              options, she's here to help.
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
