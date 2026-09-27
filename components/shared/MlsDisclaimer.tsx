export default function MlsDisclaimer({ className = "" }: { className?: string }) {
  return (
    <p className={`text-slate-500 text-xs leading-relaxed ${className}`}>
      Listing information is provided by Greater Las Vegas Association of REALTORS®
      MLS and is deemed reliable but not guaranteed. IDX information is provided
      exclusively for consumers&apos; personal, non-commercial use. Property
      information is copyrighted by the listing broker and may not be reproduced
      without written permission. Equal Housing Opportunity.
    </p>
  );
}
