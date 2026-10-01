# Grillo Docs

English documentation for [docs.grillo.io](https://docs.grillo.io), covering Grillo sensors (Pulse, One, Slide), Grillo Cloud and its SISTEM add-on, Grillo Cloud for Slide, seismic concepts, and support.

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
├── getting-started/      # Journey selection and product overview
├── hardware/             # Sensor installation guides
│   ├── grillo-pulse/
│   ├── grillo-one/
│   └── grillo-slide/     # Includes the Grillo Field app steps
├── dashboard/            # Grillo Cloud for Pulse and One (cloud.grillo.io)
├── events/               # SISTEM add-on: events and live map
├── slide-cloud/          # Grillo Cloud for Slide (slide.grillo.io)
├── modules/              # Upcoming add-ons
├── concepts/             # Seismic and EEW background
└── support/              # FAQ and contact
```

Folder names under `docs/` are public URLs. Keep them stable even when a product is renamed, and change the page title instead.

See [SITE.md](SITE.md) for the supported navigation.

## Content rules

- Document only behavior verified against the implementing repository and target release.
- Write for sensor owners and Grillo Cloud users; keep internal hardware and firmware implementation details out of public guides.
- Use the product names from `grillo-web`: **Grillo Cloud**, **SISTEM**, **Grillo Pulse**, **Grillo One**, **Grillo Slide**. Treat `grillo-web` as naming and positioning context, not an electrical or API authority.
- Use the labels shown in the product UI: **project**, **claim**, **Device ID**, **station code** in Grillo Cloud; **site**, **sensor group**, **base**, **rover** for Slide.
- Do not publish planned controls, placeholder values, unapproved warranty terms, or an API without a deployed contract.
- Keep documentation English-only until the content and translation process are stable.

## Images

- Use current product and Grillo Cloud images only.
- Add descriptive alt text.
- Keep interface text readable at common documentation widths.
- Avoid placeholder diagrams in published pages.

## Source repositories

The Linear projects name the repository for each product. Check the page against that repository's `main` before changing it.

| Documentation area | Linear project | Repository |
|---|---|---|
| Grillo Pulse (current hardware) | Grillo Pulse Sensor | `grillo-sensor-pulse` |
| Grillo Pulse firmware 1.x (fielded units) | Veye Haiti EEW | `grillo-firmware-pulse` |
| Grillo One | none yet | `grillo-firmware-one` |
| Grillo Slide sensor | Grillo Slide Sensor | `grillo-sensor-slide` (`firmware/`, `pcb/`) |
| Grillo Field app | Grillo Slide Mobile App | `grillo-sensor-slide` (`cloud/apps/field`) |
| Grillo Cloud and SISTEM | Grillo Pulse Cloud | `grillo-platform` (`frontend/`, `services/`) |
| Grillo Cloud for Slide | Grillo Slide Cloud | `grillo-sensor-slide` (`cloud/`, `cloud/apps/web`) |
| Product names and positioning | — | `grillo-web` |

`grillo-cloud-frontend`, `grillo-cloud-backend`, and `grillo-client-backend` are superseded by `grillo-platform` and are no longer a source for these docs.

## Deployment

GitHub Actions builds and deploys the site to GitHub Pages after changes reach `main`.
