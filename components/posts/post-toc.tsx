"use client";

import * as React from "react";
import { POST_LABELS } from "@/lib/constants/blog-index";
import type { Section } from "@/lib/constants/posts";
import { cn } from "@/lib/utils";

/** How far down the window a heading must pass before its section counts as the one being read. */
const READ_LINE = 0.35;

/**
 * The list of headings on the left of an article.
 *
 * It sits in a column as tall as the article text, with position: sticky.
 * So it scrolls with the page until it is 40px from the top of the window,
 * stays there while the article scrolls past, and leaves with the last
 * lines of the article when that column ends.
 *
 * The heading being read is dark, the others grey. Clicking one scrolls to
 * that section (instantly when reduced motion is on), updates the address
 * and moves keyboard focus to the heading.
 */
export function PostToc({ sections }: { sections: readonly Pick<Section, "id" | "heading">[] }) {
  const [active, setActive] = React.useState(sections[0]?.id);

  React.useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * READ_LINE;
      let current = sections[0]?.id;
      for (const { id } of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [sections]);

  const go = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
    target.focus({ preventScroll: true });
    setActive(id);
  };

  return (
    <nav aria-label={POST_LABELS.contents} className="sticky top-20 max-w-[192px]">
      <ul className="flex flex-col gap-3.5">
        {sections.map(({ id, heading }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(event) => go(event, id)}
              aria-current={active === id ? "location" : undefined}
              className={cn(
                "block text-[14px] font-medium leading-4 transition-colors duration-(--duration-fast) ease-standard hover:text-ink-strong",
                active === id ? "text-ink-strong" : "text-[#9a9797]",
              )}
            >
              {heading}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
