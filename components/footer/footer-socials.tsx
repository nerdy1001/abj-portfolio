import { FOOTER_SOCIALS } from "@/lib/constants/footer";

/** 46px icons, 18px apart. The icons are drawn a little inside their box, so they line up with the columns above. */
export function FooterSocials() {
  return (
    <ul className="flex items-center gap-[18px]">
      {FOOTER_SOCIALS.map(({ label, href, icon: Icon }) => {
        const external = /^https?:\/\//.test(href);
        return (
          <li key={label}>
            <a
              href={href}
              aria-label={external ? `${label} (opens in a new tab)` : label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex rounded-full text-footer-icon transition-colors duration-(--duration-fast) ease-standard hover:text-periwinkle"
            >
              <Icon aria-hidden className="size-[32px]" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}