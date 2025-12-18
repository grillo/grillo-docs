---
sidebar_position: 4
title: Network Setup
---

# Network Setup - Grillo One

The Grillo One supports both WiFi and Ethernet connectivity. This guide covers how to configure each option.

## Connectivity options

| Method | Best for | Requirements |
|--------|----------|--------------|
| **WiFi** | Most installations | 2.4 GHz network, SSID & password |
| **Ethernet** | Maximum reliability | Network cable, available port |

## Option 1: WiFi setup

### Requirements

- 2.4 GHz WiFi network (5 GHz is **not** supported)
- Network name (SSID) and password
- Smartphone or computer for configuration

### WiFi setup steps

<!-- TODO: Add actual WiFi configuration process -->

1. **Power on the sensor**
   - Connect power adapter to the sensor
   - Wait for the LED to indicate setup mode (typically blinking)

2. **Connect to sensor's hotspot**
   - On your phone/computer, look for a WiFi network named `Grillo-XXXX`
   - Connect to this network (no password required initially)

3. **Open configuration page**
   - Open a web browser
   - Navigate to `http://192.168.4.1` or the address shown in the quick start guide

4. **Select your WiFi network**
   - Choose your network from the list of available networks
   - Enter your WiFi password
   - Click "Connect"

5. **Verify connection**
   - The sensor will restart and connect to your network
   - LED should change to indicate successful connection
   - The sensor's hotspot will no longer be visible

### WiFi troubleshooting

| Issue | Solution |
|-------|----------|
| Network not listed | Ensure 2.4 GHz network; move closer to router |
| Connection fails | Verify password; check for special characters |
| Sensor won't enter setup mode | Hold reset button for 10 seconds |

## Option 2: Ethernet setup

### Requirements

- Ethernet cable (included in box)
- Available port on router/switch
- DHCP enabled on network (default for most networks)

### Ethernet setup steps

1. **Connect Ethernet cable**
   - Plug one end into the sensor's Ethernet port
   - Plug the other end into your router or network switch

2. **Connect power**
   - Connect the power adapter to the sensor
   - The sensor will automatically obtain an IP address via DHCP

3. **Verify connection**
   - LED should indicate successful connection
   - The sensor will appear on your network

### Static IP configuration

If your network requires a static IP:

<!-- TODO: Add static IP configuration process -->

1. Access the sensor's configuration interface
2. Navigate to network settings
3. Disable DHCP and enter:
   - IP address
   - Subnet mask
   - Gateway
   - DNS server

## Network requirements

### Firewall and ports

The Grillo One needs outbound access to Grillo Cloud servers:

| Protocol | Port | Destination | Purpose |
|----------|------|-------------|---------|
| HTTPS | 443 | *.grillo.io | API communication |
| MQTT/TLS | 8883 | *.grillo.io | Data streaming |

:::note
No inbound ports need to be opened. All connections are initiated by the sensor.
:::

### Bandwidth requirements

- **Minimum:** 100 Kbps upload
- **Recommended:** 1 Mbps upload
- **Data usage:** Approximately TBD GB/month

### Network restrictions

If your network has restrictions (corporate, university):

1. Contact your IT department
2. Request access to `*.grillo.io` on ports 443 and 8883
3. Provide the sensor's MAC address if required for registration

## LED status indicators

<!-- TODO: Add actual LED status meanings -->

| LED State | Meaning |
|-----------|---------|
| Solid green | Connected and streaming |
| Blinking green | Connecting to network |
| Blinking blue | Setup mode (WiFi hotspot active) |
| Solid red | Error - check troubleshooting |
| Off | No power |

## Verifying connectivity

After network setup:

1. Check the LED shows "connected" status
2. Log into [Grillo Cloud](https://cloud.grillo.io)
3. Navigate to your network's sensor list
4. Look for your sensor (may take a few minutes to appear)

## Switching between WiFi and Ethernet

To change connectivity method:

1. **WiFi to Ethernet:** Simply plug in Ethernet cable; sensor will prefer wired connection
2. **Ethernet to WiFi:** Unplug Ethernet cable; sensor will use configured WiFi

## Next steps

Once connected to the network:

1. [Provision the sensor to Grillo Cloud](/hardware/grillo-one/provisioning)
