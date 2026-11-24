import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";
import { ContactForm } from "../../contact/contact-form";
import { ContactIntro } from "../../contact/contact-intro";

/**
 * Soft blue panel: the primary colour fading from 20% to 6% opacity over the
 * page, with a 1px light edge and 20px corners. From lg the text sits left and
 * the form card right (580 to 607). Below lg they stack.
 *
 * The panel follows each page's column (1484px on home, 1578px on /portfolio,
 * 1566px on project pages). The content inside stays 1187px wide and left
 * aligned, so on the wider panels the form card does not move to the edge.
 *
 * className overrides the section's spacing; widthClassName overrides the column.
 */
export function ContactSection({
  className,
  widthClassName,
}: {
  className?: string;
  widthClassName?: string;
}) {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className={cn("bg-background py-16 md:py-24 xl:pb-[176px] xl:pt-20", className)}
    >
      <div className={cn("mx-auto w-[calc(100%-40px)] max-w-[1484px] md:w-[calc(100%-80px)]", widthClassName)}>
        <div className="rounded-[20px] border border-[rgb(170_195_232/0.6)] bg-[linear-gradient(to_bottom,rgb(30_64_175/0.2),rgb(30_64_175/0.06))] bg-clip-padding px-5 py-10 sm:px-8 sm:py-12 md:px-12 md:py-16 xl:px-[147px] xl:py-[119px]">
          <Reveal className="grid gap-10 lg:grid-cols-[580fr_607fr] lg:gap-0 xl:max-w-[1187px]">
            <ContactIntro />
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
