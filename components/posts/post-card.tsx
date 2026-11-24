import Link from "next/link";
import { ImageSlot } from "@/components/ui/image-slot";
import type { Post } from "@/lib/constants/posts";
import { PostMeta } from "./post-meta";

/**
 * Grey card, 510 by 677 at desktop: a 510 by 332 picture across the top, then
 * a 24px title, a 16px summary (the standfirst) and the category and date.
 * The title link covers the whole card.
 *
 * Phones: the card is only as tall as its content, with tighter padding and a
 * 20px title, so nothing is cut off and there is no empty space at the bottom.
 * From md the 510 by 677 shape returns, as a minimum: the card never clips its
 * text, because only the picture (not the card) hides what overflows.
 */
export function PostCard({ post, headingLevel = "h2" }: { post: Post; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <article className="relative flex flex-col rounded-2xl bg-paper md:aspect-[510/677] has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-3 has-[a:focus-visible]:outline-ring">
      <ImageSlot
        image={post.image}
        sizes="(min-width: 1728px) 510px, (min-width: 1280px) 30vw, (min-width: 768px) 50vw, 100vw"
        className="aspect-[510/332] w-full shrink-0 rounded-t-2xl"
      />
      <div className="px-5 pb-6 pt-5 md:px-7 md:pb-8 md:pt-[29px]">
        <Heading className="max-w-[26rem] text-[20px] font-medium leading-7 tracking-[-0.02em] text-heading md:text-[24px] md:leading-8">
          <Link href={`/blog/${post.slug}`} className="outline-none after:absolute after:inset-0">
            {post.title}
          </Link>
        </Heading>
        <p className="mt-3 max-w-[26rem] text-[15px] leading-6 text-heading md:mt-4 md:text-[16px] md:leading-7">{post.standfirst}</p>
        <PostMeta category={post.category} date={post.date} size="card" className="mt-6 md:mt-8" />
      </div>
    </article>
  );
}