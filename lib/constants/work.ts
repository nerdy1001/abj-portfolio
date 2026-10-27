// Copy and projects for the latest work section.

export const WORK_EYEBROW = "Bryan James’s Latest Work";
export const WORK_TITLE = "Designing Better Outcomes";
export const WORK_DESCRIPTION =
  "Real products, shipped and used by real people. Each one started as an idea and became something that works in the world. Here is a closer look at how that happens.";
export const WORK_CTA = { text: "View all work", href: "/portfolio" } as const;

/**
 * image is optional. While it is empty, the card shows the grey placeholder.
 * Use a path from /public (for example "/images/work/mala.jpg").
 * Give each image a short alt text in imageAlt.
 */
export const WORK_PROJECTS: ReadonlyArray<{
  title: string;
  category: string;
  href: string;
  image?: string;
  imageAlt?: string;
}> = [
  { title: "Mala", category: "Logistics", href: "/portfolio/mala" },
  { title: "Prepper", category: "Education", href: "/portfolio/prepper" },
  { title: "Jottr", category: "Productivity", href: "/portfolio/jottr" },
];