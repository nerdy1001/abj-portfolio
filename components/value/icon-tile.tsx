import { cn } from "@/lib/utils";
import type { TileIcon } from "@/lib/constants/value";

/** 61px glass square. It is translucent, so it picks up whatever sits behind it. */
export function IconTile({ icon: Icon, className, style }: { icon: TileIcon; className?: string; style?: React.CSSProperties }) {
  return (
    <span
      aria-hidden
      style={style}
      className={cn(
        "grid size-[61px] shrink-0 place-items-center border border-white/[0.04] bg-tile text-white backdrop-blur-[2px]",
        className,
      )}
    >
      <Icon aria-hidden className="size-7" strokeWidth={1.5} />
    </span>
  );
}