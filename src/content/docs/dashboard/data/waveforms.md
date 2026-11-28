---
title: Waveforms
---

Open **Waveforms** to look at the data your sensors recorded and download it. It is in the menu bar on the Seismic, Enterprise, and Structural [plans](/dashboard/plans), for the project's owners, admins, and members.

![The Waveforms page showing a one-minute window of a station's three channels as a small earthquake arrives, with the station and channel picker, span buttons, end time, and Download](/img/screenshots/cloud/waveforms.png)

Projects that [send their data to their own server](/dashboard/data/data-server), such as those on the Network plan, have no waveforms in Grillo Cloud.

## View waveforms

1. Choose a station from the list.
2. Choose its channels, for example `HNZ`, `HNN`, and `HNE` for the accelerometer and `EHZ` for the geophone. Each channel gets its own chart.
3. Choose a span: **10 s**, **1 min**, **10 min**, **1 h**, **6 h**, **1 d**, **7 d**, or **30 d**.

Move around the data:

- **Zoom** with the mouse wheel, a pinch, or **+** and **−**.
- **Pan** by dragging the chart, or with **←** and **→**.
- **Now** jumps to the latest data. **End (UTC)** sets the end of the window to a time you choose.

The address in your browser keeps the station, channels, and window, so you can bookmark or share a view with your colleagues.

Long spans show the range of the signal in each pixel; zoom in to see every sample.

If the window holds no data, the page says so, for example **No data from HT.LEOG between … and …**, with **Jump to latest data** to move to the station's last data. If only some channels are empty, a line names them.

You can also open Waveforms from a [shaking event](/dashboard/triggers#waveforms) with **Open in Waveforms →**.

## Download waveforms

Select **Download** on the Waveforms page to download the shown station, channels, and window. The same download is on an [event's page](/events/event-details#replay-and-download) and a [shaking event's page](/dashboard/triggers#waveforms), for every station involved.

The download dialog shows:

- **Format**: **miniSEED** (the default) or **CSV**
- The **Stations**, **Channels**, and **Window** in the file
- **Size**: an estimate before you download
- **File**: the file's name, for example `HT.2354_2026-11-18T005400Z_10min.mseed`

Select **Download**. The file downloads straight away, with the progress shown. To stop it, select **Cancel download**.

### Formats

- **miniSEED**: miniSEED 2 (Steim2), every channel in one file, as recorded and cut to the window. Opens in ObsPy, SeisComP, SAC, Swarm, and most seismology tools.
- **CSV**: one row per sample, with the time (UTC, microseconds), network, station, location, channel, the raw counts, and the value in physical units where the channel's scale is known. The geophone (`EHZ`) gets a value only for recent data whose scale the sensor confirmed since it last restarted; otherwise the value is blank.

### Limits

| Limit | miniSEED | CSV |
|---|---|---|
| Longest window | 24 hours | 1 hour |
| Channels × hours in one file | 96, for example 4 channels over 24 hours | 4, for example 4 channels over 1 hour |

- One download at a time for each person. **Another download is running. Wait for it to finish.** means yours has not finished.
- At most 20 downloads an hour for each person.
- At most 2 GB a day for each project, counted in UTC days.

A window over a limit says why, and **Download** stays off until you shorten it. When a limit is reached, the dialog says when you can try again.

## Continuous data and standard formats

For your sensors' data live on your own systems, see [Send Data to Your Own Server](/dashboard/data/data-server).
