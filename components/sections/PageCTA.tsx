import { Navigation, Star } from "lucide-react";
import { nap, maps, googleReviewsUrl } from "@/lib/contact";
import CtaActions from "@/components/sections/CtaActions";

type PageCTAProps = {
  headline?: string;
  subheadline?: string;
};

export default function PageCTA({
  headline = "Ready to Buy or Sell in Las Vegas?",
  subheadline = "Call or text Dr. Jan Duffy. She answers her own phone.",
}: PageCTAProps) {
  return (
    <section className="py-16 md:py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">{headline}</h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">{subheadline}</p>
        <CtaActions variant="onDark" />
        <p className="mt-6 text-blue-200 text-sm">
          {nap.shortName} | License {nap.license} | {nap.brokerage}
        </p>
        <p className="mt-2 text-blue-200 text-sm">{nap.fullAddress}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm">
          <a
            href={maps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-100 hover:text-white underline-offset-2 hover:underline"
          >
            <Navigation className="h-4 w-4 mr-1" aria-hidden="true" />
            Directions
          </a>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-100 hover:text-white underline-offset-2 hover:underline"
          >
            <Star className="h-4 w-4 mr-1" aria-hidden="true" />
            View Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
