import Image from "next/image";
import Link from "next/link";
import type { MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";
import { siteConfig } from "@/lib/site-config";

export function Logo({
  className,
  onClick,
}: {
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <Link
      href="/"
      aria-label={siteConfig.name}
      onClick={onClick}
      className={twMerge(
        "inline-flex shrink-0 items-center justify-self-start rounded-sm bg-white p-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
    >
      <Image
        src="/images/brand/mkp-logo.avif"
        alt=""
        width={150}
        height={54}
        className="h-auto w-28 sm:w-32"
        loading="eager"
        unoptimized
      />
    </Link>
  );
}
