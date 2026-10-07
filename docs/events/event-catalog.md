---
title: Event Catalog
---

# Event Catalog

Open **Events** in Grillo Cloud to browse the earthquakes SISTEM has detected for the active project.

![Event catalog in Grillo Cloud](/img/screenshots/09-events.png)

## Filter and refresh

Use the date control to choose a start and end date, or pick **This week** or **This month**. Use the refresh button to fetch current results.

When SISTEM detects a new earthquake, Grillo Cloud shows a notification with its magnitude and location, and an unread count appears next to **Events** in the sidebar.

Results come in pages of 100 events.

## Table view

| Column | Meaning |
|---|---|
| Event ID | Identifier for the event |
| Time | When the event was issued |
| Magnitude | Estimated magnitude |
| Location | Estimated latitude and longitude |

Select the **Time** or **Magnitude** heading to sort. Select a row to open [event details](/events/event-details).

## Map view

Switch to **Map** to see event locations together with your sensors. Use the fit control to bring all events into view.

## If no events appear

1. Confirm the correct project is selected.
2. Widen the date range and refresh.
3. Check that your sensors are [online](/dashboard/sensors/sensor-status) and sending data to Grillo.
4. Confirm with Grillo that SISTEM is enabled for the project.

## Exporting the catalog

Grillo Cloud does not export the event list as a file. To get the recorded data for an event, open it and select **Open waveforms in archive**, then [download the samples](/dashboard/data/waveforms#download-data).
