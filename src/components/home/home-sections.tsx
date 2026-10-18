import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { collaborationSteps, principles, toolkit } from "@/lib/home-data";

export function AboutPreview() {
  return (
    <section id="beyond-the-code" className="site-container grid scroll-mt-28 gap-9 py-20 md:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24" aria-labelledby="about-preview-title">
      <Reveal>
        <p className="section-label">01 / Beyond the code</p>
        <h2 id="about-preview-title" className="section-title mt-4 max-w-sm">More Than<br className="hidden lg:block" /> Just Code.</h2>
        <div className="mt-8 flex max-w-52 items-center gap-3 font-mono text-[10px] text-muted-foreground" aria-hidden="true">
          <span className="size-2 rounded-full border border-primary" /><span className="h-px flex-1 bg-border" /><span>Curiosity → Clarity</span>
        </div>
      </Reveal>
      <Reveal delay={60} className="flex flex-col justify-center">
        <p className="max-w-2xl text-lg leading-9 text-muted-foreground">For me, software development is about understanding challenges, exploring possibilities, and creating solutions that genuinely improve how people and organizations work. I value curiosity, collaboration, adaptability, and continuous growth.</p>
        <Link href="/about" className="mt-6 inline-flex min-h-11 w-fit items-center gap-3 rounded-md text-sm font-medium text-accent underline-offset-4 transition-colors hover:underline">More About Me <ArrowRight size={16} aria-hidden="true" /></Link>
      </Reveal>
    </section>
  );
}

export function PrinciplesSection() {
  return (
    <section className="border-y border-border bg-secondary/40 py-20 md:py-24" aria-labelledby="principles-title">
      <div className="site-container">
        <Reveal>
          <p className="section-label">02 / What drives me</p>
          <h2 id="principles-title" className="section-title mt-4 max-w-2xl">The Principles Behind My Work.</h2>
        </Reveal>
        <ol className="mt-10 grid gap-x-16 md:grid-cols-2 lg:gap-x-24">
          {principles.map((principle, index) => (
            <li key={principle.title} className="border-t border-border py-7 md:py-8">
              <Reveal delay={(index % 2) * 50} className="grid grid-cols-[24px_minmax(0,1fr)] gap-4 md:gap-5">
                <span className="mt-1.5 font-mono text-xs text-accent" aria-hidden="true">{(index + 1).toString().padStart(2, "0")}</span>
                <div><h3 className="text-xl font-semibold tracking-tight md:text-2xl">{principle.title}</h3><p className="mt-3 max-w-lg text-base leading-8 text-muted-foreground">{principle.description}</p></div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ToolkitSection() {
  return (
    <section id="toolkit" className="scroll-mt-28 border-y border-border bg-secondary/40 py-20 md:py-24" aria-labelledby="toolkit-title">
      <div className="site-container">
        <Reveal className="grid gap-5 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:gap-24">
          <div><p className="section-label">04 / Tools & interests</p><h2 id="toolkit-title" className="section-title mt-4">My Technical Toolkit.</h2></div>
          <p className="max-w-lg text-base leading-8 text-muted-foreground">The tools I work with, and the areas that keep me curious.</p>
        </Reveal>
        <div className="mt-10 grid gap-x-16 md:grid-cols-2 lg:gap-x-24">
          {toolkit.map((group) => (
            <Reveal key={group.title} className="border-t border-border py-7 md:py-8">
              <h3 className="text-lg font-semibold tracking-tight md:text-xl">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs leading-7 text-muted-foreground sm:text-[13px]">
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CollaborationSection() {
  return (
    <section className="site-container grid gap-10 py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24" aria-labelledby="collaboration-title">
      <Reveal>
        <p className="section-label">05 / Experience in practice</p>
        <h2 id="collaboration-title" className="section-title mt-4 max-w-lg">Built Through Collaboration.</h2>
        <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">Working on real-world software projects has shaped how I approach development — from understanding requirements and solving technical challenges to collaborating with teams and continuously improving digital products.</p>
      </Reveal>
      <Reveal delay={60} className="self-center lg:pl-4">
        <p className="mb-6 font-mono text-xs text-muted-foreground">AN ONGOING PRACTICE</p>
        <ol className="ml-1.5 border-l border-border">
          {collaborationSteps.map((step, index) => (
            <li key={step} className="relative pb-8 pl-8 last:pb-0">
              <span className="absolute -left-[5px] top-2 size-[9px] rounded-full border border-primary bg-background" aria-hidden="true" />
              <span className="font-mono text-[10px] text-muted-foreground" aria-hidden="true">0{index + 1}</span>
              <p className="mt-1 text-lg font-medium tracking-tight md:text-xl">{step}</p>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}

export function HomeContactCta() {
  return (
    <section className="site-container pb-20 md:pb-28" aria-labelledby="home-contact-title">
      <Reveal className="rounded-2xl border border-primary/20 bg-primary/5 px-6 py-10 sm:p-10 lg:px-14 lg:py-14">
        <p className="section-label">06 / A conversation is a good start</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-14">
          <div>
            <h2 id="home-contact-title" className="section-title max-w-xl">Have an idea worth building?</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">I&apos;m always interested in meaningful projects, creative challenges, and opportunities to collaborate. Let&apos;s connect and explore what&apos;s possible.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="shadow-none hover:shadow-none"><Link href="/contact">Let&apos;s Connect <ArrowUpRight aria-hidden="true" /></Link></Button>
            <Button asChild size="lg" variant="outline"><Link href="/work">Explore My Work <ArrowRight aria-hidden="true" /></Link></Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
