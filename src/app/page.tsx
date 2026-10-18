import type { Metadata } from "next";
import { HomeHero } from "@/components/home/hero";
import { HomeFeaturedWork } from "@/components/home/featured-work";
import { AboutPreview, CollaborationSection, HomeContactCta, PrinciplesSection, ToolkitSection } from "@/components/home/home-sections";
import { homeIntroduction } from "@/lib/home-data";

export const metadata: Metadata = {
  title: { absolute: "Juma Saidi | Software Developer" },
  description: homeIntroduction.description,
  openGraph: {
    title: "Juma Saidi | Software Developer",
    description: homeIntroduction.description,
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main id="main-content">
      <HomeHero />
      <AboutPreview />
      <PrinciplesSection />
      <HomeFeaturedWork />
      <ToolkitSection />
      <CollaborationSection />
      <HomeContactCta />
    </main>
  );
}
