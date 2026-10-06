import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { SiteContainer } from "@/components/layout/site-container";

export const metadata: Metadata = {
  title: "Our Team",
};

export default function OurTeamPage() {
  return (
    <SiteContainer>
      <PageHeader
        title="Our Team"
        description="Profiles of the people behind MKP will be presented here."
      />
    </SiteContainer>
  );
}
