import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function PageHero({ eyebrow, title, description, aside }: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  aside?: ReactNode;
}) {
  return (
    <section className="hero-wash relative overflow-hidden border-b border-border px-5 pb-16 pt-36 md:px-8 md:pb-20 md:pt-44">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <p className="section-label mb-6">{eyebrow}</p>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
            <h1 className="hero-title">{title}</h1>
            <div><p className="max-w-lg text-base leading-8 text-muted-foreground md:text-lg">{description}</p>{aside}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
