---
sidebar_position: 6
sidebar_label: 'Public Earthquake Catalog'
---

# Public Earthquake Catalog
The module enables you to obtain any seismic catalogue available via the [FDSN service](https://docs.obspy.org/packages/obspy.clients.fdsn.html). The module updates the catalogue periodically and creates `Event` and `Alert` (optionally) objects that can be used by subsequent modules. 

```mermaid
flowchart TB
   B([<font color=333333><b>Public Earthquake Catalog</b>])-->|Event, Alert| C([Other Modules])
   style B fill:#99CCFF
```

### Configuration

<details><summary><b>Catalog</b></summary><p>

- `Send alert` [boolean]: Publishes an aler message on new event
- `Verbose` [boolean]: `Logs` are printed in when set to true

</p></details>