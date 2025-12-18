---
sidebar_position: 7
title: Station Naming (FDSN)
---

# Station Naming (FDSN)

Configure your sensors with FDSN-compliant station codes for compatibility with the global seismological community.

## What is FDSN?

The **Federation of Digital Seismograph Networks (FDSN)** establishes standards for seismic data exchange. Using FDSN-compliant naming ensures your data is compatible with standard seismological tools and databases.

## FDSN naming format

A complete FDSN identifier consists of:

```
Network.Station.Location.Channel
```

Example: `GR.GRIL01.00.HNZ`

| Component | Length | Description |
|-----------|--------|-------------|
| Network | 1-2 chars | Network identifier |
| Station | 1-5 chars | Station identifier |
| Location | 2 chars | Location code |
| Channel | 3 chars | Channel code |

## Network code

### What it represents

The network code identifies the organization or network operating the sensor.

### Guidelines

- 1-2 uppercase letters or digits
- Should be unique within the FDSN system
- Registered networks have official codes

### Examples

| Code | Network |
|------|---------|
| US | US National Seismic Network |
| IU | Global Seismographic Network |
| GR | Example Grillo network |

### For Grillo users

<!-- TODO: Confirm Grillo network code policy -->

- Use your organization's registered code if available
- Contact Grillo support for network code guidance
- Temporary codes may be assigned for testing

## Station code

### What it represents

The station code uniquely identifies a sensor within a network.

### Guidelines

- 1-5 uppercase letters and digits
- Must be unique within the network
- Should be meaningful and memorable

### Naming strategies

**Geographic:**
- "SFDT" - San Francisco Downtown
- "LAX01" - Los Angeles sensor 1

**Organizational:**
- "MAIN" - Main building
- "LAB3" - Laboratory 3

**Sequential:**
- "STA01", "STA02", etc.
- "GRL001", "GRL002", etc.

### Best practices

- Keep codes short but meaningful
- Use consistent patterns across your network
- Document your naming scheme
- Avoid confusing characters (O/0, I/1/l)

## Location code

### What it represents

The location code differentiates multiple sensors at the same site or sensors with different configurations.

### Guidelines

- Exactly 2 characters
- Usually digits (00, 01, 02)
- Can be letters for specific purposes

### Common values

| Code | Meaning |
|------|---------|
| 00 | Primary/default location |
| 01 | Secondary location |
| 10 | Different instrument |
| -- | Empty/unspecified |

### When to use different location codes

- Multiple sensors at the same site
- Different sensor configurations
- Different data processing chains

## Channel codes

### What they represent

Channel codes describe the type of data being recorded.

### Format

3 characters: Band + Instrument + Orientation

| Position | Meaning |
|----------|---------|
| 1st | Band code (sample rate) |
| 2nd | Instrument code |
| 3rd | Orientation |

### Common Grillo channels

<!-- TODO: Confirm actual channel codes used -->

| Channel | Description |
|---------|-------------|
| HNZ | High-rate accelerometer, vertical |
| HNE | High-rate accelerometer, east |
| HNN | High-rate accelerometer, north |
| BHZ | Broadband, vertical |

### Band codes

| Code | Sample rate |
|------|-------------|
| H | High (80-250 Hz) |
| B | Broadband (10-80 Hz) |
| L | Low (1 Hz) |

### Instrument codes

| Code | Instrument type |
|------|-----------------|
| N | Accelerometer |
| H | High-gain seismometer |

### Orientation codes

| Code | Direction |
|------|-----------|
| Z | Vertical (up) |
| N | North |
| E | East |

## Configuring station codes

### In the dashboard

1. Open sensor configuration
2. Find "Station Identification" section
3. Enter:
   - Network code
   - Station code
   - Location code
4. Save changes

### Example configuration

```
Network: GR
Station: GRIL01
Location: 00
```

Results in channel identifiers like:
- GR.GRIL01.00.HNZ
- GR.GRIL01.00.HNE
- GR.GRIL01.00.HNN

## Validation rules

The dashboard validates station codes:

| Rule | Example valid | Example invalid |
|------|---------------|-----------------|
| Network 1-2 chars | GR, US | GRILLO |
| Station 1-5 chars | STA01 | STATION01 |
| Location 2 chars | 00, AB | 0, 000 |
| Uppercase only | ABC123 | abc123 |

## Changing station codes

### Considerations

- Changing codes affects data continuity
- Historical data retains old codes
- Update documentation when changing
- Notify data users of changes

### Process

1. Document the reason for change
2. Update configuration in dashboard
3. Verify change propagated to sensor
4. Update any external references

## Resources

- [FDSN website](https://www.fdsn.org/)
- [FDSN station naming conventions](https://www.fdsn.org/networks/)
- [StationXML documentation](https://www.fdsn.org/xml/station/)

## Next steps

- [Configure location information](/dashboard/sensors/location-info)
- [Complete sensor configuration](/dashboard/sensors/configuring-sensor)
