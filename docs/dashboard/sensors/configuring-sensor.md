---
title: Edit a Sensor
---

# Edit a Sensor

:::note Handled by Grillo Support for now
The new Grillo Cloud dashboard does not yet have a way to edit a sensor. Until it does, [contact Grillo Support](/support/contact) with the Device ID and the changes you need, and Grillo will make the change for you. The steps below describe the previous dashboard.
:::

Owners and admins can change a sensor's station code, location, recording mode, and target firmware. Open the sensor's details and select **Edit**.

![Edit sensor dialog in Grillo Cloud](/img/screenshots/08-sensor-edit.png)

## Fields

| Field | Purpose |
|---|---|
| Station Code | 2–8 uppercase letters or numbers, unique in the project |
| Latitude | Decimal degrees, -90 to 90 |
| Longitude | Decimal degrees, -180 to 180 |
| Elevation (meters) | Site elevation |
| Location Name | A name or address field staff will recognize |
| Firmware Version | Target version for an over-the-air update. See [Update Firmware](/dashboard/sensors/firmware-updates). |
| Recording mode | Continuous or triggered, and the trigger settings. See [Recording Mode and Thresholds](/dashboard/sensors/recording-mode). |

Select **Update Device** to save.

## Capture the location on site

Open Grillo Cloud on a phone at the sensor and select **Use Current Location**. It fills in latitude and longitude, and elevation when the phone provides it. Grillo Cloud then suggests a location name from the coordinates; select **Use** to accept it.

Stand at the sensor when you do this. Coordinates captured at a desk or vehicle will put the station in the wrong place.

## What a station code change does

The sensor picks up its station code and recording settings from Grillo Cloud at its next health check-in, usually within a minute, and uses them from then on.

## What editing does not change

The edit form does not change the sensor's Wi-Fi, Ethernet, or cellular settings. Those are set on the sensor itself; see its hardware guide.
