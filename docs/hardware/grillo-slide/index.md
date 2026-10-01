---
title: Grillo Slide
---

# Grillo Slide

Grillo Slide measures slow ground movement on slopes. A kit is one **base** and up to eight **rovers**. Each rover reports how far it has moved, in millimetres, relative to the base.

## How it works

- The **base** sits on stable ground. It is the reference point and the kit's link to the internet, over LTE. It needs a SIM card.
- The **rovers** sit on the ground you want to monitor. They talk to the base by radio and need no SIM.
- Every 6 hours (00:00, 06:00, 12:00, and 18:00 UTC) all devices wake up. The base sends GNSS corrections to the rovers, each rover measures its position, and the base uploads the readings. Then everything sleeps until the next cycle.
- Rovers relay for each other, so a rover does not need a direct line to the base. A reading can pass through up to four hops.
- Devices run from an internal battery and have a solar input to keep it charged.

You view the results in [Grillo Cloud for Slide](/slide-cloud) at [slide.grillo.io](https://slide.grillo.io).

## What you get in the first release

| | |
|---|---|
| Kit size | One base and up to 8 rovers |
| Reading interval | Every 6 hours |
| Dashboard | Movement in mm (east, north, up), battery, signal, hop count, and missing rovers |
| Raw data | Raw GNSS observations on request, as files to download |
| Firmware | [Updated over the air](/slide-cloud/firmware-and-api#firmware-updates): the base over LTE, the rovers through the base |

Grillo sets up each kit before it ships: the devices are already linked to your account, site, and sensor group. You fit the antennas and the SIM, set the SIM's APN, and install the devices.

Not available yet: movement alerts, adding a rover to a kit that is already running, setting up a kit yourself from scratch, and an iOS version of the app.

## What you need

- Your Slide kit and its install card
- A GNSS antenna fitted to every device
- An activated nano-SIM with a data plan, for the base
- The SIM provider's APN
- An Android phone with the **Grillo Field** app
- Your Grillo sign-in, sent to you by Grillo

## Setup steps

1. [Fit the SIM and set the APN](/hardware/grillo-slide/sim-and-apn) on the base.
2. [Install the devices on site](/hardware/grillo-slide/installation) and [survey the base](/hardware/grillo-slide/installation#survey-the-base).
3. [Check the first readings](/slide-cloud/sites-and-devices) on the dashboard.

If something does not work, see [Troubleshooting](/hardware/grillo-slide/troubleshooting).
