---
title: Install on Site
---

# Install Grillo Slide on Site

Install the kit after you have [fitted the SIM and set the APN](/hardware/grillo-slide/sim-and-apn).

## Choose positions

**Base**

- On stable ground that is not part of the slope you are monitoring. Rover movement is measured against the base, so a base that moves makes every reading wrong.
- With mobile coverage for your SIM.
- With a clear view of the sky.

**Rovers**

- At the points you want to monitor.
- With a clear view of the sky. Trees, walls, and steep ground close by reduce GNSS quality.
- Within radio reach of the base or of another rover. Rovers relay for each other, up to four hops from the base.

Radio range depends on terrain and has not been characterized for every site. Before you fix the mounts, check that each rover reports.

## Mount the devices

1. Fit a GNSS antenna to every device, base and rovers.
2. Fix each device and its antenna so they cannot shift, tilt, or be knocked. The measurement is the antenna's position: an antenna that moves on its mount looks like ground movement.
3. If your kit includes solar panels, place each one clear of shade and connect it with the supplied cable.

Do not power the devices from USB. The USB port is for service only and does not power or charge the device.

## Power on in order

Power on the **rovers first** and the **base last**, all within 5 minutes.

When the base powers on, it runs a [survey](#survey-the-base) to find its own position, then runs the first measurement cycle with the rovers.

If the survey takes too long, the rovers go back to sleep and the whole kit meets at the next 6-hour slot (00:00, 06:00, 12:00, or 18:00 UTC). Nothing is wrong; the first reading arrives later.

## Survey the base

The base is the fixed reference every rover is measured against, so it needs to know exactly where it is. It works this out with a **survey**: it averages its GNSS position for several minutes and keeps the result as its reference.

The base surveys every time it starts from power-off. To start a survey yourself, press the **RESET** button on the base. Do this whenever the base has been installed in a new place.

The base has two small buttons on its circuit board, just under the battery holder. You need to remove the cover to reach them.

| Button | Use |
|---|---|
| **RESET** | Restarts the base and starts a survey |
| **SETUP** | Opens Bluetooth for the Grillo Field app. See [Fit the SIM and Set the APN](/hardware/grillo-slide/sim-and-apn). |

1. Make sure the base is in its final position, its GNSS antenna is connected, and it has a clear view of the sky.
2. Remove the base's cover.
3. Press **RESET** once. Take care not to press **SETUP** instead.
4. Refit the cover, checking that the seal is seated and no cable is trapped. Do not move the base or its antenna while doing this.
5. Leave the base still and undisturbed while it surveys. This usually takes about 5 minutes and can take up to 30.

When the survey finishes, the base runs a measurement cycle with any rovers that are awake, then follows the 6-hour schedule.

A survey on the same spot does not change your readings. If the base has moved, its new position is used from then on; see below.

Waking from sleep between cycles does not start a survey. Only a power-on or the **RESET** button does.

## Read the RTK light

The RTK light is the only light you can see with the case closed.

| RTK light | Meaning |
|---|---|
| Blinking | The device is awake but does not have a precise position fix yet |
| Solid | The device has a precise fix (RTK Fixed) |
| Off | The device has finished measuring or is asleep |

On a rover, expect the light to blink, go solid, then go off. A light that is off between cycles is normal: devices sleep for most of each 6 hours.

## Check before you leave

Open [slide.grillo.io](https://slide.grillo.io) on your phone and check the site:

- The base and every rover appear and show **Reporting**.
- Each rover's last sample time is from the cycle that just ran.
- Battery and signal values are present.

See [Sites and Devices](/slide-cloud/sites-and-devices) for what each value means.

The first valid reading from each rover becomes its zero. Movement is reported from that point on.

## If you move something later

- **The base or its antenna moves:** every rover's movement shifts by the same amount. [Reset the movement baseline](/slide-cloud/sites-and-devices#reset-the-movement-baseline) for the sensor group afterwards.
- **You move or remount a rover:** reset that rover's baseline.
- **You power-cycle the base or press **RESET**:** it surveys again. On the same spot, this does not change the readings.
- **You move the base to a new spot:** press **RESET** to survey the new position, then reset the baseline for the sensor group.
