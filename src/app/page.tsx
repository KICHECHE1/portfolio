import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Layout,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/portfolio-data";

const services = [
  {
    icon: Layout,
    title: "Product & UI Design",
    description:
      "Clear user journeys, thoughtful visual systems, and interfaces aligned with real business goals.",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Responsive, maintainable applications built with Next.js, React, TypeScript, and modern CSS.",
  },
  {
    icon: ShieldCheck,
    title: "Quality & Accessibility",
    description:
      "Careful implementation with performance, accessibility, consistency, and long-term usability in mind.",
  },
];

export default function HomePage() {
  return (
    <main className="bg-paper text-ink">
      <section className="relative overflow-hidden border-b border-black/10 bg-white px-5 pb-20 pt-32 md:px-8 md:pb-28 md:pt-40">
        <div className="professional-grid-light absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-medium text-muted shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-600" />
              Available for freelance and contract work
            </div>

            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-primary">
              Juma Saidi · Frontend Developer & UI Designer
            </p>
            <h1 className="max-w-3xl font-heading text-5xl font-semibold leading-[1.02] tracking-[-0.05em] sm:text-6xl md:text-7xl">
              Digital products designed for clarity and built for results.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
              I help businesses turn ideas into professional, responsive, and
              reliable web experiences—from early product thinking to polished
              frontend implementation.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-ink"
              >
                View selected work <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-primary bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors duration-200 hover:bg-primary hover:text-white"
              >
                Discuss a project
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-black/10 pt-6 text-sm text-muted">
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma"].map(
                (tool) => (
                  <span key={tool} className="font-medium">
                    {tool}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_25px_rgb(var(--color-ink)/0.15)]">
              <div className="flex h-12 items-center justify-between border-b border-black/10 bg-surface px-5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                </div>
                <span className="text-[11px] font-medium text-muted">
                  professional-web-experience
                </span>
              </div>
              <div className="p-5 sm:p-7">
                <div className="rounded-xl bg-primary p-7 text-white sm:p-9">
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-200">
                    Design + Development
                  </p>
                  <h2 className="mt-5 font-heading text-3xl font-semibold leading-tight sm:text-4xl">
                    One partner from concept to production.
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-6 text-white/70">
                    Fewer handoff gaps, more consistent decisions, and a final
                    product that matches the original intent.
                  </p>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-black/10 p-5">
                    <p className="text-xs text-muted">Core stack</p>
                    <p className="mt-2 font-semibold">Next.js + TypeScript</p>
                    <div className="mt-5 h-1.5 rounded-full bg-surface">
                      <div className="h-full w-4/5 rounded-full bg-primary" />
                    </div>
                  </div>
                  <div className="rounded-xl border border-black/10 p-5">
                    <p className="text-xs text-muted">Delivery standard</p>
                    <div className="mt-3 space-y-2">
                      {["Accessible", "Responsive", "Maintainable"].map((item) => (
                        <p key={item} className="flex items-center gap-2 text-xs font-medium">
                          <CheckCircle2 size={13} className="text-emerald-700" />
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-label">Selected work</p>
                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                  Projects and case studies
                </h2>
              </div>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                View all work
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.number} delay={index * 70}>
                <Link
                  href="/work"
                  className="group block h-full overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm transition-[border-color,box-shadow] duration-200 hover:border-primary/30 hover:shadow-card"
                >
                  <div className={`${project.visual} aspect-[4/3] p-5`}>
                    <div className="h-full overflow-hidden rounded-lg border border-black/10 bg-white shadow-md">
                      <div className="flex h-8 items-center gap-1.5 border-b border-black/10 bg-surface px-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-black/20" />
                        <span className="h-1.5 w-1.5 rounded-full bg-black/20" />
                        <span className="h-1.5 w-1.5 rounded-full bg-black/20" />
                      </div>
                      <div className="flex h-[calc(100%-2rem)] flex-col justify-between p-5">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                          {project.category}
                        </span>
                        <strong className="font-heading text-3xl leading-none tracking-tight">
                          {project.title}
                        </strong>
                        <span className="h-1.5 w-2/5 rounded-full bg-surface" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-semibold text-muted">
                          Project {project.number}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold">
                          {project.title}
                        </h3>
                      </div>
                      <ArrowUpRight
                        size={18}
                        className="text-muted transition-colors duration-200 group-hover:text-accent"
                      />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-muted">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-surface px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Design + Code", "A consistent vision from wireframe to production."],
                ["Responsive", "Carefully designed for mobile, tablet, and desktop."],
                ["Accessible", "Keyboard, focus, contrast, and semantic structure considered."],
                ["Maintainable", "Reusable components and organized implementation."],
              ].map(([title, description]) => (
                <article
                  key={title}
                  className="metric-card rounded-xl border border-black/10 bg-white p-6"
                >
                  <h3 className="font-semibold text-primary">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]">
              <div>
                <p className="section-label">How I help</p>
                <p className="mt-5 max-w-sm leading-7 text-muted">
                  One partner across design and development means fewer gaps
                  between the idea and the final product.
                </p>
              </div>
              <h2 className="max-w-4xl text-4xl font-semibold leading-[1.1] tracking-[-0.04em] md:text-6xl">
                Clear thinking, strong design, and dependable implementation.
              </h2>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {services.map(({ icon: Icon, title, description }, index) => (
              <Reveal key={title} delay={index * 70}>
                <article className="h-full rounded-xl border border-black/10 bg-white p-7 shadow-sm">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-accent-soft text-accent">
                    <Icon size={21} />
                  </span>
                  <h3 className="mt-8 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 leading-7 text-muted">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8 md:pb-28">
        <Reveal className="mx-auto max-w-7xl">
          <div className="grid gap-10 rounded-xl bg-primary p-8 text-white md:grid-cols-[1fr_auto] md:items-center md:p-12">
            <div>
              <p className="text-sm font-medium text-blue-200">
                Have a project in mind?
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                Let&apos;s create a clear plan and build it properly.
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-ink"
            >
              Contact me <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
