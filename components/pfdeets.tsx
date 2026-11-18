import Link from "next/link";
import { User, GraduationCap, Code, Briefcase, FlaskConical, ExternalLink, Award, LayoutDashboard, ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { education } from "@/lib/education";
import { experience } from "@/lib/experience";
import { activities } from "@/lib/activities";
import { Button } from "@/components/ui/button";
import { dashboards } from "@/lib/dashboards";
import { ExpandableText } from "@/components/expandable-text";
import { DashboardList } from "@/components/dashboard-list";

const MAX_DASHBOARDS = 3;
const ALL_DASHBOARDS_URL = "https://github.com/ikeshav42/bi-dashboards";
const sortedDashboards = [...dashboards].sort((a, b) => b.date.localeCompare(a.date));

const PortfolioDetails = () => {
  return (
    <div className="h-full overflow-y-auto lg:pr-4 space-y-6">

      {/* About Me Section */}
      <section id="about" tabIndex={-1} className="scroll-mt-16 lg:scroll-mt-8 focus:outline-none">
        <div className="flex items-center gap-2 mb-4 lg:mt-10">
          <User className="w-6 h-6" />
          <h2 className="text-2xl font-semibold">About</h2>
        </div>
        <ul className="text-base sm:text-lg text-muted-foreground list-disc pl-5 space-y-1">
          <li>CS grad student at UT Arlington (4.0 GPA), focusing on data engineering, analytics, and AI engineering.</li>
          <li>Experienced in building reliable pipelines, structured sensor ingestion, and reproducible ML workflows in Python and SQL.</li>
          <li>Building agentic workflows with LLMs, from Claude skills for everyday tooling to an LLM-planned road-trip game with my team at HackUTA 2026.</li>
          <li>Shipped BestPick (live Chrome extension comparing variant pricing) and built end-to-end time-series ML models over 619K+ market records.</li>
          <li>Available from summer 2027 on F-1 OPT for internships and Full-Time roles.</li>
        </ul>
      </section>

      {/* Education Section */}
      <section id="education" tabIndex={-1} className="scroll-mt-16 lg:scroll-mt-8 focus:outline-none">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="w-6 h-6" />
          <h2 className="text-2xl font-semibold">Education</h2>
        </div>

        <div className="space-y-3">
          {education.map((e) => (
            <div key={e.degree} className="space-y-0.5">
              <div className="flex flex-wrap items-baseline gap-x-2">
                <h3 className="font-semibold">{e.degree}</h3>
                <p className="text-sm text-muted-foreground">
                  {e.institution} | {e.dates}
                </p>
              </div>
              {e.gpa && (
                <div className="flex flex-wrap items-baseline gap-x-4 text-sm">
                  <span className="font-semibold text-green-700 dark:text-green-400">GPA: {e.gpa}</span>
                  <span>Focus: {e.focus}</span>
                </div>
              )}
              {e.cgpa && <p className="text-sm font-medium">CGPA: {e.cgpa}</p>}
              {e.coursework && (
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Coursework:</span> {e.coursework}
                </p>
              )}
              {e.certifications && (
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Certifications:</span> {e.certifications}
                </p>
              )}
              {e.thesis && (
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Thesis:</span> {e.thesis}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" tabIndex={-1} className="scroll-mt-16 lg:scroll-mt-8 focus:outline-none">
        <div className="flex items-center gap-2 mb-4">
          <FlaskConical className="w-6 h-6" />
          <h2 className="text-2xl font-semibold">Projects</h2>
        </div>

        <div className="space-y-4">
          {projects.map((project) => (
            <div key={project.name} className="reveal group border-b pb-4 last:border-b-0">
              <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                <div>
                  <h3 className="font-semibold text-lg">
                    {project.caseStudy ? (
                      <Link
                        href={`/projects/${project.slug}`}
                        className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      >
                        {project.name}
                      </Link>
                    ) : (
                      project.name
                    )}
                  </h3>
                  {project.subtitle && (
                    <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                  )}
                </div>
                {project.badge && (
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-medium rounded-full px-2 py-1 whitespace-nowrap ${
                      project.badge === "In Progress"
                        ? "text-amber-600 dark:text-amber-400 bg-amber-500/10"
                        : "text-green-600 dark:text-green-400 bg-green-500/10"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        project.badge === "In Progress" ? "bg-amber-500" : "bg-green-500"
                      }`}
                    />
                    {project.badge}
                  </span>
                )}
              </div>
              <ExpandableText text={project.description} className="text-muted-foreground mt-1" />
              <div className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-secondary text-secondary-foreground rounded-full px-2 py-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {(project.links.length > 0 || project.caseStudy) && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.caseStudy && (
                    <Button size="sm" variant="outline" className="rounded-full" asChild>
                      <Link href={`/projects/${project.slug}`}>
                        Case study <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" />
                      </Link>
                    </Button>
                  )}
                  {project.links.map((l) => (
                    <Button key={l.label} size="sm" className="rounded-full" asChild>
                      <a href={l.href} target="_blank" rel="noopener noreferrer">
                        {l.label} <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* BI Dashboards Section */}
      <section id="dashboards" tabIndex={-1} className="scroll-mt-16 lg:scroll-mt-8 focus:outline-none">
        <div className="flex items-center gap-2 mb-1">
          <LayoutDashboard className="w-6 h-6" />
          <h2 className="text-2xl font-semibold">BI Dashboards</h2>
        </div>
        <p className="text-muted-foreground mb-4">Dashboards I build while learning Power BI.</p>

        <DashboardList
          items={sortedDashboards.slice(0, MAX_DASHBOARDS)}
          showAllHref={sortedDashboards.length > MAX_DASHBOARDS ? ALL_DASHBOARDS_URL : undefined}
        />
      </section>

      {/* Experience Section */}
      <section id="experience" tabIndex={-1} className="scroll-mt-16 lg:scroll-mt-8 focus:outline-none">
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="w-6 h-6" />
          <h2 className="text-2xl font-semibold">Experience</h2>
        </div>

        <div className="space-y-6">
          {experience.map((x) => (
            <div
              key={x.role + x.organization}
              className={
                x.featured
                  ? "reveal border rounded-lg p-4 bg-secondary/40"
                  : "reveal border-b pb-4 last:border-b-0"
              }
            >
              <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                <h3 className="font-semibold text-lg">{x.role}</h3>
                <span className="text-sm text-muted-foreground whitespace-nowrap">{x.dates}</span>
              </div>
              <p className="text-muted-foreground text-sm mb-2">{x.organization}</p>
              <p className="text-muted-foreground">{x.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {x.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-secondary text-secondary-foreground rounded-full px-2 py-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" tabIndex={-1} className="scroll-mt-16 lg:scroll-mt-8 focus:outline-none">
        <div className="flex items-center gap-2 mb-4">
          <Code className="w-6 h-6" />
          <h2 className="text-2xl font-semibold">Technical Skills</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
          {[
            {
              category: "Languages & Querying",
              skills: ["Python", "SQL (CTEs, Window Functions)", "JavaScript", "TypeScript", "Bash"],
            },
            {
              category: "Data Systems, Warehousing & BI",
              skills: [
                "Google Cloud Platform",
                "BigQuery",
                "Relational Database Design",
                "PostgreSQL / Supabase",
                "Databricks",
                "Apache Spark",
                "Delta Lake",
                "Matplotlib",
                "Excel",
                "Power BI (learning)",
                "Streamlit",
              ],
            },
            {
              category: "Data Engineering & Modeling",
              skills: [
                "ETL/ELT Pipelines",
                "Medallion Architecture",
                "Data Cleaning & Deduplication",
                "Dimensional Modeling (in progress)",
                "REST APIs",
              ],
            },
            {
              category: "Machine Learning & Tools",
              skills: [
                "Scikit-learn",
                "Feature Engineering",
                "PyTorch (foundational)",
                "Git",
                "Linux",
                "Docker",
                "React / Next.js",
              ],
            },
            {
              category: "AI Engineering",
              skills: [
                "Agentic Workflows",
                "LLM APIs (Gemini)",
                "Claude Code & Skills",
                "Prompt Engineering",
              ],
            },
          ].map(({ category, skills }) => (
            <div key={category} className="reveal">
              <p className="text-sm font-semibold text-muted-foreground mb-1">{category}</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership & Activities Section */}
      <section id="leadership" tabIndex={-1} className="scroll-mt-16 lg:scroll-mt-8 focus:outline-none">
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-6 h-6 shrink-0" />
          <h2 className="text-2xl font-semibold">Leadership &amp; Activities</h2>
        </div>
        <ul className="text-muted-foreground list-disc pl-5 space-y-2">
          {activities.map((a) => (
            <li key={a.title}>
              <span className="font-medium text-foreground">{a.title}</span>{" "}
              {a.description}
            </li>
          ))}
        </ul>
      </section>

    </div>
  );
};

export default PortfolioDetails;
