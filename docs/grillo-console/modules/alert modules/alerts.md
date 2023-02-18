---
sidebar_position: 1
sidebar_label: 'Alerts'
---

# Alerts
`Alerts` module distributes alerts to via various channels. Currently implemented channels include publishing to Twitter or Email.

```mermaid
flowchart TB
   B([Other Modules])-->|Alert| C([Alerts]) --> D[Twitter] & E[Email]
   style C fill:#1b62d4
```