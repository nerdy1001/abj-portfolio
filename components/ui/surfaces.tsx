import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("overflow-hidden rounded-card bg-card text-card-foreground", className)}
      {...props}
    />
  );
}

/** One link per card. The whole card is clickable through a stretched link. */
export function ProjectCard({
  href,
  title,
  category,
  description,
  image,
}: {
  href: string;
  title: string;
  category: string;
  description: string;
  image: { src: string; alt: string };
}) {
  return (
    <Card
      className={cn(
        "group relative flex flex-col transition-colors duration-(--duration-base) ease-standard",
        "hover:bg-secondary-hover",
        "has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-3 has-[a:focus-visible]:outline-ring",
      )}
    >
      <div className="relative aspect-[4/3] bg-muted">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 352px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <p className="text-caption font-medium text-muted-foreground">{category}</p>
        <h3 className="text-title-3">
          <Link href={href} className="outline-none after:absolute after:inset-0">
            {title}
          </Link>
        </h3>
        <p className="text-small text-muted-foreground">{description}</p>
        <ArrowUpRight
          aria-hidden
          className="mt-auto size-5 self-end text-link transition-transform duration-(--duration-base) ease-standard group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
        />
      </div>
    </Card>
  );
}

export function FeatureTile({
  icon,
  title,
  children,
  media,
  className,
}: {
  icon?: React.ReactNode;
  title: string;
  children: React.ReactNode;
  media?: React.ReactNode;
  className?: string;
}) {
  return (
    <Card className={cn("flex flex-col gap-4 p-6 md:p-8", className)}>
      {icon && (
        <span
          aria-hidden
          className="grid size-10 place-items-center rounded-full bg-accent text-accent-foreground [&_svg]:size-5"
        >
          {icon}
        </span>
      )}
      <h3 className="text-title-3">{title}</h3>
      <p className="text-small text-muted-foreground">{children}</p>
      {media && <div className="mt-2 overflow-hidden rounded-control">{media}</div>}
    </Card>
  );
}

/** Use inside a <dl>. The term is read first, the value is shown first. */
export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col-reverse gap-1">
      <dt className="text-small text-muted-foreground">{label}</dt>
      <dd className="text-title-1 tabular-nums">{value}</dd>
    </div>
  );
}