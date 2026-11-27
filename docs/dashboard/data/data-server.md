---
title: Send data to your own server
---

# Send data to your own server

On the Network [plan](/dashboard/plans), your sensors send their seismic data to your own server, for example to feed Earthworm or SeisComP on your network. You choose the address in Grillo Cloud.

Sensors keep sending their health reports to Grillo either way, so you still manage and monitor them in Grillo Cloud.

## What changes

| | Sending to Grillo (other plans) | Sending to your server (Network) |
|---|---|---|
| Sensor health, status, and connection history | In Grillo Cloud | In Grillo Cloud |
| Station details and settings | In Grillo Cloud | In Grillo Cloud |
| Seismic waveforms | Stored by Grillo | Delivered to your server only |
| Live traces and **Waveforms** in Grillo Cloud | Available | Not available |
| Triggers and trigger alerts (Structural) | Available | Not available |
| Earthquake detection and alerts (Seismic and Enterprise) | Available | Not available |

The address applies to every sensor in the project. It cannot be set for a single sensor.

## What your server needs

Sensors send waveform packets over CoAP on UDP, over IPv4. Your server must:

- Be reachable from every sensor at a fixed hostname or IPv4 address
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

coap2seis reads the sensors' JSON data format. Before you switch, ask Grillo Support to confirm your sensors send that format.

Set up and test the receiver before you switch the sensors to it. [Contact Grillo Support](/support/contact) if you need help connecting it to your system.

## Set the data destination

Open **Project settings → Data destination**. It shows:

- **Address**: where the sensors send their data now
- **Sensors**: how many of the project's sensors have switched to it
- **Changed**: who changed it, and when
- **Previous**: the address before, with **Use previous** to go back to it

Owners and admins can change it. Members can see it; viewers do not see it.

1. Enter the **New address** as `coap://` followed by a hostname or IPv4 address and, optionally, a port, for example `coap://seismic.example.org:5684`. No path, no IPv6 address, and at most 127 characters. Grillo Cloud checks it as you type.
2. Confirm the change. The dialog shows the old and new address.

Each sensor switches at its next status report, in about a minute, and sends its seismic data there from then on.

:::note After a sensor restarts
On current Grillo Pulse firmware, a sensor goes back to Grillo's default address each time it restarts, until its next status report, about a minute later, tells it your address again. Expect to miss up to a minute of data on your server after each restart.
:::

To unset the address, clear it and confirm. The sensors keep the address they have.

## Check that it worked

- On your server, confirm packets are arriving from each sensor.
- In **Project settings → Data destination**, **Sensors** should count every sensor as switched.
- In Grillo Cloud, sensors should stay **online**. Health reports are not affected by this setting.

If packets are not arriving, check that the hostname resolves from the sensors' network and that the UDP port is open in your firewall.
