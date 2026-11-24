import { cn } from "@/lib/utils";

/**
 * Glass badge over the intro images: a faint blue tint with a strong backdrop
 * blur, so the screenshots behind it show through as soft light.
 * "inline" puts the number beside the label (257 by 68 at desktop),
 * "stacked" puts it above (201 by 88). Phones get a smaller version.
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
        "absolute z-10 bg-[rgb(88_133_209/0.1)] text-white/65 backdrop-blur-[30px]",
        layout === "inline"
          ? "flex items-center gap-2 px-4 py-2.5 sm:h-[68px] sm:w-[257px] sm:gap-3 sm:py-0 sm:pl-[26px] sm:pr-0"
          : "flex flex-col px-4 py-3 sm:h-[88px] sm:w-[201px] sm:pb-[15px] sm:pl-[30px] sm:pr-0 sm:pt-5",
        className,
      )}
    >
      <span className="text-[24px] leading-7 sm:text-[32px] sm:leading-8">{value}</span>
      <span
        className={cn(
          "text-[18px] leading-5 md:text-[14px] sm:leading-6",
          layout === "stacked" && "sm:-mt-[3px]",
        )}
      >
        {label}
      </span>
    </p>
  );
}
