import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import HelloLanguages from "./hellolang";
import PortfolioDetails from "./pfdeets";
import { ModeToggle } from "./themetoggle";

export const Core = () => (
  <div className="w-full py-12 sm:py-20 lg:py-40">
    <div className="container mx-auto px-10">
      <div className="grid grid-cols-1 gap-12 items-start lg:grid-cols-2">
        <div className="flex gap-6 flex-col sticky lg:self-start lg:top-1/4">
          <HelloLanguages />

          <div className="flex gap-4 flex-col">
            <h1 className="text-4xl sm:text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              Keshav Sundararaman
            </h1>
            <p className="text-lg sm:text-2xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Computer Science and Engineering Undergrad
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="gap-4 w-full sm:w-auto" asChild>
              <Link
                href="https://www.linkedin.com/in/keshav-sundararaman-48890a37a/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Connect on LinkedIn <Linkedin className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" className="gap-4 w-full sm:w-auto" asChild>
              <Link
                href="https://github.com/ikeshav42"
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub Profile <Github className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          <ModeToggle></ModeToggle>
        </div>
        <PortfolioDetails />
      </div>
    </div>
  </div>
);
