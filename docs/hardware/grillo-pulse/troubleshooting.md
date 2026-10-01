---
title: Troubleshooting
---

# Troubleshoot Grillo Pulse

Start with Grillo Cloud and the status lights. Do not open, reset, or rewire the sensor unless Grillo Support asks you to.

## Status lights

Grillo Pulse has three status lights.

| Light | Meaning |
|---|---|
| **Green** on | The cellular or Ethernet connection is up |
| **Red** on | The connection failed. The sensor keeps retrying. |
| Green and red both off | The sensor is starting up or still connecting |
| **White** blinking | Data is being sent. Each blink is a packet. |

A healthy sensor shows green on and white blinking steadily.

The lights show what the sensor thinks of its connection. Only Grillo Cloud shows that data is actually arriving, so always check there too.

## Gather information

Before contacting support, record:

- Device ID, and whether it is Pulse Cellular or Pulse Ethernet
- Firmware version shown in Grillo Cloud
- Project and station code
- Status and **Last Seen** in Grillo Cloud
- Connection type and signal strength, if shown
- Which status lights are on
- Recent changes at the site: network, power, or moving the sensor
- Photographs of the installation and the label

## Sensor is missing from Grillo Cloud

1. Select the correct project in the project switcher.
2. Search by Device ID and station code.
3. Confirm the sensor was [claimed](/hardware/grillo-pulse/provisioning).
4. If Grillo Cloud says **Device not found** when you claim it, check the ID or scan the QR code. If it is still not found, contact support.

## Sensor is offline

1. Check **Last Seen** and the sensor's [connection history](/dashboard/sensors/sensor-details#connection-history) to see when it stopped reporting and whether it has been dropping out.
2. Check the 12 V supply is connected and has power. With no lights at all, the sensor has no power.
3. **Red light on:**
   - Pulse Cellular: check the antennas and the mobile coverage at the site.
   - Pulse Ethernet: check the cable, that the port is live, and that the network gives out addresses by DHCP.
4. **Green light on, but offline in Grillo Cloud:** the network is probably blocking outbound UDP on ports 5683 and 5684. Ask the network administrator.
5. Restart the sensor: disconnect the 12 V supply, wait 30 seconds, and reconnect it.
6. Give it up to 5 minutes (cellular) or 1 minute (Ethernet), then refresh Grillo Cloud.
7. Contact support if it stays offline.

## Location or station is wrong

Open the sensor in Grillo Cloud, select **Edit**, correct the station code or location, and save. Physical orientation has to be fixed at the installation.

## Noisy or implausible data

- Check that the enclosure is rigidly mounted, upright, and level.
- Look for loose fixings, or cables touching or tugging the enclosure.
- Note nearby machinery, traffic, wind, and people.
- Check the outside of the enclosure for damage or signs of water getting in.
- Contact support with installation photographs and the times you saw the problem.

## Firmware updates and reset

The current Grillo Pulse cannot be updated from Grillo Cloud yet; Grillo updates it for you. See [Update Firmware](/dashboard/sensors/firmware-updates).

Do not open the enclosure, connect USB, or attempt a factory reset unless Grillo Support asks you to.

[Contact support →](/support/contact)
