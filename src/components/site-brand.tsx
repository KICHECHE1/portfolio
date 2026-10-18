import Link from "next/link";
import { cn } from "@/lib/utils";

export function SiteBrand({ className, prominent = false }: { className?: string; prominent?: boolean }) {
  return (
    <Link href="/" aria-label="Juma Saidi, home"
      className={cn("group inline-flex min-h-11 w-fit shrink-0 items-center gap-3 rounded-lg", className)}>
      <span aria-hidden="true" className={cn(
        "relative grid shrink-0 place-items-center overflow-hidden rounded-xl border border-primary/25 bg-primary/5 font-heading font-semibold tracking-[-0.07em] text-accent transition-colors group-hover:border-primary/50 group-hover:bg-primary/10",
        prominent ? "size-12 text-xl" : "size-10 text-lg",
      )}>
        JS<span className="absolute bottom-1.5 right-1.5 size-1 rounded-full bg-primary" />
      </span>
      <span className="grid gap-0.5">
        <span className={cn("font-heading font-semibold leading-tight tracking-[-0.035em]", prominent ? "text-xl" : "text-base")}>Juma Saidi<span className="text-primary">.</span></span>
        <span className={cn("leading-5 text-muted-foreground", prominent ? "text-xs" : "text-[11px]")}>Software Developer</span>
      </span>
    </Link>
  );
}
