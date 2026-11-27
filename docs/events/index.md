---
title: Earthquake Detection
---

# Earthquake Detection

On the Seismic and Enterprise [plans](/dashboard/plans), Grillo Cloud detects earthquakes from your sensors' data automatically.

You get:

- **A live map.** Watch detections as they happen, with the stations that picked the waves, the expanding wave fronts, and a countdown to the shaking at nearby places. Replay any past event. See [Live Map](/events/live-map).
- **An automatic event catalog.** Each detected earthquake is recorded with its time, location, depth, and magnitude. See [Event Catalog](/events/event-catalog).
- **Earthquake alerts.** Email, SMS, and webhooks to your own systems, Slack, or Microsoft Teams, from a magnitude you choose. See [Earthquake Alerts](/events/earthquake-alerts).

**Live**, **Events**, and **Alerts** are in the menu bar at the top of every page.

## Requirements

- A project on the Seismic or Enterprise plan. [Contact Grillo](/support/contact) to change plan.
- Sensors sending their data to Grillo. Detection does not run on data that goes to [your own server](/dashboard/data/data-server).
- Enough stations, spread around the area you want to monitor. An event is only published once at least four stations have detected it. See [How Detection Works](/events/how-detection-works).

## Guides

- [Live Map](/events/live-map)
- [Event Catalog](/events/event-catalog)
- [Event Details](/events/event-details)
- [Earthquake Alerts](/events/earthquake-alerts)
- [How Detection Works](/events/how-detection-works)

:::warning Not a public warning service
Detected events are automatic estimates. They do not replace instructions from emergency services or an official earthquake-warning authority.
:::
