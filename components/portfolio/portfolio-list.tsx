"use client";

import * as React from "react";
import { PORTFOLIO_EMPTY, PORTFOLIO_FILTERS } from "@/lib/constants/portfolio";
import { PROJECTS } from "@/lib/constants/projects";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./project-card";

type Filter = (typeof PORTFOLIO_FILTERS)[number];

/**
 * Filter pills, centred, then the project cards 58px below and 58px apart.
 * The pills filter by each project's category (its first tag).
 */
export function PortfolioList({ className }: { className?: string }) {
  const [filter, setFilter] = React.useState<Filter>("All");
  const projects = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div className={className}>
      <div role="group" aria-label="Filter projects" className="flex flex-wrap justify-center gap-[9px]">
        {PORTFOLIO_FILTERS.map((option) => {
          const active = option === filter;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(option)}
              className={cn(
                "h-[50px] rounded-full cursor-pointer border px-7 text-[16px] leading-6 transition-colors duration-(--duration-fast) ease-standard",
                active
                  ? "border-charcoal bg-charcoal text-white"
                  : "border-chip-edge bg-white text-charcoal hover:bg-mist",
              )}
            >
              {option}
            </button>
          );
        })}
      </div>

      <p role="status" className="sr-only">
        {`${projects.length} ${projects.length === 1 ? "project" : "projects"} shown`}
      </p>

      <div className="mt-10 flex flex-col gap-10 xl:mt-[58px] xl:gap-[58px]">
        {projects.length > 0 ? (
          projects.map((project) => <ProjectCard key={project.slug} project={project} />)
        ) : (
          <p className="text-center text-[16px] leading-6 text-copy">{PORTFOLIO_EMPTY}</p>
        )}
      </div>
    </div>
  );
}
