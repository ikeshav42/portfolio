export type Education = {
  degree: string;
  institution: string;
  dates: string;
  /** Rendered as the green "GPA: x" badge (master's layout). */
  gpa?: string;
  focus?: string;
  /** Rendered as a plain "CGPA: x" line (bachelor's layout). */
  cgpa?: string;
  coursework?: string;
  certifications?: string;
  thesis?: string;
};

export const education: Education[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University of Texas at Arlington",
    dates: "Aug 2025 – May 2027*",
    gpa: "4.0",
    focus: "Data Engineering, Machine Learning",
    coursework:
      "Data Engineering for Business Applications, Database Systems, Machine Learning, Pattern Recognition",
    certifications: "Stanford ML Specialization (Coursera)",
  },
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "Amrita Vishwa Vidyapeetham",
    dates: "Oct 2020 – Jun 2024",
    cgpa: "8.06 / 10",
    thesis: "Ensemble ML pipelines using Dynamic Structured Grammatical Evolution (DSGE)",
  },
];
