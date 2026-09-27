import CtaActions from "@/components/sections/CtaActions";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import { ctaPhone, nap } from "@/lib/contact";
import { processPhotoForPath } from "@/lib/media";
import { processSteps } from "@/lib/process-steps";

type ProcessStepsProps = {
  path: string;
  slot?: number;
};

export default function ProcessSteps({ path, slot = 0 }: ProcessStepsProps) {
  const copy = processSteps[path]?.[slot];
  if (!copy) return null;

  return (
    <section
      className="mb-16 max-w-5xl mx-auto scroll-mt-32"
      data-process-steps={`${path}#${slot}`}
    >
      <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center scroll-mt-32">
        {copy.h2}
      </h2>
      <HeadingPhoto
        path={path}
        level="h2"
        photo={processPhotoForPath(path, slot)}
        priority
      />
      <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">{copy.body}</p>
      <div className="space-y-6">
        {copy.steps.map((step, index) => (
          <div
            key={step.title}
            className="flex gap-6 items-start bg-white border border-slate-200 rounded-lg p-6"
          >
            <div className="flex-shrink-0">
              <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full inline-flex min-w-[4.5rem] justify-center">
                Step {index + 1}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600">{step.body}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-sm text-slate-600 mt-6 mb-6 text-center">
        {nap.brokerage} · {nap.fullAddress} · Call or text {ctaPhone.display}.
      </p>
      <CtaActions variant="onLight" />
    </section>
  );
}
