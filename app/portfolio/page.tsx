import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/contact/contact-section";
import { Header } from "@/components/hero/header";
import { PortfolioIntro } from "@/components/portfolio/portfolio-intro";
import { PortfolioList } from "@/components/portfolio/portfolio-list";
import { PORTFOLIO_DESCRIPTION } from "@/lib/constants/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description: PORTFOLIO_DESCRIPTION,
};

// At 1728px wide the column is 1578px (75px each side, in line with the header).
const COLUMN = "mx-auto w-[calc(100%-40px)] max-w-[1578px] md:w-[calc(100%-80px)] xl:w-[calc(100%-150px)]";

/**
 * Spacing at desktop: intro card 80px under the header, filters 106px under the
 * card, cards 58px apart, contact panel 207px under the last card, footer 213px
 * under the panel.
 */
export default function PortfolioPage() {
  return (
    <>
      <Header tone="light" />
      <div className={COLUMN}>
        <PortfolioIntro className="mt-10 md:mt-16 xl:mt-20" />
        <PortfolioList className="mt-16 xl:mt-[106px]" />
      </div>
      <ContactSection
        widthClassName="max-w-[1578px] xl:w-[calc(100%-150px)]"
        className="xl:pb-[213px] xl:pt-[207px]"
      />
    </>
  );
}
