import type { Block } from "@/lib/constants/posts";
import { InlineText } from "./inline-text";

/**
 * Paragraphs and bulleted lists, 16px on 24px lines, 16px apart.
 * A list item can open with a bold lead-in, as in the PDF.
 */
export function PostBlocks({ blocks }: { blocks: readonly Block[] }) {
  return (
    <div className="flex flex-col gap-4">
      {blocks.map((block, i) =>
        block.type === "p" ? (
          <p key={i}>
            <InlineText value={block.text} />
          </p>
        ) : (
          <ul key={i} className="flex list-disc flex-col gap-2 pl-6 marker:text-ink-strong">
            {block.items.map((item, j) => (
              <li key={j}>
                {item.lead && <strong className="font-semibold">{item.lead}</strong>}
                {item.lead && item.text !== "" && " "}
                <InlineText value={item.text} />
              </li>
            ))}
          </ul>
        ),
      )}
    </div>
  );
}
