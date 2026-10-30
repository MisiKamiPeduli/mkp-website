import type { Metadata } from "next";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import { PageHero } from "@/components/layout/page-hero";
import { SiteContainer } from "@/components/layout/site-container";
import { ButtonLink } from "@/components/ui/button";
import { pastPrograms } from "@/lib/programs";

export const metadata: Metadata = {
  title: "Past Programs",
  description: "Explore MKP’s programme archive, from education and digital literacy to solar power and clean water, across communities since 2009.",
};

const highlights = [
  {
    year: 2024,
    title: "Books and digital learning in Nias",
    image: "/images/landing/impact-nias-2024.jpg",
    alt: "The MKP 2024 team gathered with their programme banner in Nias",
    value: "300+",
    unit: "books donated",
  },
  {
    year: 2019,
    title: "Solar power in Desa Waitaru",
    image: "/images/landing/impact-sumba-2019.jpg",
    alt: "MKP volunteers and community members outside a building in Sumba in 2019",
    value: "24",
    unit: "houses connected to solar power",
  },
  {
    year: 2012,
    title: "Clean water access in Lombok",
    image: "/images/landing/impact-lombok-2012.jpg",
    alt: "The MKP 2012 team with local participants in Lombok",
    value: "5 km",
    unit: "of water pipeline built",
  },
];

export default function PastProgramsPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Past Programs", href: "/programs/past" }]}
        title={<>Past <span className="italic text-accent">Programs</span></>}
        imageSrc="/images/about/about-us-1.jpg"
      />

      <SiteContainer>
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <section aria-labelledby="impact-heading" className="pt-12 sm:pt-16">
            <header className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">Since 2009</p>
              <h2 id="impact-heading" className="mt-3 text-2xl font-bold leading-snug sm:text-3xl">Our impact, <span className="italic">through the years.</span></h2>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">Education, clean energy, and clean water—built alongside local communities.</p>
            </header>

            <div className="mt-8 grid gap-x-6 gap-y-10 lg:grid-cols-3 lg:gap-y-4">
              {highlights.map((highlight) => (
                <article key={highlight.year} aria-labelledby={`highlight-${highlight.year}`} className="grid min-w-0 gap-4 lg:row-span-3 lg:grid-rows-subgrid">
                  <div className="relative self-start">
                    <Image src={highlight.image} alt={highlight.alt} width={720} height={480} sizes="(min-width: 1152px) 326px, (min-width: 1024px) 30vw, (min-width: 720px) 672px, 100vw" className="h-auto w-full" />
                    <time dateTime={String(highlight.year)} className="absolute left-0 top-0 bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">{highlight.year}</time>
                  </div>
                  <h3 id={`highlight-${highlight.year}`} className="text-xl leading-snug">{highlight.title}</h3>
                  <p>
                    <span className="font-heading text-2xl leading-none text-secondary dark:text-foreground">{highlight.value}</span>
                    <span className="mt-1 block text-xs leading-5 text-muted-foreground">{highlight.unit}</span>
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="archive" aria-labelledby="archive-heading" className="scroll-mt-24 py-12 sm:py-16">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 id="archive-heading" className="text-2xl font-bold leading-snug sm:text-3xl">Explore the archive</h2>
              <p className="text-xs text-muted-foreground">{pastPrograms.length} programmes · 2009–2024</p>
            </div>

            <nav aria-label="Jump to a programme year" className="mt-5">
              <ul className="flex flex-wrap gap-x-5 gap-y-3">
                {pastPrograms.map((program) => (
                  <li key={program.year}>
                    <a href={`#programme-${program.year}`} className="rounded-sm text-sm font-medium text-secondary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring dark:text-foreground">{program.year}</a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-6 border-t border-border">
              {pastPrograms.map((program) => (
                <details key={program.year} id={`programme-${program.year}`} name="programme-archive" className="group scroll-mt-24 border-b border-border">
                  <summary className="grid cursor-pointer list-none grid-cols-[auto_1fr_auto] items-center gap-4 rounded-sm py-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:gap-8 [&::-webkit-details-marker]:hidden">
                    <span className="font-heading text-xl text-secondary sm:text-2xl dark:text-foreground">{program.year}</span>
                    <span className="min-w-0">
                      <span className="block font-heading text-base leading-snug sm:text-lg">{program.title}</span>
                      <span className="mt-1 block text-xs leading-5 text-muted-foreground">{program.location.name}</span>
                    </span>
                    <ChevronDown aria-hidden className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180 motion-reduce:transition-none" />
                  </summary>
                  <div className="max-w-3xl pb-6 text-sm leading-7 text-foreground/75">
                    <p>{program.description}</p>
                  </div>
                </details>
              ))}
            </div>
            <p className="mt-5 text-xs leading-5 text-muted-foreground">Stories follow <a href="https://directorsmkp.wixsite.com/misikamipeduli/our-footprints" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">MKP’s original programme archive<span className="sr-only"> (opens in a new tab)</span></a>.</p>
          </section>

          <section aria-labelledby="next-programme-heading" className="pb-14 sm:pb-20">
            <div className="grid items-center gap-6 rounded-xl bg-secondary px-6 py-8 text-secondary-foreground sm:p-10 md:grid-cols-[1fr_auto] md:gap-10">
              <div>
                <h2 id="next-programme-heading" className="text-2xl font-bold leading-snug sm:text-3xl">Our next chapter: <span className="italic text-accent">MKP 2027.</span></h2>
                <p className="mt-3 text-sm leading-6 text-secondary-foreground/85">See what we’re preparing in Way Kambas, Lampung.</p>
              </div>
              <ButtonLink href="/programs/current" className="w-fit gap-2 px-5 text-xs font-semibold uppercase">Current Programs <ArrowRight aria-hidden className="size-4" /></ButtonLink>
            </div>
          </section>
        </div>
      </SiteContainer>
    </>
  );
}
