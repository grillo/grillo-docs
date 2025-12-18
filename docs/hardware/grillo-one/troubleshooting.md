---
sidebar_position: 6
title: Troubleshooting
---

# Troubleshooting - Grillo One

This guide covers common issues and solutions for the Grillo One sensor.

## LED status reference

<!-- TODO: Confirm actual LED patterns -->

| LED Pattern | Status | Action |
|-------------|--------|--------|
| Solid green | Online, streaming | Normal operation |
| Blinking green | Connecting | Wait for connection |
| Solid blue | Setup mode | Configure WiFi |
| Blinking blue | Hotspot active | Connect to configure |
| Solid red | Error | See error section |
| Blinking red | Critical error | Contact support |
| Off | No power | Check power connection |

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
   - Hold reset button for 10 seconds
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
   - Ensure ports 443 and 8883 are not blocked
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

3. **Check serial number**
   - Verify correct serial number was entered
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

1. Locate the reset button on the back panel
2. Press and hold for **10 seconds**
3. Release when LED pattern changes
4. Sensor will restart in setup mode
5. Reconfigure WiFi and re-provision

:::warning
Factory reset clears all settings including WiFi configuration. You'll need to set up the sensor from scratch.
:::

## Error codes

<!-- TODO: Add actual error codes if applicable -->

| Code | Meaning | Solution |
|------|---------|----------|
| E01 | Network error | Check internet connection |
| E02 | Authentication failed | Re-provision sensor |
| E03 | Server unreachable | Check firewall settings |
| E04 | Sensor hardware error | Contact support |

## Diagnostic information

When contacting support, gather this information:

1. **Serial number** - Found on bottom of device
2. **LED status** - Current light pattern
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
