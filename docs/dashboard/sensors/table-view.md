---
title: Sensor Table
---

# Sensor Table

The **Sensors** page shows every sensor in the project as a row. Problems come first: rows start sorted by state, with offline sensors at the top. On the Network plan they start sorted by station.

![The Sensors table with each sensor's state, data, station, type, firmware, link, uptime, and last health report](/img/screenshots/cloud/sensors.png)

## Columns

| Column | Meaning |
|---|---|
| State | **online**, **late**, **offline**, or **not seen**, from the sensor's health reports. See [Verify Sensor Status](/dashboard/sensors/sensor-status). |
| Data | Whether the sensor's seismic data is reaching Grillo: **receiving**, **late**, or **none**. Not shown on the Network plan, where the data goes to your own server. |
| Station | The station: network code and station code, for example `HT.2354` |
| Name | The station's name. **not placed** means it has no position yet |
| Type | The hardware: **Pulse v1**, **Pulse v4 Ethernet**, **Pulse v4 cellular**, or **Grillo One**. A **≠** means the sensor reports a different type than the one recorded for it; hover to see which |
| Firmware | The version the sensor last reported. **old** means another sensor of the same type in the project runs a newer version |
| Link | The connection, **cell**, **eth**, or **wifi**, with the signal in dBm for wireless links |
| Up 7 d | The share of the last 7 days the sensor was reporting. Below 99% is amber, below 90% red |
| Last SOH | How long ago its last health report arrived |

The **Data** column can disagree with **State**: a sensor that sends health reports but no seismic data is **online** with **none**, and needs attention.

## More columns

Select **Columns** to add:

- **Device**: the 12-character Device ID
- **ICCID**: the SIM's number, for cellular sensors
- **Latency**, **Last sample**, **Pkts/min**, and **Gaps**: how the seismic data is arriving (not on the Network plan)
- **Battery**: battery voltage, where the sensor reports one
- **Sync age**: seconds since the sensor last set its clock

Your choice is kept in this browser.

## Filter and sort

- Type in **Filter by station, name, device** to find a sensor. It also matches the ICCID.
- Use **all**, **online**, **late**, and **offline** to show one state.
- Use **All types** to show one hardware type, or **Type not set**.

Select a column heading to sort by it; select it again to reverse the order.

Select a row to open the [sensor's page](/dashboard/sensors/sensor-details).
