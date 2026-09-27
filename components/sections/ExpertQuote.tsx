import CtaActions from "@/components/sections/CtaActions";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import { ctaPhone, nap } from "@/lib/contact";
import { expertQuotes } from "@/lib/expert-quotes";
import { quotePhotoForPath } from "@/lib/media";

type ExpertQuoteProps = {
  path: string;
};

export default function ExpertQuote({ path }: ExpertQuoteProps) {
  const copy = expertQuotes[path];
  if (!copy) return null;

  return (
    <section
      className="mb-16 max-w-4xl mx-auto scroll-mt-32"
      data-expert-quote={path}
    >
      <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center scroll-mt-32">
        {copy.h2}
      </h2>
      <HeadingPhoto
        path={path}
        level="h2"
        photo={quotePhotoForPath(path)}
        priority
      />
      <blockquote className="bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-8 mb-6">
        <p className="text-lg text-slate-700 mb-4">“{copy.quote}”</p>
        <cite className="text-slate-900 font-semibold not-italic">
          — Dr. Jan Duffy, {nap.brokerage}
        </cite>
      </blockquote>
      <p className="text-sm text-slate-600 mb-6 text-center">
        {nap.brokerage} · {nap.fullAddress} · Call or text {ctaPhone.display}.
      </p>
      <CtaActions variant="onLight" />
    </section>
  );
}
