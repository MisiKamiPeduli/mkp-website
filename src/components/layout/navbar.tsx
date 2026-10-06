"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navItems, siteConfig } from "@/lib/site-config";
import { SiteContainer } from "./site-container";

export function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpenDropdown(null);
    setMobileOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpenDropdown(null);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[var(--background)]/95 backdrop-blur">
      <SiteContainer>
        <nav ref={navRef} className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            {siteConfig.shortName}
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <li key={item.label} className="relative">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      aria-haspopup="true"
                      aria-expanded={openDropdown === item.label}
                      onClick={() =>
                        setOpenDropdown((current) =>
                          current === item.label ? null : item.label
                        )
                      }
                      className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-black/5 ${
                        isActive(item.href) ? "text-blue-700" : ""
                      }`}
                    >
                      {item.label}
                      <span aria-hidden className="text-xs">
                        {openDropdown === item.label ? "▲" : "▼"}
                      </span>
                    </button>
                    {openDropdown === item.label && (
                      <ul className="absolute left-0 top-full mt-1 min-w-48 rounded-md border border-black/10 bg-[var(--background)] py-1 shadow-lg">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={`block px-4 py-2 text-sm hover:bg-black/5 ${
                                pathname === child.href
                                  ? "text-blue-700"
                                  : ""
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-black/5 ${
                      isActive(item.href) ? "text-blue-700" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-md hover:bg-black/5 lg:hidden"
          >
            <span aria-hidden>{mobileOpen ? "✕" : "☰"}</span>
          </button>
        </nav>

        {mobileOpen && (
          <div className="border-t border-black/10 pb-4 lg:hidden">
            <ul className="flex flex-col gap-1 pt-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`block rounded-md px-3 py-2 text-sm font-medium hover:bg-black/5 ${
                      isActive(item.href) ? "text-blue-700" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="ml-4 flex flex-col gap-1 border-l border-black/10 pl-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className={`block rounded-md px-3 py-2 text-sm hover:bg-black/5 ${
                              pathname === child.href ? "text-blue-700" : ""
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </SiteContainer>
    </header>
  );
}
