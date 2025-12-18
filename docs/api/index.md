---
sidebar_position: 6
title: API Reference
---

# API Reference

The Grillo API provides programmatic access to sensor data, event information, and platform functionality.

:::info API Access
API access requires an API key. [Generate your API key →](/dashboard/settings/api-keys)
:::

## Overview

The Grillo API allows you to:
- Query sensor information and status
- Access event catalogs and details
- Export data programmatically
- Receive real-time event notifications
- Manage network configurations

## Base URL

```
https://api.grillo.io/v1
```

## Authentication

All API requests require authentication via API key.

Include your key in the Authorization header:

```http
Authorization: Bearer YOUR_API_KEY
```

[Detailed authentication guide →](/api/authentication)

## Quick start

### Get your sensors

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.grillo.io/v1/sensors
```

### Get recent events

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.grillo.io/v1/events?limit=10
```

## API sections

### Sensors

Manage and query sensor information:
- List sensors in your networks
- Get sensor details and status
- Query sensor data

### Events

Access earthquake event data:
- Query event catalog
- Get event details
- Export event data

### Networks

Manage seismic networks:
- List networks
- Get network information
- Query network statistics

### Webhooks

Configure real-time notifications:
- Set up webhook endpoints
- Manage subscriptions
- View delivery history

## Response format

All responses are JSON:

```json
{
  "data": { ... },
  "meta": {
    "request_id": "req_abc123",
    "timestamp": "2024-01-15T14:32:45Z"
  }
}
```

### Error responses

```json
{
  "error": {
    "code": "invalid_request",
    "message": "Description of the error",
    "details": { ... }
  },
  "meta": {
    "request_id": "req_abc123"
  }
}
```

## Rate limits

<!-- TODO: Confirm actual limits -->

| Tier | Requests/minute | Requests/day |
|------|-----------------|--------------|
| Free | 60 | 10,000 |
| Standard | 300 | 100,000 |
| Premium | 1,000 | Unlimited |

Rate limit headers in response:
```http
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1610000000
```

## Pagination

List endpoints support pagination:

```http
GET /v1/sensors?page=2&limit=50
```

Response includes pagination info:
```json
{
  "data": [...],
  "pagination": {
    "page": 2,
    "limit": 50,
    "total": 150,
    "pages": 3
  }
}
```

## Guides in this section

- [Authentication](/api/authentication)
- [Endpoints](/api/endpoints)
- [Webhooks](/api/webhooks)
- [Rate limits](/api/rate-limits)

## SDKs and libraries

<!-- TODO: Add SDKs when available -->

Official SDKs coming soon for:
- Python
- JavaScript/Node.js
- More

## Support

For API support:
- [API documentation](/api)
- [Contact support](/support/contact)
