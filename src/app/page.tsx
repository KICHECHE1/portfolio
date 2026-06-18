import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Layout,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/portfolio-data";

const services = [
  {
    icon: Layout,
    title: "Product & UI Design",
    description:
      "Clear user journeys, thoughtful visual systems, and interfaces that support real business goals.",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Responsive, maintainable applications built with React, Next.js, TypeScript, and modern CSS.",
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
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Available for freelance and contract work
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-ink sm:text-6xl md:text-7xl">
              I design and build digital products that work.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">
              I&apos;m Juma Saidi, a frontend developer and UI designer helping
              businesses turn ideas into clear, responsive, and reliable web
              experiences.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-ink"
              >
                View my work <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-black/15 bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-surface"
              >
                Discuss a project
              </Link>
            </div>

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-black/10 pt-7">
              {[
                ["Frontend", "Development"],
                ["UI/UX", "Design"],
                ["Remote", "Worldwide"],
              ].map(([value, label]) => (
                <div key={value}>
                  <p className="text-sm font-semibold text-ink">{value}</p>
                  <p className="mt-1 text-xs text-muted">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_24px_80px_rgb(var(--color-ink)/0.14)]">
              <div className="flex h-12 items-center justify-between border-b border-black/10 bg-surface px-5">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                  <span className="h-2.5 w-2.5 rounded-full bg-black/15" />
                </div>
                <span className="text-[11px] font-medium text-muted">
                  portfolio-preview.dev
                </span>
              </div>
              <div className="p-5 sm:p-7">
                <div className="rounded-xl bg-ink p-7 text-white sm:p-9">
                  <p className="text-xs font-medium uppercase tracking-widest text-blue-300">
                    Digital product partner
                  </p>
                  <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                    From early idea to polished interface.
                  </h2>
                  <div className="mt-8 flex items-center gap-3">
                    <span className="rounded-md bg-white px-3 py-2 text-xs font-semibold text-ink">
                      Explore work
                    </span>
                    <span className="text-xs text-white/55">Built with care</span>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-xl border border-black/10 p-5">
                    <p className="text-xs text-muted">Core stack</p>
                    <p className="mt-2 font-semibold">Next.js + TypeScript</p>
                    <div className="mt-5 h-1.5 rounded-full bg-surface">
                      <div className="h-full w-4/5 rounded-full bg-accent" />
                    </div>
                  </div>
                  <div className="rounded-xl border border-black/10 p-5">
                    <p className="text-xs text-muted">Approach</p>
                    <div className="mt-3 space-y-2">
                      {["Accessible", "Responsive", "Maintainable"].map((item) => (
                        <p key={item} className="flex items-center gap-2 text-xs font-medium">
                          <CheckCircle2 size={13} className="text-emerald-600" />
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

      <section className="border-b border-black/10 bg-surface px-5 py-6 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">
            Technologies I work with
          </p>
          <div className="flex flex-wrap gap-x-7 gap-y-2 text-sm font-semibold text-ink/70">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "Figma"].map(
              (tool) => <span key={tool}>{tool}</span>,
            )}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-32">
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
              <Reveal key={title} delay={index * 80}>
                <article className="h-full rounded-2xl border border-black/10 bg-white p-7 shadow-sm">
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

      <section className="border-y border-black/10 bg-white px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-label">Selected work</p>
                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
                  Recent projects
                </h2>
              </div>
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-accent"
              >
                See all projects
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
          <Reveal>
            <ProjectCard project={projects[0]} />
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-28">
        <Reveal className="mx-auto max-w-7xl">
          <div className="grid gap-10 rounded-2xl bg-ink p-8 text-white md:grid-cols-[1fr_auto] md:items-center md:p-12">
            <div>
              <p className="text-sm font-medium text-blue-300">
                Have a project in mind?
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
                Let&apos;s create a clear plan and build it properly.
              </h2>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-ink hover:bg-blue-50"
            >
              Contact me <ArrowUpRight size={16} />
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
