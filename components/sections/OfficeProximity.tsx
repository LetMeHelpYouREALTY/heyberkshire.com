import { ctaPhone, googleReviewsUrl, maps, nap, officePhone } from "@/lib/contact";

type PlaceDrive = {
  place: string;
  driveMinutes: string;
  note: string;
};

const byPath: Record<string, PlaceDrive> = {
  "/neighborhoods/summerlin": {
    place: "Summerlin",
    driveMinutes: "10–15 minutes",
    note: "Village tours in The Trails, Pueblo, and Red Rock Country Club can start the same afternoon as an office meeting.",
  },
  "/neighborhoods/the-ridges": {
    place: "The Ridges",
    driveMinutes: "15–20 minutes",
    note: "Guard-gate check-in is coordinated in advance so estate showings stay on schedule.",
  },
  "/neighborhoods/southern-highlands": {
    place: "Southern Highlands",
    driveMinutes: "25–35 minutes via I-15 south",
    note: "Golf-course and ridge-top listings are typically grouped into one south-valley tour block.",
  },
  "/neighborhoods/skye-canyon": {
    place: "Skye Canyon",
    driveMinutes: "20–25 minutes via the 215",
    note: "New-construction model rows and resale streets can be seen in one northwest loop.",
  },
  "/neighborhoods/centennial-hills": {
    place: "Centennial Hills",
    driveMinutes: "15–20 minutes via US-95",
    note: "Mountain-view streets near Floyd Lamb Park are a short hop from the office pin.",
  },
  "/neighborhoods/green-valley": {
    place: "Green Valley",
    driveMinutes: "25–35 minutes via I-215 east",
    note: "The District at Green Valley Ranch is a practical midpoint for Henderson listing tours.",
  },
  "/neighborhoods/inspirada": {
    place: "Inspirada",
    driveMinutes: "30–40 minutes",
    note: "Amenity-center and builder-row tours are scheduled as a south Henderson block.",
  },
  "/neighborhoods/henderson": {
    place: "Henderson",
    driveMinutes: "25–35 minutes",
    note: "Green Valley, Anthem, Inspirada, and Water Street stops are planned from the same office start.",
  },
  "/neighborhoods/mountains-edge": {
    place: "Mountains Edge",
    driveMinutes: "20–30 minutes via the southwest Beltway",
    note: "Exploration Peak trailheads and resale streets fit a single southwest loop.",
  },
  "/neighborhoods/north-las-vegas": {
    place: "North Las Vegas",
    driveMinutes: "20–25 minutes via US-95 / I-15",
    note: "Aliante, Craig Road employment corridors, and new-construction villages are grouped together.",
  },
  "/55-plus-communities/sun-city-summerlin": {
    place: "Sun City Summerlin",
    driveMinutes: "10–15 minutes",
    note: "Three golf campuses and four recreation centers can be previewed without a long freeway run.",
  },
  "/55-plus-communities/sun-city-anthem": {
    place: "Sun City Anthem",
    driveMinutes: "30–35 minutes",
    note: "Anthem Center and upper-elevation streets are scheduled as a Henderson 55+ block.",
  },
  "/55-plus-communities/trilogy-summerlin": {
    place: "Trilogy at Summerlin",
    driveMinutes: "12–18 minutes",
    note: "Clubhouse, spa, and Shea plan rows sit on the same west-valley side as the office.",
  },
  "/55-plus-communities/heritage-stonebridge": {
    place: "Heritage at Stonebridge",
    driveMinutes: "12–18 minutes",
    note: "The 24/7 gate and Downtown Summerlin retail are a short west-valley hop from Lake Mead Blvd.",
  },
  "/55-plus-communities/solera-anthem": {
    place: "Solera at Anthem",
    driveMinutes: "30–35 minutes",
    note: "This smaller 55+ campus is toured with nearby Anthem parks rather than a valley-wide hopscotch.",
  },
  "/55-plus-communities/sun-city-aliante": {
    place: "Sun City Aliante",
    driveMinutes: "20–25 minutes",
    note: "The 18-hole course and rec campus sit next to the Aliante retail strip for a compact north tour.",
  },
  "/55-plus-communities/del-webb-lake-las-vegas": {
    place: "Del Webb at Lake Las Vegas",
    driveMinutes: "35–45 minutes",
    note: "Lake-adjacent plans and Reflection Bay golf are blocked as an east-Henderson half day.",
  },
  "/": {
    place: "Las Vegas, Henderson, and Summerlin tours",
    driveMinutes: "same day from this pin",
    note: "Buyer and seller appointments start at the west-valley office, then loop Summerlin first and Henderson second.",
  },
  "/about": {
    place: "an in-person consult with Dr. Jan Duffy",
    driveMinutes: "you are already at the pin",
    note: "License S.0197614.LLC appointments are held at Suite 100 unless we meet at a listing.",
  },
  "/contact": {
    place: "the contact desk",
    driveMinutes: "on-site",
    note: "Walk-ins during posted hours are welcome; Calendly showings can start here and continue to the property.",
  },
  "/google-business": {
    place: "the Google Business Profile address",
    driveMinutes: "this is the Maps pin",
    note: "Name, address, and office line (702) 500-1942 match the Google listing; call or text (702) 222-1964 for a same-day reply.",
  },
  "/faq": {
    place: "a live Q&A",
    driveMinutes: "10 minutes from most Summerlin villages",
    note: "Bring loan pre-approval and a target ZIP; we map commute minutes to listings from this desk.",
  },
  "/services": {
    place: "a service consult (buy, sell, 55+, relocation)",
    driveMinutes: "on-site",
    note: "Each service meeting starts here so paperwork, MLS, and showing routes use the same west-valley start.",
  },
  "/security-policy": {
    place: "privacy questions",
    driveMinutes: "email or office visit",
    note: "Data and showing-access questions are handled at Suite 100; we do not collect listing keys by unsecured email.",
  },
  "/listings": {
    place: "live MLS search follow-up",
    driveMinutes: "same-day tours from this pin",
    note: "Save the RealScout results, then we sequence Summerlin, Henderson, or 55+ stops from Lake Mead Blvd.",
  },
  "/home-valuation": {
    place: "a CMA review",
    driveMinutes: "on-site or at your property",
    note: "Bring the APN or address; comps are pulled here before we drive to the house for photos and pricing.",
  },
  "/new-construction": {
    place: "builder registration",
    driveMinutes: "before any model-home visit",
    note: "Register Dr. Jan as your buyer agent at this office first—most builders require it on the first visit.",
  },
  "/buyers": {
    place: "buyer-agent onboarding",
    driveMinutes: "on-site",
    note: "Pre-approval, search criteria, and first-tour routing are set here so you are not touring without a plan.",
  },
  "/buyers/first-time-buyers": {
    place: "first-time buyer paperwork",
    driveMinutes: "on-site",
    note: "FHA, VA, and Nevada down-payment programs are reviewed at this desk before we schedule model or resale tours.",
  },
  "/buyers/california-relocator": {
    place: "California-to-Nevada intake",
    driveMinutes: "video or on-site",
    note: "We compare your California sale proceeds to Las Vegas ZIP targets, then schedule a concentrated tour week from this office.",
  },
  "/buyers/luxury-homes-las-vegas": {
    place: "private luxury showings",
    driveMinutes: "15–20 minutes to The Ridges",
    note: "Gate codes and off-market times are confirmed here; we do not send luxury addresses over unsecured text threads.",
  },
  "/sellers": {
    place: "listing appointment prep",
    driveMinutes: "we come to your house after this brief",
    note: "Pricing, photos, and BHHS marketing are scoped at Suite 100, then we go on-site for the CMA walkthrough.",
  },
  "/sellers/move-up": {
    place: "sale-and-purchase timing",
    driveMinutes: "two stops from this pin",
    note: "We map your current home and your next ZIP so both tours share one west-valley start.",
  },
  "/sellers/downsizing": {
    place: "downsize and 55+ options",
    driveMinutes: "10–15 minutes to Sun City Summerlin",
    note: "List the larger home first or tour 55+ campuses the same day—both start from Lake Mead Blvd.",
  },
  "/sellers/relocation": {
    place: "outbound sale coordination",
    driveMinutes: "on-site plus destination agent call",
    note: "BHHS destination agents are briefed from this office so Las Vegas closing dates line up with your next city.",
  },
  "/sellers/divorce-probate": {
    place: "confidential file review",
    driveMinutes: "by appointment at Suite 100",
    note: "Court dates, attorney contacts, and showing access are handled here—not in a public lobby conversation.",
  },
  "/relocation": {
    place: "inbound relocation planning",
    driveMinutes: "tour week from this pin",
    note: "We build a three-day Summerlin-then-Henderson itinerary so you are not crisscrossing the valley.",
  },
  "/investment-properties": {
    place: "rental and cap-rate review",
    driveMinutes: "on-site plus area drive",
    note: "Rent comps and HOA rental rules are checked here before we tour North Las Vegas, Henderson, or southwest ZIP clusters.",
  },
  "/luxury-homes": {
    place: "luxury listing or search intake",
    driveMinutes: "15–35 minutes to Ridges, Highlands, or Lake Las Vegas",
    note: "Marketing or private-search scope is set at the office so photography and gate access are not improvised on site.",
  },
  "/why-berkshire-hathaway": {
    place: "brand and representation questions",
    driveMinutes: "on-site",
    note: "BHHS network referrals and listing marketing samples are shown at Suite 100 before you commit to a listing agreement.",
  },
  "/market-insights": {
    place: "market briefing",
    driveMinutes: "on-site",
    note: "January 2026 inventory, days on market, and ZIP-level notes are walked through here, then applied to your search or listing.",
  },
  "/market-update": {
    place: "this week's numbers review",
    driveMinutes: "on-site or phone from this desk",
    note: "Weekly stats are interpreted against your address or buyer criteria—not as a valley-wide average only.",
  },
  "/market-report": {
    place: "full CMA and report review",
    driveMinutes: "on-site",
    note: "Bring the property address; we pull comps at this desk and map them to your next step.",
  },
  "/neighborhoods": {
    place: "neighborhood comparison",
    driveMinutes: "Summerlin 10–15 min, Henderson 25–35 min",
    note: "We pick two contrasting areas (for example Summerlin vs Green Valley) and tour them from this west-valley start.",
  },
  "/55-plus-communities": {
    place: "55+ campus comparison",
    driveMinutes: "Sun City Summerlin 10–15 min, Anthem 30–35 min",
    note: "Age-restriction rules and HOA packets are reviewed here before we drive to clubhouses.",
  },
};

type OfficeProximityProps = {
  path: string;
};

export default function OfficeProximity({ path }: OfficeProximityProps) {
  const row = byPath[path];
  if (!row) return null;

  return (
    <aside className="max-w-4xl mx-auto mb-16 rounded-xl border border-slate-200 bg-slate-50 p-6 md:p-8">
      <h2 className="text-2xl font-bold text-slate-900 mb-3">
        Drive time from {nap.street} to {row.place}
      </h2>
      <p className="text-slate-700 mb-4">
        Showings start from Berkshire Hathaway HomeServices Nevada Properties at {nap.fullAddress}.
        Typical drive to {row.place} is {row.driveMinutes}. {row.note}
      </p>
      <p className="text-sm text-slate-600 mb-4">
        Office (matches Google Business): {officePhone.display}. Call or text {ctaPhone.display}. Hours:
        Mon–Fri 9am–6pm, Sat 10am–4pm, Sunday by appointment.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <a
          href={ctaPhone.href}
          className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700"
        >
          Call {ctaPhone.display}
        </a>
        <a
          href={maps.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 rounded-md border border-slate-300 text-slate-900 font-semibold hover:bg-white"
        >
          Directions to the office
        </a>
        <a
          href={maps.placeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 rounded-md border border-slate-300 text-slate-900 font-semibold hover:bg-white"
        >
          Open in Google Maps
        </a>
        <a
          href={googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center min-h-[44px] px-4 py-2 rounded-md border border-slate-300 text-slate-900 font-semibold hover:bg-white"
        >
          View Google Reviews
        </a>
      </div>
    </aside>
  );
}
