---
sidebar_position: 4
title: Network Best Practices
---

# Network Best Practices

Guidelines for designing and operating effective seismic networks with Grillo sensors.

## Network design principles

### Coverage vs density trade-off

Consider your goals:

| Goal | Strategy |
|------|----------|
| Wide area monitoring | Spread sensors across the region |
| Precise location | Higher sensor density |
| Early warning | Sensors near potential sources |
| Building monitoring | Sensors throughout structure |

### Minimum sensors for detection

For earthquake detection (with Events enabled):

<!-- TODO: Confirm actual requirements -->

| Detection goal | Minimum sensors |
|----------------|-----------------|
| Basic detection | 3-4 sensors |
| Location accuracy | 6+ sensors |
| Magnitude accuracy | 10+ sensors |
| High precision | 20+ sensors |

## Sensor placement strategies

### Geographic distribution

**For regional networks:**
- Space sensors 10-50 km apart depending on goals
- Ensure coverage of populated areas
- Place sensors around potential earthquake sources
- Consider geographic barriers (mountains, rivers)

**For urban networks:**
- Denser spacing in city centers
- Coverage of critical infrastructure
- Multiple sensors per neighborhood for redundancy

### Strategic locations

Prioritize sensors at:
- Emergency response facilities
- Schools and hospitals
- Government buildings
- Transportation hubs
- Critical infrastructure

### Avoid problematic locations

- Near major highways (traffic noise)
- Inside industrial facilities (machinery vibration)
- On unstable ground (poor coupling)
- Upper floors of buildings (amplified motion)

[More on sensor placement →](/concepts/sensor-placement)

## Data quality considerations

### Site selection checklist

For each sensor location:

- [ ] Ground floor or basement level
- [ ] Solid foundation (concrete preferred)
- [ ] Away from HVAC equipment (>3 meters)
- [ ] Away from heavy traffic
- [ ] Stable power supply
- [ ] Reliable network connectivity
- [ ] Accessible for maintenance

### Noise sources to avoid

| Source | Minimum distance |
|--------|-----------------|
| HVAC units | 3 meters |
| Heavy machinery | 10 meters |
| Major roads | 20 meters |
| Railway lines | 50 meters |

## Redundancy and reliability

### Network redundancy

Plan for failures:
- No single points of failure
- Overlapping coverage where possible
- Mix of connectivity types (WiFi + cellular)
- Backup power where critical

### Connectivity diversity

For robust networks:
- Use Grillo One with Ethernet where possible
- Deploy Grillo Pulse with cellular in remote areas
- Ensure multiple ISPs across the network
- Test failover scenarios

## Network organization

### Naming conventions

Establish consistent naming:

**Station codes:**
- Use FDSN-compatible format when possible
- Example: NET.STA.LOC.CHA
- Keep codes meaningful but concise

**Network names:**
- Geographic: "San Francisco Bay Network"
- Organizational: "University Seismic Network"
- Purpose: "EEW Network - Phase 1"

### Documentation

Maintain records of:
- Sensor locations and installation details
- Site conditions and photos
- Network topology diagram
- Maintenance history
- Contact information for each site

## Operational best practices

### Monitoring

Regular checks:
- Daily: Review sensor status dashboard
- Weekly: Check data quality indicators
- Monthly: Verify all sensors reporting
- Quarterly: Physical site inspections

### Maintenance

Scheduled activities:
- Clean sensors annually
- Verify mounting stability
- Update firmware when available
- Replace batteries (Pulse) as needed
- Document all maintenance

### Incident response

When sensors go offline:
1. Check dashboard for error indicators
2. Attempt remote restart if available
3. Check network connectivity
4. Schedule site visit if needed
5. Document issue and resolution

## Scaling your network

### Starting small

Begin with:
- 3-5 sensors in key locations
- Prove the concept works
- Learn operational requirements
- Refine processes

### Growing strategically

Expand by:
- Filling coverage gaps
- Adding density in priority areas
- Responding to user feedback
- Following a documented plan

### Enterprise considerations

For large deployments:
- Centralized management
- Automated monitoring
- Tiered support structure
- Regular reporting

## Common mistakes to avoid

### Planning mistakes

1. **Insufficient density** - Too few sensors for detection goals
2. **Poor site selection** - Noisy locations degrade data quality
3. **No redundancy** - Single points of failure
4. **Unclear objectives** - Not knowing what you want to detect

### Operational mistakes

1. **Neglecting maintenance** - Sensors fail without attention
2. **Ignoring alerts** - Missing important signals
3. **Poor documentation** - Can't troubleshoot without records
4. **No testing** - Assumptions about system behavior

## Example network designs

### Small community network (5 sensors)

```
Purpose: Community awareness
Coverage: 10 km radius
Sensors:
- 1x Fire station (central)
- 1x School (north)
- 1x Library (south)
- 1x Community center (east)
- 1x Private residence (west)
```

### Urban monitoring network (20 sensors)

```
Purpose: Early warning
Coverage: City center + suburbs
Sensors:
- 5x Downtown (1 km spacing)
- 5x North district
- 5x South district
- 3x Industrial area
- 2x Port facilities
```

### Research network (50+ sensors)

```
Purpose: Seismic research
Coverage: Fault zone monitoring
Sensors:
- Dense arrays near fault
- Regional background stations
- Reference stations on bedrock
- Borehole sensors (if applicable)
```

## Resources

- [Sensor placement guide](/concepts/sensor-placement)
- [Data quality concepts](/concepts/data-quality)
- [Seismic networks explained](/concepts/seismic-networks)
