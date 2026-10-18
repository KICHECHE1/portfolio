# Maintaining the project collection

Edit `src/lib/projects.ts`. It is the single source for Work, homepage cards, category filters, and project overview routes.

## Professional attribution

The current collection contains four collaborative company projects supplied by the portfolio owner. Every card identifies the work as a **Team Project**. Descriptions explain the platforms' purposes, without assigning sole ownership or specific responsibilities to the portfolio owner.

Do not add technologies, individual responsibilities, achievements, testimonials, or performance metrics without verified information.

## Adding or editing a project

- Use a unique URL-safe `slug`; the overview route is generated at `/work/[slug]`.
- Set `title`, `subtitle`, the full display `category`, and a `filterCategory` from `projectCategories`.
- Keep the exact supplied live URL in `links.live`. Website buttons open in a new tab. Add `links.github` only if a public repository is verified.
- Supply a screenshot in `public/images/projects`, import it at the top of the configuration, and use its `.src` with descriptive alt text, dimensions, and a source caption. Static imports give updated screenshots new URLs automatically. Set `isPlaceholder: true` for placeholder imagery.
- Add personally verified details to the optional `contributions` array. A **My Contributions** disclosure then appears on the card, and a matching section appears on the project overview. Leave it empty or omit it until details are verified.
- The optional `technologies` array and `caseStudy` object support richer case studies later. Unfilled sections remain hidden rather than displaying draft claims.
- Optional case-study fields include overview, problem, objectives, role, responsibilities, features, process, challenges, gallery, and outcomes. Features/process use `{ title, description }`; challenges use `{ challenge, solution }`.
- Remove a project object to remove its cards and route. Next-project navigation follows configuration order and wraps around.
- Run `npm run typecheck` and `npm run build` after editing. Production builds generate the current project slugs.

The supplied projects are Fitness254, NetOne Foundation, FCL Consulting Services, and Kids AI Bootcamp. Their current screenshots were captured from their public websites; no authenticated dashboards were accessed.
