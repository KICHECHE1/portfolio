import type { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import {
  AboutContactCta, ApproachSection, CuriositySection, EducationSection,
  ExperienceSection, JourneySection, PhilosophySection,
} from "@/components/about/about-sections";

const description = "Meet Juma Saidi, a software developer with a background in Applied Computer Science, driven by curiosity, practical problem-solving, and collaboration.";

export const metadata: Metadata = {
  title: "About",
  description,
  openGraph: {
    title: "About Juma Saidi | Software Developer",
    description,
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <main id="main-content">
      <AboutHero />
      <JourneySection />
      <ApproachSection />
      <ExperienceSection />
      <EducationSection />
      <CuriositySection />
      <PhilosophySection />
      <AboutContactCta />
    </main>
  );
}
