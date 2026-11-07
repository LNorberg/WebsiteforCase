# Notes for Claude

This repo holds the Willow Tree Publishing demo site for the Bain x Prism Fall 2026 case competition, plus the team's project agenda.

Read in this order:

1. **DESIGN.md**: the full design system (colour tokens for light and dark, fonts, type scale, spacing, every component, the willow illustration, copy voice). Use it whenever you are asked to match, extend or reproduce the site's look, including in slides or a different codebase.
2. **docs/screenshots/**: rendered pages in light and dark, desktop and mobile. View these to see the design rather than infer it from CSS.
3. **README.md**: how to run, present and edit the site.
4. **AGENDA.md**: the case brief, evidence, draft recommendation and open decisions. Update its changelog when the plan changes.

Working rules:

- All copy lives in `assets/js/content.js`; `app.js` only renders. Add content as sections with an existing component `type` before inventing new components.
- New CSS must use the tokens in `:root` (and add dark-mode values for any new token) rather than hard-coded colours.
- No build step or dependencies. Keep it that way so it runs from `index.html` and on GitHub Pages.
- Text starting with "TBD" is intentionally shown as a placeholder; don't delete it unless replacing it with real content.
