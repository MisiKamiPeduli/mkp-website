import { SiteContainer } from "@/components/layout/site-container";
import { footprints } from "./footprints-data";
import { FootprintsMap } from "./footprints-map";

export function FootprintsSection() {
  return (
    <section className="py-16 sm:py-24">
      <SiteContainer>
        <div className="text-center">
          <h2 className="text-3xl italic sm:text-4xl">Our Footprints</h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
            Since 2009, MKP has partnered with {footprints.length} villages
            across the archipelago — one community each year.
          </p>
        </div>
        <FootprintsMap />
      </SiteContainer>
    </section>
  );
}
