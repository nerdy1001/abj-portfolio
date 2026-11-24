import { ImageSlot } from "@/components/ui/image-slot";
import { PORTFOLIO_INTRO_IMAGES, PORTFOLIO_STATS } from "@/lib/constants/portfolio";
import { PortfolioStat } from "./portfolio-stat";

// 5px frame and 8px corners at the full 820px width, scaled with the group.
const frame = "rounded-[max(4px,0.976cqw)] border-[length:max(2px,0.61cqw)] border-copy";

/**
 * Right side of the intro card: a framed laptop screenshot, a framed menu card
 * overlapping it, and two badges on top. The box is an 820 by 460 container:
 * the pictures are placed in percentages of it and the badges are sized in
 * cqw (a share of its width), so the whole group scales as one picture and
 * looks the same at any width. Both images start empty.
 */
export function PortfolioMedia({ className }: { className?: string }) {
  const { laptop, card } = PORTFOLIO_INTRO_IMAGES;
  return (
    <div className={className}>
      <div className="@container relative aspect-[820/460] w-full">
        <ImageSlot
          image={laptop}
          sizes="(min-width: 1728px) 595px, (min-width: 1280px) 40vw, 72vw"
          className={`absolute left-[13.537%] top-[8.478%] h-[82.174%] w-[73.78%] ${frame}`}
        />
        <ImageSlot
          image={card}
          sizes="(min-width: 1728px) 305px, (min-width: 1280px) 20vw, 38vw"
          className={`absolute left-[61.585%] top-[44.565%] h-[54.348%] w-[38.415%] ${frame}`}
        />
        <PortfolioStat {...PORTFOLIO_STATS.projects} layout="inline" className="left-[26.707%] top-0" />
        <PortfolioStat {...PORTFOLIO_STATS.years} layout="stacked" className="bottom-0 left-0" />
      </div>
    </div>
  );
}