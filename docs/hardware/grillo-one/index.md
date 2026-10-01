---
title: Grillo One
---

# Grillo One

Grillo One is a strong-motion seismic sensor with a three-axis MEMS accelerometer. It connects by Ethernet or Wi-Fi and is powered from 5 V DC. Its hardware and software are open source; it is the same device used in the OpenEEW project.

## At a glance

| | |
|---|---|
| Sensor | Three-axis MEMS accelerometer |
| Channels | `HNZ`, `HNN`, `HNE` at 125 samples per second |
| Connectivity | Ethernet, with Wi-Fi as fallback |
| Power | 5 V DC |
| Timing | Network time (NTP) |
| Managed in | [Grillo Cloud](/dashboard) |

Grillo One has no geophone, GNSS, battery, or cellular modem. For those, see [Grillo Pulse](/hardware/grillo-pulse).

## Setup steps

1. [Claim the sensor](/dashboard/sensors/adding-sensor) in Grillo Cloud with its Device ID.
2. [Connect and install it](/hardware/grillo-one/setup).
3. [Verify that it is online](/dashboard/sensors/sensor-status).

## Device ID

The Device ID is 12 uppercase hexadecimal characters, for example `A0B1C2D3E4F5`. It is printed on the sensor's label. Record it before you mount the sensor.
