---
title: Update firmware
---

# Update sensor firmware

Grillo sensors can update their firmware over the air (OTA): the sensor is given a target version, and downloads and installs it the next time it checks in.

:::note[Done by Grillo Support for now]
Grillo Cloud does not have a way to start a firmware update yet. [Contact Grillo Support](/support/contact) with the Device IDs and the version you want, and Grillo sets the update for you.
:::

## Which sensors support OTA

| Sensor | Over-the-air update |
|---|---|
| Grillo Pulse on firmware 1.x | Yes |
| Grillo One | Yes |
| Current Grillo Pulse, Cellular and Ethernet (firmware 2.x) | Not yet. Grillo updates these units for you. |

## Find sensors on old firmware

The **Firmware** column of the [sensor table](/dashboard/sensors/table-view) shows the version each sensor last reported. **old** marks a sensor running an older version than another sensor of the same type in the project; hover over it to see the newer version.

## Before you ask for an update

- The sensor should be **online**. An offline sensor takes the update when it next connects.
- Make sure it has stable power. It must not be unplugged during the update.
- On a cellular sensor, check that the signal is steady. The download uses the sensor's data connection.
- Update one sensor first and confirm it comes back before updating the rest.

## Check the result

The sensor downloads the firmware, installs it, and restarts. The update worked when:

- The sensor is **online** again, and
- The **Firmware** column, and **Firmware** in the **Hardware** card on its page, show the new version.

The restart also shows under **Restarts** in its [Connectivity](/dashboard/sensors/sensor-details#connectivity), and the firmware change in its events log.

## If the update does not complete

- **Firmware unchanged and sensor online:** the sensor may still be downloading, especially on a weak cellular link. Give it more time.
- **Sensor offline after the update:** check power and connectivity on site, then follow the troubleshooting guide for the sensor.
- **Still on the old version after an hour:** contact support with the Device ID, the current and target versions, and when the update was set.
