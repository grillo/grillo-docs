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

- Claim sensors by Device ID or QR code and assign FDSN station codes
- See sensors in a table and on a map
- Monitor online status, connectivity, signal, power, and firmware
- Update firmware over the air

### Plans

What else Grillo Cloud does depends on the project's [plan](/dashboard/plans):

- **Structural:** sensors in buildings and infrastructure record [triggers](/dashboard/triggers) when shaking crosses a threshold, and Grillo emails you when it reaches an [alert level](/dashboard/alerts).
- **Network:** sensors stream continuously; review and download waveforms, and stream them to your own ringserver.
- **Seismic** and **Enterprise:** everything in Network, plus [automatic earthquake detection](/events), an event catalog, and a live map.

Every plan includes the read-only [Data API](/dashboard/data/api).

## Grillo Cloud for Slide

[Grillo Cloud for Slide](/slide-cloud) at [slide.grillo.io](https://slide.grillo.io) shows each rover's movement, device health, and battery, and lets you export the data and raw GNSS files. Slide firmware is updated over the air.

## Grillo Field app

**Grillo Field** is the phone app for setting up Grillo Slide over Bluetooth, including the base's APN. It is on Android now; the iPhone version is coming soon.

## Your own seismic system

Pulse and One can send their seismic data to a server you run instead of Grillo. Grillo's open-source [coap2seis](https://github.com/grillo/coap2seis) receives it and passes it to Earthworm, or writes miniSEED for SeisComP and ObsPy. Grillo switches this on for your project, and you keep managing the sensors in Grillo Cloud. See [Send Data to Your Own Server](/dashboard/data/data-server).

You can also keep the data in Grillo and stream a live copy as miniSEED to your own ringserver, which serves it over SeedLink. A project admin turns this on in Grillo Cloud. See [Stream Data to Your Own Ringserver](/dashboard/data/realtime-export).

## Getting help

Use the chat messenger on this site, or see [Contact Support](/support/contact).
