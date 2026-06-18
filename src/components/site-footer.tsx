import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink px-5 py-12 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <p className="text-xl font-semibold">Juma Saidi</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/55">
              Frontend developer and designer building professional, accessible
              digital experiences.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/35">
              Navigate
            </p>
            <div className="mt-4 grid gap-3 text-sm text-white/65">
              <Link href="/about" className="hover:text-white">About</Link>
              <Link href="/work" className="hover:text-white">Work</Link>
              <Link href="/skills" className="hover:text-white">Skills</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/35">
              Connect
            </p>
            <div className="mt-4 grid gap-3 text-sm text-white/65">
              <a
                href="mailto:hello@jumasaidi.com"
                className="inline-flex items-center gap-1 transition-colors duration-200 hover:text-white"
              >
                Email <ArrowUpRight size={13} />
              </a>
              <Link
                href="/contact"
                className="transition-colors duration-200 hover:text-white"
              >
                Contact form
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/35 sm:flex-row sm:justify-between">
          <p>Copyright 2026 Juma Saidi. All rights reserved.</p>
          <p>Designed and developed with Next.js.</p>
        </div>
      </div>
    </footer>
  );
}
