"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { FolderOpen, RotateCcw } from "lucide-react";
import { useState } from "react";
import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import { projectCategories, type Project, type ProjectFilter } from "@/lib/projects";
import { cn } from "@/lib/utils";

const filters: readonly ProjectFilter[] = ["All", ...projectCategories];

export function ProjectGrid({ projects }: { projects: readonly Project[] }) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const reduceMotion = useReducedMotion();
  const visibleProjects = projects.filter((project) => activeFilter === "All" || project.filterCategory === activeFilter);

  return (
    <div>
      <div className="mb-7 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {filters.map((filter) => {
          const count = projects.filter((project) => filter === "All" || project.filterCategory === filter).length;
          return (
            <Button key={filter} type="button" variant="ghost" aria-pressed={activeFilter === filter} aria-controls="project-grid"
              onClick={() => setActiveFilter(filter)}
              className={cn("gap-2.5 border border-transparent px-3.5 sm:px-4", activeFilter === filter ? "border-primary/25 bg-primary/10 text-accent hover:bg-primary/15 hover:text-accent" : "hover:border-border")}>
              {filter}<span className="font-mono text-[11px] opacity-80">{count.toString().padStart(2, "0")}</span>
            </Button>
          );
        })}
      </div>
      <p role="status" className="mb-6 font-mono text-xs text-muted-foreground">
        {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}{activeFilter !== "All" ? ` in ${activeFilter}` : " in the collection"}
      </p>
      <motion.ul layout={!reduceMotion} id="project-grid" aria-label="Projects" className="relative grid list-none gap-6 md:grid-cols-2">
        <AnimatePresence initial={false} mode="popLayout">
          {visibleProjects.map((project) => (
            <motion.li key={project.slug} layout={!reduceMotion}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 8 }}
              transition={{ duration: reduceMotion ? 0 : 0.22, ease: "easeOut" }} className="min-w-0">
              <ProjectCard project={project} preload={project.slug === projects[0]?.slug} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
      {visibleProjects.length === 0 && (
        <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-secondary/40 px-6 py-12 text-center">
          <span className="icon-tile mb-5"><FolderOpen size={22} aria-hidden="true" /></span>
          <h3 className="text-xl font-semibold tracking-tight">No projects here yet.</h3>
          <p className="mt-3 max-w-md text-base leading-7 text-muted-foreground">There are no projects in this category yet. Explore the other projects in the meantime.</p>
          <Button type="button" variant="outline" className="mt-6" onClick={() => setActiveFilter("All")}><RotateCcw aria-hidden="true" />View all projects</Button>
        </div>
      )}
    </div>
  );
}
