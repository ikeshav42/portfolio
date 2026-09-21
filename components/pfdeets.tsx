import React from "react";
import { User, GraduationCap, Code, Briefcase, FlaskConical, ExternalLink } from "lucide-react";
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
          <li>CS grad student at UT Arlington, graduating May 2027</li>
          <li>Targeting data engineering and analytics engineering roles</li>
          <li>Into building things end to end — pipelines, dashboards, and the occasional Chrome extension</li>
          <li>Open to internships and full-time roles (F1 OPT eligible)</li>
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
          </div>
        </div>

        <br />

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">
              Bachelor of Technology in Computer Science
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
              <h3 className="font-semibold text-lg">Graduate Research Assistant (Volunteer)</h3>
              <span className="text-sm text-muted-foreground whitespace-nowrap">Jan 2026 – May 2026</span>
            </div>
            <p className="text-muted-foreground text-sm mb-2">
              UT Arlington Research Institute (UTARI)
            </p>
            <p className="text-muted-foreground">
              Built a data pipeline processing RGB and depth sensor streams from ROS bag files
              through detection (YOLO-World), segmentation (MobileSAM), and depth projection
              stages into 3D maps for robot perception. Profiled and optimized throughput from
              under 10 fps to around 25 fps by switching the detection stage.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {[
                "Computer Vision",
                "Machine Learning",
                "Environment Mapping",
                "Python",
                "Experimentation",
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
              Collected embedded hardware sensor data over network interfaces, processed it into
              structured datasets, and analyzed food drying behavior for project stakeholders.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Python", "Structured Datasets", "Stakeholder Communication", "Image Processing", "Data Pipelines", "Experimentation"].map(
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
              category: "Current Stack",
              skills: [
                "Python",
                "SQL",
                "JavaScript",
                "TypeScript",
                "Pandas",
                "NumPy",
                "Matplotlib",
                "Scikit-learn",
                "PyTorch (foundational)",
                "Git",
                "Linux",
                "Docker",
                "GCP",
                "BigQuery",
                "ETL Pipelines",
                "Data Deduplication",
                "Supabase / PostgreSQL",
                "React / Next.js",
                "Streamlit",
              ],
            },
            {
              category: "In Progress",
              skills: [
                "Databricks",
                "Apache Spark",
                "PySpark",
                "Delta Lake",
                "Medallion Architecture",
                "Dimensional Modeling",
                "ETL/ELT Pipeline Design",
                "Spark Structured Streaming",
                "Google Cloud Data Analytics Certificate",
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

    </div>
  );
};

export default PortfolioDetails;
