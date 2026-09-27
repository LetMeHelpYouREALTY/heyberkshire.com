import Link from "next/link";
import { Phone, Mail, Calendar } from "lucide-react";
import { ctaPhone, nap } from "@/lib/contact";

type CtaActionsProps = {
  variant?: "onDark" | "onLight";
  bookLabel?: string;
};

export default function CtaActions({
  variant = "onDark",
  bookLabel = "Book a Showing",
}: CtaActionsProps) {
  const isDark = variant === "onDark";
  const callClass = isDark
    ? "bg-white text-blue-600 hover:bg-blue-50 focus-visible:ring-white focus-visible:ring-offset-blue-600"
    : "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600 focus-visible:ring-offset-white";
  const messageClass = isDark
    ? "bg-blue-700 hover:bg-blue-800 text-white focus-visible:ring-white focus-visible:ring-offset-blue-600"
    : "border border-slate-300 text-slate-900 hover:bg-slate-50 focus-visible:ring-blue-600 focus-visible:ring-offset-white";
  const bookClass = isDark
    ? "border-2 border-white text-white hover:bg-white/10 focus-visible:ring-white focus-visible:ring-offset-blue-600"
    : "border-2 border-blue-600 text-blue-700 hover:bg-blue-50 focus-visible:ring-blue-600 focus-visible:ring-offset-white";

  const napClass = isDark ? "text-white/75" : "text-slate-500";

  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href={ctaPhone.href}
          className={`inline-flex items-center justify-center px-8 py-4 rounded-md font-bold text-lg min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${callClass}`}
        >
          <Phone className="h-5 w-5 mr-2" aria-hidden="true" />
          Call {ctaPhone.display}
        </a>
        <Link
          href="/contact"
          className={`inline-flex items-center justify-center px-8 py-4 rounded-md font-bold text-lg min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${messageClass}`}
        >
          <Mail className="h-5 w-5 mr-2" aria-hidden="true" />
          Send a Message
        </Link>
        <Link
          href="/contact#schedule"
          className={`inline-flex items-center justify-center px-8 py-4 rounded-md font-bold text-lg min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${bookClass}`}
        >
          <Calendar className="h-5 w-5 mr-2" aria-hidden="true" />
          {bookLabel}
        </Link>
      </div>
      <p className={`mt-6 text-center text-sm ${napClass}`}>
        {nap.brokerage} · {nap.fullAddress} · Call {ctaPhone.display}
      </p>
    </div>
  );
}
