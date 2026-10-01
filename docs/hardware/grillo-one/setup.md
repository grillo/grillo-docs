---
title: Connect and Install
---

# Connect and Install Grillo One

## Before you begin

- [Claim the sensor](/dashboard/sensors/adding-sensor) in Grillo Cloud.
- Have a 5 V DC supply for the sensor.
- For Ethernet: a cable to a network that gives out addresses by DHCP.
- For Wi-Fi: the name and password of a 2.4 GHz network, and a phone or laptop.
- Ask the site's network administrator to allow outbound UDP on ports 5683 and 5684, and NTP.

## Connect with Ethernet

1. Plug the Ethernet cable into the sensor.
2. Connect power.

Grillo One checks for an Ethernet link when it starts. If it finds one, it uses Ethernet and needs no further setup.

## Connect with Wi-Fi

If there is no Ethernet link at start-up, Grillo One falls back to Wi-Fi. With no Wi-Fi network saved, it starts its own setup network.

1. Connect power, with no Ethernet cable plugged in. The Network light turns blue while the setup network is running.
2. On your phone or laptop, join the Wi-Fi network named `GrilloOne-XXXX`, where `XXXX` is four characters unique to the sensor. The network has no password.
3. A setup page opens. If it does not, browse to `http://192.168.4.1`.
4. Choose your Wi-Fi network from the list, or type its name.
5. Enter the Wi-Fi password and select **Connect**.

The sensor saves the details, restarts, and joins your network. The `GrilloOne-XXXX` network disappears.

If you plug in an Ethernet cable while the setup network is running, the sensor switches to Ethernet and skips Wi-Fi setup.

## Status lights

Grillo One has three status lights.

| Light | Off | Blinking | Solid |
|---|---|---|---|
| Network | No connection | Connecting | Connected |
| Sensor | Sensor error | Starting up | Recording |
| Data | — | Blinks each time data is sent | — |

A healthy sensor shows Network solid, Sensor solid, and Data blinking steadily.

## Mount the sensor

- Fix the sensor rigidly to the structure or floor you want to measure. A loose sensor records its own rattling.
- Mount it level, and note which way it faces so you can interpret the north and east channels.
- Keep it away from machinery, doors, and foot traffic where you can.
- Use it indoors, or in an enclosure rated for the location.

See [Sensor Placement](/concepts/sensor-placement) for choosing a site.

## Verify

In Grillo Cloud, open **Sensors** and check that the sensor is **online** and its **Last Seen** time is current. See [Verify Sensor Status](/dashboard/sensors/sensor-status).

## Troubleshooting

| Problem | What to do |
|---|---|
| Network light keeps blinking | On Ethernet, check the cable and that the network provides DHCP. On Wi-Fi, the sensor may be out of range. |
| `GrilloOne-XXXX` network does not appear | Unplug the Ethernet cable and power-cycle the sensor. The setup network only starts when there is no Ethernet link and no working Wi-Fi details. |
| Wrong Wi-Fi password entered | After three failed attempts the sensor forgets the saved details, restarts, and reopens the setup network. Join it and enter the details again. |
| Network light solid but sensor offline in Grillo Cloud | Outbound UDP on ports 5683 and 5684 is probably blocked. Ask the network administrator. Also confirm the sensor is claimed in the right project. |
| Sensor light off | The accelerometer did not start. Power-cycle the sensor; if it stays off, contact support. |

[Contact Grillo Support](/support/contact) with the Device ID and a description of the three lights.
