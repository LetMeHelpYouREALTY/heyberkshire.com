/**
 * Unique FAQ interiors for remaining desk/support pages: contact, BHHS
 * brand, listings search, GBP/Maps, and the three market URLs.
 * Questions are desk/tour/NAP intent, not swapped generic templates.
 * January 2026 figures already published on these pages stay in answers
 * only. Fair Housing: named campuses and commute minutes, no "best
 * area" or "desirable." Dated 2026-09-15.
 */

export type SupportFaqItem = {
  q: string;
  a: string;
};

export type SupportFaqCopy = {
  h2: string;
  items: [SupportFaqItem, SupportFaqItem, SupportFaqItem, SupportFaqItem];
};

export const supportFaqs: Record<string, SupportFaqCopy> = {
  "/": {
    h2: "Desk hours, RealScout, then the first drive — home FAQ",
    items: [
      {
        q: "Where does a same-day Summerlin-then-Henderson tour actually start?",
        a: "At 9406 W Lake Mead Blvd, Suite 100. Summerlin first (10–15 minutes), Henderson second (25–35 minutes via I-215 east). Call or text (702) 222-1964. Office/GBP line is (702) 500-1942.",
      },
      {
        q: "Is the live MLS search on this homepage or on /listings?",
        a: "RealScout widgets appear here and on /listings. Matching stays in RealScout; we sequence the drive from this desk. Agent ID QWdlbnQtMjI1MDUw. Call (702) 222-1964 after you save a list.",
      },
      {
        q: "What hours is Suite 100 open for a walk-in?",
        a: "Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. License S.0197614.LLC. Directions and Google Reviews are in the footer on every page.",
      },
      {
        q: "Are buyer-broker fees posted as a number on the homepage?",
        a: "No. Buyer representation is typically paid by the listing side when the listing agreement allows it. Seller commission is negotiated in writing. Call (702) 222-1964 for a cost walkthrough before you sign.",
      },
    ],
  },
  "/contact": {
    h2: "Walk-in, Calendly, or call — how Suite 100 actually answers",
    items: [
      {
        q: "Can I walk into Suite 100 without a Calendly hold?",
        a: "Yes during posted hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment. Address is 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Call or text (702) 222-1964 if you are already in the parking lot.",
      },
      {
        q: "What do I bring to a first desk meeting?",
        a: "Photo ID, lender contact if you have one, and target ZIPs. We map commute minutes before the first tour. Email homes@heyberkshire.com for documents — do not send listing keys by unsecured email.",
      },
      {
        q: "How fast do you reply to a call or text vs email?",
        a: "Call or text (702) 222-1964 for the fastest reply during posted hours. This page last published a typical two-hour window for calls, texts, and emails during business hours. Office/GBP line is (702) 500-1942.",
      },
      {
        q: "Is the first consultation billed?",
        a: "No. Desk time at Suite 100 is not billed as a consulting hour. Buyer-broker and listing compensation are written later, not at the door. Call (702) 222-1964.",
      },
    ],
  },
  "/why-berkshire-hathaway": {
    h2: "Who photographs, who writes remarks, who answers — BHHS at this desk",
    items: [
      {
        q: "Where do I see BHHS listing samples before I sign?",
        a: "At 9406 W Lake Mead Blvd, Suite 100. Brand questions are answered on-site: referral network, photography samples, and who actually answers the phone. Call (702) 222-1964.",
      },
      {
        q: "Is Berkshire Hathaway HomeServices owned by Warren Buffett?",
        a: "BHHS is part of HSF Affiliates LLC, a joint venture of Berkshire Hathaway Inc. and HomeServices of America. The brand carries the Berkshire Hathaway name. Local work is still Dr. Jan Duffy, license S.0197614.LLC, BHHS Nevada Properties.",
      },
      {
        q: "Is BHHS commission higher than other Las Vegas brokerages?",
        a: "No posted rate on this page. Commission is negotiated in writing at the listing or buyer-broker appointment. We walk every cost at Suite 100. Call (702) 222-1964.",
      },
      {
        q: "Can a BHHS agent in another city brief this office on my outbound or inbound move?",
        a: "Yes. Destination and origin agents are briefed from this desk so both contracts share a calendar. Named campuses and commute minutes are mapped here, not as slogans. Call (702) 222-1964.",
      },
    ],
  },
  "/listings": {
    h2: "Save the MLS list here, then sequence the drive from Lake Mead Blvd",
    items: [
      {
        q: "Is this page the live MLS search or a buyer-process explainer?",
        a: "Live MLS search. RealScout widgets on this URL use agent ID QWdlbnQtMjI1MDUw. Buyer-process copy lives at /buyers. Filter beds, baths, and square footage, save the list, then call (702) 222-1964.",
      },
      {
        q: "What inventory snapshot did this page last publish for January 2026?",
        a: "This page last published about 2.1 months of inventory. That is a valley snapshot, not a guarantee that a specific street will see multiple offers. Confirm live MLS the week you tour.",
      },
      {
        q: "How do we sequence Summerlin vs Henderson after I save results?",
        a: "Summerlin first (10–15 minutes from Suite 100), Henderson second (25–35 minutes via I-215 east). We will not tour 12 ZIPs in one day. Named campuses we time by street: Palo Verde High School, Coronado High School. No ratings. Call (702) 222-1964.",
      },
      {
        q: "Where are HOA dues checked before I write an offer from this search?",
        a: "At Suite 100 or on the listing packet before the offer. This page last published HOA ranges from about $25/month for basic maintenance to $400+/month for guard-gated product, with many streets in a $50–$150 band. Confirm the packet for the APN — not this range.",
      },
    ],
  },
  "/google-business": {
    h2: "Maps, GBP, and this URL must show the same NAP",
    items: [
      {
        q: "Which phone number matches Google Business vs the client CTA?",
        a: "Office/GBP line is (702) 500-1942. Client CTA on this site is (702) 222-1964. Address is 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134. Hours: Monday–Friday 9am–6pm, Saturday 10am–4pm, Sunday by appointment.",
      },
      {
        q: "How do I leave a Google review that actually helps the Maps listing?",
        a: "Use the View Google Reviews button on this page. Mention the transaction type and the street or village you toured — not a protected-class slogan. Call (702) 222-1964 if you cannot find the listing.",
      },
      {
        q: "Do GBP posts and photos on Google match this website?",
        a: "They should. This URL exists so Maps, GBP, and the website say the same name, address, hours, and office line. If a post or photo is off, tell the desk. Call (702) 222-1964.",
      },
      {
        q: "Can I get directions and a same-day desk visit from this page?",
        a: "Yes. Directions, Call, and Reviews buttons are on this URL and in the footer. Walk-ins during posted hours start at Suite 100. Call or text (702) 222-1964 if you are already in the parking lot.",
      },
    ],
  },
  "/market-report": {
    h2: "January 2026 snapshot vs a CMA on your APN — report FAQ",
    items: [
      {
        q: "Is the dark stats band a live quote for my address?",
        a: "No. Bring the APN to 9406 W Lake Mead Blvd, Suite 100. The report is a January 2026 snapshot. The decision needs your address. Call (702) 222-1964.",
      },
      {
        q: "What median and YoY figures did this report last publish?",
        a: "This page last published a Las Vegas median near $450,000 and about 4.2% year-over-year. Henderson near $485,000 and Summerlin near $625,000 appear on the same snapshot. Those are not a CMA on one APN.",
      },
      {
        q: "What inventory and days-on-market snapshot did this report last publish?",
        a: "About 2.1 months of inventory, with well-priced listings often cited near 28 days and $1 million-plus product often cited near 45+ days. Confirm live MLS the week you list or offer.",
      },
      {
        q: "What conventional-rate range did this report last publish?",
        a: "This page last published conventional rates around 6.5%, with some builder buydowns advertised into a low-5% effective range. Rates move. Confirm with the lender we introduce — not this snapshot.",
      },
    ],
  },
  "/market-insights": {
    h2: "Five forces on this page vs comps for your ZIP — insights FAQ",
    items: [
      {
        q: "Where are these 2026 forces applied to a specific ZIP?",
        a: "At Suite 100. California inbound demand, data-center hiring, no state income tax, new-construction inventory, and mortgage-rate ranges are briefing notes — not a forecast letter. Call (702) 222-1964.",
      },
      {
        q: "What median and DOM did the insights page last publish for January 2026?",
        a: "About $450,000 median and 28 days on market. That is a valley snapshot. We will not invent a 2027 price. Bring the address.",
      },
      {
        q: "Does California equity stretch the same in every Las Vegas ZIP?",
        a: "No. Prior copy put typical California housing and living costs about 40–60% higher than comparable Las Vegas product, with inbound demand showing up more in Summerlin, Henderson, and luxury villages than in every ZIP equally. Still a CMA per APN.",
      },
      {
        q: "How do I get a ZIP-level read instead of the valley average?",
        a: "Book the desk or call (702) 222-1964. We map commute minutes, HOA dues, and recent comps for the villages you name — Palo Verde High School vs Coronado High School by street, not ratings.",
      },
    ],
  },
  "/market-update": {
    h2: "This week's MLS print vs your APN — weekly-update FAQ",
    items: [
      {
        q: "What week does this update cover, and where do I get same-week comps?",
        a: "This update covers the week of January 20, 2026. Call (702) 222-1964 for same-week comps in your ZIP. Desk: 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134.",
      },
      {
        q: "What valley print did that week last publish?",
        a: "Median sale price $452,500 with 847 closings. A one-week move is noise until it stacks. We compare your home to the last 90 days of sold comps before you set a list price.",
      },
      {
        q: "What Summerlin, Henderson, and North Las Vegas DOM did that week last publish?",
        a: "Summerlin about 21 days at a $628,000 median. Henderson about 23 days at $487,500. North Las Vegas about 31 days at $387,000. Those are weekly prints, not a live quote on your APN.",
      },
      {
        q: "Is the inbox signup on this page a blast, or can it attach to my listing?",
        a: "If you want the update applied to a listing, send the APN to the desk. Call (702) 222-1964. Do not treat a weekly bump as an automatic list-now order.",
      },
    ],
  },
};
