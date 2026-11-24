"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import type { HeaderTone } from "@/components/hero/header";
import { CTAButton } from "@/components/ui/cta-button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { CTA_HREF, CTA_TEXT, NAV_LINKS } from "@/lib/constants/hero";
import { cn } from "@/lib/utils";

/**
 * Menu button and slide-down menu for screens below lg.
 *
 * The trigger is styled directly, so it renders a single button (wrapping a
 * second button inside it is invalid HTML and breaks hydration). The menu's
 * open state lives here, and every link closes it on click, so there is no
 * need for asChild or render props, which differ between shadcn's Radix and
 * Base UI versions. Closing the menu before the booking popup opens lets the
 * popup take clicks and focus.
 */
export function MobileMenu({ tone = "inverse" }: { tone?: HeaderTone }) {
  const [open, setOpen] = React.useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className={cn(
          "grid size-12 place-items-center rounded-full lg:hidden",
          tone === "inverse" ? "bg-card text-white" : "bg-mist text-ink-strong",
        )}
      >
        <Menu aria-hidden className="size-6" />
      </SheetTrigger>
      <SheetContent side="top" data-surface="inverse" className="bg-background px-5 pb-8 pt-6 text-foreground">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <nav aria-label="Mobile">
          <ul className="flex flex-col">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} onClick={close} className="flex min-h-14 items-center text-[24px] font-medium">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-4" onClick={close}>
          <CTAButton
            text={CTA_TEXT.header}
            href={CTA_HREF.header}
            icon={ArrowUpRight}
            className="w-full bg-primary px-2 py-4 text-[20px] leading-7"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}