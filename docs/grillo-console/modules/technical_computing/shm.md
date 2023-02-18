---
sidebar_position: 7
sidebar_label: 'Structural Health Monitoring'
---

# Structural Health Monitoring
The `Structural Health Monitoring` module enables you to calculate and plot signal properties in time and frequency domain and issue `Alerts` in case a threshold is exceeded.

The module receives the `Event` object and processes 5-minute signal window after the origin time of the event.

You can claculate and plot the following signal properties:

In time domain:
- `Acceleration`
- `Velocity`
- `Displacement`

In the frequency domain:
- `Spectral Acceleration`
- `Pseudo-Spectral Acceleration`
- `Spectral Velocity`
- `Pseudo-Spectral Velocity`
- `Spectral Displacement`
- `Acceleration Power Spectral Density`
- `Velocity Power Spectral Density`
- `Displacement Power Spectral Density`

You can choose one or multiple signal parameters and set a threshold value for an `Alert` to be issued.

```mermaid
flowchart TB
   B([Other Modules])-->|Event| C([Structural Health Monitoring]) -->|Alert, Figure| D([Other Modules])
   style C fill:#1b62d4
```