import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { SiteContainer } from "@/components/layout/site-container";
import { pastSponsors, SPONSOR_ARCHIVE_SOURCE } from "@/lib/sponsors";
import { SponsorArchive } from "./_components/sponsor-archive";

export const metadata: Metadata = {
  title: "Past Sponsors",
  description: "Meet the partners and sponsors who supported MKP’s past programmes. Browse the 2024, 2019, 2017, 2016, 2015, and 2014 archives.",
};

export default function PastSponsorsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Past Sponsors", href: "/about/past-sponsors" }]}
        title={<>Past <span className="italic text-accent">Sponsors</span></>}
        description="With thanks to the partners and sponsors who supported our programmes."
        imageSrc="/images/sponsors/hero.jpg"
      />

      <SiteContainer>
        <section aria-label="About our partners and sponsors" className="py-8 sm:py-10">
          <p className="text-base leading-7 text-foreground/80">Past sponsors include Maybank, NAMZ, Tanoto Foundation, Bank of Indonesia, Martha Tilaar Group and Gramedia.</p>
        </section>
      </SiteContainer>

      <SponsorArchive years={pastSponsors} />

      <SiteContainer>
        <div className="py-8 sm:py-10">
          <p className="text-xs leading-5 text-muted-foreground">Past recognition follows <a href={SPONSOR_ARCHIVE_SOURCE} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">MKP’s original partners and sponsors archive<span className="sr-only"> (opens in a new tab)</span></a>.</p>
        </div>
      </SiteContainer>
    </>
  );
}
