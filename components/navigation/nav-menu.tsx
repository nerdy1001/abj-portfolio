"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants/hero";
import { cn } from "@/lib/utils";

function isCurrent(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function NavMenu({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className={cn("rounded-full bg-card px-2 py-4 backdrop-blur-md", className)}>
      <ul className="flex items-center gap-px px-[22px]">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              aria-current={isCurrent(pathname, href) ? "page" : undefined}
              className="flex min-h-[38px] items-center rounded-full px-4 text-[18px] leading-[1.2] text-foreground/90 transition-colors duration-(--duration-fast) ease-standard hover:text-white"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}