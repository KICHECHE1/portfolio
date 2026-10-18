import { ArrowUpRight, UsersRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { featuredWork } from "@/lib/home-data";
import { getProjectBySlug, type Project } from "@/lib/projects";

function FeaturedProject({ project, category }: { project: Project; category: string }) {
  return (
    <article aria-label={project.title} className="h-full">
      <a href={project.links.live} target="_blank" rel="noopener noreferrer"
        aria-label={`Visit ${project.title} website (opens in a new tab)`}
        className="group flex h-full flex-col rounded-2xl">
        <div className="relative aspect-[8/5] overflow-hidden rounded-2xl border border-border bg-secondary shadow-card transition-[border-color,box-shadow] duration-200 group-hover:border-primary/40 group-focus-visible:border-primary/50 dark:shadow-none">
          <Image src={project.cover.src} alt={project.cover.alt} fill
            sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1279px) 46vw, 596px"
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.025] group-focus-visible:scale-[1.025] motion-reduce:transform-none" />
          <span className="absolute bottom-3 right-3 grid size-10 place-items-center rounded-full border border-border bg-background/95 text-accent transition-colors group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground sm:bottom-4 sm:right-4"><ArrowUpRight size={19} aria-hidden="true" /></span>
        </div>
        <div className="flex grow flex-col px-0.5 pt-5 sm:pt-6">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
            <p className="font-mono text-[11px] leading-5 text-accent">{category}</p>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground"><UsersRound size={13} aria-hidden="true" />{project.projectType}</span>
          </div>
          <h3 className="text-xl font-semibold tracking-tight underline-offset-4 group-hover:underline sm:text-2xl">{project.title}</h3>
          <p className="mt-3 max-w-xl text-base leading-7 text-muted-foreground">{project.description}</p>
          <span className="mt-auto inline-flex min-h-11 w-fit items-center gap-2 pt-4 text-sm font-medium text-accent">Visit Website <ArrowUpRight size={15} aria-hidden="true" /></span>
        </div>
      </a>
    </article>
  );
}

export function HomeFeaturedWork() {
  const selectedProjects = featuredWork.flatMap(({ slug, category }) => {
    const project = getProjectBySlug(slug);
    return project ? [{ project, category }] : [];
  });

  return (
    <section id="selected-work" className="site-container scroll-mt-28 py-20 md:py-28" aria-labelledby="selected-work-title">
      <Reveal className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end md:mb-12">
        <div>
          <p className="section-label">03 / Real projects, shared effort</p>
          <h2 id="selected-work-title" className="section-title mt-4">Selected Work.</h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">A glimpse into the digital platforms and solutions I&apos;ve contributed to through collaborative development.</p>
        </div>
        <Button asChild variant="outline" className="w-fit shrink-0"><Link href="/work">View All Work <ArrowUpRight aria-hidden="true" /></Link></Button>
      </Reveal>
      <div className="grid gap-x-7 gap-y-12 md:grid-cols-2 md:gap-y-14">
        {selectedProjects.map(({ project, category }, index) => (
          <Reveal key={project.slug} delay={(index % 2) * 60} className="h-full"><FeaturedProject project={project} category={category} /></Reveal>
        ))}
      </div>
      <p className="mt-10 flex items-start gap-2.5 border-t border-border pt-6 text-sm leading-7 text-muted-foreground">
        <UsersRound size={16} className="mt-1.5 shrink-0 text-accent" aria-hidden="true" />
        Each platform was developed collaboratively within a company team. My involvement was as a contributor.
      </p>
    </section>
  );
}
