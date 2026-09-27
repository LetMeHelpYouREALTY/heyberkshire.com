/**
 * Unique FAQ interiors per 55+ campus path.
 * Questions are tour/HOA/HOPA/commute intent, not a campus-swapped
 * "What is the price range at X?" template. January 2026 prices already
 * published on these pages stay in answers only. Fair Housing: no
 * "good investment," guest-as-familial-status marketing, or school ratings.
 * Dated 2026-09-15.
 */

export type FiftyFiveFaqItem = {
  q: string;
  a: string;
};

export type FiftyFiveFaqCopy = {
  h2: string;
  items: [FiftyFiveFaqItem, FiftyFiveFaqItem, FiftyFiveFaqItem, FiftyFiveFaqItem];
};

export const fiftyFiveFaqs: Record<string, FiftyFiveFaqCopy> = {
  "/55-plus-communities": {
    h2: "Which 55+ campus do we time first from Suite 100?",
    items: [
      {
        q: "Which 55+ campus do we time first from 9406 W Lake Mead Blvd?",
        a: "Sun City Summerlin is 10–15 minutes from Suite 100. Anthem campuses are 30–35 minutes. We review HOA packets and HOPA occupancy rules at the desk before we drive to clubhouses. Call (702) 222-1964.",
      },
      {
        q: "What HOPA occupancy rule do you review before a clubhouse tour?",
        a: "HOPA requires at least 80% of occupied units to have one resident 55 or older. Most campuses allow a younger spouse. Solera at Anthem requires all residents 55+ — confirm that packet in writing. Berkshire Hathaway HomeServices Nevada Properties is at 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134.",
      },
      {
        q: "What January 2026 price band did this hub last publish?",
        a: "This hub last published a campus span of roughly $280,000–$1.2 million depending on the 55+ campus. HOA figures on individual pages range about $140–$350/month plus any separate golf dues. Confirm the listing packet and live MLS before an offer.",
      },
      {
        q: "Is Solera occupancy the same as Sun City Summerlin?",
        a: "No. Solera requires all residents 55+. Sun City Summerlin follows HOPA 80/20 with a younger-spouse rule in the HOA docs. Guest-stay limits are also in that packet — we do not publish a one-size guest slogan. Call (702) 222-1964.",
      },
    ],
  },
  "/55-plus-communities/sun-city-summerlin": {
    h2: "Three golf campuses, four rec centers — west-valley FAQ from Suite 100",
    items: [
      {
        q: "Can we preview rec centers and golf campuses in one west-valley afternoon?",
        a: "Yes. Sun City Summerlin is 10–15 minutes from 9406 W Lake Mead Blvd. Highland Falls, Palm Valley, and Eagle Crest plus Mountain Shadows, Sun Shadows, Pinnacle, and Desert Vista rec centers can be sequenced the same afternoon. Call (702) 222-1964.",
      },
      {
        q: "What January 2026 price and HOA range was published for Sun City Summerlin?",
        a: "Homes typically list from about $320,000 to $850,000 as of January 2026. HOA dues are about $155–$195 per month and include rec-center access rules, golf access rules, and common-area maintenance. Confirm the current packet.",
      },
      {
        q: "How many homes and rec centers are on this campus?",
        a: "About 7,700 homes with three golf courses, four recreation centers, and 100+ clubs. Mountain View Hospital sits adjacent to the campus. We walk one rec center and one golf campus before writing offers.",
      },
      {
        q: "Do Sun City Summerlin tours start at Suite 100 or at a rec center?",
        a: "Suite 100 first so age-restriction and HOA questions are on paper. Then we pick the rec center you will actually use. Call (702) 222-1964. Register before walking model streets.",
      },
    ],
  },
  "/55-plus-communities/sun-city-anthem": {
    h2: "Anthem Center and McCullough-range streets — not a Summerlin 55+ FAQ",
    items: [
      {
        q: "Is Sun City Anthem a same-morning add-on after Summerlin 55+?",
        a: "No. Sun City Anthem is 30–35 minutes from the Lake Mead Blvd pin. Anthem Center, golf, and upper-elevation streets are one Henderson 55+ block — not mixed with Summerlin 55+ the same morning. Call (702) 222-1964.",
      },
      {
        q: "What January 2026 price and HOA range was published for Sun City Anthem?",
        a: "This page last published about $350,000 to $1.2 million. Monthly HOA is about $180–$230 depending on section and home type. Liberty vs Heritage vs Eagle's Landing is a street-level comparison, not a slogan. Confirm live MLS.",
      },
      {
        q: "Which golf campuses do you time on an Anthem 55+ block?",
        a: "Anthem Country Club (members-only) and the adjacent Revere Golf Club (public) are the two names we time. Discount and tee-time rules are in the HOA and club packets, not a website average.",
      },
      {
        q: "What occupancy rule is in the Sun City Anthem HOA packet?",
        a: "At least one resident 55 or older per home, with remaining occupancy limits in the HOA docs we review at Suite 100. We do not substitute a marketing line for that packet. Call (702) 222-1964.",
      },
    ],
  },
  "/55-plus-communities/trilogy-summerlin": {
    h2: "Trilogy clubhouse, spa, and Shea rows — 12–18 minutes from the office",
    items: [
      {
        q: "How far is the Trilogy clubhouse from Suite 100?",
        a: "Trilogy at Summerlin is 12–18 minutes from 9406 W Lake Mead Blvd. Clubhouse, spa, and Shea Homes plan rows sit on the same west-valley side as the office — no Henderson freeway tax. Call (702) 222-1964.",
      },
      {
        q: "What January 2026 price and HOA range was published for Trilogy?",
        a: "Homes typically range from about $500,000 to $1.1 million as of January 2026. Monthly HOA is about $250–$350 and includes the clubhouse, spa, and dining amenities. Confirm the current packet.",
      },
      {
        q: "What is on the Trilogy clubhouse campus besides the pool terrace?",
        a: "Farm-to-table dining, spa, fitness, and contemporary floor plans on the Summerlin west side near Red Rock Canyon. Downtown Summerlin retail is a short hop after the clubhouse stop.",
      },
      {
        q: "Do we register at the office before walking Shea plan rows?",
        a: "Yes. Register for a private tour at Suite 100 so the amenity you pay HOA for is the first stop, then walk plans. Berkshire Hathaway HomeServices Nevada Properties holds the listing or buyer paperwork at 9406 W Lake Mead Blvd, Suite 100.",
      },
    ],
  },
  "/55-plus-communities/heritage-stonebridge": {
    h2: "Staffed gate and Downtown Summerlin — a 12–18 minute west-valley FAQ",
    items: [
      {
        q: "Do Heritage showings start with a gate list from Suite 100?",
        a: "Yes. Heritage at Stonebridge is 12–18 minutes from the GBP office. We put you on the guest list from 9406 W Lake Mead Blvd, Suite 100 so arrival is not improvised. Call (702) 222-1964.",
      },
      {
        q: "What January 2026 price and HOA range was published for Heritage at Stonebridge?",
        a: "Homes typically range from about $400,000 to $750,000 as of January 2026. Monthly HOA is about $175–$220. Confirm live MLS and the current packet.",
      },
      {
        q: "How is Heritage different from a 7,700-home Sun City campus?",
        a: "It is a smaller 55+ campus with a staffed gate and a Summerlin ZIP next to Downtown Summerlin retail — not a four-rec-center mega campus. Age-restriction and guest rules are reviewed at Suite 100.",
      },
      {
        q: "Is Downtown Summerlin on the same hop as the Heritage gate?",
        a: "Yes. The staffed gate and Downtown Summerlin shops are a short west-valley hop after the office. That is the comparison if you want 55+ with a gate, not a 7,700-home campus.",
      },
    ],
  },
  "/55-plus-communities/solera-anthem": {
    h2: "1,200 homes, all-residents-55+ — Solera questions that are not a Sun City FAQ",
    items: [
      {
        q: "Is Solera all-residents-55+ or HOPA 80/20?",
        a: "All residents must be 55+ at Solera at Anthem. Confirm the HOA occupancy rule in writing at Suite 100 before the 30–35 minute Henderson drive. Call (702) 222-1964.",
      },
      {
        q: "What January 2026 price and HOA range was published for Solera at Anthem?",
        a: "Homes typically range from about $380,000 to $650,000 as of January 2026. Monthly HOA is about $170–$210. Confirm the current packet.",
      },
      {
        q: "How many homes sit behind the Solera staffed gate?",
        a: "About 1,200 homes in Henderson, with a boutique clubhouse, resort pool, and fitness — not a 7,000-home rec campus. That size is the comparison to Sun City Anthem.",
      },
      {
        q: "Do we tour Solera with Sun City Anthem the same Henderson afternoon?",
        a: "Only if that is the brief. Solera is toured with nearby Anthem parks as a 30–35 minute block from Suite 100. We do not hopscotch the whole valley. Call (702) 222-1964.",
      },
    ],
  },
  "/55-plus-communities/sun-city-aliante": {
    h2: "Aliante rec, 18-hole course, Craig Road — a north 55+ FAQ",
    items: [
      {
        q: "Is Sun City Aliante sequenced as a north loop from Suite 100?",
        a: "Yes. Sun City Aliante is 20–25 minutes from 9406 W Lake Mead Blvd. The golf course and rec campus sit next to Aliante retail for a compact north tour. Call (702) 222-1964.",
      },
      {
        q: "What January 2026 price and HOA range was published for Sun City Aliante?",
        a: "Homes typically range from about $280,000 to $550,000 as of January 2026. Monthly HOA is about $140–$175, among the lowest Sun City dues published on this site. Confirm the current packet.",
      },
      {
        q: "What sits next to the rec campus besides the 18-hole course?",
        a: "Aliante Casino and the retail strip are adjacent. Desert-hills backdrop on many streets. Pools, fitness, and 100+ clubs are on the rec campus. We time Craig Road and I-15 if you still work.",
      },
      {
        q: "Do we add Henderson 55+ the same day as Aliante?",
        a: "No. This is a north 55+ loop. Henderson 55+ is a separate 30–35 minute east block. Mixing both in one morning is the freeway tax we avoid.",
      },
    ],
  },
  "/55-plus-communities/del-webb-lake-las-vegas": {
    h2: "Lake-adjacent Del Webb as an east-Henderson half day — not a Summerlin FAQ",
    items: [
      {
        q: "Why is Del Webb at Lake Las Vegas an east-Henderson half day?",
        a: "It is 35–45 minutes from the office pin. Lake-adjacent plans and Reflection Bay golf are blocked as an east-Henderson half day so you are not mixing Summerlin 55+ into the same morning. Call (702) 222-1964.",
      },
      {
        q: "What January 2026 price and HOA range was published for Del Webb at Lake Las Vegas?",
        a: "Homes typically range from about $400,000 to $900,000 as of January 2026. Monthly HOA is about $200–$280. Dock and golf rules are in the packet reviewed at Suite 100. Confirm live MLS.",
      },
      {
        q: "What do we time before floor plans — shoreline or golf?",
        a: "Shoreline and golf setting first, then interiors. The longer drive is the trade for water and golf context. Start at 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134.",
      },
      {
        q: "Do we mix Summerlin 55+ into a Lake Las Vegas morning?",
        a: "No. That recrosses the valley. Book Del Webb as its own east-Henderson half day, then a west-valley 55+ afternoon on a different date if you want both.",
      },
    ],
  },
};
