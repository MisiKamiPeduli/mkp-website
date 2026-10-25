import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteContainer } from "@/components/layout/site-container";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function HomeSupport() {
  return (
    <section aria-labelledby="support-heading" className="py-14 sm:py-20">
      <SiteContainer>
        <div className="mx-auto grid max-w-2xl items-center gap-6 rounded-xl bg-secondary px-6 py-8 text-secondary-foreground sm:p-10 lg:max-w-5xl lg:grid-cols-2 lg:gap-12">
          <h2 id="support-heading" className="text-2xl font-bold leading-snug sm:text-3xl">Be part of <span className="block italic text-accent">MKP 2027.</span></h2>
          <div>
            <p className="text-sm text-secondary-foreground/85">Funding <span aria-hidden="true" className="mx-2 text-accent">·</span> Resources <span aria-hidden="true" className="mx-2 text-accent">·</span> Media</p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-4">
              <ButtonLink href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" size="sm" className="gap-2 px-4 text-[11px] font-semibold uppercase">
                Partner With Us <ArrowUpRight aria-hidden className="size-3.5" />
                <span className="sr-only">on Instagram (opens in a new tab)</span>
              </ButtonLink>
              <ButtonLink href="/programs" variant="link" size="sm" className="gap-2 text-[11px] font-semibold uppercase text-secondary-foreground">
                Explore MKP 2027 <ArrowRight aria-hidden className="size-3.5" />
              </ButtonLink>
            </div>
          </div>
        </div>
      </SiteContainer>
    </section>
  );
}
