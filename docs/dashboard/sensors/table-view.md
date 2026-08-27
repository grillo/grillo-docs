---
title: Sensor Table
---

# Sensor Table

Open **Sensors** and choose table view to scan the selected network's inventory.

![Sensor table in Grillo Platform](/img/screenshots/05-sensors.png)

## Columns

The current table shows:

| Column | Meaning |
|---|---|
| Status | Online or offline according to recent device reporting |
| Station | FDSN station code |
| Device ID | 12-character hardware identifier |
| Type | Reported sensor model |
| Location | Saved location name |
| Firmware | Reported firmware version |
| Last seen | Time since the latest received status |

Use search to match station, Device ID, or other displayed sensor information. Select a column heading that supports sorting to change order. Use the refresh control to fetch current data.

Select a row to open the [sensor details](/dashboard/sensors/sensor-details) sheet.

:::note Current limitations
The customer interface does not currently provide the multi-select, bulk edit, spreadsheet export, or saved table-layout workflows described by older documentation.
:::
