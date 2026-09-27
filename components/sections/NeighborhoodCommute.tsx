import HeadingPhoto from "@/components/sections/HeadingPhoto";
import { ctaPhone, nap } from "@/lib/contact";
import { commutePhotoForPath } from "@/lib/media";
import { neighborhoodCommutes } from "@/lib/neighborhood-commutes";

type NeighborhoodCommuteProps = {
  path: string;
};

export default function NeighborhoodCommute({ path }: NeighborhoodCommuteProps) {
  const copy = neighborhoodCommutes[path];
  if (!copy) return null;

  return (
    <div className="not-prose mt-12 mb-6" data-neighborhood-commute={path}>
      <h3 className="text-2xl font-bold text-slate-900 mb-6">{copy.h3}</h3>
      <HeadingPhoto
        path={path}
        level="h3"
        photo={commutePhotoForPath(path)}
        priority
      />
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <p className="text-slate-700 mb-4">{copy.body}</p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border border-slate-200 rounded-lg">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">
                  Pin
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">
                  Typical drive
                </th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">
                  Why we time it
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {copy.pins.map((row) => (
                <tr key={row.pin}>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900">
                    {row.pin}
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-700">{row.typical}</td>
                  <td className="px-4 py-3 text-sm text-slate-600">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-slate-600 text-sm">
          These are typical ranges already published for this village, not a live
          ETA. Call or text {ctaPhone.display} and we will re-time the listing
          street from {nap.fullAddress} before we leave.
        </p>
      </div>
    </div>
  );
}
