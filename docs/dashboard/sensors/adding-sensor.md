---
title: Claim a sensor
---

# Claim a sensor

When your Grillo Pulse or Grillo One arrives, claim it in Grillo Cloud. Claiming adds the sensor to your project, so it shows up in your sensor list.

Every Grillo sensor is registered in Grillo's inventory at the factory, so there is nothing to set up beforehand: you only need its Device ID. Claiming does not connect the sensor to the internet; that is part of the [hardware setup](#next-steps).

Project owners and admins can claim sensors.

## Before you begin

You need the sensor's 12-character Device ID, for example `A0B1C2D3E4F5`. It is printed on the sensor label. Record it before you close or install the enclosure.

## Add the sensor

1. Select the right project in the project selector.
2. Open **Sensors** and select **Add sensor**. (**Project settings → Sensors** has the same **Add sensor** button.)
3. **Claim**: type the full Device ID and select **Claim**.
4. **Place it**: enter the station's **Name**, **Site**, **Latitude**, **Longitude**, and **Elevation**, then select **Save and enable**. At the sensor, **Use my location** fills in the position from your phone or browser. If you are not at the site yet, select **Place later**.
5. **First report**: the dialog waits for the sensor's first health report. A sensor reports within a minute or two of being powered with a network connection. You can close the dialog; the sensor shows up in the list when its report arrives.

Select **Add another** to claim the next sensor.

The claim creates the sensor's station, named with your project's network code and the last four characters of the Device ID, for example `HT.E4F5`. See [Network and Station Codes](/dashboard/networks/creating-network).

## Place the station

Until a station has a position it is **not placed**: Grillo stores its data, but earthquake detection ignores it. To place it later, open the sensor's page and select **Edit**. See [Edit a Sensor](/dashboard/sensors/configuring-sensor).

Enter the position at the installed site, not at a bench or desk.

## Common errors

| Message | What to do |
|---|---|
| *ID* isn't in Grillo's inventory. Check the full id on the device's label. | Check all 12 characters. If the ID is correct and still not found, [contact Grillo Support](/support/contact). |
| *ID* already belongs to a project. Ask Grillo to move it. | Another project holds the sensor. [Contact Grillo Support](/support/contact). |

## Unclaim a sensor

Open **Project settings → Sensors**, select **Unclaim** next to the device, then **Back to inventory** to confirm. Owners and admins can unclaim.

Unclaiming removes the sensor from your project and returns it to Grillo's inventory. It does not reset the sensor itself.

## Next steps

1. Connect the hardware: [Grillo Pulse](/hardware/grillo-pulse) or [Grillo One](/hardware/grillo-one).
2. [Verify that it is online](/dashboard/sensors/sensor-status).
