import Breadcrumbs, { type Crumb } from "@/components/shared/Breadcrumbs";

const SEGMENT_LABELS: Record<string, string> = {
  listings: "Las Vegas Homes for Sale",
  neighborhoods: "Neighborhoods",
  buyers: "Buyers",
  sellers: "Sellers",
  services: "Services",
  about: "About",
  contact: "Contact",
  faq: "FAQ",
  relocation: "Relocation",
  "home-valuation": "Home Valuation",
  "market-insights": "Market Insights",
  "market-report": "Market Report",
  "market-update": "Market Update",
  "investment-properties": "Investment Properties",
  "luxury-homes": "Luxury Homes",
  "luxury-homes-las-vegas": "Luxury Homes Las Vegas",
  "new-construction": "New Construction",
  "why-berkshire-hathaway": "Why Berkshire Hathaway",
  "google-business": "Google Business Profile",
  "security-policy": "Security Policy",
  "first-time-buyers": "First-Time Buyers",
  "california-relocator": "California Relocators",
  "divorce-probate": "Divorce & Probate",
  "move-up": "Move-Up Sellers",
  downsizing: "Downsizing",
  "55-plus-communities": "55+ Communities",
  summerlin: "Summerlin",
  henderson: "Henderson",
  "green-valley": "Green Valley",
  "the-ridges": "The Ridges",
  inspirada: "Inspirada",
  "southern-highlands": "Southern Highlands",
  "mountains-edge": "Mountain's Edge",
  "centennial-hills": "Centennial Hills",
  "north-las-vegas": "North Las Vegas",
  "skye-canyon": "Skye Canyon",
  "sun-city-anthem": "Sun City Anthem",
  "sun-city-summerlin": "Sun City Summerlin",
  "sun-city-aliante": "Sun City Aliante",
  "solera-anthem": "Solera at Anthem",
  "trilogy-summerlin": "Trilogy at Summerlin",
  "heritage-stonebridge": "Heritage at Stonebridge",
  "del-webb-lake-las-vegas": "Del Webb Lake Las Vegas",
};

function humanize(segment: string): string {
  const mapped = SEGMENT_LABELS[segment];
  if (mapped) return mapped;
  if (/^[A-Za-z0-9_-]{8,}$/.test(segment) && /[0-9]/.test(segment)) {
    return `Listing ${segment}`;
  }
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function crumbsFromPath(pathname: string): Crumb[] {
  const segments = pathname.split("/").filter(Boolean);
  const items: Crumb[] = [{ name: "Home", href: "/" }];
  let acc = "";
  for (const segment of segments) {
    acc += `/${segment}`;
    items.push({ name: humanize(segment), href: acc });
  }
  return items;
}

export default function AutoBreadcrumbs({ pathname }: { pathname: string }) {
  if (!pathname || pathname === "/") return null;
  const items = crumbsFromPath(pathname);
  return (
    <div className="pt-28 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Breadcrumbs items={items} />
        </div>
      </div>
    </div>
  );
}
