import { cn } from "@/lib/utils";

const side = {
  left: "left-[min(17.1vw,250px)] top-[630px]",
  right: "right-[min(16.8vw,230px)] top-[500px]",
} as const;

/**
 * 200 by 101 glass badge: white at 7.5% over the page, with a 16px backdrop blur
 * that softens the photo edge behind it. It overlaps the portrait by about 30px.
 */
export function HeroStat({
  side: edge,
  value,
  label,
}: {
  side: keyof typeof side;
  value: string;
  label: string;
}) {
  return (
    <div
      className={cn(
        "absolute z-10 hidden w-[200px] bg-white/[0.075] px-7 pb-[13px] pt-4 text-white/65 backdrop-blur-[16px] lg:block",
        side[edge],
      )}
    >
      <p className="text-[32px] font-normal leading-[48px] tracking-[-0.02em]">{value}</p>
      <p className="text-[14px] leading-6">{label}</p>
    </div>
  );
}