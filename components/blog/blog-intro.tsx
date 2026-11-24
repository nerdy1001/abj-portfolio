import { Eyebrow } from "@/components/layout/primitives";
import { BLOG_DESCRIPTION, BLOG_EYEBROW, BLOG_TITLE } from "@/lib/constants/blog";

/** Pill, heading and paragraph. The paragraph is 736px wide, set from the design's line breaks. */
export function BlogIntro() {
  return (
    <div className="flex flex-col items-start">
      <Eyebrow tone="brand">{BLOG_EYEBROW}</Eyebrow>
      <h2
        id="blog-title"
        className="mt-8 text-about-title font-medium text-heading lg:mt-[31px]"
        style={{ textWrap: "wrap" }}
      >
        {BLOG_TITLE}
      </h2>
      <p className="mt-6 max-w-[46rem] text-[17px] font-medium leading-7 text-soft lg:mt-[33px]">
        {BLOG_DESCRIPTION}
      </p>
    </div>
  );
}