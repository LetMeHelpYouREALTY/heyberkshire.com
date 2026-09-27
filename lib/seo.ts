import type { Metadata } from "next";
import { nap, resolveSiteUrl } from "./contact";
import { photoForPath } from "./media";

export function absoluteUrl(path = "/", hostname?: string | null): string {
  if (path.startsWith("http")) return path;
  const normalized =
    path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `${resolveSiteUrl(hostname)}${normalized}`;
}

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  hostname,
  openGraph,
  twitter,
  robots,
  ...rest
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  hostname?: string | null;
} & Omit<
  Metadata,
  "title" | "description" | "keywords" | "alternates"
>): Metadata {
  const url = absoluteUrl(path, hostname);
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
          : [{ url: absoluteUrl(photo.src, hostname), alt: photo.alt }],
      title:
        openGraph && "title" in openGraph && openGraph.title
          ? openGraph.title
          : title,
      description:
        openGraph && "description" in openGraph && openGraph.description
          ? openGraph.description
          : description,
      url,
    },
    twitter: {
      card: "summary_large_image",
      images: [absoluteUrl(photo.src, hostname)],
      ...twitter,
      title: title,
      description,
    },
    ...rest,
  };
}
