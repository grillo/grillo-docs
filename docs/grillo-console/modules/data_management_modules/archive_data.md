---
sidebar_position: 2
sidebar_label: 'Archive Data Stream'
---

# Archive Data Stream
This module captures all data from the Ingest Module stream and stores it in an archive, ready for future analysis or downloading.
By default, data is archived in counts. In configuration you can remove the effect of the instrument response or sensitivity and archive data in acceleration or velocity units.

```mermaid
flowchart TB
   B([Ingest Data])-->|Data Stream| C([<font color=333333><b>Archive Data</b>]) --> D[(Archive)]
   style C fill:#99CCFF
```

### Configuration

<details><summary><b>Archive data</b></summary><p>

- `Verbose` [boolean]: `Logs` are printed in when set to true

</p></details>