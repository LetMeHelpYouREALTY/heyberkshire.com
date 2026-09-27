import { Phone, Navigation, Star, Clock } from "lucide-react";
import {
  ctaPhone,
  nap,
  hoursSummary,
  maps,
  googleReviewsUrl,
} from "@/lib/contact";

export default function LocalTrustBar() {
  return (
    <div className="hidden md:block bg-slate-900 text-slate-100 text-xs border-t border-slate-800">
      <div className="container mx-auto px-4 py-1.5 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <p className="min-w-0 truncate">
          <span className="font-semibold">{nap.shortName}</span>
          <span className="text-slate-400"> · {nap.brokerage} · </span>
          <span>{nap.fullAddress}</span>
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 shrink-0">
          <span className="inline-flex items-center text-slate-300">
            <Clock className="h-3.5 w-3.5 mr-1" aria-hidden="true" />
            {hoursSummary}
          </span>
          <a
            href={ctaPhone.href}
            className="inline-flex items-center font-semibold text-white hover:text-blue-200"
          >
            <Phone className="h-3.5 w-3.5 mr-1" aria-hidden="true" />
            Call {ctaPhone.display}
          </a>
          <a
            href={maps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center hover:text-blue-200"
          >
            <Navigation className="h-3.5 w-3.5 mr-1" aria-hidden="true" />
            Directions
          </a>
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center hover:text-blue-200"
          >
            <Star className="h-3.5 w-3.5 mr-1" aria-hidden="true" />
            Google Reviews
          </a>
        </div>
      </div>
    </div>
  );
}
