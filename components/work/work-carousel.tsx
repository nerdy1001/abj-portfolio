import { WORK_PROJECTS } from "@/lib/constants/work";
import { WorkCard } from "./work-card";

/**
 * Scrolls sideways with no visible scrollbar. The region is focusable so
 * keyboard users can scroll it with the arrow keys, and the first card
 * starts 16px from the left edge, as in the design.
 */
export function WorkCarousel() {
  return (
    <div
      role="region"
      aria-label="Latest projects"
      tabIndex={0}
      className="scrollbar-none flex snap-x gap-4 overflow-x-auto scroll-smooth px-4 sm:gap-8 lg:gap-[76px] motion-reduce:scroll-auto"
    >
      {WORK_PROJECTS.map((project) => (
        <WorkCard key={project.title} {...project} />
      ))}
    </div>
  );
}