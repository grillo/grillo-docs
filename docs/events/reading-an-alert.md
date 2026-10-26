---
title: How to Read an Alert
---

# How to Read an Alert

When an earthquake is detected, Grillo Cloud shows it in three places: on the **Live map** as it happens, in **Events** afterwards, and, on projects with trigger alerts, as an **email**. This page explains how to read each one, and what not to assume.

## On the Live map

The status at the top of the side panel tells you what is happening:

1. **MONITORING**: stations are reporting and nothing has been detected. This is the normal state.
2. **DETECTING**: one or more stations have picked up waves, and Grillo Cloud is working out where the earthquake is. Do not read too much into this yet; a single station can be set off by local noise.
3. **EVENT LOCATED**: enough stations have detected the earthquake to locate it. The panel now shows:
   - **Magnitude**: the estimated size of the earthquake
   - **Depth**: how deep it started, in kilometers
   - **Location**: where it started (the epicenter)
   - A list of places, each with the number of seconds before **Strong shaking** is expected to reach it. **no warning** means the shaking had already arrived there when the event was located.
   - When the alert was issued, in seconds after the earthquake began, for example **T+8 s**

On the map, the circles moving out from the epicenter are the **P-wave** (the first, weaker waves) and the **S-wave** (the stronger shaking that follows).

:::danger Check the mode first
If a banner across the map reads **SIMULATED SCENARIO · NOT REAL EVENTS**, the map is in Simulation mode and the earthquake is made up. Real detections only appear in **LIVE** mode.
:::

## In Events

Every located earthquake is added to [Events](/events/event-catalog). Use it to check what happened after the fact:

- The chart shows events by time and magnitude. The dashed line marks M4, the alert threshold.
- Select an event to open its [details](/events/event-details): origin time in UTC and Haiti local time, magnitude, depth, nearest place, how many stations detected it, and how long detection took.

## By email

Projects with [trigger alerts](/dashboard/alerts) email their recipients when shaking at a sensor passes the project's alert level. That email is about shaking measured **at one sensor**, given as peak ground acceleration (PGA) in mg, not about the earthquake as a whole. The [Alerts](/dashboard/alerts) page lists every alert email sent in the last 90 days.

## What not to assume

- **The numbers are automatic estimates.** Magnitude, location, and depth are calculated within seconds and can change, or differ from the figures a seismic agency publishes later.
- **Warning time is not guaranteed.** Places close to the epicenter may get little or no warning. See [Earthquake Early Warning](/concepts/earthquake-early-warning).
- **No alert does not mean no earthquake.** If stations near the earthquake are offline, detection is slower or may not happen. Check [Sensors](/dashboard/sensors).
- **Grillo Cloud is not a public warning service.** It does not replace instructions from civil protection, emergency services, or the official seismic authority. Follow your organization's procedures.

## Next

- [Live Map](/events/live-map)
- [How Detection Works](/events/how-detection-works)
