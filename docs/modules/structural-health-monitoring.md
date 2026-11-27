---
title: Structural monitoring
---

# Structural monitoring

The **Structural** [plan](/dashboard/plans) is for monitoring vibration in buildings, warehouses, bridges, and other infrastructure. Instead of detecting earthquakes across a network, Grillo records the shaking at each sensor whenever it crosses a threshold, and alerts your team when it reaches an alert level.

## How it works

1. Each sensor measures all the time.
2. When its acceleration crosses the **trigger threshold**, Grillo records a **trigger**: the shaking from a few seconds before it crossed the threshold until it has stayed below it for the post-event time. Grillo finds triggers with the same rule whether the sensor uploads only when shaking crosses the threshold (triggered recording) or streams continuously.
3. Each trigger gets its peak ground acceleration (PGA), peak ground velocity (PGV), duration, and dominant frequency. Sensors that trigger within 10 seconds of each other are grouped into one shaking event.
4. If the peak reaches the project's **alert level**, Grillo alerts your team by email, SMS, or webhook.

In triggered recording, sensors upload only when something happens, so they use much less mobile data than continuous recording.

## What you see in Grillo Cloud

The menu bar has **Live**, **Sensors**, **Triggers**, and **Waveforms**.

- **Triggers:** every shaking event in the project. See [Triggers](/dashboard/triggers).
- **Project settings → Triggers:** the project's trigger threshold and timing, sent to every sensor. See [Recording Mode and Thresholds](/dashboard/sensors/recording-mode).
- **Project settings → Trigger alerts:** the alert level, recipients, webhooks, and SMS. See [Trigger Alerts](/dashboard/alerts).
- **Waveforms:** the recorded data of any sensor. See [Waveforms](/dashboard/data/waveforms).

Earthquake detection, the **Events** catalog, and earthquake **Alerts** are not part of the Structural plan.

## Set up a structural project

1. [Claim your sensors](/dashboard/sensors/adding-sensor) and [add their locations](/dashboard/sensors/configuring-sensor). Give each one a name that says where it is in the structure, such as `Level 12, east core`.
2. Install them following the [Grillo Pulse guide](/hardware/grillo-pulse). Bolt the sensor to the structure, not to a fitting that can rattle.
3. Check each sensor is [online](/dashboard/sensors/sensor-status).
4. Leave the default threshold of 5 mg for the first days, then [adjust it](/dashboard/sensors/recording-mode) for the site's normal vibration.
5. Set an alert level and where alerts go in [Trigger Alerts](/dashboard/alerts).

## Guides

- [Triggers](/dashboard/triggers)
- [Recording Mode and Thresholds](/dashboard/sensors/recording-mode)
- [Trigger Alerts](/dashboard/alerts)
