---
sidebar_position: 3
title: Earthquake Early Warning
---

# Earthquake Early Warning (EEW)

Understanding how earthquake early warning systems work and how Grillo enables this technology.

## What is earthquake early warning?

Earthquake Early Warning (EEW) systems detect earthquakes and send alerts **before strong shaking arrives** at a location.

This is possible because:
- Electronic signals travel faster than seismic waves
- P-waves (faster, weaker) arrive before S-waves (slower, stronger)
- Warning time increases with distance from earthquake

## How EEW works

### The physics

```
Earthquake occurs
      ↓
P-waves radiate outward (faster, ~6 km/s)
      ↓
Sensors detect P-waves
      ↓
System calculates location & magnitude
      ↓
Alerts sent electronically (speed of light)
      ↓
People/systems receive warning
      ↓
S-waves arrive (slower, ~3.5 km/s, stronger shaking)
```

### Warning time

The warning time depends on:

| Factor | Effect |
|--------|--------|
| Distance from earthquake | More distance = more time |
| Network density | Denser = faster detection |
| Processing speed | Faster = more warning |
| Alert delivery | Electronic = nearly instant |

### Typical warning times

| Distance from epicenter | Approximate warning |
|-------------------------|---------------------|
| 10 km | 0-5 seconds |
| 30 km | 5-15 seconds |
| 50 km | 10-20 seconds |
| 100 km | 20-40 seconds |

:::note
Areas very close to the earthquake may receive no warning before strong shaking.
:::

## What can you do with seconds?

### Personal safety

Even a few seconds allows:
- Drop, Cover, Hold On
- Move away from hazards
- Alert others
- Mental preparation

### Automatic actions

Systems can automatically:
- Stop elevators at nearest floor
- Open fire station doors
- Slow or stop trains
- Shut off gas valves
- Save computer data
- Initiate safe shutdown procedures

### Every second counts

Studies show significant benefits:
- Reduced injuries from falling objects
- Faster emergency response
- Less secondary damage (fires, etc.)
- Better psychological outcomes

## EEW components

### Detection network

Dense seismic sensor network:
- Detects P-waves quickly
- Multiple stations confirm
- Covers area of interest

### Processing system

Central system that:
- Receives sensor data
- Detects earthquakes
- Calculates parameters
- Generates alerts

### Alert distribution

Methods to reach people:
- Smartphone apps
- Sirens
- Broadcast alerts
- Direct system integration

## Grillo and EEW

### Enabling affordable EEW

Grillo makes EEW accessible by:
- Lowering sensor costs
- Simplifying deployment
- Providing cloud processing
- Enabling alert distribution

### Building EEW networks

With Grillo you can:
1. Deploy dense sensor networks
2. Enable automatic detection
3. Configure alert rules
4. Integrate with response systems

### Requirements for EEW

| Requirement | Grillo solution |
|-------------|-----------------|
| Dense sensors | Affordable Grillo sensors |
| Fast detection | Grillo Cloud processing |
| Alert delivery | Webhook/API integration |
| Reliability | Cloud infrastructure |

## EEW limitations

### No warning near epicenter

Very close to the earthquake:
- S-waves arrive almost immediately
- Not enough time for detection and alert
- "Blind zone" near epicenter

### Not earthquake prediction

EEW is **not prediction**:
- Cannot predict earthquakes before they occur
- Only warns after earthquake starts
- Based on detected waves, not forecasts

### Dependent on network

Warning quality depends on:
- Network coverage
- Sensor density
- System reliability
- Alert delivery speed

### False alerts possible

Systems may:
- Trigger on non-earthquake signals
- Have incorrect initial estimates
- Update parameters as data arrives

## Global EEW systems

### Operational systems

| System | Region | Since |
|--------|--------|-------|
| JMA | Japan | 2007 |
| ShakeAlert | US West Coast | 2019 |
| SASMEX | Mexico | 1991 |
| Various | Taiwan, South Korea, others | Various |

### Grillo contributions

Grillo technology supports EEW in:
- Mexico (school networks)
- Chile (community networks)
- Various research deployments

## Implementing EEW with Grillo

### Step 1: Build your network

- Deploy Grillo sensors across your area
- Ensure adequate density (varies by goal)
- Maintain high online percentage

### Step 2: Enable detection

- Subscribe to Events feature
- Configure detection parameters
- Validate detection performance

### Step 3: Set up alerts

- Configure alert thresholds
- Set up delivery channels
- Test alert delivery

### Step 4: Integrate systems

- Connect to building systems
- Develop response procedures
- Train occupants/staff

### Step 5: Maintain and improve

- Monitor system performance
- Address issues promptly
- Expand coverage over time

## Related concepts

- [Seismic networks](/concepts/seismic-networks)
- [How detection works](/events/how-detection-works)
- [Alert configuration](/events/alerts)
