---
title: Recording mode and thresholds
---

# Recording mode and thresholds

A sensor records in one of two modes:

| Mode | What the sensor uploads |
|---|---|
| **continuous** | Everything it measures, all the time |
| **triggered** | Only windows around shaking: from up to 60 seconds before the shaking crosses its threshold until the shaking stops |

In both modes the sensor sends its health reports every minute or less, so it shows as [online](/dashboard/sensors/sensor-status) either way.

## How triggers are found

On the Structural plan, Grillo Cloud finds [triggers](/dashboard/triggers) in the data each sensor sends, using that sensor's trigger setting. A sensor recording continuously gets the same triggers it would have recorded in triggered mode with the same setting. The recording mode decides how much data is uploaded and stored, not which triggers you see.

## Where settings come from

Each sensor gets its recording mode and trigger from, in order:

1. Its own setting, if one was sent to it
2. The project default
3. Grillo's defaults: continuous recording, and a trigger on either horizontal axis at 5 mg, keeping 60 seconds before and 60 seconds after the shaking

Only the project owner can change these. Grillo Support can change them for you too.

## See a sensor's settings

Open the sensor's page and find **Settings**. **This device** lists each setting with:

- **Desired**: the value Grillo Cloud sends, and where it comes from (**this device**, **project default**, or **system default**)
- **Reported**: what the sensor says it runs
- Its state: **in sync**, **pending** (sent, not yet confirmed by the sensor), **differs**, **not reported**, **needs newer firmware**, or **read-only**

**Last sent** below lists recent changes, who sent them, and why.

![A sensor's Settings: each setting's desired value and where it comes from, beside what the sensor reports, with a trigger change pending and the last settings sent](/img/screenshots/cloud/sensor-settings.png)

## Change a sensor's settings

The project owner can:

1. In **Settings**, select **Change** next to **Recording mode** or **Trigger**.
2. Choose **continuous** or **triggered**, or set the trigger's **Channel**, **Threshold** in mg, **Pre** and **Post** in seconds, and **Max per hour**. **Use the default** stops sending the sensor its own value.
3. Select **Keep for sending**. Repeat for other settings, then select **Review and send…**.
4. Check the summary, enter a reason (kept in the audit log), and select **Send to device**.

The sensor gets the change in its next report reply, within about 30 seconds if it is online, and the setting stays **pending** until the sensor's report confirms it.

A setting the sensor's firmware does not accept reads **needs newer firmware** and cannot be changed. Settings that change the sensor's scale are changed only by Grillo.

## Change the project's defaults

**Project default**, next to **This device** in a sensor's **Settings**, lists the project's defaults for recording mode, trigger, and time source. The project owner can change them the same way. They go to every sensor in the project without a setting of its own.

On Structural projects, the owner can also set the default trigger in **Project settings → Triggers**:

![Project settings, Triggers: channel, threshold, seconds before and after, and a chart of how many recent triggers each threshold keeps](/img/screenshots/cloud/project-triggers.png)

| Setting | Range | Grillo default |
|---|---|---|
| **Channel** | **Either horizontal (H_ANY)**, **East (HNE)**, **North (HNN)**, or **Vertical (HNZ)** | Either horizontal |
| **Threshold (mg)** | 1 to 2000 mg | 5 mg |
| **Before the onset (s)** | 0 to 60 | 60 |
| **After the shaking (s)** | 0 to 300 | 60 |
| **Debounce**, under **More** | 1 to 25 samples over the threshold in 200 ms | 3 |
| **Longest trigger (s)**, under **More** | 10 to 600 | 600 |

The threshold is on the acceleration filtered to 0.5–25 Hz. **Threshold preview** shows how many of the last 30 days' triggers each threshold would keep. Enter a reason and select **Send to the sensors**.

**Either horizontal** triggers when either horizontal axis crosses the threshold. A vertical-only knock may not trigger it.

## Choose a threshold

The right threshold is above the normal vibration at the sensor's location and below the shaking you want to record.

- Start with the default of 5 mg.
- If a sensor records triggers all day from machinery, lifts, or traffic, raise its threshold. Look at the peak acceleration of those triggers on the [Triggers page](/dashboard/triggers), or at the **Threshold preview**, and set the threshold above them.
- If it records nothing during events you can feel, lower it.

The alert level for [trigger alerts](/dashboard/alerts) is a separate setting from the trigger threshold.
