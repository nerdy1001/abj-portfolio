type HeroBodyProps = { title: string; subtitle: string };

export function HeroBody({ title, subtitle }: HeroBodyProps) {
  return (
    <div className="flex w-full max-w-300 flex-col items-center text-center">
      <h1
        style={{ "--i": 0 } as React.CSSProperties}
        className="animate-rise w-full bg-linear-to-b from-[#C7D4FF] via-white to-[#C7D4FF] bg-clip-text text-hero-title text-transparent text-balance lg:text-wrap"
      >
        {title}
      </h1>
      <p
        style={{ "--i": 1 } as React.CSSProperties}
        className="animate-rise mt-7 max-w-140 text-[20px] tracking-[-0.01em] text-foreground/90"
      >
        {subtitle}
      </p>
    </div>
  );
}