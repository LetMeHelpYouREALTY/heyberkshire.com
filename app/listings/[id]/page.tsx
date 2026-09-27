import Link from "next/link";
import Image from "next/image";
import { Bed, Bath, Square, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";
import RealScoutListings from "@/components/realscout/RealScoutListings";
import MlsDisclaimer from "@/components/shared/MlsDisclaimer";
import CtaActions from "@/components/sections/CtaActions";
import OfficeProximity from "@/components/sections/OfficeProximity";
import UniqueInterior from "@/components/sections/UniqueInterior";
import { ctaPhone, nap } from "@/lib/contact";
import { pageMetadata } from "@/lib/seo";
import { mediaUrl, photos } from "@/lib/media";

type PropertyPageProps = {
  params: { id: string };
};

export function generateMetadata({ params }: PropertyPageProps): Metadata {
  return {
    ...pageMetadata({
      title: `MLS Listing ${params.id} | Las Vegas Homes | Dr. Jan Duffy`,
      description:
        "View this Las Vegas MLS listing with Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. Call (702) 222-1964 to schedule a showing.",
      path: `/listings/${params.id}`,
    }),
    robots: { index: false, follow: true },
  };
}

export default function PropertyPage({ params }: PropertyPageProps) {
  return (
    <main id="main-content" className="pb-16">
      <div className="container mx-auto px-4">
<div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Schedule a Showing for This Las Vegas Listing
            </h1>
            <p className="text-slate-700 mb-6">
              Live MLS details for listing reference <span className="font-semibold">{params.id}</span>{" "}
              are shown through RealScout. Tours start from {nap.fullAddress} unless we meet at the
              property. Dr. Jan Duffy can pull the listing packet, comps, and a private showing time.
            </p>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-6">
              <Image
                src={mediaUrl(photos.homeHero.src)}
                alt={photos.homeHero.alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
            <ul className="grid grid-cols-2 gap-4 mb-6 text-slate-700">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-600 mr-2" aria-hidden="true" />
                Las Vegas, Henderson &amp; Summerlin
              </li>
              <li className="flex items-center">
                <Bed className="h-5 w-5 text-blue-600 mr-2" aria-hidden="true" />
                Filter by beds on live MLS
              </li>
              <li className="flex items-center">
                <Bath className="h-5 w-5 text-blue-600 mr-2" aria-hidden="true" />
                Filter by baths on live MLS
              </li>
              <li className="flex items-center">
                <Square className="h-5 w-5 text-blue-600 mr-2" aria-hidden="true" />
                Square footage on each listing
              </li>
            </ul>
            <MlsDisclaimer />
            <div className="mt-8">
              <CtaActions variant="onLight" />
          <OfficeProximity path="/listings" />
          <UniqueInterior path="/listings" listingId={params.id} />

            </div>
          </div>
          <aside className="md:col-span-1">
            <div className="bg-white border border-slate-200 rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-bold text-slate-900 mb-2">Dr. Jan Duffy</h2>
              <p className="text-sm text-slate-600 mb-4">{nap.brokerage}</p>
              <p className="text-sm text-slate-600 mb-6">{nap.fullAddress}</p>
              <div className="space-y-3">
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <a href={ctaPhone.href}>
                    <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
                    Call {ctaPhone.display}
                  </a>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">Send a Message</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact#schedule">Book a Showing</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/listings">Browse Live MLS</Link>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <RealScoutListings />
    </main>
  );
}
