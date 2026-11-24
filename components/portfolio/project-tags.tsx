import { cn } from "@/lib/utils";

/**
 * Grey pills with a faint blue edge. "sm" is 34px tall (portfolio cards),
 * "lg" is 48px tall (project page). Same text and side padding in both.
 */
export function ProjectTags({ tags, size }: { tags: readonly string[]; size: "sm" | "lg" }) {
  return (
    <ul aria-label="Tags" className="flex flex-wrap gap-[9px]">
      {tags.map((tag) => (
        <li
          key={tag}
          className={cn(
            "rounded-full border border-tag-edge bg-mist px-[18px] text-[14px] leading-6 text-charcoal",
            size === "sm" ? "py-[4px]" : "py-[11px]",
          )}
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
