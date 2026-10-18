import { ArrowDown, Camera } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { aboutIntroduction, personalPortrait } from "@/lib/about-data";
import { cn } from "@/lib/utils";

function PersonalPortrait() {
  return (
    <figure className="flex items-end gap-5 sm:gap-8 lg:block">
      <div className={cn("relative aspect-[4/5] w-36 shrink-0 overflow-hidden rounded-2xl border border-border bg-secondary/50 sm:w-44 lg:w-full", !personalPortrait && "border-dashed")}>
        {personalPortrait ? (
          <Image src={personalPortrait.src} alt={personalPortrait.alt} fill preload
            sizes="(max-width: 639px) 144px, (max-width: 1023px) 176px, 320px" className="object-cover" />
        ) : (
          <div role="img" aria-label="Personal photograph placeholder. A portrait of Juma Saidi has not been added."
            className="flex h-full flex-col items-center justify-center gap-3 px-3 text-center text-muted-foreground">
            <Camera size={20} strokeWidth={1.4} className="text-accent" aria-hidden="true" />
            <p className="text-xs leading-6">Personal photograph<span className="block font-mono text-[10px]">To be added</span></p>
          </div>
        )}
      </div>
      <figcaption className="min-w-0 pb-1 lg:mt-5 lg:pb-0">
        <p className="font-heading text-base font-semibold tracking-tight">Juma Saidi</p>
        <p className="mt-1 text-sm leading-6 text-muted-foreground">Software Developer</p>
      </figcaption>
    </figure>
  );
}

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
        <Reveal delay={70} className="min-w-0 lg:pl-2"><PersonalPortrait /></Reveal>
      </div>
    </section>
  );
}
