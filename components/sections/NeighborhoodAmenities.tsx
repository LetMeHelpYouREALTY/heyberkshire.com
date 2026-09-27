import HeadingPhoto from "@/components/sections/HeadingPhoto";
import { ctaPhone, nap } from "@/lib/contact";
import { amenityPhotoForPath } from "@/lib/media";
import { neighborhoodAmenities } from "@/lib/neighborhood-amenities";

type NeighborhoodAmenitiesProps = {
  path: string;
};

export default function NeighborhoodAmenities({
  path,
}: NeighborhoodAmenitiesProps) {
  const copy = neighborhoodAmenities[path];
  if (!copy) return null;

  return (
    <div className="not-prose mt-12 mb-6" data-neighborhood-amenities={path}>
      <h3 className="text-2xl font-bold text-slate-900 mb-6">{copy.h3}</h3>
      <HeadingPhoto
        path={path}
        level="h3"
        photo={amenityPhotoForPath(path)}
        priority
      />
      <p className="text-slate-700 mb-4">{copy.body}</p>
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <ul className="text-slate-600 text-sm space-y-3 mb-4">
          {copy.pins.map((pin) => (
            <li key={pin.name}>
              <strong>{pin.name}</strong>
              {` — ${pin.note}`}
            </li>
          ))}
        </ul>
        <p className="text-slate-600 text-sm">
          {nap.brokerage} · {nap.fullAddress} · Call or text {ctaPhone.display}.
        </p>
      </div>
    </div>
  );
}
