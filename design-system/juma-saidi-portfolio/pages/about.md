# About — a personal story, thoughtfully presented

Use the homepage's editorial style, shared semantic dark/light palette, and locally hosted Geist, Inter, and JetBrains Mono. Keep the page focused on the person and the thinking behind the work.

## Narrative and layout

1. Typography-led introduction with the owner-supplied headline and description. A restrained portrait area sits alongside the copy on desktop and becomes a compact figure below it on mobile.
2. The Journey So Far — four readable paragraphs, with a narrow heading column and a comfortable reading measure.
3. How I Approach My Work — four numbered editorial rows, without icon cards.
4. Experience That Shapes My Work — the supplied experience areas and links to the existing collaborative company projects.
5. Where My Foundation Began — degree, Egerton University, and a subtle timeline rule; no invented dates or honors.
6. Always Exploring — interests framed as curiosity, without expert labels or ratings.
7. A centered personal philosophy with restrained blue emphasis and its own supporting narrative.
8. A welcoming closing CTA with /work and /contact links.

## Sources of truth

- src/lib/about-data.ts contains the supplied biography, principles, experience areas, education, and interests.
- src/lib/personal-profile.ts holds the portrait shared with Home.
- src/lib/projects.ts remains authoritative for linked project names and routes.
- src/components/about/about-hero.tsx handles the introduction and portrait presentation.
- src/components/about/about-sections.tsx handles the editorial sections.
- src/app/about/page.tsx composes the page and defines SEO metadata.

## Portrait

Use the owner's photograph from src/assets/Juma.jpeg in the About hero and the homepage's About preview. The shared PersonalPortrait component uses Next.js Image, a reserved aspect ratio, descriptive alt text, responsive image sizes, and a blur placeholder for static imports. A single personalPortrait setting in src/lib/personal-profile.ts supplies both pages. Preserve the original photograph; do not substitute generated faces or stock imagery.

## Truthful attribution

Use only the facts and narrative provided by the owner. Describe the named platforms as collaborative company projects. Do not assign individual responsibilities to specific projects, imply sole ownership, or add employers, employment periods, accomplishments, certifications, or metrics.

## Accessibility and motion

Use semantic sections and heading order, descriptive link labels, 44px targets, visible keyboard focus, and the existing Reveal component. Keep the page server-rendered except for shared theme, navigation, and animation behavior. Respect reduced motion and preserve the shared navigation, footer, fonts, and routes.
