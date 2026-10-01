---
title: Grillo Cloud
---

# Grillo Cloud

Grillo Cloud at [cloud.grillo.io](https://cloud.grillo.io) is where you manage Grillo Pulse and Grillo One sensors: claim them, name their stations, watch their health, view their waveforms, and update their firmware.

Grillo Slide uses a separate dashboard. See [Grillo Cloud for Slide](/slide-cloud).

## What you can do

- Claim sensors by Device ID and give each one an FDSN station code
- See every sensor in a table or on a map, with online status and last-seen time
- Check connection type, signal strength, SIM, power, battery, and firmware for each sensor
- Review connection history, interruptions, and reboots
- Update sensor firmware over the air
- Send seismic data to your own server instead of Grillo

With the [SISTEM add-on](/events), Grillo Cloud also shows your sensors' waveforms, lets you download recorded data, detects earthquakes automatically, builds an event catalog, and shows events on a live map.

## First-sensor workflow

1. [Get an account](/dashboard/account/creating-account) from a project invitation.
2. Open **Sensors** and [claim the sensor](/dashboard/sensors/adding-sensor) with its Device ID and a station code.
3. [Add its location](/dashboard/sensors/configuring-sensor).
4. Power and connect the sensor by following its hardware guide: [Grillo Pulse](/hardware/grillo-pulse) or [Grillo One](/hardware/grillo-one).
5. [Verify that it is online](/dashboard/sensors/sensor-status).

## Navigation

The sidebar has two groups:

| Group | Page | Use it to |
|---|---|---|
| Monitor | **Dashboard** | See sensor availability and system status at a glance |
| Monitor | **Sensors** | Claim, find, inspect, edit, and unclaim sensors |
| Seismic | **Events** | Browse detected earthquakes (SISTEM add-on) |
| Seismic | **Live** | Watch detections on a live map, or run a simulation (SISTEM add-on) |

The **Seismic** group also shows where your sensors send their data: **Sending to Grillo**, or your own server if Grillo has [set one](/dashboard/data/data-server) for your project.

The project switcher is at the top of the sidebar. **Account**, **Billing**, **Settings**, **Language**, and **Logout** are in the user menu at the bottom. Grillo Cloud is available in English and French.

Projects, members, and other account settings are managed by Grillo. See [Projects](/dashboard/organizations).

Each main page has a guided tour the first time you open it. To see the tours again, open **Settings** and use **Guided Tours**.
