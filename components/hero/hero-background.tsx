import Image from "next/image";
import { HERO_BACKGROUND_SRC } from "@/lib/constants/hero";

/**
 * Background image, then an 80% navy overlay with a blur on top of it.
 * Set the image in src/constants/hero.ts.
 */
export function HeroBackground() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10">
      {HERO_BACKGROUND_SRC ? (
        <>
          <Image
            src={HERO_BACKGROUND_SRC}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay/80 backdrop-blur-sm" />
        </>
      ) : (
        // Stand-in for the soft wave in the design. Disappears once an image is set.
        <div className="absolute inset-x-[-10%] top-[50%] h-28 rotate-[-8deg] rounded-full bg-primary/25 blur-3xl" />
      )}
    </div>
  );
}