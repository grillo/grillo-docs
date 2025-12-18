---
sidebar_position: 2
title: How Detection Works
---

# How Detection Works

An overview of Grillo's earthquake detection system and how it identifies seismic events from your sensor network.

## Detection overview

Grillo's detection system uses data from multiple sensors to:
1. Identify potential earthquake signals
2. Confirm events across multiple stations
3. Calculate event parameters
4. Generate alerts

## The detection process

### Step 1: Continuous monitoring

Each sensor in your network continuously streams data to Grillo Cloud:
- Real-time accelerometer data
- Typically 100 samples per second
- Data arrives with minimal latency

### Step 2: Signal detection

Algorithms analyze incoming data for earthquake signatures:

**P-wave detection:**
- First seismic wave to arrive
- Faster but weaker
- Enables early warning

**S-wave detection:**
- Second wave type
- Slower but stronger
- More damaging

![P and S wave diagram](/img/placeholder-waves.svg)
<!-- TODO: Replace with wave propagation diagram -->

### Step 3: Multi-station confirmation

A single sensor trigger isn't enough—confirmation requires multiple sensors:

<!-- TODO: Confirm actual thresholds -->

| Sensors triggered | Action |
|-------------------|--------|
| 1 | Monitor, no event |
| 2-3 | Possible event, continue monitoring |
| 4+ | Likely event, begin characterization |

This multi-station approach:
- Reduces false positives
- Improves location accuracy
- Increases confidence

### Step 4: Event characterization

Once confirmed, the system calculates:

**Location (epicenter):**
- Triangulation from multiple stations
- Uses arrival time differences
- Accuracy depends on network geometry

**Depth:**
- Estimated from arrival patterns
- May be constrained for shallow networks

**Magnitude:**
- Calculated from amplitude
- Multiple magnitude types possible
- Refined as more data arrives

**Origin time:**
- When the earthquake occurred
- Back-calculated from detections

### Step 5: Alert generation

Based on event parameters:
1. Event compared against alert thresholds
2. Notifications sent to configured channels
3. Event added to catalog

## Detection parameters

### Sensitivity

How sensitive the detection is to ground motion:

| Setting | Effect |
|---------|--------|
| High | More detections, more false positives |
| Medium | Balanced approach |
| Low | Fewer detections, fewer false positives |

### Trigger threshold

The minimum signal level to consider:
- Lower = more sensitive
- Higher = fewer triggers
- Adjusted based on local noise

### Confirmation requirements

How many sensors must trigger:
- More sensors = higher confidence
- Fewer sensors = faster detection
- Trade-off between speed and accuracy

## Detection latency

Time from earthquake to detection:

| Stage | Typical time |
|-------|--------------|
| Wave travel to first sensor | Varies by distance |
| First sensor trigger | Under 1 second |
| Multi-station confirmation | 2-5 seconds |
| Event characterization | 5-15 seconds |
| Alert delivery | Under 1 second |

**Total time:** Typically 5-20 seconds from earthquake origin

### Early warning time

The warning time before strong shaking:
- Depends on distance from epicenter
- P-wave arrives before damaging S-wave
- Seconds to tens of seconds possible

## What affects detection quality

### Network factors

| Factor | Impact |
|--------|--------|
| Number of sensors | More sensors = better detection |
| Sensor spacing | Affects location accuracy |
| Geographic coverage | Larger area = detect more events |
| Online percentage | More sensors online = better coverage |

### Data quality factors

| Factor | Impact |
|--------|--------|
| Installation quality | Poor mounting = noisy data |
| Site conditions | Soft soil can amplify noise |
| Local vibrations | Traffic, machinery interfere |
| Signal strength | Weak connectivity = gaps |

### Event factors

| Factor | Impact |
|--------|--------|
| Magnitude | Larger events detected more easily |
| Distance | Closer events detected faster |
| Depth | Very deep events harder to locate |

## Limitations

### What we can detect

- Earthquakes within/near your network
- Events producing ground motion above noise
- Events triggering multiple sensors

### What we cannot detect

- Very small earthquakes (below network threshold)
- Distant earthquakes (insufficient signal)
- Events during network outages
- Non-earthquake events (explosions, etc.) may trigger

### False positives

Some non-earthquake events may trigger:
- Large vehicle traffic
- Industrial activity
- Weather (wind, thunder)
- Sensor malfunction

The multi-station confirmation reduces but doesn't eliminate false positives.

## Improving detection

### Optimize your network

1. **Add more sensors** - Improves detection and accuracy
2. **Better distribution** - Even spacing helps location
3. **Quality installations** - Reduce noise
4. **Maintain sensors** - Keep high online percentage

### Fine-tune settings

1. **Adjust sensitivity** - Based on false positive rate
2. **Set appropriate thresholds** - Match your needs
3. **Review detections** - Learn what triggers your network

## Related concepts

- [Seismic networks](/concepts/seismic-networks)
- [Earthquake early warning](/concepts/earthquake-early-warning)
- [Data quality](/concepts/data-quality)
