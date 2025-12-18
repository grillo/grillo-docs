---
sidebar_position: 8
title: Location Info
---

# Location Info

Configure accurate location information for your sensors to enable proper map display and earthquake location calculations.

## Why location matters

Accurate sensor locations are essential for:
- **Map display** - Sensors appear at correct positions
- **Event location** - Earthquake locations depend on station positions
- **Data quality** - Proper metadata for data analysis
- **Compliance** - FDSN standards require location metadata

## Location fields

### Coordinates

#### Latitude

- Range: -90° to +90°
- Format: Decimal degrees
- Positive: North of equator
- Negative: South of equator
- Example: 37.7749 (San Francisco)

#### Longitude

- Range: -180° to +180°
- Format: Decimal degrees
- Positive: East of Prime Meridian
- Negative: West of Prime Meridian
- Example: -122.4194 (San Francisco)

### Elevation

Height above sea level:
- Unit: Meters
- Can be negative (below sea level)
- Important for some calculations
- Obtain from GPS, maps, or surveys

### Depth

Distance from surface to sensor:
- Unit: Meters
- Usually 0 for surface installations
- Non-zero for borehole sensors

## Setting location

### Manual entry

1. Open sensor configuration
2. Find "Location" section
3. Enter coordinates:
   - Latitude (decimal degrees)
   - Longitude (decimal degrees)
   - Elevation (meters)
4. Add optional fields:
   - Site name
   - Address
   - Notes
5. Save changes

### Using the map

1. Open sensor configuration
2. Click "Set on map"
3. Navigate to the sensor location
4. Click to place the marker
5. Fine-tune if needed
6. Confirm the location

![Set location on map](/img/placeholder-location-map.svg)
<!-- TODO: Replace with actual screenshot -->

### Using current location

If configuring while at the sensor site:
1. Click "Use current location"
2. Allow browser location access
3. Coordinates are filled in
4. Verify accuracy and save

## Getting accurate coordinates

### From GPS

Using a smartphone:
1. Open a GPS or maps app
2. Get coordinates at sensor location
3. Copy decimal degree values
4. Enter in dashboard

### From online maps

Using Google Maps:
1. Navigate to sensor location
2. Right-click on the exact spot
3. Click the coordinates to copy
4. Paste into dashboard

Using other map services:
- Apple Maps: Long-press to drop pin
- OpenStreetMap: Click to see coordinates
- Bing Maps: Right-click for coordinates

### From surveys

For high-precision requirements:
- Professional survey equipment
- Differential GPS
- Reference to known benchmarks

## Coordinate formats

### Decimal degrees (preferred)

The dashboard uses decimal degrees:
- Latitude: 37.7749
- Longitude: -122.4194

### Converting from DMS

If you have Degrees-Minutes-Seconds:

**DMS:** 37° 46' 29.64" N, 122° 25' 9.84" W

**To decimal:**
- Latitude: 37 + (46/60) + (29.64/3600) = 37.7749
- Longitude: -(122 + (25/60) + (9.84/3600)) = -122.4194

### Online converters

Use online tools to convert:
- Search "DMS to decimal converter"
- Enter DMS values
- Copy decimal result

## Site metadata

### Site name

A descriptive name for the location:
- Building name
- Address summary
- Landmark reference

Examples:
- "City Hall - Basement"
- "123 Main St, Suite 100"
- "University Science Building"

### Site description

Additional notes about the installation:
- Floor/room number
- Mounting details
- Access instructions
- Contact information

### Site classification

<!-- TODO: Confirm if site classification is available -->

Geological classification of the site:
- Rock
- Firm soil
- Soft soil
- Fill

This affects how ground motion is interpreted.

## Accuracy requirements

### Minimum accuracy

For basic functionality:
- Within ~100 meters is acceptable
- Sensor appears on map correctly
- Adequate for visualization

### Recommended accuracy

For earthquake detection networks:
- Within ~10 meters preferred
- Better event location accuracy
- Proper for scientific use

### High-precision requirements

For research or regulatory compliance:
- Sub-meter accuracy
- Professional survey recommended
- Document measurement method

## Updating location

### When to update

Update location if:
- Sensor is physically moved
- Original coordinates were inaccurate
- More precise measurements are obtained

### Impact of changes

Changing location:
- Updates map display immediately
- Historical data retains old location
- May affect event calculations

### Documenting changes

Keep records of:
- Previous location
- New location
- Date of change
- Reason for change

## Troubleshooting

### Sensor appears in wrong place

1. Verify coordinates are correct
2. Check for swapped lat/long
3. Check for sign errors (+/-)
4. Verify decimal point placement

### Common coordinate errors

| Error | Example | Should be |
|-------|---------|-----------|
| Swapped | Long: 37.77, Lat: -122.41 | Lat: 37.77, Long: -122.41 |
| Wrong sign | Lat: -37.77 (SF) | Lat: 37.77 |
| Wrong format | 37° 46' N | 37.7749 |

### Location not saving

1. Check coordinate format
2. Verify values are in valid range
3. Check for validation errors
4. Ensure you have edit permissions

## Best practices

### Document your method

Record how coordinates were obtained:
- GPS smartphone app
- Online map
- Professional survey
- Estimated

### Verify visually

After setting location:
1. View sensor on map
2. Compare to actual position
3. Verify against satellite imagery
4. Correct if needed

### Periodic review

- Review locations periodically
- Verify sensors haven't been moved
- Update any corrections needed

## Related guides

- [Configuring sensors](/dashboard/sensors/configuring-sensor)
- [Station naming](/dashboard/sensors/station-naming)
- [Map view](/dashboard/sensors/map-view)
