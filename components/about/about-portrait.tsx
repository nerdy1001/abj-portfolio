import Image from "next/image";
import { ABOUT_PHOTO } from "@/lib/constants/about";
import { AboutStats } from "./about-stats";

/** 663 by 809 portrait with a 2px light frame, 20px corners and the stats bar. */
export function AboutPortrait() {
  return (
    <div className="relative aspect-[663/809] w-full overflow-hidden rounded-[20px] border-2 border-frame bg-muted">
      <Image
        src={ABOUT_PHOTO.src}
        alt={ABOUT_PHOTO.alt}
        fill
        priority={false}
        sizes="(min-width: 1024px) 45vw, 100vw"
        style={{ objectPosition: ABOUT_PHOTO.position }}
        className="object-cover"
      />
      <AboutStats />
    </div>
  );
}