import { Reveal } from "@/components/motion/reveal";
import { WorkCarousel } from "../../work/work-carousel";
import { WorkHeader } from "../../work/work-header";

export function WorkSection() {
  return (
    <section
      id="work"
      aria-labelledby="work-title"
      className="overflow-hidden bg-paper pb-24 pt-16 md:pb-32 md:pt-24 xl:pb-[167px] xl:pt-[115px]"
    >
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1484px] md:w-[calc(100%-80px)]">
        <WorkHeader />
      </div>
      <Reveal className="mt-10 md:mt-[60px]">
        <WorkCarousel />
      </Reveal>
    </section>
  );
}