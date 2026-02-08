# Grillo Docs

Documentation site at [docs.grillo.io](https://docs.grillo.io). Covers hardware setup, dashboard usage, EEW concepts, and API reference for the Grillo sensor ecosystem. Built with Docusaurus 3.9, available in English and French.

## 🚀 Quick Start

```bash
npm install
npm run start             # Dev server at http://localhost:3000
npm run start -- --locale fr  # Start in French
npm run build             # Build all locales
```

## 📂 Content Structure

```
docs/                     # English documentation (default)
├── getting-started/      # Setup guides
├── hardware/             # Pulse and One sensor docs
├── dashboard/            # Cloud dashboard usage
├── events/               # Seismic event documentation
├── concepts/             # EEW technical concepts
├── api/                  # API reference
└── support/              # Troubleshooting

i18n/fr/                  # French translations (mirrors English structure)
```

See [SITE.md](SITE.md) for a complete visual tree of all pages.

## 🌐 Localization

| Language | Source | Status |
|----------|--------|--------|
| English | `docs/` | Default |
| French | `i18n/fr/docusaurus-plugin-content-docs/current/` | Translation |

French files must mirror the English directory structure exactly. Build generates both locales.

## 🛠️ Development

```bash
npm run start             # Dev server with hot reload
npm run build             # Production build (both locales)
npx kill-port 3000        # If port is in use
```

### Image Guidelines

- Landscape images: 800px wide
- Portrait images: 800px tall

## 🚀 Deployment

Deployed to GitHub Pages. Push to main triggers build and deploy.

## 🔗 Related Repos

| Repo | What It Documents |
|------|------------------|
| [grillo-firmware-pulse](../grillo-firmware-pulse) | Pulse sensor hardware setup and configuration |
| [grillo-firmware-one](../grillo-firmware-one) | One sensor hardware setup and configuration |
| [grillo-cloud-frontend](../grillo-cloud-frontend) | Dashboard features and usage |
| [grillo-web](../grillo-web) | Public website that links to these docs |
