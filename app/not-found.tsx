import Link from "next/link";
import { ctaPhone } from "@/lib/contact";

export default function NotFound() {
  return (
    <main id="main-content" className="pb-16 min-h-[70vh] flex items-center">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <p className="text-blue-600 font-semibold mb-3">404</p>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Page Not Found</h1>
        <p className="text-slate-600 mb-8">
          That URL is not on heyberkshire.com. Search live listings or call Dr. Jan Duffy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/listings"
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold"
          >
            Search Las Vegas Homes
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border border-slate-300 text-slate-800 px-6 py-3 rounded-md font-semibold hover:bg-slate-50"
          >
            Contact Dr. Jan
          </Link>
          <a
            href={ctaPhone.href}
            className="inline-flex items-center justify-center border border-slate-300 text-slate-800 px-6 py-3 rounded-md font-semibold hover:bg-slate-50"
          >
            Call {ctaPhone.display}
          </a>
        </div>
      </div>
    </main>
  );
}
