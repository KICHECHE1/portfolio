import type { Project } from "@/components/project-card";

export const projects: Project[] = [
  {
    number: "01",
    title: "Aurelia",
    category: "Luxury travel experience",
    description: "A cinematic booking experience that makes premium travel feel effortless and personal.",
    tags: ["Next.js", "TypeScript", "Art Direction"],
    visual: "project-aurelia",
  },
  {
    number: "02",
    title: "Noma Studio",
    category: "Digital agency platform",
    description: "A confident editorial website designed to present creative work with clarity and energy.",
    tags: ["UI/UX", "React", "Development"],
    visual: "project-noma",
  },
  {
    number: "03",
    title: "Forma",
    category: "Architecture portfolio",
    description: "A restrained, image-led portfolio system for an architecture practice with a global audience.",
    tags: ["Identity", "Interaction", "Responsive"],
    visual: "project-forma",
  },
];

export const capabilities = [
  ["01", "UI/UX Design", "User flows, wireframes, visual systems, and interfaces shaped around genuine needs."],
  ["02", "Frontend Development", "Responsive, accessible applications built with React, Next.js, and TypeScript."],
  ["03", "Design Systems", "Reusable components and clear rules that keep products consistent as they grow."],
  ["04", "Creative Direction", "A coherent visual point of view from early concept through polished implementation."],
];

export const toolset = [
  "Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS",
  "HTML & CSS", "Figma", "Git & GitHub", "Responsive Design", "Accessibility",
];
