import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, UsersRound } from "lucide-react";
import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { getNextProject, getProjectBySlug, projects, type ProjectImage } from "@/lib/projects";

type PageProps = { params: Promise<{ slug: string }> };
type CaseSection = { id: string; title: string; content: ReactNode };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };

  const description = `${project.description} A collaborative company project I contributed to as part of a development team.`;
  return {
    title: `${project.title} — Team Project`,
    description,
    openGraph: { title: `${project.title} — Team Project | Juma Saidi`, description, type: "article" },
  };
}

function Preview({ image, preload = false }: { image: ProjectImage; preload?: boolean }) {
  return (
    <figure>
      <div className="overflow-hidden rounded-2xl border border-border bg-secondary shadow-card">
        <Image src={image.src} alt={image.alt} width={image.width} height={image.height} preload={preload}
          sizes="(max-width: 767px) calc(100vw - 40px), (max-width: 1279px) calc(100vw - 64px), 1216px"
          className="h-auto w-full" />
      </div>
      <figcaption className="mt-3 text-sm leading-6 text-muted-foreground">{image.caption}</figcaption>
    </figure>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return <ul className="list-disc space-y-2 pl-5">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const nextProject = getNextProject(slug);
  const study = project.caseStudy;
  const sections: CaseSection[] = [
    { id: "overview", title: "Project overview", content: <p>{study?.overview || project.description}</p> },
    {
      id: "collaboration",
      title: "A collaborative company project",
      content: <p>I had the opportunity to contribute to this platform as part of a development team within a company. This work represents a shared team effort.</p>,
    },
  ];

  // Only verified details are published. Unfilled contribution and case-note fields
  // stay out of the page and its contents navigation.
  if (project.contributions?.length) sections.push({
    id: "contributions", title: "My Contributions", content: <BulletList items={project.contributions} />,
  });
  if (study?.problem || study?.objectives?.length) sections.push({
    id: "problem", title: "Problem & objectives",
    content: <div className="space-y-5">{study.problem && <p>{study.problem}</p>}{Boolean(study.objectives?.length) && <BulletList items={study.objectives!} />}</div>,
  });
  if (study?.role || study?.responsibilities?.length) sections.push({
    id: "role", title: "My role & responsibilities",
    content: <div className="space-y-5">{study.role && <p>{study.role}</p>}{Boolean(study.responsibilities?.length) && <BulletList items={study.responsibilities!} />}</div>,
  });
  if (project.technologies?.length) sections.push({
    id: "technologies", title: "Technologies used",
    content: <ul className="flex flex-wrap gap-2">{project.technologies.map((technology) => <li key={technology} className="tech-label">{technology}</li>)}</ul>,
  });
  if (study?.features?.length) sections.push({
    id: "features", title: "Key features",
    content: <ul className="grid gap-5">{study.features.map((feature) => <li key={feature.title}><h3 className="text-xl font-semibold text-foreground">{feature.title}</h3><p className="mt-2">{feature.description}</p></li>)}</ul>,
  });
  if (study?.process?.length) sections.push({
    id: "process", title: "Development process",
    content: <ol className="grid gap-6">{study.process.map((step, index) => <li key={step.title} className="border-l-2 border-primary/30 pl-5"><p className="mb-2 font-mono text-xs text-accent">STEP {(index + 1).toString().padStart(2, "0")}</p><h3 className="text-xl font-semibold text-foreground">{step.title}</h3><p className="mt-2">{step.description}</p></li>)}</ol>,
  });
  if (study?.challenges?.length) sections.push({
    id: "challenges", title: "Challenges & solutions",
    content: <div className="grid gap-6">{study.challenges.map((item) => <div key={item.challenge}><h3 className="text-xl font-semibold text-foreground">{item.challenge}</h3><p className="mt-2">{item.solution}</p></div>)}</div>,
  });
  if (study?.gallery?.length) sections.push({
    id: "previews", title: "Screenshots & previews",
    content: <div className="grid gap-8">{study.gallery.map((image) => <Preview key={image.src} image={image} />)}</div>,
  });
  if (study?.outcomes?.length) sections.push({
    id: "outcomes", title: "Results & outcomes", content: <BulletList items={study.outcomes} />,
  });

  return (
    <main id="main-content">
      <div className="hero-wash border-b border-border pb-12 pt-28 md:pb-16 md:pt-32">
        <div className="site-container">
          <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-3 text-sm text-muted-foreground md:mb-14">
            <Link href="/work" className="inline-flex min-h-11 items-center gap-2 rounded-md transition-colors hover:text-accent"><ArrowLeft size={16} aria-hidden="true" />All work</Link>
            <span aria-hidden="true">/</span><span aria-current="page" className="text-foreground">{project.title}</span>
          </nav>
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <p className="section-label">{project.category}</p>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground"><UsersRound size={13} aria-hidden="true" />{project.projectType}</span>
            </div>
            <h1 className="hero-title mt-5">{project.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">{project.subtitle}</p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">{project.description}</p>
            <Button asChild variant="outline" className="mt-8 border-primary/25 text-accent">
              <a href={project.links.live} target="_blank" rel="noopener noreferrer">Visit Website <ArrowUpRight aria-hidden="true" /><span className="sr-only"> (opens in a new tab)</span></a>
            </Button>
          </Reveal>
        </div>
      </div>

      <div className="site-container py-10 md:py-14">
        <Reveal><Preview image={project.cover} preload /></Reveal>
        <div className="mt-12 grid gap-10 md:mt-16 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16 xl:gap-24">
          <aside className="min-w-0">
            <div className="top-28 lg:sticky">
              <details className="rounded-xl border border-border bg-secondary/50 p-5 lg:hidden">
                <summary className="min-h-6 text-sm font-medium text-foreground">On this page</summary>
                <nav aria-label="Project contents" className="mt-3 grid">
                  {sections.map(({ id, title }) => <a key={id} href={`#${id}`} className="rounded-md py-2 text-sm text-muted-foreground hover:text-accent">{title}</a>)}
                </nav>
              </details>
              <nav aria-label="Project contents" className="hidden lg:block">
                <p className="section-label mb-5">In this project</p>
                <ol className="grid gap-1 border-l border-border">
                  {sections.map(({ id, title }, index) => (
                    <li key={id}><a href={`#${id}`} className="-ml-px flex min-h-11 items-center gap-3 border-l border-transparent py-2 pl-4 text-xs leading-5 text-muted-foreground transition-colors hover:border-primary hover:text-accent">
                      <span className="font-mono text-[10px]">{(index + 1).toString().padStart(2, "0")}</span>{title}
                    </a></li>
                  ))}
                </ol>
              </nav>
              {project.links.github && <Button asChild variant="outline" className="mt-6"><a href={project.links.github} target="_blank" rel="noopener noreferrer"><Github aria-hidden="true" />Source code<span className="sr-only"> (opens in a new tab)</span></a></Button>}
            </div>
          </aside>
          <div className="min-w-0">
            {sections.map(({ id, title, content }, index) => (
              <section key={id} id={id} aria-labelledby={`${id}-title`} className="scroll-mt-28 border-b border-border py-9 first:pt-0 last:border-b-0 md:py-12">
                <div className="mb-5 flex items-start gap-4">
                  <span className="mt-2 font-mono text-xs text-accent" aria-hidden="true">{(index + 1).toString().padStart(2, "0")}</span>
                  <h2 id={`${id}-title`} className="text-[28px] font-semibold tracking-tight md:text-4xl">{title}</h2>
                </div>
                <div className="text-base leading-8 text-muted-foreground">{content}</div>
              </section>
            ))}
          </div>
        </div>
      </div>

      <section className="border-t border-border bg-secondary/40 py-12 md:py-16" aria-labelledby="next-project-title">
        <div className="site-container">
          {nextProject ? (
            <Link href={`/work/${nextProject.slug}`} className="group grid items-center gap-6 rounded-2xl border border-border bg-card p-6 shadow-card transition-colors hover:border-primary/40 sm:grid-cols-[1fr_auto] sm:p-10">
              <div><p className="section-label">Keep exploring</p><h2 id="next-project-title" className="section-title mt-4">{nextProject.title}</h2><p className="mt-3 text-sm text-muted-foreground">{nextProject.category} · {nextProject.projectType}</p></div>
              <span className="flex items-center gap-3 text-sm font-medium text-accent">Next project <span className="grid size-12 place-items-center rounded-full border border-border transition-colors group-hover:border-primary/40 group-hover:bg-primary/10"><ArrowRight size={20} aria-hidden="true" /></span></span>
            </Link>
          ) : (
            <div><h2 id="next-project-title" className="section-title mb-6">Explore the collection.</h2><Button asChild variant="outline"><Link href="/work"><ArrowLeft aria-hidden="true" />Back to all work</Link></Button></div>
          )}
        </div>
      </section>
      <div className="site-container flex flex-col justify-between gap-4 py-10 sm:flex-row sm:items-center">
        <p className="text-base text-muted-foreground">Have something in mind? Let&apos;s make it happen.</p>
        <Button asChild variant="outline" className="w-fit"><Link href="/contact">Get in touch <ArrowUpRight aria-hidden="true" /></Link></Button>
      </div>
    </main>
  );
}
