---
title: Troubleshooting
---

# Troubleshoot Grillo Pulse

Start in Grillo Cloud. Do not open, reset, or rewire the sensor unless Grillo Support provides the applicable procedure.

## Gather information

Record:

- Device ID
- Cellular or Ethernet connection
- Firmware version shown in Grillo Cloud
- Project and station code
- Grillo Cloud status and Last seen time
- Connection type and signal value, if shown
- Installation location and power arrangement
- Recent site, network, or power changes
- Photographs of the installation and external labels

## Sensor is missing

1. Select the correct project in the project switcher.
2. Search by Device ID and station code.
3. Confirm the device was [claimed](/hardware/grillo-pulse/provisioning).
4. If Grillo Cloud reports Device not found while claiming, contact support.

## Sensor is Offline

1. Check Last Seen and the sensor's [connection history](/dashboard/sensors/sensor-details#connection-history) to see when reporting stopped and whether it has been dropping out.
2. Confirm the supplied power adapter is connected at the barrel jack and has power.
3. For Ethernet, confirm the cable and site network are working.
4. For cellular, confirm service, coverage, and external antenna connections.
5. Restart the sensor by disconnecting normal power, waiting 30 seconds, and reconnecting it.
6. Allow time to reconnect, then refresh Grillo Cloud.
7. Contact support if it remains Offline.

## Location or station is wrong

Open the sensor in Grillo Cloud, select **Edit**, correct the station or location fields, and save. Physical orientation must be corrected at the installation.

## Noisy or implausible seismic data

- Check that the enclosure is rigidly mounted, upright, and level.
- Look for loose mounting parts or cables contacting the enclosure.
- Record nearby machinery, traffic, wind, and human activity.
- Inspect the exterior for damage or signs of water ingress.
- Contact support with installation photographs and timestamps of the problem.

## Firmware updates and reset

Whether a Pulse can be updated from Grillo Cloud depends on its firmware. Check [Update Firmware](/dashboard/sensors/firmware-updates) before choosing a target version.

Do not open the enclosure or attempt a factory reset unless instructed by Grillo Support.

[Contact support →](/support/contact)
