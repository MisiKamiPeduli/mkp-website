"use client";

import { MapPin } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { footprints } from "./footprints-data";

export function FootprintsMap() {
  const [selectedYear, setSelectedYear] = useState(footprints[0].year);
  const selected =
    footprints.find((footprint) => footprint.year === selectedYear) ??
    footprints[0];

  return (
    <div className="mt-10">
      {/* TODO: position the pin per village */}
      <div className="relative flex aspect-4/3 items-center justify-center overflow-hidden rounded-2xl bg-[#e4e4e4] sm:aspect-21/9">
        <Image
          // TODO: placeholder, replace with the real image
          src="/images/about/indonesia-map.svg"
          alt="Map of Indonesia"
          fill
          sizes="(min-width: 1152px) 1088px, 100vw"
          className="object-contain p-4 sm:p-8"
        />
        <div className="relative flex items-start gap-2" aria-live="polite">
          <MapPin
            aria-hidden
            className="size-8 fill-primary text-white drop-shadow"
          />
          <div className="rounded-lg bg-white px-3 py-2 text-left shadow-md">
            <p className="text-xs font-bold text-secondary">
              {selected.village}, {selected.province}
            </p>
            <p className="text-[11px] text-muted-foreground">
              {selected.year} · View program →
            </p>
          </div>
        </div>
      </div>

      <ul className="-mx-4 mt-6 flex snap-x gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
        {footprints.map((footprint) => {
          const isSelected = footprint.year === selected.year;
          return (
            <li key={footprint.year} className="shrink-0 snap-start">
              <button
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedYear(footprint.year)}
                className={twMerge(
                  "cursor-pointer rounded-full border px-4 py-1.5 text-xs whitespace-nowrap transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  isSelected
                    ? "border-secondary bg-secondary text-secondary-foreground"
                    : "border-border bg-background hover:border-secondary/40",
                )}
              >
                <span className="font-bold">{footprint.year}</span>{" "}
                {footprint.village}, {footprint.province}
              </button>
            </li>
          );
        })}
      </ul>
      <p className="mt-2 text-center text-xs text-muted-foreground sm:hidden">
        Swipe for all {footprints.length} villages · tap one to move the pin
      </p>
    </div>
  );
}
