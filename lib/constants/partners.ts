// Copy and logos for the partnerships section.

export const PARTNERS_EYEBROW = "Partnerships";
export const PARTNERS_TITLE = "My Amazing Partnerships";

/**
 * Logo files live in /public/logos. These are cut from the design screenshot,
 * so they are small. Replace them with the original files (SVG is best).
 * width and height are the file's natural size in pixels. They also set the
 * logo height on screen, which keeps the logos in proportion to one another.
 * If you replace a file, update its width and height to match the new one.
 */
export const PARTNER_LOGOS = [
  { name: "Enchird Technologies", src: "/logos/enchird.png", width: 195, height: 55 },
  { name: "The Orchard", src: "/logos/orchard.png", width: 171, height: 50 },
  { name: "Mala", src: "/logos/mala.png", width: 61, height: 25 },
  { name: "Corerion", src: "/logos/corerion.png", width: 149, height: 29 },
  { name: "MINESUP", src: "/logos/minesup.png", width: 72, height: 75 },
  { name: "Jong Studio", src: "/logos/jongstudio.png", width: 204, height: 45 },
] as const;