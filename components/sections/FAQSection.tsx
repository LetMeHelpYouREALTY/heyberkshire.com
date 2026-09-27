import FaqAccordion from "@/components/sections/FaqAccordion";

export interface FAQ {
  question: string;
  answer: string;
}

export const defaultFaqs: FAQ[] = [
  {
    question: "What areas do you serve?",
    answer:
      "Dr. Jan Duffy specializes in Las Vegas and Henderson, Nevada, including Summerlin, Green Valley, and surrounding communities. Coverage includes residential, luxury, and investment properties throughout Southern Nevada.",
  },
  {
    question: "How long does the home buying process take?",
    answer:
      "Typically, the home buying process takes 30-45 days from offer acceptance to closing. Cash purchases can close in as little as 7-14 days. Dr. Jan Duffy will walk you through each step.",
  },
  {
    question: "Do you help with home valuations?",
    answer:
      "Yes. You get a free, no-obligation home valuation using current MLS data and comparable sales. Call or text (702) 222-1964 to schedule.",
  },
  {
    question: "What makes you different from other real estate agents?",
    answer:
      "Serving Las Vegas since 2008 with 500+ successful transactions, Dr. Jan Duffy combines local market knowledge with Berkshire Hathaway HomeServices resources and direct phone access.",
  },
  {
    question: "Can you help with investment properties?",
    answer:
      "Yes. Dr. Jan Duffy advises on rental properties, multi-family opportunities, and cap-rate analysis across the Las Vegas Valley.",
  },
  {
    question: "What are your fees?",
    answer:
      "For buyers, representation is typically paid by the seller. For sellers, commission is negotiable. Call (702) 222-1964 for a transparent walkthrough of costs before you sign.",
  },
];

interface FAQSectionProps {
  faqs?: FAQ[];
  title?: string;
  subtitle?: string;
  className?: string;
  includeSchema?: boolean;
}

export default function FAQSection({
  faqs = defaultFaqs,
  title = "Frequently Asked Questions",
  subtitle = "Get answers to common questions about Las Vegas real estate with Dr. Jan Duffy",
  className = "",
  includeSchema = true,
}: FAQSectionProps) {
  return (
    <section className={`py-16 md:py-24 bg-white ${className}`}>
      {includeSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            }),
          }}
        />
      )}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        <div className="max-w-3xl mx-auto">
          <FaqAccordion items={faqs} />
        </div>
      </div>
    </section>
  );
}

export function getFAQSchemaData(faqs: FAQ[]) {
  return faqs.map((faq) => ({
    question: faq.question,
    answer: faq.answer,
  }));
}
