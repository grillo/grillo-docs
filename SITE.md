# Grillo Docs Site Map

The documentation is English-only.

```text
/                           # Task-based documentation home
├── getting-started/        # Product overview and journey selection
├── hardware/
│   ├── grillo-pulse/       # Pulse installation
│   ├── grillo-one/         # One connection and installation
│   └── grillo-slide/       # Slide SIM/APN setup (Grillo Field app) and installation
├── dashboard/              # Grillo Cloud for Pulse and One
├── events/                 # Earthquake detection (Seismic and Enterprise plans)
├── slide-cloud/            # Grillo Cloud for Slide
├── modules/                # Structural monitoring
├── concepts/               # Seismic and EEW background
└── support/                # FAQ and contact information
```

## Supported navigation

The sidebar is defined in `astro.config.mjs` and has two levels: a section, then its pages. Page labels come from each page's `sidebar.label`, or its `title`.

### Start here

- Overview
- What is Grillo?
- Choosing your sensor
- All sensors

### Grillo Pulse

- Overview
- Pulse quick start
- What's in the box
- Claim in Grillo Cloud
- Connectivity
- Cellular and SIM
- Physical installation
- Troubleshooting

### Grillo One

- Overview
- Connect and install

### Grillo Slide

- Overview
- Fit the SIM and set the APN
- Install on site
- Troubleshooting

### Grillo Cloud

- Overview
- Create an account
- Projects and settings
- Add colleagues
- Plans
- Home page
- Billing and account

### Sensors in Grillo Cloud

- Overview
- Claim a sensor
- Network and station codes
- Sensor table
- Sensor details
- Edit a sensor
- Recording mode and thresholds
- Verify sensor status
- Update firmware

### Structural monitoring

- Overview
- Triggers
- Trigger alerts

### Earthquake detection

- Overview
- Event catalog
- Event details
- Live map
- Earthquake alerts
- How detection works

### Data

- Waveforms
- Stream data to your own ringserver
- Send data to your own server
- Data API

### Grillo Cloud for Slide

- Overview
- Sites and devices
- Export data
- Firmware and API access

### Concepts

- Seismic networks
- Sensor placement
- Data quality
- Earthquake early warning
- Landslide monitoring with GNSS
- Connected sensor networks

### Support

- Frequently asked questions
- Contact support

## Deferred content

- On-premises Grillo Cloud (the appliance) will be documented when it is released.
- Self-setup of a new Slide kit, Slide alerts, and the iOS app will be documented when they ship.
- Additional languages will return after the English guides are stable.
