---
title: Choosing Your Sensor
---

# Choosing Your Sensor

| | Grillo Pulse | Grillo One | Grillo Slide |
|---|---|---|---|
| Measures | Earthquakes, from small to strong | Strong ground shaking | Slow ground movement |
| Sensors | Vertical geophone and three-axis accelerometer | Three-axis accelerometer | RTK GNSS |
| Connectivity | Cellular or Ethernet, by variant | Ethernet or Wi-Fi | LTE at the base; rovers use a radio mesh |
| Power | 12 V DC input; solar through your own charge controller and battery | USB-C, 5 V | Internal battery with solar input |
| Readings | Continuous, in real time | Continuous, in real time | Every 6 hours |
| Data in the dashboard | Health; waveforms and earthquake detection with SISTEM | Health; waveforms and earthquake detection with SISTEM | Movement in mm, health, exports, raw GNSS files |
| Firmware updates | By Grillo for now | Over the air from Grillo Cloud | Over the air |
| Typical site | Field and remote stations | Buildings and sites with mains power and a network | Slopes and embankments |
| Dashboard | [Grillo Cloud](/dashboard) | [Grillo Cloud](/dashboard) | [Grillo Cloud for Slide](/slide-cloud) |

## Grillo Pulse

Choose Pulse for a seismic network that needs to record small earthquakes as well as strong ones. Pick the cellular variant for sites without a wired network, or the Ethernet variant where you have one.

Pulse has a single 12 V DC input. It has no solar or battery input of its own: at an off-grid site, power it from a solar charge controller and battery system that supplies 12 V DC.

[Install a Grillo Pulse →](/hardware/grillo-pulse)

## Grillo One

![The Grillo One circuit board, with its USB-C power port, Ethernet port, and three status lights](/img/products/grillo-one.jpg)

Choose One to add strong-motion stations where power and a network already exist, for example in buildings. It runs from USB-C power, and its hardware and software are open source.

[Install a Grillo One →](/hardware/grillo-one)

## Grillo Slide

![A white Grillo Slide rover and a black Grillo Slide base, each mounted on a post](/img/products/grillo-slide.webp)

Choose Slide to monitor a slope for slow movement. One base on stable ground supports up to eight rovers on the ground being monitored. It runs on battery and solar, so it needs no mains power or network at the site, only mobile coverage at the base. See [Landslide Monitoring with GNSS](/concepts/landslide-monitoring).

[Install a Grillo Slide →](/hardware/grillo-slide)

## Before ordering

Confirm with Grillo:

1. What you need to measure, and how sensitive it must be
2. Indoor or outdoor installation
3. Cellular, Ethernet, or Wi-Fi availability at the site
4. Power and backup requirements, including whether you need a solar and battery system for Pulse
5. Whether seismic data should go to Grillo or to your own server
6. Whether you need the SISTEM add-on for earthquake detection

[Contact Grillo](/support/contact) for deployment guidance.
