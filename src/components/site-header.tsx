"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  ["Home", "/"],
  ["About", "/about"],
  ["Work", "/work"],
  ["Skills", "/skills"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsMenuOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-ink text-white transition-all duration-300 ${
        isScrolled
          ? "border-white/10 shadow-lg shadow-black/10"
          : "border-white/10"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-3 text-white">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-white text-xs font-bold tracking-wide text-ink">
            JS
          </span>
          <span>
            <span className="block text-sm font-semibold leading-none">
              Juma Saidi
            </span>
            <span className="mt-1 block text-[11px] text-white/50">
              Frontend Developer
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navigation.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`relative py-2 text-sm font-medium transition-colors ${
                pathname === href
                  ? "text-white"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {label}
              {pathname === href && (
                <span className="absolute inset-x-0 -bottom-1 mx-auto h-0.5 rounded-full bg-accent" />
              )}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-blue-50 md:inline-flex"
        >
          Start a project <ArrowUpRight size={15} />
        </Link>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 text-white transition-colors hover:bg-white/10 md:hidden"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 bg-ink transition-all duration-300 md:hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl space-y-1 px-5 py-4">
          {navigation.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`block rounded-lg px-4 py-3 text-sm font-medium ${
                pathname === href
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
