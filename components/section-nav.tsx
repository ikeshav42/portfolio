"use client";

import { useEffect, useRef, useState } from "react";

const items = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "dashboards", label: "Dashboards" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
];

export function SectionNav({ variant = "list" }: { variant?: "list" | "bar" }) {
  const [active, setActive] = useState(items[0].id);
  const locked = useRef(false);
  const unlockTimer = useRef<number | undefined>(undefined);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        if (locked.current) return;
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => {
      observer.disconnect();
      window.clearTimeout(unlockTimer.current);
    };
  }, []);

  const barRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    const link = bar?.querySelector<HTMLElement>('[aria-current="location"]');
    if (!bar || !link) return;
    bar.scrollTo({ left: link.offsetLeft - bar.clientWidth / 2 + link.offsetWidth / 2 });
  }, [active]);

  const handleClick =(e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    locked.current = true;
    window.clearTimeout(unlockTimer.current);
    unlockTimer.current = window.setTimeout(() => {
      locked.current = false;
    }, 900);
    setActive(id);
    target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", `#${id}`);
    target.focus({ preventScroll: true });
  };

  if (variant === "bar") {
    return (
      <nav
        ref={barRef}
        aria-label="Page sections"
        className="sticky top-0 z-10 -mx-5 -my-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden border-b bg-background/90 px-5 backdrop-blur sm:-mx-10 sm:px-10 lg:hidden"
      >
        <ul className="flex gap-1">
          {items.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => handleClick(e, id)}
                  aria-current={isActive ? "location" : undefined}
                  className={`flex h-11 items-center whitespace-nowrap border-b-2 px-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${
                    isActive
                      ? "border-foreground font-medium text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }

  return (
    <nav aria-label="Page sections" className="hidden lg:block">
      <ul className="space-y-0.5">
        {items.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => handleClick(e, id)}
                aria-current={isActive ? "location" : undefined}
                className={`block border-l-2 py-1 pl-3 text-sm transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ${
                  isActive
                    ? "border-foreground font-medium text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
