import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected frontend development and digital design projects by Juma Saidi.",
};

export default function WorkPage() {
  return (
    <main className="bg-paper text-ink">
      <PageHero
        eyebrow="Selected work"
        title={
          <>
            Practical solutions.
            <br />
            <span className="text-white/45">Thoughtful execution.</span>
          </>
        }
        description="A selection of web experiences covering interface design, frontend development, responsive implementation, and design systems."
        aside={
          <p className="mt-6 text-sm text-white/40">
            Selected projects · 2024—2026
          </p>
        }
      />

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl space-y-8">
          {projects.map((project, index) => (
            <Reveal key={project.number} delay={index * 70}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-black/10 bg-white px-5 py-20 md:px-8 md:py-24">
        <Reveal className="mx-auto max-w-7xl">
          <p className="section-label">My process</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["01", "Discover", "Understand the audience, business goal, constraints, and definition of success."],
              ["02", "Design", "Create the information structure, visual direction, and responsive interaction patterns."],
              ["03", "Develop", "Build, test, refine, and deliver a maintainable production-ready experience."],
            ].map(([number, title, copy]) => (
              <article key={title} className="rounded-xl border border-black/10 p-6">
                <span className="text-xs font-semibold text-accent">{number}</span>
                <h2 className="mt-5 text-xl font-semibold">{title}</h2>
                <p className="mt-3 leading-7 text-muted">{copy}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
