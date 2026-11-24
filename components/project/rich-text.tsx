import type { RichText as RichTextValue } from "@/lib/constants/projects";

/** Plain text, or text with inline links. External links open in a new tab. */
export function RichText({ value }: { value: RichTextValue }) {
  if (typeof value === "string") return value;
  return value.map((piece, i) => {
    if (typeof piece === "string") return <span key={i}>{piece}</span>;
    const external = /^https?:\/\//.test(piece.href);
    return (
      <a
        key={i}
        href={piece.href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="text-primary underline underline-offset-2 hover:text-primary-hover"
      >
        {piece.text}
        {external && <span className="sr-only"> (opens in a new tab)</span>}
      </a>
    );
  });
}
