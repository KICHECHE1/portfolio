import { ArrowRight, ArrowUpRight, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  preload?: boolean;
}

export function ProjectCard({ project, preload = false }: ProjectCardProps) {
  const hostname = new URL(project.links.live).hostname;
  const hasContributions = Boolean(project.contributions?.length);

  return (
    <article className="h-full" aria-label={project.title}>
      <Card className="interactive-card group flex h-full flex-col overflow-hidden focus-within:border-primary/50 focus-within:shadow-glow">
        <div className="flex items-center gap-3 border-b border-border bg-secondary/65 px-5 py-3">
          <div className="flex shrink-0 gap-1.5" aria-hidden="true">
            <span className="size-1.5 rounded-full bg-muted-foreground/40" />
            <span className="size-1.5 rounded-full bg-muted-foreground/30" />
            <span className="size-1.5 rounded-full bg-primary/60" />
          </div>
          <span className="min-w-0 truncate font-mono text-[11px] text-muted-foreground">{hostname}</span>
        </div>
        <div className="relative aspect-[8/5] overflow-hidden border-b border-border bg-secondary">
          <Image src={project.cover.src} alt={project.cover.alt} fill preload={preload}
            sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1279px) 46vw, 596px"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.025] group-focus-within:scale-[1.025] motion-reduce:transform-none" />
          {project.cover.isPlaceholder && <span className="absolute bottom-3 left-3 rounded-md border border-border bg-background/95 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">Preview placeholder</span>}
        </div>
        <div className="flex grow flex-col p-6 sm:p-8">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <p className="font-mono text-[11px] leading-5 text-accent">{project.category}</p>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/65 px-2.5 py-1 text-xs text-muted-foreground">
              <UsersRound size={12} aria-hidden="true" />{project.projectType}
            </span>
          </div>
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{project.title}</h3>
          <p className="mt-1.5 text-sm text-muted-foreground">{project.subtitle}</p>
          <p className="mt-4 text-base leading-7 text-muted-foreground">{project.description}</p>
          {hasContributions && (
            <details className="mt-5 rounded-xl border border-border bg-secondary/40 px-4">
              <summary className="flex min-h-11 items-center text-sm font-medium text-foreground">My Contributions<span className="ml-auto text-accent" aria-hidden="true">+</span></summary>
              <ul className="list-disc space-y-2 pb-4 pl-5 text-sm leading-7 text-muted-foreground">{project.contributions?.map((contribution) => <li key={contribution}>{contribution}</li>)}</ul>
            </details>
          )}
          <div className="mt-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-3 pt-7">
            <Button asChild variant="outline" className="border-primary/25 bg-primary/5 text-accent hover:border-primary/50 hover:bg-primary/10">
              <a href={project.links.live} target="_blank" rel="noopener noreferrer">Visit Website<ArrowUpRight aria-hidden="true" /><span className="sr-only"> — {project.title} (opens in a new tab)</span></a>
            </Button>
            <Link href={`/work/${project.slug}`} className="inline-flex min-h-11 items-center gap-2 rounded-md text-sm text-muted-foreground transition-colors hover:text-accent">
              Project overview<span className="sr-only"> for {project.title}</span><ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Card>
    </article>
  );
}
