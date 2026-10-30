import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SiteContainer } from "@/components/layout/site-container";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { pastTeams, TEAM_ARCHIVE_SOURCE } from "@/lib/team";
import { TeamArchive } from "./_components/team-archive";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the students who led MKP’s past programmes. Browse the 2024, 2021, 2020, and 2019 teams.",
};

export default function OurTeamPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }, { label: "Our Team", href: "/about/our-team" }]}
        title={<>Our <span className="italic text-accent">Team</span></>}
        description="The students who gave their time and effort to every MKP programme."
        imageSrc="/images/team/hero.jpg"
      />

      <SiteContainer>
        <section aria-labelledby="team-intro-heading" className="mx-auto grid max-w-5xl gap-5 py-10 sm:py-14 md:grid-cols-2 md:items-center md:gap-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">The people behind MKP</p>
            <h2 id="team-intro-heading" className="mt-3 text-2xl leading-snug text-secondary-text sm:text-3xl">Every year, <span className="italic">a new team steps up.</span></h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-foreground/75">MKP is run by Indonesian students at the National University of Singapore. Here are the directors, programme heads, and members of our past teams.</p>
        </section>
      </SiteContainer>

      <TeamArchive teams={[...pastTeams].sort((a, b) => b.year - a.year)} />

      <SiteContainer>
        <div className="mx-auto max-w-5xl pb-14 sm:pb-20">
          <p className="mb-10 text-xs leading-5 text-muted-foreground">Team details follow <a href={TEAM_ARCHIVE_SOURCE} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">MKP’s original Meet the Team page<span className="sr-only"> (opens in a new tab)</span></a>. Degrees and graduation years are as listed at the time.</p>
          <section aria-labelledby="join-heading" className="grid items-center gap-6 rounded-xl bg-secondary px-6 py-8 text-secondary-foreground sm:p-10 md:grid-cols-[1fr_auto] md:gap-10">
            <div>
              <h2 id="join-heading" className="text-2xl leading-snug sm:text-3xl">Be part of <span className="italic text-accent">our next chapter.</span></h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-white/85">Follow our journey as we prepare MKP 2027 in Way Kambas.</p>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-4 md:flex-col md:items-start">
              <ButtonLink href="/programs/current" className="w-fit gap-2 px-5 text-xs font-semibold uppercase">Explore MKP 2027 <ArrowRight aria-hidden className="size-4" /></ButtonLink>
              <ButtonLink href={siteConfig.instagramUrl} variant="link" className="gap-2 text-xs font-semibold text-white">Follow us on Instagram <ArrowUpRight aria-hidden className="size-4" /></ButtonLink>
            </div>
          </section>
        </div>
      </SiteContainer>
    </>
  );
}
