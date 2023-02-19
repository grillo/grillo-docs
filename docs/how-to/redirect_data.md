---
sidebar_position: 5
sidebar_label: 'Redirect Data Flow'
---

# Redirect Data Flow
You can redirect the data flow and stream all data to your own system. This is done by starting a SeedLink Server that offers Grillo Sensor data in real time.

```mermaid
flowchart TB
   A[Grillo Sensor] --> C([<font color=333333><b>Ingest Data</b>]) --> D([<font color=333333><b>SeedLink Server</b>]) --> E[Outside World]
   style C fill:#99CCFF
   style D fill:#99CCFF
```

- `Ingest Data` module ingests data from Grillo Sensors and prepares them from processing
- `SeedLink Server` starts SeedLink server