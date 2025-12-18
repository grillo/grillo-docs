---
sidebar_position: 3
title: Physical Installation
---

# Physical Installation - Grillo One

Proper sensor placement is crucial for data quality. This guide covers best practices for installing your Grillo One sensor.

## Choosing a location

### Ideal locations

- **Ground floor** - Best for detecting ground motion
- **Solid foundation** - Concrete slab, basement floor
- **Away from vibrations** - Far from HVAC, appliances, heavy traffic
- **Protected area** - Indoor, climate-controlled space
- **Accessible** - For maintenance and network connectivity

### Locations to avoid

- **Upper floors** - Building sway can amplify signals
- **Near machinery** - HVAC units, generators, motors
- **Near traffic** - Roads with heavy vehicles
- **Soft surfaces** - Carpet, raised floors (without proper mounting)
- **Exterior walls** - More susceptible to environmental noise

## Orientation

The Grillo One should be installed in a specific orientation for accurate readings:

![Sensor orientation diagram](/img/placeholder-orientation.svg)
<!-- TODO: Replace with actual orientation diagram -->

- **Level** - Use a bubble level to ensure the sensor is horizontal
- **Aligned** - Arrow on device should point North (if marked)
- **Stable** - Should not wobble or move when touched

:::tip
A slightly imperfect orientation is acceptable. The most important factor is that the sensor is stable and level.
:::

## Mounting options

### Option 1: Floor placement (Recommended)

The simplest installation method:

1. Choose a location on a solid floor (concrete preferred)
2. Clean the surface to remove dust and debris
3. Place the sensor directly on the floor
4. Ensure it sits level and stable
5. Use adhesive pads if needed to prevent sliding

**Best for:** Concrete floors, basements, ground-level rooms

### Option 2: Wall mounting

For locations where floor placement isn't suitable:

1. Locate wall studs or use appropriate anchors
2. Mark mounting holes using the bracket as a template
3. Drill pilot holes and install anchors if needed
4. Attach the mounting bracket securely
5. Snap the sensor onto the bracket
6. Verify level and stability

**Best for:** Rooms with carpet, raised floors, or limited floor space

### Option 3: Shelf placement

If mounting isn't possible:

1. Choose a sturdy, stable shelf
2. Ensure the shelf is attached firmly to the wall
3. Place the sensor on a non-slip surface
4. Verify the shelf doesn't vibrate or wobble

**Best for:** Temporary installations, rental properties

## Installation checklist

Before finalizing installation:

- [ ] Location is on the ground floor (if possible)
- [ ] Surface is solid and stable
- [ ] Sensor is level (check with level tool)
- [ ] Away from vibration sources (>3 meters from HVAC)
- [ ] Power outlet is accessible
- [ ] Network connectivity is available (WiFi signal or Ethernet)
- [ ] Sensor is secure and won't be disturbed

## Cable management

### Power cable

- Route along walls or baseboards
- Use cable clips to secure
- Avoid creating trip hazards
- Leave some slack for adjustment

### Ethernet cable (if used)

- Route to nearest network switch or router
- Use cable clips or conduit for clean installation
- Keep away from power cables to reduce interference

## Environmental considerations

| Factor | Recommendation |
|--------|----------------|
| Temperature | 0°C to 40°C (32°F to 104°F) |
| Humidity | 10% to 90% non-condensing |
| Dust | Minimal - clean periodically |
| Direct sunlight | Avoid - can cause overheating |

## Common installation mistakes

1. **Installing on upper floors** - Reduces data quality due to building motion
2. **Near HVAC equipment** - Constant vibration creates noise
3. **On carpeted floors without mounting** - Sensor may shift or tilt
4. **In closets with network equipment** - Fan vibration affects readings
5. **Rushed leveling** - Take time to ensure proper orientation

## Next steps

Once physically installed:

1. [Configure network connectivity](/hardware/grillo-one/network-setup)
2. [Provision the sensor to Grillo Cloud](/hardware/grillo-one/provisioning)
