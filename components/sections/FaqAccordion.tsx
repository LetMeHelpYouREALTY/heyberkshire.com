type FaqItem = {
  q?: string;
  a?: string;
  question?: string;
  answer?: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
  className?: string;
};

export default function FaqAccordion({ items, className = "" }: FaqAccordionProps) {
  return (
    <div className={`space-y-4 ${className}`.trim()}>
      {items.map((faq) => {
        const question = faq.q ?? faq.question ?? "";
        const answer = faq.a ?? faq.answer ?? "";
        return (
          <details
            key={question}
            className="bg-white border border-slate-200 rounded-lg p-6 group"
          >
            <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4 min-h-[44px]">
              {question}
              <span
                className="text-slate-400 group-open:rotate-45 text-2xl leading-none"
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p className="text-slate-600 mt-3">{answer}</p>
          </details>
        );
      })}
    </div>
  );
}
