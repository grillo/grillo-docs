---
title: What Is Grillo?
---

# What Is Grillo?

Grillo builds connected sensors and cloud software for earthquake and landslide monitoring.

## Sensors

- **[Grillo Pulse](/hardware/grillo-pulse)** combines a vertical geophone and a three-axis MEMS accelerometer. It comes in cellular and Ethernet variants.
- **[Grillo One](/hardware/grillo-one)** is an open-source strong-motion sensor with a three-axis MEMS accelerometer, on Ethernet or Wi-Fi.
- **[Grillo Slide](/hardware/grillo-slide)** is a kit of one GNSS base and up to eight rovers that measures ground movement on slopes in millimetres.

## Grillo Cloud

[Grillo Cloud](/dashboard) at [cloud.grillo.io](https://cloud.grillo.io) is the web application for Pulse and One. Use it to:

- Claim sensors by Device ID and assign FDSN station codes
- See sensors in a table and on a map
- Monitor online status, connectivity, signal, power, and firmware
- Watch live waveforms, review recordings, and download samples
- Update firmware over the air
- Send seismic data to your own server

### SISTEM add-on

[SISTEM](/events) is an optional add-on to Grillo Cloud. It detects earthquakes automatically from your sensors' data, builds an event catalog, and shows events on a live map. Ask Grillo to enable it for your project.

## Grillo Cloud for Slide

[Grillo Cloud for Slide](/slide-cloud) at [slide.grillo.io](https://slide.grillo.io) shows each rover's movement, device health, and battery, and lets you export the data.

## Your own seismic system

Pulse and One can send their seismic data to a server you run instead of Grillo. See [Send Data to Your Own Server](/dashboard/data/data-server).
