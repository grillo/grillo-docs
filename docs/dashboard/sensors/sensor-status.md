---
title: Verify Sensor Status
---

# Verify Sensor Status

Use the **Sensors** page and the details panel to confirm that Grillo Cloud is receiving data from a sensor.

## Statuses

| Status | Meaning |
|---|---|
| **Online** | A health report arrived in the last 2.5 minutes and every check passes |
| **Degraded** | The sensor is reporting, but something needs attention: **Weak signal** (below -95 dBm), **Clock offset** (more than 50 ms), or **Data arriving late** (more than 2 seconds) |
| **Offline** | No health report in the last 2.5 minutes. The reason says since when, for example **No data since 14:05** or **No data for 3 d** |
| **Disabled** | Reserved for sensors taken out of service on purpose. No sensor shows this status yet |

A sensor that has never reported shows **Offline** with **No data received**.

If Grillo Cloud itself cannot fetch new sensor data, a warning at the top of the page says since when, and statuses stay as they were rather than turning offline.

## Checklist after setup or maintenance

1. Open **Sensors** and search for the station code.
2. Confirm it is **Online**, or **Degraded** with a reason you expect.
3. Open its details and check **Last 24 h** shows recent data.
4. Check **Signal**, **Power**, and **Time sync**.
5. Confirm the coordinates and the firmware version.

To prove seismic data is arriving too:

- **Continuous sensors:** select **Show live signal** and tap the enclosure lightly. The trace should respond.
- **Triggered sensors:** tap the side of the enclosure firmly enough to cross the [threshold](/dashboard/sensors/recording-mode). A new trigger appears on [cloud.grillo.io/triggers](https://cloud.grillo.io/triggers) within about a minute.

## If a sensor is offline

1. Confirm the Device ID is correct.
2. Check that the sensor has power from its supply: 9–16 V DC for Grillo Pulse, USB-C for Grillo One.
3. Check the connection for its variant: Ethernet link, Wi-Fi, or cellular service and SIM.
4. Ask the site's network administrator whether outbound UDP is allowed. Sensors send to Grillo on UDP ports 5683 and 5684.
5. Give the sensor a few minutes to start and connect.
6. Look at **Last 24 h** and **Last 30 days** in its details to see when it last reported and whether it has been dropping out.
7. Contact support with the Device ID, last-seen time, power arrangement, connection type, and screenshots.

## If a sensor is degraded

- **Weak signal:** move the antenna or the sensor, or use an external antenna.
- **Clock offset:** the sensor cannot keep accurate time. Check that it has a working internet connection; if it persists, contact support.
- **Data arriving late:** the connection is slow or congested. Check the signal, or move to Ethernet where possible.

Follow the troubleshooting guide for the hardware: [Grillo Pulse](/hardware/grillo-pulse/troubleshooting) or [Grillo One](/hardware/grillo-one/setup#troubleshooting).
