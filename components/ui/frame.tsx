import { cn } from "@/lib/utils";

/**
 * The thick grey frame used on the portfolio pages: a 10px #D4D6DF border
 * (6px on phones) with 20px outer corners. The content inside gets 10px corners,
 * which is what the border leaves of the outer radius.
 */
export function Frame({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("overflow-hidden rounded-[20px] border-[6px] border-rim md:border-[10px]", className)}
      {...props}
    />
  );
}
