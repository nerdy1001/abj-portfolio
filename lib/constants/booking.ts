import { BOOKING_URL } from "@/lib/constants/hero";

/**
 * Settings for the Cal.com booking popup. The link itself is BOOKING_URL in
 * hero.ts: change the event there (for example /15min instead of /30min) and
 * every "Schedule a call" button follows.
 */

/** "akere-bryan-sugyf3/30min": the part of BOOKING_URL after cal.com/. */
export const CAL_LINK = new URL(BOOKING_URL).pathname.replace(/^\/|\/$/g, "");

/** Keeps this site's popup separate from any other Cal.com embed on the page. */
export const CAL_NAMESPACE = "intro-call";

/** How the popup looks: light, month view, buttons in the site's primary blue. */
export const CAL_UI = {
  theme: "light",
  layout: "month_view",
  hideEventTypeDetails: false,
  cssVarsPerTheme: {
    light: { "cal-brand": "#1E40AF" },
    dark: { "cal-brand": "#1E40AF" },
  },
} as const;

export const CAL_MODAL_CONFIG = { layout: "month_view", theme: "light" } as const;
