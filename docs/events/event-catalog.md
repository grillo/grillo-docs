---
title: Event Catalog
---

# Event Catalog

Open **Events** to browse the earthquakes Grillo Cloud has detected for the active project, newest first. New events appear in the list as they are detected.

## Filter and search

- **Time range:** **24 h**, **7 d**, **30 d** (the default), **1 y**, or **all**.
- **Min mag:** **any**, or **≥ 1** up to **≥ 5**.
- **Status:** **any**, **preliminary**, **confirmed**, **final**, or **withdrawn**. See [Event status](#event-status).
- **Source:** **any**, **this system**, or **old system** for events imported from the previous Grillo Cloud.
- **Region or id** finds events by place name or Event ID.

The heading shows how many events are listed. Select **Load more** to see older ones.

## Columns

| Column | Meaning |
|---|---|
| **Mag** | Estimated magnitude, colored by size |
| **Origin time (UTC)** | When the earthquake started |
| **Place** | Distance and direction from the nearest place, for example **6 km S of Léogâne, Haiti**, or **near** a place within 3 km. Marked **alerted** if an [alert](/events/earthquake-alerts) was sent for it, and **old system** if it was imported from the previous Grillo Cloud |
| **Depth** | Estimated depth in kilometers |
| **Stations** | Number of stations that detected it |
| **Status** | How settled the estimate is |
| **Rev** | How many times the estimate has been revised |

Select a column heading to sort by it. Select a row to open the [event details](/events/event-details). Select **▶ Replay** to play the event back on the [Live map](/events/live-map#replay-a-past-event); on a phone, open the event and replay it from there.

## Event status

| Status | Meaning |
|---|---|
| **preliminary** | The first estimate, from the first few stations |
| **confirmed** | More stations agree; the estimate is being refined |
| **final** | The location has not changed for about a minute |
| **withdrawn** | Grillo no longer considers it an earthquake |

## If no events appear

1. Widen the time range, set **Min mag** to **any**, or clear the search.
2. Check that your sensors are [online](/dashboard/sensors/sensor-status) and sending data to Grillo.
3. Confirm the project is on the Seismic or Enterprise [plan](/dashboard/plans).
