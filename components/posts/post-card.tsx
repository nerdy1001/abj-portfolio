import Link from "next/link";
import { ImageSlot } from "@/components/ui/image-slot";
import type { Post } from "@/lib/constants/posts";
import { PostMeta } from "./post-meta";

/**
 * Grey card, 510 by 677 at desktop: a 510 by 332 picture across the top, then
 * a 24px title, a 16px summary (the standfirst) and the category and date.
 * The title link covers the whole card. The 510 by 677 shape is a minimum,
 * so short cards keep the empty space at the bottom that the design has.
 */
export function PostCard({ post, headingLevel = "h2" }: { post: Post; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <article className="relative flex aspect-[510/677] flex-col overflow-hidden rounded-2xl bg-paper has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-3 has-[a:focus-visible]:outline-ring">
      <ImageSlot
        image={post.image}
        sizes="(min-width: 1728px) 510px, (min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw"
        className="aspect-[510/332] w-full shrink-0"
      />
      <div className="px-7 pb-8 pt-[29px]">
        <Heading className="max-w-[26rem] text-[24px] font-medium leading-8 tracking-[-0.02em] text-heading">
          <Link href={`/blog/${post.slug}`} className="outline-none after:absolute after:inset-0">
            {post.title}
          </Link>
        </Heading>
        <p className="mt-4 max-w-[26rem] text-[16px] leading-7 text-heading">{post.standfirst}</p>
        <PostMeta category={post.category} date={post.date} size="card" className="mt-8" />
      </div>
    </article>
  );
}
