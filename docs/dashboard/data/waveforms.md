---
title: Download Waveforms
---

# Download Waveforms

Open **Archive** to download the raw waveform data your sensors recorded. Downloads are included in the Network, Seismic, and Enterprise [plans](/dashboard/plans).

The Archive has data only for sensors that send their seismic data to Grillo. If your project [sends data to its own server](/dashboard/data/data-server), there are no waveforms to download.

## 01 · Time window

Choose **Last hour**, **Last 24 h**, **Last 7 days**, **Around an event**, or **Custom**. All times are UTC.

- **Around an event** lists recent events. Pick one and the window runs from 1 minute before its origin to 3 minutes after, with the sensors within 80 km already selected.
- **Custom** lets you set **From (UTC)** and **To (UTC)**.

You can also open the Archive from **Download data** in a [sensor's details](/dashboard/sensors/sensor-details), or **Open in archive** in an [event's details](/events/event-details).

## 02 · Sensors

Pick sensors from the list or on the map: **Click to add or remove**. Use **All** or **None** to change the selection quickly.

## 03 · Format

- **miniSEED**: the standard seismology format. Opens in ObsPy, SeisComP, SAC, and Swarm.
- **CSV**: for spreadsheets and quick analysis.

The channel is `EHZ`, the vertical geophone, at 100 Hz.

For now the download always contains both a miniSEED file and a CSV file, whichever you choose; the choice changes only the size estimate.

## Your request

The summary on the right shows the window, its duration, the sensors, and the format, with an estimated size. **Data available in window** shows each sensor's coverage, with gaps marked. Gaps are left empty in the download, not filled.

Select **Download**. Grillo Cloud prepares the file and your browser downloads it. If the browser blocks the new tab, use the link that appears under the button.

:::note Current limits
A download from the Archive covers **one sensor and up to 5 minutes**. Longer windows and several sensors at once are coming. For more data now, use the [Data API](/dashboard/data/api) or [stream to your own ringserver](/dashboard/data/realtime-export).
:::

**Same request by API** shows the equivalent API request; select **Copy** to copy it.

## What you download

You get a zip containing the `EHZ` channel (downloads from the [waveform charts](#waveform-charts) page contain all of the sensor's channels):

| File | Contents |
|---|---|
| `<station>_<start>.mseed` | All channels as miniSEED 2: 512-byte records of 32-bit integers. Accelerometer channels are in milligal (mGal; 1 mg = 980.665 mGal), and the geophone in counts |
| `<station>_<start>_<rate>hz_<unit>.csv` | One CSV per sample rate, one row per sample time |
| `metadata.json` | The requested interval, the channels, units, gaps, and the files in the zip |

In the CSV, `utc_iso` is the sample time, `time_s` is seconds from the start of the interval, and there is one column per channel. Accelerometer channels are in mg, to 3 decimal places, and the geophone is in counts. The values are as recorded, so they include the sensor's offset; the charts in Grillo Cloud remove it.

If the station code or the project's network code does not fit miniSEED (1–5 and 1–2 capital letters or digits), the miniSEED file uses network `XX` and the last five characters of the Device ID as the station. `metadata.json` records the substitution.

Sensor timestamps are approximate, and every miniSEED record is flagged "time tag questionable". `metadata.json` gives each trace segment's `timeBasis`; check it before treating the timestamps as exact acquisition times.

### Download limits

- The download link works for 24 hours.
- A project can request 6 downloads a minute, one at a time.
- If the interval has no data, the download is refused. Choose an interval the traces cover.

## Waveform charts

To look at recorded waveforms as charts, with pan and zoom, use the previous dashboard's waveform page at [cloud.grillo.io/waveforms](https://cloud.grillo.io/waveforms). It can show up to 4 traces over 5 minutes and download the same zip with all of a sensor's channels.

## Continuous data and standard formats

For a continuous miniSEED stream into SeisComP, Swarm, or ObsPy, [stream your project's data to your own ringserver](/dashboard/data/realtime-export) and serve it over SeedLink. For Earthworm, you can also [send your sensors' data to your own server](/dashboard/data/data-server) and receive it with Grillo's open-source [coap2seis](https://github.com/grillo/coap2seis).
