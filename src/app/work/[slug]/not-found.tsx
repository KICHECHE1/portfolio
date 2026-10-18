import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectNotFound() {
  return (
    <main id="main-content" className="site-container min-h-[70vh] pb-20 pt-40">
      <p className="section-label">Project not found</p>
      <h1 className="hero-title mt-5">A little off course<span className="text-primary">.</span></h1>
      <p className="mt-6 max-w-lg text-base leading-8 text-muted-foreground">This project isn't in the collection. Explore the selected work to find your way back.</p>
      <Button asChild variant="outline" className="mt-8"><Link href="/work"><ArrowLeft aria-hidden="true" />Back to all work</Link></Button>
    </main>
  );
}
