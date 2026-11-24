import { FOOTER_COLUMNS, FOOTER_COPYRIGHT } from "@/lib/constants/footer";
import { FooterCTA } from "../../footer/footer-cta";
import { FooterNav } from "../../footer/footer-nav";
import { FooterSocials } from "../../footer/footer-socials";

/**
 * Charcoal footer. At 1728px wide: 120px side padding, the two link columns
 * 291px wide and 27px apart, flush with the right edge. The copyright and the
 * social icons sit on one row 271px below the button. Below lg everything stacks.
 */
export function SiteFooter() {
  return (
    <footer data-surface="charcoal" className="bg-background text-foreground">
      <div className="mx-auto w-full max-w-[1728px] px-5 pb-10 pt-16 md:px-10 md:pt-24 xl:px-[120px] xl:pb-[131px] xl:pt-[120px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-10">
          <FooterCTA />
          <div className="grid grid-cols-2 gap-x-6 lg:w-[609px] lg:shrink-0 lg:grid-cols-[291px_291px] lg:gap-x-[27px]">
            {FOOTER_COLUMNS.map((column) => (
              <FooterNav key={column.title} {...column} />
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between xl:mt-[271px]">
          <p className="text-[16px] leading-7 text-footer-muted">{FOOTER_COPYRIGHT}</p>
          <div className="lg:w-[609px] lg:shrink-0 lg:pl-0.5">
            <FooterSocials />
          </div>
        </div>
      </div>
    </footer>
  );
}