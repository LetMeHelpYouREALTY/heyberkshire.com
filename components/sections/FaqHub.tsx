import CtaActions from "@/components/sections/CtaActions";
import FaqAccordion from "@/components/sections/FaqAccordion";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import { ctaPhone, nap } from "@/lib/contact";
import { faqHubPhotoForCategory } from "@/lib/media";
import { faqHubCategories } from "@/lib/faq-hub";

export default function FaqHub() {
  return (
    <div className="max-w-4xl mx-auto space-y-12" data-faq-hub="/faq">
      {faqHubCategories.map((category) => (
        <section key={category.id} data-faq-hub-category={category.id}>
          <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-2 border-b border-slate-200">
            {category.h2}
          </h2>
          <HeadingPhoto
            path="/faq"
            level="h2"
            photo={faqHubPhotoForCategory(category.id)}
          />
          <FaqAccordion items={category.items} />
        </section>
      ))}
      <p className="text-sm text-slate-600 mt-8 mb-6 text-center">
        {nap.brokerage} · {nap.fullAddress} · Call or text {ctaPhone.display}.
      </p>
      <CtaActions variant="onLight" />
    </div>
  );
}
