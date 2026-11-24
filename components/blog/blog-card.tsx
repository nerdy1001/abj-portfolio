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
 * The aspect ratio (480 by 677) is a minimum, so short cards keep the empty
 * space the design has.
 */
export function BlogCard({ post }: { post: Post }) {
  return (
    <article className="group relative aspect-[480/677] w-[85%] shrink-0 snap-start overflow-hidden rounded-[20px] bg-paper has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-3 has-[a:focus-visible]:outline-ring sm:w-[calc((100%-22px)/2)] lg:w-[calc((100%-44px)/3)]">
      <ImageSlot
        image={post.image}
        sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 85vw"
        className="aspect-[480/332] w-full"
      />
      <div className="px-7 pb-8 pt-[29px]">
        <h3 className="text-[24px] font-medium leading-9 text-heading">
          <Link href={`/blog/${post.slug}`} className="outline-none after:absolute after:inset-0">
            {post.title}
          </Link>
        </h3>
        <p className="mt-4 text-[16px] leading-[30px] text-heading">{post.standfirst}</p>
        <PostMeta category={post.category} date={post.date} size="card" className="mt-8" />
      </div>
    </article>
  );
}