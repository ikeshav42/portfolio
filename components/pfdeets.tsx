import React from "react";
import { GraduationCap, Code, Briefcase, Star, FlaskConical } from "lucide-react";

const PortfolioDetails = () => {
  return (
    <div className="h-full overflow-y-auto pr-4 space-y-6">

      {/* About Me Section */}
      <section>
        <p className="mt-10 text-lg text-muted-foreground">
          Hi, I&apos;m Keshav Sundararaman, a Computer Science graduate student at the University of Texas
          at Arlington. I&apos;m focused on data engineering and applied machine learning — I build
          production ETL pipelines, work on computer vision and ML research at UTARI, and enjoy
          projects that bridge clean engineering with real-world impact. I&apos;m actively seeking Summer
          2026 internships in data engineering, ML infrastructure, or backend development where I can
          contribute meaningfully from day one.
        </p>
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
              University of Texas at Arlington | Aug 2025 – May 2027 (Expected)
            </p>
            <p className="mt-1 text-sm font-medium text-green-600 dark:text-green-400">GPA: 4.0</p>
            <p className="mt-1">Focus: Data Engineering, Algorithms, and Machine Learning</p>
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
            <p className="mt-2">
              Relevant Coursework: Data Structures, Algorithms, Machine Learning, Database
              Management Systems, Computer Networks, Software Development, and Cloud Computing
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Code className="w-6 h-6" />
          <h2 className="text-2xl font-semibold">Technical Skills</h2>
        </div>

        <div className="space-y-3">
          {[
            {
              category: "Data Engineering",
              skills: [
                "ETL Pipelines",
                "Supabase / PostgreSQL",
                "BeautifulSoup",
                "Playwright",
                "Data Deduplication",
                "Cron Scheduling",
              ],
            },
            {
              category: "Languages",
              skills: ["Python", "SQL", "JavaScript", "TypeScript", "Java", "Embedded C"],
            },
            {
              category: "ML / AI",
              skills: [
                "Computer Vision",
                "GloVe Embeddings",
                "Scikit-learn",
                "NumPy / Pandas",
                "Grammatical Evolution",
              ],
            },
            {
              category: "Tools & Infrastructure",
              skills: [
                "Git / GitHub",
                "Docker",
                "Raspberry Pi",
                "React / Next.js",
                "Streamlit",
                "AWS / GCP (Fundamentals)",
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
              <span className="text-sm text-muted-foreground whitespace-nowrap">Jan 2026 – Present</span>
            </div>
            <p className="text-muted-foreground text-sm mb-2">
              UT Arlington Research Institute (UTARI)
            </p>
            <p className="text-muted-foreground">
              Working on computer vision and machine learning research focused on positional
              identification and environment mapping for navigation-related problems. Design and run
              experiments, analyze results, and collaborate with faculty mentors to evaluate
              approaches and refine solutions.
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
              Research-driven development involving real-time image processing and embedded C
              workflows. Built and optimized Python-based data pipelines used in early machine
              learning experiments and supported experimentation and internal technical presentations.
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {["Python", "Embedded C", "Image Processing", "Data Pipelines", "Experimentation"].map(
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
              name: "JobDataset ETL Pipeline",
              description:
                "Multi-source ETL pipeline scraping internship and job postings from Indeed and LinkedIn. Features a class-based scraper architecture (BaseScraper/IndeedScraper), MD5 fingerprint deduplication, config-driven design, and Supabase/PostgreSQL as the data store. Deployed to a Raspberry Pi with cron scheduling for continuous data collection.",
              technologies: ["Python", "ETL", "Supabase", "PostgreSQL", "BeautifulSoup", "Cron"],
              link: "https://github.com/ikeshav42/job-dataset",
            },
            {
              name: "Market Narrative Engine",
              description:
                "Streamlit dashboard that scores financial news relevance to stock tickers using GloVe word embeddings. Surfaces the most narratively relevant news for a given stock by computing semantic similarity between headlines and company context.",
              technologies: ["Python", "GloVe", "Streamlit", "NLP", "Finance"],
              link: "https://github.com/ikeshav42/market-narrative-engine",
              demoLink: "https://market-narrative.streamlit.app/",
            },
          ].map((project) => (
            <div key={project.name} className="border-b pb-4 last:border-b-0">
              <h3 className="font-semibold text-lg">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-primary"
                >
                  {project.name}
                </a>
              </h3>
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
              {"demoLink" in project && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm text-primary hover:underline"
                >
                  Live Demo →
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Interests Section */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Star className="w-6 h-6" />
          <h2 className="text-2xl font-semibold">Interests</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            "Data Engineering",
            "ML Infrastructure",
            "Computer Vision",
            "AI Safety",
            "Open Source",
            "Cloud Computing",
            "Web Development",
            "Embedded Systems",
          ].map((interest) => (
            <span
              key={interest}
              className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm"
            >
              {interest}
            </span>
          ))}
        </div>
      </section>

    </div>
  );
};

export default PortfolioDetails;
