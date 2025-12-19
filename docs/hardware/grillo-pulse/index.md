---
sidebar_position: 1
title: Grillo Pulse Overview
---

# Grillo Pulse

The Grillo Pulse is Grillo's professional-grade seismic sensor designed for remote and outdoor deployments. Featuring global cellular connectivity, solar power support, and GPS timing, it's built for locations where infrastructure is limited or unreliable.

It combines an ultra-low noise MEMS accelerometer with a sensitive 4.5Hz geophone, providing 4 channels of seismic data capable of capturing everything from microseismic events to strong local earthquakes.

<img src="/img/grillo-pulse-case.jpg" alt="Grillo Pulse" style={{maxWidth: '800px', width: '100%'}} />

## Key features

- **Dual sensor system** - 4.5Hz geophone + ultra-low noise MEMS accelerometer
- **Wide detection range** - Captures microseismic to strong local earthquakes
- **Global connectivity** - LTE Cat-4 with 2G/3G/4G fallback, WiFi, and Starlink (coming soon)
- **Solar powered** - 6-10V input with external LiPo battery backup
- **NTP timing** - Precise time synchronization via Grillo Cloud timeserver
- **Weather resistant** - IP67 weatherproof enclosure available
- **Industry compatible** - DataLink/SeedLink compatible output

## Specifications

### Physical

| Specification | Value |
|---------------|-------|
| Dimensions | 98.5 x 70mm (PCB) |
| Weight | 50g |
| Enclosure | IP67 Weatherproof (optional) |
| Operating temperature | -20°C to +60°C |

### Power

| Specification | Value |
|---------------|-------|
| Power source | Solar 6-10V |
| Battery | External LiPo |
| Energy consumption | 1.32W (400mA at 3.3V) |
| USB | Power and firmware updates |

### Connectivity

| Specification | Value |
|---------------|-------|
| Primary connection | LTE Cat-4 (2G/3G/4G global support) |
| Secondary connection | Starlink Direct to Cell (coming soon, select regions) |
| Tertiary connection | WiFi 802.11 b/g/n (2.4 GHz) |
| Additional method | USB serial data |
| Time synchronization | NTP (via Grillo Cloud timeserver) |
| Data transmission | UDP over CoAP |
| Data format | JSON (binary option available) |
| Ingestion software | DataLink/SeedLink compatible |

### Sensors

| Specification | Value |
|---------------|-------|
| Primary sensor | 4.5Hz Geophone with 32-bit ADC |
| Secondary sensor | Ultra-low noise MEMS accelerometer with 20-bit ADC |
| Channels | 4 (1 geophone + 3 accelerometer) |
| Sampling rate | 125Hz (accelerometer), 100Hz (geophone) |
| Detection range | Microseismic to strong local earthquakes |

## What's included

- Grillo Pulse sensor unit (PCB with integrated sensors)
- IP67 weatherproof enclosure (if ordered)
- LTE antenna
- GPS antenna
- Power cable (for solar/battery connection)
- Quick start guide
- Mounting hardware

[See complete unboxing guide →](/hardware/grillo-pulse/whats-in-the-box)

## Setup overview

1. **Unbox** - Verify all components are present
2. **Assemble** - Install PCB in enclosure, connect antennas
3. **Install SIM** - Insert SIM card for cellular connectivity
4. **Install** - Mount the sensor in an appropriate location
5. **Connect power** - Wire to solar panel and/or battery
6. **Provision** - Register the sensor to Grillo Cloud
7. **Configure** - Set station name and location in the dashboard

**Estimated setup time:** 30-45 minutes

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
- [ ] SIM card with active data plan (for cellular) OR WiFi credentials
- [ ] Solar panel (6-10V) and/or external LiPo battery
- [ ] Suitable mounting location (ground level, stable surface)

## Connectivity comparison

| Factor | LTE Cellular | WiFi | Starlink Direct to Cell |
|--------|--------------|------|-------------------------|
| Availability | Primary | Tertiary | Coming soon (select regions) |
| Monthly cost | Data plan required | Free (existing network) | TBD |
| Setup complexity | Moderate | Simple | TBD |
| Power consumption | Moderate | Lower | TBD |
| Coverage | Global (2G/3G/4G) | Limited to WiFi range | Satellite-based global |
| Best for | Remote deployments | Sites with existing WiFi | Areas without cellular coverage |

:::tip
The Pulse supports multiple connectivity options simultaneously. When WiFi is available, it will be preferred to conserve cellular data.
:::

## Need help?

If you encounter issues during setup, check our [troubleshooting guide](/hardware/grillo-pulse/troubleshooting) or [contact support](/support/contact).
