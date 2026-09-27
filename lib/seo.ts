import type { Metadata } from "next";
import { SITE_URL, nap } from "./contact";
import { photoForPath } from "./media";

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const normalized = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  openGraph,
  twitter,
  robots,
  ...rest
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
} & Omit<Metadata, "title" | "description" | "keywords" | "alternates">): Metadata {
  const url = absoluteUrl(path);
  const photo = photoForPath(path);
  return {
    title,
    description,
    keywords,
    alternates: { canonical: url },
    robots,
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: nap.brokerage,
      ...openGraph,
      images:
        openGraph && "images" in openGraph && openGraph.images
          ? openGraph.images
          : [{ url: absoluteUrl(photo.src), alt: photo.alt }],
      title: openGraph && "title" in openGraph && openGraph.title ? openGraph.title : title,
      description:
        openGraph && "description" in openGraph && openGraph.description
          ? openGraph.description
          : description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      images: [absoluteUrl(photo.src)],
      ...twitter,
      title: title,
      description,
    },
    ...rest,
  };
}
