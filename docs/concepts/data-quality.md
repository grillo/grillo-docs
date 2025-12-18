---
sidebar_position: 5
title: Data Quality
---

# Data Quality

Understanding and ensuring good seismic data quality from your Grillo sensors.

## What is data quality?

Data quality refers to how well your seismic recordings represent actual ground motion, free from noise and artifacts.

### Good quality data

- Clear earthquake signals when events occur
- Low background noise
- Consistent, continuous recording
- Accurate timing

### Poor quality data

- Excessive noise obscuring signals
- Gaps in recording
- Timing errors
- Artifacts from installation issues

## Why quality matters

### For earthquake detection

| Quality level | Detection capability |
|---------------|---------------------|
| High quality | Detect smaller events, accurate parameters |
| Medium quality | Detect moderate events, some errors |
| Poor quality | Miss events, false triggers, wrong parameters |

### For early warning

Fast, accurate detection requires:
- Clear P-wave onsets
- Low false trigger rate
- Reliable timing

### For research

Scientific applications need:
- Consistent data characteristics
- Documented installation
- Known instrument response

## Noise sources

### Natural noise

| Source | Characteristics |
|--------|-----------------|
| Wind | Variable, affects exposed sites |
| Ocean waves (microseisms) | Continuous, low frequency |
| Weather | Rain, thunder |
| Biological | Animals near sensor |

### Anthropogenic (human-caused) noise

| Source | Characteristics |
|--------|-----------------|
| Traffic | Variable by time of day |
| Machinery | Often periodic |
| Construction | Intermittent, intense |
| HVAC | Continuous when operating |
| Walking | Impulsive, irregular |

### Sensor/installation noise

| Source | Characteristics |
|--------|-----------------|
| Poor coupling | Resonances, weak signal |
| Loose mounting | Spikes, instability |
| Tilting | DC offset changes |
| Electronics | High-frequency noise |

## Assessing quality

### Visual inspection

Look at waveforms for:
- Background noise level
- Unusual patterns
- Gaps or spikes
- Consistency

### Quality metrics

Common measures:

| Metric | Description |
|--------|-------------|
| RMS noise | Root-mean-square of background |
| PSD | Power spectral density |
| Data completeness | Percentage of expected data |
| Timing quality | Clock accuracy |

### Comparative analysis

Compare sensors:
- Similar sites should have similar noise
- Outliers indicate problems
- Consistent characteristics across network

## Improving data quality

### Site improvements

1. **Move away from noise sources**
   - Relocate sensor if possible
   - Address source if controllable

2. **Better coupling**
   - Direct contact with solid surface
   - Remove soft materials underneath

3. **Environmental control**
   - Stable temperature
   - Protected from drafts
   - Away from direct sunlight

### Installation improvements

1. **Level the sensor**
   - Use bubble level
   - Adjust mounting

2. **Secure mounting**
   - No wobble
   - Won't shift over time

3. **Cable management**
   - No tension on sensor
   - Protected from disturbance

### Operational practices

1. **Regular monitoring**
   - Check data quality dashboards
   - Compare to baseline

2. **Prompt issue resolution**
   - Investigate anomalies
   - Fix problems quickly

3. **Documentation**
   - Record installation details
   - Note any changes

## Common quality issues

### High noise floor

**Symptoms:** Background level higher than expected

**Possible causes:**
- HVAC or machinery nearby
- Traffic vibration
- Poor installation site
- Electrical interference

**Solutions:**
- Relocate sensor
- Address noise source
- Improve installation

### Spikes/glitches

**Symptoms:** Sudden jumps in data

**Possible causes:**
- Loose sensor
- Cable issues
- Electrical interference
- Nearby impacts

**Solutions:**
- Secure sensor
- Check cables
- Shield from interference
- Identify impact source

### Data gaps

**Symptoms:** Missing data periods

**Possible causes:**
- Network connectivity issues
- Power outages
- Sensor malfunction
- Server issues

**Solutions:**
- Improve network reliability
- Add power backup
- Check sensor health
- Contact support

### High-frequency noise

**Symptoms:** Excessive noise at high frequencies

**Possible causes:**
- Electrical interference
- Sensor electronics
- Nearby equipment

**Solutions:**
- Check power source
- Add filtering (if available)
- Relocate sensor

## Quality and network performance

### Detection threshold

Higher noise = higher detection threshold
- Good quality sites detect M2-3
- Noisy sites may only detect M4+

### Location accuracy

Quality affects location:
- Clear arrivals = precise timing
- Noisy data = uncertain picks
- Network average determines accuracy

### False triggers

Noise causes false triggers:
- Looks like earthquake signal
- Wastes processing resources
- May cause false alerts

## Monitoring quality over time

### Establish baseline

When sensor is installed:
- Record typical noise levels
- Document expected characteristics
- Set quality thresholds

### Track changes

Monitor for:
- Increasing noise (new source?)
- Sudden changes (installation issue?)
- Seasonal variations (weather, HVAC)

### Regular review

Schedule periodic review:
- Weekly spot checks
- Monthly quality reports
- Quarterly comprehensive review

## Quality vs quantity trade-off

### Dense networks

More sensors can compensate for some quality issues:
- Redundancy covers gaps
- Bad sensors can be excluded
- Statistics improve with numbers

### Minimum quality standards

Even in dense networks, maintain minimums:
- Sensors must detect target events
- Timing must be accurate
- Data must be usable

## Related guides

- [Sensor placement](/concepts/sensor-placement)
- [Physical installation - Grillo One](/hardware/grillo-one/physical-installation)
- [Troubleshooting](/hardware/grillo-one/troubleshooting)
