import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

export function ContactCta() {
  return (
    <section className="site-container pb-20 md:pb-28">
      <Reveal>
        <div className="hero-wash flex flex-col justify-between gap-8 rounded-2xl border border-primary/20 p-7 shadow-card sm:p-10 lg:flex-row lg:items-center lg:p-12">
          <div><p className="section-label">Have something in mind?</p><h2 className="section-title mt-4 max-w-2xl">Let’s build something<br className="hidden sm:block" /> worth putting out there.</h2><p className="mt-5 text-base leading-7 text-muted-foreground">A fresh idea, a tricky challenge, or just a hello.</p></div>
          <Button asChild size="lg" className="w-fit shrink-0"><Link href="/contact">Start a conversation <ArrowUpRight /></Link></Button>
        </div>
      </Reveal>
    </section>
  );
}
