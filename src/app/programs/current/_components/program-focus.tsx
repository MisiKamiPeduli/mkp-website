"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const focusAreas = [
  {
    title: "Education",
    image: "/images/landing/way-kambas-classroom.jpg",
    alt: "Residents and volunteers discussing plans during the Way Kambas community visit",
    initiatives: [
      { title: "UMKM empowerment", description: "Business, marketing, and financial basics for local enterprises." },
      { title: "Environmental education", description: "Nature walks and guided reflections to build conservation awareness." },
    ],
  },
  {
    title: "Technology",
    image: "/images/landing/way-kambas-garden.jpg",
    alt: "Vegetable beds visited while exploring agricultural initiatives in Way Kambas",
    initiatives: [
      { title: "Greenhouse development", description: "Engineering solutions to modernise local agricultural practices." },
      { title: "MKP website", description: "Helping future sponsors and partners discover MKP and get involved." },
    ],
  },
];

export function ProgramFocus() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = focusAreas[activeIndex];

  return (
    <section aria-labelledby="focus-heading" className="py-12 sm:py-16">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">Planned programmes</p>
          <h2 id="focus-heading" className="mt-3 text-2xl font-bold leading-snug sm:text-3xl">What we’re planning</h2>
        </div>
        <div role="group" aria-label="Choose a programme pillar" className="flex items-center gap-5">
          {focusAreas.map((area, index) => (
            <Button key={area.title} variant="link" onClick={() => setActiveIndex(index)} aria-pressed={activeIndex === index} aria-controls="programme-focus" className={`rounded-none border-b-2 pb-2 text-xs font-semibold sm:text-sm ${activeIndex === index ? "border-primary text-secondary dark:text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"}`}>
              {area.title}
            </Button>
          ))}
        </div>
      </div>

      <div role="group" aria-label="Education and Technology programmes" className="mt-6">
        <div className="relative aspect-[16/10] bg-muted md:w-3/5">
          <Image src={active.image} alt={active.alt} fill sizes="(min-width: 1152px) 615px, (min-width: 768px) 60vw, 100vw" className="object-cover" />
        </div>
        <div id="programme-focus" aria-live="polite" aria-atomic="true" className="relative z-10 mx-4 -mt-8 bg-primary p-6 text-primary-foreground sm:mx-6 sm:p-8 md:mx-0 md:-mt-28 md:ml-[44%]">
          {/* A darker shade of the brand red keeps the white body copy readable. */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black/20" />
          <div className="relative">
            <h3 className="text-2xl font-bold leading-snug sm:text-3xl">{active.title}</h3>
            <ul className="mt-5 space-y-4">
              {active.initiatives.map((initiative) => (
                <li key={initiative.title}>
                  <h4 className="font-sans text-sm font-semibold">{initiative.title}</h4>
                  <p className="mt-1 text-sm leading-6">{initiative.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
