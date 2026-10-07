export type Dashboard = {
  title: string;
  date: string;
  question: string;
  description: string;
  tools: string[];
  image?: {
    src: string;
    alt: string;
    href?: string;
  };
  link?: string;
  tag?: string;
};

export const dashboards: Dashboard[] = [
  {
    title: "F1 Qualifying Dashboard",
    date: "2026-10",
    question: "How much does starting position decide an F1 result?",
    description:
      "Power BI dashboard on 209 F1 races (2017-2026), built on a star schema with relationships and DAX measures, including CALCULATE. Top-3 qualifiers reach the podium 67% of the time, from 50% at Interlagos to 83% at Shanghai. Race data from Jolpica-F1 and OpenF1. The data tables were prepared with Claude Code; layout, colors and text were done with help from Claude.",
    tools: ["Power BI", "DAX", "Star Schema", "Data Visualization"],
    image: {
      src: "/images/f1-qualifying-dashboard.webp",
      alt: "Power BI dashboard on how starting position decides F1 results: cards, circuit ranking, start vs finish charts, and model vs baseline by year",
      href: "https://raw.githubusercontent.com/ikeshav42/bi-dashboards/main/f1-qualifying/f1_qualifying_dashboard.png",
    },
    link: "https://github.com/ikeshav42/bi-dashboards/tree/main/f1-qualifying",
  },
];
