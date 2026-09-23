import React from "react";
import { User, GraduationCap, Code, Briefcase, FlaskConical, ExternalLink, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortfolioDetails = () => {
  return (
    <div className="h-full overflow-y-auto pr-4 space-y-6">

      {/* About Me Section */}
      <section>
        <div className="flex items-center gap-2 mb-4 mt-10">
          <User className="w-6 h-6" />
          <h2 className="text-2xl font-semibold">About</h2>
        </div>
        <ul className="text-lg text-muted-foreground list-disc pl-5 space-y-1">
          <li>CS grad student at UT Arlington (4.0 GPA), focusing on data engineering and analytics.</li>
          <li>Experienced in building reliable pipelines, structured sensor ingestion, and reproducible ML workflows in Python and SQL.</li>
          <li>Shipped BestPick (live Chrome extension comparing variant pricing) and built end-to-end time-series ML models over 619K+ market records.</li>
          <li>Open to internships and full-time roles (F1 OPT eligible).</li>
        </ul>
      </section>

      {/* Education Section */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="w-6 h-6" />
          <h2 className="text-2xl font-semibold">Education</h2>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">Master of Science in Computer Science</h3>
            <p className="text-muted-foreground">
              University of Texas at Arlington | Aug 2025 – May 2027*
            </p>
            <p className="mt-1 text-sm font-semibold text-green-700 dark:text-green-400">GPA: 4.0</p>
            <p className="mt-1">Focus: Data Engineering, Machine Learning</p>
            <p className="mt-2 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Coursework:</span> Data Engineering
              for Business Applications, Database Systems, Machine Learning, Pattern Recognition
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Certifications:</span> Google Cloud
              Data Analytics Certificate (in progress), Stanford ML Specialization (Coursera)
            </p>
          </div>
        </div>

        <br />

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">
              Bachelor of Technology in Computer Science and Engineering
            </h3>
            <p className="text-muted-foreground">
              Amrita Vishwa Vidyapeetham | 2020 – 2024
            </p>
            <p className="mt-1 text-sm font-medium">CGPA: 8.06 / 10</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="w-6 h-6" />
          <h2 className="text-2xl font-semibold">Experience</h2>
        </div>

        <div className="space-y-6">
          {/* UTARI — Featured */}
          <div className="border rounded-lg p-4 bg-secondary/40">
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
                "Computer Vision",
                "Machine Learning",
                "Environment Mapping",
                "Python",
                "Experimentation",
                "Data Pipelines",
                "Performance Profiling",
                "JSON Data Export",
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
          <div className="border-b pb-4 last:border-b-0">
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
              {["Python", "Structured Datasets", "Stakeholder Communication", "Image Processing", "Data Pipelines", "Experimentation", "EDA", "Matplotlib", "IoT Ingestion"].map(
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

      {/* Projects Section */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <FlaskConical className="w-6 h-6" />
          <h2 className="text-2xl font-semibold">Projects</h2>
        </div>

        <div className="space-y-4">
          {[
            {
              name: "BestPick",
              subtitle: "Chrome Extension",
              description:
                "Built a Chrome extension that scans all variants on an Amazon product page and finds the lowest price across every condition — New, Like New, Very Good, Good, and Acceptable. Designed the architecture first, then built it with Claude as a dev partner. Shipped v1.1 within 24 hours of launch adding support for size-and-color variant grids and bundle listings.",
              technologies: ["JavaScript", "Chrome Extensions", "Manifest V3", "Async/Concurrency", "HTML Parsing"],
              badge: "Live on Chrome Web Store",
              links: [
                { label: "Chrome Web Store", href: "https://chromewebstore.google.com/detail/bestpick/pgfllnifhaeoglmpdafpmmodfalpckln" },
                { label: "GitHub", href: "https://github.com/ikeshav42/bestpick-chrome-extension" },
              ],
            },
            {
              name: "Abnormal Move Prediction in S&P 500 Stocks",
              description:
                "End-to-end ML pipeline predicting abnormal next-day price moves across 505 S&P 500 stocks (619K+ daily OHLCV rows spanning 5 years), engineering 12 no-lookahead features from price and volume history. Used strict time-based train/validation/test splits to prevent data leakage and tuned hyperparameters on validation F1 across four model families. Random Forest performed best (test AUC 0.72, F1 0.31 at a 2% move threshold); used feature importance and L1 sparsification to identify volatility and price-range features as the strongest signals.",
              technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Time-Series Validation", "Feature Engineering"],
              badge: "Published on GitHub",
              links: [
                { label: "GitHub", href: "https://github.com/ikeshav42/sp500-abnormal-move-prediction" },
              ],
            },
            {
              name: "F1 Data Pipeline",
              description:
                "F1 data engineering pipeline built on the OpenF1 public API. Ingests raw race data (lap times, pit stops, driver positions, tyre compounds, weather) into a bronze/silver/gold Delta Lake medallion architecture on Databricks. In progress — bronze ingestion layer complete.",
              technologies: ["Python", "OpenF1 API", "Databricks", "Delta Lake", "Apache Spark", "Medallion Architecture"],
              badge: "In Progress",
              links: [
                { label: "Live Dashboard", href: "https://analyticsf1.vercel.app/" },
              ],
            },
          ].map((project) => (
            <div key={project.name} className="border-b pb-4 last:border-b-0">
              <div className="flex items-start justify-between gap-2 flex-wrap mb-1">
                <div>
                  <h3 className="font-semibold text-lg">{project.name}</h3>
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
              <p className="text-muted-foreground mt-1">{project.description}</p>
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
              <div className="flex flex-wrap gap-2 mt-3">
                {project.links.map((l) => (
                  <Button key={l.label} size="sm" className="rounded-full" asChild>
                    <a href={l.href} target="_blank" rel="noopener noreferrer">
                      {l.label} <ExternalLink className="w-3 h-3" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section>
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
            <div key={category}>
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
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Award className="w-6 h-6" />
          <h2 className="text-2xl font-semibold">Leadership &amp; Activities</h2>
        </div>
        <ul className="text-muted-foreground list-disc pl-5 space-y-2">
          <li>
            <span className="font-medium text-foreground">
              Honeywell Smart City Hackathon Finalist (Top 20 in India, 2021):
            </span>{" "}
            Prototyped an assistive smart-city product solution engineered to improve urban
            accessibility for people with disabilities.
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
