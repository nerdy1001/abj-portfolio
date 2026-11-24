import type { Post } from "@/lib/constants/posts";
import { PostMeta } from "./post-meta";

/**
 * Centred: category and date, a 64px title up to 900px wide, the standfirst
 * up to 800px wide, then a hairline that fades at both ends, 96px lower.
 */
export function PostHeader({ post, className }: { post: Post; className?: string }) {
  return (
    <header className={className}>
      <PostMeta category={post.category} date={post.date} size="article" className="justify-center" />
      <h1 className="mx-auto mt-8 max-w-250 text-balance text-center text-[36px] font-medium leading-[1.25] tracking-[-0.04em] text-ink-strong md:text-[48px] lg:mt-[50px] lg:text-[64px]">
        {post.title}
      </h1>
      <p className="mx-auto mt-4 max-w-[50rem] text-center text-[16px] leading-6 text-ink-strong">{post.standfirst}</p>
      <div
        aria-hidden
        className="mx-auto mt-16 h-px max-w-[800px] bg-linear-to-r from-[#f1f1f1] via-[#e2e2e2] to-[#f1f1f1] lg:mt-24"
      />
    </header>
  );
}
