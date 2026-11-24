import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CTAButton } from "@/components/ui/cta-button";
import { CTA_HREF, CTA_TEXT, SITE_TITLE } from "@/lib/constants/hero";
import { cn } from "@/lib/utils";
import { MobileMenu } from "../navigation/mobile-menu";
import { NavMenu } from "../navigation/nav-menu";

export type HeaderTone = "inverse" | "light";

/**
 * Site title, nav menu and call to action.
 * "inverse" floats over the dark home hero. "light" sits in the page flow on
 * white pages (portfolio and project pages): navy title, grey nav pill, dark links.
 * Both share the same geometry: 75px side padding at xl, 32px from the top, 70px tall.
 */
export function Header({ tone = "inverse" }: { tone?: HeaderTone }) {
  return (
    <header
      className={cn(
        "z-20 flex items-center justify-between px-5 pt-5 md:px-10 md:pt-8 xl:px-[75px]",
        tone === "inverse" ? "absolute inset-x-0 top-0" : "relative",
      )}
    >
      <Link
        href="/"
        className={cn(
          "rounded-full text-[24px] font-medium tracking-[-0.02em]",
          tone === "inverse" ? "text-white" : "text-brand-ink",
        )}
      >
        {SITE_TITLE}
      </Link>

      <NavMenu tone={tone} className="hidden lg:block" />

      <div className="flex items-center gap-3">
        <CTAButton
          text={CTA_TEXT.header}
          href={CTA_HREF.header}
          icon={ArrowUpRight}
          className="hidden border-steel-light bg-primary px-2 py-6 text-[16px] leading-[1.2] hover:bg-primary-hover lg:inline-flex"
        />
        <MobileMenu tone={tone} />
      </div>
    </header>
  );
}
