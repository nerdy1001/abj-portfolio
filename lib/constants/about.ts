import { Mail, type LucideIcon } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { BehanceIcon, LinkedInIcon, XIcon } from "@/components/about/social-icons";

// Copy, links and photo for the About section on the home page.

export const ABOUT_EYEBROW = "Who am I?";
export const ABOUT_TITLE =
  "Meet Akere - A Product Engineer who turns ideas into software that is simple, useful, and built to last.";

type Piece = string | { text: string; href: string };

/**
 * Each paragraph is a list of pieces. A plain string is text. An object is a
 * link. The brackets around the last link are in the design, so they are kept.
 * Delete them here if you do not want them.
 */
export const ABOUT_PARAGRAPHS: Piece[][] = [
  [
    "Need an engineer who builds for real conditions, not just the demo? I'm Bryan Akere, a senior frontend and full-stack engineer based in Yaoundé, Cameroon.",
  ],
  [
    "Over six years shipping production software across startups, freelance engagements, and government institutions, including time at Enchird Technologies, and a consultancy that delivered a management system for Cameroon's Ministry of Higher Education. These days, most of my time goes into client work, building Mala, a logistics startup supporting the growth of the informal economy and mentoring other engineers.",
  ],
  [
    "Want to work together, or just want to talk shop? ",
    { text: "[Get in touch]", href: "/contact" },
    ".",
  ],
];

type SocialIcon = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;

/** Replace each href with your own profile or address. */
export const ABOUT_SOCIALS: { label: string; href: string; icon: SocialIcon }[] = [
  { label: "Behance", href: "https://www.behance.net/", icon: BehanceIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: LinkedInIcon },
  { label: "X", href: "https://x.com/", icon: XIcon },
  { label: "Email", href: "mailto:you@example.com", icon: Mail },
];

/**
 * Portrait. The placeholder is cut from your design with the stats bar
 * removed, because the bar is drawn in code. Replace it with your own photo:
 * portrait orientation, about 663 by 809 (ratio 0.82), 1326 by 1618 for sharp
 * results on phones. It fills the frame and is cropped from the centre.
 */
export const ABOUT_PHOTO = {
  src: "/portrait.jpg",
  alt: "Portrait of Akere Bryan James at his desk, wearing a dark suit",
  /** Which part stays in view when the photo is cropped. */
  position: "50% 30%",
} as const;

export const ABOUT_STATS = [
  { value: "5+", label: "Years of experience" },
  { value: "10+", label: "Projects" },
  { value: "200+", label: "Users" },
] as const;