---
title: Send Data to Your Own Server
---

# Send Data to Your Own Server

By default, sensors send their seismic data to Grillo. You can point every sensor in a project at your own server instead, for example to feed Earthworm or SeisComP on your network.

Sensors keep sending health reports to Grillo either way, so you still manage and monitor them in Grillo Cloud.

To keep your data in Grillo and also get a live copy over SeedLink, [stream it to your own ringserver](/dashboard/data/realtime-export) instead. You set that up yourself in Grillo Cloud.

## What changes

| | Sending to Grillo (default) | Sending to your server |
|---|---|---|
| Sensor health, status, and connection history | In Grillo Cloud | In Grillo Cloud |
| Station codes and firmware updates | In Grillo Cloud | In Grillo Cloud |
| Seismic waveforms | Stored by Grillo | Delivered to your server only |
| Live view and waveform review in Grillo Cloud (SISTEM) | Available | No new data |
| SISTEM earthquake detection | Available with the add-on | Not available |

The setting applies to every sensor in the project. It cannot be set for a single sensor.

## What your server needs

Sensors send waveform packets over CoAP on UDP, by default to port 5684. Your server must:

- Be reachable from every sensor at a fixed hostname or IP address
- Accept inbound UDP on the port you choose
- Run software that receives Grillo's waveform packets and passes them to your seismic system

## Receive the data with coap2seis

[coap2seis](https://github.com/grillo/coap2seis) is Grillo's open-source receiver. It runs on your server, listens for the sensors' packets on UDP port 5684, and writes the data to:

| Output | Use it for |
|---|---|
| An **Earthworm** ring, through PyEW | Feeding a real-time Earthworm system |
| **miniSEED** files, one per station, channel, and day | ObsPy, SeisComP, archiving, and post-processing |

Station, channel, and network codes come from the sensors, so the data arrives named the way it is in Grillo Cloud. You can set a fixed network code and the location code (default `00`).

To install it:

```bash
git clone https://github.com/grillo/coap2seis.git
cd coap2seis
pip install -e .
pip install obspy          # for miniSEED output
python -m coap2seis
```

It asks for the output, port, and codes, with sensible defaults. The repository also includes a systemd service for running it permanently. See its [README](https://github.com/grillo/coap2seis#readme) for the full options.

coap2seis reads the sensors' JSON data format. When Grillo points your project at your server, it also switches your sensors to that format; mention coap2seis in your request.

Set up and test the receiver before you ask for the switch. [Contact Grillo Support](/support/contact) if you need help connecting it to your system.

## Set the data server

Grillo sets this for you. [Contact Grillo Support](/support/contact) with your project name and your server as `host:port`, for example `seismic.example.org:5684`.

Each sensor switches at its next health check-in, about a minute after the change. The sidebar then shows **Sending to** followed by your server.

## Check that it worked

- On your server, confirm packets are arriving from each sensor.
- In Grillo Cloud, sensors should stay **online**. Health reports are not affected by this setting.

If packets are not arriving, check that the hostname resolves from the sensors' network and that the UDP port is open in your firewall.

## Go back to Grillo

Ask Grillo Support to clear the data server. Sensors return to sending data to Grillo at their next check-in.
