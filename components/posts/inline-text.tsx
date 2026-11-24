import type { InlineText as InlineTextValue } from "@/lib/constants/posts";

/** Plain text, or text with italic, bold and linked pieces. External links open in a new tab. */
export function InlineText({ value }: { value: InlineTextValue }) {
  if (typeof value === "string") return value;
  return value.map((piece, i) => {
    if (typeof piece === "string") return <span key={i}>{piece}</span>;
    let node: React.ReactNode = piece.text;
    if (piece.em) node = <em>{node}</em>;
    if (piece.strong) node = <strong className="font-semibold">{node}</strong>;
    if (piece.href) {
      const external = /^https?:\/\//.test(piece.href);
      node = (
        <a
          href={piece.href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="text-primary underline underline-offset-2 hover:text-primary-hover"
        >
          {node}
          {external && <span className="sr-only"> (opens in a new tab)</span>}
        </a>
      );
    }
    return <span key={i}>{node}</span>;
  });
}
