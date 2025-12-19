---
sidebar_position: 4
title: Network Setup
---

# Network Setup - Grillo Pulse

The Grillo Pulse supports multiple connectivity options: LTE cellular (primary), WiFi, and Starlink (coming soon). This guide covers how to configure each option.

## Connectivity options

| Priority | Method | Best for | Requirements |
|----------|--------|----------|--------------|
| Primary | **LTE Cellular** | Remote locations | Nano SIM card, active data plan |
| Secondary | **Starlink** | Extreme remote | Coming soon |
| Tertiary | **WiFi** | Sites with existing wireless | 2.4 GHz network, SSID & password |
| Additional | **USB Serial** | Debug/local data | USB cable |

:::tip
When WiFi is available and configured, the Pulse will prefer WiFi to conserve cellular data costs.
:::

## Option 1: Cellular setup (Primary)

The Grillo Pulse uses LTE Cat-4 with automatic fallback to 3G/2G networks for global coverage.

### Requirements

- Nano SIM card installed ([see SIM card setup](/hardware/grillo-pulse/sim-card-setup))
- Active data plan with your carrier
- LTE antenna connected
- Adequate cellular coverage at location

### Cellular setup steps

1. **Install SIM card**
   - Insert Nano SIM card into the slot on the PCB
   - See [SIM card setup guide](/hardware/grillo-pulse/sim-card-setup) for details

2. **Connect LTE antenna**
   - Attach antenna to the SMA port
   - Position antenna for optimal reception (vertical, elevated)

3. **Power on the sensor**
   - Connect power (6-10V DC or USB)
   - Wait for cellular connection (may take 2-5 minutes)

4. **Verify connection**
   - LED should indicate cellular connection
   - Check dashboard for sensor online status

### APN configuration

Most carriers work with automatic APN detection. If manual configuration is needed, contact your carrier for:

| Setting | Description |
|---------|-------------|
| APN | Access Point Name from carrier |
| Username | If required by carrier (often blank) |
| Password | If required by carrier (often blank) |

### Network technology support

| Technology | Supported | Notes |
|------------|-----------|-------|
| LTE Cat-4 | Yes | Primary, 150 Mbps DL / 50 Mbps UL |
| WCDMA (3G) | Yes | Automatic fallback |
| GSM (2G) | Yes | Automatic fallback |

### Supported frequency bands

The Grillo Pulse modem provides global coverage with the following bands:

| Technology | Bands |
|------------|-------|
| LTE-FDD | B1, B2, B3, B4, B5, B7, B8, B12, B13, B18, B19, B20, B25, B26, B28, B66 |
| LTE-TDD | B34, B38, B39, B40, B41 |
| WCDMA | B1, B2, B4, B5, B6, B8, B19 |
| GSM | 850, 900, 1800, 1900 MHz |

### GNSS support

The modem includes integrated GNSS for location services:
- GPS, Beidou, GLONASS, GALILEO, QZSS

:::note
Time synchronization uses NTP via Grillo Cloud timeserver, not GNSS. The GNSS module is available for location services only.
:::

## Option 2: WiFi setup

### Requirements

- 2.4 GHz WiFi network (5 GHz is **not** supported)
- Network name (SSID) and password
- Smartphone or computer for configuration

### WiFi setup steps

1. **Power on the sensor**
   - Connect power (6-10V DC or USB) to the sensor
   - Wait for the LED to indicate setup mode

2. **Connect to sensor's hotspot**
   - On your phone/computer, look for a WiFi network named `GrilloPulse-XXXX`
   - (XXXX = last 4 characters of the device's MAC address)
   - Connect to this network (no password required)

3. **Open configuration portal**
   - A captive portal should open automatically
   - If not, open a browser and navigate to `http://192.168.4.1`

4. **Select your WiFi network**
   - Choose your 2.4 GHz network from the list
   - Enter your WiFi password
   - Click "Connect"

5. **Verify connection**
   - The sensor will restart and connect to your network
   - LED should indicate successful connection

## Option 3: Both WiFi and cellular

For maximum reliability, configure both connection methods:

1. Complete WiFi setup first
2. Install and configure SIM card
3. Verify both connections work independently
4. The sensor will automatically:
   - Use WiFi when available
   - Switch to cellular if WiFi fails
   - Return to WiFi when it becomes available

## Network requirements

### Data transmission

The Grillo Pulse transmits seismic data using:

| Setting | Value |
|---------|-------|
| Protocol | UDP over CoAP |
| Data format | Binary |
| Time sync | NTP (via Grillo Cloud timeserver) |
| Compatibility | DataLink/SeedLink compatible |

### Firewall and ports

The Grillo Pulse needs outbound access to Grillo Cloud servers:

| Protocol | Port | Purpose |
|----------|------|---------|
| UDP | 5683, 5684 | Sensor data (CoAP) |
| UDP | 123 | Time synchronization (NTP) |
| TCP | 443 | Firmware updates (HTTPS) |

:::note
No inbound ports need to be opened. All connections are initiated by the sensor.
:::

### Bandwidth requirements

- **Minimum:** 100 Kbps upload
- **Recommended:** 500 Kbps upload
- **Cellular data usage:** Low bandwidth due to binary data format

### Cellular data considerations

- Binary data format minimizes data usage
- Data usage varies with sample rate and event activity
- Consider M2M/IoT data plans for best value
- Monitor usage through your carrier's portal

## LED status indicators (debugging/testing only)

:::note
LEDs are on the PCB and **not visible** through the standard IP67 enclosure. Use the [Grillo Cloud dashboard](https://cloud.grillo.io) to verify connectivity for deployed sensors.
:::

| LED Pattern | Network Status |
|-------------|----------------|
| Solid green | Connected via WiFi |
| Blinking green | Connecting to WiFi |
| Solid cyan | Connected via cellular |
| Blinking cyan | Connecting to cellular |
| Solid blue | Setup mode |
| Solid red | No network connection |

## Signal strength

### Checking WiFi signal

- Use smartphone WiFi analyzer at sensor location
- Minimum recommended: -70 dBm
- Ideal: -60 dBm or better

### Checking cellular signal

- Use smartphone at sensor location as baseline
- Check carrier coverage maps
- LED or dashboard may show signal strength

### Improving cellular reception

1. **Reposition antenna** - Higher is usually better
2. **Use external antenna** - Consider higher-gain antenna
3. **Check orientation** - Vertical is typically best
4. **Clear obstructions** - Metal and dense materials block signal

## Switching between modes

### Force WiFi only

<!-- TODO: Add process to disable cellular -->

Useful for:
- Conserving cellular data
- Testing WiFi reliability

### Force cellular only

<!-- TODO: Add process to disable WiFi -->

Useful for:
- Testing cellular connectivity
- When WiFi is unreliable

### Automatic (recommended)

Default behavior:
1. Sensor tries WiFi first
2. Falls back to cellular if WiFi unavailable
3. Returns to WiFi when available

## Troubleshooting connectivity

### WiFi issues

| Issue | Solution |
|-------|----------|
| Network not found | Verify 2.4 GHz; check range |
| Wrong password | Re-enter carefully |
| Intermittent connection | Check signal strength; move closer |

### Cellular issues

| Issue | Solution |
|-------|----------|
| No connection | Verify SIM; check coverage; check antenna |
| Slow connection | Check signal strength; reposition antenna |
| High latency | Normal for cellular; typically acceptable |

[Full troubleshooting guide →](/hardware/grillo-pulse/troubleshooting)

## Next steps

Once network is configured:

1. [Provision the sensor to Grillo Cloud](/hardware/grillo-pulse/provisioning)
