# Homepage — personal, editorial, purposeful

## Direction

Lead with Juma's identity as a curious software developer, problem solver, and team contributor. Use the established semantic dark/light palette and local Geist, Inter, and JetBrains Mono fonts. Keep the homepage typography-led and spacious.

Avoid code-window heroes, generic developer illustrations, service cards, continuous animation, proficiency scores, invented availability claims, and excessive gradients or glow.

## Structure

1. Personal introduction and the three-sentence headline: Driven by curiosity. Defined by problem-solving. Focused on impact.
2. More Than Just Code — an editorial about preview linking to /about.
3. The Principles Behind My Work — four numbered values separated by thin rules.
4. Selected Work — four real screenshots, purpose-focused descriptions, team-project labels, and genuine external links. Use the shared project configuration.
5. My Technical Toolkit — the four owner-supplied groups, without logos or ratings.
6. Built Through Collaboration — concise context and an undated, process-inspired visual.
7. Have an idea worth building? — /contact and /work actions, with a subtle blue-tinted border and surface.

## Components and content

- src/components/home/hero.tsx: introduction and primary CTAs.
- src/components/home/featured-work.tsx: screenshot-led editorial project previews.
- src/components/home/home-sections.tsx: about, principles, toolkit, collaboration, closing CTA.
- src/lib/home-data.ts: owner-supplied values and tools, plus homepage project display categories.
- src/lib/projects.ts remains authoritative for project names, descriptions, screenshots, attribution, and live URLs.
- The About preview reuses PersonalPortrait and the owner's photograph from src/assets/Juma.jpeg, configured centrally in src/lib/personal-profile.ts. Keep the existing typography-led hero and use the portrait as the personal introduction to the About preview.

## Shared navigation and footer

Use a minimal personal name, Home/About/Work/Contact, understated active underlines, a persistent theme toggle, and an accessible mobile disclosure. Preserve the Skills route through the footer. Keep existing contact links. No verified social profile URLs were supplied, so do not add assumed profiles or empty social icons.

## Accessibility and performance

Use one h1, clear h2/h3 hierarchy, descriptive image alternatives, visible focus, 44px interaction targets, inert collapsed mobile navigation, and Escape focus restoration. Reuse Motion Reveal with reduced-motion support. Project images load lazily below the hero. No additional dependencies.
