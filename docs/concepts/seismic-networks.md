---
title: Seismic Networks
---

# Seismic Networks

A seismic network combines observations from multiple stations to detect, locate, and characterize earthquakes across an area.

## Why multiple stations matter

A single station can record ground motion, but one waveform normally cannot determine a unique earthquake origin. A network compares arrival times and amplitudes across stations.

Multiple stations help a processing system:

- Distinguish local noise from signals observed across an area
- Associate arrivals with the same earthquake
- Estimate origin time, latitude, longitude, and depth
- Estimate magnitude from measurements at different distances
- Continue operating when individual stations or links fail

More stations do not automatically produce better results. Site noise, timing, calibration, uptime, telemetry, and geographic distribution all affect network performance.

## Network geometry

Stations should provide useful coverage around the earthquakes and assets of interest. A network concentrated on one side of an event generally constrains its location less well than stations distributed around it.

Design depends on the objective:

- **Regional cataloging** prioritizes broad, stable geographic coverage.
- **Local seismicity studies** often require closer station spacing around a target area.
- **Earthquake early warning** prioritizes rapid detection near likely source regions and reliable delivery toward exposed areas.
- **Structural monitoring** places instruments according to the structure and engineering question, not only regional geometry.

There is no universal spacing or minimum station count. Appropriate geometry depends on expected event sizes and depths, attenuation, local geology, ambient noise, sensor sensitivity, and the processing method. Validate a proposed design with a seismologist or network engineer.

## Station diversity

A network can combine different instruments:

- Broadband seismometers for weak and distant motion
- Short-period geophones for local and regional signals
- Strong-motion accelerometers for larger shaking
- Dual-sensor stations such as Grillo Pulse

Mixed networks can extend dynamic range and coverage, but processing needs correct station metadata, channel names, sample rates, orientation, timing, and instrument response.

## Operating a network

Reliable operations require more than installing hardware:

1. Maintain accurate station coordinates, elevation, and identifiers.
2. Monitor station uptime, timing, connectivity, and data completeness.
3. Establish a noise baseline after installation.
4. Record hardware, firmware, orientation, and site changes.
5. Investigate correlated outages and changes in detection performance.
6. Test the complete path from sensor to event processing and alert delivery.

In Grillo Platform, an organization contains one or more named networks, and claimed sensors belong to a network. That administrative grouping helps scope access and processing, but it does not by itself guarantee scientifically adequate geometry.

## Further reading

- [USGS: Monitoring Earthquakes](https://www.usgs.gov/programs/earthquake-hazards/monitoring-earthquakes)
- [EarthScope Consortium: Seismic Instrumentation](https://www.earthscope.org/education-and-outreach/instrumentation/)
- [Create a network in Grillo Platform](/dashboard/networks/creating-network)
- [Sensor placement](/concepts/sensor-placement)
- [Data quality](/concepts/data-quality)
