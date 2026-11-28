# grillo-docs

English documentation for docs.grillo.io, built with Astro Starlight. Pages live in `src/content/docs/`, images in `public/img/`, and the sidebar in `astro.config.mjs`. See `README.md` for the content structure and `SITE.md` for the site map.

## Commands

- `npm ci && npm run dev`: local site at http://localhost:4321 (search works only in a build: `npm run build && npm run preview`)
- `npm run typecheck`
- `npm run build`: fails on broken internal links and anchors, and on component part names (below)

## Writing pages

- Admonitions are `:::note`, `:::tip`, `:::caution` and `:::danger`, with an optional title: `:::caution[Power it only from 12 V DC]`.
- Diagrams: use a ```` ```mermaid ```` block. Add `:::accent` to a node to draw it in Grillo orange.
- Each page is also published as Markdown at its URL plus `.md`, and all pages together at `/llms.txt` and `/llms-full.txt`.

## Copy rules

- Never name the parts inside our products: no modem, chip or sensor makers or model numbers (e.g. SIMCom, A7670G, ESP32, ADS1262, ADXL355). Describe what the part does instead ("an LTE Cat 1 modem", "a 4.5 Hz geophone"). `scripts/check-part-names.mjs` runs before every build and fails it if one appears; add new part names to its list.
