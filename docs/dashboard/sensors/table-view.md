---
title: Sensor Table
---

# Sensor Table

Open **Sensors** and choose **Table** to see every sensor in the project as a row.

## Columns

| Column | Meaning |
|---|---|
| Station | FDSN station code |
| Status | **Online**, **Degraded**, **Offline**, or **Disabled**, with the reason. See [Verify Sensor Status](/dashboard/sensors/sensor-status). |
| Location | Saved location name |
| Last 24 h | Connectivity in 30-minute blocks: data arrived, data arrived late, or no data |
| Signal | Signal strength from the latest health report |
| Latency | How late the latest health report reached Grillo, in seconds |
| Firmware | Firmware version the sensor last reported |
| Last seen | Time of the most recent health report |

Select a column heading to sort by it; select it again to reverse the order. Rows start sorted by status, problems first.

Select a row to open [sensor details](/dashboard/sensors/sensor-details).
