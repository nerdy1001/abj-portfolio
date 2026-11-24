import type { SVGProps } from "react";

/**
 * Outline brand icons for the social links. Lucide no longer ships brand
 * logos, so these are drawn on the same 24px grid with a 1.5 stroke.
 */
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function BehanceIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M1.5 5.5h5.2a2.7 2.7 0 0 1 0 5.4H1.5V5.5Zm0 5.4h5.8a2.9 2.9 0 0 1 0 5.8H1.5v-5.8Z" />
      <path d="M14.5 6.5h6.5M22 13.3h-7.4a3.3 3.3 0 0 0 6.2 1.4M14.6 13.3a3.3 3.3 0 0 1 7.4 0" />
    </svg>
  );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="2.75" y="2.75" width="18.5" height="18.5" rx="3" />
      <path d="M7.5 10.5v6M7.5 7.6v.1M11.5 16.5v-6M11.5 13a2.5 2.5 0 0 1 5 0v3.5" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 3.5h4.3l12.7 17h-4.3L3.5 3.5Z" />
      <path d="M3.9 20.5 10.7 13M13.3 11 20.1 3.5" />
    </svg>
  );
}

/** GitHub's cat outline, on the same 24px grid as the icons above. */
export function GitHubIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}
