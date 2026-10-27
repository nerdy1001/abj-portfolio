import { Eyebrow, Section } from "@/components/layout/primitives";
import { PARTNERS_EYEBROW, PARTNERS_TITLE } from "@/lib/constants/partners";
import { PartnerLogos } from "./partner-logos";

export function PartnersSection() {
  return (
    <Section aria-labelledby="partners-title">
      <div className="mx-auto w-full max-w-[1500px] px-5 md:px-10 xl:px-[75px]">
        <header className="flex flex-col items-center text-center">
          <Eyebrow tone="brand">{PARTNERS_EYEBROW}</Eyebrow>
          <h2 id="partners-title" className="mt-8 text-section-title text-heading">
            {PARTNERS_TITLE}
          </h2>
        </header>
        <PartnerLogos className="mt-12 lg:mt-[72px]" />
      </div>
    </Section>
  );
}