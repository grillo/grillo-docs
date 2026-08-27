---
title: Data Quality
---

# Seismic Data Quality

Data quality describes whether a recording is complete, correctly timed, correctly identified, and suitable for its intended use. A waveform can look clean while still having incorrect timing or metadata.

## Quality dimensions

| Dimension | Questions to ask |
|---|---|
| Completeness | Are expected samples present without unexplained gaps or duplicates? |
| Timing | Are timestamps synchronized, monotonic, and accurate enough for the application? |
| Noise | Can target signals be distinguished from ambient and instrument noise? |
| Calibration | Are counts convertible to physical units using a known response? |
| Orientation | Are channel axes and sensor level documented correctly? |
| Metadata | Are network, station, location, coordinates, elevation, and sample rate correct? |
| Dynamic range | Does the channel resolve weak motion without clipping strong motion? |

Quality is application-specific. A channel useful for strong local shaking may be too noisy for small distant events, while a sensitive geophone may clip motion that an accelerometer records correctly.

## Common noise sources

### Environmental

- Wind and pressure changes
- Ocean-generated microseisms
- Rain and water flow
- Temperature changes
- Animals and vegetation interacting with the installation

### Human activity

- Traffic and rail
- Machinery, HVAC, pumps, and generators
- Construction
- Footsteps, doors, and handling

### Installation and system artifacts

- Loose or flexible mounting
- Incorrect leveling or orientation
- Cable movement or strain
- Electrical interference or poor grounding
- Network outages and queue overflows
- Clock steps, drift, or loss of synchronization
- Incorrect sample-rate or station metadata

## Establish a baseline

After installation, collect enough quiet and active periods to represent normal site behavior. Preserve:

- Representative waveform plots
- Data completeness
- Noise spectra or power spectral density where available
- Timing-source status
- Typical daily and weekly patterns
- Known machinery schedules and site activity

A baseline makes later changes easier to detect. Compare a station with its own history as well as with nearby stations; two sites should not be assumed to have identical noise.

## Diagnose a problem

### Data gaps

Check power, device uptime, local connectivity, server ingestion, and whether queued data was dropped. Determine whether the sensor stopped sampling or only stopped transmitting.

### Spikes or steps

Check handling, loose mounts, cable impacts, power events, clock corrections, and nearby impulsive activity. Compare the same timestamp across nearby stations.

### Elevated or periodic noise

Compare timing with machinery, traffic, weather, and occupancy. Inspect spectra to identify stable frequencies and harmonics. Relocate or isolate the source when practical rather than filtering blindly.

### Clipping or flat-topped signals

Check channel range, gain, sensor orientation, and installation. Clipped samples cannot be recovered by later processing.

### Timing anomalies

Compare arrival times across stations and review time-source telemetry. Timing quality is essential for association and location even when individual waveforms look reasonable.

## Quality-control practice

1. Monitor completeness and timing continuously.
2. Review noise and waveform examples on a regular schedule appropriate to the network.
3. Alert on meaningful changes from each station's baseline.
4. Record maintenance and configuration changes.
5. Exclude or down-weight unsuitable channels in processing rather than hiding problems.
6. Revalidate after relocation, firmware changes, power work, or antenna changes.

Grillo Platform currently emphasizes device health rather than full waveform quality analysis. Use the destination seismic system and deployment-specific tooling for spectra, calibration, completeness, and detailed waveform review.

## Further reading

- [EarthScope: MUSTANG Quality Assurance](https://service.iris.edu/mustang/)
- [Sensor placement](/concepts/sensor-placement)
- [Pulse troubleshooting](/hardware/grillo-pulse/troubleshooting)
