import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { homeIntroduction } from "@/lib/home-data";

export function HomeHero() {
  return (
    <section aria-labelledby="home-title" className="border-b border-border pb-8 pt-32 md:pb-10 md:pt-40">
      <div className="site-container">
        <Reveal>
          <div className="mb-8 flex flex-col gap-3 md:mb-10">
            <p className="inline-flex items-center gap-3 text-sm font-medium">
              <span className="h-px w-7 bg-primary" aria-hidden="true" />Hi, I&apos;m Juma Saidi.
            </p>
            <p className="max-w-xl text-xs leading-6 text-muted-foreground sm:text-sm">{homeIntroduction.label}</p>
          </div>
          <h1 id="home-title" className="max-w-6xl font-heading text-[clamp(2.25rem,5.1vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.055em] lg:text-[clamp(4rem,5vw,4.5rem)]">
            <span className="block">Driven by curiosity.</span>{" "}
            <span className="block">Defined by <span className="inline-block">problem-solving.</span></span>{" "}
            <span className="block text-primary">Focused on impact.</span>
          </h1>
          <div className="mt-8 grid gap-7 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-12">
            <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">{homeIntroduction.description}</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="shadow-none hover:shadow-none"><Link href="/work">Explore My Work <ArrowUpRight aria-hidden="true" /></Link></Button>
              <Button asChild size="lg" variant="outline"><Link href="/contact">Get in Touch <ArrowRight aria-hidden="true" /></Link></Button>
            </div>
          </div>
        </Reveal>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-border pt-6 md:mt-16">
          <p className="font-mono text-[11px] text-muted-foreground">Nairobi, Kenya <span className="px-2 text-primary" aria-hidden="true">/</span> A curious mind. A practical approach.</p>
          <a href="#beyond-the-code" className="inline-flex min-h-11 items-center gap-2 rounded-md text-xs text-muted-foreground transition-colors hover:text-accent">A little more about me <ArrowDown size={14} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
