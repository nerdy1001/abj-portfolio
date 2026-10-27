import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type WorkCardProps = {
  title: string;
  category: string;
  href: string;
  image?: string;
  imageAlt?: string;
};

/**
 * One link per card: the arrow button is the link and its ::after covers the
 * whole card, so the entire card is clickable with a single tab stop.
 */
export function WorkCard({ title, category, href, image, imageAlt }: WorkCardProps) {
  return (
    <article
      className={[
        "group relative flex h-[500px] w-[min(85vw,662px)] shrink-0 snap-start flex-col overflow-hidden rounded-card bg-background",
        "px-5 pt-5 sm:h-[600px] sm:px-8 sm:pt-8 lg:h-[740px] lg:px-[51px] lg:pt-[31px]",
        "has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-3 has-[a:focus-visible]:outline-ring",
      ].join(" ")}
    >
      <p className="self-start rounded-full bg-chip px-[18px] py-2.5 text-[14px] font-medium leading-5 text-heading">
        {category}
      </p>

      <div className="mt-2.5 flex items-center justify-between gap-4">
        <h3 className="text-[24px] font-medium leading-8 tracking-[-0.01em] text-soft">{title}</h3>
        <Link
          href={href}
          aria-label={`View the ${title} project`}
          className="inline-flex h-[50px] w-[73px] shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground outline-none transition-colors duration-(--duration-base) ease-standard after:absolute after:inset-0 hover:bg-primary-hover"
        >
          <ArrowRight
            aria-hidden
            className="size-6 transition-transform duration-(--duration-base) ease-standard group-hover:translate-x-0.5 motion-reduce:transition-none"
          />
        </Link>
      </div>

      {/* Bleeds off the bottom edge, as in the design. */}
      <div className="relative mt-7 flex-1 rounded-t-xl bg-placeholder">
        {image && (
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            sizes="(min-width: 1024px) 560px, 85vw"
            className="rounded-t-xl object-cover"
          />
        )}
      </div>
    </article>
  );
}