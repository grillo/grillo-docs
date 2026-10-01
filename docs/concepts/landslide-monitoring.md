---
title: Landslide Monitoring with GNSS
---

import {LandslideKitDiagram} from '@site/src/components/Diagrams';

# Landslide Monitoring with GNSS

Many landslides move slowly, by millimetres or centimetres over days to months, before they move fast. Measuring that slow movement shows which ground is active, how fast it is going, and whether it is speeding up.

Grillo Slide measures it with satellite positioning (GNSS).

## Why ordinary GPS is not enough

A phone or a basic GPS receiver knows its position to within a few metres. Landslide movement is far smaller than that, so it would be lost in the error.

**RTK** (real-time kinematic) positioning removes most of that error. A **base** receiver at a known, stable point watches the same satellites as a **rover** on the moving ground. Errors from the atmosphere and the satellites affect both receivers in almost the same way, so the base sends corrections and the rover cancels them out. Over short distances this gets the rover's position relative to the base down to centimetres or better.

<LandslideKitDiagram />

When the rover has used the corrections to resolve its position precisely, it reports an **RTK Fixed** solution. Grillo Slide only uses RTK Fixed readings to measure movement.

## Movement is measured against the base

Every rover's movement is the change in its position relative to the base. That makes the base the reference for the whole site:

- The base must be on **stable ground** outside the area that is moving. If the base moves, every rover appears to move by the same amount.
- The base first **surveys** its own position by averaging GNSS for several minutes. See [Survey the base](/hardware/grillo-slide/installation#survey-the-base).
- Each rover's first valid reading is its **baseline**, its zero. Later readings are reported as movement east, north, and up from that baseline, in millimetres.

If a device is moved on purpose, reset its baseline so the move is not counted as ground movement. See [Reset the movement baseline](/slide-cloud/sites-and-devices#reset-the-movement-baseline).

## Reading the results

- **Single readings scatter.** Each reading includes a little noise, up to about 2 cm on Grillo Slide. Judge movement from the trend over many readings, not from one point.
- **Vertical is noisier than horizontal.** GNSS measures height less precisely than horizontal position, so expect more scatter in the up component.
- **RTK Fixed is about the solution, not the site.** It shows the receiver resolved its position, not that the installation is free of errors. A loose mount, a shifting antenna, or nearby reflections can still produce false movement.
- **Steady drift, steps, and acceleration mean different things.** Steady drift suggests creep; a sudden step can be real movement or a disturbed device; a rate that keeps increasing deserves urgent attention from a geotechnical specialist.

## What affects quality

| Factor | Effect | What to do |
|---|---|---|
| Sky view | Trees, walls, and steep slopes block satellites | Place antennas with as open a sky as possible |
| Reflections | Signals bouncing off nearby surfaces bias the position | Keep antennas away from metal, rock faces, and buildings |
| Mounting | A mount that leans, settles, or vibrates looks like movement | Use rigid, deep mounts; fix antennas firmly |
| Distance to base | Corrections are less exact far from the base | Keep rovers within the site, near the base |
| Snow, ice, and vegetation | Can cover antennas or tilt mounts | Inspect after storms and seasonal change |

## How often to measure

Grillo Slide takes a reading every 6 hours. That suits slow-moving slopes, where the trend over days and weeks matters most, and lets devices run from a battery and solar panel. It is not designed to catch a sudden failure as it happens; that needs continuous sensors and a dedicated warning system.

## Using the data responsibly

Movement data supports decisions; it does not make them. Interpret it with a geotechnical engineer or geologist who knows the site, and set any response thresholds with them. Grillo Slide does not currently send movement alerts.

## Related guides

- [Grillo Slide](/hardware/grillo-slide)
- [Install Grillo Slide on site](/hardware/grillo-slide/installation)
- [Sites and Devices](/slide-cloud/sites-and-devices)
- [Export Data](/slide-cloud/exports), including raw GNSS files for your own processing
