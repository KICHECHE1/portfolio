import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import {
  approachPrinciples, curiosityIntroduction, education, experienceAreas,
  experienceIntroduction, experienceProjectSlugs, journey, philosophyDescription, technicalInterests,
} from "@/lib/about-data";
import { getProjectBySlug } from "@/lib/projects";

function SectionHeading({ id, label, title }: { id: string; label: string; title: string }) {
  return (
    <div>
      <p className="section-label">{label}</p>
      <h2 id={id} className="section-title mt-4">{title}</h2>
    </div>
  );
}

export function JourneySection() {
  return (
    <section id="journey" className="site-container grid scroll-mt-28 gap-8 py-20 md:py-28 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24" aria-labelledby="journey-title">
      <Reveal className="max-w-sm">
        <SectionHeading id="journey-title" label="01 / My story" title="The Journey So Far." />
        <p className="mt-6 max-w-xs font-mono text-xs leading-7 text-muted-foreground">An interest in technology.<br />A growing sense of purpose.</p>
      </Reveal>
      <div className="max-w-[68ch] space-y-6">
        {journey.map((paragraph, index) => (
          <Reveal key={paragraph} delay={index === 0 ? 50 : 0}>
            <p className={index === 0 ? "text-lg leading-9 text-foreground" : "text-base leading-8 text-muted-foreground md:text-lg"}>{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function ApproachSection() {
  return (
    <section id="approach" className="scroll-mt-28 border-y border-border bg-secondary/40 py-20 md:py-24" aria-labelledby="approach-title">
      <div className="site-container">
        <Reveal className="max-w-2xl"><SectionHeading id="approach-title" label="02 / How I think & work" title="How I Approach My Work." /></Reveal>
        <ol className="mt-10 border-t border-border md:mt-12">
          {approachPrinciples.map((principle, index) => (
            <li key={principle.title} className="border-b border-border py-7 md:py-8">
              <Reveal className="grid grid-cols-[24px_minmax(0,1fr)] gap-x-4 gap-y-3 md:grid-cols-[40px_minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-x-8 lg:gap-x-12">
                <span className="mt-1.5 font-mono text-xs text-accent" aria-hidden="true">{(index + 1).toString().padStart(2, "0")}</span>
                <h3 className="text-xl font-semibold leading-7 tracking-tight md:text-2xl">{principle.title}</h3>
                <p className="col-start-2 max-w-xl text-base leading-8 text-muted-foreground md:col-start-auto">{principle.description}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  const teamProjects = experienceProjectSlugs.flatMap((slug) => {
    const project = getProjectBySlug(slug);
    return project ? [project] : [];
  });

  return (
    <section id="experience" className="site-container scroll-mt-28 py-20 md:py-28" aria-labelledby="experience-title">
      <div className="grid gap-9 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
        <Reveal>
          <SectionHeading id="experience-title" label="03 / Learning through real projects" title="Experience That Shapes My Work." />
          <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">{experienceIntroduction}</p>
          <Link href="/work" className="mt-5 inline-flex min-h-11 items-center gap-3 rounded-md text-sm font-medium text-accent underline-offset-4 transition-colors hover:underline">Explore My Work <ArrowRight size={16} aria-hidden="true" /></Link>
        </Reveal>
        <Reveal delay={60} className="self-center">
          <p className="mb-4 font-mono text-xs text-muted-foreground">AREAS OF EXPERIENCE</p>
          <ul className="list-disc space-y-3 pl-4 text-base leading-8 text-muted-foreground marker:text-primary">
            {experienceAreas.map((area) => <li key={area} className="pl-1">{area}</li>)}
          </ul>
        </Reveal>
      </div>
      <Reveal className="mt-10 border-t border-border pt-7 md:mt-14">
        <div className="grid gap-5 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <p className="max-w-sm text-sm leading-7 text-muted-foreground">Projects I&apos;ve contributed to as part of company development teams:</p>
          <ul className="grid gap-x-8 gap-y-1 sm:grid-cols-2" aria-label="Collaborative company projects">
            {teamProjects.map((project) => (
              <li key={project.slug}><Link href={`/work/${project.slug}`} className="group inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline">{project.title}<ArrowUpRight size={14} className="text-accent" aria-hidden="true" /></Link></li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

export function EducationSection() {
  return (
    <section className="border-y border-border bg-secondary/40 py-20 md:py-24" aria-labelledby="education-title">
      <div className="site-container grid gap-9 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
        <Reveal className="max-w-sm"><SectionHeading id="education-title" label="04 / Education & foundation" title="Where My Foundation Began." /></Reveal>
        <Reveal delay={60} className="relative max-w-2xl border-l border-border pl-6 md:pl-8">
          <span className="absolute -left-[5px] top-2 size-[9px] rounded-full border border-primary bg-background" aria-hidden="true" />
          <h3 className="max-w-xl text-xl font-semibold leading-8 tracking-tight md:text-2xl">{education.qualification}</h3>
          <p className="mt-3 text-base font-medium text-accent">{education.institution}</p>
          <p className="mt-6 text-base leading-8 text-muted-foreground">{education.description}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function CuriositySection() {
  return (
    <section className="site-container grid gap-9 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24" aria-labelledby="curiosity-title">
      <Reveal>
        <SectionHeading id="curiosity-title" label="05 / Beyond development" title="Always Exploring." />
        <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">{curiosityIntroduction}</p>
      </Reveal>
      <Reveal delay={60} className="self-center">
        <p className="mb-5 font-mono text-xs text-muted-foreground">AREAS THAT KEEP ME CURIOUS</p>
        <ul className="border-t border-border">
          {technicalInterests.map((interest) => <li key={interest} className="border-b border-border py-4 text-base leading-7">{interest}</li>)}
        </ul>
      </Reveal>
    </section>
  );
}

export function PhilosophySection() {
  return (
    <section className="border-y border-border bg-secondary/40 py-20 md:py-28" aria-labelledby="philosophy-title">
      <div className="site-container">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="section-label">06 / What defines me</p>
          <blockquote className="mt-7">
            <h2 id="philosophy-title" className="font-heading text-[clamp(2rem,3.7vw,3rem)] font-semibold leading-[1.18] tracking-[-0.045em]">
              Driven by <span className="text-primary">curiosity.</span>{" "}Defined by <span className="inline-block">problem-solving.</span>{" "}Focused on <span className="text-primary">impact.</span>
            </h2>
          </blockquote>
          <div className="mx-auto my-7 h-px w-12 bg-primary/40" aria-hidden="true" />
          <p className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground">{philosophyDescription}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function AboutContactCta() {
  return (
    <section className="site-container py-20 md:py-28" aria-labelledby="about-contact-title">
      <Reveal className="rounded-2xl border border-primary/20 bg-primary/5 px-6 py-10 sm:p-10 lg:p-14">
        <p className="section-label">07 / Continue the conversation</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-14">
          <div>
            <h2 id="about-contact-title" className="section-title max-w-xl">Let&apos;s Build Something Meaningful.</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">I&apos;m always open to interesting conversations, collaborative opportunities, and challenges that encourage learning and innovation.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="shadow-none hover:shadow-none"><Link href="/work">View My Work <ArrowUpRight aria-hidden="true" /></Link></Button>
            <Button asChild size="lg" variant="outline"><Link href="/contact">Get in Touch <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
