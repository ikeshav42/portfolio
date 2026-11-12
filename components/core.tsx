import type React from "react";
import Link from "next/link";
import { Newspaper, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/brand-icons";
import HelloLanguages from "./hellolang";
import PortfolioDetails from "./pfdeets";
import { ModeToggle } from "./themetoggle";
import { SectionNav } from "./section-nav";
export const Core = () => (
  <div className="w-full py-12 sm:py-20 lg:py-40">
    <div className="container mx-auto px-5 sm:px-10">
      <div className="grid grid-cols-1 gap-12 items-start lg:grid-cols-2">
        <div className="flex gap-6 flex-col lg:sticky lg:self-start lg:top-8">
          <div className="rise"><HelloLanguages /></div>
          <div className="rise flex gap-4 flex-col" style={{ "--i": 1 } as React.CSSProperties}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              Keshav Sundararaman
            </h1>
            <p className="text-lg sm:text-2xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              MS CS at UT Arlington · Data Engineering &amp; Analytics
            </p>
            <p className="text-base text-muted-foreground max-w-md text-left">
              Available from summer 2027 on F-1 OPT for internships and Full-Time roles.
              <a
                href="mailto:ikeshav42@gmail.com"
                className="block w-fit py-2 lg:mt-1 lg:py-0 font-medium text-foreground underline underline-offset-4 rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                ikeshav42@gmail.com
              </a>
            </p>
          </div>
          <div className="rise grid grid-cols-2 gap-4" style={{ "--i": 2 } as React.CSSProperties}>
            <Button size="lg" className="gap-2 w-full h-auto whitespace-normal text-center py-3 px-4" asChild>
              <Link
                href="https://www.linkedin.com/in/keshav-sundararaman-48890a37a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn <LinkedinIcon className="w-4 h-4 shrink-0" />
              </Link>
            </Button>
            <Button size="lg" className="gap-2 w-full h-auto whitespace-normal text-center py-3 px-4" asChild>
              <Link
                href="https://github.com/ikeshav42"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub Profile <GithubIcon className="w-4 h-4 shrink-0" />
              </Link>
            </Button>
            <Button size="lg" className="gap-2 w-full h-auto whitespace-normal text-center py-3 px-4" asChild>
              <Link
                href="https://medium.com/@ikeshav42"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read on Medium <Newspaper className="w-4 h-4 shrink-0" />
              </Link>
            </Button>
            <Button
              size="lg"
              className="gap-2 w-full h-auto whitespace-normal text-center py-3 px-4 shadow-[0_0_0_3px_rgba(99,102,241,0.5),0_0_25px_8px_rgba(99,102,241,0.55)] hover:shadow-[0_0_0_3px_rgba(99,102,241,0.6),0_0_30px_10px_rgba(99,102,241,0.7)] dark:shadow-[0_0_0_3px_rgba(59,130,246,0.5),0_0_25px_8px_rgba(59,130,246,0.55)] dark:hover:shadow-[0_0_0_3px_rgba(59,130,246,0.6),0_0_30px_10px_rgba(59,130,246,0.7)] transition-shadow"
              asChild
            >
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                View Resume <FileText className="w-4 h-4 shrink-0" />
              </Link>
            </Button>
          </div>
          <SectionNav />
          <ModeToggle></ModeToggle>
        </div>
        <SectionNav variant="bar" />
        <PortfolioDetails />
      </div>
    </div>
  </div>
);
