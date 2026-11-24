import Image from "next/image";
import { cn } from "@/lib/utils";

const side = {
  // 324px wide at 1728px and up, narrower on smaller screens so it never reaches the headline.
  left: "left-0 top-[149px] h-[650px] rounded-r-[20px]",
  right: "right-0 top-[152px] h-[506px] rounded-l-[20px]",
} as const;

/** Photo flush against one edge of the hero. Hidden below lg, where there is no room for it. */
export function HeroPortrait({
  side: edge,
  src,
  alt,
}: {
  side: keyof typeof side;
  src: string;
  alt: string;
}) {
  return (
    <div
      className={cn(
        "absolute z-0 hidden w-[min(18.75vw,300px)] overflow-hidden bg-card lg:block",
        side[edge],
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(min-width: 1024px) 324px, 19vw"
        className="object-cover"
      />
    </div>
  );
}