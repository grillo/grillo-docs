refer to SITE.md for visual tree structure of site

refer to https://docusaurus.io/docs/markdown-features/diagrams for how to draw diagrams

## Development server

Start dev server with hot reload:
```
npm run start
```

Start in a specific language:
```
npm run start -- --locale fr
npm run start -- --locale en
```

If port 3000 is in use, kill it first:
```
npx kill-port 3000
```

## Localization (i18n)

Site supports English (en) and French (fr).

- English docs: `docs/`
- French docs: `i18n/fr/docusaurus-plugin-content-docs/current/`

Build all locales:
```
npm run build
```

-images should be 800px wide for landscape images, and 800px tall for portrait imgs.