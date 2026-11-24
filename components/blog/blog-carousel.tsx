"use client";

import * as React from "react";
import { POSTS } from "@/lib/constants/posts";
import { BlogArrows } from "./blog-arrows";
import { BlogCard } from "./blog-card";

/** Space between cards from sm up, in px. The arrows move the row by one card plus this gap. */
const GAP = 22;

/**
 * Header on the left, arrow buttons on the right, then a row of cards that
 * scrolls sideways with no visible scrollbar. The cards are the same articles
 * as /blog, in the same order, so a new post in posts.ts shows up here too.
 * The arrows move the row by one card. The row is focusable so keyboard users
 * can scroll it too.
 */
export function BlogCarousel({ header }: { header: React.ReactNode }) {
  const track = React.useRef<HTMLDivElement>(null);

  const move = (direction: 1 | -1) => {
    const el = track.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (!el || !card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: direction * (card.offsetWidth + GAP), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <>
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        {header}
        {/* The design lines the buttons up 8px above the bottom of the paragraph. */}
        <div className="md:mb-2">
          <BlogArrows onPrevious={() => move(-1)} onNext={() => move(1)} />
        </div>
      </div>
      <div
        ref={track}
        role="region"
        aria-label="Blog posts"
        tabIndex={0}
        className="scrollbar-none mt-10 flex snap-x gap-4 overflow-x-auto sm:gap-[22px] lg:mt-[58px]"
      >
        {POSTS.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
}