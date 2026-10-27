import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "@/components/layout/primitives";
import { CTAButton } from "@/components/ui/cta-button";
import { WORK_CTA, WORK_DESCRIPTION, WORK_EYEBROW, WORK_TITLE } from "@/lib/constants/work";

export function WorkHeader() {
  return (
    <header className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
      <div className="flex flex-col items-start">
        <Eyebrow tone="brand">{WORK_EYEBROW}</Eyebrow>
        <h2 id="work-title" className="mt-8 text-section-title text-soft">
          {WORK_TITLE}
        </h2>
        <p className="mt-9 max-w-120 text-[16px] leading-7 text-soft font-medium">{WORK_DESCRIPTION}</p>
      </div>
      <CTAButton
        text={WORK_CTA.text}
        href={WORK_CTA.href}
        icon={ArrowUpRight}
        className="self-start bg-primary px-2 py-4 text-[20px] leading-7 hover:bg-primary-hover md:self-auto [&>span]:px-5"
      />
    </header>
  );
}