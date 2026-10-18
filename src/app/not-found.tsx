import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main id="main-content" className="hero-wash grid min-h-[75vh] place-items-center px-5 pb-20 pt-40 text-center">
      <div><p className="mb-5 font-mono text-sm text-accent">404 / A little off the path</p><h1 className="hero-title">Nothing to see here.<br /><span className="text-primary">Plenty to explore.</span></h1><p className="mx-auto mt-6 max-w-md text-base leading-8 text-muted-foreground">That page may have moved. Head back home or take a look at what I’ve been working on.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Button asChild><Link href="/">Back home <ArrowLeft /></Link></Button><Button asChild variant="outline"><Link href="/work">Explore the work <ArrowUpRight /></Link></Button></div></div>
    </main>
  );
}
