import { ProjectTags } from "@/components/portfolio/project-tags";
import type { Project } from "@/lib/constants/projects";
import { ProjectMeta } from "./project-meta";

/**
 * Tags, then the title on the left half and the description with its meta on
 * the right half (two equal columns from lg). The right column starts 16px
 * lower than the title, as in the design. A 2px rule closes the block.
 */
export function ProjectIntro({ project, className }: { project: Project; className?: string }) {
  const { title, category, tags, description } = project;
  return (
    <div className={className}>
      <ProjectTags tags={[category, ...tags]} size="lg" />
      <div className="mt-10 grid gap-6 lg:mt-[65px] lg:grid-cols-2 lg:gap-0">
        <h1 className="text-[48px] font-medium leading-none tracking-[-0.04em] text-charcoal md:text-[64px]">
          {title}
        </h1>
        <div className="lg:pt-[18px]">
          <p className="text-[16px] leading-6 text-copy">{description}</p>
          <div className="mt-8">
            <ProjectMeta {...project} />
          </div>
        </div>
      </div>
      <hr className="mt-12 h-0.5 border-0 bg-rule lg:mt-[66px]" />
    </div>
  );
}
