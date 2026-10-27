import type { ValueCard as ValueCardData } from "@/lib/constants/value";
import { IconTile } from "./icon-tile";
import { ValueMedia } from "./value-media";

/**
 * Text is vertically centred in the card on desktop. The left padding is a
 * share of the card width, so it matches the design at every desktop width.
 */
export function ValueCard({ title, paragraphs, titleIcon, inset, media }: ValueCardData) {
  return (
    <article
      style={{ "--inset": inset } as React.CSSProperties}
      className="glass-card relative overflow-hidden rounded-card p-6 sm:p-8 lg:flex lg:min-h-[634px] lg:p-0"
    >
      <div className="lg:min-w-0 lg:flex-1 lg:self-center lg:pl-(--inset) lg:pr-6">
        <div>
          <div className="flex items-center gap-8">
            <h3 className="w-fit whitespace-pre-line bg-linear-to-r from-[#C0D6F1] via-white to-[#C0D6F1] bg-clip-text text-[40px] font-normal leading-[1.25] tracking-[-0.02em] text-transparent sm:text-[48px] sm:leading-[60px]">
              {title}
            </h3>
            {titleIcon && <IconTile icon={titleIcon} />}
          </div>
          <div className="mt-9 flex max-w-[24rem] flex-col gap-4 text-[16px] leading-7 text-white">
            {paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </div>
      </div>
      {media && <ValueMedia media={media} />}
    </article>
  );
}