---
sidebar_position: 3
title: Deployment Modes
---

# Deployment Modes

Grillo supports two deployment modes depending on your needs. Both modes use Grillo Cloud for device management and monitoring via SOH (State of Health) messages. The key difference is where seismic waveform data is processed.

## Mode 1: Full Cloud (Grillo Cloud handles everything)

**Best for:** Organizations that want a turnkey earthquake monitoring and detection system with minimal infrastructure.

In this mode, Grillo Cloud ingests **both** SOH telemetry and seismic waveform data. The platform handles earthquake detection, event cataloging, and alerting automatically.

```
Grillo Sensor
  ├── SOH messages (CoAP UDP:5683) ──→ Grillo Cloud ──→ Device monitoring
  └── Seismic data (CoAP UDP:5684) ──→ Grillo Cloud ──→ Detection → Alerts
```

**What you get:**
- Real-time device health monitoring on the dashboard
- Automatic earthquake detection (P-wave STA/LTA + multi-station association)
- Event catalog with magnitude, location, and depth
- Configurable alerts (email, webhook, SMS)
- Data export (CSV, JSON, QuakeML)
- API access to events and sensor data

**Requirements:**
- Grillo sensors with internet connectivity
- Grillo Cloud account with Events add-on (for detection features)
- Minimum 4 sensors recommended for earthquake location

**Setup:** Follow the standard [Getting Started](/getting-started) guide. No additional configuration needed — sensors send seismic data to Grillo Cloud by default.

---

## Mode 2: Hybrid (Cloud monitoring + on-premise seismic processing)

**Best for:** Institutions that operate existing seismic processing infrastructure (Earthworm, SeisComP, etc.) and want to integrate Grillo sensor data into their own pipelines, while still using Grillo Cloud for device management.

In this mode, Grillo Cloud handles only SOH messages for device monitoring. Seismic waveform data is redirected to your own server, where our **coap2seis** tool converts it for use with standard seismological software.

```
Grillo Sensor
  ├── SOH messages (CoAP UDP:5683) ──→ Grillo Cloud ──→ Device monitoring
  └── Seismic data (CoAP UDP:5684) ──→ Your Server ──→ coap2seis ──→ Earthworm / MiniSEED
```

**What you get:**
- Real-time device health monitoring on the Grillo Cloud dashboard
- Seismic waveform data delivered to your own infrastructure
- Standard format output (TRACEBUF2 for Earthworm, MiniSEED for archiving/research)
- Full control over data processing and detection pipelines
- Integration with existing seismic networks and software

**Requirements:**
- Grillo sensors with network connectivity to both Grillo Cloud and your server
- Grillo Cloud account (for device monitoring)
- An on-premise or cloud server running **coap2seis** with UDP port 5684 open
- For Earthworm output: a working Earthworm installation with PyEW
- For MiniSEED output: Python with ObsPy

**Setup:**
1. Follow the standard [Getting Started](/getting-started) guide to set up your account, organization, network, and sensors
2. [Set up coap2seis](/guides/on-premise-integration) on your server
3. [Configure the data server endpoint](/dashboard/sensors/configuring-sensor#data-server) in the dashboard to point sensors at your server

---

## Choosing your mode

| Consideration | Full Cloud | Hybrid |
|---------------|-----------|--------|
| Infrastructure needed | None (just sensors + internet) | On-premise server |
| Earthquake detection | Automatic via Grillo Cloud | Your own pipeline |
| Device monitoring | Grillo Cloud dashboard | Grillo Cloud dashboard |
| Data formats | Grillo native + API export | Earthworm TRACEBUF2, MiniSEED |
| Integration with existing tools | Via API and webhooks | Direct feed into Earthworm, SeisComP, etc. |
| Setup complexity | Simple | Moderate |
| Best for | New deployments, communities, schools | Research institutions, seismic agencies |

:::tip
You can start with Full Cloud mode and switch to Hybrid mode later by reconfiguring the data server endpoint in the dashboard. SOH monitoring continues working in both modes.
:::

## How the data server redirect works

Each Grillo sensor sends two types of CoAP messages:

1. **SOH messages** (port 5683) — Always sent to Grillo Cloud (`soh.grillo.io`). These contain device health telemetry: battery, signal strength, connectivity, uptime, etc. This is what powers the dashboard monitoring.

2. **Seismic data messages** (port 5684) — By default sent to Grillo Cloud (`ingest.grillo.io`). In hybrid mode, you configure these to go to your server instead.

The data server endpoint is configured per-sensor from the Grillo Cloud dashboard. When you update it, the configuration is pushed to the sensor via the SOH response channel. The sensor then starts sending seismic data to your specified server on the next connection cycle.

See [Configuring the data server](/dashboard/sensors/configuring-sensor#data-server) for step-by-step instructions.
