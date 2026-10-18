import { ArrowUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { siteNavigation } from "@/lib/site-navigation";
import { contactDetails } from "@/lib/contact-details";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/35 py-12 md:py-14">
      <div className="site-container">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.7fr_1fr] lg:gap-16">
          <div>
            <Link href="/" className="inline-flex min-h-11 items-center rounded-md font-heading text-lg font-semibold tracking-tight">Juma Saidi<span className="text-primary">.</span></Link>
            <p className="mt-3 max-w-xs text-sm leading-7 text-muted-foreground">Curious about what&apos;s possible.<br />Focused on making it useful.</p>
            <p className="mt-5 font-mono text-[11px] text-muted-foreground">Software developer / Nairobi, Kenya</p>
          </div>
          <nav aria-label="Footer navigation">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Explore</p>
            <div className="mt-3 grid grid-cols-2 gap-x-4 sm:grid-cols-1">
              {siteNavigation.map(({ label, href }) => <Link href={href} key={href} className="inline-flex min-h-11 w-fit items-center rounded-md text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-accent hover:underline">{label}</Link>)}
              <Link href="/skills" className="inline-flex min-h-11 w-fit items-center rounded-md text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-accent hover:underline">Skills</Link>
            </div>
          </nav>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Start a conversation</p>
            <div className="mt-3 grid">
              <Link href="/contact" className="inline-flex min-h-11 w-fit items-center gap-2 rounded-md text-sm text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline">Get in touch <ArrowUpRight size={15} aria-hidden="true" /></Link>
              <a href={`mailto:${contactDetails.email}`} className="inline-flex min-h-11 w-fit items-center rounded-md text-sm text-muted-foreground underline-offset-4 transition-colors hover:text-accent hover:underline">{contactDetails.email}</a>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col justify-between gap-3 border-t border-border pt-5 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Juma Saidi.</p>
          <a href="#main-content" className="inline-flex min-h-11 w-fit items-center gap-2 rounded-md transition-colors hover:text-accent">Back to top <ArrowUp size={14} aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  );
}
