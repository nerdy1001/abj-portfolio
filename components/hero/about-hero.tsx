import {
  HERO_PORTRAITS,
  HERO_STATS,
  HERO_SUBTITLE,
  HERO_TITLE,
} from "@/lib/constants/about-hero";
import { Header } from "./header";
import { HeroBackground } from "./hero-background";
import { HeroBody } from "./hero-body";
import { HeroCTAs } from "./hero-ctas";
import { HeroPortrait } from "./hero-portrait";
import { HeroStat } from "./hero-stat";

/**
 * Full viewport hero on #1E2439. The text block is centred a little below the middle
 * (165px of space above it, 112px below), the portraits sit on the two edges and the
 * badges overlap them. From lg up the portraits and badges show; below that it is text only.
 */
export function AboutHero() {
  return (
    <section
      data-surface="inverse"
      className="relative isolate flex min-h-svh w-full flex-col overflow-hidden bg-hero-surface text-foreground"
    >
      <HeroBackground />
      <Header />
      <HeroPortrait side="left" {...HERO_PORTRAITS.left} />
      <HeroPortrait side="right" {...HERO_PORTRAITS.right} />
      {HERO_STATS.map((stat) => (
        <HeroStat key={stat.side} {...stat} />
      ))}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 pb-24 pt-32 md:px-10 lg:pb-28 lg:pt-[165px]">
        <HeroBody title={HERO_TITLE} subtitle={HERO_SUBTITLE} />
        <HeroCTAs />
      </div>
    </section>
  );
}