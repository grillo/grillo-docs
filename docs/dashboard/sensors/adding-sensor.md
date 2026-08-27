---
title: Claim a Sensor
---

# Claim a Sensor

Claiming associates a pre-registered device with the selected organization and seismic network. It does not configure the sensor's physical network connection.

## Before you begin

You need:

- An active organization
- A seismic network
- The sensor's 12-character Device ID
- A unique FDSN station code containing 2–8 uppercase letters or numbers

The Device ID is uppercase hexadecimal, for example `A0B1C2D3E4F5`. Record it before closing or installing the enclosure.

## Claim the sensor

1. Open **Networks** and select the destination network.
2. Open **Sensors**.
3. Select the claim button in the empty state or the floating add button.
4. In **Claim New Sensor**, enter the Device ID or use the camera button to scan its QR code.
5. Enter the station code. Platform suggests the last four Device ID characters when the field is empty; replace that suggestion if it does not follow your station naming plan.
6. Select **Claim Device**.

The sensor appears in the selected network after a successful claim.

## Common errors

- **Device not found** — verify all 12 hexadecimal characters. The device must exist in Grillo inventory before it can be claimed.
- **Device already claimed** — an existing organization owns it. Ask that organization's owner to unclaim it or contact support.
- **Invalid Device ID** — remove separators and use exactly 12 characters from `0–9` and `A–F`.
- **Duplicate station code** — choose a station code not already used in the network.
- **No network selected** — return to Networks and select the destination network.

## Claiming versus connectivity

A claimed sensor can still appear offline. Complete the revision-specific hardware and connectivity procedure, then use [sensor status](/dashboard/sensors/sensor-status) to verify reporting.

:::note Bulk import
Platform has an administrative inventory import endpoint, but the current customer interface does not provide the bulk CSV workflow described by older documentation.
:::
