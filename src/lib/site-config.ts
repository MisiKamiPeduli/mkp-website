export const siteConfig = {
  name: "Misi Kami Peduli",
  shortName: "MKP",
  description:
    "Misi Kami Peduli (MKP) is a volunteer-driven humanitarian organization running community and conservation programs across Indonesia.",
};

export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = NavLink & {
  children?: NavLink[];
};

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Past Sponsors", href: "/about/past-sponsors" },
      { label: "Our Team", href: "/about/our-team" },
    ],
  },
  {
    label: "What We Do",
    href: "/programs",
    children: [
      { label: "Current Programs", href: "/programs" },
      { label: "Past Programs", href: "/programs/past" },
    ],
  },
];
