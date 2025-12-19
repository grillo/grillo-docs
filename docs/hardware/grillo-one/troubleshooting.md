---
sidebar_position: 6
title: Troubleshooting
---

# Troubleshooting - Grillo One

This guide covers common issues and solutions for the Grillo One sensor.

## LED status reference

The Grillo One has three status LEDs. Here's what each indicates:

### Network LED

| Color | Meaning | Action |
|-------|---------|--------|
| Blue pulse | Connecting or provisioning mode | Wait, or configure WiFi |
| Green | Connected to network | Normal operation |
| Yellow | Connection warning | Check network stability |
| Red | Connection error | Check network setup |

### Sensor LED

| Color | Meaning | Action |
|-------|---------|--------|
| Blue pulse | Initializing | Wait for startup to complete |
| Green | Running normally | Normal operation |
| Red | Sensor error | Contact support |

### Data LED

| Behavior | Meaning |
|----------|---------|
| Flashing | Transmitting data | Normal operation |
| Off | No transmission | Check network connection |

## Quick reference

| Symptom | Likely Cause | Solution |
|---------|--------------|----------|
| Blue pulsing (stuck) | No network found | Connect Ethernet OR join `GrilloOne-XXXX` WiFi to provision |
| Network LED red | WiFi credentials invalid | Device will auto-reset and re-enter provisioning |
| Sensor LED red | Accelerometer not responding | Contact support (hardware issue) |
| No data reaching server | Internet connectivity issue | Check firewall allows outbound UDP 5683/5684 |
| Time not synchronized | NTP blocked | Check firewall allows outbound UDP 123 |

## Common issues

### Sensor won't power on

**Symptoms:** No LED activity, device appears dead

**Solutions:**
1. Verify power adapter is connected to both sensor and outlet
2. Try a different power outlet
3. Check power adapter cable for damage
4. If available, test with a known-working adapter
5. Contact support if issue persists

### Can't connect to WiFi

**Symptoms:** Sensor won't connect to your wireless network

**Solutions:**

1. **Verify 2.4 GHz network**
   - Grillo One only supports 2.4 GHz
   - 5 GHz networks will not appear in the list

2. **Check password**
   - Re-enter WiFi password carefully
   - Watch for special characters

3. **Signal strength**
   - Move sensor closer to router temporarily
   - Consider a WiFi extender for permanent solution

4. **Network capacity**
   - Some routers limit connected devices
   - Check router settings

5. **Factory reset and retry**
   - Power cycle via USB-C cable
   - Reconfigure WiFi from scratch

### Sensor shows "Offline" in dashboard

**Symptoms:** Sensor was working but now shows offline

**Solutions:**

1. **Check physical setup**
   - Verify power connection
   - Check LED status on device
   - Verify network cable (if using Ethernet)

2. **Check network**
   - Verify your internet connection is working
   - Check if WiFi password changed
   - Look for network outages

3. **Restart sensor**
   - Unplug power for 30 seconds
   - Reconnect and wait 2-3 minutes

4. **Check firewall/network changes**
   - Ensure UDP ports 5683, 5684, and 123 are not blocked
   - Verify no new network restrictions

### Sensor not appearing after provisioning

**Symptoms:** Added sensor to dashboard but it won't appear

**Solutions:**

1. **Wait longer**
   - Initial connection can take up to 5 minutes
   - Refresh the dashboard page

2. **Verify network setup**
   - Ensure sensor completed WiFi/Ethernet setup
   - Check LED indicates network connection

3. **Check Device ID**
   - Verify correct Device ID was entered
   - Watch for typos (0 vs O, 1 vs l)

4. **Check network selection**
   - Ensure sensor was added to the correct network
   - Verify you're viewing the right network in dashboard

### Poor data quality

**Symptoms:** Noisy waveforms, excessive false triggers

**Solutions:**

1. **Check mounting**
   - Ensure sensor is level
   - Verify sensor is stable and not moving
   - Tighten mounting hardware

2. **Evaluate location**
   - Move away from HVAC equipment
   - Distance from roads with heavy traffic
   - Avoid upper floors if possible

3. **Check for local vibration sources**
   - Washing machines, dryers
   - Compressors, pumps
   - Construction activity

4. **Environmental factors**
   - Strong wind can affect buildings
   - Temperature changes can cause noise

### WiFi keeps disconnecting

**Symptoms:** Sensor frequently goes offline and reconnects

**Solutions:**

1. **Signal strength**
   - Check distance to router
   - Look for interference sources
   - Consider WiFi extender

2. **Router issues**
   - Restart your router
   - Check for firmware updates
   - Verify router isn't overloaded

3. **Use Ethernet instead**
   - More reliable than WiFi
   - Eliminates wireless interference

4. **Channel congestion**
   - Change WiFi channel on router
   - Use a WiFi analyzer app to find best channel

## Factory reset

To completely reset your Grillo One:

1. Disconnect the power adapter
2. Connect a USB-C cable to the sensor
3. Power cycle by disconnecting and reconnecting the USB-C cable
4. Sensor will restart in setup mode
5. Reconfigure WiFi and re-provision

:::warning
Factory reset clears all settings including WiFi configuration. You'll need to set up the sensor from scratch.
:::

## Automatic recovery

The Grillo One has built-in recovery mechanisms:

| Situation | Automatic Response |
|-----------|-------------------|
| Invalid WiFi credentials | Auto-clears credentials, restarts into provisioning mode |
| Network dropout | Retries connection (3 attempts with 1-second delay) |
| Bad firmware update | Auto-rollback to previous working version |
| Sensor timeout | Health check every second, LED indicates error |

## Diagnostic information

The device automatically reports diagnostics to Grillo Cloud every 60 seconds, including:
- Connection type (WiFi or Ethernet)
- WiFi signal strength (if applicable)
- Memory usage
- Time synchronization status
- Uptime
- Data buffer usage
- Temperature

When contacting support, gather this information:

1. **Device ID** - Found on sticker on device or packaging
2. **LED status** - Current color/pattern of all three LEDs
3. **Network type** - WiFi or Ethernet
4. **Dashboard status** - What the dashboard shows
5. **Recent changes** - Any changes to network or setup
6. **Error messages** - Screenshots if available

## Contact support

If you've tried the above solutions without success:

1. Visit [Support Contact](/support/contact)
2. Include diagnostic information listed above
3. Describe the issue and steps already tried

## Related guides

- [Network Setup](/hardware/grillo-one/network-setup)
- [Provisioning](/hardware/grillo-one/provisioning)
- [Physical Installation](/hardware/grillo-one/physical-installation)
