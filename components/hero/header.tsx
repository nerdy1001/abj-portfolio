import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CTAButton } from "@/components/ui/cta-button";
import { CTA_HREF, CTA_TEXT, SITE_TITLE } from "@/lib/constants/hero";
import { MobileMenu } from "../navigation/mobile-menu";
import { NavMenu } from "../navigation/nav-menu";

/** Site title, nav menu and call to action. Sits on top of the hero. */
export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-5 pt-5 md:px-10 md:pt-8 xl:px-[75px]">
      <Link href="/" className="rounded-full text-[24px] font-medium tracking-[-0.02em] text-white">
        {SITE_TITLE}
      </Link>

      <NavMenu className="hidden lg:block" />

      <div className="flex items-center gap-3">
        <CTAButton
          text={CTA_TEXT.header}
          href={CTA_HREF.header}
          icon={ArrowUpRight}
          className="hidden border-steel-light bg-primary px-2 py-6 text-[18px] leading-[1.2] hover:bg-primary-hover lg:inline-flex"
        />
        <MobileMenu />
      </div>
    </header>
  );
}