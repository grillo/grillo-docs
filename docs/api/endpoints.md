---
sidebar_position: 3
title: Endpoints
---

# API Endpoints

Reference documentation for Grillo API endpoints.

## Base URL

```
https://api.grillo.io/v1
```

## Sensors

### List sensors

Get all sensors in your networks.

```http
GET /v1/sensors
```

**Query parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| network_id | string | Filter by network |
| status | string | Filter by status (online, offline) |
| page | integer | Page number |
| limit | integer | Results per page (max 100) |

**Response:**

```json
{
  "data": [
    {
      "id": "sen_abc123",
      "serial_number": "GR001234",
      "type": "grillo-one",
      "station_code": "GRIL01",
      "network_id": "net_xyz789",
      "status": "online",
      "location": {
        "latitude": 37.7749,
        "longitude": -122.4194,
        "elevation": 10
      },
      "last_seen": "2024-01-15T14:32:45Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 45
  }
}
```

### Get sensor

Get details for a specific sensor.

```http
GET /v1/sensors/{sensor_id}
```

**Response:**

```json
{
  "data": {
    "id": "sen_abc123",
    "serial_number": "GR001234",
    "type": "grillo-one",
    "station_code": "GRIL01",
    "network_code": "GR",
    "location_code": "00",
    "network_id": "net_xyz789",
    "status": "online",
    "location": {
      "latitude": 37.7749,
      "longitude": -122.4194,
      "elevation": 10,
      "site_name": "Main Office"
    },
    "firmware_version": "1.2.3",
    "last_seen": "2024-01-15T14:32:45Z",
    "created_at": "2024-01-01T00:00:00Z"
  }
}
```

### Get sensor data

Get recent data from a sensor.

```http
GET /v1/sensors/{sensor_id}/data
```

**Query parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| start | string | Start time (ISO 8601) |
| end | string | End time (ISO 8601) |
| channel | string | Channel code (HNZ, HNE, HNN) |
| format | string | Response format (json, miniseed) |

**Response (JSON):**

```json
{
  "data": {
    "sensor_id": "sen_abc123",
    "channel": "HNZ",
    "start_time": "2024-01-15T14:30:00Z",
    "end_time": "2024-01-15T14:35:00Z",
    "sample_rate": 100,
    "samples": [0.001, 0.002, -0.001, ...]
  }
}
```

## Events

### List events

Get detected earthquake events.

```http
GET /v1/events
```

**Query parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| network_id | string | Filter by network |
| start | string | Start time (ISO 8601) |
| end | string | End time (ISO 8601) |
| min_magnitude | number | Minimum magnitude |
| max_magnitude | number | Maximum magnitude |
| lat | number | Latitude for radius search |
| lon | number | Longitude for radius search |
| radius | number | Radius in km |
| page | integer | Page number |
| limit | integer | Results per page |

**Response:**

```json
{
  "data": [
    {
      "id": "evt_abc123",
      "origin_time": "2024-01-15T14:32:41.500Z",
      "latitude": 37.7749,
      "longitude": -122.4194,
      "depth_km": 8.5,
      "magnitude": 4.2,
      "magnitude_type": "ML",
      "location_description": "5 km NE of San Francisco, CA",
      "status": "automatic",
      "network_id": "net_xyz789"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150
  }
}
```

### Get event

Get details for a specific event.

```http
GET /v1/events/{event_id}
```

**Response:**

```json
{
  "data": {
    "id": "evt_abc123",
    "origin_time": "2024-01-15T14:32:41.500Z",
    "latitude": 37.7749,
    "longitude": -122.4194,
    "depth_km": 8.5,
    "depth_uncertainty_km": 2.0,
    "horizontal_uncertainty_km": 3.5,
    "magnitude": 4.2,
    "magnitude_type": "ML",
    "magnitude_uncertainty": 0.2,
    "location_description": "5 km NE of San Francisco, CA",
    "status": "automatic",
    "network_id": "net_xyz789",
    "quality": {
      "stations_used": 12,
      "azimuthal_gap": 85,
      "rms_residual": 0.45
    },
    "stations": [
      {
        "station_code": "GRIL01",
        "distance_km": 15.3,
        "p_arrival": "2024-01-15T14:32:44.200Z",
        "s_arrival": "2024-01-15T14:32:46.800Z"
      }
    ],
    "created_at": "2024-01-15T14:32:50Z"
  }
}
```

## Networks

### List networks

Get all networks in your organization.

```http
GET /v1/networks
```

**Response:**

```json
{
  "data": [
    {
      "id": "net_xyz789",
      "name": "San Francisco Network",
      "description": "Bay Area monitoring network",
      "organization_id": "org_123",
      "sensor_count": 45,
      "created_at": "2024-01-01T00:00:00Z"
    }
  ]
}
```

### Get network

Get details for a specific network.

```http
GET /v1/networks/{network_id}
```

### Get network statistics

Get summary statistics for a network.

```http
GET /v1/networks/{network_id}/stats
```

**Response:**

```json
{
  "data": {
    "network_id": "net_xyz789",
    "total_sensors": 45,
    "online_sensors": 42,
    "offline_sensors": 3,
    "events_30d": 23,
    "data_completeness": 0.95
  }
}
```

## Common response codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 400 | Bad request (invalid parameters) |
| 401 | Unauthorized (invalid API key) |
| 403 | Forbidden (insufficient permissions) |
| 404 | Not found |
| 429 | Rate limit exceeded |
| 500 | Server error |

## Error response format

```json
{
  "error": {
    "code": "invalid_request",
    "message": "Human-readable error description",
    "details": {
      "field": "Additional context"
    }
  },
  "meta": {
    "request_id": "req_abc123"
  }
}
```

## Related guides

- [Authentication](/api/authentication)
- [Webhooks](/api/webhooks)
- [Rate limits](/api/rate-limits)
