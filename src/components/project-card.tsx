import { ArrowUpRight } from "lucide-react";

export type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  visual: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition-[border-color,box-shadow] duration-200 hover:border-primary/30 hover:shadow-card">
      <div className={`${project.visual} relative aspect-[16/10] overflow-hidden p-5 sm:p-8`}>
        <div className="project-screen mx-auto h-full max-w-3xl overflow-hidden rounded-lg border border-black/10 bg-white shadow-xl">
          <div className="flex h-9 items-center gap-1.5 border-b border-black/10 bg-surface px-4">
            <span className="h-2 w-2 rounded-full bg-black/20" />
            <span className="h-2 w-2 rounded-full bg-black/20" />
            <span className="h-2 w-2 rounded-full bg-black/20" />
          </div>
          <div className="professional-mockup">
            <div>
              <span className="mockup-kicker">{project.category}</span>
              <strong>{project.title}</strong>
              <p>Thoughtful digital experiences, designed for clarity.</p>
            </div>
            <span className="mockup-button">Explore</span>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              {project.number} · {project.category}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              {project.title}
            </h2>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-black/10 text-ink transition-colors duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
            <ArrowUpRight size={17} />
          </span>
        </div>
        <p className="mt-4 max-w-2xl leading-7 text-muted">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-surface px-3 py-1.5 text-xs font-medium text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
