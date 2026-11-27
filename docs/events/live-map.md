---
title: Live Map
---

# Live Map

**Live** is the first page you see after signing in. It shows your stations on a map, and earthquake detection as it happens: which stations pick up the waves, where the earthquake is, and how soon the shaking reaches nearby places. You can also [replay a past event](#replay-a-past-event) in the same view.

On a phone, the map comes first and the panels follow below it.

## The map

- **Stations** as diamonds: **online**, **late** (data arriving late), or **offline** (hollow). The **Legend** counts each.
- A station that **picked** the waves lights up for 30 seconds, with a flash when it detects.
- Recent epicenters, sized and colored by magnitude. Select one to show it in the panel; lines run from it to the stations that detected it.
- During an event: the pulsing epicenter, the expanding **P wave** and **S wave** fronts, and the land where there is **shaking now**.
- Fault lines and place names on the base map.

Owners, admins, and members can select a station to open its [sensor page](/dashboard/sensors/sensor-details).

The clock in the corner is Grillo's time in UTC. The connection chip in the menu bar shows whether the page is receiving live data; if it shows **Reconnecting** or **Offline** for long, refresh the page.

## The side panel

The status at the top says what detection is doing:

| Status | Meaning |
|---|---|
| **Monitoring** | No earthquake now, for example **Monitoring 14 of 15 stations** |
| **Detecting** | Stations have picked waves in the last 30 seconds and Grillo is locating the event |
| **Event located** | The event has a location. The line below says when it was located and when the alert went out, in seconds after the origin (**T+**) |

The large clock counts **T+** seconds from the earthquake's origin. Once an event is located, the panel shows its **Magnitude** (**pending** until it is estimated), **Depth**, and **Epicentre**, and a table of nearby places:

| Column | Meaning |
|---|---|
| **Place** | A town or city near the epicenter, ordered by when the shaking reaches it |
| **Intensity** | The expected shaking there: **Severe**, **Heavy**, **Moderate**, **Light**, or **Minor** |
| **Shaking in** | Seconds until the S wave, the strong shaking, arrives; **shaking** once it has; **no warning** where it arrived before the alert |

The event log below lists each pick, the location, and the S-wave arrivals as they happen.

**Sound** is off by default. Turn it on for a beep on each pick and a tone when an event is located. The browser remembers the choice.

Further down:

- **Current event**: the event's magnitude, status, origin, epicenter, depth, number of stations, alert decision, and its arrivals, with **Event detail →** to open its [page](/events/event-details)
- **Pipeline latency**: how long each step takes, from the sensor's sample to the pick, the event, and the alert
- **Earthquakes now**: the events of the last 15 minutes. With none, it links to the last one and to **all events**
- **Recent picks**: the latest picks across your stations

## Replay a past event

Select **▶ Replay** on an event in [Events](/events/event-catalog) or on its [details page](/events/event-details). The Live page then plays the event back as it was published: the picks lighting up, each revision of the location, the alert decision, the wave fronts, and the places' countdown.

A bar over the map reads **Replay · not live**. Use it to:

- **Play**, **Pause**, or play **Again**
- Choose **1×** or **2×** speed
- Drag the timeline to any moment. The **quake** mark is the origin time, the **alert** mark when the alert went out
- **Back to live** to return to the live view

A replay runs only in your browser. Nothing is sent, and no alert goes out.

## Limits

The live map is a monitoring view for your team, not a public warning service. Alerts are set up separately; see [Earthquake Alerts](/events/earthquake-alerts). See [Earthquake Early Warning](/concepts/earthquake-early-warning) for what warning time is physically possible.
