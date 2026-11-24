import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactSection } from "@/components/sections/contact/contact-section";
import { Header } from "@/components/hero/header";
import { ProjectCover } from "@/components/project/project-cover";
import { ProjectGallery } from "@/components/project/project-gallery";
import { ProjectIntro } from "@/components/project/project-intro";
import { ProjectSection } from "@/components/project/project-section";
import { PROJECT_LABELS } from "@/lib/constants/portfolio";
import { PROJECTS, getProject } from "@/lib/constants/projects";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

// At 1728px wide the column is 1566px.
const COLUMN = "mx-auto w-[calc(100%-40px)] max-w-[1566px] md:w-[calc(100%-80px)]";

/**
 * Spacing at desktop: cover 96px under the header, tags 97px under the cover,
 * overview 62px under the rule, gallery 64px under the overview, approach 58px
 * under the gallery, contact panel 204px under the approach, footer 202px under it.
 */
export default async function ProjectPage({ params }: Params) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return (
    <>
      <Header tone="light" />
      <article className={COLUMN}>
        <ProjectCover image={project.images.cover} className="mt-10 md:mt-16 xl:mt-24" />
        <ProjectIntro project={project} className="mt-12 xl:mt-[97px]" />
        <ProjectSection
          id="overview"
          heading={PROJECT_LABELS.overview}
          block={project.overview}
          className="mt-12 xl:mt-16"
        />
        <ProjectGallery images={project.images.gallery} className="mt-12 xl:mt-[63px]" />
        <ProjectSection
          id="approach"
          heading={PROJECT_LABELS.approach}
          block={project.approach}
          className="mt-12 xl:mt-[57px]"
          bodyClassName="xl:mt-[26px]"
        />
      </article>
      <ContactSection
        widthClassName="max-w-[1566px]"
        className="xl:pb-[202px] xl:pt-[204px]"
      />
    </>
  );
}
