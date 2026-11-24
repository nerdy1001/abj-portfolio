import type { Metadata } from "next";
import { ContactPageIntro } from "@/components/contact-page/contact-page-intro";
import { Header } from "@/components/hero/header";
import { Frame } from "@/components/ui/frame";
import { CONTACT_PAGE_PARAGRAPHS, CONTACT_PAGE_TITLE } from "@/lib/constants/contact-page";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: CONTACT_PAGE_PARAGRAPHS[0] ?? CONTACT_PAGE_TITLE,
};

// 1578px column at 1728px wide, in line with the header (75px each side).
const COLUMN = "mx-auto w-[calc(100%-40px)] max-w-[1578px] md:w-[calc(100%-80px)] xl:w-[calc(100%-150px)]";

/**
 * Text on the left, the form in a grey frame on the right (753px wide, in a
 * 765px column, so it ends 12px inside the page column, as in the design). 150px of space above the
 * frame and below it, before the footer. Below xl they stack.
 */
export default function ContactPage() {
  return (
    <>
      <Header tone="light" />
      <div
        className={`${COLUMN} grid gap-12 pb-20 pt-12 md:pt-16 xl:grid-cols-[minmax(0,1fr)_765px] xl:gap-8 xl:pb-[150px] xl:pt-[150px]`}
      >
        <ContactPageIntro />
        <Frame className="w-full max-w-[753px]">
          <ContactForm className="rounded-none xl:pb-24 xl:pt-[95px]" submitClassName="xl:mt-[46px]" />
        </Frame>
      </div>
    </>
  );
}
