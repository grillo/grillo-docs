---
title: Verify sensor status
---

# Verify sensor status

Use the **Sensors** page and the sensor's page to confirm that Grillo Cloud is receiving data from a sensor.

## States

The **State** column comes from the sensor's health reports, which it sends every minute or less:

| State | Meaning |
|---|---|
| **online** | A health report arrived in the last 2 minutes |
| **late** | The last health report arrived between 2 minutes and 1 hour ago |
| **offline** | No health report for more than an hour |
| **not seen** | The sensor has never reported, for example a sensor just claimed and not yet powered |

**Last SOH** says how long ago the last health report arrived.

## Data

On every plan except Network, the **Data** column says whether the sensor's seismic data is reaching Grillo: **receiving**, **late**, or **none**.

Health reports and seismic data travel separately. A sensor that is **online** with Data **none** is alive but its seismic data is not arriving. Check its **Data server** in **Current connection** on its page, and [contact Grillo Support](/support/contact) if it is not what you expect.

## Checklist after setup or maintenance

1. Open **Sensors** and filter by the station or Device ID.
2. Confirm it is **online**, and that **Data** says **receiving**.
3. Open its page and check **Connectivity** shows it reporting over the last 24 hours.
4. In **Current connection**, check the link and signal, **Power**, and **Clock**.
5. In **Station**, confirm the position. A station that is **not placed** is ignored by earthquake detection.
6. Confirm the firmware version, and that it is not marked **old**.

To prove seismic data is arriving too (every plan except Network), watch the **Live waveform** on the sensor's page and tap the enclosure lightly. The trace should respond. On the Structural plan, tap firmly enough to cross the [trigger threshold](/dashboard/sensors/recording-mode); a new trigger appears on the [Triggers](/dashboard/triggers) page.

## If a sensor is offline or late

1. Confirm the Device ID is correct.
2. Check that the sensor has power from its supply: 9–16 V DC for Grillo Pulse, USB-C for Grillo One.
3. Check the connection for its variant: Ethernet link, Wi-Fi, or cellular service and SIM.
4. Ask the site's network administrator whether outbound UDP is allowed. Sensors send to Grillo on UDP ports 5683 and 5684.
5. Give the sensor a few minutes to start and connect.
6. Look at **Connectivity** on its page to see when it last reported, whether it has been dropping out, and why it restarted.
7. Contact support with the Device ID, last report time, power arrangement, connection type, and screenshots.

## If the signal is weak

**Connectivity** rates the median signal **good** (-85 dBm or better), **fair**, or **poor** (below -100 dBm). For a poor signal, move the antenna or the sensor, or use an external antenna.

Follow the troubleshooting guide for the hardware: [Grillo Pulse](/hardware/grillo-pulse/troubleshooting) or [Grillo One](/hardware/grillo-one/setup#troubleshooting).
