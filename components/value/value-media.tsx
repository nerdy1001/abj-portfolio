import Image from "next/image";
import { DEFAULT_VALUE_IMAGE, VALUE_MEDIA_FRAME, type ValueCard } from "@/lib/constants/value";
import { cn } from "@/lib/utils";
import { IconTile } from "./icon-tile";

const placement = {
  bottom: "lg:self-end",
  middle: "lg:mt-[195px] lg:self-start",
  top: "lg:self-start",
} as const;

/**
 * Screenshot with a soft white glow and two floating tiles.
 *
 * Any image works. It fills a fixed 324 by 296 frame, anchored to the top left
 * and cropped on the right and bottom. The frame draws the rounded corners, so
 * the file itself should be a plain rectangle. When the screenshot sits on the
 * card's bottom edge its bottom corners stay square, so the card's own rounded
 * corner clips it. When it floats, the bottom corners are rounded.
 *
 * Desktop: the last item in the card's flex row, aligned to the bottom (or top)
 * edge the way the process card images are, with no margins at all.
 *
 * Phones and tablets: follows the text and bleeds off the card's bottom right
 * corner. The negative margins only exist below the lg breakpoint (max-lg), so
 * there is no override to lose on desktop.
 */
export function ValueMedia({ media }: { media: NonNullable<ValueCard["media"]> }) {
  const onBottomEdge = media.placement === "bottom";
  const onMiddleEdge = media.placement === "middle";
  const onTopEdge = media.placement === "top";

  return (
    <div
      aria-hidden
      style={{ aspectRatio: `${VALUE_MEDIA_FRAME.width} / ${VALUE_MEDIA_FRAME.height}` }}
      className={cn(
        "relative ml-auto w-[300px] shrink-0",
        "max-lg:-mb-6 max-lg:-mr-6 max-lg:mt-16 max-lg:max-w-[calc(100%+1.5rem)]",
        "sm:max-lg:-mb-8 sm:max-lg:-mr-8 sm:max-lg:max-w-[calc(100%+2rem)]",
        placement[media.placement],
      )}
    >
      <div
        className={cn(
          "absolute inset-0 overflow-hidden bg-white [filter:drop-shadow(0_0_80px_rgb(255_255_255/0.35))]",
          onTopEdge && "rounded-tr-2xl border border-t-black",
          onMiddleEdge && "rounded-tl-2xl rounded-bl-2xl rounded-br-2xl",
          onBottomEdge && "rounded-tl-2xl rounded-br-2xl",
        )}
      >
        <Image
          src={media.image ?? DEFAULT_VALUE_IMAGE}
          alt=""
          fill
          sizes="1000px"
          className="object-cover object-left-top"
        />
      </div>
    </div>
  );
}