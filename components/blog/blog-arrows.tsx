import { ArrowLeft, ArrowRight } from "lucide-react";
import { BLOG_ARROW_LABELS } from "@/lib/constants/blog";

const button =
  "inline-flex h-[50px] w-[73px] items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors duration-(--duration-base) ease-standard hover:bg-primary-hover active:scale-[0.97] motion-reduce:active:scale-100";

/** Two 73 by 50 pills, 14px apart. */
export function BlogArrows({ onPrevious, onNext }: { onPrevious: () => void; onNext: () => void }) {
  return (
    <div className="flex gap-3.5">
      <button type="button" onClick={onPrevious} aria-label={BLOG_ARROW_LABELS.previous} className={button}>
        <ArrowLeft aria-hidden className="size-6" />
      </button>
      <button type="button" onClick={onNext} aria-label={BLOG_ARROW_LABELS.next} className={button}>
        <ArrowRight aria-hidden className="size-6" />
      </button>
    </div>
  );
}