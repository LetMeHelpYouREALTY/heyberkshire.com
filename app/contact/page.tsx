import RealScoutListings from "@/components/realscout/RealScoutListings";
import { Phone, Mail, MapPin, Clock, Calendar, Star } from "lucide-react";
import CalendlyWidget from "@/components/calendly/CalendlyWidget";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CtaActions from "@/components/sections/CtaActions";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import SupportFaqs from "@/components/sections/SupportFaqs";
import ExpertQuote from "@/components/sections/ExpertQuote";
import ProcessSteps from "@/components/sections/ProcessSteps";
import LeftoverBand from "@/components/sections/LeftoverBand";

import { ctaPhone, officePhone, nap, maps, googleReviewsUrl, hoursSummary } from "@/lib/contact";

export const metadata: Metadata = pageMetadata({
  path: "/contact",
  title: "Contact Dr. Jan Duffy | Berkshire Hathaway HomeServices Las Vegas",
  description:
    "Contact Dr. Jan Duffy at Berkshire Hathaway HomeServices Nevada Properties. Schedule an appointment, get directions, or call (702) 222-1964. Las Vegas, Henderson, Summerlin real estate expert.",
  keywords: [
    "contact real estate agent Las Vegas",
    "Berkshire Hathaway contact",
    "Dr. Jan Duffy phone",
    "Las Vegas realtor contact",
    "schedule real estate appointment",
  ],
});

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  mainEntity: {
    "@type": "RealEstateAgent",
    name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
    telephone: "+17025001942",
    email: "homes@heyberkshire.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9406 W Lake Mead Blvd, Suite 100",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89134",
      addressCountry: "US",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Berkshire Hathaway HomeServices Nevada Properties
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              Contact Dr. Jan Duffy
            </h1>
            <HeadingPhoto path="/contact" />

            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Questions about Las Vegas real estate? Your{" "}
              <strong>Berkshire Hathaway HomeServices</strong> expert is here to help. 
              Schedule an appointment or reach out directly.
            </p>
            <CtaActions variant="onLight" bookLabel="Book a Consultation" />
          <OfficeProximity path="/contact" />
          <UniqueInterior path="/contact" />
          <ExpertQuote path="/contact" />

          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info & Map */}
            <div>
              <LeftoverBand path="/contact" />

              {/* NAP Information */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start bg-slate-50 rounded-lg p-4">
                  <Phone className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone (Call or Text)</h3>
                    <a
                      href={ctaPhone.href}
                      className="text-2xl font-bold text-blue-600 hover:text-blue-700"
                    >
                      {ctaPhone.display}
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Client line — Dr. Jan answers this number
                    </p>
                    <p className="text-sm text-slate-600 mt-2">
                      Office / Google Business:{" "}
                      <a href={officePhone.href} className="font-semibold text-blue-600 hover:text-blue-700">
                        {officePhone.display}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-slate-50 rounded-lg p-4">
                  <Mail className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <a
                      href="mailto:homes@heyberkshire.com"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Homes@HeyBerkshire.com
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Typically respond within 2 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start bg-slate-50 rounded-lg p-4">
                  <MapPin className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Office Address</h3>
                    <address className="not-italic text-slate-700">
                      Berkshire Hathaway HomeServices<br />
                      Nevada Properties<br />
                      9406 W Lake Mead Blvd, Suite 100<br />
                      Las Vegas, NV 89134
                    </address>
                  </div>
                </div>

                <div className="flex items-start bg-slate-50 rounded-lg p-4">
                  <Clock className="h-6 w-6 text-blue-600 mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Office Hours</h3>
                    <p className="text-slate-700">{hoursSummary}</p>
                    <p className="text-sm text-slate-500 mt-1">
                      Available by appointment outside posted hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="rounded-xl overflow-hidden shadow-md mb-4">
                <iframe
                  src={maps.embedSrc}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Berkshire Hathaway HomeServices Nevada Properties - Office Location"
                  className="w-full"
                />
              </div>
              
              {/* Map Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a
                  href={maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors min-h-[44px]"
                >
                  <MapPin className="h-4 w-4 mr-2" aria-hidden="true" />
                  Get Directions
                </a>
                <a
                  href={googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center bg-slate-100 hover:bg-slate-200 text-slate-700 px-4 py-3 rounded-lg font-medium transition-colors min-h-[44px]"
                >
                  <Star className="h-4 w-4 mr-2" aria-hidden="true" />
                  View Google Reviews
                </a>
              </div>

              {/* Credentials */}
              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-slate-700">
                  <strong>{nap.shortName}, REALTOR®</strong><br />
                  License {nap.license}<br />
                  {nap.brokerage}<br />
                  {nap.fullAddress}
                </p>
              </div>
            </div>

            {/* Schedule Appointment - Calendly Widget */}
            <div>
              <div id="schedule" className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                <div className="bg-blue-600 text-white p-6 text-center">
                  <Calendar className="h-10 w-10 mx-auto mb-3" />
                  <h2 className="text-2xl font-bold mb-2">Book Calendly for Suite 100, a phone consult, or a showing</h2>
                  <p className="text-blue-100">
                    Book a time that works for you—phone consultation, property showing, 
                    or in-person meeting at our office.
                  </p>
                </div>
                <CalendlyWidget height="600px" />
              </div>
            </div>
          </div>

          <ProcessSteps path="/contact" />

          {/* Service Areas Section */}
          <section className="max-w-5xl mx-auto mt-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              ZIPs we time from 9406 W Lake Mead Blvd
            </h2>
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">
              Summerlin is 10–15 minutes. Henderson and Green Valley are 25–35. Southern Highlands
              is 25–35 via I-15. Call (702) 222-1964. We will not tour twelve ZIPs in one afternoon.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
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
              ].map((area) => (
                <div key={area} className="bg-slate-50 rounded-lg p-3 text-center hover:bg-blue-50 transition-colors">
                  <span className="text-slate-700 font-medium text-sm">{area}</span>
                </div>
              ))}
            </div>
          </section>

          <LeftoverBand path="/contact" slot={1} />

          <SupportFaqs path="/contact" />
        </div>

        {/* Last Updated */}
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
      <RealScoutListings />
    </>
  );
}
