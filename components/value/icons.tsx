import type { SVGProps } from "react";

/** Icons with no close match in Lucide. Same 24px grid and 1.5 stroke as the rest. */
const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

export function CirclesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="6.5" r="3" />
      <circle cx="6.5" cy="16.5" r="3" />
      <circle cx="17.5" cy="16.5" r="3" />
    </svg>
  );
}

export function TreeNodesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="9.5" width="4.5" height="5" rx="0.5" />
      <rect x="15" y="3.5" width="6.5" height="6" rx="0.5" />
      <rect x="15" y="14.5" width="6.5" height="6" rx="0.5" />
      <path d="M7 12h4M11 6.5v11M11 6.5h4M11 17.5h4" />
    </svg>
  );
}

export function BlueprintIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M8 19H5.5A2.5 2.5 0 0 1 3 16.5V8a3 3 0 0 1 3-3h15v11a3 3 0 0 1-3 3H8Z" />
      <path d="M12.5 8.5v7M15.5 8.5v7M10 10.5h8M10 13.5h8" />
    </svg>
  );
}

export function SqlFileIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5 11V3.5h9l5 5V11" />
      <path d="M14 3.5v5h5" />
      <text x="2.5" y="21" fontSize="8" fontWeight="700" fill="currentColor" stroke="none" fontFamily="inherit">
        SQL
      </text>
    </svg>
  );
}