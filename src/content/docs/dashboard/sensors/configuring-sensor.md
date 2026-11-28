---
title: Edit a sensor
---

Owners and admins can change a station's name, site, notes, and position. Open the sensor's page and select **Edit**, at the top of the page or in the **Station** card.

## Fields

| Field | Purpose |
|---|---|
| **Name** | A name your team will recognize, up to 200 characters |
| **Site** | Where it is: building, floor, mounting. Up to 500 characters |
| **Latitude** | Decimal degrees, -90 to 90 |
| **Longitude** | Decimal degrees, -180 to 180 |
| **Elevation, m** | Site elevation, -500 to 9000 m. Optional |
| **Notes** | Access, contacts, anything for the next visit. Seen only in this project |

Select **Save**.

## Fill in the position

- **Use my location** fills in latitude and longitude from your phone or browser. Stand at the sensor when you use it; a position taken at a desk or in a vehicle puts the station in the wrong place.
- **Use device GPS** fills them in from the sensor's own GPS, the median of the last 24 hours. It appears only for sensors with a GPS fix.

If the saved position is more than 100 m from where the sensor's GPS puts it, the **Station** card says so. The card also shows the GPS **Reported position** beside the saved one.

## Moving a station

A change of more than 100 m is a move. The dialog asks **Moved on, UTC**: the date and time the sensor moved. Events from then on use the new position; earlier events keep the old one. Select **Save and move**. The station keeps its code and its recorded data.

If the station did not move and the saved position was simply wrong, tick **It didn't move: the saved position was wrong. Correct it in place.** A change of less than 100 m is always a correction.

The **Station** card lists every position the station has had, with the date of each.

## What editing does not change

- **Station code and network code.** These are set when the sensor is claimed. To change them, [contact Grillo Support](/support/contact).
- **Hardware type.** Grillo records it; if the **Hardware** card says the sensor reports a different type, Grillo can correct it.
- **Recording mode and trigger settings.** See [Recording Mode and Thresholds](/dashboard/sensors/recording-mode).
- **Wi-Fi, Ethernet, or cellular settings.** Those are set on the sensor itself; see its hardware guide.
