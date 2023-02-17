---
sidebar_position: 4
sidebar_label: 'Archive Data'
---

# Archive Data
You can simply archive all sensor data and use them for your own analysis. The archived data can be accessed in <em>Download Manager</em> tab in the <em>Event</em> section.

```mermaid
flowchart LR
   A([Grillo Sensor]) & B([Seedlink Sensor]) --> C([Ingest Data]) --> D([Data Archive]) --> E([Archive]) --> F([Query archive in Data Manager])
   style C fill:#1b62d4
   style D fill:#1b62d4
```

- <em>Ingest Data</em> module ingests data from Grillo Sensors and prepares them from processing
- <em>Data Archive</em> module archives data in MSEED format