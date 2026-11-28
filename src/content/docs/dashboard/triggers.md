---
title: Triggers
---

A trigger is shaking at one sensor that crossed its trigger threshold. Grillo records it from a few seconds before the shaking started until it died down, with its peak ground acceleration (PGA), peak ground velocity (PGV), duration, and dominant frequency.

![The Triggers list: start time, sensors, peak PGA, peak PGV, duration, dominant frequency, and alert](/img/screenshots/cloud/triggers.png)

Triggers are not earthquake detections. Each one is shaking at a sensor, whatever caused it: an earthquake, machinery, traffic, wind, construction, or someone bumping the sensor.

**Triggers** is a tab on the [Structural plan](/modules/structural-health-monitoring). Everyone in the project can open it.

## The Triggers page

Open **Triggers** to see the shaking your sensors recorded, newest first. Sensors that trigger within 10 seconds of each other are grouped into one row, a **shaking event**, so an earthquake felt by every sensor in a building is one row, not one per sensor.

| Column | Meaning |
|---|---|
| **Start (UTC)** | When the shaking started. **open** means it is still shaking |
| **Sensors** | How many of the project's sensors triggered, and which one first, for example **3 of 6 · Roof first**. For one sensor, its name |
| **Peak PGA** | The largest horizontal PGA of any sensor in the event, with a bar for scale |
| **Peak PGV** | The largest vertical PGV, from the geophone. **no geophone** for a sensor that has none |
| **Duration** | How long the shaking stayed over the threshold |
| **Dom. freq** | The frequency with the most energy at the peak |
| **Alert** | **sent** if the project's [trigger alert](/dashboard/alerts) went out for it, **held** if one was due but held back. Hover over it to see which sensor and why |

Filter the list with:

- The time range: **Last 24 hours**, **Last 7 days** (the default), **Last 30 days**, or **Last 90 days**
- **All sensors**, or one sensor
- **Any PGA**, or a minimum such as **PGA ≥ 5 mg**

Select a column heading to sort by it. Select **Load more** to see older triggers. New triggers appear on their own as they arrive.

Select a row to open the shaking event.

### Units

- **mg** is thousandths of the acceleration of gravity: 1000 mg = 1 g = 9.81 m/s².
- **PGA** is the horizontal resultant, √(HNE² + HNN²), after filtering to 0.5–25 Hz, which removes the sensor's offset and slow drift.
- **PGV** is the vertical velocity from the geophone, for a sensor whose geophone scale is confirmed.

## A shaking event

The page title gives the start time in UTC and how many sensors triggered, with an **alert sent** or **alert held** badge when there was an alert.

![A shaking event's page: peak PGA, PGV, duration, and frequency, each sensor's figures and alert, and the archive waveforms with onset and peak marked](/img/screenshots/cloud/trigger-page.png)

The tiles at the top give the event's **peak PGA**, **peak PGV**, **duration**, and **dominant frequency**.

**Sensors** has one row per sensor that triggered:

| Column | Meaning |
|---|---|
| **Sensor** | The sensor's name and station code |
| **PGA H** | Horizontal PGA, the resultant of east and north |
| **PGA E**, **PGA N**, **PGA Z** | PGA on the east, north, and vertical axes |
| **PGV Z** | Vertical PGV from the geophone |
| **Peak at** | When the sensor's peak came, after the start of the event |
| **Dur.** | How long that sensor's shaking lasted |
| **Freq** | Its dominant frequency |
| **Trigger** | The trigger setting the sensor ran with, for example `H_ANY ≥ 5.0 mg · 60 s / 60 s` (channel, threshold, seconds kept before and after) |
| **Alert** | That sensor's alert: sent, and to how many places, or held and why |

Below the table, a line says how many of the project's other sensors did not trigger.

While the event is still open, the page updates as the sensors' data arrives.

### Waveforms

Owners, admins, and members also see **Waveforms from the archive**: one chart per triggered sensor over the whole event, from the start of each trigger's pre-event window to its end. The onset, the peak, and the end are marked. Choose **HNE**, **HNN**, or **HNZ** to switch channel, and zoom with **+** and **−**; **Reset** goes back to the whole event. The values are raw counts, as the sensors sent them.

- **Open in Waveforms →** opens the [Waveforms](/dashboard/data/waveforms) tab on the sensor with the largest peak, all three channels, over the same window.
- **miniSEED** opens the [download dialog](/dashboard/data/waveforms#download-waveforms) for the triggered sensors over the event's window, as miniSEED or CSV.

Viewers see the figures but not the waveforms.

## If no triggers appear

1. Confirm the sensor is [online](/dashboard/sensors/sensor-status).
2. Check the threshold in **Project settings → Triggers**, or the sensor's own trigger setting on its page. See [Recording Mode and Thresholds](/dashboard/sensors/recording-mode). A threshold above the site's normal vibration records nothing until real shaking arrives. To test a sensor, tap the side of the enclosure firmly; a new trigger appears within about a minute.
3. Check the time range, the sensor, and the PGA filters.

If a sensor records too many triggers, raise its threshold. **Project settings → Triggers** shows how many of the last 30 days' triggers each threshold would have kept. See [Choose a threshold](/dashboard/sensors/recording-mode#choose-a-threshold).
