---
title: Export Data
---

# Export Slide Data

You can download your readings as files, and request raw GNSS observations for your own processing.

## Export readings

1. Open **Exports**, or select **Export data** on a site page.
2. Choose the **Project**, **Site**, and **Sensor group**. Export all devices in the group or pick one.
3. Choose what to export:

   | Dataset | Formats |
   |---|---|
   | Measurements | CSV, JSON |
   | Movement and GNSS history | CSV, JSON |
   | Battery and power history | CSV, JSON |
   | Connection history | CSV, JSON |
   | Latest locations | GeoJSON, JSON |

4. Optionally set **From** and **Before** to limit the period. Times are in your local time.
5. Select **Estimate and request export**. The page shows the estimated rows and size.
6. When the export is ready, select **Download data**.

Each export comes with a manifest that records what was included and a SHA-256 of the content.

Under **Advanced options** you can choose exactly which columns to include. **Reset to default fields** restores the standard set. The **API / field dictionary** link describes every column.

If the page says your account does not have permission to export, ask Grillo to enable it.

## Raw GNSS observations

For independent processing, the devices can record raw GNSS observations and upload them as RTCM3 files.

### Request raw observations

1. Open the site and choose the sensor group.
2. Expand **Raw observations** on the site page.
3. Tick the devices to record from. Include the base and at least one rover if you plan to post-process a baseline.
4. Choose how long the request stays active: 1, 2, 6, or 24 hours.
5. Confirm the request.

The base picks the request up at its next upload and the rovers at the cycle after, so files start arriving within two cycles. With a 6-hour cycle, choose a duration long enough to cover the cycles you want.

Each device records one file per cycle, up to about 2 minutes long. Recording raw data never replaces the normal reading for that cycle.

To stop early, select **Cancel request**.

### Download the files

Open a device's details and select the **Raw files** tab, then **Download RTCM3**.

### Post-process the files

The files contain RTCM3 MSM observations and no ephemeris. To process a base and rover pair you also need a broadcast ephemeris file for that day, for example the daily file from the [IGS](https://igs.org/data/).

With RTKLIB:

1. Convert each `.rtcm3` file to RINEX observations with `convbin`.
2. Run `rnx2rtkp` in static mode with the rover file, the base file, and the broadcast ephemeris.
3. Set the base position from the 1005 message in the base file.

Use files from the same cycle for the base and the rover.
