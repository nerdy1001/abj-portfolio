import { Reveal } from "@/components/motion/reveal";
import { AboutContent } from "../../about/about-content";
import { AboutPortrait } from "../../about/about-portrait";

/**
 * Two columns from lg: text on the left, portrait on the right (5 to 4).
 * Below lg the text comes first and the portrait follows.
 */
export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="bg-background py-16 md:py-24 xl:py-[120px]"
    >
      <div className="mx-auto grid w-[calc(100%-40px)] max-w-[1484px] gap-12 md:w-[calc(100%-80px)] lg:grid-cols-[5fr_4fr] lg:gap-0">
        <AboutContent />
        <Reveal>
          <AboutPortrait />
        </Reveal>
      </div>
    </section>
  );
}