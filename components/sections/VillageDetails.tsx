import HeadingPhoto from "@/components/sections/HeadingPhoto";
import { ctaPhone, nap } from "@/lib/contact";
import { villageDetailPhotoForPath } from "@/lib/media";
import { villageDetails } from "@/lib/village-details";

type VillageDetailsProps = {
  path: string;
  slot?: number;
};

export default function VillageDetails({ path, slot = 0 }: VillageDetailsProps) {
  const copy = villageDetails[path]?.[slot];
  if (!copy) return null;

  return (
    <div
      className="not-prose mt-12 mb-6"
      data-village-details={`${path}#${slot}`}
    >
      <h3 className="scroll-mt-32 text-2xl font-bold text-slate-900 mb-6">
        {copy.h3}
      </h3>
      <HeadingPhoto
        path={path}
        level="h3"
        photo={villageDetailPhotoForPath(path, slot)}
        priority
      />
      <p className="text-slate-700 mb-4">{copy.body}</p>
      <div className="grid md:grid-cols-2 gap-4">
        {copy.pins.map((pin) => (
          <div key={pin.name} className="bg-white border border-slate-200 rounded-xl p-5">
            <h4 className="font-bold text-slate-900 mb-2">{pin.name}</h4>
            <p className="text-slate-600 text-sm">{pin.note}</p>
          </div>
        ))}
      </div>
      <p className="text-slate-600 text-sm mt-4">
        {nap.brokerage} · {nap.fullAddress} · Call or text {ctaPhone.display}.
      </p>
    </div>
  );
}
