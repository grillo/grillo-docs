---
title: Grillo Platform
---

# Grillo Platform

Grillo Platform at [cloud.grillo.io](https://cloud.grillo.io) is the hosted application for managing networks of Grillo sensors. Optional modules add workflows for specific monitoring applications.

## What you can do

- Create and switch between organizations
- Invite organization members
- Create FDSN-named seismic networks
- Claim pre-registered sensors by Device ID
- View sensors in table and map views
- Edit station code and location metadata
- Inspect connectivity, signal, power, battery, SIM, firmware, and last-seen information when reported by a sensor
- Use enabled modules for real-time earthquake cataloging and early warning

## First-sensor workflow

1. [Create an account](/dashboard/account/creating-account).
2. Create or select an [organization](/dashboard/organizations).
3. [Create a network](/dashboard/networks/creating-network).
4. Select that network in Platform.
5. [Claim the sensor](/dashboard/sensors/adding-sensor) using its Device ID and station code.
6. [Add location metadata](/dashboard/sensors/configuring-sensor).
7. Power and connect the sensor according to its hardware guide.
8. [Verify its status](/dashboard/sensors/sensor-status).

## Platform modules

Modules build on the sensors, networks, users, and metadata managed in Grillo Platform.

- **Earthquake Monitoring**, powered by SISTEM, supports real-time earthquake detection, cataloging, and early-warning workflows. Available views and alert delivery depend on the deployment.
- **Structural Health Monitoring** is coming soon.

[Explore Earthquake Monitoring →](/events)

## Navigation

The application sidebar contains:

- **Networks** — create and select seismic networks
- **Sensors** — table, map, details, claim, edit, and unclaim workflows
- **Events** — event catalog for the selected network
- **Live** — a visualization/simulation area; see [Live view](/events/live-map)

The organization switcher is at the top of the sidebar. Account, Billing, Settings, language, and logout actions are in the user menu at the bottom.

:::note Module availability
Not every organization has every Platform module enabled. The Settings page does not currently provide the API-key, webhook, or alert-rule management described by older versions of these docs.
:::
