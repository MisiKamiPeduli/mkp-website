"use client";

import Image from "next/image";
import {
  type CSSProperties,
  type MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { SiteContainer } from "@/components/layout/site-container";
import { Polaroid } from "@/components/ui/polaroid";
import type { Program } from "@/lib/programs";

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? "auto"
    : "smooth";
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function ProgrammeArchive({ programs }: { programs: Program[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const yearsRef = useRef<HTMLUListElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [headerHeight, setHeaderHeight] = useState<number>();
  const active = programs[activeIndex];

  // Programmes without a photo hide the polaroid; it keeps the last photo while fading out.
  const [shownIndex, setShownIndex] = useState(0);
  if (active.image && shownIndex !== activeIndex) setShownIndex(activeIndex);
  const shown = programs[shownIndex];

  // The programmes and photo sit below the sticky header, so track its height.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const observer = new ResizeObserver(() =>
      setHeaderHeight(header.offsetHeight),
    );
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  // The programme in view is the last one whose top has scrolled past 45% of the viewport.
  useEffect(() => {
    const items = Array.from(
      listRef.current?.querySelectorAll("article") ?? [],
    );
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.45;
      setActiveIndex(
        Math.max(
          items.findLastIndex(
            (item) => item.getBoundingClientRect().top <= line,
          ),
          0,
        ),
      );
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // When scrolling stops inside the hero, finish the move: down to the archive, or back to the top.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    let lastY = window.scrollY;
    let timer = 0;

    const settle = () => {
      const y = window.scrollY;
      const archiveY =
        section.getBoundingClientRect().top +
        y -
        parseFloat(getComputedStyle(section).scrollMarginTop);
      if (y > 0 && y < archiveY - 1) {
        if (y > lastY) section.scrollIntoView({ behavior: scrollBehavior() });
        else window.scrollTo({ top: 0, behavior: scrollBehavior() });
      }
      lastY = y;
    };
    // scrollend waits for touch release and momentum; fall back to a short pause elsewhere.
    const event = "onscrollend" in window ? "scrollend" : "scroll";
    const onScroll = () => {
      if (event === "scrollend") return settle();
      clearTimeout(timer);
      timer = window.setTimeout(settle, 150);
    };

    window.addEventListener(event, onScroll, { passive: true });
    return () => {
      window.removeEventListener(event, onScroll);
      clearTimeout(timer);
    };
  }, []);

  // On narrow screens the years scroll sideways; keep the active one in view.
  useEffect(() => {
    const years = yearsRef.current;
    const pill = years?.children[activeIndex] as HTMLElement | undefined;
    if (!years || !pill) return;
    years.scrollTo({
      left: pill.offsetLeft - (years.clientWidth - pill.offsetWidth) / 2,
      behavior: scrollBehavior(),
    });
  }, [activeIndex]);

  function jumpTo(event: MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: scrollBehavior() });
    history.replaceState(null, "", `#${id}`);
  }

  return (
    <section
      ref={sectionRef}
      id="archive"
      aria-labelledby="archive-heading"
      className="scroll-mt-16 [--archive-header:10rem] lg:scroll-mt-20"
      style={
        headerHeight
          ? ({ "--archive-header": `${headerHeight}px` } as CSSProperties)
          : undefined
      }
    >
      <div
        ref={headerRef}
        className="sticky top-16 z-10 border-b border-border bg-background lg:top-20"
      >
        <SiteContainer>
          <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-1 pt-6 pb-2 sm:pt-10">
            <h2
              id="archive-heading"
              className="text-3xl font-semibold sm:text-5xl"
            >
              Explore the <span className="italic text-primary">archive</span>
            </h2>
            <p className="text-xs text-muted-foreground sm:pb-1.5 sm:text-sm">
              {programs.length} programmes · {programs.at(-1)?.year}–
              {programs[0]?.year}
            </p>
          </div>

          <nav
            aria-label="Jump to a programme year"
            className="pb-2 -mx-4 sm:-mx-6 lg:-mx-4"
          >
            <ul
              ref={yearsRef}
              className="relative flex gap-1 overflow-x-auto px-4 py-4 [scrollbar-width:none] sm:px-6 lg:px-4"
            >
              {programs.map((program, index) => (
                <li key={program.year}>
                  <a
                    href={`#programme-${program.year}`}
                    onClick={(event) =>
                      jumpTo(event, `programme-${program.year}`)
                    }
                    aria-current={index === activeIndex ? "true" : undefined}
                    className={`block rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none ${
                      index === activeIndex
                        ? "bg-secondary text-secondary-foreground"
                        : "text-secondary-text hover:bg-muted"
                    }`}
                  >
                    {program.year}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </SiteContainer>
      </div>

      <SiteContainer>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div ref={listRef}>
            {programs.map((program, index) => (
              <article
                key={program.year}
                id={`programme-${program.year}`}
                aria-labelledby={`programme-${program.year}-title`}
                className={`scroll-mt-[calc(4rem+var(--archive-header))] border-b border-border py-10 transition-opacity duration-300 last:border-b-0 motion-reduce:transition-none lg:min-h-[26rem] lg:scroll-mt-[calc(5rem+var(--archive-header))] lg:py-12 ${
                  index === activeIndex ? "" : "opacity-35"
                }`}
              >
                {program.image && (
                  <div className="relative mb-6 aspect-3/2 overflow-hidden bg-muted lg:hidden">
                    <Image
                      src={program.image.src}
                      alt={program.image.alt}
                      fill
                      sizes="(min-width: 640px) 608px, 100vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex items-start gap-5 sm:gap-8">
                  <p className="font-heading text-5xl leading-none text-primary sm:text-6xl">
                    <time dateTime={String(program.year)}>{program.year}</time>
                  </p>
                  <div className="min-w-0 pt-1">
                    <h3
                      id={`programme-${program.year}-title`}
                      className="text-xl leading-snug sm:text-2xl"
                    >
                      {program.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground sm:text-sm">
                      {program.location.name}
                    </p>
                  </div>
                </div>
                <p className="mt-6 text-sm leading-7 text-foreground/75 sm:text-[15px]">
                  {program.description}
                </p>
              </article>
            ))}
          </div>

          <div className="hidden lg:sticky lg:top-[calc(5rem+var(--archive-header))] lg:flex lg:h-[calc(100svh-5rem-var(--archive-header))] lg:items-center lg:justify-center lg:self-start">
            <div
              aria-hidden={!active.image}
              className={`relative w-full max-w-lg -rotate-2 transition-opacity duration-500 motion-reduce:transition-none ${
                active.image ? "opacity-100" : "opacity-0"
              }`}
            >
              <Polaroid className="pb-4 sm:pb-5">
                <div className="relative aspect-4/3 overflow-hidden bg-neutral-100">
                  {programs.map((program, index) =>
                    program.image ? (
                      <Image
                        key={program.year}
                        src={program.image.src}
                        alt={index === shownIndex ? program.image.alt : ""}
                        fill
                        sizes="(min-width: 1152px) 512px, 45vw"
                        className={`object-cover transition-opacity duration-500 motion-reduce:transition-none ${
                          index === shownIndex ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    ) : null,
                  )}
                </div>
                <div
                  aria-hidden
                  className="mt-4 flex items-baseline justify-between gap-4 px-1"
                >
                  <p className="font-heading text-lg leading-snug text-neutral-900">
                    {shown.title}
                  </p>
                  <p className="shrink-0 text-xs font-semibold tabular-nums text-neutral-600">
                    {pad(shownIndex + 1)} / {pad(programs.length)}
                  </p>
                </div>
              </Polaroid>
              <span
                aria-hidden
                className="absolute -right-4 -top-3 rotate-3 bg-accent px-3 py-1 text-xs font-bold tracking-wider text-accent-foreground shadow-sm"
              >
                {shown.year}
              </span>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
