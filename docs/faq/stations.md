---
sidebar_position: 10
sidebar_label: 'Stations'
---

# Stations FAQ

<details><summary><b>My station shows to be off in the Grillo Console.</b></summary><p>

Please follow the flow below.

```mermaid
graph TB
   B{{Is the sensor blinking blue?}}
   B -->|No| C(<font color=333333><b>Restart the sensor\nor follow the instructions\nin `Connecting your sensor`</b>)
   B -->|Yes| D(<font color=333333><b>Restart ingestion module\nin Grillo Console and wait\na few minutes</b>)
   D --> H{{Did it help?}}
   C --> H
   H -->|Yes| I(<font color=333333><b>Great!</b>)
   H -->|No| J(<font color=333333><b>Contact Grillo Support</b>)

   style D fill:#99CCFF
   style C fill:#99CCFF
   style I fill:#99CCFF
   style J fill:#99CCFF
```

</p></details>

<details><summary><b>How many stations can be associated with one account?</b></summary><p>

The currrent limit is 200 stations. Please contact us if you need to onboard more stations.

</p></details>
