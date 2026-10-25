import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { InstagramIcon } from "@/components/icons/social-icons";
import { SiteContainer } from "@/components/layout/site-container";
import { Button, ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

const inputClassName = "mt-2 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm disabled:cursor-not-allowed";

export function HomeContact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24 bg-background pb-14 sm:pb-20">
      <SiteContainer>
        <div className="mx-auto grid max-w-2xl items-start gap-8 md:grid-cols-[0.8fr_1.2fr] lg:max-w-5xl lg:gap-16">
          <div>
            <h2 id="contact-heading" className="text-3xl font-bold leading-snug sm:text-4xl">Get in touch <span className="block italic text-secondary dark:text-foreground">with us.</span></h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/75">Questions, ideas, or collaborations? We’d love to hear from you.</p>
            <a href={`mailto:${siteConfig.contactEmail}`} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-secondary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring dark:text-foreground">
              <Mail aria-hidden className="size-4 shrink-0 text-primary" />
              {siteConfig.contactEmail}
            </a>
            <div>
              <ButtonLink href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer" variant="link" size="sm" className="mt-4 gap-2 text-sm font-medium text-secondary dark:text-foreground">
                <InstagramIcon className="size-4 text-primary" /> @misikamipeduli <ArrowUpRight aria-hidden className="size-4" />
                <span className="sr-only">(opens in a new tab)</span>
              </ButtonLink>
            </div>
          </div>

          <form aria-label="Contact form preview" aria-describedby="contact-form-note">
            <fieldset disabled className="grid gap-4 sm:grid-cols-2">
              <legend className="sr-only">Send us a message</legend>
              <label className="text-xs font-medium">
                Name
                <input name="name" autoComplete="name" className={inputClassName} />
              </label>
              <label className="text-xs font-medium">
                Email
                <input name="email" type="email" autoComplete="email" className={inputClassName} />
              </label>
              <label className="text-xs font-medium sm:col-span-2">
                Message
                <textarea name="message" rows={5} className={`${inputClassName} block resize-y`} />
              </label>
            </fieldset>
            <Button type="button" disabled size="sm" className="mt-4 gap-2 px-4 text-[11px] font-semibold uppercase disabled:cursor-not-allowed disabled:opacity-50">
              Send message <ArrowRight aria-hidden className="size-3.5" />
            </Button>
            <p id="contact-form-note" className="mt-3 text-xs text-muted-foreground">Please email us directly for now.</p>
          </form>
        </div>
      </SiteContainer>
    </section>
  );
}
