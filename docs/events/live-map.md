---
title: Live Map
---

# Live Map

**Live** shows earthquake detection on a map as it happens. It has two modes:

- **Live** follows your project's stations and SISTEM's real detections.
- **Simulation** plays a made-up earthquake on a demonstration network, so you can see how detection works.

![Live map in Grillo Cloud](/img/screenshots/11-live-map.png)

## What the map shows

- Your stations, with their online status
- Cities and fault lines
- During an event: the stations that have detected it, the located epicenter, and expanding P-wave and S-wave fronts
- Estimated damage zones around the epicenter, from **Minor** to **Severe**

The **Legend** explains each symbol.

## Live mode

The **Live** button shows whether the map is connected to SISTEM: **Connected**, **Connecting**, or **Disconnected**. If it stays disconnected, refresh the page.

When stations start detecting shaking, each pick plays a short beep and the **Event Log** lists the pick. Once at least four stations have picked, SISTEM locates the event and the map shows its magnitude, epicenter, and the cities the waves will reach.

## Map settings

Open **Map Settings** to choose:

- **Minimum Magnitude** — ignore events smaller than this
- **Auto-zoom to epicenter** — move the map to each new event
- **Alert Sound** — the sound played when an event is detected: **Earthquake** or **Tone**

Browsers block audio until you have interacted with the page. Click anywhere on the page after opening it if you rely on the sound.

## Simulation mode

Switch to **Simulation** and select **Simulate Earthquake**. The map generates an earthquake, shows simulated station picks, locates the event, and animates the waves.

![A simulated earthquake on the live map: stations detect it, the event is located, and the P-wave and S-wave fronts spread out while panels show the magnitude, estimated arrival times, and affected cities](/img/screenshots/live-map-simulation.gif)

:::danger Simulation is not real data
Simulation mode uses a demonstration station set, not your sensors. Check which mode is selected before acting on anything shown on this page.
:::

## Limits

The live map is a monitoring view for your team. It does not send SMS, email, or mobile alerts, and it is not a public warning service. See [Earthquake Early Warning](/concepts/earthquake-early-warning) for what warning time is physically possible.
