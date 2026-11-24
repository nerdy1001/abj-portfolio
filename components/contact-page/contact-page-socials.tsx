import { CONTACT_PAGE_SOCIALS } from "@/lib/constants/contact-page";
import { cn } from "@/lib/utils";

/**
 * Four black outline icons, 32px each and 16px apart (48px from centre to
 * centre). Each link keeps a 44px or larger touch area.
 */
export function ContactPageSocials({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-4", className)}>
      {CONTACT_PAGE_SOCIALS.map(({ label, href, icon: Icon }) => {
        const external = /^https?:\/\//.test(href);
        return (
          <li key={label}>
            <a
              href={href}
              aria-label={external ? `${label} (opens in a new tab)` : label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="-m-1.5 flex rounded-full p-1.5 text-black transition-colors duration-(--duration-fast) ease-standard hover:text-primary"
            >
              <Icon aria-hidden strokeWidth={1.5} className="size-8" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
