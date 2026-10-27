import {
  Binary,
  BrainCircuit,
  CloudUpload,
  CodeXml,
  Database,
  Package,
  Shapes,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { BlueprintIcon, CirclesIcon, SqlFileIcon, TreeNodesIcon } from "@/components/value/icons";

// Copy and layout data for the "The Value I bring" section.

export const VALUE_EYEBROW = "Smooth & thoughtful process";
export const VALUE_TITLE = "The Value I bring";
export const VALUE_DESCRIPTION =
  "Great products emerge when design, engineering, infrastructure, and data work together in service of the user. These are the disciplines through which I transform ideas into reliable, scalable and meaningful digital experiences";

export type TileIcon = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;

export type ValueCard = {
  title: string; // "\n" starts a new line
  paragraphs: string[];
  /** Small square next to the title. */
  titleIcon?: TileIcon;
  /** Left padding of the text on desktop, as a share of the card width. */
  inset: string;
  media?: {
    /**
     * Screenshot for this card. Leave it out to use DEFAULT_VALUE_IMAGE.
     * See the notes above VALUE_MEDIA_FRAME for how to prepare an image.
     */
    image?: string;
    /** Where the screenshot sits inside the card on desktop. */
    placement: "bottom" | "middle" | "top";
    /** Floating tiles. left and top are pixels from the screenshot's top left corner. */
    tiles: { icon: TileIcon; left: number; top: number }[];
  };
};

/**
 * Cards are listed in reading order, two per row. Rows alternate between a
 * wide card on the left and a wide card on the right.
 */
export const VALUE_CARDS: ValueCard[] = [
  {
    title: "Digital\nProduct Design",
    inset: "11.1%",
    paragraphs: [
      "Successful products begin with a deep understanding of the people they serve.",
      "I work with founders, teams and organizations to transform ideas, requirements, and business objectives into intuitive digital experiences that are easy to understand, adopt, and use.",
    ],
    media: {
      placement: "bottom",
      tiles: [
        { icon: Users, left: 141, top: -45 },
        { icon: Shapes, left: -46, top: 206 },
      ],
    },
  },
  {
    title: "Keep it\nSimple",
    inset: "16.5%",
    titleIcon: CirclesIcon,
    paragraphs: [
      "People should be able to focus on their goals rather than think about how to use a product.",
      "Thoughtful design removes unnecessary complexity and creates experiences that feel natural, efficient and trustworthy.",
    ],
  },
  {
    title: "Software\nSystems\nEngineering",
    inset: "15.1%",
    titleIcon: Binary,
    paragraphs: [
      "A product is only as strong as the system beneath it. What the user never sees is what decides whether everything they do see can be trusted.",
      "I build across the frontend, the backend, and the logic that connects them, with React, TypeScript and Next.js at the core, turning ideas into systems that are fast, reliable, and ready to grow.",
    ],
  },
  {
    title: "Built\nto Last",
    inset: "10%",
    paragraphs: [
      "Software should be just as easy to change long after it ships. The first version is never the last.",
      "I write code that others can read, extend, and trust, so the system keeps moving as quickly on day five hundred as it did on day one.",
    ],
    media: {
      placement: "middle",
      tiles: [
        { icon: CodeXml, left: 141, top: -45 },
        { icon: BrainCircuit, left: -46, top: 206 },
      ],
    },
  },
  {
    title: "Cloud\nArchitecture",
    inset: "10.6%",
    paragraphs: [
      "Where software lives matters as much as how it is built. The right foundation carries a product through growth without ever asking for attention.",
      "I design and deploy on the cloud with continuous delivery, sensible scaling, and recovery built in, so the product stays online and the team stays free to focus on the work.",
    ],
    media: {
      placement: "top",
      tiles: [
        { icon: CloudUpload, left: -49, top: 101 },
        { icon: BlueprintIcon, left: 131, top: 278 },
      ],
    },
  },
  {
    title: "Invisible\nby Design",
    inset: "11.1%",
    titleIcon: Package,
    paragraphs: [
      "The best infrastructure is the kind no one thinks about. It grows when it needs to and recovers when it breaks, quietly.",
      "When the foundation takes care of itself, everyone building on top is free to ship with confidence.",
    ],
  },
  {
    title: "Data\nLogistics",
    inset: "16.9%",
    titleIcon: TreeNodesIcon,
    paragraphs: [
      "Every product runs on information. How that information is stored, moved, and shaped decides what the product can actually do.",
      "I design the databases, schemas, and data flows beneath a product, keeping them clean and consistent so the right data is always where it needs to be.",
    ],
  },
  {
    title: "Trust\nthe Data",
    inset: "10%",
    paragraphs: [
      "A product is only as reliable as the data behind it. When the model is messy, everything built on top inherits the mess.",
      "I keep the data model simple and honest, so the numbers hold up and the system stays easy to reason about as it grows.",
    ],
    media: {
      placement: "bottom",
      tiles: [
        { icon: Database, left: 141, top: -45 },
        { icon: SqlFileIcon, left: -46, top: 206 },
      ],
    },
  },
];

/**
 * Screenshots
 * -----------
 * Every screenshot is shown in the same 324 by 296 frame. The code draws the
 * rounded corners and the white glow, so the image file must be the screen
 * only:
 *   - No device frame, no drop shadow, no glow, no rounded corners, and no
 *     empty or transparent margin around it. The top left corner of the file
 *     must be the top left corner of the screen.
 *   - Aspect ratio about 1.09 to 1 (324 by 296). For sharp results on phones
 *     use 648 by 592 or 972 by 888. PNG, JPG or WebP all work.
 *   - Another ratio is fine too. The image fills the frame and is cropped from
 *     the right and bottom, which matches the cut off look in the design.
 * Save the file in /public/images/value and set image on the card above, for
 * example image: "/images/value/jottr.png".
 */
export const VALUE_MEDIA_FRAME = { width: 324, height: 296 } as const;

export const DEFAULT_VALUE_IMAGE = "/preview-3.jpg";