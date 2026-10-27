import { Eyebrow } from "@/components/layout/primitives";
import {
  VALUE_CARDS,
  VALUE_DESCRIPTION,
  VALUE_EYEBROW,
  VALUE_TITLE,
} from "@/lib/constants/value";
import { ValueCard } from "../../value/value-card";

// Rows alternate between a wide card on the left and a wide card on the right.
const rowColumns = ["lg:grid-cols-[892fr_558fr]", "lg:grid-cols-[558fr_892fr]"] as const;

export function ValueSection() {
  const rows = Array.from({ length: VALUE_CARDS.length / 2 }, (_, i) => VALUE_CARDS.slice(i * 2, i * 2 + 2));

  return (
    <section
      id="value"
      data-surface="charcoal"
      aria-labelledby="value-title"
      className="bg-background pb-24 pt-16 text-foreground md:pb-32 md:pt-24 xl:pb-[149px] xl:pt-[148px]"
    >
      <div className="mx-auto w-[calc(100%-40px)] max-w-[1465px] md:w-[calc(100%-80px)]">
        <header className="flex flex-col items-start">
          <Eyebrow tone="glass">{VALUE_EYEBROW}</Eyebrow>
          <h2
            id="value-title"
            className="mt-8 bg-linear-to-r from-white to-heading-fade bg-clip-text text-section-title text-transparent"
          >
            {VALUE_TITLE}
          </h2>
          <p className="mt-5 max-w-[52rem] text-[16px] leading-7 text-white">{VALUE_DESCRIPTION}</p>
        </header>

        <div className="mt-12 flex flex-col gap-[17px] md:mt-16">
          {rows.map((row, i) => (
            <ul key={i} className={`grid gap-[17px] ${rowColumns[i % 2]}`}>
              {row.map((card) => (
                <li key={card.title} className="flex">
                  <div className="w-full [&>article]:h-full [&>article]:w-full">
                    <ValueCard {...card} />
                  </div>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}