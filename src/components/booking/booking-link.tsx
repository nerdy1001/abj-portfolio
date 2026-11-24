"use client";

import * as React from "react";
import { getCalApi } from "@calcom/embed-react";
import { cn } from "@/lib/utils";
import { CAL_LINK, CAL_MODAL_CONFIG, CAL_NAMESPACE, CAL_UI } from "@/lib/constants/booking";

// One Cal.com loader for the whole page, however many booking buttons there are.
let calReady: Promise<void> | null = null;
let loaded = false;

function loadCal() {
  if (!calReady) {
    calReady = getCalApi({ namespace: CAL_NAMESPACE }).then((cal) => {
      cal("ui", CAL_UI);
      // Load the calendar in the background, so the popup opens without a wait.
      cal("preload", { calLink: CAL_LINK });
      loaded = true;
    });
    // If Cal.com cannot be reached, try again on the next page that needs it.
    calReady.catch(() => {
      calReady = null;
    });
  }
  return calReady;
}

/**
 * A booking link that opens the Cal.com calendar in a popup over the page.
 *
 * The data-cal attributes tell Cal.com's script which calendar to open when
 * the link is clicked. Until that script has loaded (or if it is blocked, or
 * JavaScript is off) this stays an ordinary link that opens the booking page
 * in a new tab, so a visitor can always book. Ctrl, Cmd, Shift and middle
 * clicks also open the new tab.
 */
export function BookingLink({
  href,
  className,
  ariaLabel,
  children,
}: {
  href: string;
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
}) {
  const [ready, setReady] = React.useState(loaded);

  React.useEffect(() => {
    let live = true;
    loadCal().then(
      () => live && setReady(true),
      () => {},
    );
    return () => {
      live = false;
    };
  }, []);

  const plainClick = (event: React.MouseEvent) =>
    event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;

  const hint = ready ? "(opens a booking calendar)" : "(opens in a new tab)";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      // Cal.com opens the popup itself; this only stops the new tab opening as well.
      onClick={(event) => {
        if (ready && plainClick(event)) event.preventDefault();
      }}
      {...(ready
        ? {
            "data-cal-link": CAL_LINK,
            "data-cal-namespace": CAL_NAMESPACE,
            "data-cal-config": JSON.stringify(CAL_MODAL_CONFIG),
            "aria-haspopup": "dialog" as const,
          }
        : {})}
      aria-label={ariaLabel ? `${ariaLabel} ${hint}` : undefined}
      // Clicks land on the link itself, never its label or icon, so Cal.com always sees its attributes.
      className={cn("[&_*]:pointer-events-none", className)}
    >
      {children}
      <span className="sr-only"> {hint}</span>
    </a>
  );
}
