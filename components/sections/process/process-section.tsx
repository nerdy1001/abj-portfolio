import { Eyebrow } from "@/components/layout/primitives";
import { Reveal } from "@/components/motion/reveal";
import { PROCESS_EYEBROW, PROCESS_STEPS, PROCESS_TITLE } from "@/lib/constants/process";
import { ProcessStepCard } from "../../process/process-step-card";

export function ProcessSection() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="bg-paper pb-24 md:pb-32 xl:pb-[166px]"
    >
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1484px] md:w-[calc(100%-80px)]">
        <header className="flex flex-col items-start">
          <Eyebrow tone="brand" dot={false}>
            {PROCESS_EYEBROW}
          </Eyebrow>
          <h2 id="process-title" className="mt-8 text-section-title text-soft">
            {PROCESS_TITLE}
          </h2>
        </header>

        <ol className="mt-10 grid gap-6 md:mt-16 lg:grid-cols-3 lg:gap-[50px]">
          {PROCESS_STEPS.map((step, i) => (
            <li key={step.number} className="flex">
              <Reveal
                className="flex w-full flex-col [&>article]:flex-1"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <ProcessStepCard {...step} />
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}