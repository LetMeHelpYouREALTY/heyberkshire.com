import HeadingPhoto from "@/components/sections/HeadingPhoto";
import CtaActions from "@/components/sections/CtaActions";
import { ctaPhone, nap } from "@/lib/contact";
import { fiftyFiveAmenityPhotoForPath } from "@/lib/media";
import { fiftyFiveAmenities } from "@/lib/fifty-five-amenities";

type FiftyFiveAmenitiesProps = {
  path: string;
};

export default function FiftyFiveAmenities({ path }: FiftyFiveAmenitiesProps) {
  const copy = fiftyFiveAmenities[path];
  if (!copy) return null;

  return (
    <section className="mb-16 max-w-5xl mx-auto" data-fifty-five-amenities={path}>
      <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
        {copy.h2}
      </h2>
      <HeadingPhoto
        path={path}
        level="h2"
        photo={fiftyFiveAmenityPhotoForPath(path)}
        priority
      />
      <p className="text-slate-700 mb-6 text-center max-w-3xl mx-auto">
        {copy.body}
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {copy.pins.map((pin) => (
          <div
            key={pin.name}
            className="bg-white border border-slate-200 rounded-xl p-6"
          >
            <h3 className="font-bold text-slate-900 mb-2">{pin.name}</h3>
            <p className="text-slate-600 text-sm">{pin.note}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-slate-600 mt-8 mb-6 text-center">
        {nap.brokerage} · {nap.fullAddress} · Call or text {ctaPhone.display}.
      </p>
      <CtaActions variant="onLight" />
    </section>
  );
}
