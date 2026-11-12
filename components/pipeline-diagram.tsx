import type { CSSProperties } from "react";
import type { Stage } from "@/lib/projects";

/** Numbered flow of stages: a vertical timeline on small screens, a horizontal stepper on large ones. */
export function PipelineDiagram({ stages }: { stages: Stage[] }) {
  return (
    <ol
      style={{ "--stages": stages.length } as CSSProperties}
      className="lg:grid lg:grid-cols-[repeat(var(--stages),minmax(0,1fr))]"
    >
      {stages.map((stage, i) => (
        <li
          key={stage.title}
          style={{ "--i": i + 2 } as CSSProperties}
          className="rise relative flex gap-4 pb-6 last:pb-0 lg:flex-col lg:gap-3 lg:pb-0 lg:pr-4"
        >
          {i < stages.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute left-4 top-8 bottom-0 w-px bg-border lg:left-8 lg:right-0 lg:top-4 lg:bottom-auto lg:h-px lg:w-auto"
            />
          )}
          <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border bg-background text-sm font-semibold">
            {i + 1}
          </span>
          <div className="pt-1 lg:pt-0">
            <p className="font-medium leading-snug">{stage.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{stage.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
