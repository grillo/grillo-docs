---
title: Dashboard
---

# Dashboard

**Dashboard** is the first page you see after signing in. It summarizes the active project and refreshes itself every 60 seconds. Use the refresh button to update it sooner.

## Sensor status

Shows how many of the project's sensors are online and how many are offline. A warning appears when sensors are offline, and a critical warning when most of them are.

Open [Sensors](/dashboard/sensors) to see which ones.

## Seismic events

Counts of detected earthquakes for today, this week, this month, and the last 30 days, with a daily chart and the most recent events. This card is populated for projects with the [SISTEM add-on](/events).

## System status

Shows the health of the Grillo Cloud services that receive and process your data: seismic ingestion, device-health ingestion, the detector, the event processor, and the waveform store. Green means running.

If a service needs attention, sensor data may be delayed. Grillo monitors these services; you do not need to act, but include a screenshot if you contact support about missing data.

## Storage

Shows storage and backup status for the Grillo Cloud system.
