"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { SiteContainer } from "@/components/layout/site-container";
import type { TeamCohort, TeamMember } from "@/lib/team";

function teamFor(member: TeamMember) {
  if (member.role === "Co-Project Director") return "Project directors";
  return member.role.match(/\(([^)]+)\)/)?.[1] ?? member.role;
}

function groupsFor(cohort: TeamCohort) {
  const groups = new Map<string, TeamMember[]>();
  for (const member of cohort.members) {
    const team = teamFor(member);
    groups.set(team, [...(groups.get(team) ?? []), member]);
  }
  return [...groups];
}

function Portrait({ member, director }: { member: TeamMember; director: boolean }) {
  return (
    <li className="group text-center">
      <Image
        src={member.image}
        alt={`Portrait of ${member.name}`}
        width={512}
        height={512}
        sizes={director ? "(min-width: 640px) 192px, 224px" : "(min-width: 640px) 160px, 40vw"}
        className={`mx-auto aspect-square h-auto w-full rounded-full bg-muted motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.03] ${director ? "max-w-56 sm:max-w-48" : "max-w-40"}`}
      />
      <div className="mx-auto mt-4 max-w-60">
        <h4 className={`${director ? "text-xl" : "text-base sm:text-lg"} leading-snug text-secondary-text`}>{member.name}</h4>
        <p className="mt-2 text-xs font-medium leading-5 text-primary">{member.role}</p>
        {member.degree && <p className="mt-1 text-[11px] leading-5 text-muted-foreground">{member.degree}</p>}
      </div>
    </li>
  );
}

export function TeamDirectory({ cohorts }: { cohorts: TeamCohort[] }) {
  const [selected, setSelected] = useState(cohorts[0].year);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  function navigateYears(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % cohorts.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + cohorts.length) % cohorts.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = cohorts.length - 1;
    else return;
    event.preventDefault();
    setSelected(cohorts[next].year);
    tabs.current[next]?.focus();
  }

  return (
    <section id="team-directory" aria-label="Meet our teams by year" className="scroll-mt-20">
      <div className="sticky top-16 z-20 border-b border-border bg-background lg:top-20">
        <SiteContainer>
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-6">
            <p className="hidden text-xs font-medium text-muted-foreground sm:block">Explore our teams</p>
            <div role="tablist" aria-label="Team year" className="flex w-full sm:w-auto">
              {cohorts.map((cohort, index) => (
                <button
                  key={cohort.year}
                  ref={(element) => { tabs.current[index] = element; }}
                  id={`year-tab-${cohort.year}`}
                  type="button"
                  role="tab"
                  aria-selected={selected === cohort.year}
                  aria-controls={`team-${cohort.year}`}
                  tabIndex={selected === cohort.year ? 0 : -1}
                  onClick={() => setSelected(cohort.year)}
                  onKeyDown={(event) => navigateYears(event, index)}
                  className={`flex min-h-16 flex-1 items-center justify-center gap-2 border-b-2 px-3 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-ring sm:px-5 ${selected === cohort.year ? "border-primary text-secondary-text" : "border-transparent text-muted-foreground hover:text-secondary-text"}`}
                >
                  {cohort.year}<span className="hidden text-[10px] font-normal text-muted-foreground sm:inline">{cohort.members.length}</span>
                </button>
              ))}
            </div>
          </div>
        </SiteContainer>
      </div>

      <SiteContainer>
        <div className="mx-auto max-w-5xl">
          {cohorts.map((cohort) => {
            const groups = groupsFor(cohort);
            return (
              <div key={cohort.year} id={`team-${cohort.year}`} role="tabpanel" aria-labelledby={`year-tab-${cohort.year}`} hidden={selected !== cohort.year} tabIndex={0} className="py-10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:py-14">
                <header className="mb-10 flex flex-wrap items-end justify-between gap-3 sm:mb-12">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-primary">The people behind MKP</p>
                    <h2 className="mt-2 text-3xl text-secondary-text sm:text-4xl">Team <span className="italic">{cohort.year}</span></h2>
                  </div>
                  <p className="pb-1 text-xs text-muted-foreground">{cohort.members.length} volunteers · {groups.length} teams</p>
                </header>

                {groups.map(([team, members]) => {
                  const director = team === "Project directors";
                  const headingId = `team-${cohort.year}-${team.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
                  return (
                    <section key={team} aria-labelledby={headingId} className={director ? "pb-10 sm:pb-14" : "grid gap-7 border-t border-border py-8 md:grid-cols-[160px_1fr] md:gap-10 sm:py-10"}>
                      <h3 id={headingId} className={director ? "mb-7 text-center font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground" : "text-xl leading-snug text-secondary-text md:pt-2"}>{team}</h3>
                      <ul className={director ? `mx-auto grid max-w-3xl gap-x-8 gap-y-9 ${members.length === 2 ? "sm:max-w-xl sm:grid-cols-2" : "sm:grid-cols-3"}` : "grid grid-cols-2 gap-x-5 gap-y-9 sm:grid-cols-3 lg:grid-cols-4 lg:gap-x-6"}>
                        {members.map((member) => <Portrait key={member.name} member={member} director={director} />)}
                      </ul>
                    </section>
                  );
                })}
              </div>
            );
          })}
        </div>
      </SiteContainer>
    </section>
  );
}
