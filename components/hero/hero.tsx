import { HERO_SUBTITLE, HERO_TITLE } from "@/lib/constants/hero";
import { Header } from "./header";
import { HeroBackground } from "./hero-background";
import { HeroBody } from "./hero-body";
import { HeroCTAs } from "./hero-ctas";

/** Full viewport hero. The content block stays centred; the header floats above it. */
export function Hero() {
  return (
    <section
      data-surface="inverse"
      className="relative isolate flex min-h-svh w-full flex-col overflow-hidden bg-background text-foreground"
    >
      <HeroBackground />
      <Header />
      <div className="flex flex-1 flex-col items-center justify-center px-5 py-28 md:px-10">
        <HeroBody title={HERO_TITLE} subtitle={HERO_SUBTITLE} />
        <HeroCTAs />
      </div>
    </section>
  );
}