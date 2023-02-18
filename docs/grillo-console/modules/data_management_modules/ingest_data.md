---
sidebar_position: 1
sidebar_label: 'Ingest Data'
---

# Ingest Data module
This module is typically enabled by default. It consumes station data in real-time from your Grillo sensor or SeedLink server and makes it available to other modules as a data stream.

```mermaid
flowchart TB
   A[Grillo Sensor] & B[SeedLink Server] --> Cp([Ingest Data]) -->|Data Stream| D([Other Modules]) 
   style Cp fill:#1b62d4
```