"use client";

import { ChevronDown, Mail, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navItems, siteConfig } from "@/lib/site-config";
import { Button, ButtonLink } from "@/components/ui/button";
import { Logo } from "./logo";
import { SiteContainer } from "./site-container";

type MobileMenuProps = {
  id: string;
  pathname: string;
  onClose: () => void;
  onContact: () => void;
};

export function MobileMenu({
  id,
  pathname,
  onClose,
  onContact,
}: MobileMenuProps) {
  const [openSection, setOpenSection] = useState<string | null>(
    () =>
      navItems.find(
        (item) => item.children?.some((child) => child.href === pathname),
      )?.label ?? null,
  );

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") onClose();
    }
    const desktop = window.matchMedia("(min-width: 1024px)");
    function handleBreakpoint(event: MediaQueryListEvent) {
      if (event.matches) onClose();
    }

    document.addEventListener("keydown", handleEscape);
    desktop.addEventListener("change", handleBreakpoint);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
      desktop.removeEventListener("change", handleBreakpoint);
    };
  }, [onClose]);

  return (
    <div
      id={id}
      className="fixed inset-0 z-50 flex flex-col bg-background lg:hidden"
    >
      <div className="border-b border-border">
        <SiteContainer>
          <div className="flex h-16 items-center justify-between">
            <Logo />
            <Button
              variant="ghost"
              size="icon"
              aria-label="Close menu"
              onClick={onClose}
              className="-mr-2"
            >
              <X className="size-6" />
            </Button>
          </div>
        </SiteContainer>
      </div>

      <nav aria-label="Main" className="flex-1 overflow-y-auto">
        <SiteContainer>
          <ul>
            {navItems.map((item) => {
              const expanded = openSection === item.label;
              return (
                <li key={item.label} className="border-b border-border">
                  {item.children ? (
                    <>
                      <Button
                        variant="link"
                        aria-expanded={expanded}
                        onClick={() =>
                          setOpenSection(expanded ? null : item.label)
                        }
                        className={`w-full justify-between py-5 text-left font-heading text-3xl font-normal whitespace-normal ${
                          expanded ? "italic text-secondary" : ""
                        }`}
                      >
                        {item.label}
                        <ChevronDown
                          className={`size-5 transition-transform ${
                            expanded ? "rotate-180" : ""
                          }`}
                        />
                      </Button>
                      {expanded && (
                        <ul className="flex flex-col gap-1 pb-5">
                          {item.children.map((child) => {
                            const active = pathname === child.href;
                            return (
                              <li key={child.href}>
                                <Link
                                  href={child.href}
                                  aria-current={active ? "page" : undefined}
                                  className={`relative block py-2 pl-6 text-base ${
                                    active
                                      ? "font-semibold text-foreground"
                                      : "text-muted-foreground hover:text-foreground"
                                  }`}
                                >
                                  {active && (
                                    <span
                                      aria-hidden
                                      className="absolute left-1 top-1/2 size-1.5 -translate-y-1/2 rounded-full bg-primary"
                                    />
                                  )}
                                  {child.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      aria-current={pathname === item.href ? "page" : undefined}
                      className="block py-5 font-heading text-3xl"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </SiteContainer>
      </nav>

      <SiteContainer>
        <div className="flex flex-col gap-3 py-4">
          <ButtonLink
            href={siteConfig.donateUrl}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="font-semibold uppercase tracking-wide"
          >
            Donate
          </ButtonLink>
          <Button
            variant="ghost"
            size="lg"
            onClick={onContact}
            className="border border-border"
          >
            <Mail />
            Contact us
          </Button>
        </div>
      </SiteContainer>
    </div>
  );
}
