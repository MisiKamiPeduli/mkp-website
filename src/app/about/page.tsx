import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/page-header";
import { SiteContainer } from "@/components/layout/site-container";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <SiteContainer>
      <PageHeader
        title="About Us"
        description="Our mission, history, and how MKP operates will be presented here."
      />
    </SiteContainer>
  );
}
