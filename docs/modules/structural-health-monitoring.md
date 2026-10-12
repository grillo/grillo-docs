---
title: Structural Monitoring
---

# Structural Monitoring

The **Structural** [plan](/dashboard/plans) is for monitoring vibration in buildings, warehouses, bridges, and other infrastructure. Instead of streaming continuously and detecting earthquakes across a network, each sensor records the shaking at its own location whenever it crosses a threshold.

![Grillo Cloud dashboard on the Structural plan, with the Triggers card](/img/screenshots/structural-dashboard.png)

## How it works

1. Each sensor measures all the time and keeps the last 60 seconds in memory.
2. When the horizontal acceleration crosses the sensor's **trigger threshold**, it uploads that pre-event buffer, then keeps uploading until the shaking has stayed below the threshold for the post-event time.
3. Grillo Cloud records the upload as a **trigger**, with its peak ground acceleration (PGA), peak ground velocity (PGV), and dominant frequency.
4. If the peak reaches the project's **alert level**, Grillo emails your team.

Because sensors upload only when something happens, they use much less mobile data than continuous recording.

## What you see in Grillo Cloud

- **Dashboard:** a **Triggers** card with the number of triggers in the last 24 hours and 30 days, and the largest horizontal PGA of the last 30 days.
- **Triggers** in the sidebar: every trigger in the project. See [Triggers](/dashboard/triggers).
- **Sensor details:** each sensor's trigger threshold and its recent triggers. See [Recording Mode and Thresholds](/dashboard/sensors/recording-mode).
- **Project Settings:** the project's trigger defaults and [trigger alerts](/dashboard/alerts).

**Events** and **Live** are not part of the Structural plan.

## Set up a structural project

1. [Claim your sensors](/dashboard/sensors/adding-sensor) and [add their locations](/dashboard/sensors/configuring-sensor). Give each one a location name that says where it is in the structure, such as `Level 12, east core`.
2. Install them following the [Grillo Pulse guide](/hardware/grillo-pulse). Bolt the sensor to the structure, not to a fitting that can rattle.
3. Check each sensor is [online](/dashboard/sensors/sensor-status). Its details show **Triggered** and its threshold.
4. Leave the default threshold of 5 mg for the first days, then [adjust it](/dashboard/sensors/recording-mode) for each sensor's normal vibration.
5. Set an alert level and recipients in [Trigger Alerts](/dashboard/alerts).

## Guides

- [Triggers](/dashboard/triggers)
- [Recording Mode and Thresholds](/dashboard/sensors/recording-mode)
- [Trigger Alerts](/dashboard/alerts)
- [Data API](/dashboard/data/api)
