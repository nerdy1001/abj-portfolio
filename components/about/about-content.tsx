import Link from "next/link";
import { Eyebrow } from "@/components/layout/primitives";
import { ABOUT_EYEBROW, ABOUT_PARAGRAPHS, ABOUT_TITLE } from "@/lib/constants/about";
import { SocialLinks } from "./social-links";

/** Left column: pill, heading, three paragraphs and the social links. */
export function AboutContent() {
  return (
    <div className="flex flex-col items-start lg:self-center lg:pt-[14px]">
      <Eyebrow tone="brand">{ABOUT_EYEBROW}</Eyebrow>

      <h2
        id="about-title"
        className="mt-8 max-w-[45rem] text-about-title text-heading lg:mt-[54px]"
        style={{ textWrap: "wrap" }}
      >
        {ABOUT_TITLE}
      </h2>

      <div className="mt-6 flex max-w-[41rem] flex-col gap-4 text-[16px] font-medium leading-7 text-soft lg:mt-[19px]">
        {ABOUT_PARAGRAPHS.map((pieces, i) => (
          <p key={i}>
            {pieces.map((piece, j) =>
              typeof piece === "string" ? (
                piece
              ) : (
                <Link
                  key={j}
                  href={piece.href}
                  className="rounded-sm underline-offset-4 transition-colors duration-(--duration-fast) ease-standard hover:text-link hover:underline"
                >
                  {piece.text}
                </Link>
              ),
            )}
          </p>
        ))}
      </div>

      <div className="mt-10 lg:mt-12">
        <SocialLinks />
      </div>
    </div>
  );
}