"use client";

import Image from "next/image";
import { useState } from "react";
import {
  gitBackupUrl,
  h2PhotoForPath,
  h3PhotoForPath,
  mediaUrl,
  photoForPath,
  type SitePhoto,
} from "@/lib/media";

type HeadingPhotoProps = {
  path: string;
  level?: "h1" | "h2" | "h3";
  photo?: SitePhoto;
  className?: string;
  priority?: boolean;
};

export default function HeadingPhoto({
  path,
  level = "h1",
  photo,
  className = "",
  priority,
}: HeadingPhotoProps) {
  let asset: SitePhoto;
  if (photo) {
    asset = photo;
  } else {
    switch (level) {
      case "h1":
        asset = photoForPath(path);
        break;
      case "h2":
        asset = h2PhotoForPath(path);
        break;
      case "h3":
        asset = h3PhotoForPath(path);
        break;
      default: {
        const _exhaustive: never = level;
        throw new Error(`Unhandled heading level: ${_exhaustive}`);
      }
    }
  }
  const isH1 = level === "h1";
  const heightClass = isH1
    ? "h-48 md:h-72 lg:h-80"
    : level === "h2"
      ? "h-36 md:h-48"
      : "h-28 md:h-36";

  return (
    <figure
      className={`relative w-full overflow-hidden rounded-xl mb-8 ${heightClass} ${className}`.trim()}
    >
      <HeadingStill asset={asset} isH1={isH1} priority={priority} />
    </figure>
  );
}

function HeadingStill({
  asset,
  isH1,
  priority,
}: {
  asset: SitePhoto;
  isH1: boolean;
  priority?: boolean;
}) {
  const primary = mediaUrl(asset.src);
  const backup = gitBackupUrl(asset.src);
  const [src, setSrc] = useState(primary);
  const usingCloudflare = src !== backup;

  return (
    <Image
      src={src}
      alt={asset.alt}
      fill
      unoptimized={usingCloudflare}
      className="object-cover"
      sizes={
        isH1
          ? "(max-width: 768px) 100vw, 896px"
          : "(max-width: 768px) 100vw, 768px"
      }
      priority={priority ?? isH1}
      onError={() => {
        if (src !== backup) setSrc(backup);
      }}
    />
  );
}
