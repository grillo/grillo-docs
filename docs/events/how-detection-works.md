---
title: How Detection Works
---

# How Earthquake Detection Works

SISTEM receives seismic waveforms from your sensors, picks candidate arrivals at each station, associates picks from several stations into one earthquake, and writes the resulting event to the catalog in Grillo Cloud.

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

SISTEM events are automated outputs. Initial estimates can be incomplete or inaccurate because:

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

Detection thresholds, association configuration, velocity models, alert policies, and external integrations are managed for each deployment. Grillo configures them for your project; they are not settings you can change in Grillo Cloud.
