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
 * Dark card inside the grey frame. From 2xl (1536px) the text sits left and
 * the images right, inside a 600px tall card: text 70px in and 128px down,
 * images 70px from the right and 59px down. Below 2xl they stack.
 * The image group takes whatever is left beside the text, up to 820px.
 */
export function PortfolioIntro({ className }: { className?: string }) {
  return (
    <Frame className={className}>
      <div className="relative bg-charcoal px-6 py-12 md:px-12 md:py-16 2xl:h-[600px] 2xl:px-[70px] 2xl:pb-0 2xl:pt-[128px]">
        <div className="flex flex-col items-start">
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
        <PortfolioMedia className="mt-12 w-full max-w-[820px] 2xl:absolute 2xl:right-[70px] 2xl:top-[59px] 2xl:mt-0 2xl:w-[min(820px,calc(100%-738px))]" />
      </div>
    </Frame>
  );
}
