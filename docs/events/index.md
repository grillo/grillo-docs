---
title: Earthquake Detection
---

# Earthquake Detection

On the Seismic and Enterprise [plans](/dashboard/plans), Grillo Cloud detects earthquakes from your sensors' data automatically.

You get:

- **An automatic event catalog.** Each detected earthquake is recorded with its time, location, depth, and magnitude.
- **A live map.** Watch detections as they happen, with the stations that picked the waves and the estimated wave fronts, or run a simulation.

**Live map** and **Events** are in the menu bar at the top of every page. Detected events are also available from the [Data API](/dashboard/data/api#events).

## Requirements

- A project on the Seismic or Enterprise plan. [Contact Grillo](/support/contact) to change plan.
- Sensors recording continuously and sending their data to Grillo. Detection does not run on [triggered recordings](/dashboard/sensors/recording-mode) or on data that goes to [your own server](/dashboard/data/data-server).
- Enough stations, spread around the area you want to monitor. An event is only published once at least four stations have detected it. See [How Detection Works](/events/how-detection-works).

## Guides

- [Event Catalog](/events/event-catalog)
- [Event Details](/events/event-details)
- [Live Map](/events/live-map)
- [How Detection Works](/events/how-detection-works)

:::warning Not a public warning service
Detected events are automatic estimates. They do not replace instructions from emergency services or an official earthquake-warning authority.
:::
