---
title: Grillo Cloud
---

# Grillo Cloud

Grillo Cloud at [cloud.grillo.io](https://cloud.grillo.io) is where you manage Grillo Pulse and Grillo One sensors and work with their data: claim them, name their stations, watch their health, update their firmware, and see what they record.

Grillo Slide uses a separate dashboard. See [Grillo Cloud for Slide](/slide-cloud).

## What you can do

On every plan:

- Claim sensors by Device ID and give each one an FDSN station code
- See every sensor in a table or on a map, with online status and last-seen time
- Check connection type, signal strength, SIM, power, battery, and firmware for each sensor
- Review connection history, interruptions, and reboots
- Update sensor firmware over the air
- Read your project's data from your own software with the [Data API](/dashboard/data/api)

Then, depending on your project's [plan](/dashboard/plans):

- **Structural:** sensors record [triggers](/dashboard/triggers) when shaking crosses their threshold, and Grillo emails you when shaking reaches an [alert level](/dashboard/alerts)
- **Network:** sensors stream continuously; [review and download waveforms](/dashboard/data/waveforms) and [stream them to your own ringserver](/dashboard/data/realtime-export)
- **Seismic and Enterprise:** everything in Network, plus [automatic earthquake detection](/events), an event catalog, and a live map

## First-sensor workflow

1. [Get an account](/dashboard/account/creating-account) from a project invitation.
2. Open **Sensors** and [claim the sensor](/dashboard/sensors/adding-sensor) with its Device ID and a station code.
3. [Add its location](/dashboard/sensors/configuring-sensor).
4. Power and connect the sensor by following its hardware guide: [Grillo Pulse](/hardware/grillo-pulse) or [Grillo One](/hardware/grillo-one).
5. [Verify that it is online](/dashboard/sensors/sensor-status).

## Navigation

The top of the sidebar shows the project and its plan, for example **Structural plan**. If you belong to more than one project, use the switcher next to the project name.

The sidebar has these groups:

| Group | Page | Use it to | Plans |
|---|---|---|---|
| Monitor | **Dashboard** | See sensor availability and recent activity at a glance | All |
| Monitor | **Sensors** | Claim, find, inspect, edit, and unclaim sensors | All |
| Seismic | **Triggers** | Browse the shaking your sensors recorded | Structural |
| Seismic | **Events** | Browse detected earthquakes | Seismic, Enterprise |
| Seismic | **Live** | Watch detections on a live map, or run a simulation | Seismic, Enterprise |
| Seismic | **Waveform archive** | Review recorded waveforms | All |
| Project | **Project Settings** | See where data is sent, and set up trigger defaults, alerts, and the real-time export | All |
| Project | **Billing** | See the plan, contract, and invoices. Owners only | All |

The **Seismic** group also shows where your sensors send their data: **Sending to Grillo**, or your own server if Grillo has [set one](/dashboard/data/data-server) for your project.

**Account**, **Language**, **Terms of Service**, **Privacy Policy**, and **Logout** are in the user menu at the bottom of the sidebar. The terms and privacy links open the pages on grillo.io. Grillo Cloud is available in English and French.

Projects, members, and plans are managed by Grillo. See [Projects](/dashboard/organizations).
