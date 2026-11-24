import { ArrowUpRight } from "lucide-react";
import { CTAButton } from "@/components/ui/cta-button";
import { FOOTER_CTA, FOOTER_TITLE } from "@/lib/constants/footer";

/** Left column: a two line gradient heading (wraps after "project") and the booking button. */
export function FooterCTA() {
  return (
    <div className="lg:pt-5">
      <p className="w-fit max-w-[24rem] bg-linear-to-r from-periwinkle via-white to-periwinkle bg-clip-text text-[40px] font-medium leading-[56px] tracking-[-0.03em] text-transparent sm:text-[48px] sm:leading-[64px]">
        {FOOTER_TITLE}
      </p>
      <CTAButton
        text={FOOTER_CTA.text}
        href={FOOTER_CTA.href}
        icon={ArrowUpRight}
        className="mt-8 h-[60px] border-steel-light bg-primary px-0 text-[16px] leading-7 hover:bg-primary-hover lg:mt-11 [&>span]:gap-4 [&>span]:pl-5 [&>span]:pr-6"
      />
    </div>
  );
}