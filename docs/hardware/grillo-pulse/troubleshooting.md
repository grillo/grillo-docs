---
sidebar_position: 7
title: Troubleshooting
---

# Troubleshooting - Grillo Pulse

This guide covers common issues and solutions for the Grillo Pulse sensor.

:::info Monitoring deployed sensors
The status LEDs on the Grillo Pulse PCB are **not visible** through the standard IP67 enclosure. For deployed sensors, use the [Grillo Cloud dashboard](https://cloud.grillo.io) to monitor sensor status, connectivity, and data streaming. The LED reference below is useful for debugging and testing before final assembly, or if using a custom enclosure with a transparent lid.
:::

## Checking sensor status via dashboard

For deployed sensors, the Grillo Cloud dashboard is your primary tool for monitoring:

1. **Log in** to [cloud.grillo.io](https://cloud.grillo.io)
2. **Navigate** to your network and sensor
3. **Check status indicators:**
   - **Online** - Sensor is connected and streaming data
   - **Offline** - Sensor is not currently connected
   - **Pending** - Sensor is registered but hasn't connected yet
4. **View details** for connection type (WiFi/Cellular), signal strength, and last data received

## LED status reference (debugging/testing only)

The Grillo Pulse has two RGB status LEDs on the PCB:

### Network LED

| Color | Meaning | Action |
|-------|---------|--------|
| Blue pulsing | Connecting or provisioning mode | Wait, or configure WiFi/APN |
| Green | Connected to network | Normal operation |
| Red | Connection failed | Check network setup |

### Sensor LED

| Color | Meaning | Action |
|-------|---------|--------|
| Green | Sensors operational | Normal operation |
| Yellow | Sensor degraded | Check sensor status in dashboard |
| Red | Sensor failed | Contact support |

### Both LEDs

| Color | Meaning | Action |
|-------|---------|--------|
| Purple blinking | OTA firmware update in progress | Wait for update to complete |
| Off | No power | Check power connection |

## Common issues

### Sensor won't power on

**Symptoms:** No LED activity, device appears dead

**Solutions:**
1. Verify power adapter is connected properly
2. Check weatherproof connector is fully seated
3. Try a different power outlet
4. Check power adapter cable for damage
5. Verify battery isn't completely depleted
6. Contact support if issue persists

### Can't connect to WiFi

**Symptoms:** Sensor won't connect to wireless network

**Solutions:**

1. **Verify 2.4 GHz network**
   - Grillo Pulse only supports 2.4 GHz
   - 5 GHz networks will not work

2. **Check signal strength**
   - Move sensor closer to router temporarily
   - Use a WiFi extender for permanent solution

3. **Verify credentials**
   - Re-enter WiFi password carefully
   - Check for special characters

4. **Factory reset and retry**
   - Reset sensor to factory defaults
   - Reconfigure from scratch

### Cellular not connecting

**Symptoms:** Sensor has power but cellular won't connect

**Solutions:**

1. **Check SIM card**
   - Verify SIM is properly seated
   - Ensure SIM is activated with carrier
   - Try SIM in a phone to verify it works

2. **Check antenna**
   - Verify antenna is connected securely
   - Try repositioning antenna
   - Check antenna cable for damage

3. **Check coverage**
   - Verify cellular coverage at location
   - Check carrier's coverage map
   - Try moving sensor to different position

4. **Verify APN settings**
   - Confirm APN matches carrier requirements
   - Check username/password if required

5. **Contact carrier**
   - Verify account is active
   - Check for network outages
   - Confirm M2M/IoT service is enabled

### Sensor shows "Offline" in dashboard

**Symptoms:** Sensor was working but now shows offline

**Solutions:**

1. **Check physical setup**
   - Verify power connection
   - Check LED status on device
   - Verify antenna connection (cellular)

2. **Check network**
   - For WiFi: verify network is working
   - For cellular: check carrier status

3. **Check environment**
   - Power outage at site?
   - Weather damage?
   - Antenna displaced?

4. **Restart sensor**
   - Disconnect power for 30 seconds
   - Reconnect and wait 5 minutes

5. **Check data plan**
   - For cellular: verify data plan is active
   - Check for usage limits exceeded

### Poor cellular signal

**Symptoms:** Intermittent connectivity, slow data

**Solutions:**

1. **Reposition antenna**
   - Move to higher location
   - Point away from obstructions
   - Try different orientations

2. **Check for interference**
   - Move away from metal structures
   - Distance from power lines
   - Check for RF interference sources

3. **Consider external antenna**
   - Higher gain antenna may help
   - Directional antenna if tower location known

4. **Contact carrier**
   - Check for network issues
   - Verify coverage at exact location

### Battery draining quickly

**Symptoms:** Battery backup doesn't last as expected

**Solutions:**

1. **Check cellular usage**
   - Cellular uses more power than WiFi
   - Poor signal increases power consumption

2. **Check configuration**
   - Higher sample rates use more power
   - Reduce reporting frequency if possible

3. **Verify AC power**
   - Ensure primary power is connected
   - Check for loose connections

4. **Battery age**
   - Batteries degrade over time
   - May need replacement after several years

### Data quality issues

**Symptoms:** Noisy data, false triggers

**Solutions:**

1. **Check mounting**
   - Verify sensor is level
   - Ensure stable mounting
   - Tighten all hardware

2. **Evaluate location**
   - Distance from vibration sources
   - Check for wind exposure
   - Verify ground stability

3. **Check enclosure**
   - Ensure properly sealed
   - Look for water ingress
   - Verify nothing loose inside

### Weather-related issues

**Symptoms:** Problems after rain, temperature changes

**Solutions:**

1. **Check seals**
   - Verify enclosure is properly sealed
   - Check cable gland tightness
   - Look for visible damage

2. **Check for water**
   - If water suspected, open and dry
   - Do not power on until dry
   - Replace desiccant if present

3. **Temperature extremes**
   - Verify operating within spec
   - Consider shade/shelter
   - Check battery performance in cold

## Factory reset

To completely reset your Grillo Pulse:

1. Power off the sensor
2. Open the enclosure
3. Locate the reset button on the board
4. Press and hold for **10 seconds**
5. Release when LED pattern changes
6. Close and seal enclosure
7. Sensor will restart in setup mode

:::warning
Factory reset clears all settings including WiFi configuration, cellular APN, and provisioning. You'll need to set up the sensor from scratch.
:::

## Firmware updates (OTA)

The Grillo Pulse supports over-the-air firmware updates:

- **Update indicator** - Both LEDs blink purple during update
- **Automatic rollback** - If update fails verification, device automatically reverts to previous firmware
- **Do not power off** - Wait for update to complete (LEDs return to normal)
- **Checksum verification** - Updates are verified before applying

## Automatic recovery

The Grillo Pulse has built-in recovery mechanisms:

| Situation | Automatic Response |
|-----------|-------------------|
| Invalid WiFi credentials | Auto-clears credentials, restarts into provisioning mode |
| Network dropout | Retries connection automatically |
| Bad firmware update | Auto-rollback to previous working version |
| Sensor error | Reports degraded status to dashboard |

## Diagnostic information

The device automatically reports status to Grillo Cloud every 30 seconds, including:
- Connection type and signal strength
- Battery voltage and charging status
- Memory usage and uptime
- Time synchronization status
- GPS location (if available)
- Temperature

When contacting support, gather this information:

1. **Device ID** - Found on PCB label or packaging
2. **LED status** - Current light pattern and color
3. **Connection type** - WiFi or cellular (LTE/3G/2G)
4. **Signal strength** - If available
5. **Installation details** - Location type, mounting method
6. **Environmental conditions** - Weather, temperature
7. **Power source** - Solar panel voltage, battery status
8. **Recent changes** - Any changes to setup or environment
9. **Error messages** - Screenshots from dashboard

## Contact support

If you've tried the above solutions without success:

1. Visit [Support Contact](/support/contact)
2. Include diagnostic information listed above
3. Describe the issue and steps already tried
4. Include photos if relevant (installation, LED status, etc.)

## Related guides

- [Physical Installation](/hardware/grillo-pulse/physical-installation)
- [Network Setup](/hardware/grillo-pulse/network-setup)
- [SIM Card Setup](/hardware/grillo-pulse/sim-card-setup)
- [Provisioning](/hardware/grillo-pulse/provisioning)
