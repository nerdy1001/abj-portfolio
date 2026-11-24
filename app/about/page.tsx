import { BeyondSection } from "@/components/sections/beyond/beyond-section";
import { ContactSection } from "@/components/sections/contact/contact-section";
import { Hero } from "@/components/hero/hero";
import { JourneySection } from "@/components/sections/journey/journey-section";
import { ProcessSection } from "@/components/sections/process/process-section";
import { WorkSection } from "@/components/sections/work/work-section";
import { AboutHero } from "@/components/hero/about-hero";

/**
 * Order follows the full-page design: hero, my journey, latest work, how I work,
 * beyond the code, contact. The footer is rendered by the layout.
 * The partners, value, about (portrait), think and blog sections are still built
 * in src/components; add them back here if you want them on this page.
 */
export default function HomePage() {
  return (
    <>
      <AboutHero />
      <JourneySection />
      <WorkSection />
      <ProcessSection />
      <BeyondSection />
      <ContactSection />
    </>
  );
}