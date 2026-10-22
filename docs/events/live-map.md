---
title: Live Map
---

# Live Map

The **Live map** is the first page you see after signing in. It shows your stations on a dark map, and earthquake detection as it happens. It has two modes, chosen at the top of the side panel:

- **LIVE** follows your project's stations and their real detections.
- **SIMULATION** plays a scenario earthquake over your real stations, so you can see how detection works.

## What the map shows

- Your stations. The **Legend** counts stations and **Offline** stations
- Fault lines
- During an event: stations that have **Picked** the waves, the epicenter, the expanding **P-wave** and **S-wave** fronts, and where there is **Shaking now**
- Estimated shaking zones around the epicenter, from **Minor** to **Severe**

Stations with no saved location are not on the map; a note says how many.

Use the full-screen button to show the map on its own, for example on a wall screen.

## The side panel

The status at the top of the panel says what detection is doing:

| Status | Meaning |
|---|---|
| **MONITORING** | Stations are reporting and there is no event, for example **14 of 15 stations reporting · no event** |
| **DETECTING** | One or more stations have picked the waves and Grillo Cloud is locating the event |
| **EVENT LOCATED** | The event has a location and magnitude, and the panel says when the alert was issued, in seconds after the origin |

Once an event is located, the panel shows its **Magnitude**, **Depth**, and **Location**, and a list of places with how many seconds each has before **Strong shaking** reaches it, or **no warning** where shaking had already arrived.

The **Event log** lists each pick, the location, and S-wave arrivals as they happen.

**LIVE FEED CONNECTED** shows the map is receiving detections. If it stays on **CONNECTING TO LIVE FEED…**, refresh the page. The latency readout shows how long picks and events take to reach your screen.

If any stations are offline, the bar at the bottom says how many. Select it to open [Sensors](/dashboard/sensors) filtered to offline sensors.

## Simulation mode

Switch to **SIMULATION**. A banner across the map reads **SIMULATED SCENARIO · NOT REAL EVENTS**. Choose a speed of 1×, 2×, or 4×.

The simulation uses your project's real station positions and needs at least 4 reporting stations. It plays picks, locates the event, and animates the waves and shaking.

:::danger Simulation is not real data
The events in Simulation mode are made up. Check which mode is selected before acting on anything shown on this page. Simulated events are not added to the [event catalog](/events/event-catalog).
:::

## Limits

The live map is a monitoring view for your team. It does not itself send SMS, email, or mobile alerts, and it is not a public warning service. See [Earthquake Early Warning](/concepts/earthquake-early-warning) for what warning time is physically possible.
