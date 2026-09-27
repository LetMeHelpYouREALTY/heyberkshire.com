import CtaActions from "@/components/sections/CtaActions";
import FaqAccordion from "@/components/sections/FaqAccordion";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import SchemaScript from "@/components/SchemaScript";
import { ctaPhone, nap } from "@/lib/contact";
import { buyerFaqPhotoForPath } from "@/lib/media";
import { buyerFaqs } from "@/lib/buyer-faqs";
import { generateFAQSchema } from "@/lib/schema";

type BuyerFaqsProps = {
  path: string;
};

export default function BuyerFaqs({ path }: BuyerFaqsProps) {
  const copy = buyerFaqs[path];
  if (!copy) return null;

  const schema = generateFAQSchema(
    copy.items.map((item) => ({ question: item.q, answer: item.a }))
  );

  return (
    <section className="mb-16 max-w-4xl mx-auto" data-buyer-faqs={path}>
      <SchemaScript
        schema={schema}
        id={`faq-schema-${path.replace(/\W+/g, "-")}`}
      />
      <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
        {copy.h2}
      </h2>
      <HeadingPhoto
        path={path}
        level="h2"
        photo={buyerFaqPhotoForPath(path)}
        priority
      />
      <FaqAccordion items={[...copy.items]} />
      <p className="text-sm text-slate-600 mt-8 mb-6 text-center">
        {nap.brokerage} · {nap.fullAddress} · Call or text {ctaPhone.display}.
      </p>
      <CtaActions variant="onLight" />
    </section>
  );
}
