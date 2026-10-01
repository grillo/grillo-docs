---
title: Claim in Grillo Cloud
---

# Claim a Grillo Pulse

**Claiming** adds a sensor to your project in Grillo Cloud. Connecting it to cellular or Ethernet is a separate setup step.

## Prerequisites

- A [Grillo Cloud account](/dashboard/account/creating-account) in the project that will own the sensor
- The sensor's 12-character Device ID
- A planned 2–8 character FDSN [station code](/dashboard/networks/creating-network#station-codes)

## Claim the sensor

1. Sign in at [cloud.grillo.io](https://cloud.grillo.io).
2. Select the intended project in the project switcher.
3. Open **Sensors** and select the **+** button.
4. Enter the Device ID or scan its QR code.
5. Enter the station code.
6. Select **Claim Device**.

<img src="/img/screenshots/pulse-claim-sensor.png" alt="The Claim New Sensor dialog in Grillo Cloud, with Device ID and Station Code fields and a camera button for scanning the QR code" width="372" />

Grillo Cloud identifies the sensor model from Grillo's inventory. See [Claim a Sensor](/dashboard/sensors/adding-sensor) for error messages and unclaiming.

## Add installation metadata

Open the claimed sensor, select **Edit**, and add:

- Latitude
- Longitude
- Elevation in meters
- Location name

Capture final coordinates at the installed position, not at a temporary bench location.

## Verify after connection

A successful claim does not prove that data is arriving. After completing connectivity and power setup, verify:

- Correct Device ID and station code
- Online status
- Current Last seen time
- Expected connection type
- Plausible cellular signal where available
- Correct coordinates and location

Some health fields vary by sensor configuration and may be unavailable.

See [Verify Sensor Status](/dashboard/sensors/sensor-status).
