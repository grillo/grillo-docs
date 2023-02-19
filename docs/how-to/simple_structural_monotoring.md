---
sidebar_position: 2
sidebar_label: 'Simple Structural Monitoring Solution'
---

# Create simple Structural Monitoring Solution
Grillo has the capability to monitor seismic shaking of structures. In a simple case, we want to monitor the shaking of a structure and receive an alert whenever the amplitude exceeds a predefined limit.

```mermaid
flowchart TB
   A[Grillo Sensor] --> C([<font color=333333><b>Ingest Data</b>]) --> D([<font color=333333><b>Threshold Detection</b>]) --> E([<font color=333333><b>Alert</b>]) --> F[Twitter] & G[Email]
   style C fill:#99CCFF
   style D fill:#99CCFF
   style E fill:#99CCFF
```

- `Ingest Data` module ingests data from Grillo Sensors and prepares them from processing
- `Threshold Detection` module gets the data and evaluates whether the amplitude (in acceleration, velocity, or displacement) exceeded a predefined threshold. If so, it publishes an alert message
- `Alert` module distributes alert messages via channels such as e-mail or Twitter