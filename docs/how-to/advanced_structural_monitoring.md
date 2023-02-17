---
sidebar_position: 3
sidebar_label: 'Advanced Structural Monitoring Solution'
---

# Create advanced Structural Monitoring Solution
In a more complex case, we want to monitor shaking of a structure, calculate spectral properties of the signal, generate graphics and receive an alert whenever the amplitude exceeds a predefined limit.

```mermaid
flowchart LR
   A([Grillo Sensor]) & B([Seedlink Sensor]) --> C([Ingest Data]) --> E([Structural Health Monitoring]) --> F([Alert]) --> G([Twitter]) & H([SMS])
   D([Public Catalogue]) --> E
   style C fill:#1b62d4
   style D fill:#1b62d4
   style E fill:#1b62d4
   style F fill:#1b62d4
```

- <em>Ingest Data</em> module ingests data from Grillo Sensors and prepares them from processing
- <em>Threshold Detection</em> module gets the data and evaluates whether the amplitude (in acceleration, velocity, or displacement) exceeded a predefined threshold. If so, it publishes an alert message
- <em>Alert</em> module distributes alert messages via channels such as e-mail or Twitter