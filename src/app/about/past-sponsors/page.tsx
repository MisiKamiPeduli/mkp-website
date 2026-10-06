import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { SiteContainer } from "@/components/layout/site-container";

export const metadata: Metadata = {
  title: "Past Sponsors",
};

export default function PastSponsorsPage() {
  return (
    <SiteContainer>
      <PageHeader
        title="Past Sponsors"
        description="A list of organizations and individuals who have sponsored MKP programs will be presented here."
      />
    </SiteContainer>
  );
}
