import { GitHubIcon } from "@/components/about/social-icons";
import { ABOUT_SOCIALS } from "@/lib/constants/about";

// Copy for /contact. The form's labels and button text live in contact.ts.

export const CONTACT_PAGE_TITLE = "Get in touch";

export const CONTACT_PAGE_PARAGRAPHS: readonly string[] = [
  "Whether you are hiring, building something, or simply want to trade ideas, I would like to hear from you. The surest way to reach me is email, and I read every message.",
  "I am open to full stack engineering roles, and the occasional project worth doing. If you think we might be a fit, say hello and tell me a little about what you have in mind.",
];

const about = (label: string) => {
  const link = ABOUT_SOCIALS.find((social) => social.label === label);
  if (!link) throw new Error(`No "${label}" link in ABOUT_SOCIALS`);
  return link;
};

/**
 * Behance, LinkedIn, GitHub and email, in the design's order. Behance,
 * LinkedIn and email reuse the addresses in about.ts, so they are set once.
 */
export const CONTACT_PAGE_SOCIALS = [
  about("Behance"),
  about("LinkedIn"),
  { label: "GitHub", href: "https://github.com/nerdy1001", icon: GitHubIcon },
  about("Email"),
];
