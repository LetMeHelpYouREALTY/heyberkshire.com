"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ctaPhone } from "@/lib/contact";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main id="main-content" className="pb-16 min-h-[70vh] flex items-center">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Something Went Wrong</h1>
        <p className="text-slate-600 mb-8">
          Refresh the page, or call Dr. Jan Duffy at {ctaPhone.display} and we will help you
          directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center border border-slate-300 text-slate-800 px-6 py-3 rounded-md font-semibold hover:bg-slate-50"
          >
            Back to Home
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
