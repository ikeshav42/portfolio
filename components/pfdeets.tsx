import React from "react";
import { GraduationCap, Code, Briefcase, Star } from "lucide-react";

const PortfolioDetails = () => {
  return (
    <div className="h-full overflow-y-auto pr-4 space-y-6">
      {/* About Me Section */}
      <section>
        <p className="mt-10 text-lg text-muted-foreground">
          Hi, I’m Keshav, a Computer Science graduate student at the University of Texas at Arlington (Fall 2025). I’m passionate about technology, innovation and continuous learning. My interests span data engineering, software development, cloud computing and AI research. I thrive in collaborative environments, enjoy solving complex problems and love developing projects that have a real-world impact. I’m excited to contribute to research initiatives, build scalable software solutions and continuously expand my technical and analytical skills.
        </p>
      </section>

      {/* Education Section */}
      <section>
        <div className="flex items-stretch gap-2 mb-4">
          <GraduationCap className="w-6 h-6" />
          <h2 className="text-2xl font-semibold">Education</h2>
        </div>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg">
              Master of Science in Computer Science
            </h3>
            <p className="text-muted-foreground">
              University of Texas at Arlington | Aug 2025 - May 2027 (Expected)
            </p>
            <p className="mt-2">
              Focus: Data Engineering, Algorithms and Machine Learning
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
              Amrita Vishwa Vidyapeetham | 2020 - 2024
            </p>
            <p className="mt-2">
              Relevant Coursework: Data Structures, Algorithms, Machine Learning, Database Management Systems, Computer Networks, Software Development and Cloud Computing
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
        <div className="flex flex-wrap gap-2 pb-2">
          {[
            "Python",
            "JavaScript",
            "Java",
            "React",
            "Next.js",
            "TypeScript",
            "Node.js",
            "SQL",
            "MongoDB",
            "HTML/CSS",
            "Tailwind CSS",
            "Git",
            "Docker",
            "Fundamental AWS and GCP",
            "Machine Learning",
          ].map((skill) => (
            <span
              key={skill}
              className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="w-6 h-6" />
          <h2 className="text-2xl font-semibold">Experience</h2>
        </div>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="font-semibold text-lg">Research Assistant</h3>
            <p className="text-muted-foreground">Amrita Vishwa Vidyapeetham with Sony India | May 2023 – Dec 2023</p>
            <p className="mt-2 text-muted-foreground">
              Worked on research-driven development involving real-time image processing, segmentation, and embedded C workflows. Built and optimized Python-based data pipelines for continuous network-stream data used in early ML experiments. Supported experimentation, reproducibility workflows, and internal presentations summarizing insights and technical findings.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {["Python", "Embedded C", "Image Processing", "Data Pipelines", "Segmentation"].map((tech) => (
                <span
                  key={tech}
                  className="bg-secondary text-secondary-foreground rounded-full px-2 py-1 text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="w-6 h-6" />
          <h2 className="text-2xl font-semibold">Projects</h2>
        </div>
        <div className="space-y-4">
          {[
            {
              name: "Ensemble Dynamic Structured Grammatical Evolution",
              description:
                "Constructed ensemble ML models using Grammatical Evolution and designed a grammar to generate ensemble components. Structured these models into a meta-model that evolves through each generation, outperforming standard solutions.",
              technologies: ["Python", "SkLearn", "Numpy", "Pandas","Grammar parsing"],
              link: "https://github.com/ikeshav42/DSGE",
            },
            {
              name: "Point, Shoot and Resolve",
              description:
                "Developed an app to register complaints for real-world issues like electrical and plumbing. Designed screen mockups in Figma and implemented them using Flutter. Integrated Firebase Auth and Firestore for user authentication and data storage.",
              technologies: [
                "Flutter",
                "Firebase Auth",
                "Firestore",
                "Firebase DB",
              ],
              link: "https://github.com/ikeshav42/PSR",
            },
            {
              name: "Amrita Guest Lecture Management System",
              description:
                "Led UX development and testing. Created UI mockups with Figma and wrote unit tests using Jest. Identified and fixed major bugs, improving performance by 20% (verified with Lighthouse).",
              technologies: [
                "JavaScript",
                "ReactJS",
                "NodeJS",
                "Jest",
                "Figma",
              ],
              link: "https://github.com/ikeshav42/GLMS",
            },
            {
              name: "Sony Research Assistant – Image Processing & Data Pipelines",
              description:
                "Contributed to research-focused development involving real-time image processing, segmentation, and embedded C workflows. Built and optimized Python data pipelines for handling continuous data streams and supported experimentation for early-stage prototype systems.",
              technologies: [
                "Python",
                "Embedded C",
                "Image Processing",
                "Data Pipelines",
                "Segmentation"
              ],
              link: ""
            }
          ].map((project) => (
            <div key={project.name} className="border-b pb-4 last:border-b-0">
              <h3 className="font-semibold text-lg">
                <a
                  href={project.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-primary"
                >
                  {project.name}
                </a>
              </h3>
              <p className="text-muted-foreground">{project.description}</p>
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
            "Machine Learning",
            "AI Safety",
            "Web Development",
            "Open Source",
            "Cloud Computing",
            "Software Development",
            "Mobile App Development",
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
