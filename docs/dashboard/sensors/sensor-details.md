---
title: Sensor Details
---

# Sensor Details

Select a sensor in the table or map to open its details sheet.

![Sensor details in Grillo Platform](/img/screenshots/07-sensor-info.png)

## Identity and location

Platform displays the station code, Device ID, sensor type, coordinates, elevation, and location name stored for the device.

## Networking

When reported by the sensor, the sheet displays:

- Signal strength
- Connection type
- SIM ICCID for cellular devices

Signal data is useful only when it is recent. Check **Last seen** before diagnosing a current connection from an old value.

## Power

When supported by the device telemetry, Platform displays:

- Power source
- Battery charging state
- Battery voltage and an estimated percentage

:::note Sensor-specific fields
Available power and battery information depends on the sensor configuration. A field that is unavailable or blank does not necessarily indicate a fault.
:::

## System

The System area includes Device ID and last-seen time. The Sensors table also shows the reported firmware version.

## Actions

- **Edit** opens the supported metadata and firmware-target fields.
- **Unclaim Sensor** removes the device from the organization/network after confirmation. It does not erase networking credentials or physically reset the sensor.

Platform does not currently expose waveform history, alert history, diagnostic logs, or configuration history in this sheet.
