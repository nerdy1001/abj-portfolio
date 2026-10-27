"use client";

import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { CTAButton } from "@/components/ui/cta-button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { CTA_HREF, CTA_TEXT, NAV_LINKS } from "@/lib/constants/hero";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <button
          type="button"
          aria-label="Open menu"
          className="grid size-12 place-items-center rounded-full bg-card text-white lg:hidden"
        >
          <Menu aria-hidden className="size-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="top" data-surface="inverse" className="bg-background px-5 pb-8 pt-6 text-foreground">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <nav aria-label="Mobile">
          <ul className="flex flex-col">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <SheetClose>
                  <Link href={href} className="flex min-h-14 items-center text-[24px] font-medium">
                    {label}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
        <CTAButton
          text={CTA_TEXT.header}
          href={CTA_HREF.header}
          icon={ArrowUpRight}
          className="mt-4 w-full bg-primary px-2 py-4 text-[20px] leading-7"
        />
      </SheetContent>
    </Sheet>
  );
}