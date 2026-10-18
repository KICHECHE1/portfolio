# Work and project overviews

Use shared semantic dark/light tokens with Geist headings, Inter body copy, and JetBrains Mono technical labels. Default theme stays dark.

## Work page

- Page heading: “Selected Work”.
- Use the owner's supplied description about contributing within collaborative development teams.
- Explicitly identify the collection as company team projects.
- One responsive grid presents the four supplied projects, with two columns from tablet up and one on mobile.
- Category filters: All, SaaS, Nonprofit, Corporate, EdTech. Retain accessible pressed states, result announcements, Motion transitions, and reduced-motion support.
- Each card contains an optimized screenshot of the actual public website, project name, subtitle, full category, purpose-focused description, subtle Team Project badge, and Visit Website button.
- Website buttons use supplied URLs and clearly identify new-tab behavior for assistive technology.
- Retain a secondary Project overview link.
- My Contributions is optional and appears only after verified details are added to the typed configuration.
- Use 16px corners, semantic surfaces, generous spacing, subtle borders and image scaling, soft light-theme shadows, and restrained blue hover accents.
- Keep the contact CTA linking to /contact.

## Attribution and truthful content

Do not imply independent development or ownership. Do not infer technologies, company names, individual responsibilities, achievements, or outcomes. Current descriptions and links come from the owner.

## Project overview routes

Generate /work/[slug] from src/lib/projects.ts. Keep metadata, breadcrumbs, public-site screenshots, team attribution, Work navigation highlighting, and next-project navigation.

Show the project overview and collaborative context. Render optional contributions, technologies, and deeper case-study sections only when verified content exists. Contents navigation includes only visible sections.

## Accessibility and responsiveness

Maintain semantic heading order, descriptive image alternatives, visible focus, new-tab labels, and at least 44px interactive targets. Test both themes from 320px to 1440px and respect reduced motion.
