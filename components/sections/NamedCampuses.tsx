import HeadingPhoto from "@/components/sections/HeadingPhoto";
import { ctaPhone, nap } from "@/lib/contact";
import { campusPhotoForPath } from "@/lib/media";
import { namedCampuses } from "@/lib/named-campuses";

type NamedCampusesProps = {
  path: string;
};

export default function NamedCampuses({ path }: NamedCampusesProps) {
  const copy = namedCampuses[path];
  if (!copy) return null;

  return (
    <div className="not-prose mt-12 mb-6" data-named-campuses={path}>
      <h3 className="text-2xl font-bold text-slate-900 mb-6">{copy.h3}</h3>
      <HeadingPhoto
        path={path}
        level="h3"
        photo={campusPhotoForPath(path)}
        priority
      />
      <div className="bg-white border border-slate-200 rounded-xl p-6">
        <p className="text-slate-700 mb-4">{copy.body}</p>
        <ul className="text-slate-600 text-sm space-y-2 mb-4">
          {copy.campuses.map((campus) => (
            <li key={campus.name}>
              <strong>{campus.name}</strong>
              {` — ${campus.note}`}
            </li>
          ))}
        </ul>
        <p className="text-slate-600 text-sm">
          Street-level assignment is not the same on every block. Confirm the listing
          address at{" "}
          <a
            href="https://www.ccsd.net/zoning"
            className="text-blue-700 underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            CCSD Zoning Search
          </a>
          . Call or text {ctaPhone.display} and we will map drive time from {nap.fullAddress}.
        </p>
      </div>
    </div>
  );
}
