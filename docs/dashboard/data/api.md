---
title: Data API
---

# Data API

The Grillo Cloud data API gives your own software read-only access to one project's sensors, health reports, earthquake events, and triggers. Use it to feed a building-management system, a SCADA, a report, or your own dashboard.

- Base URL: `https://api.grillo.io`
- Every response is JSON.
- The API reads data; it cannot change anything in your project.
- The full OpenAPI 3.1 description is at [`https://api.grillo.io/v1/openapi.yaml`](https://api.grillo.io/v1/openapi.yaml). It needs no key.

The API is included in every [plan](/dashboard/plans). For waveform data, use the [waveform download](/dashboard/data/waveforms#what-you-download) or the [real-time export](/dashboard/data/realtime-export).

## Get an API key

[Contact Grillo Support](/support/contact) with your project name and what the key is for, for example "Partner SCADA". Grillo issues the key and sends it to you.

- Each key reads one project.
- A project can have up to 10 active keys. Use a separate key for each system, so you can revoke one without affecting the others.
- Grillo stores only a fingerprint of the key, so a lost key cannot be recovered. Ask for a new one.
- To revoke a key, contact Grillo Support. Anything using it stops working within a few seconds.

Keep keys out of web pages, apps, and source control. Anyone with the key can read the project's data.

## Authentication

Send the key in the `Authorization` header:

```bash
curl -H "Authorization: Bearer grillo_sk_..." https://api.grillo.io/v1/project
```

Keys start with `grillo_sk_`. A missing, malformed, or revoked key gets `401 unauthorized`.

## Conventions

**Times** are RFC 3339 in UTC, for example `2026-10-12T14:30:00Z`. Query parameters also accept a plain date, such as `2026-10-12`, meaning midnight UTC.

**Lists** are paged with `limit` (1–500, default 100) and `offset` (default 0). Responses include the total:

```json
{
  "data": [ ... ],
  "total": 142,
  "limit": 100,
  "offset": 0
}
```

**Sensors** can be named by Device ID (`9C139EAE2360`) or station code (`HT012`).

**Locations.** If your project has location masking on, sensor positions are 500–1000 m from the true site, as in Grillo Cloud. Location names and GPS positions are then withheld, and elevation is rounded to 100 m.

**Freshness.** Data can be a few seconds behind Grillo Cloud.

## Limits

Each key can make 60 requests a minute, with bursts of up to 20. Over the limit, the API answers `429 rate_limited` with a `Retry-After` header giving the seconds to wait.

A query that runs too long is stopped and gets `503 timeout`. Narrow the time range or the page size and try again.

## Errors

Errors have a code and a message:

```json
{
  "error": {
    "code": "invalid_range",
    "message": "The range can be at most 7 days. Page through longer periods."
  }
}
```

| Status | Code | Meaning |
|---|---|---|
| 400 | `invalid_parameter`, `invalid_range` | A parameter is wrong. The message says which |
| 401 | `unauthorized` | The key is missing, malformed, or revoked |
| 404 | `not_found` | Not found in this project |
| 429 | `rate_limited` | Too many requests. Wait for `Retry-After` seconds |
| 503 | `timeout` | The query took too long |
| 500 | `internal_error` | Something went wrong at Grillo. Try again, then contact support |

## Endpoints

All endpoints use `GET`.

| Endpoint | Returns |
|---|---|
| `/v1/project` | The project the key belongs to |
| `/v1/sensors` | The project's sensors with their current status |
| `/v1/sensors/{id}` | One sensor |
| `/v1/sensors/{id}/soh` | A sensor's health reports |
| `/v1/events` | Detected earthquakes |
| `/v1/events/{id}` | One earthquake with every solution issued for it |
| `/v1/triggers` | Triggered recordings |

### Project

`GET /v1/project`

```json
{
  "id": "…",
  "name": "Riverside Tower",
  "network_code": "GR",
  "sensor_count": 6,
  "location_masked": false,
  "api_key_id": "…"
}
```

### Sensors

`GET /v1/sensors` lists sensors ordered by station code, paged with `limit` and `offset`. `GET /v1/sensors/{id}` returns one.

```json
{
  "device_id": "9C139EAE2360",
  "station": "TWR01",
  "network": "GR",
  "sensor_type": "grillo-pulse",
  "firmware": "1.0.14",
  "status": "online",
  "last_seen": "2026-10-12T14:30:05Z",
  "location": {
    "latitude": 51.5072,
    "longitude": -0.1276,
    "elevation_m": 42,
    "name": "Level 12, east core",
    "masked": false
  },
  "power": { "battery_volts": null, "charging": null, "source": "DC" },
  "connectivity": { "type": "cell", "signal_strength": -71 }
}
```

- `status` is `online` if the sensor reported in the last 150 seconds, as in Grillo Cloud.
- `connectivity.type` is `wifi`, `cell`, or `none`.
- `signal_strength` is in dBm when negative, and a percentage otherwise.

### Sensor health reports

`GET /v1/sensors/{id}/soh`

| Parameter | Meaning |
|---|---|
| `from` | Start of the range, exclusive. Defaults to 24 hours before `to` |
| `to` | End of the range, inclusive. Defaults to now |
| `limit` | Reports per response, 1–5000. Default 1000 |

The range can be at most 7 days. Reports are oldest first. When more reports remain, `next_from` is set: request again with `from` set to `next_from` and the same `to`. When `next_from` is `null`, you have them all.

```json
{
  "device_id": "9C139EAE2360",
  "station": "TWR01",
  "from": "2026-10-11T14:30:00Z",
  "to": "2026-10-12T14:30:00Z",
  "next_from": null,
  "data": [
    {
      "timestamp": "2026-10-11T14:30:28Z",
      "received_at": "2026-10-11T14:30:28Z",
      "firmware": "1.0.14",
      "power_source": "DC",
      "connection_type": "cell",
      "signal_strength": -71,
      "uptime_s": 86400,
      "reboot_reason": "normal",
      "clock_quality": "synced",
      "sync_age_s": 120,
      "data_tx_bytes": 1048576,
      "data_rx_bytes": 65536
    }
  ]
}
```

Each report can also include `battery_volts`, `charging`, `temperature_c`, `free_heap_bytes`, `buffer_usage_pct`, and GPS position. A field the sensor does not report is `null`.

- `timestamp` is the sensor's time for the report; `received_at` is when Grillo received it.
- `data_tx_bytes` and `data_rx_bytes` count the sensor's data sent and received since it last started. They do not include network overhead, so they are lower than the usage your mobile operator bills.

### Events

`GET /v1/events` lists earthquakes detected for the project, newest first. Events need a plan with [earthquake detection](/events).

| Parameter | Meaning |
|---|---|
| `from`, `to` | Issued at or after `from`, and at or before `to` |
| `min_magnitude` | Smallest magnitude to include |
| `bbox` | Epicentre within `min_lon,min_lat,max_lon,max_lat`, for example `-74.5,17.9,-71.6,20.1` |
| `order` | `desc` (default) or `asc` |
| `limit`, `offset` | Paging |

```json
{
  "id": "…",
  "issued_at": "2026-10-07T03:12:44Z",
  "magnitude": 3.6,
  "origin": {
    "id": "…",
    "latitude": 18.52,
    "longitude": -72.31,
    "depth": 10.2,
    "origin_time": 1791342750.4,
    "issued_at": 1791342764.1
  },
  "station_count": 5,
  "pick_stations": ["HT012", "HT014", "HT020", "HT031", "HT033"]
}
```

`origin` is the latest location. Its `depth` is in kilometres, and its times are Unix seconds.

`GET /v1/events/{id}` returns one event with every solution issued for it: `origins`, `magnitudes`, `picks`, `amplitudes`, and `descriptions`.

### Triggers

`GET /v1/triggers` lists [triggers](/dashboard/triggers), newest first.

| Parameter | Meaning |
|---|---|
| `from`, `to` | Started at or after `from`, and at or before `to` |
| `device_id` | Only this sensor's triggers |
| `order` | `desc` (default) or `asc` |
| `limit`, `offset` | Paging |

```json
{
  "id": 4182,
  "device_id": "9C139EAE2360",
  "station": "TWR01",
  "location_name": "Level 12, east core",
  "start_time": "2026-10-12T13:55:46Z",
  "end_time": "2026-10-12T13:57:49Z",
  "peak_time": "2026-10-12T13:56:46Z",
  "pga_horizontal_mg": 273.8,
  "pga_hne_mg": 201.5,
  "pga_hnn_mg": 186.2,
  "pga_hnz_mg": 95.4,
  "pgv_ehz_mm_s": 12.7,
  "peak_ehz_counts": 1843021,
  "peak_hz": 7.8,
  "status": "closed"
}
```

- Accelerations are in mg and velocity in mm/s, measured after filtering to 0.5–25 Hz.
- `status` is `open` while the sensor is still recording, then `closed`. Values of an open trigger can still change.
- `station` is `null` if the sensor has since moved to another project.

## Example: poll for new triggers

This script checks every minute for triggers that have finished, and prints each one once.

```python
import time
from datetime import datetime, timedelta, timezone

import requests

API = "https://api.grillo.io/v1"
HEADERS = {"Authorization": "Bearer grillo_sk_..."}
seen = set()

while True:
    since = datetime.now(timezone.utc) - timedelta(hours=1)
    r = requests.get(f"{API}/triggers", headers=HEADERS,
                     params={"from": since.isoformat(), "order": "asc", "limit": 500})
    if r.status_code == 429:
        time.sleep(int(r.headers.get("Retry-After", "5")))
        continue
    r.raise_for_status()
    for t in r.json()["data"]:
        if t["status"] == "closed" and t["id"] not in seen:
            seen.add(t["id"])
            print(t["station"], t["peak_time"], t["pga_horizontal_mg"], "mg")
    time.sleep(60)
```

It looks back an hour on every request, so a trigger that was still `open` on one request is picked up once it closes.
