---
title: Live Simulation
---

# Live Simulation

The current **Live** page demonstrates earthquake detection and wave propagation using generated mock earthquakes and a fixed mock station set.

:::danger Simulation only
Live is not currently an operational feed of the selected network and must not be used to make protective-action decisions.
:::

![Live earthquake simulation in Grillo Platform](/img/screenshots/11-live-map.png)

## Run a simulation

1. Open **Live** in Grillo Platform.
2. Open the simulation settings.
3. Choose the minimum generated magnitude, playback speed, auto-zoom preference, and alert sound.
4. Preview audio if needed.
5. Start the simulation.

The visualization generates an earthquake, highlights simulated station picks, locates the event after enough picks, and animates P- and S-wave propagation. Its event log records simulation milestones.

## What the controls mean

- **Speed** changes simulation playback rate, not physical wave velocity.
- **Minimum magnitude** constrains the generated mock event.
- **Auto zoom** controls map movement during the simulation.
- **Alert sound** selects or previews the browser audio used by the demonstration.

Browser audio may require a user interaction and may be blocked by device or browser settings.

## Operational events

Use [Events](/events/event-catalog) for event records associated with the selected network. Confirm operational alert channels and procedures directly with the organization responsible for the deployment.
