import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium",
    "transition-[background-color,color,transform] duration-(--duration-base) ease-standard",
    "active:scale-[0.98] motion-reduce:active:scale-100",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:size-4 [&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover",
        tertiary: "text-link underline-offset-4 hover:underline",
        // The names shadcn's own components use (Sheet, Dialog and others ask
        // for "ghost" or "outline"), mapped onto this design system.
        default: "bg-primary text-primary-foreground hover:bg-primary-hover",
        ghost: "text-foreground hover:bg-muted",
        outline: "border border-border bg-background text-foreground hover:bg-muted",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        link: "text-link underline-offset-4 hover:underline",
      },
      // md and lg meet the 44px touch target recommendation. The smaller sizes
      // exist for shadcn components (such as the close button in a sheet).
      size: {
        md: "min-h-11 px-5 text-small",
        lg: "min-h-12 px-7 text-body",
        default: "min-h-11 px-5 text-small",
        sm: "min-h-9 px-4 text-small",
        xs: "min-h-7 px-3 text-caption",
        icon: "size-11",
        "icon-lg": "size-12",
        "icon-sm": "size-8",
        "icon-xs": "size-7",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export interface ButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
}

export function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      {...props}
    >
      {asChild ? (
        children
      ) : (
        <>
          {loading && <Loader2 className="animate-spin motion-reduce:animate-none" aria-hidden />}
          {children}
        </>
      )}
    </Comp>
  );
}