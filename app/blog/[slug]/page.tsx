import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/hero/header";
import { KeepReading } from "@/components/posts/keep-reading";
import { PostBody } from "@/components/posts/post-body";
import { PostHeader } from "@/components/posts/post-header";
import { PostPager } from "@/components/posts/post-pager";
import { POSTS, getKeepReading, getNeighbours, getPost } from "@/lib/constants/posts";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return POSTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.standfirst,
    authors: [{ name: post.author }],
    openGraph: { type: "article", publishedTime: post.date, tags: [...post.tags] },
  };
}

const COLUMN = "mx-auto w-[calc(100%-40px)] max-w-[1578px] md:w-[calc(100%-80px)] xl:w-[calc(100%-150px)]";

/**
 * Spacing at desktop: category and date 160px under the header, text 96px
 * under the hairline, "Keep reading" about 157px under the text, the
 * previous and next boxes 32px under the cards, footer 32px under them.
 */
export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { previous, next } = getNeighbours(slug);

  return (
    <>
      <Header tone="light" />
      <div className={`${COLUMN} pb-8`}>
        <article>
          <PostHeader post={post} className="mt-16 xl:mt-40" />
          <PostBody post={post} className="mt-16 xl:mt-24" />
        </article>
        <KeepReading posts={getKeepReading(slug)} className="mt-24 xl:mt-[157px]" />
        <PostPager previous={previous} next={next} className="mt-8" />
      </div>
    </>
  );
}
