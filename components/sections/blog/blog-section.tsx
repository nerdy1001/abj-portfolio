import { Reveal } from "@/components/motion/reveal";
import { BlogCarousel } from "../../blog/blog-carousel";
import { BlogIntro } from "../../blog/blog-intro";

export function BlogSection() {
  return (
    <section
      id="blog"
      aria-labelledby="blog-title"
      className="bg-background py-16 md:py-24 xl:py-[120px]"
    >
      <Reveal className="mx-auto w-[calc(100%-40px)] max-w-[1484px] md:w-[calc(100%-80px)]">
        <BlogCarousel header={<BlogIntro />} />
      </Reveal>
    </section>
  );
}