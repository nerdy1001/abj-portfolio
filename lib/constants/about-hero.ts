// All hero copy, links, stats and images live here.

export const SITE_TITLE = "Akere Bryan James";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About me", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const HERO_TITLE = "I build the part of the software that people actually touch.";

export const HERO_SUBTITLE =
  "I am Bryan Akere, a senior frontend and full-stack engineer based in Yaoundé, Cameroon. Over six years I have shipped production software for startups, freelance clients, and a government ministry, mostly in React, TypeScript, and Next.js.";

export const CTA_TEXT = {
  header: "Schedule a call",
  primary: "View my work",
  secondary: "Download Resume",
} as const;

// Replace with your real booking link.
export const BOOKING_URL = "https://example.com/book";

// Put your resume in /public and keep this path, or change it.
export const RESUME_URL = "/resume.pdf";

export const CTA_HREF = {
  header: BOOKING_URL,
  primary: "/portfolio",
  secondary: RESUME_URL,
} as const;

/**
 * The two stat badges. "left" sits over the lower right corner of the left
 * portrait, "right" over the upper left corner of the right portrait.
 */
export const HERO_STATS = [
  { side: "right", value: "6+", label: "Years of experience" },
  { side: "left", value: "20+", label: "Projects shipped" },
] as const;

/**
 * The two portraits at the edges of the hero. They are cut from the design with the
 * stat badges removed. Replace them with your own photos from /public.
 * Left one: about 324 by 746 (portrait). Right one: about 324 by 506.
 * Each is cropped to fill its frame, so other sizes work. Use 2x for sharp screens.
 */
export const HERO_PORTRAITS = {
  left: { src: "/about-portrait-1.png", alt: "Akere Bryan James seated at a desk, in a dark suit" },
  right: { src: "/about-portrait-2.png", alt: "Akere Bryan James in a dark suit, in front of a desktop monitor" },
} as const;

/**
 * BACKGROUND IMAGE PLACEHOLDER
 * Paste a path from /public (for example "/images/hero.jpg") or a full URL.
 * A full URL also needs its host added to images.remotePatterns in next.config.
 * While this is empty, the hero shows the plain navy background.
 */
export const HERO_BACKGROUND_SRC = "";