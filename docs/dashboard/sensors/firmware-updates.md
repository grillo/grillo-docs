---
title: Update Firmware
---

# Update Sensor Firmware

Grillo Cloud can update a sensor's firmware over the air (OTA). You choose a target version, and the sensor downloads and installs it the next time it checks in.

Only project owners and admins can start an update.

## Which sensors support OTA

| Sensor | OTA from Grillo Cloud |
|---|---|
| Grillo Pulse on firmware 1.x | Yes |
| Grillo One | Yes |
| Current Grillo Pulse, Cellular and Ethernet (firmware 2.x) | Not yet. Grillo updates these units for you; [contact support](/support/contact). |

The sensor's current version is in the **Firmware** column of the [sensor table](/dashboard/sensors/table-view).

## Before you update

- The sensor must be **online**. An offline sensor takes the update when it next connects.
- Make sure it has stable power. Do not unplug it during the update.
- On a cellular sensor, check that signal strength is steady. The download uses the sensor's data connection.
- Update one sensor first and confirm it comes back before updating the rest.

## Start an update

1. Open **Sensors** and select the sensor.
2. Select **Edit**.
3. In **Firmware Version**, choose the target version. The list shows the versions published for that sensor type; the installed one is marked **current**.
4. Select **Update Device**.
5. In **Confirm OTA Version Update**, select **Confirm Update**.

The sensor receives the target version at its next health check-in, about a minute later. It downloads the firmware, installs it, and restarts.

## Check the result

Wait a few minutes, then refresh **Sensors**. The update worked when:

- The sensor is **online** again, and
- The **Firmware** column shows the target version.

A reboot also appears in the sensor's [connection history](/dashboard/sensors/sensor-details#connection-history).

## If the update does not complete

- **Firmware column unchanged and sensor online:** the sensor may still be downloading, especially on a weak cellular link. Give it more time before trying again.
- **Sensor offline after the update:** check power and connectivity on site, then follow the troubleshooting guide for the sensor.
- **Still on the old version after an hour:** contact support with the Device ID, the current and target versions, and the time you started the update.

You cannot set the target to the version the sensor already runs.
