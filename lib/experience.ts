export type Experience = {
  role: string;
  organization: string;
  dates: string;
  description: string;
  technologies: string[];
  /** Renders as the highlighted card instead of a bordered row. */
  featured?: boolean;
};

export const experience: Experience[] = [
  {
    role: "Graduate Research Assistant",
    organization: "UT Arlington Research Institute (UTARI)",
    dates: "Jan 2026 – May 2026",
    description:
      "Computer vision research on 3D spatial mapping from RGB and depth sensor streams. Profiled each stage of the vision pipeline and moved object detection from GroundingDINO to YOLO-World, raising frame throughput from under 10 fps to 25 fps (+150%). Built an asynchronous pipeline to synchronize multi-modal RGB and depth streams from ROS bag files, plus modular CLI tools exporting structured JSON summaries, 2D floor plans, and ROS2 Nav2 maps.",
    technologies: ["Computer Vision", "Object Detection", "Python", "ROS", "Performance Profiling"],
    featured: true,
  },
  {
    role: "Research Assistant",
    organization: "Amrita Vishwa Vidyapeetham × Sony India",
    dates: "May 2023 – Dec 2023",
    description:
      "Built automated network scripts to continuously ingest raw IoT sensor readings into structured tabular datasets. Cleaned and validated multi-sensor experimental logs in Pandas to eliminate sensor noise, drift, and missing entries. Analyzed food drying behavior across sensor runs and presented analytical findings and Matplotlib charts directly to Sony representatives and project leads.",
    technologies: ["Python", "Pandas", "Matplotlib", "IoT Ingestion", "EDA"],
  },
];
