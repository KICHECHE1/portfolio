import type { Metadata } from "next";
import { ArrowDown, ArrowUpRight, UsersRound } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";
import { ProjectGrid } from "./project-grid";

const description = "A selection of digital platforms and solutions I've had the opportunity to contribute to as part of collaborative development teams, turning ideas into functional, user-focused digital experiences.";

export const metadata: Metadata = {
  title: "Selected Work",
  description,
  openGraph: {
    title: "Selected Work — Juma Saidi",
    description,
    type: "website",
  },
};

export default function WorkPage() {
  return (
    <main id="main-content">
      <section className="hero-wash relative overflow-hidden border-b border-border pb-14 pt-36 md:pb-20 md:pt-44" aria-labelledby="work-title">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" />
        <div className="site-container relative">
          <Reveal>
            <p className="section-label mb-6 flex items-center gap-3"><span className="h-px w-7 bg-accent" aria-hidden="true" />Company team projects</p>
            <h1 id="work-title" className="hero-title">Selected <span className="text-primary">Work</span></h1>
            <div className="mt-7 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <p className="max-w-3xl text-base leading-8 text-muted-foreground md:text-lg">{description}</p>
              <Button asChild variant="outline" className="w-fit shrink-0"><a href="#all-projects">Explore projects <ArrowDown aria-hidden="true" /></a></Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="all-projects" className="site-container scroll-mt-28 py-16 md:py-24" aria-labelledby="all-projects-title">
        <Reveal className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end md:mb-10">
          <div><p className="section-label">01 / Collaborative work</p><h2 id="all-projects-title" className="section-title mt-3">Built together<span className="ml-3 align-top font-mono text-sm font-normal tracking-normal text-muted-foreground">({projects.length.toString().padStart(2, "0")})</span></h2></div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground">Real-world platforms. Shared effort.<br />Presented from my perspective as a team contributor.</p>
        </Reveal>
        <ProjectGrid projects={projects} />
        <p className="mt-8 flex items-start gap-2.5 border-t border-border pt-6 text-sm leading-7 text-muted-foreground">
          <UsersRound size={16} className="mt-1.5 shrink-0 text-accent" aria-hidden="true" />
          These projects were developed collaboratively within company teams.
        </p>
      </section>

      <section className="site-container pb-16 md:pb-24" aria-labelledby="work-contact-title">
        <Reveal className="hero-wash relative overflow-hidden rounded-2xl border border-primary/20 p-7 shadow-card sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full border border-primary/10" aria-hidden="true"><div className="absolute inset-8 rounded-full border border-primary/10" /><div className="absolute inset-16 rounded-full border border-primary/10" /></div>
          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div><p className="section-label">Your idea, next.</p><h2 id="work-contact-title" className="section-title mt-4">Have something in mind?</h2><p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">Let&apos;s turn your ideas into meaningful digital experiences.</p></div>
            <Button asChild size="lg" className="w-fit shrink-0"><Link href="/contact">Let&apos;s talk <ArrowUpRight aria-hidden="true" /></Link></Button>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
