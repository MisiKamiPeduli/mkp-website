"use client";

import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Program, pastPrograms } from "@/lib/programs";
import {
  MAP_BOUNDS,
  MAP_HEIGHT,
  MAP_WIDTH,
  contextPaths,
  landPaths,
} from "./footprints-map-data";

type Coordinates = Pick<Program["location"], "lat" | "lng">;

function isOnMap({ lat, lng }: Coordinates) {
  const { west, east, north, south } = MAP_BOUNDS;
  return lng >= west && lng <= east && lat <= north && lat >= south;
}

// Same projection the land outline was generated with, as CSS percentages.
function toMapPosition({ lat, lng }: Coordinates) {
  const { west, east, north, south } = MAP_BOUNDS;
  return {
    left: `${((lng - west) / (east - west)) * 100}%`,
    top: `${((north - lat) / (north - south)) * 100}%`,
  };
}

function placeName({ title, location }: Program) {
  return title === location.name ? title : `${title}, ${location.name}`;
}

for (const { title, location } of pastPrograms) {
  if (!isOnMap(location)) {
    const message = `${title} (${location.lat}, ${location.lng}) is outside the footprints map; widen BOUNDS in scripts/generate-footprints-map.mjs and re-run it.`;
    if (process.env.NODE_ENV === "development") throw new Error(message);
    console.warn(message);
  }
}

const mappedPrograms = pastPrograms.filter((program) =>
  isOnMap(program.location),
);

export function FootprintsMap() {
  const [selectedYear, setSelectedYear] = useState(pastPrograms[0].year);
  const selected =
    pastPrograms.find((program) => program.year === selectedYear) ??
    pastPrograms[0];

  return (
    <div className="mt-10">
      <div className="relative rounded-2xl bg-muted p-4 sm:p-8">
        <div
          role="group"
          aria-label="Map of Indonesia and Singapore"
          className="relative"
          style={{ aspectRatio: `${MAP_WIDTH} / ${MAP_HEIGHT}` }}
        >
          <svg
            aria-hidden
            viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
            className="absolute inset-0 size-full"
          >
            <g className="fill-secondary/15">
              {contextPaths.map((d, index) => (
                <path key={index} d={d} />
              ))}
            </g>
            {/* The stroke thickens small islands (and Singapore) enough to see. */}
            <g className="fill-secondary stroke-secondary opacity-80">
              {landPaths.map((d, index) => (
                <path
                  key={index}
                  d={d}
                  strokeWidth={1.5}
                  strokeLinejoin="round"
                />
              ))}
            </g>
          </svg>

          {mappedPrograms.map((program) => {
            const isSelected = program.year === selected.year;
            return (
              <button
                key={program.year}
                type="button"
                aria-pressed={isSelected}
                aria-label={`${program.year}: ${placeName(program)}`}
                title={`${program.year} · ${program.title}`}
                onClick={() => setSelectedYear(program.year)}
                style={toMapPosition(program.location)}
                className={twMerge(
                  "absolute flex size-6 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isSelected && "z-10",
                )}
              >
                {isSelected && (
                  <span
                    aria-hidden
                    className="absolute size-4 animate-ping rounded-full bg-primary/60"
                  />
                )}
                <span
                  aria-hidden
                  className={twMerge(
                    "relative rounded-full bg-primary ring-2 ring-white transition-all",
                    isSelected ? "size-4" : "size-2.5 hover:size-3.5",
                  )}
                />
              </button>
            );
          })}
        </div>

        <div
          aria-live="polite"
          className="mt-6 rounded-xl bg-white p-4 text-left shadow-md sm:flex sm:gap-8 sm:p-6"
        >
          <div className="sm:w-64 sm:shrink-0">
            <p className="text-[11px] font-bold uppercase tracking-widest text-primary">
              MKP {selected.year}
            </p>
            <h3 className="mt-1 text-lg font-bold text-secondary">
              {selected.title}
            </h3>
            <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin aria-hidden className="size-3.5" />
              {selected.location.name}
            </p>
          </div>
          <div className="mt-3 sm:mt-0">
            <p className="text-sm leading-relaxed">{selected.description}</p>
            <Link
              href="/programs/past"
              className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-secondary hover:underline"
            >
              View past programs
              <ArrowRight aria-hidden className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>

      <ul className="-mx-4 mt-6 flex snap-x gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0">
        {pastPrograms.map((program) => {
          const isSelected = program.year === selected.year;
          return (
            <li key={program.year} className="shrink-0 snap-start">
              <button
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedYear(program.year)}
                className={twMerge(
                  "cursor-pointer rounded-full border px-4 py-1.5 text-xs whitespace-nowrap transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                  isSelected
                    ? "border-secondary bg-secondary text-secondary-foreground"
                    : "border-border bg-background hover:border-secondary/40",
                )}
              >
                <span className="font-bold">{program.year}</span>{" "}
                {program.title}
              </button>
            </li>
          );
        })}
      </ul>
      <p className="mt-2 text-center text-xs text-muted-foreground sm:hidden">
        Swipe for all {pastPrograms.length} programs · tap one to see it on the
        map
      </p>
    </div>
  );
}
