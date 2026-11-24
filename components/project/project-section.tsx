import type { ListItem, ProjectBlock } from "@/lib/constants/projects";
import { cn } from "@/lib/utils";
import { RichText } from "./rich-text";

function Item({ item }: { item: ListItem }) {
  if (typeof item === "string") return item;
  return (
    <>
      <strong className="font-semibold text-ink-strong">{item.lead}</strong> <RichText value={item.text} />
    </>
  );
}

/**
 * A 48px heading, then an intro line, a bulleted list and an optional closing
 * line, all 18px on 32px lines with no space between them. Bullets are 4px
 * dots 10px in, with the text 24px in. bodyClassName sets the gap under the
 * heading (16px under "Project overview" and 26px under "My approach" in the design).
 */
export function ProjectSection({
  id,
  heading,
  block,
  className,
  bodyClassName,
}: {
  id: string;
  heading: string;
  block: ProjectBlock;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <section aria-labelledby={id} className={className}>
      <h2 id={id} className="text-[36px] font-medium leading-[1.25] tracking-[-0.03em] text-ink-strong md:text-[48px]">
        {heading}
      </h2>
      <div className={cn("mt-4 text-[16px] leading-8 text-copy", bodyClassName)}>
        <p>
          <RichText value={block.intro} />
        </p>
        <ul>
          {block.items.map((item, i) => (
            <li
              key={i}
              className="relative pl-6 before:absolute before:left-2.5 before:top-[14px] before:size-1 before:rounded-full before:bg-copy"
            >
              <Item item={item} />
            </li>
          ))}
        </ul>
        {block.outro && (
          <p>
            <RichText value={block.outro} />
          </p>
        )}
      </div>
    </section>
  );
}
