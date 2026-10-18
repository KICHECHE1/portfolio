import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

// Keep fonts in the repository: Google font URLs with query parameters can
// break Turbopack's font resolver (vercel/next.js#99114).
const geist = localFont({
  src: "./fonts/geist-latin.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-geist",
  display: "swap",
});

const inter = localFont({
  src: "./fonts/inter-latin.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = localFont({
  src: "./fonts/jetbrains-mono-latin.woff2",
  weight: "400 500",
  style: "normal",
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Juma Saidi | Software Developer",
    template: "%s | Juma Saidi",
  },
  description:
    "Juma Saidi — software developer driven by curiosity, problem-solving, and thoughtful collaboration.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <a href="#main-content" className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground focus:translate-y-0">Skip to content</a>
          <SiteHeader />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
