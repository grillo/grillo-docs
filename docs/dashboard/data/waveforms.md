---
title: View and Download Waveforms
---

# View and Download Waveforms

Grillo Cloud shows seismic data two ways: a live view of what a sensor is recording now, and the waveform archive of recorded data, which you can download on the Network, Seismic, and Enterprise [plans](/dashboard/plans).

Sensors that record [triggered](/dashboard/sensors/recording-mode) have no live view. Their recordings are in [Triggers](/dashboard/triggers) and the waveform archive.

Both show data only for sensors in the active project that send their seismic data to Grillo. If your project [sends data to its own server](/dashboard/data/data-server), Grillo Cloud has no waveforms to show.

## Live view

1. Open **Sensors** and select a sensor.
2. The **Live sensor** panel at the top of the details shows the incoming waveform.
3. Choose a **Channel**, and switch between **Waveform** and **Spectrogram**.

The panel shows **Live** while samples are arriving and **Waiting for the next sensor sample** just after you open it. **Stale** or **No recent samples** means data has stopped arriving; check the sensor's [status](/dashboard/sensors/sensor-status).

Times in the live view are the sensor's own clock and are approximate. Values are raw counts, not calibrated ground motion.

Select **Open historical view** to review the same sensor's recorded data.

## Review recorded waveforms

Open **Waveform archive** in the sidebar. You can also get there from **Open historical view** in a sensor's details, **Open waveforms in archive** in an [event's details](/events/event-details), or **Open in waveform archive** in a [trigger's details](/dashboard/triggers#waveforms).

1. Set **Start (UTC)** and **End (UTC)**. All times are UTC.
2. Choose a **Station** and a **Channel**, then select **Add trace**. You can show up to 4 traces.
3. Select **Load recording**.
4. Use the pan and zoom buttons to move through the recording, and **Reset** to return to the full interval.

When you open the page from an event, it marks the event's origin time and the automatic picks on the traces.

### Limits

- One request covers up to 5 minutes, 4 channels, and 75,000 samples.
- The most recent data may still be uploading. The page shows the time of the **latest published** recording.
- Gaps are marked on each trace. Open **Gap details** to see where data is missing.

### Channels

| Channel | Sensor |
|---|---|
| `EHZ` | Vertical geophone (Grillo Pulse) |
| `HNZ`, `HNN`, `HNE` | Accelerometer: vertical, north, east |

## Download data

Downloads are included in the Network, Seismic, and Enterprise [plans](/dashboard/plans).

On the review page, load the interval you want and select **Download (miniSEED + CSV)**. Grillo Cloud shows **Preparing download…** while it builds the file, then your browser downloads a zip. A download covers one sensor, up to 4 channels and 5 minutes.

You can also download a [trigger](/dashboard/triggers#waveforms) from its details. The download covers the trigger window plus 5 seconds either side, up to 5 minutes around the peak.

The zip contains:

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

## Continuous data and standard formats

For a continuous miniSEED stream into SeisComP, Swarm, or ObsPy, [stream your project's data to your own ringserver](/dashboard/data/realtime-export) and serve it over SeedLink. For Earthworm, you can also [send your sensors' data to your own server](/dashboard/data/data-server) and receive it with Grillo's open-source [coap2seis](https://github.com/grillo/coap2seis).
