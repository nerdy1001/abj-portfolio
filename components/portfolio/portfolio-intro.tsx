import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/layout/primitives";
import { CTAButton } from "@/components/ui/cta-button";
import { Frame } from "@/components/ui/frame";
import {
  PORTFOLIO_CTA,
  PORTFOLIO_DESCRIPTION,
  PORTFOLIO_EYEBROW,
  PORTFOLIO_TITLE,
} from "@/lib/constants/portfolio";
import { PortfolioMedia } from "./portfolio-media";

/**
 * Dark card inside the grey frame.
 *
 * From xl (1280px) the text sits left at its full 544px and the image group
 * takes the rest of the row, up to 820px, both centred vertically. The group
 * scales as one picture (see PortfolioMedia), so it keeps the design at any size.
 * From 1728px the card is the design exactly: 600px tall, text 70px in and
 * 128px down, images 70px from the right and 59px down.
 * Below xl they stack, with the images centred under the text.
 */
export function PortfolioIntro({ className }: { className?: string }) {
  return (
    <Frame className={className}>
      <div className="relative bg-charcoal px-6 py-12 md:px-12 md:py-16 xl:grid xl:grid-cols-[544px_minmax(0,820px)] xl:items-center xl:justify-between xl:gap-[54px] xl:px-[70px] min-[1728px]:h-[600px] min-[1728px]:items-start min-[1728px]:py-0">
        <div className="flex flex-col items-start min-[1728px]:pt-[128px]">
          <Eyebrow
            tone="glass"
            dotClassName="bg-white"
            className="bg-linear-to-r from-[#767c8a] to-[#3e424b] text-[16px] text-white"
          >
            {PORTFOLIO_EYEBROW}
          </Eyebrow>
          <h1 className="mt-4 bg-linear-to-b from-[#c1d7f1] from-20% via-white via-55% to-[#c1d7f1] to-85% bg-clip-text text-[48px] font-medium leading-[1.25] tracking-[-0.04em] text-transparent md:text-[64px]">
            {PORTFOLIO_TITLE}
          </h1>
          <p className="mt-4 max-w-[34rem] text-[16px] leading-6 text-white">{PORTFOLIO_DESCRIPTION}</p>
          <CTAButton
            text={PORTFOLIO_CTA.text}
            href={PORTFOLIO_CTA.href}
            icon={ArrowUpRight}
            className="mt-8 border-steel-light bg-primary px-2 py-6 text-[16px] leading-[1.2] hover:bg-primary-hover"
          />
        </div>
        <PortfolioMedia className="mx-auto mt-12 w-full max-w-[820px] xl:mx-0 xl:mt-0 min-[1728px]:mt-[59px]" />
      </div>
    </Frame>
  );
}