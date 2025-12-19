---
sidebar_position: 1
title: Grillo Pulse Overview
---

# Grillo Pulse

The Grillo Pulse is Grillo's versatile sensor designed for remote deployments, featuring cellular connectivity and battery backup for locations where WiFi isn't available or power isn't reliable.

It combines the same low-noise MEMS accelerometer used in the Grillo One with a vertical geophone, providing 4 channels of seismic data capable of capturing micro-seismic events up to strong ground motion.

<img src="/img/grillo-pulse-case.jpg" alt="Grillo Pulse" style={{maxWidth: '800px', width: '100%'}} />

## Key features

- **4-channel seismic data** - MEMS accelerometer + vertical geophone
- **Wide detection range** - Captures micro-seismic to strong motion
- **Dual connectivity** - WiFi and cellular (LTE) options
- **Battery backup** - Continues operating during power outages
- **Weather resistant** - Suitable for outdoor installations

## Specifications

<!-- TODO: Add actual specifications -->

| Specification | Value |
|---------------|-------|
| Dimensions | TBD |
| Weight | TBD |
| Power input | TBD |
| Battery backup | TBD hours |
| Operating temperature | TBD |
| Ingress protection | TBD (IP rating) |
| WiFi | 802.11 b/g/n (2.4 GHz) |
| Cellular | LTE Cat-M1 / NB-IoT |
| Cellular bands | TBD |
| Sensor type | MEMS accelerometer + vertical geophone |
| Channels | 4 (3 accelerometer + 1 geophone) |
| Detection range | Micro-seismic to strong motion |
| Sample rate | TBD |

## What's included

- Grillo Pulse sensor unit
- Power adapter
- External antenna (for cellular)
- Quick start guide
- Mounting hardware
- SIM card (varies by region)

[See complete unboxing guide →](/hardware/grillo-pulse/whats-in-the-box)

## Setup overview

1. **Unbox** - Verify all components are present
2. **Install SIM** - Insert SIM card if using cellular
3. **Install** - Mount the sensor in an appropriate location
4. **Connect** - Configure WiFi or cellular connectivity
5. **Provision** - Register the sensor to Grillo Cloud
6. **Configure** - Set station name and location in the dashboard

**Estimated setup time:** 20-30 minutes

## Guides in this section

- [What's in the box](/hardware/grillo-pulse/whats-in-the-box) - Components and accessories
- [Physical installation](/hardware/grillo-pulse/physical-installation) - Mounting and placement
- [Network setup](/hardware/grillo-pulse/network-setup) - WiFi and cellular configuration
- [SIM card setup](/hardware/grillo-pulse/sim-card-setup) - Cellular activation
- [Provisioning](/hardware/grillo-pulse/provisioning) - Connecting to Grillo Cloud
- [Troubleshooting](/hardware/grillo-pulse/troubleshooting) - Common issues and solutions

## Requirements

Before you begin, ensure you have:

- [ ] A Grillo Cloud account ([create one here](https://cloud.grillo.io))
- [ ] An organization and network set up in the dashboard
- [ ] WiFi credentials OR SIM card with active data plan
- [ ] Power outlet (or solar/battery power source)
- [ ] Suitable mounting location

## WiFi vs Cellular

| Factor | WiFi | Cellular |
|--------|------|----------|
| Monthly cost | Free (use existing network) | Data plan required |
| Setup complexity | Simple | Moderate |
| Power consumption | Lower | Higher |
| Coverage | Limited to WiFi range | Anywhere with cell coverage |
| Best for | Sites with existing WiFi | Remote locations |

:::tip
When both WiFi and cellular are configured, the Pulse will prefer WiFi to conserve data and power.
:::

## Need help?

If you encounter issues during setup, check our [troubleshooting guide](/hardware/grillo-pulse/troubleshooting) or [contact support](/support/contact).
