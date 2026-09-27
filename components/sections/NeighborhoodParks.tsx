import HeadingPhoto from "@/components/sections/HeadingPhoto";
import { ctaPhone, nap } from "@/lib/contact";
import { parkPhotoForPath } from "@/lib/media";
import { neighborhoodParks } from "@/lib/neighborhood-parks";

type NeighborhoodParksProps = {
  path: string;
};

export default function NeighborhoodParks({ path }: NeighborhoodParksProps) {
  const copy = neighborhoodParks[path];
  if (!copy) return null;

  return (
    <div className="not-prose mt-12 mb-6" data-neighborhood-parks={path}>
      <h3 className="scroll-mt-32 text-2xl font-bold text-slate-900 mb-6">
        {copy.h3}
      </h3>
      <HeadingPhoto
        path={path}
        level="h3"
        photo={parkPhotoForPath(path)}
        priority
      />
      <p className="text-slate-700 mb-4">{copy.body}</p>
      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
        <ul className="grid md:grid-cols-2 gap-4 text-slate-600 text-sm">
          {copy.pins.map((pin) => (
            <li key={pin.name}>
              <strong>{pin.name}:</strong>
              {` ${pin.note}`}
            </li>
          ))}
        </ul>
        <p className="text-slate-600 text-sm mt-4">
          {nap.brokerage} · {nap.fullAddress} · Call or text {ctaPhone.display}.
        </p>
      </div>
    </div>
  );
}
