"use client";

import * as React from "react";
import { BLOG_INDEX_EMPTY } from "@/lib/constants/blog-index";
import { BLOG_FILTERS, POSTS } from "@/lib/constants/posts";
import { cn } from "@/lib/utils";
import { PostCard } from "./post-card";

type Filter = (typeof BLOG_FILTERS)[number];

/**
 * Filter pills, centred and 11px apart, then the cards in three columns
 * (24px apart, rows 32px apart) 64px below. The pills filter by each post's group.
 */
export function PostList({ className }: { className?: string }) {
  const [filter, setFilter] = React.useState<Filter>("All");
  const posts = filter === "All" ? POSTS : POSTS.filter((post) => post.group === filter);

  return (
    <div className={className}>
      <div role="group" aria-label="Filter articles" className="flex flex-wrap justify-center gap-[11px]">
        {BLOG_FILTERS.map((option) => {
          const active = option === filter;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(option)}
              className={cn(
                "h-12.5 min-w-26.25 cursor-pointer rounded-full border px-7 text-[16px] leading-6 transition-colors duration-(--duration-fast) ease-standard",
                active
                  ? "border-charcoal bg-charcoal text-white"
                  : "border-chip-edge bg-white text-charcoal hover:bg-mist",
              )}
            >
              {option}
            </button>
          );
        })}
      </div>

      <p role="status" className="sr-only">
        {`${posts.length} ${posts.length === 1 ? "article" : "articles"} shown`}
      </p>

      {posts.length > 0 ? (
        <div className="mt-10 grid gap-x-6 gap-y-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-[18px] leading-6 text-copy">{BLOG_INDEX_EMPTY}</p>
      )}
    </div>
  );
}
