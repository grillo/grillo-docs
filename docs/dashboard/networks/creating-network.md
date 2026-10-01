---
title: Network and Station Codes
---

# Network and Station Codes

Grillo Cloud names seismic stations with FDSN codes so your data lines up with other seismic software.

## Network code

Each project has one FDSN network code. Grillo sets it when it creates your project, so there is no network to create or select in Grillo Cloud.

Tell Grillo which code you want when you order. Use a code assigned to you by the [FDSN](https://www.fdsn.org/networks/) for operational data. An invented code can collide with someone else's network. To change the code later, [contact Grillo Support](/support/contact).

## Station codes

You choose a station code when you [claim a sensor](/dashboard/sensors/adding-sensor) and can change it later in [Edit Sensor](/dashboard/sensors/configuring-sensor).

- 2–8 uppercase letters or numbers
- Unique within your project

Plan your station names before you start claiming. A consistent scheme is easier to work with than the default, which is the last four characters of the Device ID.

## Channels

| Channel | Sensor | Recorded by |
|---|---|---|
| `EHZ` | Vertical geophone | Grillo Pulse |
| `HNZ` | Accelerometer, vertical | Grillo Pulse, Grillo One |
| `HNN` | Accelerometer, north | Grillo Pulse, Grillo One |
| `HNE` | Accelerometer, east | Grillo Pulse, Grillo One |
