"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Fades and lifts a block in once, when it first scrolls into view.
 * Rules baked in:
 * - Server render is fully visible, so nothing is hidden without JavaScript.
 * - Blocks already on screen at load never hide, so there is no flash.
 * - Reduced motion visitors never see any movement.
 * Use it for media and showcase blocks, not for every section.
 */
export function Reveal({ className, ...props }: React.ComponentProps<"div">) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [state, setState] = React.useState<"idle" | "hidden" | "shown">("idle");

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;

    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-reveal={state}
      className={cn(
        "transition-[opacity,transform] duration-(--duration-slow) ease-out",
        className,
      )}
      {...props}
    />
  );
}