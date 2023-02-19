---
sidebar_position: 3
sidebar_label: 'SeedLink Server'
---

# SeedLink Server Module
This module captures all data from the Ingest Module stream and publishes it as a SeedLink Server. This can be used to relay the data stream from the cloud to a local server.

```mermaid
flowchart TB
   A([Ingest Module])-->|Data Stream| Cp([<font color=333333><b>SeedLink Server</b>]) --> id1[Local Server]
   style Cp fill:#99CCFF
```

---

To find the `Ip Address` (Host Address) and `Port` for this new SeedLink Server, open the logs for the module:

![Select station type](./img/seedlink%20server.png)