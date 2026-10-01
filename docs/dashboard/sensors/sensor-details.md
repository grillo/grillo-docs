---
title: Sensor Details
---

# Sensor Details

Select a sensor in the table or on the map to open its details panel.

![Sensor details in Grillo Cloud](/img/screenshots/07-sensor-info.png)

## Connection history

The history chart shows the sensor's connection reports and signal strength over 1 hour, 24 hours, 7 days, 30 days, 90 days, or 1 year. It also counts:

- **Interruptions** — gaps of more than 2.5 minutes with no health report
- **Reboots** — times the sensor's reported uptime went back to zero

These are inferred from the health reports. They show that the sensor went quiet or restarted; they do not say whether power, network, or firmware caused it.

## Networking

- Signal strength
- Connection type: WiFi, Cellular, or Ethernet
- SIM ICCID, for cellular sensors

Check **Last Seen** before reading these. An offline sensor shows the values from its last report.

## Power

- Power source: DC or Battery
- Battery charging
- Battery level

Grillo One has no battery, so these fields are empty for it.

## Location

Latitude, longitude, elevation, and the saved location name.

## System

Device ID and **Last Seen**.

## Waveforms (SISTEM)

Projects with the [SISTEM add-on](/events) also see the sensor's live waveform at the top of the panel, and can open its recorded data. See [View and Download Waveforms](/dashboard/data/waveforms).

## Actions

- **Find on map** jumps to the sensor's marker.
- **Edit** opens [station, location](/dashboard/sensors/configuring-sensor), and [firmware](/dashboard/sensors/firmware-updates) settings. Owner or admin only.
- **Unclaim Sensor** [removes the sensor from the project](/dashboard/sensors/adding-sensor#unclaim-a-sensor). Owner or admin only.
