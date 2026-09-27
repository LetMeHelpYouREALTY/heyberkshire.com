import { realscout } from "@/lib/contact";

export default function RealScoutSearch({
  agentId = realscout.agentEncodedId,
}: {
  agentId?: string;
}) {
  return (
    <div className="realscout-wrapper">
      <div
        dangerouslySetInnerHTML={{
          __html: `<realscout-simple-search agent-encoded-id="${agentId}"></realscout-simple-search>`,
        }}
      />
    </div>
  );
}
