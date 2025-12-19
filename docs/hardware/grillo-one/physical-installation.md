---
sidebar_position: 3
title: Physical Installation
---

# Physical Installation - Grillo One

Proper sensor placement is crucial for data quality. Follow this guide step-by-step to install your Grillo One sensor.

:::warning Indoor use only
The Grillo One is designed for indoor installation only. For outdoor deployments, see the [Grillo Pulse](/hardware/grillo-pulse/) with its weatherproof enclosure.
:::

## Before you begin

### Tools required

- Pencil or marker
- Power drill with masonry bit (sized for included wall plugs)
- Screwdriver
- Spirit level
- Cleaning cloth

### Included hardware

- Mounting screws
- Wall plugs

## Step 1: Choose your location

Select a location that meets **all** of the following criteria:

### Building level

- **Ground floor or basement only** — upper floors amplify building sway and reduce data quality

### Surface type

The sensor must be mounted on a **stiff structural element**:

- Concrete floor slab (preferred)
- Steel beam or column base
- Structural concrete or masonry wall (at floor level)

:::caution Unsuitable surfaces
Do not mount on:
- Wooden floors or raised flooring
- Drywall or plasterboard
- Mid-span of walls (between structural supports)
- Carpet (unless using a solid base underneath)
:::

### Environment

| ✓ Required | ✗ Avoid |
|------------|---------|
| Near power outlet | Upper floors |
| Near WiFi router or Ethernet port | HVAC units, generators, motors |
| Away from foot traffic | Hallways, doorways, stairs |
| Quiet location | Roads with heavy vehicle traffic |
| | Exterior walls |

:::caution Floor mounting: water hazards
If mounting on the floor, avoid locations at risk of:
- **Flooding** — basements prone to water ingress
- **Floor cleaning** — areas regularly mopped or washed
- **Spills** — near sinks, pipes, or water heaters
:::

## Step 2: Prepare the surface

1. Clean the mounting surface thoroughly
2. Remove all dust, debris, and loose material
3. Ensure the surface is completely dry

## Step 3: Mark and drill mounting holes

1. Place the sensor on the prepared surface
2. Use a spirit level to ensure the sensor is horizontal
3. For wall mounting: position with USB port facing down
4. Mark screw hole positions through the flanged mounting holes with a pencil
5. Remove the sensor
6. Drill holes at the marked positions using the masonry bit
7. Clear dust from the holes
8. Insert wall plugs

## Step 4: Mount the sensor

1. Position the sensor over the wall plugs
2. Insert screws through the flanged mounting holes
3. Tighten screws firmly — **the sensor must not move**
4. Verify the sensor is level with a spirit level
5. Confirm the sensor cannot shift or wobble

:::warning Secure mounting required
A loose sensor will produce unreliable data. Ensure all screws are tight and the device cannot move when touched.
:::

## Step 5: Connect cables

### Power cable

- Route along walls or baseboards
- Use cable clips to secure
- Avoid creating trip hazards
- Leave some slack for adjustment

### Ethernet cable (if used)

- Route to nearest network switch or router
- Keep away from power cables to reduce interference
- Use cable clips or conduit for clean installation

## Step 6: Verify installation

Before powering on, confirm:

- [ ] Sensor is indoors on ground floor or basement
- [ ] Mounted on structural element (concrete/steel)
- [ ] All screws tight — sensor cannot move
- [ ] Sensor is level
- [ ] Away from foot traffic (>3 meters)
- [ ] Away from machinery and vibration sources (>3 meters)
- [ ] Power outlet within reach
- [ ] Network access available (WiFi signal or Ethernet)

## Automatic calibration

When powered on, the Grillo One automatically calibrates:

- Calibration takes a few seconds
- The sensor **must remain completely stationary** during this process
- The Sensor LED indicates when calibration is complete

:::warning
Do not move or disturb the sensor during the initial power-on sequence. Movement during calibration affects data quality.
:::

## Sensor orientation

The sensor measures ground motion in three axes. Precise compass orientation is not required, but all sensors in your network should have a consistent vertical axis.

### Floor mounting (standard)

- Mount the sensor flat on the floor
- Ensure the sensor is level
- No special orientation required

### Wall mounting

If mounting on a structural wall:

1. Position the sensor with the **USB port facing down**
2. This keeps the Y-axis consistent with floor-mounted sensors
3. **Record the mounting orientation** in the sensor's metadata in Grillo Cloud dashboard

:::warning Wall mounting metadata
When a sensor is wall-mounted, you must update its configuration in Grillo Cloud to indicate the mounting orientation. This ensures correct data interpretation.
:::

## Operating environment

| Specification | Limit |
|---------------|-------|
| Temperature | -20°C to +60°C |
| Humidity | 10% to 90% non-condensing |
| Direct sunlight | Avoid — can cause overheating |

## Next steps

Once physically installed:

1. [Configure network connectivity](/hardware/grillo-one/network-setup)
2. [Provision the sensor to Grillo Cloud](/hardware/grillo-one/provisioning)
