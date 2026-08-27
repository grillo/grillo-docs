---
title: Start Here
---

# Start Here

Grillo combines seismic sensing hardware with software for managing stations and, where enabled, detecting earthquakes.

## Choose your path

| Your goal | Start here |
|---|---|
| Install a new Grillo Pulse | [Pulse Quick Start](/hardware/grillo-pulse/quick-start) |
| Create a Platform account and network | [Grillo Platform onboarding](/dashboard) |
| Claim a sensor you already have | [Claim a sensor](/dashboard/sensors/adding-sensor) |
| Check whether a sensor is reporting | [Sensor status](/dashboard/sensors/sensor-status) |
| View detected earthquakes | [Earthquake Monitoring](/events) |

## How the products fit together

- **Grillo Pulse** records seismic motion and sends device-health and waveform data.
- **Grillo Platform** manages organizations, networks, station metadata, sensor inventory, and device health.
- **Earthquake Monitoring**, powered by SISTEM, is a Platform module for real-time earthquake cataloging and early-warning workflows.

An account may contain multiple organizations. Each organization can contain seismic networks, and each claimed sensor belongs to one network.

```text
Account
└── Organization
    └── Network
        └── Claimed sensors
```

## Before installing hardware

Collect the following information:

- Device ID: 12 uppercase hexadecimal characters, normally based on the Wi-Fi MAC address
- Hardware model and revision
- Cellular or Ethernet variant
- Intended FDSN network and station codes
- Installation coordinates and elevation
- Approved power supply and cables for that hardware revision

For remote sites, claim and bench-test the sensor before traveling whenever possible.
