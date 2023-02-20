---
sidebar_position: 7
sidebar_label: 'Structural Health Monitoring'
---

# Structural Health Monitoring
The `Structural Health Monitoring` module enables you to calculate and plot signal properties in time and frequency domain and issue `Alerts` in case a threshold is exceeded.

The module receives the `Event` object and processes a 5-minute signal window after the origin time of the event.

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
   B([Other Modules])-->|Event| C([<font color=333333><b>Structural Health Monitoring</b>]) -->|Alert, Figure| D([Other Modules])
   style C fill:#99CCFF
```
### Configuration

<details><summary><b>General</b></summary><p>

- `Verbose` [boolean]: `Logs` are printed in when set to true

</p></details>

<details><summary><b>Acceleration</b></summary><p>

- `Peak Value Alert` [boolean]: Turn on trigger for exceedance
- `Threshold` [float]: Threshold for alert
- `Plot` [boolean]: Plot and save a figure

</p></details>

<details><summary><b>Velocity</b></summary><p>

- `Peak Value Alert` [boolean]: Turn on trigger for exceedance
- `Threshold` [float]: Threshold for alert
- `Plot` [boolean]: Plot and save a figure

</p></details>

<details><summary><b>Displacement</b></summary><p>

- `Peak Value Alert` [boolean]: Turn on trigger for exceedance
- `Threshold` [float]: Threshold for alert
- `Plot` [boolean]: Plot and save a figure

</p></details>

<details><summary><b>Spectral Acceleration</b></summary><p>

- `Peak Value Alert` [boolean]: Turn on trigger for exceedance
- `Threshold` [float]: Threshold for alert
- `Plot` [boolean]: Plot and save a figure

</p></details>

<details><summary><b>Pseudo-Spectral Acceleration</b></summary><p>

- `Peak Value Alert` [boolean]: Turn on trigger for exceedance
- `Threshold` [float]: Threshold for alert
- `Plot` [boolean]: Plot and save a figure

</p></details>

<details><summary><b>Spactral Velocity</b></summary><p>

- `Peak Value Alert` [boolean]: Turn on trigger for exceedance
- `Threshold` [float]: Threshold for alert
- `Plot` [boolean]: Plot and save a figure

</p></details>

<details><summary><b>Pseudo Spectral Velocity</b></summary><p>

- `Peak Value Alert` [boolean]: Turn on trigger for exceedance
- `Threshold` [float]: Threshold for alert
- `Plot` [boolean]: Plot and save a figure

</p></details>

<details><summary><b>Spectral Displacement</b></summary><p>

- `Peak Value Alert` [boolean]: Turn on trigger for exceedance
- `Threshold` [float]: Threshold for alert
- `Plot` [boolean]: Plot and save a figure

</p></details>