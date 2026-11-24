"use client";

import * as React from "react";
import { sendContactMessage } from "@/lib/actions/send-contact-message";
import { CONTACT_FIELDS, CONTACT_LIMITS, CONTACT_STATUS, CONTACT_SUBMIT } from "@/lib/constants/contact";
import { HONEYPOT_FIELD, INITIAL_CONTACT_STATE } from "@/lib/contact-form";
import { cn } from "@/lib/utils";
import { ContactInput, ContactTextArea } from "./contact-field";

/**
 * White card. 44px side padding and 83px top and bottom at desktop, with a
 * 31px gap between rows. Name and email share a row from sm up.
 *
 * className overrides the card (the contact page uses 95px and 96px top and
 * bottom); submitClassName overrides the space above the button (46px there).
 *
 * Submitting sends the message to Slack through a server action. While it
 * sends, the button says so and cannot be pressed twice. The result appears
 * under the button; it takes no space until there is one. On an error the
 * visitor's text stays in the fields; after success they are cleared.
 */
export function ContactForm({ className, submitClassName }: { className?: string; submitClassName?: string }) {
  const [state, formAction, pending] = React.useActionState(sendContactMessage, INITIAL_CONTACT_STATE);
  const values = state.values ?? {};
  const errors = state.errors ?? {};

  return (
    <form action={formAction} className={cn("rounded-xl bg-white p-6 sm:p-8 lg:px-11 lg:py-[83px]", className)}>
      {/* Hidden from people, including screen reader users. Bots that fill it are ignored. */}
      <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label>
          Website
          <input type="text" name={HONEYPOT_FIELD} tabIndex={-1} autoComplete="off" defaultValue="" />
        </label>
      </div>

      <div className="flex flex-col gap-[31px]">
        <div className="grid gap-[31px] sm:grid-cols-2 sm:gap-4">
          <ContactInput
            label={CONTACT_FIELDS.name}
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={CONTACT_LIMITS.name}
            defaultValue={values.name ?? ""}
            error={errors.name}
          />
          <ContactInput
            label={CONTACT_FIELDS.email}
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={CONTACT_LIMITS.email}
            defaultValue={values.email ?? ""}
            error={errors.email}
          />
        </div>
        <ContactInput
          label={CONTACT_FIELDS.subject}
          name="subject"
          type="text"
          required
          maxLength={CONTACT_LIMITS.subject}
          defaultValue={values.subject ?? ""}
          error={errors.subject}
        />
        <ContactTextArea
          label={CONTACT_FIELDS.message}
          name="message"
          required
          maxLength={CONTACT_LIMITS.message}
          defaultValue={values.message ?? ""}
          error={errors.message}
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className={cn(
          "mt-[34px] block h-[60px] w-full rounded-full bg-primary text-[16px] font-medium leading-6 text-primary-foreground transition-colors duration-(--duration-base) ease-standard hover:bg-primary-hover active:scale-[0.99] disabled:cursor-wait disabled:opacity-80 motion-reduce:active:scale-100",
          submitClassName,
        )}
      >
        {pending ? CONTACT_STATUS.sending : CONTACT_SUBMIT}
      </button>

      <p
        role="status"
        className={cn(
          state.message
            ? cn("mt-4 text-[14px] leading-5", state.status === "success" ? "text-success" : "text-destructive")
            : "sr-only",
        )}
      >
        {state.message}
      </p>
    </form>
  );
}
