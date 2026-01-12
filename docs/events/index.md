---
sidebar_position: 4
title: Events
---

# Events & Detection

Grillo Cloud's earthquake detection system automatically identifies seismic events from your network and alerts you in real-time.

:::info Premium Feature
Event detection is available as an add-on. [Contact sales](https://grillo.io) for pricing.
:::

## Live Map

Watch earthquakes unfold in real-time with the Live Map. See station detections as they happen and visualize P and S wave propagation as expanding circles from the epicenter.

![Live Map](/img/screenshots/11-live-map.png)

[Live Map guide →](/events/live-map)

## Features

| Feature | Description |
|---------|-------------|
| [Live Map](/events/live-map) | Real-time visualization of detections and wave propagation |
| [Event Catalog](/events/event-catalog) | Searchable database of all detected earthquakes |
| [Event Details](/events/event-details) | Magnitude, location, depth, and waveform data |
| [Alerts](/events/alerts) | Email, webhook, and API notifications |
| [Data Export](/events/data-export) | CSV, JSON, QuakeML, and KML formats |

## How it works

```
Sensor Data → Detection Algorithm → Event Processing → Alerts & Catalog
```

[How detection works →](/events/how-detection-works)

## Requirements

| Requirement | Minimum | Recommended |
|-------------|---------|-------------|
| Sensors | 4 | 10+ |
| Coverage | 10 km radius | 50+ km radius |
| Online sensors | 3+ | 80%+ |
| Location accuracy | 100m | 10m |

## Getting started

1. [Contact sales](https://grillo.io) to enable Events for your network
2. Ensure sensors have accurate locations configured
3. Enable detection in Network Settings
4. Configure [alert thresholds](/events/alerts/alert-configuration)
