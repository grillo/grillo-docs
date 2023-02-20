---
sidebar_position: 1
sidebar_label: 'Ingest Data'
---

# Ingest Data
This module is typically enabled by default. It consumes station data in real-time from your Grillo sensor or SeedLink server and makes it available to other modules as a data stream.

```mermaid
flowchart TB
   A[Grillo Sensor] & B[SeedLink Server] --> Cp([<font color=333333><b>Ingest Data</b>]) -->|Data Stream| D([Other Modules]) 
   style Cp fill:#99CCFF
```

### Configuration

<details><summary><b>Ingest data</b></summary><p>

- `Verbose` [boolean]: `Logs` are printed in when set to true

</p></details>