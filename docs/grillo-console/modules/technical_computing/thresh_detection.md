---
sidebar_position: 1
sidebar_label: 'Threshold Detection'
---

# Threshold Detection
The `Threshold Detection` module enables you to set triggers based on maximum acceleration, velocity, or displacement recorded by your sensor. You can choose to publish an Alert message when the threshold value is exceeded.

When the threshold value is exceeded, the module produces `Events` that are displayed in the `Event` tab in the Grillo Console.

```mermaid
flowchart TB
   B([Other Modules])-->|Data Stream| Cp([<font color=333333><b>Threshold Detection</b>]) -->|Alert, Event| D([Other Modules])
   style Cp fill:#99CCFF
```

### Configuration

<details><summary><b>General</b></summary><p>

- `No Det Win` [float, seconds]: Time since a detection after which no more detections are going to be issued
- `Verbose` [boolean]: `Logs` are printed in when set to true

</p></details>

<details><summary><b>Acceleration</b></summary><p>

- `Trigger` [boolean]: Turn on trigger for exceedance
- `Threshold` [float]: Threshold for alert
- `Alert` [boolean]: Turn on alert

</p></details>

<details><summary><b>Velocity</b></summary><p>

- `Trigger` [boolean]: Turn on trigger for exceedance
- `Threshold` [float]: Threshold for alert
- `Alert` [boolean]: Turn on alert

</p></details>

<details><summary><b>Displacement</b></summary><p>

- `Trigger` [boolean]: Turn on trigger for exceedance
- `Threshold` [float]: Threshold for alert
- `Alert` [boolean]: Turn on alert

</p></details>