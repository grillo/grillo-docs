---
sidebar_position: 3
title: Physical Installation
---

# Physical Installation - Grillo Pulse

The Grillo Pulse is designed for versatile deployment including outdoor and remote locations. With its IP67 weatherproof enclosure option, solar power compatibility, and global LTE connectivity, it's ideal for remote seismic monitoring stations. This guide covers installation best practices.

## Choosing a location

### Ideal locations

- **Ground level** - Best for detecting ground motion
- **Solid foundation** - Concrete, bedrock, or stable soil
- **Good cellular coverage** - For reliable LTE connectivity
- **Away from vibrations** - Far from machinery, roads, generators
- **Accessible for maintenance** - But secure from tampering
- **Solar exposure** - If using solar power, ensure adequate sunlight

### Outdoor considerations

- **Drainage** - Avoid areas that collect water
- **Sun exposure** - Balance solar panel needs with preventing overheating
- **Wind** - Sheltered locations reduce seismic noise
- **Security** - Consider tamper-resistant mounting
- **Cellular signal** - Test signal strength before permanent installation

### Locations to avoid

- **Near machinery** - Generators, pumps, HVAC
- **Soft or unstable ground** - Sand, loose soil without foundation
- **Flood-prone areas** - Even with IP67 rating
- **High-traffic areas** - Vibration from vehicles/people
- **Dense foliage** - Can reduce solar efficiency and block cellular signal
- **Metal structures** - May interfere with cellular signal

## Orientation

The Grillo Pulse must be installed level for accurate seismic readings. The 4.5Hz geophone measures vertical motion, so proper leveling is critical.

![Sensor orientation diagram](/img/placeholder-pulse-orientation.svg)
<!-- TODO: Replace with actual orientation diagram -->

- **Level** - Use a bubble level to ensure horizontal placement
- **Stable** - Should not move or rock when touched
- **Geophone orientation** - The geophone measures vertical (Z-axis) motion
- **MEMS orientation** - The accelerometer measures motion in 3 axes (X, Y, Z)

## Mounting options

### Option 1: Floor/ground mounting (Recommended for best data)

The sensor must be mounted on a **stiff structural element**:

- Concrete floor slab (preferred)
- Bedrock or stable compacted ground
- Steel beam or column base

**Installation steps:**

1. Clean the mounting surface thoroughly
2. Remove all dust, debris, and loose material
3. Place the sensor on the prepared surface
4. Use a spirit level to ensure the sensor is horizontal
5. Mark screw hole positions through the mounting holes
6. Drill holes and insert appropriate anchors
7. Position the sensor and insert screws through mounting holes
8. Tighten screws firmly — **the sensor must not move**
9. Connect power and antenna

:::warning Secure mounting required
A loose sensor will produce unreliable data. Ensure all screws are tight and the device cannot move when touched.
:::

### Option 2: Wall mounting

If mounting on a structural wall:

1. Select a solid structural wall (concrete or masonry — avoid hollow structures)
2. Position at floor level where possible
3. Clean the mounting surface
4. Place the sensor with the **USB port facing down**
5. Use a spirit level to ensure horizontal alignment
6. Mark and drill mounting holes
7. Install appropriate anchors
8. Secure the sensor — it must not move
9. Connect power and antenna

:::warning Wall mounting metadata
When a sensor is wall-mounted, you must update its configuration in Grillo Cloud to indicate the mounting orientation. This ensures correct data interpretation.
:::

## LTE antenna placement

For cellular connectivity, antenna placement significantly affects signal quality:

### Best practices

- **Height** - Higher placement generally improves reception
- **Orientation** - Vertical orientation is typically best
- **Obstructions** - Keep clear of metal objects and dense vegetation
- **Separation** - Maintain distance from power cables

### Antenna mounting options

1. **Direct attachment** - Screw directly into sensor's SMA port
2. **Remote mounting** - Use SMA extension cable to position antenna optimally

## Weatherproofing

The Grillo Pulse is designed for outdoor use, but proper installation ensures longevity:

### Cable entry

- Use provided cable glands for all connections
- Ensure glands are tight but not overtightened
- Apply outdoor-rated sealant if needed

### Drainage

- Mount with slight tilt to allow water runoff
- Ensure no water can pool on or around device
- Keep drainage holes clear

### UV protection

- Device housing is UV-resistant
- Avoid unnecessary direct sun exposure
- Consider a sun shade for extreme climates

## Power considerations

The Grillo Pulse accepts 6-10V DC input via its waterproof cable connector, making it ideal for solar-powered and remote installations.

### DC power input

For permanent installations:
- **Voltage** - 6-10V DC input
- **Connector** - Waterproof cable connector (same port used for solar power)
- **Power consumption** - 1.32W (400mA at 3.3V)

### Solar power setup

- **Solar panel** - 6-10V output, sized for your location's sunlight availability
- **Battery** - External LiPo battery for overnight and cloudy operation
- **Battery port** - Dedicated waterproof connector for LiPo battery (same connector type as DC power input)
- **Charge controller** - Recommended for optimal battery management
- Solar input uses the same waterproof connector as DC power input

### USB power

The USB port is primarily intended for firmware updates:
- Can be used for powering the device during testing or bench work
- Not recommended for permanent outdoor installations

:::caution Avoid dual power sources
While the Grillo Pulse has protection diodes to prevent issues from multiple power inputs, it is not advisable to power the device from USB and DC power simultaneously. Use one power source at a time.
:::

### Power cable routing

- Use weatherproof connectors
- Route cables away from water collection points
- Secure cables to prevent wind damage
- Protect connections with weatherproof enclosures

## Installation checklist

Before finalizing installation:

- [ ] Location provides solid, stable mounting surface
- [ ] Sensor is level (verified with level tool)
- [ ] Mounting hardware is secure
- [ ] Away from vibration sources (>5 meters from machinery)
- [ ] LTE antenna positioned for good reception
- [ ] Power cable properly routed and protected
- [ ] All cable glands sealed (if using IP67 enclosure)
- [ ] Sensor is secure against tampering/theft
- [ ] Cellular signal strength verified

## Environmental specifications

| Factor | Specification |
|--------|---------------|
| Operating temperature | -20°C to +60°C |
| Ingress protection | IP67 (with weatherproof enclosure) |
| Power input | 6-10V DC |
| Power consumption | 1.32W (400mA at 3.3V) |

## Common installation mistakes

1. **Poor cellular antenna placement** - Results in connectivity issues
2. **Mounting on unstable surface** - Introduces noise into data
3. **Ignoring drainage** - Can damage electronics over time
4. **Loose mounting** - Sensor movement affects readings
5. **Cable glands not sealed** - Water ingress risk

## Next steps

Once physically installed:

1. [Install SIM card](/hardware/grillo-pulse/sim-card-setup) (if using cellular)
2. [Configure network connectivity](/hardware/grillo-pulse/network-setup)
3. [Provision the sensor](/hardware/grillo-pulse/provisioning)
