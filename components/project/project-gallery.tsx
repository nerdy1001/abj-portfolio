import { ImageSlot } from "@/components/ui/image-slot";
import type { GalleryImage, Project } from "@/lib/constants/projects";
import { cn } from "@/lib/utils";

/**
 * How an image sits in its panel. All three leave the panel colour showing
 * where the image does not reach.
 *
 * "device": the whole picture is shown, never cropped, inside a box with 64px
 * of colour each side and 91px above at 879 by 540, flush with the bottom.
 * A laptop mockup stands on the bottom edge, centred. The box has the laptop's
 * proportions from the Mala design, so the laptop fills it.
 *
 * "bleed": the picture starts at the same height as a "device" image (16.77% of
 * the panel down, 91px at full size, so the tops of the two panels line up) and
 * 71px in from the left at 655 wide, then runs off the right and bottom edges,
 * cropped there.
 * Its top left corner always stays in view. This is the yellow panel in the design.
 *
 * "cover": the picture fills the whole panel and is cropped to fit.
 */
const DEVICE_TOP = "top-[16.77%]";

const fits = {
  device: {
    box: `inset-x-[7.25%] bottom-0 ${DEVICE_TOP}`,
    image: "object-contain object-bottom",
  },
  bleed: {
    box: `bottom-0 left-[10.84%] right-0 ${DEVICE_TOP}`,
    image: "object-cover object-left-top",
  },
  cover: { box: undefined, image: undefined },
} as const;

function Panel({
  image,
  fallback,
  sizes,
  className,
}: {
  image: GalleryImage;
  fallback: keyof typeof fits;
  sizes: string;
  className: string;
}) {

  const fit = fits[image.fit ?? fallback];

  return (
    <ImageSlot
      image={image}
      background={image.background}
      sizes={sizes}
      className={className}
      imageBoxClassName={fit.box}
      imageClassName={fit.image}
    />
  );
}

/**
 * Two panels side by side, 879 and 655 wide by 540 tall at desktop, 28px apart,
 * with 16px corners. Their widths keep that ratio as the page narrows; they stack
 * below md. Both start empty.
 *
 * Each panel takes its own background colour from the project data. The first
 * panel shows its whole image ("device") and the second starts at the same height
 * and bleeds off the right and bottom ("bleed"), so the two images line up along
 * the top. Set fit on an image in the data to change either one.
 */
export function ProjectGallery({ images, className }: { images: Project["images"]["gallery"]; className?: string }) {
  const [first, second] = images;
  return (
    <div className={cn("grid gap-4 md:grid-cols-[879fr_655fr] md:gap-7", className)}>
      <Panel
        image={first}
        fallback="device"
        sizes="(min-width: 1728px) 784px, 48vw"
        className="aspect-[879/540] rounded-2xl"
      />
      <Panel
        image={second}
        fallback="bleed"
        sizes="(min-width: 1728px) 584px, 38vw"
        className="aspect-[655/540] rounded-2xl"
      />
    </div>
  );
}