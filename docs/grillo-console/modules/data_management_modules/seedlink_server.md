---
sidebar_position: 3
sidebar_label: 'SeedLink Server'
---

# SeedLink Server
This module captures all data from the Ingest Module stream and publishes it through a SeedLink Server. This can be used to relay the data stream from the cloud to a local server.

:::info
Only one SeedLink Module is required to stream all your sensors through as single URL.
:::


```mermaid
flowchart TB
   A([Ingest Module])-->|Data Stream| Cp([<font color=333333><b>SeedLink Server</b>]) --> id1[Local Server]
   style Cp fill:#99CCFF
```

---

To find the `Ip Address` (Host Address) and `Port` for this new SeedLink Server, open the logs for the module:

![Select station type](./img/seedlink%20server.png)

### Configuration

<details><summary><b>Seedlink server</b></summary><p>

- `Verbose` [boolean]: `Logs` are printed in when set to true

</p></details>
