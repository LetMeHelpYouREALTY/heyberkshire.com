"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import MlsDisclaimer from "@/components/shared/MlsDisclaimer";
import { realscout } from "@/lib/contact";

export default function RealScoutListings() {
  return (
    <section className="py-16 md:py-24 bg-slate-50" aria-labelledby="featured-properties-heading">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h2
              id="featured-properties-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
            >
              Featured Las Vegas Homes
            </h2>
            <p className="text-slate-600 text-lg">
              Live MLS listings in Las Vegas, Henderson, and Summerlin
            </p>
          </div>
          <Button asChild variant="outline" className="mt-2 md:mt-0">
            <Link href="/listings">View All Properties</Link>
          </Button>
        </div>

        <div
          dangerouslySetInnerHTML={{
            __html: `<realscout-office-listings 
              agent-encoded-id="${realscout.agentEncodedId}" 
              sort-order="NEWEST" 
              listing-status="For Sale" 
              property-types=",SFR,MF,TC" 
              price-min="300000" 
              price-max="2500000"
            ></realscout-office-listings>`,
          }}
        />
        <MlsDisclaimer className="mt-6" />
      </div>
    </section>
  );
}
