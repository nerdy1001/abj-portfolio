import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { BookingLink } from "@/components/booking/booking-link";
import { BOOKING_URL } from "@/lib/constants/hero";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  text: string;
  href: string;
  icon?: LucideIcon;
  className?: string;
  /** Replaces the visible text as the accessible name, e.g. "Read more about Mala". */
  ariaLabel?: string;
};

/**
 * Pill button used for every call to action. Colour, padding and text size
 * come from className. The inner span adds the label gutter on top of it.
 *
 * A button pointing at BOOKING_URL opens the Cal.com booking popup instead of
 * leaving the page (see BookingLink). Other full URLs open in a new tab, and
 * paths inside the site use Next.js links.
 */
export function CTAButton({ text, href, icon: Icon, className, ariaLabel }: CTAButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full border border-transparent font-medium whitespace-nowrap text-white",
    "transition-colors duration-(--duration-base) ease-standard",
    "active:scale-[0.98] motion-reduce:active:scale-100",
    className,
  );

  const label = (
    <span className="flex items-center gap-3 px-4">
      {text}
      {Icon && <Icon aria-hidden className="size-4 shrink-0" />}
    </span>
  );

  if (href === BOOKING_URL) {
    return (
      <BookingLink href={href} ariaLabel={ariaLabel} className={classes}>
        {label}
      </BookingLink>
    );
  }

  if (/^https?:\/\//.test(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel ? `${ariaLabel} (opens in a new tab)` : undefined}
        className={classes}
      >
        {label}
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} aria-label={ariaLabel} className={classes}>
      {label}
    </Link>
  );
}
