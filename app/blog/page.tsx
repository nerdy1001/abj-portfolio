import type { Metadata } from "next";
import { Header } from "@/components/hero/header";
import { BlogIndexIntro } from "@/components/posts/blog-index-intro";
import { PostList } from "@/components/posts/post-list";
import { BLOG_INDEX_DESCRIPTION } from "@/lib/constants/blog-index";

export const metadata: Metadata = {
  title: "Blog",
  description: BLOG_INDEX_DESCRIPTION,
};

// 1578px column at 1728px wide, in line with the header (75px each side).
const COLUMN = "mx-auto w-[calc(100%-40px)] max-w-[1578px] md:w-[calc(100%-80px)] xl:w-[calc(100%-150px)]";

/**
 * Spacing at desktop: pill 80px under the header, filters 130px under the
 * title, cards 64px under the filters, footer 128px under the last row.
 */
export default function BlogPage() {
  return (
    <>
      <Header tone="light" />
      <div className={`${COLUMN} pb-20 xl:pb-32`}>
        <BlogIndexIntro className="mt-12 xl:mt-20" />
        <PostList className="mt-16 xl:mt-[130px]" />
      </div>
    </>
  );
}
