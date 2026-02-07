# Grillo Docs Site Map

## Locales

| Locale | Label | URL Path |
|--------|-------|----------|
| English (default) | English | `/` |
| French | Français | `/fr/` |

## Site Structure

```
/                           # Introduction (English)
├── getting-started/        # Getting Started
│   ├── what-is-grillo
│   └── choosing-your-sensor
│
├── hardware/               # Hardware
│   ├── grillo-one/
│   │   ├── whats-in-the-box
│   │   ├── physical-installation
│   │   ├── network-setup
│   │   ├── provisioning
│   │   └── troubleshooting
│   │
│   └── grillo-pulse/
│       ├── whats-in-the-box
│       ├── physical-installation
│       ├── network-setup
│       ├── sim-card-setup
│       ├── provisioning
│       └── troubleshooting
│
├── dashboard/              # Dashboard
│   ├── account/
│   │   ├── creating-account
│   │   ├── accepting-invites
│   │   ├── profile-settings
│   │   └── security
│   │
│   ├── organizations/
│   │   ├── creating-org
│   │   ├── managing-members
│   │   └── user-roles
│   │
│   ├── networks/
│   │   ├── creating-network
│   │   ├── network-settings
│   │   └── network-best-practices
│   │
│   ├── sensors/
│   │   ├── adding-sensor
│   │   ├── map-view
│   │   ├── table-view
│   │   ├── sensor-details
│   │   ├── configuring-sensor
│   │   ├── station-naming
│   │   ├── location-info
│   │   └── sensor-status
│   │
│   └── settings/
│       ├── notifications
│       └── api-keys
│
├── events/                 # Events
│   ├── how-detection-works
│   ├── event-catalog
│   ├── event-details
│   ├── alerts/
│   │   ├── alert-configuration
│   │   └── api-integration
│   └── data-export
│
├── concepts/               # Concepts
│   ├── seismic-networks
│   ├── iot-approach
│   ├── earthquake-early-warning
│   ├── sensor-placement
│   └── data-quality
│
├── api/                    # API Reference
│   ├── authentication
│   ├── endpoints
│   ├── webhooks
│   └── rate-limits
│
└── support/                # Support
    ├── faq
    ├── contact
    └── warranty
```

## i18n Folder Structure

```
i18n/
└── fr/                                         # French translations
    ├── code.json                               # UI strings (buttons, labels, etc.)
    ├── docusaurus-theme-classic/
    │   ├── navbar.json                         # Navbar translations
    │   └── footer.json                         # Footer translations
    ├── docusaurus-plugin-content-docs/
    │   └── current.json                        # Sidebar category labels
    └── docusaurus-plugin-content-docs/
        └── current/                            # Translated markdown docs
            ├── intro.md
            ├── getting-started/
            ├── hardware/
            ├── dashboard/
            ├── events/
            ├── concepts/
            ├── api/
            └── support/
```

## Page Count

| Section | Pages |
|---------|-------|
| Getting Started | 3 |
| Hardware | 14 |
| Dashboard | 20 |
| Events | 8 |
| Concepts | 5 |
| API Reference | 5 |
| Support | 3 |
| **Total per locale** | **58** |

## Adding a New Locale

1. Add the locale to `docusaurus.config.ts`:
   ```ts
   i18n: {
     defaultLocale: 'en',
     locales: ['en', 'fr', 'es'],  // Add new locale here
     localeConfigs: {
       en: { label: 'English' },
       fr: { label: 'Français' },
       es: { label: 'Español' },   // Add label here
     },
   },
   ```

2. Generate translation files:
   ```bash
   npm run write-translations -- --locale es
   ```

3. Copy docs to translate:
   ```bash
   cp -r docs/* i18n/es/docusaurus-plugin-content-docs/current/
   ```

4. Translate the JSON files in `i18n/es/` and markdown files in `i18n/es/docusaurus-plugin-content-docs/current/`

5. Test locally:
   ```bash
   npm run start -- --locale es
   ```
