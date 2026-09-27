/**
 * Unique expert-quote interiors per page path.
 * Named pins and desk facts — not a swapped "local knowledge" template.
 * Fair Housing: square footage, amenities, named campuses, commute minutes.
 * Dated 2026-09-15.
 */

export type ExpertQuoteCopy = {
  h2: string;
  quote: string;
};

export const expertQuotes: Record<string, ExpertQuoteCopy> = {
  "/neighborhoods": {
    h2: "I will not let you pick a ZIP from the card grid",
    quote:
      "From Suite 100 we time one west loop and one Henderson loop. Summerlin is 10–15 minutes. Green Valley is 25–35. You compare parking, trees, and rec campuses — not a slogan. Call (702) 222-1964 with two ZIPs.",
  },
  "/neighborhoods/summerlin": {
    h2: "Which Summerlin village I drive first from Suite 100",
    quote:
      "I start in The Trails or Pueblo, then Downtown Summerlin if retail is on the brief. Red Rock trailheads are the same west clock. Palo Verde High School commute minutes are mapped to the listing before we leave 9406 W Lake Mead Blvd.",
  },
  "/neighborhoods/the-ridges": {
    h2: "Gate lists stay off the group text",
    quote:
      "Ridges appointments are booked from Suite 100 so the guard list is confirmed that morning. Typical run is 15–20 minutes. I do not text estate addresses on unsecured threads. Call (702) 222-1964 for a private gate window.",
  },
  "/neighborhoods/southern-highlands": {
    h2: "South-valley golf is its own I-15 block",
    quote:
      "Southern Highlands is 25–35 minutes via I-15 south. I group fairway lots and ridge streets so you are not recrossing the valley. Harry Reid International is the airport name. Janet Lundahl Elementary is mapped by address at ccsd.net/zoning.",
  },
  "/neighborhoods/skye-canyon": {
    h2: "Register at the desk before any Skye Canyon model row",
    quote:
      "Builder registration happens at Suite 100 first. Then we walk Skye Center and Floyd Lamb on one northwest loop. Do not add Downtown Summerlin on the same clock. Call (702) 222-1964 before the first model visit.",
  },
  "/neighborhoods/centennial-hills": {
    h2: "Arbor View commute minutes, then the 120-acre park",
    quote:
      "Centennial Hills is 15–20 minutes via US-95. I compare mountain-view streets near Centennial Hills Park with closer-in lots toward the hospital, then time Arbor View High School by address — not by a rating caption.",
  },
  "/neighborhoods/green-valley": {
    h2: "The District is the Henderson midpoint, not Downtown Summerlin",
    quote:
      "Green Valley is 25–35 minutes via I-215 east. 35-year street trees and The District are the point of the drive. Green Valley High School and Coronado High School are named campuses. We do not run a Summerlin retail day on the same afternoon.",
  },
  "/neighborhoods/henderson": {
    h2: "Two Henderson villages, one east afternoon",
    quote:
      "I pick Green Valley trees or Inspirada rec — not both plus Water Street on the first east day. Suite 100 is 25–35 minutes west. Square footage, HOA dues, and park acreage are the comparison points. Call (702) 222-1964 with the commute target.",
  },
  "/neighborhoods/inspirada": {
    h2: "Town Center pool before any builder model",
    quote:
      "Inspirada is 30–40 minutes from Suite 100. Walk the resort pool and trail loop before Toll Brothers or Lennar rows if you have not registered Dr. Jan. St. Rose Siena is the hospital pin on that Henderson clock.",
  },
  "/neighborhoods/north-las-vegas": {
    h2: "Aliante first when the ZIP is North Las Vegas",
    quote:
      "This is not a Summerlin retail swap. Aliante rec and Craig Road employers are the first pins. Legacy High School is mapped by street at ccsd.net/zoning. North Vista Hospital is the hospital check. Call (702) 222-1964.",
  },
  "/neighborhoods/mountains-edge": {
    h2: "Walk Exploration Peak before the mall caption",
    quote:
      "Exploration Peak is about 120 acres. I walk a trail before Mountains Edge Marketplace so the park is not a listing photo. Southern Hills Hospital is about 10 minutes. I-15/Blue Diamond is the commute pin from Suite 100.",
  },
  "/55-plus-communities": {
    h2: "HOA packets at the desk, clubhouses on the drive",
    quote:
      "Sun City Summerlin is 10–15 minutes. Anthem campuses are 30–35. We review occupancy rules at 9406 W Lake Mead Blvd before we drive. Do not tour four rec buildings and a Henderson clubhouse the same afternoon.",
  },
  "/55-plus-communities/sun-city-summerlin": {
    h2: "One rec building and one course — not 7,700 homes in a blur",
    quote:
      "Mountain Shadows, Sun Shadows, Pinnacle, and Desert Vista are four rec campuses. Highland Falls, Palm Valley, and Eagle Crest are three courses. I pick one of each per visit. Suite 100 is 10–15 minutes.",
  },
  "/55-plus-communities/sun-city-anthem": {
    h2: "Anthem Center first — 64,000 sq ft before any golf add-on",
    quote:
      "30–35 minutes from Suite 100. Anthem Center is the indoor/outdoor rec campus. Anthem Country Club and Revere Golf Club are named separately. McCullough Range views vary by block — measure from the listing.",
  },
  "/55-plus-communities/trilogy-summerlin": {
    h2: "Club restaurant and spa — not a four-building Sun City campus",
    quote:
      "Trilogy sits 10–20 minutes from Suite 100. Rec is clubhouse-scale: restaurant, spa, pool terrace. I do not mix this with a Henderson Anthem day. Call (702) 222-1964 to sequence the west-valley stop.",
  },
  "/55-plus-communities/heritage-stonebridge": {
    h2: "Staffed gate, then Downtown Summerlin",
    quote:
      "Heritage is about 1,100 homes, not 7,700. Vendor lists and guest rules stay in the HOA packet. After the gate we can add Downtown Summerlin on the same west clock. Codes stay off group texts.",
  },
  "/55-plus-communities/solera-anthem": {
    h2: "All-residents-55+ rules before the Solera clubhouse",
    quote:
      "Solera occupancy is all residents 55+, not HOPA 80/20. Rec is the Solera clubhouse, not the 64,000 sq ft Anthem Center unless the brief adds it. St. Rose / Henderson Hospital sit on the east clock.",
  },
  "/55-plus-communities/sun-city-aliante": {
    h2: "North Las Vegas rec — not a Summerlin clone",
    quote:
      "Aliante rec and golf sit with Craig Road employers. I do not pair this with Sun City Summerlin the same afternoon. Suite 100 is a west-valley start; the northwest loop is its own drive. Call (702) 222-1964.",
  },
  "/55-plus-communities/del-webb-lake-las-vegas": {
    h2: "Lake path at 35–45 minutes — not a west-valley add-on",
    quote:
      "MonteLago, the shoreline walk, and the Del Webb clubhouse are the pins. I do not add Sun City Summerlin on the same day. Measure the lake path from the listing, not the marketing aerial.",
  },
  "/": {
    h2: "Same-day routing starts at the Maps pin, not a call center",
    quote:
      "Buyer and seller appointments start at 9406 W Lake Mead Blvd, Suite 100. Summerlin first, Henderson second, so you are not crisscrossing I-15. Call or text (702) 222-1964. The office line on Google is (702) 500-1942.",
  },
  "/about": {
    h2: "License S.0197614.LLC appointments are at Suite 100",
    quote:
      "I do not route you through a call center. Walk in during posted hours or book Calendly. Bring pre-approval or an APN. Visitor parking faces W Lake Mead Blvd. Call (702) 222-1964 for a Sunday window.",
  },
  "/contact": {
    h2: "Walk-ins and Calendly showings use the same pin",
    quote:
      "Documents go to homes@heyberkshire.com. Do not send listing keys by unsecured email. Call or text (702) 222-1964. Office NAP matches Google Business: 9406 W Lake Mead Blvd, Suite 100.",
  },
  "/google-business": {
    h2: "Maps, GBP, and this page must say the same NAP",
    quote:
      "Berkshire Hathaway HomeServices Nevada Properties. 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Office (702) 500-1942. Client CTA (702) 222-1964. If a directory disagrees, we fix the directory — not this page.",
  },
  "/faq": {
    h2: "Bring a ZIP and a pre-approval to the live Q&A",
    quote:
      "FAQ copy is the desk version of the same questions. Named campuses and commute minutes replace slogans. Call (702) 222-1964. Suite 100 is 10 minutes from most Summerlin villages.",
  },
  "/services": {
    h2: "Buy, sell, 55+, and relocation paperwork share one desk",
    quote:
      "Each service meeting starts at Suite 100 so MLS, showing routes, and HOA packets use the same west-valley start. Call (702) 222-1964. Do not split the file across three offices.",
  },
  "/security-policy": {
    h2: "Showing access stays at Suite 100, not unsecured email",
    quote:
      "We do not collect listing keys by open email. Data and lockbox questions are handled at 9406 W Lake Mead Blvd. Call (702) 222-1964. License S.0197614.LLC.",
  },
  "/listings": {
    h2: "Save the RealScout results, then we sequence the tour",
    quote:
      "Live MLS search sits on RealScout. I sequence Summerlin, Henderson, or 55+ stops from Lake Mead Blvd so you are not hopscotching I-15. Call (702) 222-1964 with the saved-search link.",
  },
  "/home-valuation": {
    h2: "Bring the APN — we do not price from a Zestimate screenshot",
    quote:
      "Bring the APN or address to Suite 100. We pull comps here before we drive for photos and pricing. Call (702) 222-1964. Do not price from a Zestimate screenshot.",
  },
  "/new-construction": {
    h2: "Do not walk a model unescorted — register Dr. Jan first",
    quote:
      "Most builders require Dr. Jan on the first visit. Registration happens at Suite 100, then Skye Canyon, Inspirada, or Mountains Edge rows. Call (702) 222-1964 before you walk a model unescorted.",
  },
  "/buyers": {
    h2: "Pre-approval and first-tour routing at one desk",
    quote:
      "Search criteria and commute minutes are set at Suite 100 so you are not touring without a plan. Call (702) 222-1964. RealScout holds the live MLS; I hold the sequence.",
  },
  "/buyers/first-time-buyers": {
    h2: "Walk FHA and VA numbers at Suite 100 before any model row",
    quote:
      "We review program fit at Suite 100, then time a resale or builder row. Named campuses and commute minutes replace slogans. Call (702) 222-1964. North Las Vegas and Henderson entry prices are compared to the same desk math.",
  },
  "/buyers/california-relocator": {
    h2: "California sale proceeds vs Las Vegas ZIP targets",
    quote:
      "We compare your net to Summerlin vs Henderson vs North Las Vegas before a tour week. Nevada has no state income tax — that is a tax fact, not a slogan. Call (702) 222-1964 for a video intake from Suite 100.",
  },
  "/buyers/luxury-homes-las-vegas": {
    h2: "Gate codes stay off group texts",
    quote:
      "Ridges, Southern Highlands, and Lake Las Vegas windows are confirmed from Suite 100. I do not send luxury addresses on unsecured threads. Call (702) 222-1964 for a private showing block.",
  },
  "/sellers": {
    h2: "Day-one pricing from comps, not from a portal estimate",
    quote:
      "We pull comps at the desk, then go on-site for photos. Overpricing from a Zestimate costs days on market. Call (702) 222-1964 with the APN. 9406 W Lake Mead Blvd, Suite 100.",
  },
  "/sellers/move-up": {
    h2: "Your current house and the next ZIP share one tour clock",
    quote:
      "I map your current home and the next ZIP so both tours share Suite 100. Summerlin-to-Henderson moves are sequenced, not improvised. Call (702) 222-1964.",
  },
  "/sellers/downsizing": {
    h2: "List the larger home or tour 55+ the same day",
    quote:
      "Sun City Summerlin is 10–15 minutes from Suite 100. We can list photos in the morning and walk a rec campus after. Occupancy rules are reviewed at the desk first. Call (702) 222-1964.",
  },
  "/sellers/relocation": {
    h2: "One calendar for the Las Vegas sale and the destination purchase",
    quote:
      "BHHS destination agents are briefed from this office so the sale and the next purchase share a calendar. Call (702) 222-1964. Do not leave the file in two CRMs with no owner.",
  },
  "/sellers/divorce-probate": {
    h2: "Private file review by appointment — not a lobby conversation",
    quote:
      "Attorney contacts, access rules, and listing timing stay in a private file. Walk-ins for this work are by appointment. Call (702) 222-1964. We do not discuss case details in the reception area.",
  },
  "/relocation": {
    h2: "I will not crisscross I-15 four times on a tour week",
    quote:
      "Day one west-valley, day two east-valley, day three 55+ or builder rows if needed. I will not crisscross I-15 four times. Call (702) 222-1964. Start at 9406 W Lake Mead Blvd, Suite 100.",
  },
  "/investment-properties": {
    h2: "Check HOA rental caps at the desk before any investment loop",
    quote:
      "North Las Vegas, Henderson, and southwest ZIP clusters are not interchangeable. We check HOA rental caps at Suite 100 before we tour. Call (702) 222-1964 with the APN list.",
  },
  "/luxury-homes": {
    h2: "Ridges, Highlands, or Lake Las Vegas — pick the first gate",
    quote:
      "Photography and gate access are scheduled from Suite 100, not improvised on site. Square footage and HOA dues beat slogans. Call (702) 222-1964. Discretion on addresses is the default.",
  },
  "/why-berkshire-hathaway": {
    h2: "See marketing samples at Suite 100 before you sign",
    quote:
      "I show marketing samples and referral paths at 9406 W Lake Mead Blvd. The brand is Berkshire Hathaway HomeServices Nevada Properties. Call (702) 222-1964. License S.0197614.LLC.",
  },
  "/market-insights": {
    h2: "Apply January 2026 numbers to your ZIP, then we drive",
    quote:
      "Median and days-on-market snapshots live on this page. The decision needs your address. Call (702) 222-1964. We apply the numbers at Suite 100, then drive.",
  },
  "/market-update": {
    h2: "A metro headline is not a CMA for your address",
    quote:
      "Weekly stats are a snapshot. I will not price your house from a metro headline. Call (702) 222-1964. Bring the APN to 9406 W Lake Mead Blvd, Suite 100.",
  },
  "/market-report": {
    h2: "Full CMA with the property address in the room",
    quote:
      "The dark stats band is a snapshot. Comps are pulled at the desk with your APN. Call (702) 222-1964. Then we drive for photos if you are listing.",
  },
};
