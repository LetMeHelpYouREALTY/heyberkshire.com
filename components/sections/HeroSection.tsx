"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { realscout } from "@/lib/contact";
import { mediaUrl, photos } from "@/lib/media";

const images = [
  {
    src: mediaUrl(photos.homeHero.src),
    alt: photos.homeHero.alt,
  },
  {
    src: mediaUrl(photos.henderson.src),
    alt: photos.henderson.alt,
  },
  {
    src: mediaUrl(photos.summerlin.src),
    alt: photos.summerlin.alt,
  },
];

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const intervalId = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [prefersReducedMotion]);

  return (
    <section className="relative w-full min-h-[100dvh] overflow-hidden" aria-label="Home search">
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={image.src}
            className={`absolute inset-0 ${
              prefersReducedMotion ? "" : "transition-opacity duration-1000"
            } ${index === currentImage ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center min-h-[100dvh] px-4 text-center pt-20">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Find Your Next Home in
          <br />
          <span className="text-blue-400">Las Vegas &amp; Henderson</span>
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
          Search live MLS listings with Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada
          Properties. Call or text (702) 222-1964.
        </p>

        <div className="realscout-wrapper mb-4">
          <div
            dangerouslySetInnerHTML={{
              __html: `<realscout-simple-search agent-encoded-id="${realscout.agentEncodedId}"></realscout-simple-search>`,
            }}
          />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/90 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-semibold tabular-nums">500+</span>
            <span>Transactions Closed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">Since 2008</span>
            <span>Serving Las Vegas</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold tabular-nums">4.9★</span>
            <span>Average Rating</span>
          </div>
        </div>
      </div>
    </section>
  );
}
