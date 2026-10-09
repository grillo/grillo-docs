---
title: View and Download Waveforms
---

# View and Download Waveforms

Waveforms are part of the [SISTEM add-on](/events). Projects without SISTEM see their sensors' status and health, but not their waveforms. [Contact Grillo](/support/contact) to add SISTEM.

With SISTEM, Grillo Cloud shows seismic data two ways: a live view of what a sensor is recording now, and a review page for recorded data that you can download.

Both show data only for sensors in the active project that send their seismic data to Grillo. If your project [sends data to its own server](/dashboard/data/data-server), Grillo Cloud has no waveforms to show.

## Live view

1. Open **Sensors** and select a sensor.
2. The **Live sensor** panel at the top of the details shows the incoming waveform.
3. Choose a **Channel**, and switch between **Waveform** and **Spectrogram**.

The panel shows **Live** while samples are arriving and **Waiting for the next sensor sample** just after you open it. **Stale** or **No recent samples** means data has stopped arriving; check the sensor's [status](/dashboard/sensors/sensor-status).

Times in the live view are the sensor's own clock and are approximate. Values are raw counts, not calibrated ground motion.

Select **Open historical view** to review the same sensor's recorded data.

## Review recorded waveforms

Open **Waveform archive** in the sidebar. You can also get there from **Open historical view** in a sensor's details, or from **Open waveforms in archive** in an [event's details](/events/event-details).

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

On the review page, load the interval you want and select **Download native CSV + metadata**.

Your browser saves two files: `waveforms-native.csv` and `waveforms-metadata.json`.

The CSV contains the raw samples as recorded, one row per sample:

| Column | Meaning |
|---|---|
| `device_id` | Sensor Device ID |
| `channel` | Channel code |
| `segment` | Index of the continuous segment within the trace |
| `anchor_start_us` | Segment start time, microseconds since the Unix epoch |
| `rate_hz` | Sample rate |
| `sample_index` | Sample number within the segment |
| `native_value` | Raw value in counts |

A sample's time is `anchor_start_us + sample_index / rate_hz`. The metadata file lists the requested interval, each trace's gaps and units, and the `timeBasis` of every segment. Check `timeBasis` before treating the timestamps as exact acquisition time.

A CSV export holds up to 20,000 samples. Shorten the interval or remove traces if the export is refused.

## Continuous data and standard formats

For a continuous miniSEED stream into SeisComP, Swarm, or ObsPy, [stream your project's data to your own ringserver](/dashboard/data/realtime-export) and serve it over SeedLink. For Earthworm, you can also [send your sensors' data to your own server](/dashboard/data/data-server) and receive it with Grillo's open-source [coap2seis](https://github.com/grillo/coap2seis).
