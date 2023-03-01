---
sidebar_position: 10
sidebar_label: 'Stations'
---

# Stations FAQ

<details><summary><b>My station appears not connected in the Grillo Console.</b></summary><p>

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

<details><summary><b>How do I find network APN details?</b></summary><p>

You can find APN details of your network by inserting the SIM card into your phone. On iPhone, follow these steps to get the APN details. Steps are similar on Android OS.

![apn_iphone](img/apn_iphone2.png)

</p></details>

<details><summary><b>How do I set up Network mode and Data transmission mode?</b></summary><p>

`Grillo Air` can connect to either 2G (GSM) network, or LTE network Nb-IoT or CAT-M (also sometimes referred to as LTE-M). Grillo sensor should choose the best available option automatically. If not, you may need to define the desired option in APN setup after the sensor boots-up.
- To force the GSM option, set `GSM` to `1` and `LTE` to `0`
- To force either `Nb-IoT` or `CAT-M`, set the desired one to `1` and the other to `0` 

</p></details>

<details><summary><b>Troubleshooting using serial output</b></summary><p>

You can use the sensor serial output to track down the reasons of your connectivity problems.
To display the serial output on MAC OS system, follow these steps:
- Open `Terminal`
- Connect your Grillo Sensor to your computer via the USB-C connector on the sensor
- Find the correct port the sensor is connected to in `/dev/`. Grillo Connect is usually at `/dev/cu.SLAB_USBtoUART`
- Run `screen /dev/cu.SLAB_USBtoUART 115200` (replace serial port if needed)
- Restart your sensor to see the logs from the very beginning. If you need help interpreting the logs, please copy&paste them in a text file and contact us. We can help you to troubleshoot.

</p></details>

<details><summary><b>How many stations can be associated with one account?</b></summary><p>

The currrent limit is 200 stations. Please contact us if you need to onboard more stations.

</p></details>
