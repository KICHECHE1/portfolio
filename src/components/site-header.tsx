"use client";

import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { SiteBrand } from "@/components/site-brand";
import { ThemeToggle } from "@/components/theme-toggle";
import { contactDetails } from "@/lib/contact-details";
import { siteNavigation } from "@/lib/site-navigation";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => { setIsMenuOpen(false); }, [pathname]);
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
        if (document.activeElement?.closest("#mobile-navigation")) {
          menuToggleRef.current?.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isMenuOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => { if (desktop.matches) setIsMenuOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setIsMenuOpen(false);
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [isMenuOpen]);

  return (
    <>
    <div aria-hidden="true" data-menu-backdrop className={cn(
      "fixed inset-0 z-40 bg-background/60 backdrop-blur-sm transition-opacity duration-200 md:hidden",
      isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0",
    )} />
    <header ref={headerRef} onBlur={(event) => {
      if (event.relatedTarget instanceof Node && !event.currentTarget.contains(event.relatedTarget)) setIsMenuOpen(false);
    }} className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
      <nav className="site-container grid h-20 grid-cols-[1fr_auto] items-center gap-4 md:grid-cols-[1fr_auto_1fr]" aria-label="Main navigation">
        <SiteBrand />
        <div className="hidden items-center gap-1 rounded-full border border-border bg-secondary/65 p-1 md:flex">
          {siteNavigation.map(({ label, href }) => (
            <Link key={href} href={href} aria-current={pathname === href ? "page" : isActive(href) ? "location" : undefined}
              className={cn("inline-flex min-h-11 items-center justify-center rounded-full border px-4 text-sm font-medium transition-colors", isActive(href) ? "border-primary/20 bg-primary/10 text-accent" : "border-transparent text-muted-foreground hover:bg-card hover:text-foreground")}>
              {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-self-end gap-2 sm:gap-3">
          <ThemeToggle />
          {pathname !== "/contact" && (
            <Button asChild className="group hidden rounded-full shadow-none hover:shadow-none lg:inline-flex">
              <Link href="/contact">Let&apos;s talk<ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transform-none" aria-hidden="true" /></Link>
            </Button>
          )}
          <Button ref={menuToggleRef} type="button" size="icon" variant="outline" className="rounded-full bg-secondary/50 shadow-none md:hidden" data-menu-toggle
            onClick={() => setIsMenuOpen(open => !open)} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}>
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </nav>
      <div id="mobile-navigation" inert={!isMenuOpen} aria-hidden={!isMenuOpen}
        className={cn("grid bg-background transition-[grid-template-rows,opacity] duration-200 md:hidden", isMenuOpen ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0")}>
        <div className="min-h-0 overflow-hidden">
          <div className="max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain border-t border-border">
            <nav className="site-container py-5" aria-label="Mobile navigation">
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Explore the portfolio</p>
              {siteNavigation.map(({ label, href }, index) => (
                <Link key={href} href={href} onClick={() => setIsMenuOpen(false)} aria-current={pathname === href ? "page" : isActive(href) ? "location" : undefined}
                  className={cn("group flex min-h-16 items-center gap-4 rounded-lg px-3 transition-colors hover:bg-secondary", isActive(href) ? "bg-primary/5 text-accent" : "text-foreground")}>
                  <span className="font-mono text-[10px] text-muted-foreground" aria-hidden="true">0{index + 1}</span>
                  <span className="flex-1 font-heading text-2xl font-medium tracking-tight">{label}</span>
                  <ArrowRight size={18} className={cn("transition-[color,transform] group-hover:translate-x-1 group-hover:text-accent motion-reduce:transform-none", !isActive(href) && "text-muted-foreground")} aria-hidden="true" />
                </Link>
              ))}
              <a href={`mailto:${contactDetails.email}`} className="mt-5 flex min-h-12 items-center justify-between gap-3 rounded-sm border-t border-border pt-3 text-sm text-muted-foreground transition-colors hover:text-accent">
                <span className="min-w-0 break-words">{contactDetails.email}</span><ArrowUpRight size={16} className="shrink-0" aria-hidden="true" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}
