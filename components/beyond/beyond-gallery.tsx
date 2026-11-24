import { BEYOND_PHOTOS } from "@/lib/constants/beyond";
import { BeyondPhoto } from "./beyond-photo";

/**
 * Charcoal panel with a five photo mosaic. The inner grid keeps the design's
 * proportions (1437 by 702) at every width, so the mosaic scales down as one piece.
 */
export function BeyondGallery() {
  return (
    <div data-surface="charcoal" className="mt-8 rounded-[20px] bg-[#1C2127] p-3 sm:p-6 lg:mt-[32px]">
      <div className="grid aspect-[1437/702] grid-cols-3 grid-rows-[267fr_121fr_267fr] gap-3 sm:gap-6">
        {BEYOND_PHOTOS.map((photo) => (
          <BeyondPhoto key={photo.area} {...photo} />
        ))}
      </div>
    </div>
  );
}