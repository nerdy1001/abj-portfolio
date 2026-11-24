import { ArrowUpRight } from "lucide-react";
import { CTAButton } from "@/components/ui/cta-button";
import { Frame } from "@/components/ui/frame";
import { ImageSlot } from "@/components/ui/image-slot";
import { READ_MORE } from "@/lib/constants/portfolio";
import type { Project } from "@/lib/constants/projects";
import { ProjectTags } from "./project-tags";

/**
 * One project in the list. Desktop: a 416 by 473 image on the left (18px in,
 * 19px down) and the text block centred vertically beside it, 48px away.
 * The card is 512px tall inside the frame and grows if the text needs more.
 * Below lg the image sits on top, at the same proportions.
 */
export function ProjectCard({ project }: { project: Project }) {
  const { slug, title, category, tags, summary, images } = project;
  return (
    <Frame>
      <article
        aria-labelledby={`project-${slug}`}
        className="flex flex-col gap-8 bg-white p-[18px] lg:min-h-[512px] lg:flex-row lg:items-center lg:gap-12 lg:pb-5 lg:pt-[19px]"
      >
        <ImageSlot
          image={images.card}
          sizes="(min-width: 1024px) 416px, (min-width: 640px) 416px, 100vw"
          className="aspect-[416/473] w-full shrink-0 self-start rounded-[8px] sm:max-w-[416px] lg:w-[416px]"
        />
        <div className="min-w-0 pb-4 lg:pb-0 lg:pr-6">
          <ProjectTags tags={[category, ...tags]} size="sm" />
          <h2 id={`project-${slug}`} className="mt-6 text-[24px] leading-9 tracking-[-0.02em] text-charcoal sm:text-[32px] sm:leading-10">
            {title}
          </h2>
          <div className="mt-[22px] flex max-w-[60rem] flex-col gap-4 text-[16px] leading-6 text-copy">
            {summary.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
          <CTAButton
            text={READ_MORE}
            href={`/portfolio/${slug}`}
            icon={ArrowUpRight}
            ariaLabel={`${READ_MORE} about ${title}`}
            className="mt-8 border-steel-light bg-primary px-2 py-6 text-[16px] leading-[1.2] hover:bg-primary-hover"
          />
        </div>
      </article>
    </Frame>
  );
}
