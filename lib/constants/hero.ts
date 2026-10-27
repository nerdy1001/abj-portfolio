// All hero copy, links and the background image live here.

export const SITE_TITLE = "Akere Bryan James";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About me", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const HERO_TITLE = "I build interfaces for the hardest conditions.";

export const HERO_SUBTITLE =
  "Six years shipping production frontend in React, TypeScript, and Next.js, for startups, agencies, and government institutions across Cameroon.";

export const CTA_TEXT = {
  header: "Schedule a call",
  primary: "View my work",
  secondary: "Get in touch",
} as const;

// Replace with your real booking link.
export const BOOKING_URL = "https://example.com/book";

export const CTA_HREF = {
  header: BOOKING_URL,
  primary: "/portfolio",
  secondary: "/contact",
} as const;

/**
 * BACKGROUND IMAGE PLACEHOLDER
 * Paste a path from /public (for example "/images/hero.jpg") or a full URL.
 * A full URL also needs its host added to images.remotePatterns in next.config.
 * While this is empty, the hero shows the plain navy background.
 */
export const HERO_BACKGROUND_SRC = "/abj-portfolio-hero.jpg";