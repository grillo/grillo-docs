---
title: Verify Sensor Status
---

# Verify Sensor Status

Use the Sensors table and the details panel to confirm that Grillo Cloud is receiving data from a sensor.

## Online and offline

- **online** — Grillo Cloud received a health report from the sensor in the last 2.5 minutes.
- **offline** — no health report in the last 2.5 minutes, or the sensor has never reported.

A claimed sensor is not necessarily online. Claiming only adds it to your project; the sensor still needs power and a working connection.

## Checklist after setup or maintenance

1. Select the correct project.
2. Open **Sensors** and refresh.
3. Find the sensor by station code or Device ID.
4. Confirm it is **online** and **Last Seen** is current.
5. Confirm the connection type and signal strength look right.
6. Check power source and battery level, where the sensor reports them.
7. Confirm the coordinates and location name.
8. Confirm the firmware version.

Online status comes from the sensor's health reports, which it sends about once a minute. With the [SISTEM add-on](/events) you can also open the sensor's live waveform and tap the enclosure lightly to see it respond; that proves seismic data is arriving too.

## If a sensor is offline

1. Confirm you are in the right project and the Device ID is correct.
2. Check that the sensor has power from its supply: 12 V DC for Grillo Pulse, 5 V DC for Grillo One.
3. Check the connection for its variant: Ethernet link, Wi-Fi, or cellular service and SIM.
4. Ask the site's network administrator whether outbound UDP is allowed. Sensors send to Grillo on UDP ports 5683 and 5684.
5. Give the sensor a few minutes to start and connect, then refresh.
6. Open **Connection history** in the sensor's details to see when it last reported and whether it has been dropping out.
7. Contact support with the Device ID, last-seen time, power arrangement, connection type, and screenshots.

Follow the troubleshooting guide for the hardware: [Grillo Pulse](/hardware/grillo-pulse/troubleshooting) or [Grillo One](/hardware/grillo-one/setup#troubleshooting).
