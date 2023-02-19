---
sidebar_position: 4
sidebar_label: 'Archive Data'
---

# Archive Data
You can simply archive all sensor data and use them for your own analysis. The archived data can be accessed in `Download Manager` tab in the `Event` section.

```mermaid
flowchart TB
   A[Grillo Sensor] & B[SeedLink Sensor] --> C([<font color=333333><b>Ingest Data</b>]) --> D([<font color=333333><b>Data Archive</b>]) --> E[(Archive)] --> F[Query archive in Data Manager]
   style C fill:#99CCFF
   style D fill:#99CCFF
```

- `Ingest Data` module ingests data from Grillo Sensors and prepares them from processing
- `Data Archive` module archives data in MSEED format