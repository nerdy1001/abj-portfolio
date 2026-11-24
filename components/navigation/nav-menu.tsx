"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants/hero";
import { cn } from "@/lib/utils";
import type { HeaderTone } from "../hero/header";

function isCurrent(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function NavMenu({ tone = "inverse", className }: { tone?: HeaderTone; className?: string }) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary"
      className={cn(
        "rounded-full px-2 py-4",
        tone === "inverse" ? "bg-card backdrop-blur-md" : "bg-mist",
        className,
      )}
    >
      <ul className="flex items-center gap-px px-[22px]">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              aria-current={isCurrent(pathname, href) ? "page" : undefined}
              className={cn(
                "flex min-h-[38px] items-center rounded-full px-4 text-[16px] font-medium leading-[1.2] transition-colors duration-(--duration-fast) ease-standard",
                tone === "inverse"
                  ? "text-foreground/90 hover:text-white"
                  : "text-ink-strong hover:text-primary",
              )}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
