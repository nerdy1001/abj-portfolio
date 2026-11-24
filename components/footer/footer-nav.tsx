import Link from "next/link";

type FooterNavProps = { title: string; links: ReadonlyArray<{ label: string; href: string }> };

/** Gradient 32px title over a list of 20px links, about 39px apart. */
export function FooterNav({ title, links }: FooterNavProps) {
  const id = `footer-${title.toLowerCase()}`;
  return (
    <nav aria-labelledby={id} className="lg:pt-[27px]">
      <h2
        id={id}
        className="w-fit bg-linear-to-r from-periwinkle via-white to-periwinkle bg-clip-text text-[32px] font-medium leading-10 tracking-[-0.02em] text-transparent"
      >
        {title}
      </h2>
      <ul className="mt-4 flex flex-col gap-[11px] lg:mt-[19px]">
        {links.map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              className="rounded-sm text-[16px] leading-7 text-white transition-colors duration-(--duration-fast) ease-standard hover:text-periwinkle"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}