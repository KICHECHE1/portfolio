import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  description: string;
  aside?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-ink px-5 pb-20 pt-36 text-white md:px-8 md:pb-24 md:pt-44">
      <div className="professional-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-7xl">
        <p className="mb-7 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
          {eyebrow}
        </p>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl md:text-7xl">
            {title}
          </h1>
          <div>
            <p className="max-w-lg text-base leading-7 text-white/60 md:text-lg">
              {description}
            </p>
            {aside}
          </div>
        </div>
      </div>
    </section>
  );
}
