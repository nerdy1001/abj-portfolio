import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/layout/primitives";
import { THINK_BODY, THINK_EYEBROW, THINK_TITLE } from "@/lib/constants/think";

/**
 * Pill, heading and one paragraph, left aligned in the same 1484px column as
 * the About section. The paragraph runs the full width of the column, so its
 * line breaks follow the viewport. Type steps up at md and xl.
 */
export function ThinkSection() {
  return (
    <section
      id="how-i-think"
      aria-labelledby="think-title"
      className="bg-background py-16 md:py-24 xl:py-[120px]"
    >
      <Reveal className="mx-auto flex w-[calc(100%-40px)] max-w-[1484px] flex-col items-start md:w-[calc(100%-80px)]">
        <Eyebrow tone="brand">{THINK_EYEBROW}</Eyebrow>

        <h2
          id="think-title"
          className="mt-8 text-about-title font-normal text-heading lg:mt-[33px]"
          style={{ textWrap: "wrap" }}
        >
          {THINK_TITLE}
        </h2>

        <p className="mt-6 text-[24px] font-light leading-8 text-soft md:text-[24px] md:leading-10 xl:mt-[35px] xl:text-[32px] xl:leading-[52px]">
          {THINK_BODY}
        </p>
      </Reveal>
    </section>
  );
}