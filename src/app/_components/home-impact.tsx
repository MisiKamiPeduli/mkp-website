import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { SiteContainer } from "@/components/layout/site-container";
import { ButtonLink } from "@/components/ui/button";

// Outcomes and corresponding project photos from MKP's original archive:
// https://directorsmkp.wixsite.com/misikamipeduli/our-footprints
const impactStories = [
  {
    value: "300+",
    unit: "books donated",
    title: "Books and digital learning in Nias",
    year: "2024",
    image: "/images/landing/impact-nias-2024.jpg",
    alt: "MKP 2024 project activities in Nias",
  },
  {
    value: "24",
    unit: "houses connected to solar power",
    title: "Solar power in Desa Waitaru",
    year: "2019",
    image: "/images/landing/impact-sumba-2019.jpg",
    alt: "MKP 2019 project activities in Sumba",
  },
  {
    value: "5 km",
    unit: "of water pipeline built",
    title: "Clean water access in Lombok",
    year: "2012",
    image: "/images/landing/impact-lombok-2012.jpg",
    alt: "MKP 2012 project activities in Lombok",
  },
];

export function HomeImpact() {
  return (
    <section aria-labelledby="impact-heading" className="bg-background pt-8 text-foreground sm:pt-10">
      <SiteContainer>
        <div className="mx-auto max-w-2xl lg:max-w-5xl">
          <header className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">Past programmes</p>
            <h2 id="impact-heading" className="mt-3 text-2xl font-bold leading-snug sm:text-3xl">Our impact, <span className="italic">across Indonesia.</span></h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-foreground/75">Education, clean energy, and clean water—three ways MKP has worked with communities across Indonesia.</p>
          </header>

          <div className="mt-8 grid gap-x-6 gap-y-10 lg:grid-cols-3 lg:gap-y-4">
            {impactStories.map((story) => (
              <article key={story.year} aria-labelledby={`impact-project-${story.year}`} className="grid min-w-0 gap-4 lg:row-span-3 lg:grid-rows-subgrid">
                <div className="relative self-start">
                  <Image
                    src={story.image}
                    alt={story.alt}
                    width={720}
                    height={480}
                    sizes="(min-width: 1152px) 326px, (min-width: 1024px) 30vw, (min-width: 720px) 672px, 100vw"
                    className="h-auto w-full"
                  />
                  <time dateTime={story.year} className="absolute left-0 top-0 bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground">{story.year}</time>
                </div>
                <h3 id={`impact-project-${story.year}`} className="text-xl leading-snug">{story.title}</h3>
                <p>
                  <span className="font-heading text-2xl leading-none text-secondary dark:text-foreground">{story.value}</span>
                  <span className="mt-1 block text-xs leading-5 text-muted-foreground">{story.unit}</span>
                </p>
              </article>
            ))}
          </div>
          <ButtonLink href="/programs/past" size="sm" className="mt-8 gap-2 px-4 text-[11px] font-semibold uppercase">Explore Past Programs <ArrowRight aria-hidden className="size-3.5" /></ButtonLink>
        </div>
      </SiteContainer>
    </section>
  );
}
