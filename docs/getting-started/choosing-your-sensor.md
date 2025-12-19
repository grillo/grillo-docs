---
sidebar_position: 3
title: Choosing Your Sensor
---

# Choosing Your Sensor

Grillo offers two sensor models to fit different deployment scenarios. This guide will help you choose the right one for your needs.

## Quick comparison

| Feature | Grillo One | Grillo Pulse |
|---------|------------|--------------|
| **Sensors** | MEMS accelerometer (3 channels) | MEMS accelerometer + geophone (4 channels) |
| **Detection range** | Small to strong motion | Micro-seismic to strong motion |
| **Connectivity** | WiFi / Ethernet | WiFi / Cellular (LTE) |
| **Power** | AC power only | AC power + battery backup |
| **Installation** | Indoor | Indoor / Outdoor |
| **Setup complexity** | Simple | Moderate |

## Grillo One

![Grillo One sensor](/img/placeholder-grillo-one.svg)
<!-- TODO: Replace with actual product image -->

The Grillo One uses a low-noise MEMS accelerometer (3 channels) to capture ground motion from small to strong events.

### Ideal for

- **Fixed indoor installations** - Buildings with reliable power and network
- **Structural monitoring** - Building vibration and ground motion detection
- **Strong motion recording** - Capturing local and regional earthquakes

### Connectivity options

1. **WiFi** - Connect to your existing wireless network
2. **Ethernet** - Direct wired connection for maximum reliability

### Requirements

- Stable AC power outlet
- WiFi network (2.4 GHz) or Ethernet connection
- Indoor installation location
- Solid mounting surface (floor or wall)

### Advantages

- Simplest setup process
- Lower cost
- Reliable wired option available
- Ideal for most indoor use cases

[View Grillo One Setup Guide](/hardware/grillo-one)

---

## Grillo Pulse

![Grillo Pulse sensor](/img/placeholder-grillo-pulse.svg)
<!-- TODO: Replace with actual product image -->

The Grillo Pulse combines the same low-noise MEMS accelerometer as the Grillo One with a vertical geophone, providing 4 channels of seismic data. This allows it to capture micro-seismic events up to strong shaking.

### Ideal for

- **Remote field sites** - Areas without WiFi coverage
- **Seismic research** - High-sensitivity monitoring with geophone
- **Outdoor installations** - Weather-resistant enclosure
- **Temporary deployments** - Events, research campaigns

### Connectivity options

1. **WiFi** - When available, uses less power than cellular
2. **Cellular (LTE)** - Connect anywhere with cell coverage

### Requirements

- AC power (battery provides backup, not primary power)
- Cellular coverage (if using cellular mode)
- SIM card with active data plan (for cellular)
- Suitable mounting location

### Advantages

- Cellular connectivity for remote locations
- Battery backup for power outages
- Weather-resistant design
- Flexible deployment options

<!-- TODO: Add supported carriers/bands -->

[View Grillo Pulse Setup Guide](/hardware/grillo-pulse)

---

## Decision guide

### Choose Grillo One if:

- You have reliable WiFi or Ethernet at your location
- The sensor will be installed indoors
- You want the simplest setup experience
- You don't need cellular connectivity

### Choose Grillo Pulse if:

- You need to deploy in a location without WiFi
- The installation may be outdoors
- You need battery backup for power outages
- You want flexibility to relocate the sensor

## Can I use both?

Yes! Many networks combine both sensor types for different purposes:

- **Grillo Pulse** sensors in the field for early earthquake detection (high-sensitivity geophone captures events first)
- **Grillo One** sensors at population centers for recording shaking intensity

This combination works well for early warning systems: Pulse sensors detect earthquakes near the source, while One sensors measure the impact where people are located.

Both sensor types work seamlessly together in the same network on Grillo Cloud.

## Still unsure?

If you're not sure which sensor is right for your deployment:

1. Consider your **connectivity options** - Do you have reliable WiFi/Ethernet?
2. Consider your **installation environment** - Indoor or outdoor?
3. Consider your **power reliability** - Do you need battery backup?

[Contact Grillo Support](/support/contact) for personalized recommendations.
