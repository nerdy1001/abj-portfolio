import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/layout/primitives";
import { JOURNEY_EYEBROW, JOURNEY_PARAGRAPHS } from "@/lib/constants/journey";

/**
 * Pill and two paragraphs in the 1484px column, with 160px of space above and below at xl.
 * The text runs the full width, so its line breaks follow the viewport.
 * Type steps up at md and xl: 20px, 24px, then 32px with 48px lines.
 */
export function JourneySection() {
  return (
    <section
      id="journey"
      aria-label={JOURNEY_EYEBROW}
      className="bg-background py-16 md:py-24 xl:py-40"
    >
      <Reveal className="mx-auto flex w-[calc(100%-40px)] max-w-[1484px] flex-col items-start md:w-[calc(100%-80px)]">
        <Eyebrow tone="brand">{JOURNEY_EYEBROW}</Eyebrow>
        <div className="mt-6 flex flex-col gap-8 text-[20px] font-light leading-8 text-soft md:text-[24px] md:leading-9 xl:mt-[31px] xl:text-[24px] xl:leading-12">
          {JOURNEY_PARAGRAPHS.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}