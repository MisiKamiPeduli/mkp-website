import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site-config";
import { SiteContainer } from "./site-container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10">
      <SiteContainer>
        <div className="flex flex-col gap-8 py-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <p className="text-sm font-semibold">{siteConfig.name}</p>
            <p className="mt-2 text-sm text-black/60 dark:text-white/60">
              {siteConfig.description}
            </p>
          </div>

          <nav aria-label="Footer" className="flex gap-8">
            {navItems.map((item) => (
              <div key={item.label}>
                <Link href={item.href} className="text-sm font-medium">
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="mt-2 flex flex-col gap-1">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="text-sm text-black/60 hover:text-black dark:text-white/60 dark:hover:text-white"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="border-t border-black/10 py-4 text-xs text-black/50 dark:text-white/50">
          © {year} {siteConfig.name} ({siteConfig.shortName}). All rights
          reserved.
        </div>
      </SiteContainer>
    </footer>
  );
}
