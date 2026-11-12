import type { MetadataRoute } from "next";
import { caseStudyProjects } from "@/lib/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://ikeshav42.dev/", changeFrequency: "monthly", priority: 1 },
    ...caseStudyProjects.map((p) => ({
      url: `https://ikeshav42.dev/projects/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
