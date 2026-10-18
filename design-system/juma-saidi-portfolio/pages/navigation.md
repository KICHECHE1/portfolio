# Shared header and footer

The portfolio uses a shared JS monogram and Juma Saidi wordmark, with the Software Developer label. Keep the established theme tokens and local Geist, Inter, and JetBrains Mono fonts. The monogram is typography rendered in HTML, without a new image asset or dependency.

## Header

- Fixed 80px bar with a restrained background blur and one hairline divider. Preserve existing hero padding and anchor offsets.
- Desktop navigation sits inside a compact rounded track. The current page has a blue-tinted pill; nested project pages mark Work as the current location.
- The theme toggle and mobile menu use matching 44px circular controls. A small desktop contact action is omitted on the Contact page.
- The mobile disclosure has numbered editorial links, a direct email link, a restrained background scrim, and bounded scrolling on short viewports. Closed content is inert and hidden from assistive technology. The scrim is decorative; outside interaction closes the menu.
- Close on navigation, Escape, outside interaction, focus leaving the header, and resizing to desktop. Escape restores focus to the trigger when focus is inside the disclosure. This is a disclosure, not a modal or focus trap.

## Footer

- Three balanced groups: personal identity and location, site navigation, and direct contact.
- Use only the existing email and verified profile URLs from contact-details.ts. Omit missing social profiles.
- Use an understated secondary surface, generous spacing, a single divider, the copyright notice, and a back-to-top control. Keep the existing Skills route accessible.
- Avoid extra availability claims, logos, frameworks, badges, or repeated promotional headlines.

## Interaction and accessibility

Preserve semantic navigation, aria-current page/location, the skip link, visible focus rings, 44px targets, and reduced-motion preferences. Use CSS transitions for these small shared elements rather than adding animation dependencies or scroll listeners. Check dark/light themes at 320–1440px, keyboard navigation, short-height mobile menus, sticky behavior, and project-route active states.
