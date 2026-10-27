import * as React from "react";
import { cn } from "@/lib/utils";

export function Container({
  size = "page",
  className,
  ...props
}: React.ComponentProps<"div"> & { size?: "page" | "reading" }) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        size === "page" ? "max-w-page" : "max-w-reading",
        className,
      )}
      {...props}
    />
  );
}

type Tone = "default" | "subtle" | "tint" | "inverse";

// Cards change colour against their surface so they always stay visible:
// on "subtle" they become white, on "inverse" the remap in globals.css applies.
const toneClass: Record<Tone, string> = {
  default: "bg-background text-foreground",
  subtle: "bg-muted text-foreground [--card:var(--gray-0)]",
  tint: "bg-tint text-foreground [--card:var(--gray-0)]",
  inverse: "bg-background text-foreground",
};

export function Section({
  tone = "default",
  className,
  ...props
}: React.ComponentProps<"section"> & { tone?: Tone }) {
  return (
    <section
      data-surface={tone === "inverse" ? "inverse" : undefined}
      className={cn("section-y", toneClass[tone], className)}
      {...props}
    />
  );
}

export function Eyebrow({
  tone = "neutral",
  dot = true,
  className,
  children,
}: React.ComponentProps<"p"> & { tone?: "neutral" | "brand" | "glass"; dot?: boolean }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 rounded-full font-medium",
        tone === "brand" && "bg-tint px-3.5 py-2.5 text-[14px] leading-5 text-link",
        tone === "glass" && "bg-white/[0.11] px-3.5 py-2.5 text-[14px] leading-5 text-foreground",
        tone === "neutral" && "bg-muted px-3 py-1 text-caption text-muted-foreground",
        className,
      )}
    >
      {/* dot={false} keeps the space the dot would take, which matches the design. */}
      <span
        aria-hidden
        className={cn(
          "rounded-full",
          !dot && "invisible",
          dot && (tone === "glass" ? "bg-background" : "bg-link"),
          tone === "neutral" ? "size-1.5" : "size-2.5",
        )}
      />
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  as: Heading = "h2",
  align = "start",
  id,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  as?: "h1" | "h2" | "h3";
  align?: "start" | "center";
  id?: string;
  className?: string;
}) {
  return (
    <header
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading id={id} className="max-w-[22ch] text-title-2">
        {title}
      </Heading>
      {description && (
        <p className="max-w-reading text-lead text-muted-foreground">{description}</p>
      )}
    </header>
  );
}