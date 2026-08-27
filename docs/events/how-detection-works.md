---
title: How Detection Works
---

# How Earthquake Detection Works

The Earthquake Monitoring module receives seismic waveforms, identifies candidate arrivals, associates observations from multiple stations, and writes resulting events for Platform to display.

```text
Sensor waveforms
      ↓
Candidate station detections
      ↓
Association across stations
      ↓
Estimated origin, location, depth, and magnitude
      ↓
Event catalog and notifications
```

## Why multiple stations matter

One station can record motion but normally cannot determine a unique earthquake location. Association compares arrival times across geographically separated stations. Network geometry, station timing, noise, outages, and distance from the source all affect the result.

## Automated estimates

Platform events are automated outputs. Initial estimates can be incomplete or inaccurate because:

- Only early arrivals may be available.
- Station coverage may be uneven.
- Noise can resemble seismic arrivals.
- The velocity model may not represent local geology perfectly.
- Sensors or network links may be offline.
- Events can overlap.

Use an authoritative reviewed catalog when a reviewed solution is required.

## Early-warning limits

Electronic communication is faster than damaging seismic waves, but detection and processing still take time. Locations near an earthquake can experience strong shaking before a useful warning is possible. See [Earthquake Early Warning](/concepts/earthquake-early-warning).

## Deployment-specific configuration

Detection thresholds, association configuration, velocity models, alert policies, and external integrations are managed for each deployment. They are not currently self-service controls in Grillo Platform's network settings.
