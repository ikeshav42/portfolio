"use client";

import Image from "next/image";
import { useId, useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Dashboard } from "@/lib/dashboards";

function DashboardImage({ image }: { image: NonNullable<Dashboard["image"]> }) {
  const img = (
    <div className="relative aspect-[16/7] w-full">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(min-width: 1024px) 28rem, 100vw"
        loading="lazy"
        unoptimized
        className="object-cover object-top"
      />
    </div>
  );
  return (
    <div className="mb-3 overflow-hidden rounded-md border">
      {image.href ? (
        <a
          href={image.href}
          target="_blank"
          rel="noopener noreferrer"
          title="Open full-size image in a new tab"
          className="block"
        >
          {img}
        </a>
      ) : (
        img
      )}
    </div>
  );
}

function DashboardRow({ d }: { d: Dashboard }) {
  const [open, setOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const panelId = useId();

  const toggle = () => {
    setOpen((v) => !v);
    setHasOpened(true);
  };

  return (
    <li className="rounded-lg border bg-secondary/40 p-3">
      <div className="flex flex-wrap items-start justify-between gap-x-3 gap-y-2">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold text-lg">{d.title}</h3>
            {d.tag && (
              <span className="text-xs font-medium rounded-full px-2 py-1 bg-secondary text-secondary-foreground whitespace-nowrap">
                {d.tag}
              </span>
            )}
          </div>
          <p className="text-sm font-medium mt-0.5">{d.question}</p>
        </div>
        {d.link && (
          <Button size="sm" className="rounded-full" asChild>
            <a href={d.link} target="_blank" rel="noopener noreferrer">
              View on GitHub <ExternalLink className="w-3 h-3" />
            </a>
          </Button>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mt-2">
        {d.tools.map((tool) => (
          <span
            key={tool}
            className="bg-secondary text-secondary-foreground rounded-full px-2 py-1 text-xs"
          >
            {tool}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls={panelId}
        className="mt-3 inline-flex items-center gap-1 rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring motion-reduce:transition-none"
      >
        {open ? "Hide preview" : "Show preview"}
        <ChevronDown
          aria-hidden="true"
          className={`h-4 w-4 transition-transform duration-300 motion-reduce:transition-none ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        id={panelId}
        inert={!open}
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="pt-3">
            {d.image && hasOpened && <DashboardImage image={d.image} />}
            <p className="text-muted-foreground">{d.description}</p>
          </div>
        </div>
      </div>
    </li>
  );
}

export function DashboardList({
  items,
  showAllHref,
}: {
  items: Dashboard[];
  showAllHref?: string;
}) {
  return (
    <>
      <ul className="space-y-3">
        {items.map((d) => (
          <DashboardRow key={d.title} d={d} />
        ))}
      </ul>
      {showAllHref && (
        <a
          href={showAllHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1 rounded-sm text-sm font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          See all dashboards on GitHub <ExternalLink className="h-3 w-3" />
        </a>
      )}
    </>
  );
}
