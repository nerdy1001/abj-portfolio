"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About me" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

// Replace with your real booking link.
export const BOOKING_URL = "https://example.com/book";

function isCurrent(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

/**
 * The whole bar is one inverse pill, so legibility never depends on what
 * sits behind it (dark hero on one page, white article on the next).
 */
export function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4">
      <div
        data-surface="inverse"
        className="mx-auto flex max-w-page items-center justify-between gap-4 rounded-full bg-background/80 py-2 pl-5 pr-2 text-foreground shadow-raised backdrop-blur-xl"
      >
        <Link href="/" className="rounded-full text-small font-semibold">
          Akere Bryan James
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isCurrent(pathname, href) ? "page" : undefined}
                  className={cn(
                    "inline-flex min-h-10 items-center rounded-full px-4 text-small transition-colors duration-(--duration-fast) ease-standard",
                    "text-muted-foreground hover:text-foreground aria-[current=page]:text-foreground",
                  )}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Button className="hidden sm:inline-flex">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Schedule a call
              <ArrowUpRight aria-hidden />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </Button>

          <Sheet>
            <SheetTrigger>
              <Button variant="secondary" className="size-11 px-0 md:hidden" aria-label="Open menu">
                <Menu aria-hidden className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="px-5 pb-8 pt-6">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <nav aria-label="Mobile">
                <ul className="flex flex-col">
                  {links.map(({ href, label }) => (
                    <li key={href}>
                      <SheetClose>
                        <Link
                          href={href}
                          aria-current={isCurrent(pathname, href) ? "page" : undefined}
                          className="flex min-h-14 items-center text-title-3 aria-[current=page]:text-link"
                        >
                          {label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <Button size="lg" className="mt-4 w-full">
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Schedule a call
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}