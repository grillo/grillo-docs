---
title: Claim a Sensor
---

# Claim a Sensor

When your Grillo Pulse or Grillo One arrives, claim it in Grillo Cloud. Claiming links the sensor to your project, so it shows up in your sensor list and on your map.

Every Grillo sensor is registered in Grillo's system at the factory, so there is nothing to set up beforehand: you only need its Device ID. Claiming does not connect the sensor to the internet; that is part of the [hardware setup](#next-steps).

## Before you begin

You need:

- The sensor's 12-character Device ID, for example `A0B1C2D3E4F5`. It is printed on the sensor label and encoded in the label's QR code.
- A [station code](/dashboard/networks/creating-network#station-codes): 2–8 uppercase letters or numbers, unique in your project.

Record the Device ID before you close or install the enclosure.

## Claim the sensor

1. Select the right project in the project switcher.
2. Open **Sensors**.
3. Select the **+** button at the top of the page, or **Claim your first sensor** if the list is empty.
4. In **Claim New Sensor**, type the Device ID or select the camera button to scan the label's QR code.
5. Enter the station code. Grillo Cloud fills in the last four characters of the Device ID; replace them with your own station name.
6. Select **Claim Device**.

The sensor appears in your list straight away and shows **offline**. Once it is powered and connected, it sends a health report about once a minute. Its status changes to **online**, and it appears on the map once you [add its location](/dashboard/sensors/configuring-sensor).

## Common errors

| Message | What to do |
|---|---|
| Device not found | Check all 12 characters, or scan the QR code instead. Every Grillo sensor is registered at the factory, so if the ID is correct and still not found, contact support. |
| Device is already claimed | Another project holds it. Ask that project to unclaim it, or contact support. |
| Invalid Device ID format | Remove spaces and separators. Use exactly 12 characters from `0–9` and `A–F`. |
| Station code already exists | Choose a station code no other sensor in the project uses. |

## Unclaim a sensor

Open the sensor's details, select **Unclaim Sensor**, and type `unclaim` to confirm. Owners and admins can unclaim.

Unclaiming removes the sensor from your project and makes it claimable by anyone who has its Device ID. It cannot be undone, and it does not reset the sensor itself.

## Next steps

1. [Add the sensor's location](/dashboard/sensors/configuring-sensor).
2. Connect the hardware: [Grillo Pulse](/hardware/grillo-pulse) or [Grillo One](/hardware/grillo-one).
3. [Verify that it is online](/dashboard/sensors/sensor-status).
