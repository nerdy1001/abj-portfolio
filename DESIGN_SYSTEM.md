# Personal website design system

Version 1.0. Stack: Next.js, TypeScript, Tailwind CSS, shadcn, Lucide. Typeface: Google Sans Flex. Primary colour: #1E40AF. Accessibility target: WCAG 2.2 AA. Light only.

## 0. Decisions and assumptions

These were made on your behalf. Change any of them and the rest of the system still holds.

1. **Tailwind v4 and the current shadcn CLI.** Tokens live in CSS, not in a config file. On Tailwind v3, move the same values into `tailwind.config.ts`.
2. **Light only, with inverse sections.** Your mockup uses dark navy sections. That is not a dark theme, so there is no toggle and no `prefers-color-scheme` handling. A section opts in with `data-surface="inverse"` and every semantic token is remapped for its children. Components never know which surface they sit on.
3. **Primary is used for fills and for link text on light surfaces.** On dark navy, #1E40AF reaches only about 2.2:1, so text and links use a lighter blue (#93B4FF, 9.3:1) on inverse surfaces. Primary buttons keep the brand blue because their label carries the contrast.
4. **Greys are modelled on the neutrals used on apple.com**, with a cool navy added for inverse surfaces.
5. **Google Sans Flex** is loaded with `next/font/google` as one variable file. Confirm the family name is available in your installed Next.js version. If it is not, download the font and load it with `next/font/local`.

## 1. Principles

When two options conflict, these decide.

1. **Say less, show the work.** Copy is short. A project is shown, not described at length.
2. **Readable before beautiful.** Body text is 17px, lines stay under about 65 characters, nothing falls below AA.
3. **Mobile is the main design.** Design the narrow screen first. Desktop adds space, never new content.
4. **One strong moment per screen.** Large type, a single image, or a single action. Never all three competing.
5. **Decoration must earn its place.** If the page reads the same without it, remove it.

## 2. Token architecture

Three layers, defined in `src/app/globals.css`.

| Layer | Example | Rule |
| --- | --- | --- |
| Primitive | `--blue-800`, `--gray-600` | Raw values. Named by what they are. Not used in components. |
| Semantic | `--primary`, `--muted-foreground` | Named by role. The only layer components use. |
| Component | `--card` overridden inside a subtle section | Rare. Only for a documented surface exception. |

Semantic names follow shadcn (`background`, `foreground`, `card`, `muted`, `primary`, `border`, `input`, `ring`) so every shadcn component you add later inherits the system without edits. Extra roles added: `primary-hover`, `secondary-hover`, `link`, `tint`, `success`, `warning`.

Tailwind utilities point at the live variable (`@theme inline`). This is what lets the inverse remap work.

## 3. Colour

| Role | Token | Value | Use |
| --- | --- | --- | --- |
| Page | `background` | #FFFFFF | Default surface |
| Quiet fill | `muted` | #F5F5F7 | Alternate sections, eyebrow pills |
| Card | `card` | #F5F5F7 | Cards on the page surface (white on subtle sections) |
| Text | `foreground` | #1D1D1F | Headings and body |
| Secondary text | `muted-foreground` | #6E6E73 | Descriptions, captions |
| Primary | `primary` | #1E40AF | Main actions |
| Primary hover | `primary-hover` | #1E3A8A | Hover on main actions |
| Link | `link` | #1E40AF (inverse #93B4FF) | Text links, small accents |
| Tint | `tint` | #EEF2FF | The contact panel only |
| Divider | `border` | #D2D2D7 | Decorative lines only |
| Control edge | `input` | #86868B | Input borders (3.6:1) |
| Focus | `ring` | #2563EB (inverse #93B4FF) | Focus outline |
| Error | `destructive` | #B42318 | Errors |
| Success | `success` | #067647 | Confirmations |
| Caution | `warning` | #92400E | Cautions |
| Inverse page | `background` on inverse | #0A0F1E | Hero, value section, footer |
| Inverse card | `card` on inverse | #141A2C | Tiles on dark |

Rules:

- Blue appears in three places: main actions, links, focus. It is never used as decoration. This keeps the primary colour meaningful.
- Text always meets 4.5:1. Large text (24px and above) and control edges meet 3:1. The ratios are listed on the documentation page and were computed, not estimated.
- Secondary text on the muted fill is 4.7:1, which passes with little margin. Do not use anything lighter than `muted-foreground` for text.
- Never use colour as the only signal. Errors carry an icon and words. Links in running text are underlined.
- Gradients: one soft blue glow is allowed in the hero, nowhere else. Check contrast against the lightest part of the glow that sits behind text.
- Inverse sections: maximum three per page (hero, one showcase, footer). More than that and the page stops feeling light.

## 4. Typography

**Family.** Google Sans Flex only. Use weights 400, 500 and 600. Do not use 700 or above; large heavy type looks loud, and you want calm. Leave the width, grade and roundness axes at defaults. Fewer axes means fewer decisions to maintain.

**Scale.** Headings are fluid between a 375px and a 1280px viewport. Everything is in `rem`, so a visitor who raises their browser font size is respected.

| Utility | Size (small to large screen) | Line height | Tracking | Weight | Use |
| --- | --- | --- | --- | --- | --- |
| `text-display` | 40px to 76px | 1.05 | -0.035em | 600 | Home hero only |
| `text-title-1` | 32px to 56px | 1.1 | -0.03em | 600 | Page titles |
| `text-title-2` | 28px to 44px | 1.15 | -0.025em | 600 | Section titles |
| `text-title-3` | 20px to 26px | 1.25 | -0.015em | 600 | Card titles |
| `text-lead` | 18px to 21px | 1.5 | 0 | 400 | Section introductions |
| `text-body` | 17px | 1.6 | 0 | 400 | Body copy |
| `text-small` | 15px | 1.5 | 0 | 400 | Card descriptions, labels |
| `text-caption` | 13px | 1.4 | 0 | 400 to 500 | Metadata and hints only |

Rules:

- Nothing below 13px, and nothing below 15px for sentences a recruiter must read. Your mockup uses very small text in several sections; at a phone width it would fail this rule.
- Line length: 65 characters for body copy (`max-w-reading`). Headings use `text-wrap: balance`, paragraphs use `text-wrap: pretty`.
- One `h1` per page. Heading levels never skip. Choose the level for structure, then the utility for appearance.
- Sentence case everywhere. No all-caps labels.
- Use `tabular-nums` for statistics and dates.

## 5. Spacing and layout

- **Base unit:** 4px (the Tailwind default). Use only steps from this list: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- **Gutters:** 20px on mobile, 24px from 640px, 32px from 1024px.
- **Containers:** page content at 1088px maximum (`max-w-page`), reading content at 640px (`max-w-reading`).
- **Section rhythm:** `section-y` gives 72px on mobile rising to 128px on large screens. Use it on every section so the page keeps one beat.
- **Breakpoints:** Tailwind defaults (640, 768, 1024, 1280). Add a new one only when a specific layout breaks, never for a named device.
- **Grid:** one column on mobile, two from `md`, three from `lg` for cards. Do not build a 12-column system; this site does not need one.
- **Mobile first:** write the base class for mobile and add `sm:`, `md:`, `lg:` for larger screens.
- **Touch targets:** 44px minimum height for every interactive element on mobile. WCAG 2.2 requires 24px; 44px is the Apple guideline and is kinder to thumbs.

## 6. Shape and depth

| Token | Value | Use |
| --- | --- | --- |
| `rounded-control` | 12px | Inputs |
| `rounded-card` | 24px | Cards and tiles |
| `rounded-panel` | 32px | Large panels (contact, big media) |
| `rounded-full` | pill | Buttons, nav, eyebrow pills |

- Nested radii: inner radius equals outer radius minus the padding between them.
- Depth comes from colour, not shadow. There is one shadow (`shadow-raised`), used only for things that float: the navigation and menus.
- Borders are for dividers and form controls. Cards have no border.

## 7. Motion

Moderate means motion is visible but never the reason you notice a page.

| Token | Value | Use |
| --- | --- | --- |
| `--duration-fast` | 150ms | Colour changes |
| `--duration-base` | 250ms | Press feedback, arrows, menus |
| `--duration-slow` | 500ms | Scroll reveal |
| `--duration-hero` | 800ms | Hero entrance |
| `ease-standard` | cubic-bezier(0.28, 0.11, 0.32, 1) | Interface changes |
| `ease-out` | cubic-bezier(0.16, 1, 0.3, 1) | Entrances |

The complete list of motion on the site:

1. **Hero entrance.** Headline, supporting line and buttons rise in with an 80ms stagger (`animate-rise` with `--i`). Once, on load.
2. **Scroll reveal.** `Reveal` fades and lifts media blocks by 12px, once. Use it on images and showcase blocks, not on every section. If everything animates, nothing stands out.
3. **Press feedback.** Buttons scale to 98%.
4. **Hover.** Colour change on cards and links. Cards do not lift.
5. **Menus.** The mobile sheet slides in.

Never: parallax, autoplaying carousels, looping animation, scroll hijacking. Motion must show a change or introduce the page, nothing else. `prefers-reduced-motion` removes all movement; this is handled globally and inside `Reveal`.

## 8. Icons

Lucide only. 16px inside buttons, 20px inside tiles, 24px standalone. Stroke width stays at the default. Decorative icons get `aria-hidden`. An icon that stands alone as a control needs an `aria-label`. An arrow that points up and right means the link leaves the page or opens a new tab, and the link then needs the text "(opens in a new tab)" for screen readers.

## 9. Imagery

- Fixed ratios: 4:3 for project cards, 16:9 for case study banners, 3:4 for the portrait.
- Use `next/image` with accurate `sizes`. Set `priority` on the single hero or portrait image above the fold, lazy loading on the rest.
- Every meaningful image has alt text that says what it shows and why it matters. Decorative images use `alt=""`.
- Partner logos: one colour treatment (greyscale at full opacity, never faded below AA), equal optical height, each with the company name as alt text.
- Replace the grey placeholder cards in your mockup before launch. A recruiter forms an opinion from the first project card; an empty box reads as unfinished work.

## 10. Components

Build only what the pages use. Files are in `src/components`.

| Component | File | States and rules |
| --- | --- | --- |
| Button | `ui/button.tsx` | primary, secondary, tertiary; md (44px) and lg (48px); hover, focus, pressed, disabled, loading. One primary button per view. |
| Container, Section, SectionHeader, Eyebrow | `layout/primitives.tsx` | Section tones: default, subtle, tint, inverse. Eyebrow is optional and used sparingly. |
| Card, ProjectCard, FeatureTile, Stat | `ui/surfaces.tsx` | ProjectCard has one link, stretched over the card, with a visible focus outline on the whole card. |
| TextField, TextAreaField | `ui/form-field.tsx` | Visible label always. Hint, error, optional marker. Error is announced through a live region. Mark optional fields, not required ones. |
| Reveal | `motion/reveal.tsx` | Visible without JavaScript and with reduced motion. |
| SiteNav | `site-nav.tsx` | One inverse pill. Sheet menu below 768px. Marks the current page. |

Rules for every component:

- Native HTML first (`button`, `a`, `label`, `nav`). Add ARIA only where HTML cannot express the meaning.
- Every interactive element is reachable and operable by keyboard, with a visible focus outline of at least 3:1.
- Prefer composition (`FeatureTile` with a `media` slot) over long prop lists.
- A button performs an action; a link navigates. Do not style one as the other.
- Name actions by what happens: "Send message", not "Submit". Use the same name in the confirmation.

## 11. Page templates

**Home.** Order of sections, adjusted from your mockup:

1. Hero (inverse): one headline, one line of support, two actions.
2. Partners: logo row, short heading.
3. Selected work: three project cards.
4. How I work: three steps. This is a true sequence, so numbered markers are justified here.
5. What I bring (inverse): the tiles for your engineering and design philosophy.
6. About summary: portrait, three sentences, three statistics.
7. Writing: latest three posts.
8. Contact: the form panel.
9. Footer (inverse): one closing line and the link columns.

**About.** Portrait, a long-form story in reading width, a short list of roles and dates, one action.

**Portfolio.** Grid of project cards. Case study pages follow one template: summary, role, problem, approach, result, screens, next project.

**Blog.** Index in reading width with title, date, reading time and one-line summary. Article template: title, date, body at 65 characters, code blocks that scroll inside their own container, related posts.

**Contact.** Heading, the form, one alternative (email address and booking link).

## 12. Accessibility checklist

Treat each item as a release requirement.

- Contrast meets AA for every token pairing (checked on the documentation page).
- Keyboard: full operation with Tab, Shift+Tab, Enter, Space and Escape. A skip link is the first focusable element.
- Landmarks: `header`, `nav` (labelled), `main`, `footer`. Headings in order.
- Forms: labels linked to controls, errors linked with `aria-describedby`, errors announced, autocomplete attributes set.
- Zoom: usable at 200% and with a 320px viewport without sideways scrolling. Never disable pinch zoom.
- Motion: reduced motion honoured.
- Language: `lang="en"` on the root. Link text makes sense out of context ("Read the case study", not "Click here").
- Test with VoiceOver on iOS and Android TalkBack, since most of your visitors are on phones.

## 13. Voice

- Plain verbs, short sentences, active voice, sentence case.
- Describe what something is or does. Do not sell it.
- Specific beats clever: "Six years building frontends for startups and government institutions" beats any slogan.
- Write errors as instructions: say what went wrong and how to fix it. Do not apologise.
- Keep one name for each action across the whole flow.

## 14. Implementation

```
src/
  app/
    globals.css          tokens, theme mapping, type scale, motion
    layout.tsx           font, skip link, navigation
    design-system/       documentation page (not indexed)
  components/
    ui/                  shadcn and system components
    layout/              Container, Section, SectionHeader
    motion/              Reveal
    site-nav.tsx
  lib/utils.ts           cn() from shadcn
```

- Dependencies: `class-variance-authority`, `@radix-ui/react-slot`, `lucide-react`, `clsx`, `tailwind-merge`. Add the shadcn `sheet` component with the CLI.
- One styling approach: Tailwind utilities, with tokens as the only source of colour, radius and motion values. No hard-coded hex values in components.
- Keep a `CHANGELOG.md` and tag each version. Changing a token is a visible, recorded event.
- Avoid heavy client-side code. Only `Reveal` and `SiteNav` are client components; everything else renders on the server.

## 15. Governance and testing

- Add a component only after the same pattern appears twice.
- Automated checks: `eslint-plugin-jsx-a11y`, axe through Playwright on every template, Lighthouse accessibility score of 100 as a floor.
- Visual regression on the documentation page with Playwright screenshots at 375px and 1280px.
- Manual: keyboard pass and one screen reader pass before each release.
- Review the whole system every quarter. Delete anything unused.

## 16. Room for the blog and newsletter

- The article template and index are already specified so posts need no new design.
- A newsletter signup reuses `TextField` and `Button`: one field, one button, one sentence about frequency. Put it at the end of each article and in the footer.
- Add `prose` styles for article body (headings, lists, quotes, code, images with captions) when the first post is written, using the same type tokens.
- Add a feed (`/rss.xml`) and per-post social images when the blog launches.

## 17. Notes on the reference mockup

These are points where the system departs from the mockup, with the reason.

1. **Navigation:** the name now sits inside the pill. In the mockup it floats outside, which would be unreadable over a white page.
2. **Text size:** several blocks use text that would be below 13px on a phone. The scale above sets the floor.
3. **Eight value tiles** are a lot for a recruiter who scans. Six is a comfortable ceiling; combine "Keep it simple" with "Simplicity is the discipline", which already has its own section.
4. **Two contact prompts** ("Let's talk" form and "Got a project in mind?") sit near each other. Keep the form on the contact page and a single closing action in the footer.
5. **Dark sections** are limited to three per page, as described in section 3.
6. **Section order:** writing comes before contact so the page ends on the action.