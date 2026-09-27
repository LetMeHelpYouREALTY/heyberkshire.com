import HeadingPhoto from "@/components/sections/HeadingPhoto";
import { ctaPhone, nap } from "@/lib/contact";
import { communityHighlights } from "@/lib/community-highlights";
import { highlightPhotoForPath } from "@/lib/media";

type CommunityHighlightsProps = {
  path: string;
};

export default function CommunityHighlights({
  path,
}: CommunityHighlightsProps) {
  const copy = communityHighlights[path];
  if (!copy) return null;

  return (
    <div className="not-prose mt-12 mb-6" data-community-highlights={path}>
      <h3 className="scroll-mt-32 text-2xl font-bold text-slate-900 mb-6">
        {copy.h3}
      </h3>
      <HeadingPhoto
        path={path}
        level="h3"
        photo={highlightPhotoForPath(path)}
        priority
      />
      <p className="text-slate-700 mb-4">{copy.body}</p>
      <div className="grid md:grid-cols-2 gap-8">
        {copy.pins.map((pin) => (
          <div key={pin.name} className="bg-slate-50 p-6 rounded-xl">
            <h4 className="font-bold text-slate-900 text-lg mb-3">{pin.name}</h4>
            <p className="text-slate-600">{pin.note}</p>
          </div>
        ))}
      </div>
      <p className="text-slate-600 text-sm mt-4">
        {nap.brokerage} · {nap.fullAddress} · Call or text {ctaPhone.display}.
      </p>
    </div>
  );
}
