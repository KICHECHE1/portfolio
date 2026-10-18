# Juma Saidi — Portfolio design system

The user-specified design system applies to every route, navigation, footer, card, form, and project dialog. It supersedes the previous navy/gold and paper/orange directions.

## Stack

Next.js App Router, TypeScript, Tailwind CSS v4 with @tailwindcss/postcss, shadcn/ui components, next-themes, Motion for React, and Lucide icons.

## Theme tokens

| Semantic token | Dark (default) | Light |
| --- | --- | --- |
| background | #0B1120 | #FFFFFF |
| secondary | #111827 | #F8FAFC |
| card / popover | #151E30 | #FFFFFF |
| primary | #3B82F6 | #2563EB |
| accent | #38BDF8 | #0369A1 |
| foreground | #F8FAFC | #0F172A |
| muted-foreground | #94A3B8 | #475569 |
| border / input | #26354C | #E2E8F0 |
| hover | #60A5FA | #1D4ED8 |

Source: src/app/globals.css. Primitive palette tokens map to semantic tokens and Tailwind @theme inline utilities. Component colors reference semantic tokens; avoid route-specific hardcoded theme palettes.

Primary buttons use navy text on electric blue in dark mode and white text on deep blue in light mode, keeping normal-sized button text above 4.5:1 contrast. Dark theme uses restrained blue glows; light theme uses soft neutral shadows. Project artwork retains its own art direction inside the themed interface.

## Typography

- Geist: headings, 600–700. Hero 64–72px desktop, 36–42px mobile.
- Inter: body, navigation, buttons, 400–500. Body 16–18px; navigation/buttons 14–16px.
- JetBrains Mono: code, developer details, technology labels, 400–500.
- Section headings: 36–48px desktop, 28–32px mobile. Card headings: 20–24px.

Fonts are bundled in src/app/fonts, loaded through next/font/local, and declared at the HTML element so tokens resolve throughout the document. Builds require no Google Fonts requests; keep the local font files and their SIL Open Font License notices in source control.

## Layout and components

- Content width: 1216px. Horizontal gutters: 32px desktop, 20px mobile.
- Section spacing: 80–112px desktop, 60–80px mobile.
- Cards: 14–16px radius, subtle semantic borders.
- Controls: consistent 44px minimum primary target size, 12px radius.
- shadcn/ui Button, Card, Input, and Textarea live in src/components/ui.
- Clear hover, focus-visible, selected, disabled, and required states.
- Keep backgrounds and decorative hero gradients subtle.

## Themes and accessibility

- next-themes, class attribute, dark default, explicit dark/light toggle in all navigation layouts.
- Preference persists in localStorage and across navigation/reload.
- next-themes pre-paint script plus suppressHydrationWarning on HTML prevents theme flash and hydration mismatches.
- Global semantic tokens style every route and native dialog.
- Include a skip link, visible focus rings, native form validation, labeled controls, inert closed mobile navigation, and Escape handling.
- MotionConfig respects user motion preferences. Reveal animations are brief and run once; reduced-motion CSS removes decorative motion and smooth scrolling.

## Verification

Run npm run build and npm run typecheck. Verify both themes on every route, first-visit default, saved preference before hydration, mobile navigation, work filters/views/dialogs, form control styling and validation, typography, contrast, and reduced motion.
