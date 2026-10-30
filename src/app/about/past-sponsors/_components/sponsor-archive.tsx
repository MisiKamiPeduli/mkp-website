"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { SiteContainer } from "@/components/layout/site-container";
import type { SponsorYear } from "@/lib/sponsors";

function Group({ label, names, note }: { label: string; names: string[]; note?: string }) {
  return (
    <section>
      <h4 className="font-sans text-base font-bold italic text-secondary-text">{label}</h4>
      <ul className="mt-2 space-y-1">
        {names.map((name) => <li key={name} className="text-sm font-medium uppercase leading-6 tracking-wide text-secondary-text sm:text-base">{name}</li>)}
      </ul>
      {note && <p className="mt-2 text-xs normal-case leading-5 text-muted-foreground">{note}</p>}
    </section>
  );
}

export function SponsorArchive({ years }: { years: SponsorYear[] }) {
  const [index, setIndex] = useState(0);
  const go = (next: number) => setIndex((next + years.length) % years.length);

  return (
    <section id="sponsor-archive" aria-roledescription="carousel" aria-label="Partners and sponsors by year" className="border-y border-border bg-muted">
      <SiteContainer>
        <div className="mx-auto flex max-w-3xl items-start gap-2 py-12 sm:gap-6 sm:py-16">
          <button type="button" onClick={() => go(index - 1)} aria-label={`Previous year, ${years[(index - 1 + years.length) % years.length].year}`} className="mt-40 shrink-0 rounded-full p-2 text-secondary-text transition-colors hover:bg-background focus-visible:outline-2 focus-visible:outline-ring"><ChevronLeft aria-hidden className="size-6" /></button>

          <div className="min-w-0 flex-1 text-center" aria-live="polite">
            {years.map((year, i) => (
              <div key={year.year} role="group" aria-roledescription="slide" aria-label={`${year.year}, ${i + 1} of ${years.length}`} hidden={i !== index}>
                <h3 className="text-5xl font-bold tracking-[0.2em] text-secondary-text sm:text-6xl">{year.year}</h3>
                <div className="mt-10 space-y-8">
                  <Group label="Partner NGO" names={year.partners} note={year.partnerNote} />
                  {year.tiers.map((tier) => <Group key={tier.name} label={`${tier.name} Sponsorship`} names={tier.sponsors} />)}
                  <Group label="Endorsed By" names={year.endorsements} />
                </div>
              </div>
            ))}
          </div>

          <button type="button" onClick={() => go(index + 1)} aria-label={`Next year, ${years[(index + 1) % years.length].year}`} className="mt-40 shrink-0 rounded-full p-2 text-secondary-text transition-colors hover:bg-background focus-visible:outline-2 focus-visible:outline-ring"><ChevronRight aria-hidden className="size-6" /></button>
        </div>

        <div className="flex justify-center gap-2 pb-10">
          {years.map((year, i) => (
            <button key={year.year} type="button" onClick={() => setIndex(i)} aria-label={`Show ${year.year}`} aria-current={i === index} className={`size-2.5 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${i === index ? "bg-primary" : "bg-border hover:bg-muted-foreground"}`} />
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
