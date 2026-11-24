"use server";

import { CONTACT_STATUS } from "@/lib/constants/contact";
import {
  HONEYPOT_FIELD,
  readContactForm,
  validateContact,
  type ContactFormState,
} from "@/lib/contact-form";
import { buildContactMessage, postToSlack } from "@/lib/slack";

/**
 * Runs on the server when the contact form is submitted. Checks the fields,
 * then posts the message to the Slack channel behind SLACK_WEBHOOK_URL.
 * Works without JavaScript too, as a plain form post.
 */
export async function sendContactMessage(
  _previous: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // A bot filled the hidden field. Pretend it worked and send nothing.
  if (String(formData.get(HONEYPOT_FIELD) ?? "") !== "") {
    return { status: "success", message: CONTACT_STATUS.success, values: {} };
  }

  const values = readContactForm(formData);
  const errors = validateContact(values);
  if (errors) return { status: "error", message: CONTACT_STATUS.invalid, errors, values };

  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("Contact form: SLACK_WEBHOOK_URL is not set, so the message was not sent.");
    return { status: "error", message: CONTACT_STATUS.failed, values };
  }

  try {
    await postToSlack(webhookUrl, buildContactMessage(values));
  } catch (error) {
    console.error("Contact form: sending to Slack failed.", error instanceof Error ? error.message : error);
    return { status: "error", message: CONTACT_STATUS.failed, values };
  }

  return { status: "success", message: CONTACT_STATUS.success, values: {} };
}
