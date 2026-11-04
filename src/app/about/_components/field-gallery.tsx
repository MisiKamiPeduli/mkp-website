import Image from "next/image";
import { SiteContainer } from "@/components/layout/site-container";

const photos = [
  {
    src: "/images/documentation/nias-2024-team-panels.jpg",
    alt: "MKP volunteers smiling together in front of newly installed solar panels",
    className: "aspect-4/3 sm:col-span-2 lg:row-span-2 lg:aspect-auto",
    sizes: "(min-width: 1024px) 50vw, 100vw",
  },
  {
    src: "/images/documentation/nias-2024-array.jpg",
    alt: "A solar panel array on a steel frame, with a control box mounted underneath",
    className: "aspect-4/3",
    sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
  },
  {
    src: "/images/documentation/nias-2024-community.jpg",
    alt: "Residents gathered under the solar panels as the control box is explained",
    className: "aspect-4/3",
    sizes: "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw",
  },
  {
    src: "/images/documentation/nias-2024-site.jpg",
    alt: "The solar installation under construction, surrounded by palm trees",
    className: "aspect-4/3 sm:col-span-2 sm:aspect-8/3",
    sizes: "(min-width: 1024px) 50vw, 100vw",
    position: "center 62%",
  },
];

export function FieldGallery() {
  return (
    <section aria-labelledby="field-gallery-heading" className="pb-16 sm:pb-24">
      <SiteContainer>
        <div className="text-center">
          <h2 id="field-gallery-heading" className="text-3xl italic sm:text-4xl">From the Field</h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted-foreground">
            Building a solar irrigation system in Desa Afia, Nias, in 2024, to
            support 80 hectares of paddy fields.
          </p>
        </div>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map((photo) => (
            <li key={photo.src} className={`relative overflow-hidden rounded-xl bg-muted ${photo.className}`}>
              <Image src={photo.src} alt={photo.alt} fill sizes={photo.sizes} className="object-cover" style={photo.position ? { objectPosition: photo.position } : undefined} />
            </li>
          ))}
        </ul>
      </SiteContainer>
    </section>
  );
}
