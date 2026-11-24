import { CONTACT_ERRORS, CONTACT_LIMITS } from "@/lib/constants/contact";

/**
 * Types and checks shared by the contact form (browser) and the server action.
 * This file has no secrets and no server code, so both sides can import it.
 */

export const CONTACT_FIELD_NAMES = ["name", "email", "subject", "message"] as const;
export type ContactField = (typeof CONTACT_FIELD_NAMES)[number];
export type ContactValues = Record<ContactField, string>;

/** Name of the hidden field that people never see and bots tend to fill. */
export const HONEYPOT_FIELD = "website";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<ContactField, string>>;
  /** What the visitor typed, sent back on error so nothing is lost. Empty after success. */
  values?: Partial<ContactValues>;
};

export const INITIAL_CONTACT_STATE: ContactFormState = { status: "idle" };

// No spaces, and none of the characters Slack uses for links (< > |).
const EMAIL = /^[^\s@<>|]+@[^\s@<>|]+\.[^\s@<>|]+$/;

export function readContactForm(formData: FormData): ContactValues {
  const read = (field: ContactField) => String(formData.get(field) ?? "").trim();
  return { name: read("name"), email: read("email"), subject: read("subject"), message: read("message") };
}

export function validateContact(values: ContactValues): Partial<Record<ContactField, string>> | null {
  const errors: Partial<Record<ContactField, string>> = {};
  for (const field of CONTACT_FIELD_NAMES) {
    const value = values[field];
    if (!value) errors[field] = CONTACT_ERRORS[field];
    else if (value.length > CONTACT_LIMITS[field]) errors[field] = CONTACT_ERRORS.tooLong(CONTACT_LIMITS[field]);
  }
  if (values.email && !errors.email && !EMAIL.test(values.email)) errors.email = CONTACT_ERRORS.email;
  return Object.keys(errors).length > 0 ? errors : null;
}
