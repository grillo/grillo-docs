---
title: Event details
---

# Event details

Select an event in **Events**, on the Live map, or on the **Alerts** page to open its page. The title gives the magnitude and the place, with the event's status, its Event ID, and its revision.

![An event's page: map with rays to the stations, origin, magnitudes, alert, and waveforms of the nearest stations](/img/screenshots/cloud/event-page.png)

An event imported from the previous Grillo Cloud is marked **old system**, with a line saying where it came from and, for an event from another agency's catalog such as USGS or EMSC, a link to its page there.

Everything on the page is an automatic estimate. It can differ from a catalog reviewed by a seismic agency. When a new revision of the event arrives, the page updates itself.

## Map

The epicenter and your stations, with a line from the epicenter to each station that detected the event. Select a station to open its [sensor page](/dashboard/sensors/sensor-details).

## Origin

- **Time** of the earthquake's origin, in UTC
- **Epicentre**: latitude and longitude
- **Depth** in kilometers
- **Method**, **Stations / phases**, and **RMS residual**: how the location was computed and how well the arrivals fit it
- **Created** and **Updated**

## Magnitudes

Each magnitude estimate, with its type, value, uncertainty, and the number of stations it used. The one the event shows is marked ★. A magnitude marked **catalogue** comes from the S-wave peak about a minute after the origin; it is kept for the catalog and never triggers an alert.

## Alert

Grillo's alert decision for the event and each of its deliveries, with how many seconds after the origin each went out. For your project's own alert, see the [Alerts page](/events/earthquake-alerts#the-alerts-page).

## Waveforms around the event

The vertical acceleration (`HNZ`) of the 8 nearest stations that detected the event, with the origin and each station's pick marked. Zoom with **+** and **−**.

Owners, admins, and members see the waveforms; viewers see the rest of the page.

## Arrivals

One row per arrival used in the location: **Station**, **Channel**, **Phase**, **Onset (UTC)**, the time **After origin**, the **Distance** and **Azimuth** from the epicenter, the **Residual** (how far the arrival is from the location's prediction; over 0.5 s is highlighted), and its **Weight**.

## Replay and download

- **▶ Replay** plays the event back on the [Live map](/events/live-map#replay-a-past-event) as it was published.
- **Download** opens the [download dialog](/dashboard/data/waveforms#download-waveforms) for the stations that detected the event, every channel they have, from 10 seconds before the origin to 40 seconds after the last arrival. Owners, admins, and members can download.

`cloud.grillo.io/events/latest` opens the newest event.

## If details are empty

- A new event can appear before all of its details are available. Reopen it after a minute.
- If details keep failing to load, contact support with the Event ID and event time.
