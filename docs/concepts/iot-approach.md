---
title: Connected Sensor Networks
---

# Connected Sensor Networks

Connected sensing combines compact instruments, standard communications, remote health telemetry, and centralized processing. It can make dense deployments practical, but connectivity does not replace good instrumentation or network design.

## What connected stations enable

- Remote inventory and health monitoring
- Rapid identification of power and communications outages
- Real-time or near-real-time data delivery
- Centralized station metadata
- Incremental network expansion
- Automated processing across many stations

These benefits depend on secure operations, reliable power, correct timing, and a maintained data path from the field to its destination.

## Instrument choice still matters

Different sensing technologies serve different objectives:

- MEMS accelerometers are well suited to strong motion and can provide wide dynamic range in compact systems.
- Geophones and short-period seismometers improve sensitivity to weaker local and regional signals over their useful frequency range.
- Broadband instruments support weak and long-period observations required by many research networks.

Grillo Pulse combines a vertical geophone with a triaxial MEMS accelerometer, and Grillo One uses a triaxial MEMS accelerometer alone. A mixed network can also combine Pulse with other station types, provided processing uses correct responses, sample rates, orientations, and channel metadata.

Avoid broad labels such as “consumer-grade” or fixed magnitude thresholds. Sensor usefulness depends on noise, coupling, gain, frequency response, distance, geology, and the target signal—not price category alone.

## Communications trade-offs

### Ethernet

- Stable wired link where infrastructure exists
- Straightforward DHCP and firewall management
- Cable routing and surge/environmental protection may be required

### Cellular

- Useful where wired infrastructure is unavailable
- Depends on carrier bands, coverage, SIM lifecycle, APN, data allowance, and antenna placement
- Carrier-grade NAT favors device-initiated outbound communication

### Wi-Fi

- Convenient at managed sites
- Depends on credentials, radio coverage, interference, and access-point policy
- Credential recovery can require site access if not designed carefully

### Local radio mesh

- Lets battery-powered devices share one internet connection, as Grillo Slide rovers do through their base
- Each device needs radio reach to a neighbour, which depends on terrain and vegetation
- Devices can sleep between scheduled cycles, saving power at the cost of latency

No communication path should be assumed reliable without site testing. Network operations should distinguish “the sensor is sampling” from “the server is receiving data.”

## Edge and central processing

Field devices can batch samples, report health, and recover local links. Central services can combine stations, retain data, monitor fleet status, and detect events.

Design decisions include:

- How much data is buffered during an outage
- Whether real-time latency or complete recovery has priority
- How firmware and configuration changes are authenticated
- How station identity and metadata are managed
- How clocks recover after power or network loss
- How operators observe failures across the complete pipeline

## Security and maintenance

A connected station is an operational system. Plan for:

- Unique device identity
- Outbound network policy
- Credential and SIM management
- Signed and hardware-compatible firmware releases
- Variant-safe updates and rollback testing
- Monitoring and incident response
- Physical security and controlled service access
- Documented ownership for field and cloud components

## Grillo architecture

- **Grillo Pulse and Grillo One** send health reports and seismic data in real time over Ethernet, Wi-Fi, or cellular, initiating every connection outbound.
- **Grillo Cloud** manages projects, claimed sensors, station metadata, device health, and over-the-air firmware updates. Its [SISTEM add-on](/events) adds waveforms and processes seismic data into earthquake events.
- **Seismic data** can go to Grillo or, per project, [to your own server](/dashboard/data/data-server), while health monitoring stays in Grillo Cloud.
- **Grillo Slide** works differently: devices wake on a schedule, rovers relay readings through the base over a radio mesh, and the base uploads over LTE to [Grillo Cloud for Slide](/slide-cloud).

## Related concepts

- [Seismic networks](/concepts/seismic-networks)
- [Sensor placement](/concepts/sensor-placement)
- [Data quality](/concepts/data-quality)
- [Earthquake early warning](/concepts/earthquake-early-warning)
- [Landslide monitoring with GNSS](/concepts/landslide-monitoring)
