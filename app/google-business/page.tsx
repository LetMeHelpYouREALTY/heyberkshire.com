import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Award,
} from "lucide-react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CtaActions from "@/components/sections/CtaActions";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import SupportFaqs from "@/components/sections/SupportFaqs";
import ExpertQuote from "@/components/sections/ExpertQuote";
import LeftoverBand from "@/components/sections/LeftoverBand";
import { leftoverPhotoForPath } from "@/lib/media";
import {
  ctaPhone,
  officePhone,
  nap,
  maps,
  googleReviewsUrl,
  hoursSummary,
  businessHours,
} from "@/lib/contact";

import {
  businessInfo,
  generateLocalBusinessSchema,
} from "@/lib/gbp-schema";

export const metadata: Metadata = pageMetadata({
  path: "/google-business",
  title: "Dr. Jan Duffy, REALTOR® Las Vegas | Berkshire Hathaway HomeServices",
  description:
    "Dr. Jan Duffy is a trusted Las Vegas REALTOR® with Berkshire Hathaway HomeServices Nevada Properties. Specializing in Summerlin, Henderson, 55+ communities, California relocation, and luxury homes. Call (702) 222-1964.",
  keywords: [
    "Dr. Jan Duffy realtor",
    "Las Vegas real estate agent",
    "Berkshire Hathaway HomeServices Las Vegas",
    "Summerlin realtor",
    "Henderson real estate agent",
    "55+ communities Las Vegas",
    "California relocation Las Vegas",
  ],
  openGraph: {
    title: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
    description:
      "Trusted Las Vegas REALTOR® serving since 2008. Summerlin, Henderson, luxury homes, 55+ communities.",
    url: "https://heyberkshire.com/google-business",
    type: "profile",
  },
});

export default function GoogleBusinessPage() {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <main id="main-content" className="pb-16">
        <div className="container mx-auto px-4">
          <section className="max-w-5xl mx-auto mb-16">
            <div className="bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-2xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="h-6 w-6 text-yellow-400" aria-hidden="true" />
                    <span className="text-yellow-400 font-semibold">
                      Berkshire Hathaway HomeServices
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">Dr. Jan Duffy</h1>
            <HeadingPhoto path="/google-business" />

                  <p className="text-xl text-blue-200 mb-2">
                    REALTOR® | License {businessInfo.license}
                  </p>
                  <p className="text-slate-300 mb-6">Nevada Properties</p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="font-medium">{nap.street}</p>
                        <p>
                          {nap.city}, {nap.state} {nap.zip}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <p className="text-xs uppercase tracking-wide text-blue-300">Call / text</p>
                        <a href={ctaPhone.href} className="font-medium hover:text-blue-300">
                          {ctaPhone.display}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="h-5 w-5 text-blue-400 flex-shrink-0 mt-1" aria-hidden="true" />
                      <div>
                        <p className="text-xs uppercase tracking-wide text-blue-300">
                          Office (matches Google Business)
                        </p>
                        <a href={officePhone.href} className="font-medium hover:text-blue-300">
                          {officePhone.display}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" aria-hidden="true" />
                      <a href={`mailto:${nap.email}`} className="hover:text-blue-300">
                        {nap.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="text-center bg-white/10 rounded-xl p-8">
                  <div className="flex justify-center mb-4" aria-hidden="true">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-3xl font-bold mb-2">4.9 / 5.0</p>
                  <p className="text-blue-200 mb-6">200+ Client Reviews</p>
                  <CtaActions variant="onDark" />
                </div>
              </div>
            </div>
          </section>
          <OfficeProximity path="/google-business" />
          <UniqueInterior path="/google-business" />
          <ExpertQuote path="/google-business" />

          <section
            className="max-w-5xl mx-auto mb-16"
            data-leftover-band="/google-business#2"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Mon–Fri 9am–6pm, Sat 10am–4pm at Suite 100 — Sunday by appointment
            </h2>
            <HeadingPhoto
              path="/google-business"
              level="h2"
              photo={leftoverPhotoForPath("/google-business", 2)}
              priority
            />
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-6">
              Hours on this URL must match Google Business. Walk-ins welcome during posted hours.
              Call (702) 222-1964. Office/GBP (702) 500-1942. 9406 W Lake Mead Blvd, Suite 100,
              Las Vegas, NV 89134.
            </p>
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-blue-600" aria-hidden="true" />
                <p className="text-sm font-semibold text-slate-900">Posted hours grid</p>
              </div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                {businessHours.map((row) => (
                  <div key={row.day}>
                    <span className="font-medium">{row.day}:</span> {row.label}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            className="max-w-5xl mx-auto mb-16"
            data-leftover-band="/google-business#3"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Maps pin at 9406 W Lake Mead Blvd — Directions and Google Reviews on this URL
            </h2>
            <HeadingPhoto
              path="/google-business"
              level="h2"
              photo={leftoverPhotoForPath("/google-business", 3)}
              priority
            />
            <p className="text-slate-600 text-center max-w-3xl mx-auto mb-6">
              The embed, Get Directions, and View Google Reviews buttons are the GBP actions. Call
              or text (702) 222-1964. License S.0197614.LLC. Berkshire Hathaway HomeServices Nevada
              Properties.
            </p>
<div className="rounded-xl overflow-hidden border border-slate-200 mb-6">
              <iframe
                title="Map to Berkshire Hathaway HomeServices Nevada Properties, 9406 W Lake Mead Blvd"
                src={maps.embedSrc}
                className="w-full h-72"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700"
              >
                Get Directions
              </a>
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-md border border-slate-300 text-slate-900 font-semibold hover:bg-slate-50"
              >
                View Google Reviews
              </a>
              <a
                href={ctaPhone.href}
                className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-md border border-blue-600 text-blue-700 font-semibold hover:bg-blue-50"
              >
                Call {ctaPhone.display}
              </a>
            </div>
            <p className="text-center text-sm text-slate-500 mt-4">{nap.fullAddress}</p>
          </section>

          <LeftoverBand path="/google-business" slot={1} />

          <LeftoverBand path="/google-business" />

          <SupportFaqs path="/google-business" />

          <section className="max-w-4xl mx-auto mb-16">
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-xl p-8 text-center">
              <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" aria-hidden="true" />
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Write the GBP review on this URL — Maps ranking uses the Suite 100 pin
              </h2>
              <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
                If Dr. Jan helped you buy or sell a home, please consider sharing your experience.
                Mention your neighborhood, type of transaction, and what made the experience valuable.
              </p>
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Leave a Google Review
              </a>
            </div>
          </section>

          <section className="max-w-4xl mx-auto">
            <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">The Maps pin is 9406 W Lake Mead Blvd, Suite 100 — start there</h2>
              <p className="text-xl text-slate-300 mb-8">
                Contact Dr. Jan Duffy for a free consultation about buying or selling in Las Vegas.
              </p>
              <CtaActions variant="onDark" />
            </div>
          </section>
        </div>
        <div className="text-center text-sm text-slate-500 mt-8">Last Updated: January 2026</div>
      </main>
    </>
  );
}
