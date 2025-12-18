---
sidebar_position: 4
title: Network Setup
---

# Network Setup - Grillo Pulse

The Grillo Pulse supports both WiFi and cellular (LTE) connectivity. This guide covers how to configure each option.

## Connectivity options

| Method | Best for | Requirements |
|--------|----------|--------------|
| **WiFi** | Sites with existing wireless | 2.4 GHz network, SSID & password |
| **Cellular** | Remote locations | SIM card, active data plan |
| **Both** | Maximum reliability | All of the above |

:::tip
When both are configured, the Pulse will prefer WiFi (lower power, no data costs) and fall back to cellular if WiFi is unavailable.
:::

## Option 1: WiFi setup

### Requirements

- 2.4 GHz WiFi network (5 GHz is **not** supported)
- Network name (SSID) and password
- Smartphone or computer for configuration

### WiFi setup steps

<!-- TODO: Add actual WiFi configuration process -->

1. **Power on the sensor**
   - Connect power adapter to the sensor
   - Wait for the LED to indicate setup mode

2. **Connect to sensor's hotspot**
   - On your phone/computer, look for a WiFi network named `GrilloPulse-XXXX`
   - Connect to this network

3. **Open configuration page**
   - Open a web browser
   - Navigate to `http://192.168.4.1`

4. **Select your WiFi network**
   - Choose your network from the list
   - Enter your WiFi password
   - Click "Connect"

5. **Verify connection**
   - The sensor will restart and connect to your network
   - LED should indicate successful connection

## Option 2: Cellular setup

### Requirements

- SIM card installed ([see SIM card setup](/hardware/grillo-pulse/sim-card-setup))
- Active data plan with your carrier
- Cellular antenna connected
- Adequate cellular coverage at location

### Cellular setup steps

1. **Verify SIM installation**
   - Ensure SIM card is properly seated
   - Check SIM is activated with your carrier

2. **Connect antenna**
   - Attach cellular antenna to the SMA port
   - Position antenna for optimal reception

3. **Power on the sensor**
   - Connect power adapter
   - Wait for cellular connection (may take 2-5 minutes)

4. **Verify connection**
   - LED should indicate cellular connection
   - Check dashboard for sensor online status

### APN configuration

Most carriers work with default APN settings. If manual configuration is needed:

<!-- TODO: Add APN configuration process -->

| Setting | Description |
|---------|-------------|
| APN | Access Point Name from carrier |
| Username | If required by carrier |
| Password | If required by carrier |

### Common carrier APNs

<!-- TODO: Add region-specific carrier information -->

| Carrier | APN | Region |
|---------|-----|--------|
| TBD | TBD | TBD |

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

### Firewall and ports

The Grillo Pulse needs outbound access to Grillo Cloud servers:

| Protocol | Port | Destination | Purpose |
|----------|------|-------------|---------|
| HTTPS | 443 | *.grillo.io | API communication |
| MQTT/TLS | 8883 | *.grillo.io | Data streaming |

### Bandwidth requirements

- **Minimum:** 100 Kbps upload
- **Recommended:** 500 Kbps upload
- **Cellular data usage:** Approximately TBD MB/month

### Cellular data considerations

- Data usage varies with sample rate and event activity
- Consider unlimited or high-cap data plans
- Monitor usage through your carrier's portal

## LED status indicators

<!-- TODO: Add actual LED patterns -->

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
