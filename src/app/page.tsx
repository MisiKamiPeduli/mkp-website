import Link from "next/link";
import { SiteContainer } from "@/components/layout/site-container";

export default function HomePage() {
  return (
    <SiteContainer>
      <section className="py-16 sm:py-24">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Misi Kami Peduli
        </h1>
        <p className="mt-4 max-w-2xl text-black/70 dark:text-white/70">
          MKP brings volunteers together to run community and conservation
          programs across Indonesia. This page will introduce our mission and
          highlight our current program.
        </p>
      </section>

      <section className="rounded-lg border border-black/10 p-6 sm:p-8">
        <p className="text-sm font-medium uppercase tracking-wide text-blue-700">
          Current Program
        </p>
        <h2 className="mt-2 text-2xl font-semibold">
          MKP 2027: Way Kambas, Lampung
        </h2>
        <p className="mt-3 max-w-2xl text-black/70 dark:text-white/70">
          Details about the Way Kambas program overview will be placed here
          directly on the landing page.
        </p>
        <Link
          href="/programs"
          className="mt-4 inline-block text-sm font-medium text-blue-700 hover:underline"
        >
          See all current programs →
        </Link>
      </section>
    </SiteContainer>
  );
}
