import * as React from "react";
import { cn } from "@/lib/utils";

// Fill, 1px edge and 6px corners measured from the design. The fill is the input itself.
const control = cn(
  "w-full rounded-md border border-field-edge bg-field px-4 text-[16px] leading-6 text-foreground",
  "transition-colors duration-(--duration-fast) ease-standard",
  "hover:border-input focus-visible:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
  "aria-[invalid=true]:border-destructive",
);

/** error: shown under the field in red and read out with it. Nothing is added while it is empty. */
type Props = { label: string; className?: string; error?: string };

function Label({ id, label }: { id: string; label: string }) {
  return (
    <label htmlFor={id} className="text-[14px] font-medium leading-5 text-ink">
      {label}
    </label>
  );
}

function FieldError({ id, error }: { id: string; error?: string }) {
  if (!error) return null;
  return (
    <p id={id} className="text-[14px] leading-5 text-destructive">
      {error}
    </p>
  );
}

/** Label above a 62px tall input (60px fill plus the 1px edge). */
export function ContactInput({ label, className, error, ...props }: Props & React.ComponentProps<"input">) {
  const id = React.useId();
  return (
    <div className={cn("flex flex-col gap-[7px]", className)}>
      <Label id={id} label={label} />
      <input
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(control, "h-[62px]")}
        {...props}
      />
      <FieldError id={`${id}-error`} error={error} />
    </div>
  );
}

/** Label above a 180px tall text area. */
export function ContactTextArea({ label, className, error, ...props }: Props & React.ComponentProps<"textarea">) {
  const id = React.useId();
  return (
    <div className={cn("flex flex-col gap-[7px]", className)}>
      <Label id={id} label={label} />
      <textarea
        id={id}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(control, "h-[180px] resize-none py-4")}
        {...props}
      />
      <FieldError id={`${id}-error`} error={error} />
    </div>
  );
}
