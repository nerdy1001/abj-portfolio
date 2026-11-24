import type { ImageSource } from "@/components/ui/image-slot";

/**
 * Every project shown on /portfolio and at /portfolio/[slug].
 *
 * Text can be a plain string, or a list of pieces where a piece with an href
 * becomes a link. List items can start with a bold lead-in ("One service:").
 *
 * Images: every src is empty, so the pages show grey blocks of the right size.
 * Put a path from /public (or an allowed remote URL) in src to fill one.
 * Sizes at desktop, double them for sharp screens:
 *   card     416 x 473   (portfolio list, left of each card)
 *   cover    1546 x 688  (top of the project page, inside the grey frame)
 *   gallery  879 x 540 and 655 x 540 panels (the two images between the sections);
 *            a "device" image is shown at about 752 x 449 inside the first
 *
 * Gallery backgrounds: each gallery image takes an optional background, any
 * CSS colour ("#C02F11", "rgb(234 171 45)"). It fills the panel behind the
 * image, so a screenshot or device mockup exported with a transparent
 * background sits on the colour, as in the Mala design. Leave it out and the
 * panel stays grey until an image is added.
 *
 * The first gallery panel shows its whole image (the full laptop, not only the
 * screen). Export the mockup on a transparent background, trimmed close to the
 * device; it is scaled to fit and stands on the panel's bottom edge.
 */

export type RichText = string | ReadonlyArray<string | { text: string; href: string }>;
export type ListItem = string | { lead: string; text: RichText };
export type ProjectBlock = { intro: RichText; items: readonly ListItem[]; outro?: RichText };

export type GalleryImage = ImageSource & {
  background?: string;
  /**
   * "device" shows the whole image inside the panel, standing on the bottom edge
   * with colour around it (use it for a laptop or phone mockup).
   * "bleed" starts at the same height as a "device" image and runs off the right
   * and bottom edges, cropped there (the yellow panel in the design).
   * "cover" fills the whole panel and crops.
   * Left out, the first panel uses "device" and the second "bleed".
   */
  fit?: "device" | "bleed" | "cover";
};

export type ProjectCategory = "Personal" | "Startup" | "Enterprise";

export type Project = {
  slug: string;
  title: string;
  /** Used by the filter on /portfolio. Also shown as the first tag. */
  category: ProjectCategory;
  /** Tags after the category. */
  tags: readonly string[];
  /** The two paragraphs on the portfolio card. */
  summary: readonly [string, string];
  /** The paragraph beside the title on the project page. */
  description: string;
  client: string;
  sector: string;
  duration: string;
  overview: ProjectBlock;
  approach: ProjectBlock;
  images: {
    card: ImageSource;
    cover: ImageSource;
    gallery: readonly [GalleryImage, GalleryImage];
  };
};

const panel = (alt: string, background?: string): GalleryImage => ({ src: "", alt, background });

export const PROJECTS: readonly Project[] = [
  {
    slug: "mala",
    title: "Mala",
    category: "Startup",
    tags: ["Commerce", "Product Design"],
    summary: [
      "Mala is an ordering and delivery platform for informal food vendors in Yaoundé, built on the belief that the small businesses that feed a city deserve software made for the way they actually work.",
      "It started with food delivery and needed a customer app and a vendor app that worked as one: quick to order from on a mobile connection, and simple enough to run one-handed in a busy kitchen.",
    ],
    description:
      "Mala is an ordering and delivery platform for informal food vendors in Yaoundé. Most of these vendors take orders by phone call and chat message, where an order lost in a thread is revenue lost, and a busy kitchen has no time for software that gets in the way.",
    client: "Mala",
    sector: "Commerce & Logistics",
    duration: "8 weeks to launch, then 4 weeks of live operation",
    overview: {
      intro:
        "As Product Engineer, I built Mala’s customer ordering app and vendor order dashboard, with the full order flow working between them.",
      items: [
        "Designed an 8-step vendor onboarding, menu management and a 60-component design system shared by both apps.",
        "Built a Turborepo monorepo with two Next.js apps, an Express 5 and Socket.io API, and PostgreSQL through Prisma.",
        "Modelled the order lifecycle as a state machine with 9 statuses and 12 transitions.",
        "Launched with 5 vendors averaging about 10 orders a day each, then handed the codebase over after four weeks of live operation, with architecture guides so another engineer could take it forward.",
      ],
    },
    approach: {
      intro:
        "I designed for the kitchen first, and gave the system one set of rules wherever it could have had several.",
      items: [
        "The vendor dashboard works with one hand during service, and every order edge case was defined before any code was written.",
        "A shared package of 25 Zod schemas means the browser and the server validate the same data in the same way.",
        "Every order change follows the same state machine, whichever screen sends it.",
        "Payments and order status are kept consistent inside a single deployable service, so the two cannot drift apart.",
        "Delivery estimates use the Haversine formula instead of a paid routing API, a deliberate trade of precision for cost at this stage. Order updates reach vendors in under 200 ms.",
      ],
    },
    images: {
      card: {
        src: "/project-mala-card.png",
        alt: "Mala vendor order screens"
      },
      cover: {
        src: "/oo.png",
        alt: "Mala customer app home screen with featured vendors"
      },
      gallery: [
        {
          src: "/project-mala-gallery-11.png",
          alt: "Mala customer app on a laptop",
          background: "#C02F11",
          fit: "device"
        },
        {
          src: "/project-mala-gallery-22.png",
          alt: "A Mala vendor menu page on a laptop",
          background: "#EAAB2D",
        }
      ],
    },
  },
  {
    slug: "mala-mvp",
    title: "Mala MVP",
    category: "Startup",
    tags: ["Logistics", "Product Strategy"],
    summary: [
      "The Mala MVP is a managed delivery service in which Mala handled vendors’ deliveries itself, using riders from a logistics partner, built on the idea that vendors trust a service before they trust a platform.",
      "Vendors were booking deliveries through phone calls and chat threads, and needed one place to send several orders at once: a single request for every recipient, each with the time it had to arrive.",
    ],
    description:
      "The Mala MVP is a managed delivery service in which Mala handled vendors’ deliveries itself, using riders from a logistics partner. Before vendors would move their business onto a new platform, they needed to trust that deliveries would arrive.",
    client: "Mala",
    sector: "Logistics",
    duration: "[duration]",
    overview: {
      intro: "I defined a leaner first release that tested the service before the platform.",
      items: [
        "Built a vendor delivery request page in React Router 7 where a vendor books deliveries for several recipients in one request, without a phone call or a chat thread.",
        "Added a “needed by” time for each recipient, with a picker that accepts the 12-hour or the 24-hour format but always stores a single 24-hour value.",
        "Checked every request against the same Zod schemas in the browser and on the server.",
        "Sent each request to a dedicated Slack channel as a structured message, with follow-up on WhatsApp.",
      ],
    },
    approach: {
      intro:
        "The question was whether vendors would trust the service, not whether we could build tracking software, so I built only what that question needed.",
      items: [
        "Slack gave the operations team one place to track every delivery at almost no build cost.",
        "Storing one time format meant the team never received an ambiguous deadline.",
        "The trade-off was less automation in exchange for a faster launch, and in return the product was learning from real deliveries within weeks.",
      ],
    },
    images: {
      card: {
        src: "/project-mala-mvp-card.png",
        alt: "Mala MVP delivery request page"
      },
      cover: {
        src: "/project-mala-mvp-cover.png",
        alt: "Mala MVP delivery request page"
      },
      gallery: [
        {
          src: "/project-mala-mvp-gallery-2.png",
          alt: "Mala MVP request form",
          background: "#C02F11",
          fit: "device"
        },
        {
          src: "/project-mala-mvp-gallery-1.png",
          alt: "Mala MVP recipient list",
          background: "#EAAB2D"
        }
      ],
    },
  },
  {
    slug: "minesup",
    title: "MINESUP Scholarship Management System",
    category: "Enterprise",
    tags: ["Government", "Engineering"],
    summary: [
      "The Scholarship Management System is a platform for Cameroon’s Ministry of Higher Education to manage the scholars it sponsors abroad, built on the belief that a scholar’s file should not depend on paper and memory.",
      "The department follows 200 scholars from award to completion without an IT team of its own, and needed a system that held both demands at once: the strict security that sensitive records require, and the simplicity that staff new to computerised systems need.",
    ],
    description:
      "Cameroon’s Ministry of Higher Education sponsors 200 scholars studying abroad. Their files, bursary payments and academic progress were tracked on paper and in spreadsheets by a department with no IT team. A mistake there affects whether a student abroad gets paid.",
    client: "Ministry of Higher Education (MINESUP)",
    sector: "Government & Education",
    duration: "Ongoing since March 2025",
    overview: {
      intro:
        "I am the lead engineer and the main technical decision-maker on a system that covers registration, academic monitoring, annual bursary commitments, payments and completion, for 20 staff.",
      items: [
        "Delivered a working prototype four weeks after first meeting Ministry staff, which led to a contract for the full system.",
        "Interviewed staff with a bilingual guide in English and French, wrote 13 process scenarios, and revised the requirements specification.",
        "Separated an internal staff application, closed to outside access, from a secured student portal, with PostgreSQL row-level security on every table.",
        "Set up audit logging of every change, a CI pipeline with four required jobs, and a staging environment defined entirely as code, reachable only through a private network.",
        "Scripted deployments that back up, migrate and roll back automatically. Version 2 is now in development.",
      ],
    },
    approach: {
      intro:
        "I started with how the office actually works, then made each decision with two people in mind: the staff member new to computerised systems, and the attacker the system has to keep out.",
      items: [
        "Sign-in uses email and password with multi-factor authentication, instead of passkeys or a heavier identity system, because staff need to use it without support.",
        "Access rules are enforced inside the database, so they hold even if the application code has a bug.",
        "An audit entry is written in the same transaction as each change. A route that changes data without declaring an audit action stops the application from starting, so a missing audit is impossible rather than unlikely.",
        "Every release can be reversed, and every backup is proven by a test restore.",
      ],
    },
    images: {
      card: {
        src: "/project-minesup-card.png",
        alt: "MINESUP Scholarship Management System staff dashboard"
      },
      cover: {
        src: "/project-minesup-cover.png",
        alt: "MINESUP Scholarship Management System staff dashboard"
      },
      gallery: [
        {
          src: "/project-minesup-gallery-111.png",
          alt: "Scholar file screen",
          background: "#1E40AF",
          fit: "device"
        },
        {
          src: "/project-minesup-gallery-22.png",
          alt: "Student portal registration screen",
          background: "#D8E0FA"
        }
      ],
    },
  },
  {
    slug: "traverse",
    title: "Traverse",
    category: "Personal",
    tags: ["Developer Tools", "AI"],
    summary: [
      "Traverse turns any public TypeScript or JavaScript repository into a map you can click through, built on the belief that a map which is 90% right is worse than no map at all.",
      "Teams shipping AI-written code can no longer read all of it, and needed a way to see what breaks before changing a file: every connection parsed from the real code, and every explanation limited to what the parser has proved.",
    ],
    description:
      "Traverse turns any public TypeScript or JavaScript repository into a map you can click through. Teams now ship code faster than they can read it, much of it written by AI agents, and the question that matters most before any change, “what breaks if I touch this file?”, has no answer short of tracing imports by hand.",
    client: "Personal project",
    sector: "Developer Tools & AI",
    duration: "[about 2 weeks]",
    overview: {
      intro: [
        "Traverse maps a codebase, explains it and answers questions about it. It is live at ",
        { text: "traverse-flame-alpha.vercel.app", href: "https://traverse-flame-alpha.vercel.app" },
        ".",
      ],
      items: [
        "A parser reads every import, re-export and dynamic import, with adapters for Next.js, NestJS, React and Express.",
        "An interactive map shows blast radius and dependency chains, calculated instantly in the browser.",
        "AI explanations of any file or folder are written only from the files it actually connects to.",
        "A question-answering agent walks the real graph step by step.",
        "Team workspaces have sign-in, and each team’s data is isolated by row-level security in the database.",
      ],
    },
    approach: {
      intro:
        "One rule shaped everything: every connection on the map comes from parsing real code, and the AI may only explain what the parser has already proved.",
      items: [
        "Imports that cannot be resolved are reported with a reason, never guessed, because a map that is 90% right is worse than no map.",
        "I wrote the specifications and acceptance criteria for 13 development phases and checked every phase before the next one began.",
        "A deterministic check tests every file path in an explanation against the paths the model was actually given, and 95% of explanations on live traffic named only real files.",
        "The agent is limited to six read-only tools, and the analysis it reads is fixed by a credential signed inside the database, so code it reads cannot point it at another team’s data.",
      ],
    },
    images: {
      card: {
        src: "/project-traverse-card.png",
        alt: "Traverse map of a repository"
      },
      cover: {
        src: "/project-traverse-cover.png",
        alt: "Traverse map of a repository"
      },
      gallery: [
        {
          src: "/project-traverse-gallery-1.png",
          alt: "Traverse blast radius view",
          background: "#60A5FA",
          fit: "device"
        },
        {
          src: "/project-traverse-gallery-2.png",
          alt: "Traverse file explanation panel",
          background: "#CAD3DE"
        }
      ],
    },
  },
  {
    slug: "prepper",
    title: "Prepper",
    category: "Personal",
    tags: ["Careers", "AI"],
    summary: [
      "Prepper is a voice-based mock interview tool, built on the belief that interviews are won by practising out loud, not by rereading notes.",
      "Job seekers rarely get honest feedback before the real thing, and needed a way to rehearse with a voice interviewer for their exact role and level, then see where they stand across five scored areas.",
    ],
    description:
      "Prepper is a voice-based mock interview tool. Most job seekers prepare by rereading notes, but interviews are spoken, and the first time many candidates answer a question out loud is in the interview itself.",
    client: "Personal project",
    sector: "Careers & AI",
    duration: "[duration]",
    overview: {
      intro: "Prepper runs a spoken mock interview for a chosen role and level, then scores the result.",
      items: [
        "A short voice conversation collects the role, level, tech stack and number of questions, and Gemini writes the interview.",
        "A voice interviewer built on Vapi, with Deepgram transcription and an ElevenLabs voice, runs it with a live transcript.",
        "The transcript is scored in five areas, with strengths, areas to improve and a final assessment.",
        "About 12 people tried it. One used it to prepare for a real interview, and some of the questions they practised came up in it.",
      ],
    },
    approach: {
      intro: "Everything had to work as speech, and every result had to be comparable.",
      items: [
        "Questions are written for a voice to read aloud, without symbols that would break the reading.",
        "Scoring uses a fixed set of five categories, so every report has the same structure and a candidate can compare one attempt with the next.",
      ],
    },
    images: {
      card: {
        src: "/project-prepper-card.png",
        alt: "Prepper interview setup screen"
      },
      cover: {
        src: "/project-prepper-cover.png",
        alt: "Prepper interview setup screen"
      },
      gallery: [
        {
          src: "/project-prepper-gallery-1.png",
          alt: "Prepper live interview with transcript",
          background: "#FFC19E",
          fit: "device"
        },
        {
          src: "/project-prepper-gallery-2.png",
          alt: "Prepper feedback report",
          background: "#DDDFFF"
        }
      ],
    },
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}
