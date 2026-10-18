import { ArrowRight, ArrowUp, ArrowUpRight, Github, Linkedin, Link as LinkIcon, MapPin } from "lucide-react";
import Link from "next/link";
import { SiteBrand } from "@/components/site-brand";
import { siteNavigation } from "@/lib/site-navigation";
import { contactDetails } from "@/lib/contact-details";

const professionalProfiles = [
  { label: "LinkedIn", href: contactDetails.profiles.linkedin, icon: Linkedin },
  { label: "GitHub", href: contactDetails.profiles.github, icon: Github },
  ...contactDetails.otherProfiles.map((profile) => ({ ...profile, icon: LinkIcon })),
].filter((profile) => profile.href);

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/45" aria-label="Site footer">
      <div className="site-container">
        <div className="grid gap-10 py-12 sm:grid-cols-2 md:py-16 lg:grid-cols-[1.1fr_0.7fr_1fr] lg:gap-12 xl:gap-20">
          <div className="sm:col-span-2 lg:col-span-1">
            <SiteBrand prominent />
            <p className="mt-5 max-w-xs text-sm leading-7 text-muted-foreground">Curious about what&apos;s possible.<br />Focused on making it useful.</p>
            <p className="mt-5 inline-flex items-center gap-2 text-xs text-muted-foreground"><MapPin size={14} strokeWidth={1.5} aria-hidden="true" />Nairobi, Kenya</p>
          </div>

          <nav aria-labelledby="footer-navigation-title">
            <h2 id="footer-navigation-title" className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">Explore</h2>
            <div className="mt-4 grid grid-cols-2 gap-x-4">
              {[...siteNavigation, { label: "Skills", href: "/skills" }].map(({ label, href }) => (
                <Link href={href} key={href} className="group inline-flex min-h-11 w-fit items-center gap-1.5 rounded-md text-sm text-muted-foreground transition-colors hover:text-foreground">
                  <span className="underline-offset-4 group-hover:underline">{label}</span>
                  <ArrowUpRight size={13} className="text-accent opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </nav>

          <div>
            <h2 className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">Get in touch</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">For ideas, opportunities, and good conversations about technology.</p>
            <a href={`mailto:${contactDetails.email}`} className="group mt-3 flex min-h-14 items-center justify-between gap-3 rounded-sm border-b border-border pb-2 text-base font-medium transition-colors hover:border-primary/40 hover:text-accent">
              <span className="min-w-0 break-words">{contactDetails.email}</span>
              <ArrowUpRight size={19} className="shrink-0 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" aria-hidden="true" />
            </a>
            {professionalProfiles.length > 0 && (
              <nav aria-label="Footer professional profiles" className="mt-3 flex flex-wrap gap-x-5">
                {professionalProfiles.map(({ label, href, icon: Icon }) => (
                  <a key={href} href={href!} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-md text-sm text-muted-foreground transition-colors hover:text-accent">
                    <Icon size={15} aria-hidden="true" />{label}<span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ))}
              </nav>
            )}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-border py-5 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Juma Saidi. <span className="inline-block">All rights reserved.</span></p>
          <div className="flex w-full items-center justify-between gap-6 sm:w-auto sm:gap-8">
            <Link href="/work" className="group inline-flex min-h-11 items-center gap-2 rounded-md transition-colors hover:text-accent">Selected work<ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none" aria-hidden="true" /></Link>
            <a href="#main-content" className="group inline-flex min-h-11 items-center gap-2.5 rounded-full transition-colors hover:text-foreground">
              Back to top<span className="grid size-9 place-items-center rounded-full border border-border bg-background transition-colors group-hover:border-primary/40 group-hover:text-accent"><ArrowUp size={15} aria-hidden="true" /></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
