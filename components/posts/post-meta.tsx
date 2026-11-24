import { formatPostDate } from "@/lib/constants/posts";
import { cn } from "@/lib/utils";

/**
 * Category pill and date. The pill is white with a faint blue edge:
 * 40px tall on cards, 42px on the article page. Text 14px.
 */
export function PostMeta({
  category,
  date,
  size,
  className,
}: {
  category: string;
  date: string;
  size: "card" | "article";
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-4 text-[14px] leading-5", className)}>
      <span
        className={cn(
          "rounded-full border border-chip-edge bg-white px-[18px] text-heading",
          size === "card" ? "py-[9px]" : "py-[10px]",
        )}
      >
        {category}
      </span>
      <time dateTime={date} className={size === "card" ? "text-date" : "text-date-soft"}>
        {formatPostDate(date)}
      </time>
    </div>
  );
}
