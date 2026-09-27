import CtaActions from "@/components/sections/CtaActions";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import { ctaPhone, nap } from "@/lib/contact";
import { leftoverBands } from "@/lib/leftover-bands";
import { leftoverPhotoForPath } from "@/lib/media";

type LeftoverBandProps = {
  path: string;
  slot?: number;
};

export default function LeftoverBand({ path, slot = 0 }: LeftoverBandProps) {
  const copy = leftoverBands[path]?.[slot];
  if (!copy) return null;

  return (
    <section
      className="mb-16 max-w-5xl mx-auto scroll-mt-32"
      data-leftover-band={`${path}#${slot}`}
    >
      <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center scroll-mt-32">
        {copy.h2}
      </h2>
      <HeadingPhoto
        path={path}
        level="h2"
        photo={leftoverPhotoForPath(path, slot)}
        priority
      />
      <p className="text-slate-600 text-center max-w-3xl mx-auto mb-8">{copy.body}</p>
      <div className="grid md:grid-cols-2 gap-4">
        {copy.pins.map((pin) => (
          <div key={pin.name} className="bg-white border border-slate-200 rounded-xl p-5">
            <h3 className="font-bold text-slate-900 mb-2">{pin.name}</h3>
            <p className="text-slate-600 text-sm">{pin.note}</p>
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
