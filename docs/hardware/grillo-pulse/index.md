---
title: Grillo Pulse
---

# Grillo Pulse

Grillo Pulse is a seismic sensor with two sensors in one enclosure: a geophone for small, distant earthquakes and an accelerometer for strong shaking. It sends its data in real time over cellular or Ethernet.

:::warning Power it only from 12 V DC
Grillo Pulse runs from a 12 V DC supply through its M12 power connector. It cannot be powered from USB, and a USB cable with power on it can damage it. Leave the USB ports alone unless Grillo Support asks you to use them.
:::

## At a glance

| | |
|---|---|
| Geophone | 4.5 Hz vertical, 32-bit converter. Channel `EHZ`. |
| Accelerometer | Three-axis MEMS. Channels `HNZ`, `HNN`, `HNE` at 125 samples per second. |
| Connectivity | **Pulse Cellular:** LTE Cat-1. **Pulse Ethernet:** 10/100 wired Ethernet through an M12 connector. |
| Power | 12 V DC, through the M12 power connector. No built-in solar or battery. |
| Connectors | M12 power and SMA GPS antenna on both variants. Plus SMA cellular antenna on Pulse Cellular, or M12 Ethernet on Pulse Ethernet. See [What's in the Box](/hardware/grillo-pulse/whats-in-the-box). |
| Timing | GPS, or network time (NTP) |
| Status lights | Inside the enclosure only. Use Grillo Cloud to check the sensor. |
| Managed in | [Grillo Cloud](/dashboard) |

## Two variants

The two variants are the same sensor with a different connection. Check your order or the enclosure label to see which one you have.

- **Pulse Cellular** connects over the mobile network. Use it where there is mobile coverage and no wired network. See [Cellular and SIM](/hardware/grillo-pulse/sim-card-setup).
- **Pulse Ethernet** connects to a wired network. Use it where you have a network port and want a fixed connection. See [Connectivity](/hardware/grillo-pulse/network-setup).

## Installation sequence

1. [Check what's in the box](/hardware/grillo-pulse/whats-in-the-box) and record the Device ID.
2. [Claim it in Grillo Cloud](/hardware/grillo-pulse/provisioning).
3. [Bench-test it](/hardware/grillo-pulse/quick-start): power, connection, and online in Grillo Cloud.
4. [Install it on site](/hardware/grillo-pulse/physical-installation).
5. [Verify it is online](/dashboard/sensors/sensor-status) before you leave.

## Setup is complete when

In Grillo Cloud:

- The Device ID and station code are correct.
- The sensor is **online** and **Last Seen** is current.
- The connection type matches the variant: Cellular or Ethernet.
- The coordinates and location name are correct.

## Off-grid power

Pulse has one power input: 12 V DC, on its M12 power connector. It has no built-in solar or battery. For a site without mains power, plug in a solar kit, which is a solar panel and battery that supply 12 V DC. Grillo offers two:

- **For continuous recording**, where the sensor records and sends data all the time.
- **For triggered recording**, where the sensor records on trigger, for example structural health monitoring.

Ask Grillo which kit suits your site, or use your own solar charge controller and battery that supply a steady 12 V DC.

:::note Earlier Pulse units
This guide covers the current Grillo Pulse. Units installed before 2026 use different hardware and firmware. If you look after one of those, [contact Grillo Support](/support/contact) for its procedures.
:::
