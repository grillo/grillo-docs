---
sidebar_position: 4
title: Network Setup
---

# Network Setup - Grillo One

The Grillo One supports both WiFi and Ethernet connectivity. This guide covers how to configure each option.

## Connectivity options

| Priority | Method | Best for | Requirements |
|----------|--------|----------|--------------|
| 1st | **Ethernet** | Maximum reliability | Network cable, available port, DHCP |
| 2nd | **WiFi** | Flexible placement | 2.4 GHz network, SSID & password |

:::info Connection priority
The Grillo One automatically prioritizes Ethernet over WiFi. If an Ethernet cable is connected at boot, the device will use Ethernet exclusively. WiFi is only used when no Ethernet connection is detected.
:::

## Option 1: WiFi setup

### Requirements

- 2.4 GHz WiFi network (5 GHz is **not** supported)
- Network name (SSID) and password
- Smartphone or computer for configuration

### WiFi setup steps

1. **Power on the sensor** (without Ethernet connected)
   - Connect power adapter to the sensor
   - The device checks for Ethernet for about 5 seconds
   - If no Ethernet is found, it enters provisioning mode
   - Network LED will pulse blue indicating setup mode

2. **Connect to sensor's hotspot**
   - On your phone or computer, look for a WiFi network named `GrilloOne-XXXX`
   - (XXXX = last 4 characters of the device's MAC address)
   - Connect to this network (no password required)

3. **Open configuration portal**
   - A captive portal should open automatically
   - If not, open a browser and navigate to `http://192.168.4.1`

4. **Select your WiFi network**
   - Available networks are displayed with signal strength indicators
   - Select your network from the list
   - For hidden networks, you can enter the SSID manually
   - Enter your WiFi password

5. **Complete setup**
   - The sensor validates your credentials and restarts
   - Credentials are saved permanently on the device
   - Network LED turns green when successfully connected
   - The sensor's hotspot will no longer be visible

### WiFi troubleshooting

| Issue | Solution |
|-------|----------|
| Network not listed | Ensure 2.4 GHz network; move closer to router |
| Connection fails | Verify password; check for special characters |
| Sensor won't enter setup mode | Power cycle via USB-C cable |

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

:::info DHCP required
The Grillo One requires DHCP for automatic IP assignment. Static IP configuration is not currently supported. If your network requires static IP addresses, contact your network administrator about setting up a DHCP reservation for the sensor's MAC address.
:::

## Network requirements

### Firewall and ports

The Grillo One needs outbound internet access:

| Purpose | Protocol | Port | Direction |
|---------|----------|------|-----------|
| Sensor data & status | UDP | 5683, 5684 | Outbound |
| Time synchronization | UDP | 123 (NTP) | Outbound |
| Firmware updates | TCP | 443 (HTTPS) | Outbound |

:::note
No inbound ports need to be opened. All connections are initiated by the sensor.
:::

### Bandwidth requirements

- **Minimum:** 100 Kbps upload
- **Recommended:** 1 Mbps upload
- **Data usage:** Approximately TBD GB/month

### Network restrictions

If your network has restrictions (corporate, university), provide your IT department with these requirements:

- **UDP ports 5683, 5684** - Outbound for sensor data
- **UDP port 123** - Outbound for NTP time sync
- **TCP port 443** - Outbound for firmware updates
- **DHCP** - Required for IP assignment
- **DNS** - Required to resolve hostnames

## LED status indicators

The Network LED indicates connection status:

| LED State | Meaning |
|-----------|---------|
| Blue pulse | Connecting or in provisioning mode |
| Green | Connected to network |
| Yellow | Warning (check connection) |
| Red | Connection error |

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
