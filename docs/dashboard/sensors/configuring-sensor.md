---
title: Edit a Sensor
---

# Edit a Sensor

Owners and admins can change a sensor's station code, location, and target firmware. Open the sensor's details and select **Edit**.

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

Select **Update Device** to save.

## Capture the location on site

Open Grillo Cloud on a phone at the sensor and select **Use Current Location**. It fills in latitude and longitude, and elevation when the phone provides it. Grillo Cloud then suggests a location name from the coordinates; select **Use** to accept it.

Stand at the sensor when you do this. Coordinates captured at a desk or vehicle will put the station in the wrong place.

## What a station code change does

The sensor picks up its station code from Grillo Cloud on its next health check-in, about a minute later, and uses it for the data it sends from then on.

## What editing does not change

The edit form does not change the sensor's Wi-Fi, Ethernet, or cellular settings. Those are set on the sensor itself; see its hardware guide.
