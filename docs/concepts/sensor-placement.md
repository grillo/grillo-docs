---
sidebar_position: 4
title: Sensor Placement
---

# Sensor Placement Best Practices

Proper sensor placement is crucial for data quality and network effectiveness.

## Why placement matters

Sensor placement affects:
- **Signal quality** - Good placement captures earthquakes clearly
- **Noise levels** - Poor placement adds unwanted signals
- **Detection capability** - Position affects what you can detect
- **Data usefulness** - Scientific value depends on installation

## Site selection principles

### Ideal characteristics

The best sensor locations have:

| Characteristic | Why it matters |
|----------------|----------------|
| Solid foundation | Better coupling to ground motion |
| Low noise | Cleaner seismic signals |
| Stable environment | Consistent data quality |
| Reliable power | Continuous operation |
| Network connectivity | Real-time data transmission |

### Location hierarchy

From best to acceptable:

1. **Bedrock** - Lowest noise, best coupling
2. **Concrete slab on grade** - Very good
3. **Solid floor (ground level)** - Good
4. **Upper floors** - Acceptable with considerations
5. **Loose/soft surface** - Avoid if possible

## Floor selection

### Ground floor recommended

Ground floor or basement is ideal:
- Closest to actual ground motion
- Less building amplification
- More representative data

### Upper floor considerations

If upper floors are necessary:
- Data affected by building response
- Amplification at certain frequencies
- Still useful for many applications
- Document floor level in metadata

## Foundation types

### Concrete slab

Best common foundation:
- Direct coupling to ground
- Stable platform
- Low local noise

Installation: Place directly on clean concrete.

### Raised floor

Common in offices/data centers:
- Avoid if possible
- If necessary, extend mount to slab below
- Document installation type

### Carpet/soft flooring

Problematic surface:
- Damping affects high frequencies
- Sensor may shift
- Consider rigid platform underneath

## Distance from noise sources

### Sources to avoid

| Source | Minimum distance | Notes |
|--------|------------------|-------|
| HVAC equipment | 3+ meters | Continuous vibration |
| Elevators | 5+ meters | Intermittent noise |
| Heavy machinery | 10+ meters | Depends on machine |
| Major roads | 20+ meters | Traffic vibration |
| Rail lines | 50+ meters | Significant noise |

### Indoor noise sources

- Air handling units
- Generators
- Pumps and compressors
- Large motors
- Server rooms (fans)

### Outdoor considerations

- Vehicle traffic
- Construction
- Industrial activity
- Railways
- Aircraft (near airports)

## Orientation and leveling

### Proper orientation

For accurate directional data:
- Note sensor orientation marking
- Align to north if specified
- Document actual orientation
- Consistent across network helps

### Leveling

Critical for data quality:
- Use a bubble level
- Sensor must be horizontal
- Adjust mounting as needed
- Re-check periodically

### Stability

Prevent movement:
- Secure mounting
- Anti-slip surface/pads
- No wobble when touched
- Won't shift over time

## Installation environments

### Office buildings

**Good locations:**
- Ground floor, away from HVAC
- Utility rooms with solid floors
- Storage areas (if stable)

**Avoid:**
- Near elevator shafts
- HVAC mechanical rooms
- Floors with heavy foot traffic

### Schools

**Good locations:**
- Basement if available
- Ground floor storage/utility
- Science labs (stable tables)

**Avoid:**
- Gymnasiums (activity)
- Music rooms (vibration)
- Near playground equipment

### Residential

**Good locations:**
- Basement floor
- Ground floor closet
- Garage slab

**Avoid:**
- Near washing machines
- Near HVAC equipment
- Upper floors if possible

### Industrial facilities

**Good locations:**
- Office areas away from production
- Utility buildings
- Perimeter locations

**Avoid:**
- Production floors
- Near heavy equipment
- High-vibration areas

## Outdoor installations (Grillo Pulse)

### Ground installations

- Concrete pad or bedrock
- Away from trees (root movement)
- Good drainage
- Clear of flood zones

### Pole mounting

- Sturdy pole/post
- Minimal flex in wind
- Low as practical
- Proper leveling

### Environmental protection

- Shade from direct sun
- Protection from extreme weather
- Away from sprinklers
- Secure from animals

## Common mistakes

### Poor site selection

| Mistake | Problem | Solution |
|---------|---------|----------|
| Near HVAC | Constant noise | Relocate away |
| On carpet | Damping/instability | Use rigid base |
| Upper floor | Building effects | Move to ground floor |
| Near traffic | Traffic noise | Increase distance |

### Installation errors

| Mistake | Problem | Solution |
|---------|---------|----------|
| Not level | Incorrect data | Re-level sensor |
| Loose mounting | Sensor moves | Secure properly |
| Cable tension | May shift sensor | Allow cable slack |
| Poor coupling | Weak signals | Direct floor contact |

## Verification

### After installation

Check:
- [ ] Sensor is level
- [ ] Mounting is secure
- [ ] No wobble or movement
- [ ] Away from noise sources
- [ ] Power and network stable
- [ ] Data quality looks good

### Periodic checks

Review regularly:
- Physical stability
- Changed noise sources
- Data quality trends
- Environmental changes

## Documentation

Record for each sensor:
- Exact location (coordinates)
- Floor/level
- Surface type
- Nearby equipment
- Installation date
- Photos

## Related guides

- [Physical installation - Grillo One](/hardware/grillo-one/physical-installation)
- [Physical installation - Grillo Pulse](/hardware/grillo-pulse/physical-installation)
- [Data quality](/concepts/data-quality)
