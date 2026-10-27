import * as React from "react";
import { CircleAlert } from "lucide-react";
import { cn } from "@/lib/utils";

const control = cn(
  "w-full rounded-control border border-input bg-background px-4 text-body text-foreground",
  "placeholder:text-muted-foreground",
  "transition-colors duration-(--duration-fast) ease-standard",
  "hover:border-foreground focus-visible:border-primary",
  "aria-[invalid=true]:border-destructive",
  "disabled:cursor-not-allowed disabled:opacity-50",
);

type FieldMeta = { label: string; optional?: boolean; hint?: string; error?: string };

function Field({
  id,
  label,
  optional,
  hint,
  error,
  children,
}: FieldMeta & { id: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-small font-medium">
        {label}
        {optional && <span className="font-normal text-muted-foreground"> (optional)</span>}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="text-caption text-muted-foreground">
          {hint}
        </p>
      )}
      {children}
      {/* The live region exists before the error does, so screen readers announce it. */}
      <div id={`${id}-error`} aria-live="polite">
        {error && (
          <p className="flex items-center gap-2 text-small text-destructive">
            <CircleAlert aria-hidden className="size-4 shrink-0" />
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

function describedBy(id: string, meta: FieldMeta) {
  return [meta.hint && `${id}-hint`, `${id}-error`].filter(Boolean).join(" ");
}

export function TextField({
  label,
  optional,
  hint,
  error,
  className,
  ...props
}: FieldMeta & React.ComponentProps<"input">) {
  const id = React.useId();
  return (
    <Field id={id} label={label} optional={optional} hint={hint} error={error}>
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, { label, hint, error })}
        className={cn(control, "min-h-12", className)}
        {...props}
      />
    </Field>
  );
}

export function TextAreaField({
  label,
  optional,
  hint,
  error,
  className,
  ...props
}: FieldMeta & React.ComponentProps<"textarea">) {
  const id = React.useId();
  return (
    <Field id={id} label={label} optional={optional} hint={hint} error={error}>
      <textarea
        id={id}
        rows={5}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, { label, hint, error })}
        className={cn(control, "min-h-32 py-3", className)}
        {...props}
      />
    </Field>
  );
}