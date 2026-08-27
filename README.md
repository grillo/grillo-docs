# Grillo Docs

English documentation for [docs.grillo.io](https://docs.grillo.io), covering Grillo products, hosted Grillo Platform and its modules, seismic concepts, and support.

## Quick start

```bash
npm ci
npm run start
```

The local site runs at `http://localhost:3000`.

## Checks

```bash
npm run typecheck
npm run build
```

The production build fails on broken internal links.

## Content structure

```text
docs/
├── getting-started/      # Journey selection and ecosystem overview
├── hardware/             # Product-specific hardware documentation
│   └── grillo-pulse/
├── dashboard/            # Hosted Grillo Platform
├── events/               # Earthquake Monitoring module
├── modules/              # Current and upcoming Platform modules
├── concepts/             # Seismic and EEW background
└── support/              # FAQ and contact
```

The **Products** sidebar level is intentionally generic. Add future product families as nested sections rather than flattening every device into top-level navigation. Monitoring applications belong under **Grillo Platform → Modules**, with separate documentation for each workflow.

See [SITE.md](SITE.md) for the supported navigation.

## Content rules

- Document only behavior verified against the implementing repository and target release.
- Write for sensor owners and Platform operators; keep internal hardware and firmware implementation details out of public guides.
- Treat `grillo-web` as product-positioning context, not an electrical or API authority.
- Use **claim sensor**, **Device ID**, **station code**, **organization**, and **network** consistently with Grillo Platform.
- Do not publish planned controls, placeholder values, unapproved warranty terms, or an API without a deployed contract.
- Keep documentation English-only until the content and translation process are stable.

## Images

- Use current product and Platform images only.
- Add descriptive alt text.
- Keep interface text readable at common documentation widths.
- Avoid placeholder diagrams in published pages.

## Related repositories

| Repository | Documentation relationship |
|---|---|
| `../grillo-sensor-pulse` | Pulse hardware and firmware source of truth |
| `../grillo-cloud-frontend` | Current implementation of hosted Grillo Platform |
| `../grillo-client-backend` | Earthquake Monitoring processing |
| `../grillo-cloud-backend` | Device-health ingestion |
| `../grillo-web` | Public product positioning |

## Deployment

GitHub Actions builds and deploys the site to GitHub Pages after changes reach `main`.
