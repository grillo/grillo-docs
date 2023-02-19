---
sidebar_position: 3
sidebar_label: 'Advanced Structural Monitoring Solution'
---

# Create advanced Structural Monitoring Solution
In a more complex case, we want to monitor the shaking of a structure, calculate spectral properties of the signal, generate graphics and receive an alert whenever the amplitude exceeds a predefined limit.

```mermaid
flowchart TB
   A[Grillo Sensor] & B[SeedLink Sensor] --> C([<font color=333333><b>Ingest Data</b>]) --> E([<font color=333333><b>Structural Health Monitoring</b>]) --> F([<font color=333333><b>Alert</b>]) --> G[Twitter] & H[Email]
   D([<font color=333333><b>Public Catalogue</b>]) --> E
   style C fill:#99CCFF
   style D fill:#99CCFF
   style E fill:#99CCFF
   style F fill:#99CCFF
```

- `Ingest Data` module ingests data from Grillo Sensors and prepares them from processing
- `Threshold Detection` module gets the data and evaluates whether the amplitude (in acceleration, velocity, or displacement) exceeded a predefined threshold. If so, it publishes an alert message
- `Alert` module distributes alert messages via channels such as e-mail or Twitter