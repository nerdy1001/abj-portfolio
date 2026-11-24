import Link from "next/link";
import { POST_LABELS } from "@/lib/constants/blog-index";
import type { Post } from "@/lib/constants/posts";
import { cn } from "@/lib/utils";

/**
 * Two outlined boxes, 155px tall and 24px apart. Each whole box is the link.
 * Previous: blue pill then title. Next: title then blue pill, pushed right.
 */
export function PostPager({ previous, next, className }: { previous: Post; next: Post; className?: string }) {
  const box =
    "group flex min-h-[155px] items-center gap-8 rounded-[8px] border border-mist px-6 py-8 transition-colors duration-(--duration-fast) ease-standard hover:bg-paper md:px-12";
  const pill =
    "shrink-0 rounded-full bg-primary px-[33px] py-[17px] text-[18px] leading-6 text-primary-foreground transition-colors group-hover:bg-primary-hover";
  const title = "text-[20px] leading-7 tracking-[-0.01em] text-heading md:text-[24px] md:leading-8";

  return (
    <nav aria-label="More articles" className={cn("grid gap-6 md:grid-cols-2", className)}>
      <Link href={`/blog/${previous.slug}`} rel="prev" className={box}>
        <span className={pill}>{POST_LABELS.previous}</span>
        <span className={title}>{previous.title}</span>
      </Link>
      <Link href={`/blog/${next.slug}`} rel="next" className={cn(box, "justify-end text-right")}>
        <span className={title}>{next.title}</span>
        <span className={pill}>{POST_LABELS.next}</span>
      </Link>
    </nav>
  );
}
