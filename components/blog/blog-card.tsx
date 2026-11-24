import Link from "next/link";
import { ImageSlot } from "@/components/ui/image-slot";
import type { Post } from "@/lib/constants/posts";
import { PostMeta } from "../posts/post-meta";

/**
 * Home page card for one article: grey, 480 wide at desktop, with the picture
 * (480 by 332) bleeding to the top and sides, the title and the standfirst.
 * The title is the one link, stretched over the whole card, and goes to the
 * article at /blog/[slug]. The picture is the same one as on /blog, so it shows
 * a grey block until that article's image.src is set in posts.ts.
 * The aspect ratio (480 by 677) is a minimum from md up, so short cards keep
 * the empty space the design has. Only the picture hides overflow, so the card
 * never clips its own text. On phones the card fits its content, with tighter
 * padding and smaller type.
 */
export function BlogCard({ post }: { post: Post }) {
  return (
    <article className="group relative w-[85%] shrink-0 snap-start rounded-[20px] bg-paper md:aspect-[480/677] has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-3 has-[a:focus-visible]:outline-ring sm:w-[calc((100%-22px)/2)] lg:w-[calc((100%-44px)/3)]">
      <ImageSlot
        image={post.image}
        sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 85vw"
        className="aspect-[480/332] w-full rounded-t-[20px]"
      />
      <div className="px-5 pb-6 pt-5 md:px-7 md:pb-8 md:pt-[29px]">
        <h3 className="max-w-[26rem] text-[20px] font-medium leading-7 tracking-[-0.02em] text-heading md:text-[24px] md:leading-8">
          <Link href={`/blog/${post.slug}`} className="outline-none after:absolute after:inset-0">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 max-w-[26rem] text-[16px] leading-6 text-heading md:mt-4 md:text-[16px] md:leading-7">{post.standfirst}</p>
        <PostMeta category={post.category} date={post.date} size="card" className="mt-6 md:mt-8" />
      </div>
    </article>
  );
}