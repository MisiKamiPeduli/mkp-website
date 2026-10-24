"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
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
      { title: "Greenhouse development", description: "Practical engineering solutions to support local agriculture." },
      { title: "MKP website", description: "A shared home for our programmes, stories, and future partnerships." },
    ],
  },
];

export function ProgramFocus() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = focusAreas[activeIndex];

  function changeFocus(direction: number) {
    setActiveIndex((current) => (current + direction + focusAreas.length) % focusAreas.length);
  }

  return (
    <section aria-labelledby="focus-heading" className="py-12 sm:py-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wide text-primary">Planned programmes</p>
          <h2 id="focus-heading" className="mt-3 text-2xl font-bold leading-snug sm:text-3xl">What we’re planning</h2>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <span className="mr-1 text-xs tabular-nums text-muted-foreground" aria-hidden="true">{activeIndex + 1} / {focusAreas.length}</span>
          <Button variant="ghost" size="icon" onClick={() => changeFocus(-1)} aria-label="Previous programme focus" aria-controls="programme-focus" className="size-9 rounded-md border border-border">
            <ChevronLeft className="size-4" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => changeFocus(1)} aria-label="Next programme focus" aria-controls="programme-focus" className="size-9 rounded-md border border-border">
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>

      <div role="group" aria-roledescription="carousel" aria-label="Education and Technology programmes" className="mt-6">
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
