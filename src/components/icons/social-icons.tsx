import { SVGProps } from "react";
import { siteConfig } from "@/lib/site-config";

type IconProps = SVGProps<SVGSVGElement>;

export function LinkedinIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function TelegramIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.6 5.8L6.6 11.7c-.5.2-.5.9 0 1.1l2.5.8.9 3.1c.1.4.6.5.9.3l1.5-1.3 2.7 2c.4.3 1 .1 1.1-.4l1.8-8.7c.1-.5-.4-1-.9-.8Zm-1.4 2.1-4.6 4.2-.2 1.9-.7-2.4 5.5-3.7Z"
      />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export const socialLinks = [
  { label: "LinkedIn", href: siteConfig.linkedinUrl, Icon: LinkedinIcon },
  { label: "Telegram", href: siteConfig.telegramUrl, Icon: TelegramIcon },
  { label: "Instagram", href: siteConfig.instagramUrl, Icon: InstagramIcon },
];
