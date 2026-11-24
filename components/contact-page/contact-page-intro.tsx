import { CONTACT_PAGE_PARAGRAPHS, CONTACT_PAGE_TITLE } from "@/lib/constants/contact-page";
import { ContactPageSocials } from "./contact-page-socials";

/**
 * 64px title, two 16px paragraphs (584px wide, which gives the design's line
 * breaks) and the social icons. From xl it starts 167px below the top of the form.
 */
export function ContactPageIntro() {
  return (
    <div className="xl:pt-[167px]">
      <h1 className="text-[40px] font-medium leading-[1.25] tracking-[-0.04em] text-ink-strong md:text-[64px]">
        {CONTACT_PAGE_TITLE}
      </h1>
      <div className="mt-6 flex max-w-[584px] flex-col gap-4 text-[16px] leading-6 text-ink-strong md:mt-8">
        {CONTACT_PAGE_PARAGRAPHS.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
      <ContactPageSocials className="mt-9" />
    </div>
  );
}
