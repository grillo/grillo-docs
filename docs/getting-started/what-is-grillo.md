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

- Claim sensors by Device ID and place them on the map
- See every sensor's state, connectivity, signal, and firmware in one table
- Watch stations and detections on the live map
- Invite colleagues and set up alerts by email, webhook, or SMS

### Plans

What else Grillo Cloud does depends on the project's [plan](/dashboard/plans):

- **Structural:** Grillo Cloud records [triggers](/dashboard/triggers) when shaking in buildings and infrastructure crosses a threshold, and alerts you when it reaches an [alert level](/dashboard/alerts).
- **Network:** sensors send their seismic data to [your own server](/dashboard/data/data-server); Grillo Cloud keeps watching their health.
- **Seismic** and **Enterprise:** [automatic earthquake detection](/events), an event catalog, a live map, [earthquake alerts](/events/earthquake-alerts), and waveforms to view and download.

The Enterprise plan adds the read-only [Data API](/dashboard/data/api).

## Grillo Cloud for Slide

[Grillo Cloud for Slide](/slide-cloud) at [slide.grillo.io](https://slide.grillo.io) shows each rover's movement, device health, and battery, and lets you export the data and raw GNSS files. Slide firmware is updated over the air.

## Grillo Field app

**Grillo Field** is the phone app for setting up Grillo Slide over Bluetooth, including the base's APN. It is on Android now; the iPhone version is coming soon.

## Your own seismic system

Pulse and One can send their seismic data to a server you run instead of Grillo. Grillo's open-source [coap2seis](https://github.com/grillo/coap2seis) receives it and passes it to Earthworm, or writes miniSEED for SeisComP and ObsPy. On the Network plan you set the address yourself in Grillo Cloud, and you keep managing the sensors there. See [Send Data to Your Own Server](/dashboard/data/data-server).

## Getting help

Use the chat messenger on this site, or see [Contact Support](/support/contact).
