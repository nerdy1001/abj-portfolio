import { BOOKING_URL } from "@/lib/constants/hero";
import { ABOUT_SOCIALS } from "@/lib/constants/about";

// Copy and links for the site footer.

export const FOOTER_TITLE = "Got a project in mind ?";
export const FOOTER_CTA = { text: "Schedule a call", href: BOOKING_URL } as const;

export const FOOTER_COLUMNS: ReadonlyArray<{
  title: string;
  links: ReadonlyArray<{ label: string; href: string }>;
}> = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "About Me", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms and Conditions", href: "/terms" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
];

export const FOOTER_COPYRIGHT = "© akerebryanjames.com. All rights reserved.";

/** Same links as the About section, so you only edit them once in constants/about.ts. */
export const FOOTER_SOCIALS = ABOUT_SOCIALS;