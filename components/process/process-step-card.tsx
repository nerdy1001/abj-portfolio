import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { PROCESS_CARD_DESIGN_WIDTH } from "@/lib/constants/process";

type ProcessStepCardProps = {
  number: string;
  title: string;
  description: string;
  icon?: LucideIcon;
  media: { src: string; width: number; height: number; alt: string };
};

export function ProcessStepCard({ number, title, description, icon: Icon, media }: ProcessStepCardProps) {
  return (
    <article className="relative flex flex-col overflow-hidden rounded-card bg-background lg:min-h-[729px]">
      {/* Decorative step number. It sits behind the title. */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 -top-2 select-none text-[192px] font-semibold leading-none tracking-[-0.04em] text-foreground/[0.035]"
      >
        {number}
      </span>

      <div className="relative px-7.5 pt-7.5">
        <div className="h-10 text-soft">{Icon && <Icon aria-hidden strokeWidth={1.5} className="size-10" />}</div>
        <h3 className="mt-[30px] text-[32px] font-medium leading-[1.2] tracking-[-0.02em] text-soft">{title}</h3>
        <p className="mt-[34px] text-[16px] leading-7 text-soft font-medium">{description}</p>
      </div>

      <div className="mt-auto flex justify-end pt-6">
        <Image
          src={media.src}
          alt={media.alt}
          width={media.width}
          height={media.height}
          sizes="(min-width: 1024px) 462px, 100vw"
          style={{ width: `${(media.width / PROCESS_CARD_DESIGN_WIDTH) * 100}%`, height: "auto" }}
        />
      </div>
    </article>
  );
}