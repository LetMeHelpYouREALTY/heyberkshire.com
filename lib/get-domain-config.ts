import { headers } from "next/headers";
import { getDomainConfig, type DomainConfig } from "./domain-config";

export async function getPageDomainConfig(): Promise<DomainConfig> {
  const headersList = headers();
  const domain = headersList.get("x-domain") || "";
  return getDomainConfig(domain);
}
