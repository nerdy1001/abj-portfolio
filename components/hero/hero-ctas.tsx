import { ArrowUpRight } from "lucide-react";
import { CTAButton } from "@/components/ui/cta-button";
import { CTA_HREF, CTA_TEXT } from "@/lib/constants/hero";

export function HeroCTAs() {
  return (
    <div
      style={{ "--i": 2 } as React.CSSProperties}
      className="animate-rise mt-10 flex flex-wrap items-center justify-center gap-4"
    >
      <CTAButton
        text={CTA_TEXT.primary}
        href={CTA_HREF.primary}
        icon={ArrowUpRight}
        className="bg-primary px-2 py-4 text-[20px] leading-7 hover:bg-primary-hover [&>span]:px-5"
      />
      <CTAButton
        text={CTA_TEXT.secondary}
        href={CTA_HREF.secondary}
        className="border-steel bg-primary/30 px-2 py-4 text-[20px] leading-7 hover:bg-primary/40 [&>span]:px-6"
      />
    </div>
  );
}