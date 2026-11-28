---
title: Claim a Grillo Pulse
sidebar:
  label: Claim in Grillo Cloud
---

**Claiming** adds a sensor to your project in Grillo Cloud. Connecting it to cellular or Ethernet is a separate setup step.

## Prerequisites

- A [Grillo Cloud account](/dashboard/account/creating-account) with the **Owner** or **Admin** role in the project that will own the sensor
- The sensor's 12-character Device ID

## Claim the sensor

1. Sign in at [cloud.grillo.io](https://cloud.grillo.io).
2. Select the intended project in the project selector.
3. Open **Sensors** and select **Add sensor**.
4. Type the full Device ID and select **Claim**.

Grillo Cloud creates the sensor's station, named with the project's network code and the last four characters of the Device ID. See [Claim a Sensor](/dashboard/sensors/adding-sensor) for error messages and unclaiming.

## Add installation metadata

The dialog then asks you to **Place it**: the station's name, site, latitude, longitude, and elevation. At the installed position, **Use my location** fills in the position from your phone. If you are claiming at a bench, select **Place later**, and at the site open the sensor's page and select **Edit**.

Capture final coordinates at the installed position, not at a temporary bench location. Until the station has a position, earthquake detection ignores it.

## Verify after connection

A successful claim does not prove that data is arriving. After completing connectivity and power setup, verify:

- Correct Device ID and station code
- **online** state, and **Data** showing **receiving**
- A current **Last SOH** time
- Expected connection type
- Plausible cellular signal where available
- Correct coordinates and location

Some health fields vary by sensor configuration and may be unavailable.

See [Verify Sensor Status](/dashboard/sensors/sensor-status).
