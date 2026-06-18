import type { Metadata } from "next";
import { Check, Code2, Layers3, Palette, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { capabilities, toolset } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Juma Saidi's frontend development, UI design, and technical capabilities.",
};

const icons = [Palette, Code2, Layers3, Sparkles];

export default function SkillsPage() {
  return (
    <main className="bg-paper text-ink">
      <PageHero
        eyebrow="Skills & capabilities"
        title={
          <>
            Design sensitivity.
            <br />
            <span className="text-white/45">Engineering discipline.</span>
          </>
        }
        description="I combine interface design and frontend development to reduce handoff gaps and create more consistent digital products."
      />

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2">
            {capabilities.map(([number, title, description], index) => {
              const Icon = icons[index];
              return (
                <Reveal key={title} delay={index * 70}>
                  <article className="h-full rounded-2xl border border-black/10 bg-white p-8 shadow-sm md:p-10">
                    <div className="flex items-start justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent-soft text-accent">
                        <Icon size={21} />
                      </span>
                      <span className="text-xs font-semibold text-subtle">{number}</span>
                    </div>
                    <h2 className="mt-12 text-2xl font-semibold tracking-tight">
                      {title}
                    </h2>
                    <p className="mt-4 max-w-md leading-7 text-muted">
                      {description}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-white px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <Reveal>
            <div>
              <p className="section-label">Tools & technologies</p>
              <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
                A focused toolkit for dependable web products.
              </h2>
              <p className="mt-5 max-w-md leading-7 text-muted">
                I choose tools based on the product’s needs, not novelty. The
                goal is always a maintainable and effective result.
              </p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="grid gap-3 sm:grid-cols-2">
              {toolset.map((tool) => (
                <div
                  key={tool}
                  className="flex items-center gap-3 rounded-lg border border-black/10 bg-paper px-5 py-4"
                >
                  <Check size={16} className="text-accent" />
                  <span className="font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
