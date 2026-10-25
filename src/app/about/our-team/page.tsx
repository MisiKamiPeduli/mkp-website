import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiteContainer } from "@/components/layout/site-container";
import { ButtonLink } from "@/components/ui/button";
import { TEAM_ARCHIVE_SOURCE, teamCohorts } from "@/lib/team";
import { TeamDirectory } from "./_components/team-directory";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the volunteers behind Misi Kami Peduli. Explore the complete 2024, 2021, 2020, and 2019 teams.",
};

export default function OurTeamPage() {
  return (
    <>
      <section aria-labelledby="team-heading" className="bg-secondary text-secondary-foreground">
        <SiteContainer>
          <div className="grid items-center md:grid-cols-[0.85fr_1.15fr]">
            <div className="py-10 pr-0 sm:py-14 md:pr-10 lg:pr-16">
              <nav aria-label="Breadcrumb" className="text-xs text-white/70">
                <ol className="flex flex-wrap items-center gap-2">
                  <li><Link href="/" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4">Home</Link></li>
                  <li aria-hidden="true">/</li>
                  <li><Link href="/about" className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4">About Us</Link></li>
                  <li aria-hidden="true">/</li>
                  <li aria-current="page" className="text-white">Our Team</li>
                </ol>
              </nav>
              <p className="mt-8 text-[11px] font-semibold uppercase tracking-widest text-white/70">Many people. One shared purpose.</p>
              <h1 id="team-heading" className="mt-4 text-5xl leading-tight sm:text-6xl lg:text-7xl">Our <span className="italic text-accent">Team</span></h1>
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/85">Students at NUS, bringing our time and talents together for communities in Indonesia.</p>
              <a href="#team-directory" className="mt-7 inline-flex min-h-11 items-center gap-3 text-xs font-semibold uppercase tracking-wide underline decoration-primary decoration-2 underline-offset-8 hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4">Meet the people <ArrowRight aria-hidden className="size-4" /></a>
            </div>
            <figure className="pb-6 md:py-8">
              <Image src="/images/team/team-archive-hero.jpg" alt="MKP volunteers gathered for a team photograph" width={1600} height={1067} loading="eager" fetchPriority="high" sizes="(min-width: 1280px) 660px, (min-width: 768px) 55vw, 100vw" className="h-auto w-full" />
            </figure>
          </div>
        </SiteContainer>
      </section>

      <TeamDirectory cohorts={teamCohorts} />

      <SiteContainer>
        <div className="mx-auto max-w-5xl border-t border-border pb-14 pt-8 sm:pb-20">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl leading-snug text-secondary-text sm:text-2xl">Shared purpose. <span className="italic">Lasting impact.</span></h2>
              <p className="mt-2 text-sm text-muted-foreground">Discover the programmes our teams made possible.</p>
            </div>
            <ButtonLink href="/programs/past" className="gap-2 px-5 text-xs font-semibold uppercase">Explore past programmes <ArrowRight aria-hidden className="size-4" /></ButtonLink>
          </div>
          <p className="mt-8 text-xs leading-5 text-muted-foreground">Historical teams from <a href={TEAM_ARCHIVE_SOURCE} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">MKP’s original team archive<span className="sr-only"> (opens in a new tab)</span></a>.</p>
        </div>
      </SiteContainer>
    </>
  );
}
