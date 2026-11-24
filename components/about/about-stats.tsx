import { ABOUT_STATS } from "@/lib/constants/about";
import { cn } from "@/lib/utils";

/**
 * Frosted glass bar laid over the bottom of the portrait.
 * Desktop columns are 190px, 189px and the rest, with a 44px left padding and
 * a 1px divider that is 66px tall, as in the design. On smaller screens the
 * three columns share the width equally.
 */
export function AboutStats() {
  return (
    <dl className="absolute inset-x-3 bottom-4 grid grid-cols-3 rounded-2xl bg-glass pb-4 pt-4 backdrop-blur-[24px] sm:inset-x-6 sm:bottom-10 sm:pb-6 sm:pt-5 lg:right-[27px] lg:pb-7 lg:grid-cols-[190px_189px_1fr] lg:pl-[44px]">
      {ABOUT_STATS.map(({ value, label }, i) => (
        <div
          key={label}
          className={cn(
            "relative flex flex-col-reverse items-start gap-1 px-3 sm:px-5",
            "lg:px-0",
            i === 1 && "lg:pl-[25px]",
            i === 2 && "lg:pl-[38px]",
          )}
        >
          {i > 0 && (
            <span
              aria-hidden
              className="absolute left-0 top-0 h-full w-px bg-white/30 lg:top-[7px] lg:h-[66px]"
            />
          )}
          <dt className="text-[14px] leading-5 text-white sm:text-[16px] sm:leading-6 lg:text-[20px] lg:leading-7">{label}</dt>
          <dd className="text-[24px] leading-8 text-white sm:text-[28px] lg:text-[32px] lg:leading-10">{value}</dd>
        </div>
      ))}
    </dl>
  );
}