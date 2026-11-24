import type { ContactValues } from "@/lib/contact-form";

/**
 * Sends contact form messages to Slack through an incoming webhook.
 * Server only: the webhook URL is a secret and must never reach the browser.
 */

/** Slack treats &, < and > as control characters in message text, so they must be escaped. */
function escape(text: string) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/** Keeps a text field under Slack's limit for that part of a message. */
function clip(text: string, limit: number) {
  return text.length > limit ? `${text.slice(0, limit - 1)}…` : text;
}

/** The message as it appears in the channel: who, how to reply, the subject, then the message. */
export function buildContactMessage({ name, email, subject, message }: ContactValues) {
  const sent = Math.floor(Date.now() / 1000);
  const replyLink = `mailto:${email}?subject=${encodeURIComponent(`Re: ${subject}`)}`;
  return {
    // Shown in notifications and anywhere blocks cannot be displayed.
    text: clip(escape(`New message from ${name}: ${subject}`), 3000),
    blocks: [
      {
        type: "header",
        text: { type: "plain_text", text: "New message from your website", emoji: true },
      },
      {
        type: "section",
        fields: [
          { type: "mrkdwn", text: `*Name*\n${clip(escape(name), 1900)}` },
          { type: "mrkdwn", text: `*Email*\n<mailto:${email}|${email}>` },
          { type: "mrkdwn", text: `*Subject*\n${clip(escape(subject), 1900)}` },
          {
            type: "mrkdwn",
            text: `*Sent*\n<!date^${sent}^{date_short_pretty} at {time}|${new Date(sent * 1000).toISOString()}>`,
          },
        ],
      },
      { type: "divider" },
      {
        type: "section",
        text: { type: "mrkdwn", text: clip(escape(message), 2900) },
      },
      {
        type: "context",
        elements: [{ type: "mrkdwn", text: `<${replyLink}|Reply to ${email}>` }],
      },
    ],
  };
}

/** Posts a message. Throws with Slack's error code (never the URL) if Slack refuses it. */
export async function postToSlack(webhookUrl: string, payload: unknown) {
  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(8000),
    cache: "no-store",
  });
  if (!response.ok) {
    const reason = await response.text().catch(() => "");
    throw new Error(`Slack webhook returned ${response.status}${reason ? `: ${reason}` : ""}`);
  }
}
