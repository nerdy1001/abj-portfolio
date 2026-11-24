import { BLOG_INDEX_DESCRIPTION, BLOG_INDEX_EYEBROW, BLOG_INDEX_TITLE } from "@/lib/constants/blog-index";

/**
 * Lavender pill, then the 64px title on the left and a short 426px wide
 * description on the right, both starting on the same line.
 */
export function BlogIndexIntro({ className }: { className?: string }) {
  return (
    <div className={className}>
      {/* 140 by 40: lavender fading to the right, blue dot and text. */}
      <p className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#a2add0] to-[#ced4e6] py-2.5 pl-[22px] pr-[27px] text-[14px] font-medium leading-5 text-primary">
        <span aria-hidden className="size-2.5 rounded-full bg-primary" />
        {BLOG_INDEX_EYEBROW}
      </p>
      <div className="mt-6 flex flex-col gap-6 lg:mt-[30px] lg:flex-row lg:items-start lg:justify-between lg:gap-12">
        <h1 className="text-[40px] font-medium leading-[1.25] tracking-[-0.04em] text-ink-strong md:text-[64px]">
          {BLOG_INDEX_TITLE}
        </h1>
        <p className="max-w-[426px] text-[16px] leading-6 text-ink-strong lg:shrink-0 lg:pt-px">
          {BLOG_INDEX_DESCRIPTION}
        </p>
      </div>
    </div>
  );
}
