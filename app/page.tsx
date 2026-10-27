import { Hero } from "@/components/hero/hero";
import { PartnersSection } from "@/components/sections/partners/partners-section";
import { ProcessSection } from "@/components/sections/process/process-section";
import { ValueSection } from "@/components/sections/value/value-section";
import { WorkSection } from "@/components/sections/work/work-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PartnersSection />
      <WorkSection />
      <ProcessSection />
      <ValueSection />
    </>
  );
}