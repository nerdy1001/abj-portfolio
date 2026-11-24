import Image from "next/image";
import type { BeyondArea } from "@/lib/constants/beyond";
import { cn } from "@/lib/utils";

// Grid cells of the mosaic: three equal columns, rows of 267, 121 and 267.
const areaClass: Record<BeyondArea, string> = {
  "top-left": "col-start-1 row-start-1",
  "top-middle": "col-start-2 row-start-1",
  right: "col-start-3 row-start-1 row-span-2",
  bottom: "col-span-2 col-start-1 row-span-2 row-start-2",
  "bottom-right": "col-start-3 row-start-3",
};

const sizes: Record<BeyondArea, string> = {
  "top-left": "(min-width: 1536px) 463px, 33vw",
  "top-middle": "(min-width: 1536px) 463px, 33vw",
  right: "(min-width: 1536px) 463px, 33vw",
  bottom: "(min-width: 1536px) 950px, 66vw",
  "bottom-right": "(min-width: 1536px) 463px, 33vw",
};

export function BeyondPhoto({ area, src, alt }: { area: BeyondArea; src: string; alt: string }) {
  return (
    <div className={cn("relative overflow-hidden rounded-lg bg-placeholder", areaClass[area])}>
      <Image src={src} alt={alt} fill sizes={sizes[area]} className="object-cover" />
    </div>
  );
}