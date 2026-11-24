import { Hero } from "@/components/hero/hero";
import { AboutSection } from "@/components/sections/about/about-section";
import { BeyondSection } from "@/components/sections/beyond/beyond-section";
import { BlogSection } from "@/components/sections/blog/blog-section";
import { ContactSection } from "@/components/sections/contact/contact-section";
import { PartnersSection } from "@/components/sections/partners/partners-section";
import { ProcessSection } from "@/components/sections/process/process-section";
import { ThinkSection } from "@/components/sections/think/think-section";
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
      <AboutSection />
      {/* <ThinkSection /> */}
      <BeyondSection />
      <ContactSection />
      <BlogSection />
    </>
  );
}