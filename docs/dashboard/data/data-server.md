---
title: Send Data to Your Own Server
---

# Send Data to Your Own Server

By default, sensors send their seismic data to Grillo. You can point every sensor in a project at your own server instead, for example to feed Earthworm or SeisComP on your network.

Sensors keep sending health reports to Grillo either way, so you still manage and monitor them in Grillo Cloud.

## What changes

| | Sending to Grillo (default) | Sending to your server |
|---|---|---|
| Sensor health, status, and connection history | In Grillo Cloud | In Grillo Cloud |
| Station codes and firmware updates | In Grillo Cloud | In Grillo Cloud |
| Seismic waveforms | Stored by Grillo | Delivered to your server only |
| Live view and waveform review in Grillo Cloud | Available | No new data |
| SISTEM earthquake detection | Available with the add-on | Not available |

The setting applies to every sensor in the project. It cannot be set for a single sensor.

## What your server needs

Sensors send waveform packets over CoAP on UDP, by default to port 5684. Your server must:

- Be reachable from every sensor at a fixed hostname or IP address
- Accept inbound UDP on the port you choose
- Run software that receives Grillo's waveform packets and passes them to your seismic system

[Contact Grillo Support](/support/contact) for the receiver software and for help connecting it to Earthworm or SeisComP. Set this up and test it before you change the setting.

## Set the data server

Project owners and admins can change this.

1. Open **Project Settings**.
2. Find **Seismic Data Server**.
3. Enter your server as `host:port`, for example `seismic.example.org:5684`.
4. Select **Save**, then **Confirm**.

Each sensor switches at its next health check-in, about a minute later. The sidebar then shows **Sending to** followed by your server.

## Check that it worked

- On your server, confirm packets are arriving from each sensor.
- In Grillo Cloud, sensors should stay **online**. Health reports are not affected by this setting.

If packets are not arriving, check that the hostname resolves from the sensors' network and that the UDP port is open in your firewall.

## Go back to Grillo

Open **Project Settings**, select **Clear** next to the data server, and confirm. Sensors return to sending data to Grillo at their next check-in.
