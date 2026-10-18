import fitness254Cover from "../../public/images/projects/fitness254-home.png";
import netoneCover from "../../public/images/projects/netone-foundation-home.png";
import fclCover from "../../public/images/projects/fcl-consulting-services-home.png";
import kidsAiCover from "../../public/images/projects/kids-ai-bootcamp-home.png";

export const projectCategories = ["SaaS", "Nonprofit", "Corporate", "EdTech"] as const;
export type ProjectCategory = (typeof projectCategories)[number];
export type ProjectFilter = "All" | ProjectCategory;

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  isPlaceholder: boolean;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  filterCategory: ProjectCategory;
  projectType: "Team Project";
  description: string;
  cover: ProjectImage;
  links: { live: string; github?: string };
  /** Add only personally verified contributions. Empty sections stay hidden. */
  contributions?: readonly string[];
  technologies?: readonly string[];
  /** Optional case notes. Sections render only when verified content is supplied. */
  caseStudy?: {
    overview?: string;
    problem?: string;
    objectives?: readonly string[];
    role?: string;
    responsibilities?: readonly string[];
    features?: readonly { title: string; description: string }[];
    process?: readonly { title: string; description: string }[];
    challenges?: readonly { challenge: string; solution: string }[];
    gallery?: readonly ProjectImage[];
    outcomes?: readonly string[];
  };
}

// Project purposes and live URLs were supplied by the portfolio owner.
// No specific responsibilities, technologies, or outcomes have been supplied.
export const projects: readonly Project[] = [
  {
    slug: "fitness254",
    title: "Fitness254",
    subtitle: "Gym Management System",
    category: "SaaS / Gym Management",
    filterCategory: "SaaS",
    projectType: "Team Project",
    description: "A comprehensive gym management platform designed to simplify membership management, payments, analytics and daily gym operations.",
    cover: {
      src: fitness254Cover.src,
      alt: "Fitness254 homepage showing its gym management platform and a dashboard preview.",
      width: 1600,
      height: 1000,
      caption: "Screenshot of the public Fitness254 website.",
      isPlaceholder: false,
    },
    links: { live: "https://fitness254.com" },
    contributions: [],
  },
  {
    slug: "netone-foundation",
    title: "NetOne Foundation",
    subtitle: "Digital Platform",
    category: "Nonprofit / Web Development",
    filterCategory: "Nonprofit",
    projectType: "Team Project",
    description: "A digital platform supporting organizational programmes, initiatives, impact storytelling and engagement.",
    cover: {
      src: netoneCover.src,
      alt: "NetOne Foundation homepage presenting its digital inclusion programmes and initiatives.",
      width: 1600,
      height: 1000,
      caption: "Screenshot of the public NetOne Foundation website.",
      isPlaceholder: false,
    },
    links: { live: "https://netonefoundation.org" },
    contributions: [],
  },
  {
    slug: "fcl-consulting-services",
    title: "FCL Consulting Services",
    subtitle: "Corporate Website",
    category: "Corporate / Web Development",
    filterCategory: "Corporate",
    projectType: "Team Project",
    description: "A corporate digital platform showcasing technology solutions, IT consulting, software development and professional training services.",
    cover: {
      src: fclCover.src,
      alt: "FCL Consulting Services homepage presenting its technology solutions and consulting services.",
      width: 1600,
      height: 1000,
      caption: "Screenshot of the public FCL Consulting Services website.",
      isPlaceholder: false,
    },
    links: { live: "https://www.fclconsult.com" },
    contributions: [],
  },
  {
    slug: "kids-ai-bootcamp",
    title: "Kids AI Bootcamp",
    subtitle: "Educational Platform",
    category: "EdTech / Web Development",
    filterCategory: "EdTech",
    projectType: "Team Project",
    description: "A digital platform supporting technology education initiatives for children, including coding, artificial intelligence, robotics and digital creativity.",
    cover: {
      src: kidsAiCover.src,
      alt: "Kids AI Bootcamp homepage introducing coding, artificial intelligence, and robotics education for children.",
      width: 1600,
      height: 1000,
      caption: "Screenshot of the public Kids AI Bootcamp website.",
      isPlaceholder: false,
    },
    links: { live: "https://kidsai.fclconsult.com" },
    contributions: [],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getNextProject(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index === -1 || projects.length < 2) return undefined;
  return projects[(index + 1) % projects.length];
}
