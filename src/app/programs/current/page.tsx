import type { Metadata } from "next";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { PageHero } from "@/components/layout/page-hero";
import { SiteContainer } from "@/components/layout/site-container";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { ProgramFocus } from "./_components/program-focus";

export const metadata: Metadata = {
  title: "Current Programs",
  description:
    "Discover MKP 2027 in Way Kambas, Lampung: planned education and technology initiatives, our programme timeline, and ways to get involved.",
};

const milestones = [
  { period: "Apr–May 2026", title: "Team formation" },
  { period: "May–Aug 2026", title: "Community visits & partnerships" },
  {
    period: "Aug 2026–Apr 2027",
    title: "Planning & fundraising",
    current: true,
  },
  { period: "May 2027", title: "On-site programme" },
];

export default function CurrentProgramsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Current Programs", href: "/programs/current" },
        ]}
        title={
          <>
            Current <span className="italic text-accent">Programs</span>
          </>
        }
        imageSrc="/images/about/about-us-1.jpg"
      />

      <SiteContainer>
        <div className="mx-auto max-w-5xl">
          <section
            aria-labelledby="programme-heading"
            className="pt-12 sm:pt-16"
          >
            <div className="grid items-center gap-6 rounded-xl bg-muted px-6 py-8 sm:p-10 md:grid-cols-[1.4fr_0.6fr] md:gap-10">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">
                  May 2027 · In preparation
                </p>
                <h2
                  id="programme-heading"
                  className="mt-3 text-2xl font-bold leading-snug sm:text-3xl"
                >
                  MKP 2027:{" "}
                  <span className="block italic">Way Kambas, Lampung</span>
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-foreground/75">
                  We’re preparing a week of education, technology, and community
                  empowerment alongside Sekolah Alam Indonesia, ALeRT, and Desa
                  Taman Fajar.
                </p>
              </div>
              <Image
                src="/images/programs/way-kambas-sumatra.svg"
                alt="Way Kambas in Lampung, near the southern end of Sumatra"
                width={400}
                height={600}
                unoptimized
                className="mx-auto h-auto w-48 md:w-full md:max-w-60"
              />
            </div>
          </section>

          <ProgramFocus />

          <section
            aria-labelledby="timeline-heading"
            className="pb-12 sm:pb-16"
          >
            <h2
              id="timeline-heading"
              className="text-2xl font-bold leading-snug sm:text-3xl"
            >
              Programme timeline
            </h2>
            <div className="relative mt-8">
              <span
                aria-hidden="true"
                className="absolute left-[12.5%] right-[12.5%] top-2.5 hidden h-px bg-border md:block"
              />
              <ol className="grid gap-6 md:grid-cols-4 md:gap-0">
                {milestones.map((milestone) => (
                  <li
                    key={milestone.period}
                    aria-current={milestone.current ? "step" : undefined}
                    className="relative flex items-start gap-3 md:block md:px-3 md:text-center"
                  >
                    <span
                      aria-hidden="true"
                      className={`relative block size-5 shrink-0 rounded-full border-4 border-background md:mx-auto ${
                        milestone.current
                          ? "bg-primary ring-1 ring-primary"
                          : "bg-border"
                      }`}
                    />
                    <div className="-mt-0.5 md:mt-5">
                      <p className="text-sm font-semibold leading-6 text-secondary dark:text-foreground">
                        {milestone.period}
                      </p>
                      <h3 className="mt-1 font-sans text-sm leading-6 text-foreground/75">
                        {milestone.title}
                      </h3>
                      {milestone.current && (
                        <p className="mt-1 text-[11px] font-semibold text-primary">
                          Current phase
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section aria-labelledby="support-heading" className="pb-14 sm:pb-20">
            <div className="grid items-center gap-6 rounded-xl bg-secondary px-6 py-8 text-secondary-foreground sm:p-10 md:grid-cols-[1fr_auto] md:gap-10">
              <div>
                <h2
                  id="support-heading"
                  className="text-2xl font-bold leading-snug sm:text-3xl"
                >
                  Want to support{" "}
                  <span className="italic text-accent">MKP 2027?</span>
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-6 text-secondary-foreground/85">
                  We’re looking for funding, resources, and partners for Way
                  Kambas.
                </p>
              </div>
              <ButtonLink
                href={`mailto:${siteConfig.contactEmail}?subject=MKP%202027%20Support`}
                className="w-fit gap-2 px-5 text-xs font-semibold uppercase"
              >
                Discuss support <ArrowUpRight aria-hidden className="size-4" />
              </ButtonLink>
            </div>

            <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-xl bg-muted px-6 py-8 sm:flex-row sm:items-center sm:p-10">
              <div>
                <h2 className="text-xl font-bold leading-snug sm:text-2xl">
                  See our past programmes
                </h2>
                <p className="mt-2 text-sm leading-6 text-foreground/75">
                  Meet the communities and projects that came before.
                </p>
              </div>
              <ButtonLink
                href="/programs/past"
                variant="secondary"
                className="gap-2 px-5 text-xs font-semibold uppercase"
              >
                Past Programs <ArrowRight aria-hidden className="size-4" />
              </ButtonLink>
            </div>
          </section>
        </div>
      </SiteContainer>
    </>
  );
}
