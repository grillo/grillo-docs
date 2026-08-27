---
title: Verify Sensor Status
---

# Verify Sensor Status

Use the Sensors table and details sheet to determine whether Platform is receiving current device-health data.

## Online and offline

- **Online** indicates recent reporting.
- **Offline** indicates that Platform has not received sufficiently recent reporting.

A claimed sensor is not necessarily online. Claiming establishes ownership and network membership; power, connectivity, firmware, and backend ingestion must also work.

## Verification checklist

After setup or maintenance:

1. Select the correct organization and network.
2. Open **Sensors** and refresh.
3. Confirm the expected Device ID and station code.
4. Confirm the sensor is Online.
5. Open its details and check **Last seen** is current.
6. Confirm connection type and signal strength are plausible.
7. Review power or battery information where it is available for that sensor.
8. Confirm coordinates and location name.
9. Confirm the expected firmware version.

## If a sensor is offline

1. Confirm you are viewing the correct organization and network.
2. Confirm the Device ID was claimed correctly.
3. Confirm the supplied power adapter is connected through the normal barrel jack and has power.
4. Check Ethernet link or cellular service for the sensor variant.
5. Confirm required outbound network access with the site administrator.
6. Refresh Platform after the device has had time to start and connect.
7. Contact support with the Device ID, hardware revision, variant, last-seen value, power arrangement, and screenshots.

Do not open a sealed enclosure, replace a SIM, factory-reset, or connect USB power unless the procedure is approved for that exact hardware revision.
