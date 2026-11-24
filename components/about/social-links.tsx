import { ABOUT_SOCIALS } from "@/lib/constants/about";

/**
 * 28px icons, 20px apart. Each link has a 44px touch area (padding with an
 * equal negative margin) that does not change the layout.
 */
export function SocialLinks() {
  return (
    <ul className="flex items-center gap-5">
      {ABOUT_SOCIALS.map(({ label, href, icon: Icon }) => {
        const external = /^https?:\/\//.test(href);
        return (
          <li key={label}>
            <a
              href={href}
              aria-label={external ? `${label} (opens in a new tab)` : label}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="-m-2 flex rounded-full p-2 text-soft transition-colors duration-(--duration-fast) ease-standard hover:text-link"
            >
              <Icon aria-hidden strokeWidth={1.5} className="size-7" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}