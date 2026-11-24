// Copy and photos for the "Beyond The Code" section.

export const BEYOND_EYEBROW = "Bryan James’s Latest Work";
export const BEYOND_TITLE = "Beyond The Code.";
export const BEYOND_DESCRIPTION =
  "I run The Orchard, an agency and initiative built to bring technology to more people in Cameroon, through web development, digital skills bootcamps, and affordable computer access.";

/**
 * The five photos, in reading order. The area decides where each one sits in
 * the mosaic, so keep the order and replace only src and alt:
 *   top-left, top-middle, right (tall), bottom (wide), bottom-right.
 * Any image works. Each fills its tile and is cropped to fit, so use
 * landscape photos about 926 by 534 for the small tiles, 926 by 824 for the
 * tall one and 1900 by 824 for the wide one (2x the design size).
 * These files are cut from the design. Replace them with your own.
 */
export type BeyondArea = "top-left" | "top-middle" | "right" | "bottom" | "bottom-right";

export const BEYOND_PHOTOS: ReadonlyArray<{ area: BeyondArea; src: string; alt: string }> = [
  { area: "top-left", src: "/beyond-1.jpg", alt: "Five young people sitting against a wall, one with a laptop" },
  { area: "top-middle", src: "/beyond-3.jpg", alt: "Two men looking at a phone beside a laptop" },
  { area: "right", src: "/beyond-4.jpg", alt: "Five young people sitting on the floor, laughing together" },
  { area: "bottom", src: "/beyond-2.jpg", alt: "Volunteers in white shirts holding signs and wearing blue gloves" },
  { area: "bottom-right", src: "/beyond-5.jpg", alt: "Five young people sitting against a wall, one with a laptop" },
];