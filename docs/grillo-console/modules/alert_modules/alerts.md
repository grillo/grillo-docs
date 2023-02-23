---
sidebar_position: 1
sidebar_label: 'Alerts'
---

# Alerts
`Alerts` module distributes alerts to via various channels. Currently implemented channels include publishing to Twitter or Email. Let us know if you are interested in implementation of other publishing channels.

```mermaid
flowchart TB
   B([Other Modules])-->|Alert| C([<font color=333333><b>Alerts</b>]) --> D[Twitter] & E[Email]
   style C fill:#99CCFF
```

### Configuration

<details><summary><b>General</b></summary><p>

- `Verbose` [boolean]: If true, `Logs` are printed out

</p></details>

<details><summary><b>Twitter alert</b></summary><p>

- `Send alert` [boolean]: If set to true, alert message id going to be published on Twitter
- `Consumer key` [string]: Twitter API consumer key
- `Consumer secret` [string]: Twitter API consumer secret
- `Access token` [string]: Twitter API access token
- `Access token secret` [string]: Twitter API access token secret

</p></details>


<details><summary><b>Email alert</b></summary><p>

- `Send alert` [boolean]: If set to true, alert message id going to be delivered via email
- `List of addressees` [list]: Comma separated list of e-mail addresses 

</p></details>