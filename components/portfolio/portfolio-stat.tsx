import { cn } from "@/lib/utils";

/**
 * Glass badge over the intro images: a faint blue tint with a strong backdrop
 * blur, so the screenshots behind it show through as soft light.
 *
 * Every size is in cqw, a share of the image group's width (the group is the
 * container), so the badge shrinks and grows with the pictures behind it.
 * At the full 820px group it is exactly the design: "inline" 257 by 68 with a
 * 32px number beside an 18px label, "stacked" 201 by 88 with the number above.
 * Each text size has a floor (18px and 11px) so it stays readable on phones;
 * there the badge grows to fit its text instead of shrinking further.
 */
export function PortfolioStat({
  value,
  label,
  layout,
  className,
}: {
  value: string;
  label: string;
  layout: "inline" | "stacked";
  className?: string;
}) {
  return (
    <p
      className={cn(
        "absolute z-10 flex bg-[rgb(88_133_209/0.1)] text-white/65 backdrop-blur-[30px]",
        "pl-[max(10px,3.171cqw)] pr-[max(10px,2cqw)]",
        layout === "inline"
          ? "min-h-[8.293cqw] min-w-[31.341cqw] items-center gap-[max(6px,1.463cqw)] py-1.5"
          : "min-h-[10.732cqw] min-w-[24.512cqw] flex-col pb-[max(6px,1.829cqw)] pl-[max(10px,3.659cqw)] pt-[max(6px,2.439cqw)]",
        className,
      )}
    >
      <span className="text-[length:max(18px,3.902cqw)] leading-none">{value}</span>
      <span
        className={cn(
          "text-[length:max(11px,2.195cqw)] leading-[1.333]",
          layout === "stacked" && "-mt-[0.366cqw]",
        )}
      >
        {label}
      </span>
    </p>
  );
}