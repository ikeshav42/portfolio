import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PipelineDiagram } from "@/components/pipeline-diagram";
import { caseStudyProjects } from "@/lib/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudyProjects.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudyProjects.find((p) => p.slug === slug);
  if (!project) return {};
  const title = `${project.name} · Keshav Sundararaman`;
  const description = project.caseStudy.summary;
  return {
    title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { type: "article", url: `/projects/${project.slug}`, title, description },
    twitter: { card: "summary_large_image", title, description },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = caseStudyProjects.find((p) => p.slug === slug);
  if (!project) notFound();
  const { caseStudy } = project;

  return (
    <main className="container mx-auto max-w-5xl px-5 py-10 sm:px-10 sm:py-16">
      <Link
        href="/#projects"
        className="inline-flex min-h-10 items-center gap-2 rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Keshav Sundararaman
      </Link>

      <header className="rise mt-6">
        <p className="text-sm font-medium text-muted-foreground">
          Case study{project.subtitle ? ` · ${project.subtitle}` : ""}
        </p>
        <h1 className="mt-2 text-3xl tracking-tighter sm:text-5xl">{project.name}</h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">{caseStudy.summary}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.links.map((l) => (
            <Button key={l.label} size="sm" className="rounded-full" asChild>
              <a href={l.href} target="_blank" rel="noopener noreferrer">
                {l.label} <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          ))}
        </div>
      </header>

      <section aria-label="Results" className="rise mt-10" style={{ "--i": 1 } as CSSProperties}>
        <dl className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {caseStudy.results.map((r) => (
            <div key={r.label} className="flex flex-col-reverse rounded-lg border bg-secondary/40 p-4">
              <dt className="mt-1 text-sm text-muted-foreground">{r.label}</dt>
              <dd className="text-2xl font-semibold tracking-tight sm:text-3xl">{r.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-12">
        <h2 className="mb-6 text-2xl font-semibold">How it works</h2>
        <PipelineDiagram stages={caseStudy.stages} />
      </section>

      {caseStudy.table && (
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold">Results</h2>
          <div className="overflow-x-auto rounded-lg border">
            <table className="w-full text-left text-sm">
              <caption className="border-b px-4 py-3 text-left text-muted-foreground">
                {caseStudy.table.caption}
              </caption>
              <thead>
                <tr className="border-b bg-secondary/40">
                  {caseStudy.table.columns.map((c) => (
                    <th key={c} scope="col" className="whitespace-nowrap px-4 py-2 font-medium">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {caseStudy.table.rows.map((row, i) => (
                  <tr
                    key={row[0]}
                    className={`border-b last:border-b-0 ${
                      i === caseStudy.table?.highlightRow ? "bg-green-500/10 font-medium" : ""
                    }`}
                  >
                    {row.map((cell, j) => (
                      <td key={j} className="px-4 py-2 tabular-nums">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {caseStudy.table.note && (
            <p className="mt-3 text-sm text-muted-foreground">{caseStudy.table.note}</p>
          )}
        </section>
      )}

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        {caseStudy.sections.map((s) => (
          <section key={s.heading}>
            <h2 className="mb-4 text-2xl font-semibold">{s.heading}</h2>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              {s.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      {caseStudy.images.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-4 text-2xl font-semibold">Figures</h2>
          <div className="grid items-start gap-6 md:grid-cols-2">
            {caseStudy.images.map((img) => (
              <figure key={img.src} className="reveal">
                <a
                  href={img.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Open full-size image in a new tab"
                  className="block overflow-hidden rounded-lg border bg-white"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    loading="lazy"
                    unoptimized
                    className="h-auto w-full"
                  />
                </a>
                <figcaption className="mt-2 text-sm text-muted-foreground">{img.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      <section className="mt-12">
        <h2 className="mb-4 text-2xl font-semibold">Built with</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">
              {tech}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
