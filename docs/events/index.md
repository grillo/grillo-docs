---
title: SISTEM Add-on
---

# SISTEM: Earthquake Detection Add-on

SISTEM is an optional add-on to Grillo Cloud. Without it, Grillo Cloud is a sensor-management tool. With it, Grillo Cloud detects earthquakes from your sensors' data automatically.

SISTEM gives you:

- **Waveforms.** Watch each sensor's live waveform and spectrogram, review recorded data, and [download it as CSV](/dashboard/data/waveforms).
- **An automatic event catalog.** Each detected earthquake is recorded with its time, location, depth, and magnitude.
- **A live map.** Watch detections as they happen, with the stations that triggered and the estimated wave fronts.
- **In-app alerts.** Grillo Cloud shows a notification and an unread count on **Events** when a new earthquake is detected.

Events and the live map appear in the **Seismic** group of the sidebar. Waveforms appear in each sensor's details.

## Requirements

- SISTEM enabled for your project. [Contact Grillo](/support/contact) to add it.
- Sensors sending seismic data to Grillo. Detection does not run on data that goes to [your own server](/dashboard/data/data-server).
- Enough stations, spread around the area you want to monitor. An earthquake is located from several stations' arrivals. See [How Detection Works](/events/how-detection-works).

## Guides

- [Event Catalog](/events/event-catalog)
- [Event Details](/events/event-details)
- [Live Map](/events/live-map)
- [How Detection Works](/events/how-detection-works)

:::warning Not a public warning service
SISTEM results are automatic estimates. They do not replace instructions from emergency services or an official earthquake-warning authority.
:::
