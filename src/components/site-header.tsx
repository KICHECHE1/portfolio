"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteNavigation } from "@/lib/site-navigation";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => { setIsMenuOpen(false); }, [pathname]);
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        if (document.activeElement?.closest("#mobile-navigation")) {
          document.querySelector<HTMLButtonElement>("[data-menu-toggle]")?.focus();
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-lg">
      <nav className="site-container grid h-20 grid-cols-[1fr_auto] items-center gap-4 md:grid-cols-[1fr_auto_1fr]" aria-label="Main navigation">
        <Link href="/" className="inline-flex min-h-11 w-fit items-center rounded-md font-heading text-base font-semibold tracking-tight" aria-label="Juma Saidi, home">
          Juma Saidi<span className="text-primary">.</span>
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {siteNavigation.map(({ label, href }) => (
            <Link key={href} href={href} aria-current={pathname === href ? "page" : isActive(href) ? "location" : undefined}
              className={cn("relative inline-flex min-h-11 items-center rounded-md px-3 text-sm transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:bg-primary after:transition-transform after:duration-200 hover:text-foreground hover:after:scale-x-100", isActive(href) ? "text-foreground after:scale-x-100" : "text-muted-foreground after:scale-x-0")}>
              {label}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-self-end gap-2.5">
          <ThemeToggle />
          <Button type="button" size="icon" variant="outline" className="md:hidden" data-menu-toggle
            onClick={() => setIsMenuOpen(open => !open)} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}>
            {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </Button>
        </div>
      </nav>
      <div id="mobile-navigation" inert={!isMenuOpen}
        className={cn("overflow-hidden bg-background transition-[max-height,opacity] duration-200 md:hidden", isMenuOpen ? "max-h-96 border-t border-border opacity-100" : "max-h-0 opacity-0")}>
        <div className="site-container grid gap-1 py-4">
          {siteNavigation.map(({ label, href }) => (
            <Link key={href} href={href} onClick={() => setIsMenuOpen(false)} aria-current={pathname === href ? "page" : isActive(href) ? "location" : undefined}
              className={cn("flex min-h-12 items-center justify-between rounded-lg px-4 text-base transition-colors hover:bg-secondary", isActive(href) ? "bg-primary/5 text-foreground" : "text-muted-foreground")}>
              {label}{isActive(href) && <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
