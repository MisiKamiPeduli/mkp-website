import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label={siteConfig.name}
      className="flex items-center gap-2 text-foreground"
    >
      <Image
        src="/logo.svg"
        alt=""
        width={36}
        height={36}
        priority
        unoptimized
      />
      <span className="flex flex-col">
        <span className="text-2xl font-semibold leading-none tracking-tight uppercase">
          {siteConfig.shortName}
        </span>
        <span className="mt-0.5 text-[9px] font-semibold uppercase leading-none tracking-wide">
          Mission: We Care
        </span>
      </span>
    </Link>
  );
}
