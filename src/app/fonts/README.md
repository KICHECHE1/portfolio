# Local portfolio fonts

These Latin WOFF2 subsets preserve the portfolio's Geist, Inter, and JetBrains Mono typography. They were copied from the verified Google Fonts assets in the previous successful production build and checked using Next.js's font metadata parser.

| File | Family | Supported weight axis | Source |
| --- | --- | --- | --- |
| geist-latin.woff2 | Geist | 100–900 | https://github.com/google/fonts/tree/main/ofl/geist |
| inter-latin.woff2 | Inter | 100–900 | https://github.com/google/fonts/tree/main/ofl/inter |
| jetbrains-mono-latin.woff2 | JetBrains Mono | 400–800; portfolio uses 400–500 | https://github.com/google/fonts/tree/main/ofl/jetbrainsmono |

Each family is distributed under the SIL Open Font License 1.1. The original license and copyright notices are included in the corresponding `*-OFL.txt` files.

`src/app/layout.tsx` loads these tracked files with `next/font/local`. Development and production builds require no Google Fonts requests. Keep the font files and licenses together when copying or deploying this project.

This avoids the Google font URL parsing failure described in https://github.com/vercel/next.js/issues/99114. Do not add a dependency on the internal `@vercel/turbopack-next` module shown in that error.
