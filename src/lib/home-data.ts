export const homeIntroduction = {
  label: "Software Developer · Problem Solver · Technology Enthusiast",
  description: "I'm a software developer passionate about transforming ideas into practical digital solutions. I enjoy solving complex problems, building meaningful experiences, and contributing to technology that makes a difference.",
};

export const principles = [
  {
    title: "Problem-Solving",
    description: "I approach challenges with curiosity, breaking complex problems into thoughtful, practical solutions.",
  },
  {
    title: "Continuous Learning",
    description: "Technology evolves, and so do I. I believe in improving my skills, exploring new ideas, and adapting to change.",
  },
  {
    title: "Collaboration",
    description: "Great digital experiences are rarely built alone. I value teamwork, communication, and learning from different perspectives.",
  },
  {
    title: "Purposeful Development",
    description: "I believe good software should be useful, reliable, accessible, and built with the people using it in mind.",
  },
] as const;

export const toolkit = [
  {
    title: "Frontend Development",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend & Databases",
    items: ["Python", "PostgreSQL", "MySQL", "SQLite"],
  },
  {
    title: "Tools & Development Workflow",
    items: ["Git & GitHub", "Docker", "VS Code", "Vercel", "AWS Amplify"],
  },
  {
    title: "Other Technical Interests",
    items: ["Cybersecurity", "Networking", "System Integration", "Mobile Development"],
  },
] as const;

// Presentation labels for the homepage. Names, descriptions, screenshots,
// attribution, and live URLs come from the shared project configuration.
export const featuredWork = [
  { slug: "fitness254", category: "SaaS / Gym Management" },
  { slug: "netone-foundation", category: "Nonprofit / Digital Platform" },
  { slug: "fcl-consulting-services", category: "Corporate / Web Development" },
  { slug: "kids-ai-bootcamp", category: "Education Technology" },
] as const;

export const collaborationSteps = [
  "Understand the problem",
  "Work through it together",
  "Keep improving",
] as const;
