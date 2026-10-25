"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { SiteContainer } from "@/components/layout/site-container";
import type { SponsorYear } from "@/lib/sponsors";

export function SponsorArchive({ years }: { years: SponsorYear[] }) {
  const [selected, setSelected] = useState(years[0].year);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const archive = useRef<HTMLElement | null>(null);

  function selectYear(index: number) {
    setSelected(years[index].year);
    archive.current?.scrollIntoView({ block: "start" });
  }

  function navigateYears(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % years.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + years.length) % years.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = years.length - 1;
    else return;
    event.preventDefault();
    selectYear(next);
    tabs.current[next]?.focus();
  }

  return (
    <section ref={archive} id="sponsor-archive" aria-label="Partners and sponsors by year" className="scroll-mt-16 lg:scroll-mt-20">
      <div className="sticky top-16 z-20 border-y border-border bg-background lg:top-20">
        <SiteContainer>
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-6">
            <p className="hidden text-xs font-medium text-muted-foreground md:block">Explore past partnerships</p>
            <div role="tablist" aria-label="Sponsorship year" className="flex min-w-0 flex-1 md:flex-none">
              {years.map((year, index) => (
                <button key={year.year} ref={(element) => { tabs.current[index] = element; }} id={`sponsor-tab-${year.year}`} type="button" role="tab" aria-selected={selected === year.year} aria-controls={`sponsors-${year.year}`} tabIndex={selected === year.year ? 0 : -1} onClick={() => selectYear(index)} onKeyDown={(event) => navigateYears(event, index)} className={`min-h-14 min-w-0 flex-1 border-b-2 px-2 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-ring sm:px-5 sm:text-sm ${selected === year.year ? "border-primary text-secondary-text" : "border-transparent text-muted-foreground hover:text-secondary-text"}`}>{year.year}</button>
              ))}
            </div>
          </div>
        </SiteContainer>
      </div>

      <SiteContainer>
        <div className="mx-auto max-w-5xl">
          {years.map((year) => (
            <div key={year.year} id={`sponsors-${year.year}`} role="tabpanel" aria-labelledby={`sponsor-tab-${year.year}`} hidden={selected !== year.year} tabIndex={0} className="py-10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring sm:py-12">
              <header className="mb-8 flex flex-wrap items-baseline gap-x-5 gap-y-2">
                <h3 className="text-4xl italic leading-tight text-secondary-text sm:text-5xl">{year.year}</h3>
                <p className="text-sm text-muted-foreground">Partners & sponsors</p>
              </header>

              <section aria-labelledby={`ngo-heading-${year.year}`} className="grid gap-4 rounded-xl bg-muted px-5 py-6 sm:px-7 md:grid-cols-[150px_1fr] md:gap-8">
                <h4 id={`ngo-heading-${year.year}`} className="font-sans text-[11px] font-semibold uppercase tracking-wide text-secondary-text">Partner NGOs</h4>
                <div>
                  <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
                    {year.partners.map((partner) => <li key={partner} className="font-heading text-base leading-relaxed text-secondary-text sm:text-lg">{partner}</li>)}
                  </ul>
                  {year.partnerNote && <p className="mt-2 text-xs leading-5 text-muted-foreground">{year.partnerNote}</p>}
                </div>
              </section>

              <div className="grid gap-x-10 gap-y-9 py-9 sm:grid-cols-2 sm:py-10 lg:grid-cols-3">
                {year.tiers.map((tier) => (
                  <section key={tier.name} aria-labelledby={`tier-${year.year}-${tier.name.toLowerCase()}`}>
                    <h4 id={`tier-${year.year}-${tier.name.toLowerCase()}`} className="flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-wide text-secondary-text"><span aria-hidden className="h-3 w-0.5 bg-primary" />{tier.name} sponsors</h4>
                    <ul className="mt-4 space-y-3">
                      {tier.sponsors.map((sponsor) => <li key={sponsor} className="text-sm font-medium leading-6 text-foreground/85">{sponsor}</li>)}
                    </ul>
                  </section>
                ))}
              </div>

              <section aria-labelledby={`endorsements-${year.year}`} className="grid gap-4 border-t border-border pt-6 md:grid-cols-[150px_1fr] md:gap-8">
                <h4 id={`endorsements-${year.year}`} className="font-sans text-[11px] font-semibold uppercase tracking-wide text-muted-foreground">Endorsed by</h4>
                <ul className="grid gap-x-10 gap-y-3 sm:grid-cols-2">
                  {year.endorsements.map((endorsement) => <li key={endorsement} className="text-xs leading-6 text-foreground/75">{endorsement}</li>)}
                </ul>
              </section>
            </div>
          ))}
        </div>
      </SiteContainer>
    </section>
  );
}
