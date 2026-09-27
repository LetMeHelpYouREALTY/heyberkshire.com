import { realscout } from "@/lib/contact";

export default function RealScoutHomeValue() {
  return (
    <div
      className="w-full"
      dangerouslySetInnerHTML={{
        __html: `<realscout-home-value agent-encoded-id="${realscout.agentEncodedId}"></realscout-home-value>`,
      }}
    />
  );
}
