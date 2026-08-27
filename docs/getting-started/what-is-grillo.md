---
title: What Is Grillo?
---

# What Is Grillo?

Grillo builds connected seismic sensors and software for operating dense earthquake-monitoring networks.

## Grillo Pulse

Grillo Pulse combines a vertical geophone and a triaxial MEMS accelerometer. Current hardware is produced in connectivity-specific variants. See the [Pulse guide](/hardware/grillo-pulse) before connecting power or networking equipment.

## Grillo Platform

[Grillo Platform](https://cloud.grillo.io) is the hosted application used to:

- Organize sensors by organization and seismic network
- Claim pre-registered devices by Device ID
- Assign FDSN station codes and location metadata
- View sensors in table and map views
- Monitor online state, last-seen time, connectivity, signal, and power information
- Use enabled modules for monitoring applications

## Platform modules

Platform modules use the sensors, networks, and metadata already managed in Grillo Platform.

- **Earthquake Monitoring**, powered by SISTEM, supports real-time earthquake detection, event cataloging, and early-warning workflows.
- **Structural Health Monitoring** is coming soon.

Module availability and features depend on the organization's deployment.

## Data integrations

Grillo sensors can be integrated with customer seismic systems. Integration details depend on the contracted deployment and should be confirmed with Grillo before installation. A public API reference will be published when a versioned external API contract is available.
