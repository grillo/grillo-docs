---
sidebar_position: 1
sidebar_label: 'Ingest Data'
---

# Ingest Data module
This module is typically enabled by default. It consumes data in real-time from your Grillo sensor or SeedLink server, converts it to `MiniSeed` format, and makes it available to other modules as a data stream.

```mermaid
flowchart LR
   A([Grillo Sensor]) & B([SeedLink Server])--> Cp[[Ingest Data Module]]
   style Cp fill:#f9f
```

