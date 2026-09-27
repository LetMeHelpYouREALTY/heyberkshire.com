import HeadingPhoto from "@/components/sections/HeadingPhoto";
import { lifestylePhotoForPath } from "@/lib/media";
import { neighborhoodLifestyles } from "@/lib/neighborhood-lifestyle";

type NeighborhoodLifestyleProps = {
  path: string;
};

export default function NeighborhoodLifestyle({
  path,
}: NeighborhoodLifestyleProps) {
  const copy = neighborhoodLifestyles[path];
  if (!copy) return null;

  return (
    <div className="not-prose mb-6" data-neighborhood-lifestyle={path}>
      <h2 className="text-3xl font-bold text-slate-900 mb-6">{copy.h2}</h2>
      <HeadingPhoto
        path={path}
        level="h2"
        photo={lifestylePhotoForPath(path)}
        priority
      />
    </div>
  );
}
