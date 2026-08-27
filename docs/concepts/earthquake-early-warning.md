---
title: Earthquake Early Warning
---

# Earthquake Early Warning

Earthquake early warning (EEW) detects an earthquake after it begins and attempts to notify locations before damaging shaking reaches them. It is not earthquake prediction.

## Why warning can be possible

Seismic waves travel through the Earth much more slowly than electronic messages. A system can detect early arrivals, estimate the event and expected shaking, and distribute a message while stronger waves are still traveling toward more distant locations.

```text
Earthquake begins
      ↓
Stations detect initial motion
      ↓
Processing associates observations and estimates the event
      ↓
Expected shaking is evaluated for target locations
      ↓
Alerts are distributed
      ↓
Strong shaking reaches locations that are far enough away
```

Every step consumes time. Warning time depends on the earthquake, station geometry, detection thresholds, processing, communications, alert policy, and recipient's distance from the source. A fixed table of warning time by epicentral distance is misleading because depth, wave speeds, network layout, and latency vary.

## Blind zone

Locations close to the source can experience strong shaking before the system has enough observations to issue a useful alert. No network density or communications technology eliminates this blind zone completely.

## Initial estimates change

The earliest data represent only the beginning of a rupture. Automated estimates can change as:

- More stations detect the event
- The rupture grows
- Noisy or incorrect picks are rejected
- Magnitude calculations receive longer waveform windows

Alert design must account for late, missed, false, and updated messages. Automated actions should be based on an engineering risk assessment, not only a magnitude threshold.

## Components of an EEW service

### Detection network

Stations require suitable geometry, low enough noise, accurate timing, reliable telemetry, and known metadata.

### Processing

The system identifies candidate arrivals, associates stations, estimates source parameters, predicts expected shaking, and decides whether alert criteria are met.

### Alert delivery

Messages may be delivered through public warning channels, applications, sirens, or direct machine interfaces. Delivery latency and availability must be measured end to end.

### Prepared response

A warning is useful only when recipients know what to do. Procedures, training, accessibility, testing, and fallback behavior are part of the system.

## Appropriate actions

Depending on jurisdiction and engineering review, warnings can support actions such as prompting people to Drop, Cover, and Hold On or placing controlled systems into a safer state. Automatic control of trains, utilities, industrial processes, elevators, or medical systems requires specialist design, fail-safe behavior, and approval from the responsible operators.

## Grillo Earthquake Monitoring

Grillo sensors can provide observations to a network. The Platform's Earthquake Monitoring module, powered by SISTEM, can produce automated event information for configured deployments. The current Platform Live page is a simulation, not an operational public-warning feed. Alert delivery and external integrations are deployment-specific and are not self-service controls in the current Platform UI.

Do not present a sensor installation as an operational EEW system until the complete detection, alerting, governance, and response chain has been validated.

## Further reading

- [USGS ShakeAlert](https://www.usgs.gov/programs/earthquake-hazards/science/shakealert)
- [Earthquake Country Alliance: Drop, Cover, and Hold On](https://www.earthquakecountry.org/step5/)
- [How earthquake detection works](/events/how-detection-works)
- [Earthquake Monitoring](/events)
