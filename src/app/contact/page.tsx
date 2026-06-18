import type { Metadata } from "next";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Globe2,
  Mail,
  MessageSquareText,
} from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Juma Saidi about frontend development, website design, and digital product projects.",
};

const projectTypes = [
  "Website design",
  "Frontend development",
  "Design and development",
  "Portfolio website",
  "Landing page",
  "Something else",
];

export default function ContactPage() {
  return (
    <main className="bg-paper text-ink">
      <PageHero
        eyebrow="Contact / 04"
        title={
          <>
            Tell me about
            <br />
            <span className="text-accent">your project.</span>
          </>
        }
        description="Share what you’re building, where you are in the process, and what success looks like. The more context you provide, the more useful my response can be."
        aside={
          <div className="mt-7 inline-flex items-center gap-3 rounded-full border border-white/15 px-4 py-2 text-sm text-white/60">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative h-2 w-2 rounded-full bg-accent" />
            </span>
            Currently accepting new projects
          </div>
        }
      />

      <section className="px-5 py-20 md:px-8 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 xl:grid-cols-[0.7fr_1.3fr] xl:gap-20">
          <aside>
            <Reveal>
              <p className="section-label">Contact details</p>
              <h2 className="mt-6 text-4xl font-medium leading-tight tracking-[-0.045em] md:text-5xl">
                Let&apos;s start with a conversation.
              </h2>
              <p className="mt-6 max-w-md leading-7 text-muted">
                Whether you have a detailed brief or an early idea, send over
                what you know. I&apos;ll help clarify the next step.
              </p>

              <div className="mt-10 overflow-hidden rounded-xl border border-black/10 bg-white">
                <a
                  href="mailto:hello@jumasaidi.com"
                  className="group flex items-center gap-4 border-b border-black/10 p-5 transition-colors hover:bg-accent/25"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-white">
                    <Mail size={18} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-muted">
                      Email
                    </span>
                    <span className="mt-1 block font-semibold">
                      hello@jumasaidi.com
                    </span>
                  </span>
                  <ArrowUpRight
                    size={17}
                    className="ml-auto transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <div className="flex items-center gap-4 border-b border-black/10 p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-surface">
                    <Globe2 size={18} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-muted">
                      Location
                    </span>
                    <span className="mt-1 block font-semibold">
                      Nairobi, Kenya · Remote worldwide
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-4 p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-surface">
                    <Clock3 size={18} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-muted">
                      Response time
                    </span>
                    <span className="mt-1 block font-semibold">
                      Within 1–2 business days
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-8 rounded-xl border border-blue-200 bg-accent-soft p-6 text-accent-ink">
                <MessageSquareText size={24} className="text-accent" />
                <h3 className="mt-8 text-xl font-semibold">
                  What happens next?
                </h3>
                <ol className="mt-5 space-y-4">
                  {[
                    "I review your project details.",
                    "We schedule a short discovery call.",
                    "You receive a clear scope and proposal.",
                  ].map((step, index) => (
                    <li key={step} className="flex gap-3 text-sm leading-6">
                      <span className="font-semibold">0{index + 1}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </aside>

          <Reveal delay={100}>
            <form
              action="mailto:hello@jumasaidi.com"
              method="post"
              encType="text/plain"
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-card sm:p-8 md:p-12"
            >
              <div className="mb-10 flex items-start justify-between gap-5 border-b border-black/10 pb-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                    Project inquiry
                  </p>
                  <h2 className="mt-3 text-3xl font-medium tracking-[-0.035em]">
                    Tell me the essentials
                  </h2>
                </div>
                <span className="hidden rounded-full bg-accent-soft px-3 py-1.5 text-xs font-semibold text-accent-ink sm:block">
                  Usually 3–5 minutes
                </span>
              </div>

              <fieldset>
                <legend className="mb-6 flex items-center gap-3 text-sm font-semibold">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-xs text-white">
                    1
                  </span>
                  Your details
                </legend>
                <div className="grid gap-7 sm:grid-cols-2">
                  <label className="form-field">
                    <span>Full name *</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Jane Smith"
                      autoComplete="name"
                      required
                    />
                  </label>
                  <label className="form-field">
                    <span>Email address *</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="jane@company.com"
                      autoComplete="email"
                      required
                    />
                  </label>
                  <label className="form-field">
                    <span>Company or brand</span>
                    <input
                      type="text"
                      name="company"
                      placeholder="Company name"
                      autoComplete="organization"
                    />
                  </label>
                  <label className="form-field">
                    <span>Phone number</span>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+254 ..."
                      autoComplete="tel"
                    />
                  </label>
                </div>
              </fieldset>

              <fieldset className="mt-12 border-t border-black/10 pt-10">
                <legend className="mb-6 flex items-center gap-3 text-sm font-semibold">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-xs text-white">
                    2
                  </span>
                  Project overview
                </legend>

                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                    What do you need? *
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {projectTypes.map((type) => (
                      <label
                        key={type}
                        className="project-option cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="project-type"
                          value={type}
                          required
                        />
                        <span>{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mt-8 grid gap-7 sm:grid-cols-2">
                  <label className="form-field">
                    <span>Estimated budget *</span>
                    <select name="budget" defaultValue="" required>
                      <option value="" disabled>
                        Select a range
                      </option>
                      <option>Under $1,000</option>
                      <option>$1,000 – $3,000</option>
                      <option>$3,000 – $7,000</option>
                      <option>$7,000+</option>
                      <option>Not sure yet</option>
                    </select>
                  </label>
                  <label className="form-field">
                    <span>Ideal launch date</span>
                    <select name="timeline" defaultValue="">
                      <option value="" disabled>
                        Select a timeline
                      </option>
                      <option>As soon as possible</option>
                      <option>Within 1 month</option>
                      <option>Within 2–3 months</option>
                      <option>3+ months</option>
                      <option>Flexible / not sure</option>
                    </select>
                  </label>
                </div>

                <label className="form-field mt-8">
                  <span>Project details *</span>
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Tell me about your goals, audience, required features, current challenges, and what a successful result would look like."
                    required
                  />
                </label>

                <label className="form-field mt-8">
                  <span>Existing website or reference link</span>
                  <input
                    type="url"
                    name="reference"
                    placeholder="https://"
                  />
                </label>
              </fieldset>

              <div className="mt-10 flex flex-col gap-5 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
                <p className="flex max-w-sm gap-2 text-xs leading-5 text-muted">
                  <CheckCircle2 size={15} className="mt-0.5 shrink-0" />
                  Your information will only be used to respond to this
                  inquiry.
                </p>
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent hover:text-ink"
                >
                  Send project inquiry
                  <ArrowUpRight
                    size={17}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-black/10 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="section-label">Before you send</p>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                [
                  "What projects are a good fit?",
                  "Marketing sites, portfolios, landing pages, frontend builds, and focused digital product experiences.",
                ],
                [
                  "Can you work with an existing design?",
                  "Yes. I can develop from supplied designs, improve an existing direction, or handle both design and development.",
                ],
                [
                  "Do you work remotely?",
                  "Yes. I’m based in Nairobi and collaborate remotely with clients and teams in different time zones.",
                ],
              ].map(([question, answer]) => (
                <article key={question} className="rounded-xl border border-black/10 bg-white p-7">
                  <h2 className="font-semibold">{question}</h2>
                  <p className="mt-4 text-sm leading-6 text-muted">
                    {answer}
                  </p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
