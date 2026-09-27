/**
 * Cloudflare Images (hosted) is the primary CDN. Git copies in /public/images/
 * are the backup. Per Cloudflare Images docs (hosted images / custom path,
 * Apr 2026): delivery is
 * https://imagedelivery.net/{account_hash}/{image_id}/{variant}
 * Custom IDs are the git path without a leading slash so the same file is the
 * backup (e.g. images/hero/las-vegas-valley-homes.jpg + variant public).
 *
 * Do not orange-cloud the Vercel hostname. imagedelivery.net does not need it.
 * NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED=false forces git-only stills.
 * NEXT_PUBLIC_MEDIA_CDN still wins when an R2 custom domain is set.
 */

export type SitePhoto = {
  /** Path under public/, used as the git backup and Cloudflare Images ID */
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** Public Images account hash from the Cloudflare dashboard Developer Resources. */
export const CLOUDFLARE_IMAGES_ACCOUNT_HASH = "byE6BTe9lNqo21V57n4aPQ";

export function cloudflareImageId(src: string): string {
  return src.startsWith("/") ? src.slice(1) : src;
}

export function gitBackupUrl(src: string): string {
  return src.startsWith("/") ? src : `/${src}`;
}

export function isCloudflareImagesEnabled(): boolean {
  if (process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGES_ENABLED === "false") {
    return false;
  }
  const hash =
    process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH ||
    CLOUDFLARE_IMAGES_ACCOUNT_HASH;
  return hash.length > 0;
}

export function mediaUrl(src: string): string {
  const path = cloudflareImageId(src);
  const mediaCdn = (process.env.NEXT_PUBLIC_MEDIA_CDN ?? "").replace(/\/$/, "");
  if (mediaCdn) {
    return `${mediaCdn}/${path}`;
  }
  if (isCloudflareImagesEnabled()) {
    const hash =
      process.env.NEXT_PUBLIC_CLOUDFLARE_ACCOUNT_HASH ||
      CLOUDFLARE_IMAGES_ACCOUNT_HASH;
    return `https://imagedelivery.net/${hash}/${path}/public`;
  }
  return gitBackupUrl(src);
}

export const photos = {
  homeHero: {
    src: "/images/hero/las-vegas-valley-homes.jpg",
    alt: "Las Vegas Valley homes with desert landscaping and mountain views",
    width: 1920,
    height: 1080,
  },
  office: {
    src: "/images/hero/office-lake-mead-blvd.jpg",
    alt: "Berkshire Hathaway HomeServices Nevada Properties office area near 9406 W Lake Mead Blvd, Las Vegas",
    width: 1920,
    height: 1080,
  },
  officeExterior: {
    src: "/images/hero/west-las-vegas-office-exterior.jpg",
    alt: "West Las Vegas office building near W Lake Mead Blvd with visitor parking and mountain backdrop",
    width: 1920,
    height: 1080,
  },
  consultation: {
    src: "/images/hero/consultation-office.jpg",
    alt: "Real estate consultation office with mountain views in Las Vegas",
    width: 1920,
    height: 1080,
  },
  agent: {
    src: "/images/agent/dr-jan-duffy-headshot.jpg",
    alt: "Dr. Jan Duffy, REALTOR®, Berkshire Hathaway HomeServices Nevada Properties",
    width: 1024,
    height: 1365,
  },
  market: {
    src: "/images/hero/las-vegas-market-skyline.jpg",
    alt: "Las Vegas valley skyline at sunrise used for market analysis pages",
    width: 1920,
    height: 1080,
  },
  summerlin: {
    src: "/images/neighborhoods/summerlin-red-rock.jpg",
    alt: "Summerlin homes with Red Rock Canyon sandstone cliffs in the background",
    width: 1920,
    height: 1080,
  },
  summerlinTrail: {
    src: "/images/neighborhoods/red-rock-hiking-trail.jpg",
    alt: "Red Rock Canyon trailhead and sandstone cliffs near Summerlin, Las Vegas",
    width: 1920,
    height: 1080,
  },
  henderson: {
    src: "/images/neighborhoods/henderson-parks.jpg",
    alt: "Henderson park, trails, and tile-roof homes with mountain views",
    width: 1920,
    height: 1080,
  },
  greenValley: {
    src: "/images/neighborhoods/green-valley-mature-trees.jpg",
    alt: "Green Valley Henderson street with mature trees and golf-course landscaping",
    width: 1920,
    height: 1080,
  },
  ridges: {
    src: "/images/neighborhoods/the-ridges-estate.jpg",
    alt: "Luxury custom estate with pool and mountain views in The Ridges, Summerlin",
    width: 1920,
    height: 1080,
  },
  centennial: {
    src: "/images/neighborhoods/centennial-hills-mountains.jpg",
    alt: "Centennial Hills northwest Las Vegas homes with mountain backdrop",
    width: 1920,
    height: 1080,
  },
  skyeCanyon: {
    src: "/images/neighborhoods/skye-canyon-trails.jpg",
    alt: "Skye Canyon new construction and desert trail access in northwest Las Vegas",
    width: 1920,
    height: 1080,
  },
  inspirada: {
    src: "/images/neighborhoods/inspirada-central-park.jpg",
    alt: "Inspirada Henderson central park, walking paths, and surrounding homes",
    width: 1920,
    height: 1080,
  },
  southernHighlands: {
    src: "/images/neighborhoods/southern-highlands-golf.jpg",
    alt: "Southern Highlands Las Vegas golf fairway, clubhouse, and ridge-top homes",
    width: 1920,
    height: 1080,
  },
  mountainsEdge: {
    src: "/images/neighborhoods/mountains-edge-trails.jpg",
    alt: "Mountains Edge southwest Las Vegas desert trailhead and tile-roof homes",
    width: 1920,
    height: 1080,
  },
  aliante: {
    src: "/images/neighborhoods/aliante-desert-hills.jpg",
    alt: "Aliante North Las Vegas homes and recreation campus with desert hills",
    width: 1920,
    height: 1080,
  },
  lakeLasVegas: {
    src: "/images/neighborhoods/lake-las-vegas-shore.jpg",
    alt: "Lake Las Vegas shoreline, golf, and homes in Henderson, Nevada",
    width: 1920,
    height: 1080,
  },
  fiftyFive: {
    src: "/images/properties/sun-city-golf-rec.jpg",
    alt: "55-plus golf and recreation campus in the Las Vegas Valley",
    width: 1920,
    height: 1080,
  },
  fiftyFiveClubhouse: {
    src: "/images/properties/trilogy-clubhouse-pool.jpg",
    alt: "Resort-style clubhouse pool terrace at a Las Vegas 55-plus community",
    width: 1920,
    height: 1080,
  },
  fiftyFiveFitness: {
    src: "/images/properties/amenity-fitness-clubhouse.jpg",
    alt: "Fitness clubhouse and indoor recreation at a Las Vegas 55-plus community",
    width: 1920,
    height: 1080,
  },
  sunCityAnthemGolf: {
    src: "/images/neighborhoods/sun-city-anthem-golf.jpg",
    alt: "Sun City Anthem golf fairway and tile-roof homes with McCullough Range views in Henderson",
    width: 1920,
    height: 1080,
  },
  soleraClubhouse: {
    src: "/images/properties/solera-anthem-clubhouse.jpg",
    alt: "Solera at Anthem boutique 55-plus clubhouse and resort pool in Henderson, Nevada",
    width: 1920,
    height: 1080,
  },
  heritageGate: {
    src: "/images/neighborhoods/heritage-stonebridge-gate.jpg",
    alt: "Staffed gate and landscaped entry at Heritage at Stonebridge, a Summerlin 55-plus community",
    width: 1920,
    height: 1080,
  },
  alianteRec: {
    src: "/images/neighborhoods/sun-city-aliante-rec.jpg",
    alt: "Sun City Aliante recreation campus and golf with desert hills in North Las Vegas",
    width: 1920,
    height: 1080,
  },
  sunCitySummerlinRec: {
    src: "/images/properties/sun-city-summerlin-rec.jpg",
    alt: "Sun City Summerlin recreation center and pool terrace with Spring Mountains backdrop",
    width: 1920,
    height: 1080,
  },
  newConstruction: {
    src: "/images/properties/new-construction-street.jpg",
    alt: "New construction street of two-story Las Vegas homes under a clear sky",
    width: 1920,
    height: 1080,
  },
  buyers: {
    src: "/images/properties/buyers-keys-kitchen.jpg",
    alt: "House keys on a kitchen island in a Las Vegas home with mountain views",
    width: 1920,
    height: 1080,
  },
  sellers: {
    src: "/images/properties/sellers-staged-living.jpg",
    alt: "Staged Las Vegas living room prepared for listing photos",
    width: 1920,
    height: 1080,
  },
  luxuryPool: {
    src: "/images/properties/luxury-pool-terrace.jpg",
    alt: "Luxury Las Vegas estate infinity pool and terrace overlooking the valley",
    width: 1920,
    height: 1080,
  },
  investment: {
    src: "/images/properties/downtown-las-vegas-investment.jpg",
    alt: "Downtown Las Vegas mid-rise rentals and commercial strip at golden hour",
    width: 1920,
    height: 1080,
  },
} as const satisfies Record<string, SitePhoto>;

export type PhotoKey = keyof typeof photos;

export function photoForPath(path: string): SitePhoto {
  if (path === "/" || path === "") return photos.homeHero;
  if (path.startsWith("/about")) return photos.agent;
  if (
    path.startsWith("/contact") ||
    path.startsWith("/google-business") ||
    path.startsWith("/security-policy")
  ) {
    return photos.office;
  }
  if (path.startsWith("/market")) return photos.market;
  if (path.startsWith("/55-plus-communities/del-webb-lake-las-vegas"))
    return photos.lakeLasVegas;
  if (path.startsWith("/55-plus-communities/sun-city-aliante"))
    return photos.aliante;
  if (path.startsWith("/55-plus-communities/trilogy-summerlin"))
    return photos.fiftyFiveClubhouse;
  if (path.startsWith("/55-plus-communities/sun-city-anthem"))
    return photos.sunCityAnthemGolf;
  if (path.startsWith("/55-plus-communities/solera-anthem"))
    return photos.soleraClubhouse;
  if (path.startsWith("/55-plus-communities/heritage-stonebridge"))
    return photos.heritageGate;
  if (path.startsWith("/55-plus-communities/sun-city-summerlin"))
    return photos.fiftyFive;
  if (path.startsWith("/55-plus")) return photos.fiftyFive;
  if (path.startsWith("/new-construction")) return photos.newConstruction;
  if (
    path.startsWith("/luxury") ||
    path.includes("luxury-homes") ||
    path.startsWith("/neighborhoods/the-ridges")
  ) {
    return photos.ridges;
  }
  if (path.startsWith("/neighborhoods/southern-highlands"))
    return photos.southernHighlands;
  if (path.startsWith("/buyers")) return photos.buyers;
  if (path.startsWith("/sellers") || path.startsWith("/home-valuation"))
    return photos.sellers;
  if (path.startsWith("/investment")) return photos.investment;
  if (path.startsWith("/neighborhoods/summerlin")) return photos.summerlin;
  if (path.startsWith("/neighborhoods/green-valley")) return photos.greenValley;
  if (path.startsWith("/neighborhoods/inspirada")) return photos.inspirada;
  if (path.startsWith("/neighborhoods/henderson")) return photos.henderson;
  if (path.startsWith("/neighborhoods/centennial-hills"))
    return photos.centennial;
  if (path.startsWith("/neighborhoods/north-las-vegas")) return photos.aliante;
  if (path.startsWith("/neighborhoods/mountains-edge"))
    return photos.mountainsEdge;
  if (path.startsWith("/neighborhoods/skye-canyon")) return photos.skyeCanyon;
  if (
    path.startsWith("/faq") ||
    path.startsWith("/services") ||
    path.startsWith("/why-berkshire")
  ) {
    return photos.consultation;
  }
  if (path.startsWith("/neighborhoods")) return photos.summerlin;
  if (path.startsWith("/listings") || path.startsWith("/relocation")) {
    return photos.homeHero;
  }
  return photos.homeHero;
}

/** H2 photos stay distinct from H1 so unique-interior bands are not a duplicate hero. */
export function h2PhotoForPath(path: string): SitePhoto {
  if (path.startsWith("/about")) return photos.office;
  if (
    path.startsWith("/contact") ||
    path.startsWith("/google-business") ||
    path.startsWith("/security-policy")
  ) {
    return photos.consultation;
  }
  if (path.startsWith("/sellers") || path.startsWith("/home-valuation")) {
    return photos.consultation;
  }
  if (
    path.startsWith("/luxury") ||
    path.includes("luxury-homes") ||
    path.startsWith("/neighborhoods/the-ridges")
  ) {
    return photos.officeExterior;
  }
  if (path.startsWith("/buyers")) return photos.homeHero;
  if (path.startsWith("/55-plus-communities/del-webb-lake-las-vegas")) {
    return photos.fiftyFiveClubhouse;
  }
  if (path.startsWith("/55-plus-communities/sun-city-summerlin")) {
    return photos.sunCitySummerlinRec;
  }
  if (path.startsWith("/55-plus-communities/sun-city-aliante")) {
    return photos.alianteRec;
  }
  if (path.startsWith("/55-plus")) return photos.fiftyFiveFitness;
  if (path.startsWith("/new-construction")) return photos.skyeCanyon;
  if (path.startsWith("/market")) return photos.office;
  if (path.startsWith("/neighborhoods")) return photos.officeExterior;
  if (path.startsWith("/investment")) return photos.market;
  if (
    path.startsWith("/faq") ||
    path.startsWith("/services") ||
    path.startsWith("/why-berkshire")
  ) {
    return photos.office;
  }
  if (path.startsWith("/relocation") || path.startsWith("/listings")) {
    return photos.market;
  }
  return photos.market;
}

/** H3 photos match amenities, trails, golf, or office details under the heading. */
export function h3PhotoForPath(path: string): SitePhoto {
  if (path.startsWith("/neighborhoods/summerlin")) return photos.summerlinTrail;
  if (path.startsWith("/neighborhoods/green-valley")) return photos.henderson;
  if (path.startsWith("/neighborhoods/inspirada"))
    return photos.fiftyFiveFitness;
  if (path.startsWith("/neighborhoods/henderson")) return photos.greenValley;
  if (
    path.startsWith("/neighborhoods/the-ridges") ||
    path.startsWith("/luxury") ||
    path.includes("luxury-homes")
  ) {
    return photos.luxuryPool;
  }
  if (path.startsWith("/neighborhoods/southern-highlands")) {
    return photos.fiftyFiveClubhouse;
  }
  if (path.startsWith("/neighborhoods/mountains-edge")) {
    return photos.newConstruction;
  }
  if (path.startsWith("/neighborhoods/centennial-hills"))
    return photos.skyeCanyon;
  if (path.startsWith("/neighborhoods/north-las-vegas"))
    return photos.alianteRec;
  if (path.startsWith("/neighborhoods/skye-canyon"))
    return photos.newConstruction;
  if (path.startsWith("/neighborhoods")) return photos.market;
  if (path.startsWith("/55-plus-communities/sun-city-aliante")) {
    return photos.fiftyFiveFitness;
  }
  if (path.startsWith("/55-plus-communities/del-webb-lake-las-vegas")) {
    return photos.fiftyFiveFitness;
  }
  if (path.startsWith("/55-plus-communities/trilogy-summerlin")) {
    return photos.summerlinTrail;
  }
  if (path.startsWith("/55-plus-communities/heritage-stonebridge")) {
    return photos.summerlin;
  }
  if (path.startsWith("/55-plus-communities/solera-anthem")) {
    return photos.henderson;
  }
  if (path.startsWith("/55-plus-communities/sun-city-anthem")) {
    return photos.henderson;
  }
  if (path.startsWith("/55-plus-communities/sun-city-summerlin")) {
    return photos.summerlinTrail;
  }
  if (path.startsWith("/55-plus")) return photos.lakeLasVegas;
  if (path.startsWith("/investment")) return photos.luxuryPool;
  if (
    path.startsWith("/google-business") ||
    path.startsWith("/contact") ||
    path.startsWith("/about") ||
    path.startsWith("/security-policy")
  ) {
    return photos.officeExterior;
  }
  if (path.startsWith("/sellers") || path.startsWith("/home-valuation")) {
    return photos.officeExterior;
  }
  if (path.startsWith("/buyers")) return photos.consultation;
  if (path.startsWith("/new-construction")) return photos.consultation;
  if (
    path.startsWith("/faq") ||
    path.startsWith("/services") ||
    path.startsWith("/why-berkshire")
  ) {
    return photos.officeExterior;
  }
  return photos.consultation;
}

/** Fourth still for named-campus H3s — must stay distinct from H1/H2/unique-interior H3. */
export function campusPhotoForPath(path: string): SitePhoto {
  if (path.startsWith("/neighborhoods/summerlin")) return photos.buyers;
  if (path.startsWith("/neighborhoods/the-ridges")) return photos.consultation;
  if (path.startsWith("/neighborhoods/southern-highlands")) return photos.sellers;
  if (path.startsWith("/neighborhoods/skye-canyon")) return photos.centennial;
  if (path.startsWith("/neighborhoods/centennial-hills")) return photos.office;
  if (path.startsWith("/neighborhoods/green-valley")) return photos.inspirada;
  if (path.startsWith("/neighborhoods/henderson")) return photos.lakeLasVegas;
  if (path.startsWith("/neighborhoods/inspirada")) return photos.sunCityAnthemGolf;
  if (path.startsWith("/neighborhoods/north-las-vegas")) return photos.market;
  if (path.startsWith("/neighborhoods/mountains-edge"))
    return photos.southernHighlands;
  if (path.startsWith("/neighborhoods")) return photos.agent;
  return photos.officeExterior;
}

/** Fifth still for commute H3s — distinct from H1/H2/unique-interior H3/campus. */
export function commutePhotoForPath(path: string): SitePhoto {
  if (path.startsWith("/neighborhoods/summerlin")) return photos.office;
  if (path.startsWith("/neighborhoods/the-ridges")) return photos.homeHero;
  if (path.startsWith("/neighborhoods/southern-highlands"))
    return photos.mountainsEdge;
  if (path.startsWith("/neighborhoods/skye-canyon")) return photos.aliante;
  if (path.startsWith("/neighborhoods/centennial-hills"))
    return photos.alianteRec;
  if (path.startsWith("/neighborhoods/green-valley"))
    return photos.soleraClubhouse;
  if (path.startsWith("/neighborhoods/henderson")) return photos.fiftyFive;
  if (path.startsWith("/neighborhoods/inspirada")) return photos.heritageGate;
  if (path.startsWith("/neighborhoods/north-las-vegas")) return photos.investment;
  if (path.startsWith("/neighborhoods/mountains-edge")) return photos.luxuryPool;
  if (path.startsWith("/neighborhoods")) return photos.consultation;
  return photos.market;
}

/** Sixth still for neighborhood FAQ H2s — distinct from H1/H2/H3/campus/commute. */
export function faqPhotoForPath(path: string): SitePhoto {
  if (path.startsWith("/neighborhoods/summerlin")) return photos.fiftyFiveClubhouse;
  if (path.startsWith("/neighborhoods/the-ridges")) return photos.greenValley;
  if (path.startsWith("/neighborhoods/southern-highlands"))
    return photos.newConstruction;
  if (path.startsWith("/neighborhoods/skye-canyon")) return photos.summerlinTrail;
  if (path.startsWith("/neighborhoods/centennial-hills")) return photos.buyers;
  if (path.startsWith("/neighborhoods/green-valley"))
    return photos.fiftyFiveFitness;
  if (path.startsWith("/neighborhoods/henderson"))
    return photos.sunCitySummerlinRec;
  if (path.startsWith("/neighborhoods/inspirada")) return photos.ridges;
  if (path.startsWith("/neighborhoods/north-las-vegas")) return photos.sellers;
  if (path.startsWith("/neighborhoods/mountains-edge")) return photos.skyeCanyon;
  if (path.startsWith("/neighborhoods")) return photos.lakeLasVegas;
  return photos.officeExterior;
}

/** Seventh still for 55+ FAQ H2s — distinct from that path's H1/H2/H3 stills. */
export function fiftyFiveFaqPhotoForPath(path: string): SitePhoto {
  if (path.startsWith("/55-plus-communities/sun-city-summerlin")) {
    return photos.officeExterior;
  }
  if (path.startsWith("/55-plus-communities/sun-city-anthem")) {
    return photos.greenValley;
  }
  if (path.startsWith("/55-plus-communities/trilogy-summerlin")) {
    return photos.ridges;
  }
  if (path.startsWith("/55-plus-communities/heritage-stonebridge")) {
    return photos.consultation;
  }
  if (path.startsWith("/55-plus-communities/solera-anthem")) {
    return photos.inspirada;
  }
  if (path.startsWith("/55-plus-communities/sun-city-aliante")) {
    return photos.centennial;
  }
  if (path.startsWith("/55-plus-communities/del-webb-lake-las-vegas")) {
    return photos.southernHighlands;
  }
  if (path.startsWith("/55-plus-communities")) return photos.office;
  return photos.market;
}

/** Eighth still for buyer-intent FAQ H2s — distinct from that path's H1/H2/H3. */
export function buyerFaqPhotoForPath(path: string): SitePhoto {
  if (path.startsWith("/buyers/first-time-buyers")) return photos.officeExterior;
  if (path.startsWith("/buyers/california-relocator")) return photos.greenValley;
  if (path.startsWith("/buyers/luxury-homes-las-vegas")) return photos.market;
  if (path.startsWith("/buyers")) return photos.office;
  return photos.consultation;
}

/** Ninth still for seller-intent FAQ H2s — distinct from that path's H1/H2/H3. */
export function sellerFaqPhotoForPath(path: string): SitePhoto {
  if (path.startsWith("/sellers/move-up")) return photos.homeHero;
  if (path.startsWith("/sellers/downsizing")) return photos.fiftyFive;
  if (path.startsWith("/sellers/relocation")) return photos.market;
  if (path.startsWith("/sellers/divorce-probate")) return photos.agent;
  if (path.startsWith("/sellers")) return photos.office;
  return photos.buyers;
}

/** Tenth still for remaining conversion-hub FAQ H2s. */
export function intentFaqPhotoForPath(path: string): SitePhoto {
  if (path.startsWith("/luxury-homes") || path.startsWith("/luxury")) {
    return photos.southernHighlands;
  }
  if (path.startsWith("/relocation")) return photos.summerlin;
  if (path.startsWith("/home-valuation")) return photos.buyers;
  if (path.startsWith("/new-construction")) return photos.mountainsEdge;
  if (path.startsWith("/investment")) return photos.aliante;
  return photos.office;
}

/** Eleventh still for remaining desk/support FAQ H2s. */
export function supportFaqPhotoForPath(path: string): SitePhoto {
  if (path === "/" || path === "") return photos.office;
  if (path.startsWith("/contact")) return photos.agent;
  if (path.startsWith("/why-berkshire")) return photos.sellers;
  if (path.startsWith("/listings")) return photos.summerlin;
  if (path.startsWith("/google-business")) return photos.buyers;
  if (path.startsWith("/market-report")) return photos.ridges;
  if (path.startsWith("/market-insights")) return photos.henderson;
  if (path.startsWith("/market-update")) return photos.centennial;
  return photos.officeExterior;
}

/** Thirteenth still for neighborhood amenity H3s. */
export function amenityPhotoForPath(path: string): SitePhoto {
  if (path.startsWith("/neighborhoods/summerlin")) return photos.homeHero;
  if (path.startsWith("/neighborhoods/the-ridges")) return photos.agent;
  if (path.startsWith("/neighborhoods/southern-highlands"))
    return photos.luxuryPool;
  if (path.startsWith("/neighborhoods/skye-canyon")) return photos.alianteRec;
  if (path.startsWith("/neighborhoods/centennial-hills")) return photos.market;
  if (path.startsWith("/neighborhoods/green-valley")) return photos.lakeLasVegas;
  if (path.startsWith("/neighborhoods/henderson")) return photos.inspirada;
  if (path.startsWith("/neighborhoods/inspirada")) return photos.greenValley;
  if (path.startsWith("/neighborhoods/north-las-vegas")) return photos.centennial;
  if (path.startsWith("/neighborhoods/mountains-edge")) return photos.fiftyFive;
  if (path.startsWith("/neighborhoods")) return photos.newConstruction;
  return photos.consultation;
}

/** Fourteenth still for 55+ amenity H2s. */
export function fiftyFiveAmenityPhotoForPath(path: string): SitePhoto {
  if (path.startsWith("/55-plus-communities/sun-city-summerlin")) {
    return photos.homeHero;
  }
  if (path.startsWith("/55-plus-communities/sun-city-anthem")) {
    return photos.lakeLasVegas;
  }
  if (path.startsWith("/55-plus-communities/trilogy-summerlin")) {
    return photos.agent;
  }
  if (path.startsWith("/55-plus-communities/heritage-stonebridge")) {
    return photos.buyers;
  }
  if (path.startsWith("/55-plus-communities/solera-anthem")) {
    return photos.mountainsEdge;
  }
  if (path.startsWith("/55-plus-communities/sun-city-aliante")) {
    return photos.homeHero;
  }
  if (path.startsWith("/55-plus-communities/del-webb-lake-las-vegas")) {
    return photos.ridges;
  }
  if (path.startsWith("/55-plus-communities")) return photos.sellers;
  return photos.office;
}

/** Fifteenth still for village lifestyle H2s — distinct from H1–H3, campus, commute, FAQ, amenity. */
export function lifestylePhotoForPath(path: string): SitePhoto {
  if (path.startsWith("/neighborhoods/summerlin")) return photos.ridges;
  if (path.startsWith("/neighborhoods/the-ridges")) return photos.market;
  if (path.startsWith("/neighborhoods/southern-highlands"))
    return photos.greenValley;
  if (path.startsWith("/neighborhoods/skye-canyon")) return photos.lakeLasVegas;
  if (path.startsWith("/neighborhoods/centennial-hills")) return photos.inspirada;
  if (path.startsWith("/neighborhoods/green-valley")) return photos.homeHero;
  if (path.startsWith("/neighborhoods/henderson")) return photos.agent;
  if (path.startsWith("/neighborhoods/inspirada")) return photos.market;
  if (path.startsWith("/neighborhoods/north-las-vegas")) return photos.homeHero;
  if (path.startsWith("/neighborhoods/mountains-edge")) return photos.homeHero;
  if (path.startsWith("/neighborhoods")) return photos.fiftyFive;
  return photos.consultation;
}

/** Seventeenth still for village Community Highlights H3s. */
export function highlightPhotoForPath(path: string): SitePhoto {
  if (path.startsWith("/neighborhoods/summerlin")) return photos.henderson;
  if (path.startsWith("/neighborhoods/the-ridges")) return photos.summerlinTrail;
  if (path.startsWith("/neighborhoods/southern-highlands")) return photos.homeHero;
  if (path.startsWith("/neighborhoods/skye-canyon")) return photos.consultation;
  if (path.startsWith("/neighborhoods/centennial-hills")) return photos.summerlin;
  if (path.startsWith("/neighborhoods/green-valley")) return photos.office;
  if (path.startsWith("/neighborhoods/henderson")) return photos.market;
  if (path.startsWith("/neighborhoods/inspirada")) return photos.luxuryPool;
  if (path.startsWith("/neighborhoods/north-las-vegas")) return photos.greenValley;
  if (path.startsWith("/neighborhoods/mountains-edge")) return photos.aliante;
  if (path.startsWith("/neighborhoods")) return photos.fiftyFiveFitness;
  return photos.consultation;
}

/** Eighteenth still for village Parks H3s — Centennial Hills and Mountains Edge. */
export function parkPhotoForPath(path: string): SitePhoto {
  if (path.startsWith("/neighborhoods/centennial-hills"))
    return photos.mountainsEdge;
  if (path.startsWith("/neighborhoods/mountains-edge")) return photos.henderson;
  return photos.consultation;
}

/** Nineteenth stills for leftover village-detail H3s (builders, employers, named villages). */
export function villageDetailPhotoForPath(path: string, slot = 0): SitePhoto {
  if (path.startsWith("/neighborhoods/the-ridges") && slot === 0) {
    return photos.buyers;
  }
  if (path.startsWith("/neighborhoods/southern-highlands") && slot === 0) {
    return photos.office;
  }
  if (path.startsWith("/neighborhoods/skye-canyon") && slot === 0) {
    return photos.homeHero;
  }
  if (path.startsWith("/neighborhoods/inspirada") && slot === 0) {
    return photos.consultation;
  }
  if (path.startsWith("/neighborhoods/henderson") && slot === 0) {
    return photos.ridges;
  }
  if (path.startsWith("/neighborhoods/north-las-vegas") && slot === 0) {
    return photos.summerlinTrail;
  }
  if (path.startsWith("/neighborhoods/north-las-vegas") && slot === 1) {
    return photos.newConstruction;
  }
  return photos.consultation;
}

/** Twentieth stills for process-step / Why-BHHS interiors (not the H1–H3 or quote still). */
export function processPhotoForPath(path: string, slot = 0): SitePhoto {
  if (path === "/buyers" && slot === 0) return photos.officeExterior;
  if (path === "/listings" && slot === 0) return photos.office;
  if (path === "/services" && slot === 0) return photos.homeHero;
  if (path === "/services" && slot === 1) return photos.market;
  if (path.startsWith("/why-berkshire") && slot === 0) return photos.homeHero;
  if (path === "/contact" && slot === 0) return photos.summerlin;
  if (path.startsWith("/luxury-homes") && slot === 0) return photos.consultation;
  return photos.consultation;
}

/** Twenty-first stills for leftover slogan H2 interiors (not H1–H3, quote, or process). */
export function leftoverPhotoForPath(path: string, slot = 0): SitePhoto {
  if (path === "/55-plus-communities/sun-city-anthem" && slot === 0) {
    return photos.homeHero;
  }
  if (path === "/55-plus-communities" && slot === 0) return photos.officeExterior;
  if (path === "/buyers/luxury-homes-las-vegas" && slot === 0) {
    return photos.homeHero;
  }
  if (path === "/buyers/luxury-homes-las-vegas" && slot === 1) {
    return photos.summerlin;
  }
  if (path.startsWith("/buyers/california-relocator") && slot === 0) {
    return photos.office;
  }
  if (path.startsWith("/buyers/california-relocator") && slot === 1) {
    return photos.summerlin;
  }
  if (path.startsWith("/buyers/california-relocator") && slot === 2) {
    return photos.henderson;
  }
  if (path.startsWith("/buyers/california-relocator") && slot === 3) {
    return photos.officeExterior;
  }
  if (path.startsWith("/luxury-homes") && slot === 0) return photos.office;
  if (path.startsWith("/luxury-homes") && slot === 1) return photos.homeHero;
  if (path === "/services" && slot === 0) return photos.summerlin;
  if (path === "/services" && slot === 1) return photos.henderson;
  if (path === "/listings" && slot === 0) return photos.officeExterior;
  if (path === "/listings" && slot === 1) return photos.buyers;
  if (path.startsWith("/why-berkshire") && slot === 0) return photos.market;
  if (path.startsWith("/why-berkshire") && slot === 1) return photos.summerlin;
  if (path.startsWith("/new-construction") && slot === 0) return photos.homeHero;
  if (path.startsWith("/new-construction") && slot === 1) return photos.office;
  if (path.startsWith("/new-construction") && slot === 2) return photos.summerlin;
  if (path.startsWith("/new-construction") && slot === 3) return photos.henderson;
  if (path.startsWith("/google-business") && slot === 0) return photos.homeHero;
  if (path.startsWith("/google-business") && slot === 1) return photos.summerlin;
  if (path === "/sellers" && slot === 0) return photos.homeHero;
  if (path === "/sellers" && slot === 1) return photos.summerlin;
  if (path === "/sellers" && slot === 2) return photos.henderson;
  if (path.startsWith("/sellers/downsizing") && slot === 0) return photos.office;
  if (path.startsWith("/sellers/downsizing") && slot === 1) return photos.homeHero;
  if (path.startsWith("/sellers/downsizing") && slot === 2) return photos.summerlin;
  if (path.startsWith("/sellers/downsizing") && slot === 3) return photos.henderson;
  if (path.startsWith("/sellers/move-up") && slot === 0) return photos.summerlin;
  if (path.startsWith("/sellers/move-up") && slot === 1) return photos.office;
  if (path.startsWith("/sellers/move-up") && slot === 2) return photos.henderson;
  if (path.startsWith("/sellers/move-up") && slot === 3) return photos.homeHero;
  if (path.startsWith("/sellers/move-up") && slot === 4) return photos.buyers;
  if (path.startsWith("/sellers/relocation") && slot === 0) return photos.homeHero;
  if (path.startsWith("/sellers/relocation") && slot === 1) return photos.office;
  if (path.startsWith("/sellers/relocation") && slot === 2) return photos.summerlin;
  if (path.startsWith("/sellers/relocation") && slot === 3) return photos.henderson;
  if (path.startsWith("/sellers/relocation") && slot === 4) return photos.buyers;
  if (path.startsWith("/sellers/relocation") && slot === 5) return photos.ridges;
  if (path.startsWith("/sellers/divorce-probate") && slot === 0) {
    return photos.homeHero;
  }
  if (path.startsWith("/sellers/divorce-probate") && slot === 1) return photos.office;
  if (path.startsWith("/sellers/divorce-probate") && slot === 2) {
    return photos.summerlin;
  }
  if (path.startsWith("/sellers/divorce-probate") && slot === 3) {
    return photos.henderson;
  }
  if (path.startsWith("/sellers/divorce-probate") && slot === 4) return photos.buyers;
  if (path === "/relocation" && slot === 0) return photos.officeExterior;
  if (path === "/relocation" && slot === 1) return photos.office;
  if (path === "/relocation" && slot === 2) return photos.henderson;
  if (path.startsWith("/market-report") && slot === 0) return photos.homeHero;
  if (path.startsWith("/market-report") && slot === 1) return photos.summerlin;
  if (path.startsWith("/investment-properties") && slot === 0) {
    return photos.homeHero;
  }
  if (path.startsWith("/investment-properties") && slot === 1) {
    return photos.officeExterior;
  }
  if (path.startsWith("/investment-properties") && slot === 2) {
    return photos.summerlin;
  }
  if (path.startsWith("/investment-properties") && slot === 3) {
    return photos.henderson;
  }
  if (path.startsWith("/investment-properties") && slot === 4) {
    return photos.office;
  }
  if (path.startsWith("/investment-properties") && slot === 5) {
    return photos.buyers;
  }
  if (path.startsWith("/home-valuation") && slot === 0) return photos.homeHero;
  if (path.startsWith("/buyers/first-time-buyers") && slot === 0) {
    return photos.office;
  }
  if (path.startsWith("/buyers/first-time-buyers") && slot === 1) {
    return photos.summerlin;
  }
  if (path === "/contact" && slot === 0) return photos.homeHero;
  if (path === "/contact" && slot === 1) return photos.henderson;
  if (path.startsWith("/market-insights") && slot === 0) return photos.homeHero;
  if (path.startsWith("/market-insights") && slot === 1) {
    return photos.officeExterior;
  }
  if (path.startsWith("/market-insights") && slot === 2) return photos.summerlin;
  if (path.startsWith("/market-insights") && slot === 3) return photos.buyers;
  if (path.startsWith("/market-insights") && slot === 4) return photos.sellers;
  if (path.startsWith("/market-insights") && slot === 5) return photos.ridges;
  if (path.startsWith("/market-update") && slot === 0) return photos.homeHero;
  if (path.startsWith("/market-update") && slot === 1) {
    return photos.officeExterior;
  }
  if (path.startsWith("/market-update") && slot === 2) return photos.summerlin;
  if (path.startsWith("/market-update") && slot === 3) return photos.buyers;
  if (path.startsWith("/market-update") && slot === 4) return photos.sellers;
  if (path === "/neighborhoods" && slot === 0) return photos.homeHero;
  if (path === "/neighborhoods" && slot === 1) return photos.henderson;
  if (path.startsWith("/neighborhoods/the-ridges") && slot === 0) {
    return photos.office;
  }
  if (path.startsWith("/neighborhoods/summerlin") && slot === 0) {
    return photos.consultation;
  }
  if (path.startsWith("/neighborhoods/southern-highlands") && slot === 0) {
    return photos.consultation;
  }
  if (path.startsWith("/neighborhoods/skye-canyon") && slot === 0) {
    return photos.office;
  }
  if (path.startsWith("/neighborhoods/centennial-hills") && slot === 0) {
    return photos.consultation;
  }
  if (path.startsWith("/neighborhoods/green-valley") && slot === 0) {
    return photos.consultation;
  }
  if (path.startsWith("/neighborhoods/henderson") && slot === 0) {
    return photos.consultation;
  }
  if (path.startsWith("/neighborhoods/inspirada") && slot === 0) {
    return photos.office;
  }
  if (path.startsWith("/neighborhoods/north-las-vegas") && slot === 0) {
    return photos.office;
  }
  if (path.startsWith("/neighborhoods/mountains-edge") && slot === 0) {
    return photos.consultation;
  }
  if (path.startsWith("/about") && slot === 0) return photos.homeHero;
  if (path.startsWith("/about") && slot === 1) return photos.summerlin;
  if (path === "/buyers" && slot === 0) return photos.summerlin;
  if (path.startsWith("/faq") && slot === 0) return photos.henderson;
  if (path === "/55-plus-communities" && slot === 1) return photos.homeHero;
  if (path === "/55-plus-communities" && slot === 2) return photos.summerlin;
  if (path.startsWith("/55-plus-communities/sun-city-summerlin") && slot === 0) {
    return photos.office;
  }
  if (path.startsWith("/55-plus-communities/trilogy-summerlin") && slot === 0) {
    return photos.homeHero;
  }
  if (path.startsWith("/55-plus-communities/heritage-stonebridge") && slot === 0) {
    return photos.homeHero;
  }
  if (path.startsWith("/55-plus-communities/solera-anthem") && slot === 0) {
    return photos.homeHero;
  }
  if (path.startsWith("/55-plus-communities/sun-city-aliante") && slot === 0) {
    return photos.office;
  }
  if (
    path.startsWith("/55-plus-communities/del-webb-lake-las-vegas") &&
    slot === 0
  ) {
    return photos.homeHero;
  }
  if (path === "/" && slot === 0) return photos.officeExterior;
  if (path === "/" && slot === 1) return photos.buyers;
  if (path.startsWith("/security-policy") && slot === 0) return photos.homeHero;
  if (path.startsWith("/security-policy") && slot === 1) return photos.summerlin;
  if (path.startsWith("/security-policy") && slot === 2) return photos.henderson;
  if (path.startsWith("/security-policy") && slot === 3) return photos.buyers;
  if (path.startsWith("/google-business") && slot === 2) return photos.henderson;
  if (path.startsWith("/google-business") && slot === 3) return photos.market;
  if (path === "/sellers" && slot === 3) return photos.agent;
  if (path === "/sellers" && slot === 4) return photos.buyers;
  if (path.startsWith("/buyers/first-time-buyers") && slot === 2) {
    return photos.henderson;
  }
  if (path.startsWith("/home-valuation") && slot === 1) return photos.summerlin;
  return photos.consultation;
}

export type FaqHubCategoryId =
  | "bhhs"
  | "buying"
  | "selling"
  | "investment"
  | "relocating"
  | "working";

/** Twelfth stills for /faq category H2s — distinct from /faq H1/H2/H3. */
export function faqHubPhotoForCategory(id: FaqHubCategoryId): SitePhoto {
  switch (id) {
    case "bhhs":
      return photos.homeHero;
    case "buying":
      return photos.sellers;
    case "selling":
      return photos.buyers;
    case "investment":
      return photos.investment;
    case "relocating":
      return photos.summerlin;
    case "working":
      return photos.agent;
    default: {
      const _exhaustive: never = id;
      return _exhaustive;
    }
  }
}

/** Stills already used as heading photos on this path (H1–H3 plus section extras). */
export function occupiedHeadingStills(path: string): Set<string> {
  const srcs: string[] = [
    photoForPath(path).src,
    h2PhotoForPath(path).src,
    h3PhotoForPath(path).src,
  ];
  if (path === "/" || path === "") {
    srcs.push(photos.agent.src, photos.summerlin.src, photos.sellers.src);
    srcs.push(leftoverPhotoForPath(path, 0).src);
    srcs.push(leftoverPhotoForPath(path, 1).src);
  }
  if (path.startsWith("/neighborhoods")) {
    srcs.push(
      campusPhotoForPath(path).src,
      commutePhotoForPath(path).src,
      faqPhotoForPath(path).src,
      amenityPhotoForPath(path).src,
      lifestylePhotoForPath(path).src
    );
  }
  if (path.startsWith("/neighborhoods/")) {
    srcs.push(highlightPhotoForPath(path).src);
  }
  if (
    path.startsWith("/neighborhoods/centennial-hills") ||
    path.startsWith("/neighborhoods/mountains-edge")
  ) {
    srcs.push(parkPhotoForPath(path).src);
  }
  if (
    path.startsWith("/neighborhoods/the-ridges") ||
    path.startsWith("/neighborhoods/southern-highlands") ||
    path.startsWith("/neighborhoods/skye-canyon") ||
    path.startsWith("/neighborhoods/inspirada") ||
    path.startsWith("/neighborhoods/henderson") ||
    path.startsWith("/neighborhoods/north-las-vegas")
  ) {
    srcs.push(villageDetailPhotoForPath(path, 0).src);
  }
  if (path.startsWith("/neighborhoods/north-las-vegas")) {
    srcs.push(villageDetailPhotoForPath(path, 1).src);
  }
  if (
    path === "/buyers" ||
    path === "/listings" ||
    path === "/services" ||
    path.startsWith("/why-berkshire") ||
    path === "/contact" ||
    path.startsWith("/luxury-homes")
  ) {
    srcs.push(processPhotoForPath(path, 0).src);
  }
  if (path === "/services") {
    srcs.push(processPhotoForPath(path, 1).src);
  }
  if (path === "/55-plus-communities/sun-city-anthem") {
    srcs.push(leftoverPhotoForPath(path, 0).src);
  }
  if (path.startsWith("/55-plus-communities/sun-city-summerlin")) {
    srcs.push(leftoverPhotoForPath(path, 0).src);
  }
  if (path.startsWith("/55-plus-communities/trilogy-summerlin")) {
    srcs.push(leftoverPhotoForPath(path, 0).src);
  }
  if (path.startsWith("/55-plus-communities/heritage-stonebridge")) {
    srcs.push(leftoverPhotoForPath(path, 0).src);
  }
  if (path.startsWith("/55-plus-communities/solera-anthem")) {
    srcs.push(leftoverPhotoForPath(path, 0).src);
  }
  if (path.startsWith("/55-plus-communities/sun-city-aliante")) {
    srcs.push(leftoverPhotoForPath(path, 0).src);
  }
  if (path.startsWith("/55-plus-communities/del-webb-lake-las-vegas")) {
    srcs.push(leftoverPhotoForPath(path, 0).src);
  }
  if (path === "/55-plus-communities") {
    srcs.push(leftoverPhotoForPath(path, 0).src);
    srcs.push(leftoverPhotoForPath(path, 1).src);
    srcs.push(leftoverPhotoForPath(path, 2).src);
  }
  if (path.startsWith("/security-policy")) {
    srcs.push(leftoverPhotoForPath(path, 0).src);
    srcs.push(leftoverPhotoForPath(path, 1).src);
    srcs.push(leftoverPhotoForPath(path, 2).src);
    srcs.push(leftoverPhotoForPath(path, 3).src);
  }
  if (path.startsWith("/buyers/california-relocator")) {
    srcs.push(leftoverPhotoForPath(path, 0).src);
    srcs.push(leftoverPhotoForPath(path, 1).src);
    srcs.push(leftoverPhotoForPath(path, 2).src);
    srcs.push(leftoverPhotoForPath(path, 3).src);
  }
  if (path === "/buyers/luxury-homes-las-vegas") {
    srcs.push(leftoverPhotoForPath(path, 0).src);
    srcs.push(leftoverPhotoForPath(path, 1).src);
  }
  if (path.startsWith("/luxury-homes")) {
    srcs.push(leftoverPhotoForPath(path, 0).src);
    srcs.push(leftoverPhotoForPath(path, 1).src);
  }
  if (path === "/listings") {
    srcs.push(leftoverPhotoForPath(path, 0).src);
    srcs.push(leftoverPhotoForPath(path, 1).src);
  }
  if (path.startsWith("/why-berkshire")) {
    srcs.push(leftoverPhotoForPath(path, 0).src);
    srcs.push(leftoverPhotoForPath(path, 1).src);
  }
  if (path.startsWith("/new-construction")) {
    srcs.push(leftoverPhotoForPath(path, 0).src);
    srcs.push(leftoverPhotoForPath(path, 1).src);
    srcs.push(leftoverPhotoForPath(path, 2).src);
    srcs.push(leftoverPhotoForPath(path, 3).src);
  }
  if (path === "/services") {
    srcs.push(leftoverPhotoForPath(path, 0).src);
    srcs.push(leftoverPhotoForPath(path, 1).src);
  }
  if (path.startsWith("/google-business")) {
    srcs.push(leftoverPhotoForPath(path, 0).src);
    srcs.push(leftoverPhotoForPath(path, 1).src);
    srcs.push(leftoverPhotoForPath(path, 2).src);
    srcs.push(leftoverPhotoForPath(path, 3).src);
  }
  if (path === "/sellers") {
    srcs.push(leftoverPhotoForPath(path, 0).src);
    srcs.push(leftoverPhotoForPath(path, 1).src);
    srcs.push(leftoverPhotoForPath(path, 2).src);
    srcs.push(leftoverPhotoForPath(path, 3).src);
    srcs.push(leftoverPhotoForPath(path, 4).src);
  }
  if (path.startsWith("/sellers/downsizing")) {
    srcs.push(leftoverPhotoForPath(path, 0).src);
    srcs.push(leftoverPhotoForPath(path, 1).src);
    srcs.push(leftoverPhotoForPath(path, 2).src);
    srcs.push(leftoverPhotoForPath(path, 3).src);
  }
  if (path.startsWith("/sellers/move-up")) {
    srcs.push(leftoverPhotoForPath(path, 0).src);
    srcs.push(leftoverPhotoForPath(path, 1).src);
    srcs.push(leftoverPhotoForPath(path, 2).src);
    srcs.push(leftoverPhotoForPath(path, 3).src);
    srcs.push(leftoverPhotoForPath(path, 4).src);
  }
  if (path.startsWith("/sellers/relocation")) {
    srcs.push(leftoverPhotoForPath(path, 0).src);
    srcs.push(leftoverPhotoForPath(path, 1).src);
    srcs.push(leftoverPhotoForPath(path, 2).src);
    srcs.push(leftoverPhotoForPath(path, 3).src);
    srcs.push(leftoverPhotoForPath(path, 4).src);
    srcs.push(leftoverPhotoForPath(path, 5).src);
  }
  if (path.startsWith("/sellers/divorce-probate")) {
    srcs.push(leftoverPhotoForPath(path, 0).src);
    srcs.push(leftoverPhotoForPath(path, 1).src);
    srcs.push(leftoverPhotoForPath(path, 2).src);
    srcs.push(leftoverPhotoForPath(path, 3).src);
    srcs.push(leftoverPhotoForPath(path, 4).src);
  }
  if (path === "/relocation") {
    srcs.push(leftoverPhotoForPath(path, 0).src);
    srcs.push(leftoverPhotoForPath(path, 1).src);
    srcs.push(leftoverPhotoForPath(path, 2).src);
  }
  if (path.startsWith("/market-report")) {
    srcs.push(leftoverPhotoForPath(path, 0).src);
    srcs.push(leftoverPhotoForPath(path, 1).src);
  }
  if (path.startsWith("/investment-properties")) {
    srcs.push(leftoverPhotoForPath(path, 0).src);
    srcs.push(leftoverPhotoForPath(path, 1).src);
    srcs.push(leftoverPhotoForPath(path, 2).src);
    srcs.push(leftoverPhotoForPath(path, 3).src);
    srcs.push(leftoverPhotoForPath(path, 4).src);
    srcs.push(leftoverPhotoForPath(path, 5).src);
  }
  if (path.startsWith("/home-valuation")) {
    srcs.push(leftoverPhotoForPath(path, 0).src);
    srcs.push(leftoverPhotoForPath(path, 1).src);
  }
  if (path.startsWith("/buyers/first-time-buyers")) {
    srcs.push(leftoverPhotoForPath(path, 0).src);
    srcs.push(leftoverPhotoForPath(path, 1).src);
    srcs.push(leftoverPhotoForPath(path, 2).src);
  }
  if (path === "/contact") {
    srcs.push(leftoverPhotoForPath(path, 0).src);
    srcs.push(leftoverPhotoForPath(path, 1).src);
  }
  if (path.startsWith("/market-insights")) {
    srcs.push(leftoverPhotoForPath(path, 0).src);
    srcs.push(leftoverPhotoForPath(path, 1).src);
    srcs.push(leftoverPhotoForPath(path, 2).src);
    srcs.push(leftoverPhotoForPath(path, 3).src);
    srcs.push(leftoverPhotoForPath(path, 4).src);
    srcs.push(leftoverPhotoForPath(path, 5).src);
  }
  if (path.startsWith("/market-update")) {
    srcs.push(leftoverPhotoForPath(path, 0).src);
    srcs.push(leftoverPhotoForPath(path, 1).src);
    srcs.push(leftoverPhotoForPath(path, 2).src);
    srcs.push(leftoverPhotoForPath(path, 3).src);
    srcs.push(leftoverPhotoForPath(path, 4).src);
  }
  if (path === "/neighborhoods") {
    srcs.push(leftoverPhotoForPath(path, 0).src);
    srcs.push(leftoverPhotoForPath(path, 1).src);
  }
  if (
    path.startsWith("/neighborhoods/summerlin") ||
    path.startsWith("/neighborhoods/the-ridges") ||
    path.startsWith("/neighborhoods/southern-highlands") ||
    path.startsWith("/neighborhoods/skye-canyon") ||
    path.startsWith("/neighborhoods/centennial-hills") ||
    path.startsWith("/neighborhoods/green-valley") ||
    path.startsWith("/neighborhoods/henderson") ||
    path.startsWith("/neighborhoods/inspirada") ||
    path.startsWith("/neighborhoods/north-las-vegas") ||
    path.startsWith("/neighborhoods/mountains-edge")
  ) {
    srcs.push(leftoverPhotoForPath(path, 0).src);
  }
  if (path.startsWith("/about")) {
    srcs.push(leftoverPhotoForPath(path, 0).src);
    srcs.push(leftoverPhotoForPath(path, 1).src);
  }
  if (path === "/buyers") {
    srcs.push(leftoverPhotoForPath(path, 0).src);
  }
  if (path.startsWith("/faq")) {
    srcs.push(leftoverPhotoForPath(path, 0).src);
  }
  if (path.startsWith("/55-plus")) {
    srcs.push(
      fiftyFiveFaqPhotoForPath(path).src,
      fiftyFiveAmenityPhotoForPath(path).src
    );
  }
  if (path.startsWith("/buyers")) {
    srcs.push(buyerFaqPhotoForPath(path).src);
  }
  if (path.startsWith("/sellers") || path.startsWith("/home-valuation")) {
    srcs.push(sellerFaqPhotoForPath(path).src);
  }
  if (
    path.startsWith("/luxury") ||
    path.startsWith("/relocation") ||
    path.startsWith("/new-construction") ||
    path.startsWith("/investment")
  ) {
    srcs.push(intentFaqPhotoForPath(path).src);
  }
  if (
    path === "/" ||
    path.startsWith("/contact") ||
    path.startsWith("/why-berkshire") ||
    path.startsWith("/listings") ||
    path.startsWith("/google-business") ||
    path.startsWith("/market-report") ||
    path.startsWith("/market-insights") ||
    path.startsWith("/market-update")
  ) {
    srcs.push(supportFaqPhotoForPath(path).src);
  }
  if (path.startsWith("/faq")) {
    srcs.push(
      faqHubPhotoForCategory("bhhs").src,
      faqHubPhotoForCategory("buying").src,
      faqHubPhotoForCategory("selling").src,
      faqHubPhotoForCategory("investment").src,
      faqHubPhotoForCategory("relocating").src,
      faqHubPhotoForCategory("working").src
    );
  }
  return new Set(srcs);
}

const QUOTE_CANDIDATES: SitePhoto[] = [
  photos.agent,
  photos.consultation,
  photos.officeExterior,
  photos.office,
  photos.buyers,
  photos.sellers,
  photos.market,
  photos.homeHero,
  ...Object.values(photos),
];

/** Sixteenth still for expert-quote H2s — first unused quote-appropriate still. */
export function quotePhotoForPath(path: string): SitePhoto {
  const used = occupiedHeadingStills(path);
  for (const photo of QUOTE_CANDIDATES) {
    if (!used.has(photo.src)) return photo;
  }
  return photos.homeHero;
}
