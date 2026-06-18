import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Juma Saidi's approach to frontend development and interface design.",
};

export default function AboutPage() {
  return (
    <main className="bg-paper text-ink">
      <PageHero
        eyebrow="About me"
        title={
          <>
            Developer mindset.
            <br />
            <span className="text-white/45">Designer&apos;s eye.</span>
          </>
        }
        description="I bridge design and engineering to create web experiences that are useful, accessible, visually clear, and built to last."
      />

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-black/10 bg-portrait">
                <div className="profile-visual h-full w-full" />
              </div>
              <div className="mt-5 rounded-xl border border-black/10 bg-white p-5">
                <p className="text-sm font-semibold">Juma Saidi</p>
                <p className="mt-1 text-sm text-muted">
                  Frontend Developer & UI Designer
                </p>
                <p className="mt-4 text-xs text-muted">
                  Based in Nairobi · Working remotely
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="section-label">My approach</p>
              <h2 className="mt-6 text-4xl font-semibold leading-[1.1] tracking-[-0.04em] md:text-6xl">
                I turn complex requirements into clear digital experiences.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-10 grid gap-7 text-base leading-8 text-muted md:grid-cols-2">
                <p>
                  I&apos;m a frontend developer and designer focused on creating
                  responsive websites and interfaces that solve practical
                  problems. I enjoy finding the simplest structure that serves
                  both the user and the business.
                </p>
                <p>
                  My process combines visual thinking with careful
                  implementation. I work from goals and content first, then
                  refine the layout, interaction, accessibility, and technical
                  details until the experience feels complete.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-14 rounded-2xl border border-black/10 bg-white p-7 md:p-9">
                <h3 className="text-xl font-semibold">What you can expect</h3>
                <div className="mt-7 grid gap-6 sm:grid-cols-2">
                  {[
                    ["Clear communication", "Straightforward updates, practical recommendations, and no unnecessary jargon."],
                    ["Thoughtful decisions", "Every design and development choice should support a real objective."],
                    ["Responsive quality", "Careful behavior across mobile, tablet, and desktop—not desktop scaled down."],
                    ["Maintainable delivery", "Organized components and code that can evolve after launch."],
                  ].map(([title, copy]) => (
                    <div key={title}>
                      <h4 className="font-semibold">{title}</h4>
                      <p className="mt-2 text-sm leading-6 text-muted">{copy}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-20 text-white md:px-8 md:py-24">
        <Reveal className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-blue-300">Ready to collaborate?</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
              Let&apos;s discuss what you&apos;re building.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-ink"
          >
            Start a conversation <ArrowUpRight size={16} />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
