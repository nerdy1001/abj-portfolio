import Image from "next/image";
import { cn } from "@/lib/utils";

export type ImageSource = { src?: string; alt: string };

/**
 * A space reserved for an image. With no src it renders an empty grey block
 * of the same size, so the layout holds while the picture is missing. Give it
 * a src (a path from /public or an allowed remote URL) and the image fills the
 * block, cropped to fit. Size, corners and borders come from className.
 *
 * background replaces the grey with any CSS colour. It shows while the image is
 * missing and behind any transparent parts of the image once it is added.
 *
 * imageBoxClassName places the image inside the block. By default it covers
 * the whole block; pass insets (and object-contain on imageClassName) to show a
 * whole picture, such as a device mockup, inside a coloured panel.
 */
export function ImageSlot({
  image,
  sizes,
  priority,
  className,
  imageClassName,
  imageBoxClassName,
  background,
}: {
  image?: ImageSource;
  background?: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
  imageBoxClassName?: string;
}) {
  return (
    <div
      className={cn("relative overflow-hidden bg-placeholder", className)}
      style={background ? { backgroundColor: background } : undefined}
    >
      {image?.src && (
        <div className={cn("absolute inset-0", imageBoxClassName)}>
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes={sizes}
            priority={priority}
            className={cn("object-cover", imageClassName)}
          />
        </div>
      )}
    </div>
  );
}