---
sidebar_position: 3
sidebar_label: 'SeedLink Server'
---

# SeedLink Server Module
This module captures all data from the Ingest Module stream and publishes it as a SeedLink Server. This can be used to relay the data stream from the cloud to an on-premise server.

```mermaid
flowchart LR
   A[Ingest Module]--> Cp[[SeedLink Server Module]] --> id1[Local Server]
   style Cp fill:#1b62d4
```

---

To find the `Ip Address` (Host Address) and `Port` for this new SeedLink Server, open the logs for the module:

![Select station type](./img/SeedLink%20server.png)