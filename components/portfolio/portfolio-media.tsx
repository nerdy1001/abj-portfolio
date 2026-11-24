import { ImageSlot } from "@/components/ui/image-slot";
import { PORTFOLIO_INTRO_IMAGES, PORTFOLIO_STATS } from "@/lib/constants/portfolio";
import { PortfolioStat } from "./portfolio-stat";

/**
 * Right side of the intro card: a framed laptop screenshot, a framed menu card
 * overlapping it, and two badges on top. Everything is placed in percentages of
 * an 820 by 460 box, so the group scales as one piece. Both images start empty.
 */
export function PortfolioMedia({ className }: { className?: string }) {
  const { laptop, card } = PORTFOLIO_INTRO_IMAGES;
  return (
    <div className={className}>
      <div className="relative aspect-[820/460] w-full">
        <ImageSlot
          image={laptop}
          sizes="(min-width: 1728px) 595px, 72vw"
          className="absolute left-[13.537%] top-[8.478%] h-[82.174%] w-[73.78%] rounded-[10px]"
        />
        <ImageSlot
          image={card}
          sizes="(min-width: 1728px) 305px, 38vw"
          className="absolute left-[61.585%] top-[44.565%] h-[54.348%] w-[38.415%] rounded-[8px] border-[5px] border-copy"
        />
        <PortfolioStat {...PORTFOLIO_STATS.projects} layout="inline" className="left-[26.707%] top-0" />
        <PortfolioStat {...PORTFOLIO_STATS.years} layout="stacked" className="bottom-0 left-0" />
      </div>
    </div>
  );
}
