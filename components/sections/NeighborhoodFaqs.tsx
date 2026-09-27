import CtaActions from "@/components/sections/CtaActions";
import FaqAccordion from "@/components/sections/FaqAccordion";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import SchemaScript from "@/components/SchemaScript";
import { ctaPhone, nap } from "@/lib/contact";
import { faqPhotoForPath } from "@/lib/media";
import { neighborhoodFaqs } from "@/lib/neighborhood-faqs";
import { generateFAQSchema } from "@/lib/schema";

type NeighborhoodFaqsProps = {
  path: string;
};

export default function NeighborhoodFaqs({ path }: NeighborhoodFaqsProps) {
  const copy = neighborhoodFaqs[path];
  if (!copy) return null;

  const schema = generateFAQSchema(
    copy.items.map((item) => ({ question: item.q, answer: item.a }))
  );

  return (
    <section
      className="mb-16 max-w-4xl mx-auto"
      data-neighborhood-faqs={path}
    >
      <SchemaScript schema={schema} id={`faq-schema-${path.replace(/\W+/g, "-")}`} />
      <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
        {copy.h2}
      </h2>
      <HeadingPhoto
        path={path}
        level="h2"
        photo={faqPhotoForPath(path)}
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
