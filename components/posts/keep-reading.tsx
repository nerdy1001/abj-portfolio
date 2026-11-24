import { POST_LABELS } from "@/lib/constants/blog-index";
import type { Post } from "@/lib/constants/posts";
import { PostCard } from "./post-card";

/** A 32px heading, then three cards like the ones on /blog, 32px below. */
export function KeepReading({ posts, className }: { posts: readonly Post[]; className?: string }) {
  return (
    <section aria-labelledby="keep-reading" className={className}>
      <h2 id="keep-reading" className="text-[28px] font-medium leading-10 tracking-[-0.02em] text-ink-strong md:text-[32px]">
        {POST_LABELS.keepReading}
      </h2>
      <div className="mt-8 grid gap-x-6 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} headingLevel="h3" />
        ))}
      </div>
    </section>
  );
}
