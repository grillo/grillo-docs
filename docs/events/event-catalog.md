---
title: Event Catalog
---

# Event Catalog

Open **Events** to browse the earthquakes Grillo Cloud has detected for the active project in the last 90 days, newest first. Simulated earthquakes from the [Live map](/events/live-map) are not included.

## Magnitude over time

The chart at the top plots every event by time and magnitude. The dashed line marks M4, the alert threshold. Select an event's marker to open it.

## Filter and search

- **All events**, **M ≥ 3**, or **M ≥ 4** filter by magnitude.
- **Search by place or ID…** finds events by the nearest place name or the Event ID.

The heading shows how many events match, for example **12 of 85 events · last 90 days**.

## Table view

| Column | Meaning |
|---|---|
| Issued (UTC) | When the event was issued |
| Mag | Estimated magnitude |
| Place | Distance and direction from the nearest place, for example **12 km NE of Les Cayes** |
| Depth | Estimated depth in kilometers |
| Stations | Number of stations that detected it |

Select a column heading to sort by it. Select a row to open [event details](/events/event-details).

## Map view

Choose **Map** to see the events by location.

## Export

Select **Export** to download the events that match the current filter and search as a CSV file.

## If no events appear

1. Change the filter or clear the search.
2. Check that your sensors are [online](/dashboard/sensors/sensor-status) and sending data to Grillo.
3. Confirm the project is on the Seismic or Enterprise [plan](/dashboard/plans).

Detected events are also available from the [Data API](/dashboard/data/api#events).
