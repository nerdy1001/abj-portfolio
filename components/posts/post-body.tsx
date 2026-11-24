import { POST_LABELS } from "@/lib/constants/blog-index";
import { cn } from "@/lib/utils";
import type { Post } from "@/lib/constants/posts";
import { PostBlocks } from "./post-blocks";
import { PostToc } from "./post-toc";

/**
 * The article text, 900px wide and centred on the page, with the heading menu
 * in the left margin from xl (there is no room for it below that).
 * The menu's column is as tall as the text, which is what lets it stick
 * while the text scrolls and let go when the text ends.
 *
 * Headings are 32px, 64px below the text before them and 32px above their own.
 * Each heading is also a link to itself, so a section can be shared.
 */
export function PostBody({ post, className }: { post: Post; className?: string }) {
  return (
    <div className={cn("xl:grid xl:grid-cols-[1fr_minmax(0,800px)_1fr]", className)}>
      <aside className="hidden xl:block">
        <PostToc sections={post.sections.map(({ id, heading }) => ({ id, heading }))} />
      </aside>

      <div className="mx-auto max-w-[800px] text-[16px] leading-6 text-ink-strong">
        <PostBlocks blocks={post.intro} />

        {post.sections.map((section) => (
          <section key={section.id} aria-labelledby={section.id} className="mt-16">
            <h2
              id={section.id}
              tabIndex={-1}
              className="text-[26px] font-medium leading-9 tracking-[-0.02em] outline-none md:text-[32px] md:leading-10"
            >
              <a href={`#${section.id}`} className="hover:underline hover:underline-offset-4">
                {section.heading}
              </a>
            </h2>
            <div className="mt-8">
              <PostBlocks blocks={section.blocks} />
            </div>
          </section>
        ))}

        <div className="mt-8 flex flex-col gap-4">
          <p>
            {POST_LABELS.tags}: {post.tags.join(" · ")}
          </p>
          <p>
            {POST_LABELS.author}: {post.author}
          </p>
        </div>
      </div>
    </div>
  );
}
