import { Reveal } from "@/components/motion/reveal";
import { Eyebrow } from "@/components/layout/primitives";
import { BEYOND_DESCRIPTION, BEYOND_EYEBROW, BEYOND_TITLE } from "@/lib/constants/beyond";
import { BeyondGallery } from "../../beyond/beyond-gallery";

/** Pill, heading and short intro on the left, then the photo panel at full column width. */
export function BeyondSection() {
  return (
    <section
      id="beyond-the-code"
      aria-labelledby="beyond-title"
      className="bg-background py-16 md:py-24 xl:py-[120px]"
    >
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1484px] md:w-[calc(100%-80px)]">
        <div className="flex flex-col items-start">
          <Eyebrow tone="brand">{BEYOND_EYEBROW}</Eyebrow>
          <h2
            id="beyond-title"
            className="mt-8 text-about-title font-normal text-heading lg:mt-[31px]"
            style={{ textWrap: "wrap" }}
          >
            {BEYOND_TITLE}
          </h2>
          <p className="mt-6 max-w-[45rem] text-[16px] font-medium leading-7 text-soft lg:mt-[33px]">
            {BEYOND_DESCRIPTION}
          </p>
        </div>
        <Reveal>
          <BeyondGallery />
        </Reveal>
      </div>
    </section>
  );
}