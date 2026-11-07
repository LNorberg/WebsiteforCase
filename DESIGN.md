# Design system: Willow Tree demo site

A complete description of the site's visual design, written so that a person or another AI can reproduce the look and feel in a new page, a slide deck, or a different codebase without reading every line of CSS. The source of truth is `assets/css/main.css`; if this file and the CSS disagree, the CSS wins and this file should be updated.

Rendered references live in [`docs/screenshots/`](docs/screenshots/) (see the index at the bottom).

---

## 1. Concept

**"A storybook publisher with a quiet, modern shelf."** Warm paper background, deep ink text, a bookish serif for headlines, a clean contemporary sans for everything else, and a small palette drawn from a willow tree: leaf green, sunshine yellow, sky blue, berry pink. The single illustration is a generated SVG willow whose strands sway gently over an open yellow book.

Design principles the code follows:

- **Restraint.** Lots of whitespace, few borders, no drop shadows (except the subtle inset on book spines), no gradients except the diagonal-hatch placeholder.
- **Colour as accent, not fill.** Most surfaces are paper or white. Colour shows up in thin rules (3px top borders, 3px left borders), pill buttons, and the book-spine cards.
- **Rounded only where it is friendly.** Buttons are full pills (999px); cards are barely rounded (6px); spines are 4px at the top only.
- **Honest drafts.** Unfinished content is visibly marked (yellow-washed italic "TBD" text, dashed outlines, hatched media slots) rather than hidden.
- **Works in both themes.** Every colour is a CSS custom property redefined under `prefers-color-scheme: dark`.

## 2. Colour tokens

| Token | Light | Dark | Used for |
|---|---|---|---|
| `--paper` | `#FBFBF7` | `#131A21` | Page background, header background |
| `--surface` | `#FFFFFF` | `#1A232D` | Cards: read-along panel, tiers, media frame, kbd |
| `--ink` | `#1C2433` | `#ECEFE6` | Body text, headlines, outline-button border |
| `--ink-soft` | `#4A5466` | `#A9B3A6` | Secondary text, nav links, ledes, captions |
| `--line` | `#DADFD2` | `#2C3843` | Hairline borders, dividers, hatch lines |
| `--leaf` | `#5F7F2E` | `#9DBE63` | Primary buttons, active nav underline, feature rule #1, stat rule, step circles |
| `--leaf-deep` | `#3E5A1E` | `#B9D586` | Brand wordmark, links, shelf plank, stat numbers, willow bough |
| `--on-leaf` | `#FFFFFF` | `#131A21` | Text on leaf-coloured fills |
| `--sun` | `#F2B630` | `#F5C452` | Focus ring, read-along current word, presenter note rule, open book, feature rule #2 |
| `--sun-wash` | `#FDF1CF` | `#3A3220` | Button hover, TBD highlight, presenter note background |
| `--sky` | `#BFDCE5` | `#5E8FA0` | Feature rule #4 |
| `--berry` | `#B84A6A` | `#D9708E` | Feature rule #3 |
| `--spine-ink` | `#1C2433` | `#131A21` | Text on book spines (always dark) |

Fixed (theme-independent) spine fills: leaf `#A9C77A`, sun `var(--sun)`, sky `#BFDCE5`, berry `#E9A6B9`. Spines stay pastel in dark mode, so their text is always dark.

**Accent rotation.** Where a row of items gets coloured rules, the order is leaf → sun → berry → sky (`.feature:nth-child(n)`).

## 3. Typography

Loaded from Google Fonts in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Young+Serif&display=swap" rel="stylesheet">
```

| Role | Family | Weight | Notes |
|---|---|---|---|
| Headlines (h1–h3), brand wordmark, prices, stat values, step numbers, read-along story, spine titles | **Young Serif** (`--serif`, fallback Georgia) | 400 only | Never bolded. Line-height 1.15. |
| Body, UI, buttons, nav | **Instrument Sans** (`--sans`, fallback system-ui) | 400 body, 500 buttons, 600 note titles | Line-height 1.55. |

Type scale (ratio ≈ 1.25, base 17px):

| Token | Size | Used for |
|---|---|---|
| `--t-sm` | 0.875rem | Captions, footer, sources, stat labels, small buttons |
| `--t-base` | 1.0625rem | Body |
| `--t-lg` | 1.3rem | h3, lede paragraphs |
| `--t-xl` | 1.75rem | Brand wordmark, spine titles |
| `--t-2xl` | 2.4rem | h2, prices, stat values |
| `--t-3xl` | clamp(2.3rem, 4.6vw, 3.6rem) | h1 (hero), letter-spacing −0.01em |

Measure: paragraphs max 68ch; ledes max 46ch; hero h1 max 16ch; read-along story max 34ch at clamp(1.35rem, 2.6vw, 1.85rem), line-height 1.6.

## 4. Layout and spacing

- **Container** `.wrap`: `width: min(1120px, 100% - 2 * var(--gap))`, centred.
- **Gap** `--gap`: clamp(1rem, 2.5vw, 1.75rem); used for grid gaps and header spacing.
- **Vertical rhythm:** `main` padding clamp(2rem, 5vw, 4rem); each section (`.block`) has bottom margin clamp(3rem, 7vw, 5.5rem). Sections are separated by space, never by rules.
- **Header:** sticky, paper background, 1px `--line` bottom border. Brand left, nav pushed right with `margin-left: auto`, presenter toggle at far right.
- **Footer:** 1px top border, small muted text left, keyboard hints right.
- **Grids** all use `repeat(auto-fit, minmax(Npx, 1fr))`: features 230px, tiers 240px, steps 240px, stats 190px, spines 140px.
- **Breakpoint** 760px: hero stacks with the art first (max 360px wide), nav wraps to its own full-width row, spines shorten.

## 5. Components

Each is a `type` in `assets/js/content.js`, drawn by a function in `app.js` (`const C = {...}`). Every section is wrapped in `<section class="block block-{type}">` with an optional serif `h2` heading.

| Component | Look |
|---|---|
| **hero** | Two-column grid (1.1fr / 1fr). Left: h1, muted lede, pill buttons. Right: willow SVG (section 6). |
| **text** | A single lede paragraph (`--t-lg`, `--ink-soft`) under the h2. |
| **features** | Columns with a 3px coloured **top** border (leaf/sun/berry/sky in turn), serif h3 (underlined link if `href`), muted paragraph. No card background. |
| **characters** | Book spines on a shelf: pastel columns 300px tall (even ones 270px, bottom-aligned so heights stagger), 4px top radius, inset right-edge shadow `inset -8px 0 0 rgb(0 0 0 / .08)`, serif title set vertically (`writing-mode: vertical-rl; rotate(180deg)`), small blurb at the bottom. The list sits on a 10px `--leaf-deep` bottom border (the shelf plank). |
| **readAlong** | `--surface` card, 1px `--line` border, 6px radius. Large serif story text; each word is a `span.w`. Spoken word gets `--sun` background; read words fade to `--ink-soft`. Controls: primary pill "Play story", outline pill "Stop", a small "Speed" select. |
| **media** | 16:9 frame, 1px border, 6px radius. Empty state: diagonal hatch `repeating-linear-gradient(135deg, transparent 0 14px, var(--line) 14px 15px)` with a centred paper-coloured label "Media slot". |
| **tiers** | Surface cards with 1.5px `--line` border; the featured tier gets a 2.5px `--leaf` border and a primary button. Price in serif `--t-2xl` with a small sans period ("per month"). |
| **stats** | `<dl>`; each stat has a 3px `--leaf` **left** border, big serif `--leaf-deep` number above a small muted label. Source line below in `--t-sm`. |
| **steps** | Numbered columns; the number is a 2.4rem `--leaf` circle with serif numeral in `--on-leaf`, above an h3 and muted text. |
| **placeholder** | The hatched empty frame with a text label. |

Buttons (`.btn`): pill, 1.5px `--ink` border, transparent fill, 500 weight; hover fills `--sun-wash`. `.btn-primary` is solid `--leaf` with `--on-leaf` text, hover `--leaf-deep`. `.btn-small` for the header toggle; when pressed it turns solid `--sun` with dark text.

Nav links: `--ink-soft`, no underline; the current page is `--ink` with a 2px `--leaf` bottom border.

## 6. Illustration: the willow

Generated in `app.js → willow()` as an inline SVG, `viewBox="0 0 400 330"`:

- A quadratic-curve **bough** from (20,70) through control (200,−20) to (380,60): `--leaf-deep`, stroke 7, round caps.
- **15 strands** hang from points along the bough. Each is a thin path (`--leaf`, stroke 1.4, opacity .7) with 7 ellipse leaves (rx 3.2, ry 9) alternating sides and rotated ±28°. Every third strand uses `--leaf-deep` leaves. Strand length varies with a sine function and is longest in the middle.
- An **open book** at the bottom: two curved page shapes in `--sun` with a 1.5px `--ink` outline.
- **Motion:** each strand sways ±2.2° over 6s, alternating, with staggered delays, only when `prefers-reduced-motion: no-preference`.

To reuse the motif elsewhere, copy the `willow()` function; it only depends on the CSS classes `.bough`, `.strand`, `.leaves`, `.book`.

## 7. States and conventions

- **TBD text:** any string starting with "TBD" renders as `span.tbd`: italic, `--sun-wash` background, 1.5px dashed `--sun` underline.
- **Draft sections:** `draft: true` adds a 2px dashed `--line` outline offset 1rem.
- **Presenter notes:** hidden by default; pressing **P** adds `body.presenting`, revealing each section's note as a `--sun-wash` box with a 5px `--sun` left border, a 600-weight pillar name and a one-line explanation.
- **Focus:** 3px `--sun` outline, 3px offset, on every focusable element.
- **Toast:** dark pill (`--ink` background, `--paper` text) that slides up from the bottom centre for 2.6s.
- **Keyboard:** ←/→ cycle pages, P toggles notes; ignored while typing in form fields.

## 8. Voice and copy

Short, warm, plain-English sentences; no exclamation marks; commas rather than dashes. Headlines are sentence case ("One house, three shelves", "Healthy screen time, built from books"). Buttons are verb-first ("Meet the characters", "Start a subscription"). Presenter notes name a strategy pillar, then say in one or two sentences why the section matters to the case.

## 9. Replicating the design elsewhere

**In another web page:** copy the `:root` and dark-mode token blocks, the Google Fonts link, and the base rules (sections 2–4). Then pick the components you need from `main.css`; each is self-contained under its own comment header.

**In slides (PowerPoint, Google Slides, Canva):** background `#FBFBF7`; titles Young Serif 400 in `#1C2433`; body Instrument Sans in `#4A5466`; one accent per slide from leaf `#5F7F2E`, sun `#F2B630`, berry `#B84A6A`, sky `#BFDCE5`; thin coloured rules instead of filled boxes; big serif numbers in `#3E5A1E` for stats; pill-shaped call-outs. The willow and book from `docs/screenshots/desktop-light-home.png` can be cropped as a title-slide image.

**Minimal starter** that already looks on-brand:

```html
<link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&family=Young+Serif&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/main.css">
<main class="wrap">
  <section class="block">
    <h2>Section heading</h2>
    <p class="lede">A short muted lead paragraph.</p>
    <div class="actions"><a class="btn btn-primary" href="#">Primary</a><a class="btn" href="#">Secondary</a></div>
  </section>
</main>
```

## 10. Screenshot index

All taken with the real fonts, reduced motion on. Desktop is 1440px wide; mobile is 390px at 2×.

| File | Shows |
|---|---|
| `desktop-light-home.png` / `desktop-dark-home.png` | Hero with willow, feature columns |
| `desktop-light-home-presenter.png` | Same page with presenter notes on (P) |
| `desktop-light-kids.png` / `desktop-dark-kids.png` | Book-spine characters, read-along, media slot |
| `desktop-light-kids-presenter.png` | Kids page with presenter notes |
| `component-readalong-highlight.png` | Read-along mid-sentence: read words faded, current word highlighted |
| `desktop-{light,dark}-club.png` | Subscription tiers, featured tier |
| `desktop-{light,dark}-partners.png` | Features grid, draft placeholder |
| `desktop-{light,dark}-case.png` | Stats and numbered roadmap steps |
| `mobile-{light,dark}-{home,kids}.png` | Stacked mobile layout |
