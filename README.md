# Willow Tree Publishing: case demo

Working repository for the Bain x Prism Fall 2026 case competition.

- **[AGENDA.md](AGENDA.md)** is the living record of project aims, evidence, the draft recommendation, open decisions and a changelog. Update it whenever the plan changes.
- **[DESIGN.md](DESIGN.md)** documents the visual design system (colours, type, layout, components) so it can be reproduced in slides or other pages. Screenshots are in [docs/screenshots](docs/screenshots/).
- **The demo website** (everything else) is a visual aid and technical demo for the presentation.

![Home page](docs/screenshots/desktop-light-home.png)

## Running the site

No build step or dependencies. Either open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

then visit http://localhost:8000. To publish, enable GitHub Pages on the `main` branch (Settings → Pages); the site will be at `https://lnorberg.github.io/WebsiteforCase/`.

## Presenting

| Key | Action |
|---|---|
| P | Toggle presenter notes (shows which strategy pillar each section illustrates) |
| ← / → | Previous / next page |

The read-along on the Willow Tree Kids page uses the browser's built-in speech synthesis. Chrome and Edge give the best voices and word highlighting; test on the presenting machine before the day.

## Editing content

All copy lives in `assets/js/content.js`. Pages are lists of sections, and each section names a component `type`:

| Type | Use |
|---|---|
| `hero` | Large opening headline, text, buttons, willow illustration |
| `text` | Short lead paragraph |
| `features` | Grid of titled items, optionally linked |
| `characters` | Character "book spines" on a shelf |
| `readAlong` | Narrated story with word highlighting |
| `media` | Video, audio or YouTube embed (empty `src` shows a slot) |
| `tiers` | Subscription or pricing options |
| `stats` | Figures with a source line |
| `steps` | Numbered sequence, e.g. a roadmap |
| `placeholder` | Reserved space for content to come |

Any section can carry a `note: { pillar, text }` for presenter mode and `draft: true` to outline it as unfinished. Text starting with `TBD` is highlighted so gaps are visible.

To add a page, add an entry to `nav` and a matching key in `pages`.

## Structure

```
index.html            page shell
assets/css/main.css   design tokens (light and dark), layout, components
assets/js/content.js  all content
assets/js/app.js      renderer, router, presenter mode, read-along
assets/media/         images, audio, video
```
