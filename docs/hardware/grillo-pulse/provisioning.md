---
title: Claim in Grillo Platform
---

# Claim a Grillo Pulse

**Claiming** associates a sensor with an organization and seismic network in Grillo Platform. Connecting it to cellular or Ethernet is a separate setup step.

## Prerequisites

- A [Grillo Platform account](/dashboard/account/creating-account)
- An active organization
- A [seismic network](/dashboard/networks/creating-network)
- The sensor's 12-character Device ID
- A planned 2–8 character FDSN station code

## Claim the sensor

1. Sign in at [cloud.grillo.io](https://cloud.grillo.io).
2. Select the intended organization.
3. Open Networks and select the destination network.
4. Open Sensors and select **Claim Sensor**.
5. Enter the Device ID or scan its QR code.
6. Enter the station code.
7. Select **Claim Device**.

Platform identifies the sensor model from Grillo inventory and device reporting.

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
