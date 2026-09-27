import CtaActions from "@/components/sections/CtaActions";
import HeadingPhoto from "@/components/sections/HeadingPhoto";
import { ctaPhone, nap } from "@/lib/contact";
import { uniqueInteriors } from "@/lib/unique-interiors";

type UniqueInteriorProps = {
  path: string;
  listingId?: string;
};

export default function UniqueInterior({
  path,
  listingId,
}: UniqueInteriorProps) {
  const copy = uniqueInteriors[path];
  if (!copy) return null;

  const h2 = listingId
    ? `Showing plan for MLS ${listingId} from ${nap.street}`
    : copy.h2;
  const body = listingId
    ? `Live MLS reference ${listingId} is routed from ${nap.fullAddress} unless we meet at the property. ${copy.body}`
    : copy.body;

  return (
    <section
      className="max-w-4xl mx-auto mb-16"
      data-unique-interior={listingId ? `${path}#${listingId}` : path}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
        {h2}
      </h2>
      <HeadingPhoto path={path} level="h2" />
      <p className="text-slate-700 mb-6">{body}</p>
      <ul className="list-disc pl-5 space-y-2 text-slate-700 mb-8">
        {copy.facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">
        {copy.h3}
      </h3>
      <HeadingPhoto path={path} level="h3" />
      <p className="text-slate-700 mb-6">{copy.h3Body}</p>
      <p className="text-sm text-slate-600 mb-6">
        {nap.brokerage} · {nap.fullAddress} · Call or text {ctaPhone.display}.
      </p>
      <CtaActions variant="onLight" />
    </section>
  );
}
