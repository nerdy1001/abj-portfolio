import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  text: string;
  href: string;
  icon?: LucideIcon;
  className?: string;
};

/**
 * Pill button used for every call to action. Colour, padding and text size
 * come from className. The inner span adds the label gutter on top of it.
 */
export function CTAButton({ text, href, icon: Icon, className }: CTAButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full border border-transparent font-medium whitespace-nowrap text-white",
    "transition-colors duration-(--duration-base) ease-standard",
    "active:scale-[0.98] motion-reduce:active:scale-100",
    className,
  );

  const label = (
    <span className="flex items-center gap-3 px-4">
      {text}
      {Icon && <Icon aria-hidden className="size-5 shrink-0" />}
    </span>
  );

  if (/^https?:\/\//.test(href)) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {label}
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {label}
    </Link>
  );
}