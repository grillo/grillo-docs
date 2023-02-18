---
sidebar_position: 3
sidebar_label: 'Advanced Structural Monitoring Solution'
---

# Create advanced Structural Monitoring Solution
In a more complex case, we want to monitor the shaking of a structure, calculate spectral properties of the signal, generate graphics and receive an alert whenever the amplitude exceeds a predefined limit.

```mermaid
flowchart TB
   A[Grillo Sensor] & B[SeedLink Sensor] --> C([Ingest Data]) --> E([Structural Health Monitoring]) --> F([Alert]) --> G[Twitter] & H[Email]
   D([Public Catalogue]) --> E
   style C fill:#1b62d4
   style D fill:#1b62d4
   style E fill:#1b62d4
   style F fill:#1b62d4
```

- `Ingest Data` module ingests data from Grillo Sensors and prepares them from processing
- `Threshold Detection` module gets the data and evaluates whether the amplitude (in acceleration, velocity, or displacement) exceeded a predefined threshold. If so, it publishes an alert message
- `Alert` module distributes alert messages via channels such as e-mail or Twitter