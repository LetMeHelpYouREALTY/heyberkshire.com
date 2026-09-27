"use client";

import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { ctaPhone } from "@/lib/contact";

export default function MobileStickyCTA() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-sm px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
      <div className="flex gap-2">
        <a
          href={ctaPhone.href}
          className="flex-1 inline-flex items-center justify-center min-h-[44px] rounded-md bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700"
        >
          <Phone className="h-4 w-4 mr-2" aria-hidden="true" />
          Call {ctaPhone.display}
        </a>
        <Link
          href="/contact"
          className="flex-1 inline-flex items-center justify-center min-h-[44px] rounded-md border border-slate-300 text-slate-900 font-semibold text-sm hover:bg-slate-50"
        >
          <Mail className="h-4 w-4 mr-2" aria-hidden="true" />
          Message
        </Link>
      </div>
    </div>
  );
}
