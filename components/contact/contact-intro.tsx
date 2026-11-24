import { ArrowRight } from "lucide-react";
import { CTAButton } from "@/components/ui/cta-button";
import { CONTACT_CTA, CONTACT_DESCRIPTION, CONTACT_TITLE } from "@/lib/constants/contact";

/** Left column: heading, one short paragraph and the booking button. */
export function ContactIntro() {
  return (
    <div className="flex flex-col items-start lg:pt-[9px]">
      {/* Black on purpose: the design uses pure black here, not the heading grey. */}
      <h2 id="contact-title" className="text-about-title font-medium text-heading" style={{ textWrap: "wrap" }}>
        {CONTACT_TITLE}
      </h2>
      <p className="mt-4 max-w-[30rem] text-[16px] leading-7 font-medium text-soft lg:mt-[23px]">
        {CONTACT_DESCRIPTION}
      </p>
      <CTAButton
        text={CONTACT_CTA.text}
        href={CONTACT_CTA.href}
        icon={ArrowRight}
        className="mt-8 h-[60px] bg-primary px-2 text-[16px] leading-7 hover:bg-primary-hover lg:mt-8 [&>span]:gap-2.5 [&>span]:px-6"
      />
    </div>
  );
}