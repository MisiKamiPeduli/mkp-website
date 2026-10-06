import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { SiteContainer } from "@/components/layout/site-container";

export const metadata: Metadata = {
  title: "Past Programs",
};

export default function PastProgramsPage() {
  return (
    <SiteContainer>
      <PageHeader
        title="Past Programs"
        description="An archive of MKP's completed programs will be presented here."
      />
    </SiteContainer>
  );
}
