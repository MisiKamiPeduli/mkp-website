import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SiteContainer } from "@/components/layout/site-container";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
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
        description="Recognising the people and organisations who helped make our programmes possible."
        imageSrc="/images/sponsors/hero.jpg"
      />

      <SiteContainer>
        <section aria-labelledby="sponsors-intro-heading" className="mx-auto grid max-w-5xl gap-5 py-10 sm:py-14 md:grid-cols-2 md:items-center md:gap-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">With our thanks</p>
            <h2 id="sponsors-intro-heading" className="mt-3 text-2xl leading-snug text-secondary-text sm:text-3xl">Behind every programme, <span className="italic">a community of support.</span></h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-foreground/75">From local NGOs to corporate sponsors and individual supporters, these partnerships helped MKP bring its programmes to communities across Indonesia.</p>
        </section>
      </SiteContainer>

      <SponsorArchive years={pastSponsors} />

      <SiteContainer>
        <div className="mx-auto max-w-5xl pb-14 sm:pb-20">
          <p className="mb-10 text-xs leading-5 text-muted-foreground">Past recognition follows <a href={SPONSOR_ARCHIVE_SOURCE} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">MKP’s original partners and sponsors archive<span className="sr-only"> (opens in a new tab)</span></a>.</p>
          <section aria-labelledby="partner-heading" className="grid items-center gap-6 rounded-xl bg-secondary px-6 py-8 text-secondary-foreground sm:p-10 md:grid-cols-[1fr_auto] md:gap-10">
            <div>
              <h2 id="partner-heading" className="text-2xl leading-snug sm:text-3xl">Help shape <span className="italic text-accent">our next chapter.</span></h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-white/85">We’re seeking funding, resources, and partners for MKP 2027 in Way Kambas.</p>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-4 md:flex-col md:items-start">
              <ButtonLink href={`mailto:${siteConfig.contactEmail}?subject=MKP%202027%20Partnership`} className="w-fit gap-2 px-5 text-xs font-semibold uppercase">Partner with us <ArrowUpRight aria-hidden className="size-4" /></ButtonLink>
              <ButtonLink href="/programs/current" variant="link" className="gap-2 text-xs font-semibold text-white">Explore MKP 2027 <ArrowRight aria-hidden className="size-4" /></ButtonLink>
            </div>
          </section>
        </div>
      </SiteContainer>
    </>
  );
}
