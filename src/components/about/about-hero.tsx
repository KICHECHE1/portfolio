import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { PersonalPortrait } from "@/components/personal-portrait";
import { aboutIntroduction } from "@/lib/about-data";

export function AboutHero() {
  return (
    <section className="border-b border-border pb-14 pt-32 md:pb-20 md:pt-40" aria-labelledby="about-title">
      <div className="site-container grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(240px,0.38fr)] lg:gap-20">
        <Reveal>
          <p className="section-label mb-7 flex items-center gap-3"><span className="h-px w-7 bg-primary" aria-hidden="true" />Get to know me</p>
          <h1 id="about-title" className="font-heading text-[clamp(2.25rem,5.1vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.055em] lg:text-[clamp(4rem,5vw,4.5rem)]">
            <span className="block">Curiosity drives me.</span>{" "}
            <span className="block text-primary">Purpose shapes <span className="inline-block">what I build.</span></span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">{aboutIntroduction}</p>
          <a href="#journey" className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-medium text-accent underline-offset-4 transition-colors hover:underline">Read my story <ArrowDown size={15} aria-hidden="true" /></a>
        </Reveal>
        <Reveal delay={70} className="min-w-0 lg:pl-2"><PersonalPortrait preload /></Reveal>
      </div>
    </section>
  );
}
