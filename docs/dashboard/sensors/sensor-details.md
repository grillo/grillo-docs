---
title: Sensor Details
---

# Sensor Details

Select a sensor in any view to open its details panel. The top of the panel shows its station code, status, and the reason for the status.

## Connectivity

- **Uptime 30 d**: the share of the last 30 days the sensor was reporting
- **Signal** and **Latency** from its latest health report
- **Last 24 h, 30-minute blocks**: when data arrived, arrived late, or did not arrive
- **Last 30 days, daily uptime**: one bar per day

These come from the sensor's health reports. They show that the sensor went quiet or slowed down; they do not say whether power, network, or firmware caused it.

## Live signal

For a sensor that records continuously, select **Show live signal** to see its vertical geophone (`EHZ`) trace as it arrives. Select **Hide live signal** to close it.

## Device

- **Device ID** and **Type**
- **Firmware**, and the version most of the project's sensors run
- **Up since boot**
- **Power**: power source and battery voltage, where the sensor reports them
- **Enclosure temp**, on current Grillo Pulse hardware
- **Time sync**: how far the sensor's clock is from true time, in milliseconds

## Cellular

For cellular sensors: **ICCID** and **Reconnects (24 h)**, the number of times health reports stopped for more than 150 seconds in the last 24 hours.

## Location

A small map, the **Coordinates**, **Elevation**, and the date the sensor was **Installed** (added to the project). **Show on map** opens the [sensor map](/dashboard/sensors/map-view) at the sensor. If the project masks sensor locations, coordinates are marked **(masked)**.

## Download data

**Download data** opens the [Archive](/dashboard/data/waveforms) with this sensor selected.

## Changing the sensor

Editing a sensor, changing its [recording mode](/dashboard/sensors/recording-mode), and [updating its firmware](/dashboard/sensors/firmware-updates) are handled by Grillo Support for now. [Contact Grillo Support](/support/contact) with the Device ID.
