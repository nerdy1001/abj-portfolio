import { Frame } from "@/components/ui/frame";
import { ImageSlot } from "@/components/ui/image-slot";
import type { ImageSource } from "@/components/ui/image-slot";

/** The cover screenshot inside the grey frame: 1546 by 688 inside the border at desktop. */
export function ProjectCover({ image, className }: { image: ImageSource; className?: string }) {
  return (
    <Frame className={className}>
      <ImageSlot image={image} priority sizes="(min-width: 1728px) 1546px, 92vw" className="aspect-[1546/688] w-full" />
    </Frame>
  );
}
