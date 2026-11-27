---
title: Grillo Cloud
---

# Grillo Cloud

Grillo Cloud at [cloud.grillo.io](https://cloud.grillo.io) is where you watch your Grillo Pulse and Grillo One sensors and work with their data: see earthquakes as they are detected, check every sensor's health and connectivity, browse events or triggers, and view and download recorded waveforms.

Grillo Slide uses a separate dashboard. See [Grillo Cloud for Slide](/slide-cloud).

## What you can do

On every plan:

- See every sensor in one list, with its state, connection, firmware, and last report
- Check each sensor's connectivity over the last 24 hours to 90 days, its signal, outages and restarts, and its location
- As an owner or admin, claim sensors, edit their station details, and manage who belongs to the project

Then, depending on your project's [plan](/dashboard/plans):

- **Structural:** Grillo Cloud records [triggers](/dashboard/triggers) when shaking at your sensors crosses the project's threshold, and sends [trigger alerts](/dashboard/alerts) by email, webhook, or SMS
- **Network:** your sensors send their seismic data to [your own server](/dashboard/data/data-server); Grillo Cloud keeps their health and connectivity
- **Seismic and Enterprise:** [automatic earthquake detection](/events), a [live map](/events/live-map), an [event catalog](/events/event-catalog), [earthquake alerts](/events/earthquake-alerts), and [waveforms](/dashboard/data/waveforms)

## Navigation

The tabs along the top of every page depend on the project's plan:

| Plan | Tabs |
|---|---|
| **Seismic**, **Enterprise** | Live, Sensors, Events, Alerts, Waveforms |
| **Structural** | Live, Sensors, Triggers, Waveforms |
| **Network** | Sensors |

| Tab | Use it to |
|---|---|
| **Live** | Watch stations and earthquake detections as they happen, or replay a past event. See [Live Map](/events/live-map). |
| **Sensors** | Check the health of every sensor, add a sensor, and open a sensor's page. See [Sensors](/dashboard/sensors). |
| **Events** | Browse the earthquakes Grillo Cloud has detected. See [Event Catalog](/events/event-catalog). |
| **Alerts** | See every earthquake alert decision and what your project was sent. See [Earthquake Alerts](/events/earthquake-alerts). |
| **Triggers** | Browse the shaking your sensors recorded. See [Triggers](/dashboard/triggers). |
| **Waveforms** | View recorded waveforms as charts, and download them. See [Waveforms](/dashboard/data/waveforms). |

Viewers see fewer tabs; see [Roles](/dashboard/organizations#roles).

To the right of the tabs:

- **Connection:** **Live** while the dashboard is receiving updates. If the connection drops it shows **Reconnecting** or **Offline**, and catches up by itself when it comes back. Pages update as data arrives; there is nothing to refresh.
- **Project selector:** the projects you belong to, with your role and each project's plan. Pick one to switch the whole dashboard to it. If you belong to one project, it shows just its name.
- **Account menu** (your initials): **Your settings**, **Project settings**, the **Theme** (**System**, **Light**, or **Dark**, remembered in this browser), and **Sign out**.

All times in Grillo Cloud are in UTC. The dashboard is in English.

## What Grillo Support still does

Some changes are not in the dashboard yet. [Contact Grillo Support](/support/contact) to:

- Change your plan, billing, or contract. See [Billing](/dashboard/billing).
- Update a sensor's firmware. See [Update Firmware](/dashboard/sensors/firmware-updates).
- Create a new project.
