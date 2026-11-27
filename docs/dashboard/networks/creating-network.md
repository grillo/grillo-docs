---
title: Network and station codes
---

# Network and station codes

Grillo Cloud names seismic stations with FDSN codes so your data lines up with other seismic software. A station is written as network code and station code, for example `HT.E4F5`.

## Network code

Each project has one FDSN network code. Grillo sets it when it creates your project, so there is no network to create or select in Grillo Cloud.

Tell Grillo which code you want when you order. Use a code assigned to you by the [FDSN](https://www.fdsn.org/networks/) for operational data. An invented code can collide with someone else's network. To change the code later, [contact Grillo Support](/support/contact).

## Station codes

When you [claim a sensor](/dashboard/sensors/adding-sensor), Grillo Cloud creates its station and names it with the last four characters of the Device ID. A sensor with Device ID `A0B1C2D3E4F5` in a project with network code `HT` becomes station `HT.E4F5`.

You give the station a readable **Name** and **Site** in [Edit a Sensor](/dashboard/sensors/configuring-sensor). The station code itself cannot be changed in Grillo Cloud; to use a different code, [contact Grillo Support](/support/contact).

## Channels

| Channel | Sensor | Rate | Recorded by |
|---|---|---|---|
| `EHZ` | Geophone, vertical | 100 Hz | Grillo Pulse |
| `HNZ` | Accelerometer, vertical | 125 Hz | Grillo Pulse, Grillo One |
| `HNN` | Accelerometer, north | 125 Hz | Grillo Pulse, Grillo One |
| `HNE` | Accelerometer, east | 125 Hz | Grillo Pulse, Grillo One |

Grillo One has no geophone, so its stations have no `EHZ` channel.
