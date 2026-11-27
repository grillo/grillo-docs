# grillo-docs

English documentation for docs.grillo.io, built with Docusaurus. See `README.md` for the content structure and `SITE.md` for the site map.

## Commands

- `npm ci && npm run start`: local site at http://localhost:3000
- `npm run typecheck`
- `npm run build`: fails on broken internal links, and on component part names (below)

## Copy rules

- Never name the parts inside our products: no modem, chip or sensor makers or model numbers (e.g. SIMCom, A7670G, ESP32, ADS1262, ADXL355). Describe what the part does instead ("an LTE Cat 1 modem", "a 4.5 Hz geophone"). `scripts/check-part-names.mjs` runs before every build and fails it if one appears; add new part names to its list.
