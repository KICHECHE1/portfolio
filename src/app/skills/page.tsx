import type { Metadata } from "next";
import { ArrowUpRight, Check, Code2, Layers3, Palette, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { ContactCta } from "@/components/contact-cta";
import { capabilities, toolset } from "@/lib/portfolio-data";

export const metadata: Metadata = { title: "Skills", description: "Juma Saidi’s frontend development, UI design, and technical capabilities." };
const icons = [Palette, Code2, Layers3, Sparkles];

export default function SkillsPage() {
  return (
    <main id="main-content">
      <PageHero eyebrow="Skills / A focused toolkit" title={<>Design sensitivity.<br /><span className="text-primary">Engineering discipline.</span></>} description="I combine interface design and frontend development to reduce handoff gaps and create more consistent digital products." />
      <section className="site-container py-20 md:py-28">
        <div className="grid gap-6 md:grid-cols-2">
          {capabilities.map(([number, title, description], index) => {
            const Icon = icons[index];
            return <Reveal key={title} delay={index * 60}><Card className="interactive-card h-full p-7 md:p-9"><div className="flex items-start justify-between"><span className="icon-tile"><Icon size={21} /></span><span className="font-mono text-xs text-muted-foreground">/{number}</span></div><h2 className="mt-8 text-2xl font-semibold tracking-tight">{title}</h2><p className="mt-4 max-w-md text-base leading-8 text-muted-foreground">{description}</p><div className="mt-7 flex items-center gap-2 border-t border-border pt-5 font-mono text-xs text-accent"><ArrowUpRight size={14} />{["People first", "Built for the browser", "Consistency at every scale", "A clear point of view"][index]}</div></Card></Reveal>;
          })}
        </div>
      </section>
      <section className="border-y border-border bg-secondary/50 py-20 md:py-24">
        <div className="site-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal><p className="section-label">Tools & technologies</p><h2 className="section-title mt-5">The right tools.<br />For the right reasons.</h2><p className="mt-6 max-w-md text-base leading-8 text-muted-foreground">I choose tools around a project’s needs. The goal is always a clear, maintainable, and effective result.</p></Reveal>
          <Reveal delay={80}><div className="grid gap-3 sm:grid-cols-2">{toolset.map(tool => <div key={tool} className="interactive-card flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-card"><Check size={15} className="shrink-0 text-accent" /><span className="font-mono text-sm">{tool}</span></div>)}</div></Reveal>
        </div>
      </section>
      <div className="pt-20 md:pt-28"><ContactCta /></div>
    </main>
  );
}
