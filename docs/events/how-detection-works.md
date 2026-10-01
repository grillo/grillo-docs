---
title: How Detection Works
---

# How Earthquake Detection Works

SISTEM receives seismic waveforms from your sensors, picks candidate arrivals at each station, associates picks from several stations into one earthquake, and writes the resulting event to the catalog in Grillo Cloud.

```text
Sensor waveforms
      ↓
Pick: each channel is watched for a sudden rise in energy
      ↓
Associate: P-wave picks from several stations are grouped into one earthquake
      ↓
Locate and size: origin time, latitude, longitude, depth, and magnitude
      ↓
Event catalog, live map, and notifications
```

## The steps

**Picking.** SISTEM watches each sensor channel for the sudden arrival of a seismic wave and records the time it arrived. This is called a **pick**.

**Association.** SISTEM groups picks from different stations that fit a single earthquake. An event is published, to the catalog, the live map, and notifications, once at least **4 stations** have detected it. Only stations that are online count.

**Location and magnitude.** SISTEM estimates where and when the earthquake started, its depth, and its magnitude. Magnitude is estimated quickly from the first seconds of shaking, so treat it as an early estimate.

**Updates.** An event can be refined as more stations report. Its values settle about a minute after the last station reports.

## Why several stations are needed

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

Grillo configures detection for your network: the monitoring region, detection thresholds, association settings, and the velocity model. If a sensor channel is damaged or too noisy, Grillo can exclude it from detection while still recording it. These are not settings you can change in Grillo Cloud; [contact Grillo Support](/support/contact) to ask for a change.
