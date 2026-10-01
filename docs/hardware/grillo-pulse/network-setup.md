---
title: Connectivity
---

# Connect a Grillo Pulse

Each Pulse uses one connection, set by its variant. Check your order or the enclosure label.

## Pulse Cellular

Pulse Cellular connects over LTE using the SIM Grillo fits and sets up. You do not need to enter an APN or any other setting.

1. Fit the antennas to their matching labelled connectors.
2. Check there is mobile coverage at the installation point.
3. Plug the 12 V supply into the external power connector.

The first connection can take up to 5 minutes. See [Cellular and SIM](/hardware/grillo-pulse/sim-card-setup) for coverage and SIM details.

## Pulse Ethernet

Pulse Ethernet connects to a wired 10/100 network.

1. Feed the network cable through the weatherproof Ethernet entry on the enclosure and tighten it so it seals around the cable.
2. Plug the 12 V supply into the external power connector.

The network must:

- Give the sensor an address automatically (DHCP)
- Allow outbound UDP to ports 5683 (health reports) and 5684 (seismic data)
- Allow outbound NTP (UDP port 123), which the sensor uses to set its clock

No inbound ports or port forwarding are needed. Pulse Ethernet usually comes online within a minute.

## Wi-Fi

Both variants have Wi-Fi hardware, but the sensor uses its cellular or Ethernet connection. Wi-Fi cannot be set up by customers.

## Where the data goes

By default a Pulse sends its seismic data to Grillo. Projects with the [SISTEM add-on](/events) can [view and download it](/dashboard/data/waveforms). To receive the data on your own server instead, see [Send Data to Your Own Server](/dashboard/data/data-server). That is a project setting in Grillo Cloud; nothing changes on the sensor.

## Acceptance test

The connection is working when Grillo Cloud shows the sensor **online**, with a current **Last Seen** and the expected connection type. A green light on the sensor shows the link is up; only Grillo Cloud shows that data is arriving.
