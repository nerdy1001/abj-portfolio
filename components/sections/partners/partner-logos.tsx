import Image from "next/image";
import { PARTNER_LOGOS } from "@/lib/constants/partners";
import { cn } from "@/lib/utils";

/**
 * Phones: two columns. Tablets: three columns. Desktop: one row spread across
 * the full width. Logos keep their proportions to one another at every size
 * through --logo-scale.
 */
export function PartnerLogos({ className }: { className?: string }) {
  return (
    <ul
      className={cn(
        "grid grid-cols-2 place-items-center gap-x-6 gap-y-10 sm:grid-cols-3",
        "lg:flex lg:items-center lg:justify-between lg:gap-6",
        "[--logo-scale:0.7] sm:[--logo-scale:0.8] xl:[--logo-scale:1]",
        className,
      )}
    >
      {PARTNER_LOGOS.map(({ name, src, width, height }) => (
        <li key={name} className="flex items-center justify-center">
          <Image
            src={src}
            alt={name}
            width={width}
            height={height}
            style={{ "--h": `${height}px` } as React.CSSProperties}
            className="h-[calc(var(--h)*var(--logo-scale))] w-auto"
          />
        </li>
      ))}
    </ul>
  );
}