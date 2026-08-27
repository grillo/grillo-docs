---
title: Edit a Sensor
---

# Edit Sensor Metadata

Select a sensor and choose **Edit**.

![Edit sensor dialog in Grillo Platform](/img/screenshots/08-sensor-edit.png)

## Available fields

The current edit form contains:

| Field | Purpose |
|---|---|
| Station code | Unique 2–8 character uppercase FDSN station identifier |
| Latitude | Decimal degrees from -90 to 90 |
| Longitude | Decimal degrees from -180 to 180 |
| Elevation | Site elevation in meters |
| Location name | Human-readable site name or address |
| Firmware version | Target OTA version when versions are available for that device |

On a device with location permission, **Use Current Location** can populate coordinates and, where available, elevation. Confirm that the captured position represents the sensor rather than the operator's temporary position.

Select **Update Device** to save changes.

## What editing does not do

Metadata changes update Platform's device record. Do not assume this form changes the sensor's physical network credentials, sample rate, data format, compression, heartbeat, or retry policy.

Firmware targeting is shown in the Platform UI, but an update succeeds only when the installed hardware and firmware support the complete OTA path. Follow release-specific instructions before assigning a target version.

The current UI does not provide bulk editing, templates, configuration history, rollback, or remote factory reset.

## Recommended metadata

- Assign station codes from a documented network naming plan.
- Capture coordinates at the final installed position.
- Use meters for elevation.
- Use a location name that field staff can identify.
- Record more detailed installation notes and photographs in your organization's maintenance system.
