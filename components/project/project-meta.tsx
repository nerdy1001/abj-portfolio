import { PROJECT_LABELS } from "@/lib/constants/portfolio";
import type { Project } from "@/lib/constants/projects";

/**
 * Client, sector and duration in a row, each column as wide as its text and
 * 96px apart (wraps on narrow screens). Labels in brand blue, values in grey.
 */
export function ProjectMeta({ client, sector, duration }: Pick<Project, "client" | "sector" | "duration">) {
  const items = [
    [PROJECT_LABELS.client, client],
    [PROJECT_LABELS.sector, sector],
    [PROJECT_LABELS.duration, duration],
  ] as const;
  return (
    <dl className="flex flex-wrap gap-x-12 gap-y-4 text-[16px] leading-6 lg:gap-x-24">
      {items.map(([label, value]) => (
        <div key={label}>
          <dt className="text-primary font-medium">{label}</dt>
          <dd className="text-copy">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
