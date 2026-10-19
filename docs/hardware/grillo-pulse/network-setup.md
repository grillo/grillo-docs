---
title: Connectivity
---

# Connect a Grillo Pulse

Each Pulse uses one connection, set by its variant. Check your order or the enclosure label.

## Pulse Cellular

Pulse Cellular connects over LTE. If your order includes a Grillo SIM, Grillo fits and sets it up, and you do not need to enter an APN or any other setting.

1. Screw the cellular antenna onto the SMA cellular connector, and the GPS puck antenna onto the SMA GPS connector.
2. Check there is mobile coverage at the installation point.
3. Connect 12 V DC to the M12 power connector, using the M12-to-DC power cable.

The first connection can take up to 5 minutes. See [Cellular and SIM](/hardware/grillo-pulse/sim-card-setup) for coverage and SIM details.

## Pulse Ethernet

Pulse Ethernet connects to a wired 10/100 network.

1. Connect the M12-to-Ethernet cable to the M12 Ethernet connector and tighten it fully. Connect the other end to your network.
2. To use GPS timing, screw the GPS puck antenna onto the SMA GPS connector.
3. Connect 12 V DC to the M12 power connector, using the M12-to-DC power cable.

The network must:

- Give the sensor an address automatically (DHCP)
- Allow outbound UDP to ports 5683 (health reports) and 5684 (seismic data)
- Allow outbound NTP (UDP port 123), which the sensor can use to set its clock

No inbound ports or port forwarding are needed. Pulse Ethernet usually comes online within a minute.

## Wi-Fi

Both variants have Wi-Fi hardware, but the sensor uses its cellular or Ethernet connection. Wi-Fi cannot be set up by customers.

## Where the data goes

By default a Pulse sends its seismic data to Grillo. You can [view and download it](/dashboard/data/waveforms) in Grillo Cloud. To receive the data on your own server instead, see [Send Data to Your Own Server](/dashboard/data/data-server). That is a project setting in Grillo Cloud; nothing changes on the sensor.

## Acceptance test

The connection is working when Grillo Cloud shows the sensor **online**, with a current **Last Seen** and the expected connection type.
