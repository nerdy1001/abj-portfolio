import { Brain, Container, Palette, type LucideIcon } from "lucide-react";

// Copy and media for the "How I work" section.

export const PROCESS_CARD_DESIGN_WIDTH = 462;
export const PROCESS_EYEBROW = "Smooth & thoughtful process";
export const PROCESS_TITLE = "How I work";

/**
 * Media files are cut from the design screenshot, so they are small.
 * Replace the files in /public/images/process and update width and height
 * to match the new file. Each image is shown at the full width of its card,
 * flush with the bottom edge.
 * The design shows no icon on the second step, so it has none.
 */
export const PROCESS_STEPS: ReadonlyArray<{
  number: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  media: { src: string; width: number; height: number; alt: string };
}> = [
  {
    number: "01",
    title: "Understand",
    icon: Brain,
    description:
      "Before a single line of code, I work to understand the real problem, who it serves, what it needs to do, and what success actually looks like. Most products go wrong because this step was rushed, so it is where I spend the most care.",
    media: {
      src: "/process-1.png",
      width: 375,
      height: 319,
      alt: "A planning board filled with coloured sticky notes",
    },
  },
  {
    number: "02",
    title: "Shape",
    icon: Palette,
    description:
      "Then I shape the solution, mapping the flow and stripping away everything that is not essential. The aim is the shortest, clearest path from the problem to something people can genuinely use.",
    media: {
      src: "/process-2.png",
      width: 375,
      height: 387,
      alt: "A system diagram above a design file with app screens",
    },
  },
  {
    number: "03",
    title: "Ship",
    icon: Container,
    description:
      "Then I build it properly and put it in people's hands. Working software teaches you things no plan ever could, so I keep improving it with what I learn from the people who use it.",
    media: {
      src: "/process-3.png",
      width: 375,
      height: 381,
      alt: "A deployment dashboard showing a production release",
    },
  },
];