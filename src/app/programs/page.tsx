import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { SiteContainer } from "@/components/layout/site-container";

export const metadata: Metadata = {
  title: "Current Programs",
};

export default function CurrentProgramsPage() {
  return (
    <SiteContainer>
      <PageHeader
        title="Current Programs"
        description="Details on MKP's active programs, including MKP 2027: Way Kambas, Lampung, will be presented here."
      />
    </SiteContainer>
  );
}
