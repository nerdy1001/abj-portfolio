import type { ImageSource } from "@/components/ui/image-slot";
import { BOOKING_URL } from "@/lib/constants/hero";
import type { ProjectCategory } from "@/lib/constants/projects";

// Copy for /portfolio and the shared labels on project pages.

export const PORTFOLIO_EYEBROW = "Portfolio";
export const PORTFOLIO_TITLE = "The work.";
export const PORTFOLIO_DESCRIPTION =
  "A look at the products I have shipped, from the first idea to the version real people use, and the decisions that shaped each one.";
export const PORTFOLIO_CTA = { text: "Schedule a call", href: BOOKING_URL } as const;

/** The two badges over the images in the dark intro card. */
export const PORTFOLIO_STATS = {
  projects: { value: "20+", label: "projects completed" },
  years: { value: "6+", label: "years of experience" },
} as const;

/**
 * The two framed images in the intro card. Both start empty.
 * laptop: 595 by 368 inside its frame. card: 305 by 240 inside its frame.
 */
export const PORTFOLIO_INTRO_IMAGES: { laptop: ImageSource; card: ImageSource } = {
  laptop: { src: "/portfolio-intro-laptop.png", alt: "Mala customer app on a laptop" },
  card: { src: "/portfolio-intro-card.png", alt: "A dish card from the Mala menu" },
};

export const PORTFOLIO_FILTERS: readonly ("All" | ProjectCategory)[] = [
  "All",
  "Personal",
  "Startup",
  "Enterprise",
];

export const PORTFOLIO_EMPTY = "No projects in this category yet.";
export const READ_MORE = "Read more";

export const PROJECT_LABELS = {
  client: "Client",
  sector: "Sector",
  duration: "Duration",
  overview: "Project overview",
  approach: "My approach",
} as const;
