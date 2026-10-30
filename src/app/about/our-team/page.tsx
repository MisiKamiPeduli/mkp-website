import type { Metadata } from "next";
import { PageHero } from "@/components/layout/page-hero";
import { SiteContainer } from "@/components/layout/site-container";
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

      <TeamArchive teams={[...pastTeams].sort((a, b) => b.year - a.year)} />

      <SiteContainer>
        <div className="mx-auto max-w-5xl py-10 sm:py-14">
          <p className="text-xs leading-5 text-muted-foreground">Team details follow <a href={TEAM_ARCHIVE_SOURCE} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">MKP’s original Meet the Team page<span className="sr-only"> (opens in a new tab)</span></a>. Degrees and graduation years are as listed at the time.</p>
        </div>
      </SiteContainer>
    </>
  );
}
