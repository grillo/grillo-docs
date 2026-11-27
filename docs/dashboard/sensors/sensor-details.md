---
title: Sensor Details
---

# Sensor Details

Select a sensor on the **Sensors** page to open its page. The top shows the station, its name, and its state, with chips for the hardware type, Device ID, firmware, and connection (with the mobile operator for cellular sensors). **Open in waveforms →** opens its recorded data on the [Waveforms](/dashboard/data/waveforms) page.

![A sensor's page: chips for type, device, firmware, and link; connectivity over 7 days with outages, restarts, signal, and the events log; then current connection, temperature, station, and hardware](/img/screenshots/cloud/sensor-page.png)

The page has these sections, top to bottom.

## Live waveform

The sensor's channels as they arrive, a few seconds behind real time. Not on the Network plan, where the seismic data goes to your own server.

## Connectivity

Choose **24 h**, **7 d**, **30 d**, or **90 d**.

- **Online**: the share of the period the sensor was reporting. It counts as offline after 5 minutes without a health report.
- **Outages**: how many, and the longest
- **Restarts**: how many, and the most common cause
- **Signal**: the median signal and whether it is good (-85 dBm or better), fair, or poor (below -100 dBm). Ethernet sensors show **no radio link**.
- **Reporting**: a strip showing when the sensor was reporting, offline, or there is no data, with restarts marked
- **Signal**: signal strength over the period, broken where the sensor was offline
- **Events**: a log of what happened, such as the link going down and coming back, restarts, and firmware changes. Filter it by kind, and select **Load more** for older events

These come from the sensor's health reports. They show that the sensor went quiet or restarted, and the cause the sensor gave where it gave one.

## Current connection

What the latest health report says: **Link** and signal, **Operator** and APN, **ICCID** (and since when the SIM is fitted), **IMEI**, **Source address** (as seen by Grillo), **Data server**, **Clock** (its time source and last sync), **GNSS**, **Uptime**, **Last restart**, **Traffic** since boot, **Power**, and **Last report**.

A field the sensor's firmware does not send reads **not reported**.

## Temperature

The sensor's latest temperature, once its firmware sends a usable value. Until then it reads **Not reported yet**.

## Station

The station code, **Name**, **Site**, **Position**, **Elevation**, the GPS **Reported position** where the sensor has GPS, **Installed** and **Moved** dates, **Channels**, whether earthquake **Detection** uses the station, and **Notes**. Owners and admins can select **Edit**. See [Edit a Sensor](/dashboard/sensors/configuring-sensor).

## Hardware

The hardware **Type** recorded by Grillo and the type the sensor **Reported as**, the **Device**, the **Firmware** (and since when), **Geophone scale**, and when and by whom the sensor was **Claimed**. A Grillo One reads **no geophone (accelerometer only)**.

## Data flow and map

On plans where Grillo receives the seismic data: **Latency**, **Last sample**, **Packets/min**, and **Gaps (1 min)**. A small map shows the station.

## Recent triggers

On the Structural plan: the sensor's triggers in the last 90 days, with start time, **PGA H**, **PGA Z**, **PGV Z**, and duration. See [Triggers](/dashboard/triggers).

## Settings

Each setting the sensor gets from Grillo Cloud, such as its recording mode and trigger, beside what the sensor reports it runs, and whether the two are **in sync**. See [Recording Mode and Thresholds](/dashboard/sensors/recording-mode).

## State of health

Charts of the sensor's health reports over **1 h**, **6 h**, **24 h**, **7 d**, or **30 d**.

## Recent QC

On plans where Grillo receives the seismic data: data quality per channel for recent windows, with availability, samples, gaps, overlaps, mean, RMS, and range.
