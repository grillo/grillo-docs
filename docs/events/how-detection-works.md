---
title: How detection works
---

# How earthquake detection works

Grillo Cloud receives seismic waveforms from your sensors, picks candidate arrivals at each station, associates picks from several stations into one earthquake, and writes the resulting event to the catalog in Grillo Cloud.

```text
Sensor waveforms
      ↓
Pick: each channel is watched for a sudden rise in energy
      ↓
Associate: P-wave picks from several stations are grouped into one earthquake
      ↓
Locate and size: origin time, latitude, longitude, depth, and magnitude
      ↓
Event catalog, live map, and alerts
```

## The steps

**Picking.** Grillo Cloud watches each sensor channel for the sudden arrival of a seismic wave and records the time it arrived. This is called a **pick**.

**Association.** Grillo Cloud groups picks from different stations that fit a single earthquake. An event is published, to the catalog and the live map, once at least **4 stations** have detected it. Only stations that are online count.

**Location and magnitude.** Grillo Cloud estimates where and when the earthquake started, its depth, and its magnitude. Magnitude is estimated quickly from the first seconds of shaking, so treat it as an early estimate.

**Updates.** An event is refined as more stations report. It is first published as **preliminary**, becomes **confirmed** as more stations agree, and **final** about a minute after its location last changed. Each update is a new revision. An event that turns out not to be an earthquake is **withdrawn**.

**Alerts.** For each revision, Grillo decides whether the event warrants an alert. Your project chooses where alerts go and from what magnitude; see [Earthquake Alerts](/events/earthquake-alerts).

## Why several stations are needed

One station can record motion but normally cannot determine a unique earthquake location. Association compares arrival times across geographically separated stations. Network geometry, station timing, noise, outages, and distance from the source all affect the result.

## Automated estimates

Detected events are automated outputs. Initial estimates can be incomplete or inaccurate because:

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
