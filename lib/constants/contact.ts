import { BOOKING_URL } from "@/lib/constants/hero";

// Copy for the contact form and the "Let's talk" section.

export const CONTACT_TITLE = "Let's talk.";
export const CONTACT_DESCRIPTION =
  "Whether you are hiring, building something, or just want to trade ideas, I would like to hear from you.";
export const CONTACT_CTA = { text: "Schedule call", href: BOOKING_URL } as const;

/**
 * The third label reads "Subject" in the design, same as the second.
 * It is the message box, so "Message" is probably what you want. Change it here.
 */
export const CONTACT_FIELDS = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Subject",
} as const;

export const CONTACT_SUBMIT = "Submit enquiry";

/** Longest value each field accepts, checked in the browser and again on the server. */
export const CONTACT_LIMITS = {
  name: 100,
  email: 254,
  subject: 150,
  message: 2500,
} as const;

/** What the visitor sees under the button. */
export const CONTACT_STATUS = {
  sending: "Sending",
  success: "Thank you. Your message is on its way, and I will reply by email.",
  invalid: "Please check the highlighted fields.",
  failed: "Your message could not be sent. Please try again, or email me directly.",
} as const;

/** Shown under a field the server rejects. */
export const CONTACT_ERRORS = {
  name: "Please enter your name.",
  email: "Please enter a valid email address.",
  subject: "Please enter a subject.",
  message: "Please write a message.",
  tooLong: (limit: number) => `Please keep this under ${limit} characters.`,
} as const;
