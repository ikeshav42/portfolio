import React from "react";
import Link from "next/link";
import { User, GraduationCap, Code, Briefcase, FlaskConical, ExternalLink, Award, LayoutDashboard, ArrowRight } from "lucide-react";
import { projects } from "@/lib/projects";
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
          <li>CS grad student at UT Arlington (4.0 GPA), focusing on data engineering and analytics.</li>
          <li>Experienced in building reliable pipelines, structured sensor ingestion, and reproducible ML workflows in Python and SQL.</li>
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
          <div className="space-y-0.5">
            <div className="flex flex-wrap items-baseline gap-x-2">
              <h3 className="font-semibold">Master of Science in Computer Science</h3>
              <p className="text-sm text-muted-foreground">
                University of Texas at Arlington | Aug 2025 – May 2027*
              </p>
            </div>
            <div className="flex flex-wrap items-baseline gap-x-4 text-sm">
              <span className="font-semibold text-green-700 dark:text-green-400">GPA: 4.0</span>
              <span>Focus: Data Engineering, Machine Learning</span>
            </div>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Coursework:</span> Data Engineering
              for Business Applications, Database Systems, Machine Learning, Pattern Recognition
            </p>
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Certifications:</span> Stanford ML
              Specialization (Coursera)
            </p>
          </div>

          <div className="space-y-0.5">
            <div className="flex flex-wrap items-baseline gap-x-2">
              <h3 className="font-semibold">
                Bachelor of Technology in Computer Science and Engineering
              </h3>
              <p className="text-sm text-muted-foreground">
                Amrita Vishwa Vidyapeetham | 2020 – 2024
              </p>
            </div>
            <p className="text-sm font-medium">CGPA: 8.06 / 10</p>
          </div>
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
          {/* UTARI — Featured */}
          <div className="reveal border rounded-lg p-4 bg-secondary/40">
            <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
              <h3 className="font-semibold text-lg">Graduate Research Assistant</h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap">Jan 2026 – May 2026</span>
            </div>
            <p className="text-muted-foreground text-sm mb-2">
              UT Arlington Research Institute (UTARI)
            </p>
            <p className="text-muted-foreground">
              Built an asynchronous data pipeline to synchronize multi-modal RGB and depth sensor
              streams from ROS bag files for 3D spatial mapping. Profiled computational
              bottlenecks across pipeline stages; transitioned detection from GroundingDINO to
              YOLO-World, boosting frame throughput from under 10 fps to 25 fps (+150%). Built
              modular CLI tools exporting structured JSON summaries, 2D floor plans, and ROS2
              Nav2 maps.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {[
                "Python",
                "Data Pipelines",
                "Computer Vision",
                "ROS",
                "Performance Profiling",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-secondary text-secondary-foreground rounded-full px-2 py-1 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Sony */}
          <div className="reveal border-b pb-4 last:border-b-0">
            <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
              <h3 className="font-semibold text-lg">Research Assistant</h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap">May 2023 – Dec 2023</span>
            </div>
            <p className="text-muted-foreground text-sm mb-2">
              Amrita Vishwa Vidyapeetham × Sony India
            </p>
            <p className="text-muted-foreground">
              Built automated network scripts to continuously ingest raw IoT sensor readings into
              structured tabular datasets. Cleaned and validated multi-sensor experimental logs
              in Pandas to eliminate sensor noise, drift, and missing entries. Analyzed food
              drying behavior across sensor runs and presented analytical findings and
              Matplotlib charts directly to Sony representatives and project leads.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Python", "Pandas", "Matplotlib", "IoT Ingestion", "EDA"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="bg-secondary text-secondary-foreground rounded-full px-2 py-1 text-xs"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
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
          <li>
            <span className="font-medium text-foreground">
              Honeywell Smart City Hackathon Finalist (Top 20 in India, 2020):
            </span>{" "}
            Prototyped an assistive smart-city product solution engineered to improve urban
            accessibility for people with disabilities.
          </li>
          <li>
            <span className="font-medium text-foreground">WCA Competition Volunteer &amp; Host:</span>{" "}
            Was an active volunteer and host for World Cube Association (WCA) speedcubing
            competitions in Tamil Nadu, India.
          </li>
          <li>
            <span className="font-medium text-foreground">ACM Student Chapter Member:</span>{" "}
            Participated in peer programming workshops, technical sessions, and student
            developer events.
          </li>
          <li>
            <span className="font-medium text-foreground">Technical Writing:</span> Publish
            technical guides and breakdowns on Medium (@ikeshav42) covering data engineering
            workflows, Python tooling, and analytical concepts.
          </li>
        </ul>
      </section>

    </div>
  );
};

export default PortfolioDetails;
