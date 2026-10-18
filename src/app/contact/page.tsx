import type { Metadata } from "next";
import Link from "next/link";
import { connection } from "next/server";
import { ArrowRight, ArrowUpRight, Github, Linkedin, Link as LinkIcon, Mail } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/reveal";
import { contactDetails } from "@/lib/contact-details";
import { getContactDeliveryConfig } from "@/lib/contact/server";

const description = "Connect with Juma Saidi about software development, collaborative opportunities, and meaningful digital projects.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  openGraph: { title: "Contact Juma Saidi | Let's Connect", description, type: "website" },
};

const professionalProfiles = [
  { label: "LinkedIn", href: contactDetails.profiles.linkedin, icon: Linkedin },
  { label: "GitHub", href: contactDetails.profiles.github, icon: Github },
  ...contactDetails.otherProfiles.map((profile) => ({ ...profile, icon: LinkIcon })),
].filter((profile) => profile.href);

export default async function ContactPage() {
  // Read delivery readiness at request time, including when configuration is
  // supplied by the hosting environment after the production build.
  await connection();
  const deliveryAvailable = Boolean(getContactDeliveryConfig());

  return (
    <main id="main-content">
      <section className="border-b border-border pb-14 pt-32 md:pb-20 md:pt-40" aria-labelledby="contact-title">
        <div className="site-container">
          <Reveal>
            <p className="section-label mb-7 flex items-center gap-3">
              <span className="h-px w-7 bg-primary" aria-hidden="true" />Let&apos;s connect
            </p>
            <h1 id="contact-title" className="max-w-5xl font-heading text-[clamp(2.25rem,5.1vw,4.5rem)] font-semibold leading-[1.08] tracking-[-0.055em] lg:text-[clamp(4rem,5vw,4.5rem)]">
              <span className="block">Great ideas start</span>{" "}
              <span className="block text-primary">with a conversation.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              Whether you have a project in mind, an opportunity to collaborate, or simply want to connect, I&apos;d love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-14 md:py-24" aria-label="Get in touch">
        <div className="site-container grid items-start gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-20">
          <Reveal>
            <h2 className="font-heading text-3xl font-semibold tracking-[-0.04em] md:text-4xl">Let&apos;s Talk.</h2>
            <p className="mt-5 max-w-md text-base leading-8 text-muted-foreground">
              I&apos;m always interested in meaningful projects, collaborative opportunities, and conversations around technology and innovation.
            </p>
            <div className="mt-8 border-y border-border">
              <a href={`mailto:${contactDetails.email}`} className="group flex min-h-24 items-center gap-4 rounded-sm py-5 transition-colors hover:text-accent">
                <Mail size={20} strokeWidth={1.5} className="shrink-0 text-accent" aria-hidden="true" />
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Email me directly</span>
                  <span className="mt-1.5 block break-words text-base font-medium sm:text-lg">{contactDetails.email}</span>
                </span>
                <ArrowUpRight size={18} className="shrink-0 text-muted-foreground transition-[color,transform] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent motion-reduce:transform-none" aria-hidden="true" />
              </a>
            </div>
            {professionalProfiles.length > 0 && (
              <nav aria-label="Professional profiles" className="mt-5 flex flex-wrap gap-x-6 gap-y-1">
                {professionalProfiles.map(({ label, href, icon: Icon }) => (
                  <a key={href} href={href!} target="_blank" rel="noopener noreferrer" className="group inline-flex min-h-11 items-center gap-2 rounded-md text-sm text-muted-foreground transition-colors hover:text-accent">
                    <Icon size={17} strokeWidth={1.5} aria-hidden="true" />{label}<ArrowUpRight size={14} aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                ))}
              </nav>
            )}
            <p className="mt-8 max-w-sm text-sm leading-7 text-muted-foreground">
              A starting point, a question, or an idea you&apos;re still figuring out. There&apos;s room for all of it.
            </p>
          </Reveal>
          <Reveal delay={70} className="min-w-0">
            <ContactForm deliveryAvailable={deliveryAvailable} email={contactDetails.email} />
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-14 md:py-20" aria-labelledby="connections-title">
        <div className="site-container grid gap-7 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:gap-20">
          <Reveal><p className="section-label lg:pt-2">Open to connections</p></Reveal>
          <Reveal delay={50}>
            <h2 id="connections-title" className="max-w-xl font-heading text-[clamp(1.75rem,3.2vw,2.5rem)] font-semibold leading-tight tracking-[-0.04em]">Always open to meaningful opportunities.</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">I&apos;m interested in collaborating with teams, exploring new technologies, and contributing to projects that solve real-world problems.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-24" aria-labelledby="conversation-title">
        <div className="site-container">
          <Reveal className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end lg:gap-12">
            <h2 id="conversation-title" className="max-w-2xl font-heading text-3xl font-medium leading-tight tracking-[-0.045em] md:text-[2.5rem]">Good conversations lead to <span className="text-primary">great possibilities.</span></h2>
            <Link href="/work" className="group inline-flex min-h-11 shrink-0 items-center gap-3 rounded-md text-sm font-medium text-accent underline-offset-4 transition-colors hover:underline">
              Explore My Work<ArrowRight size={17} className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
