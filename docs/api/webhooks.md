---
sidebar_position: 4
title: Webhooks
---

# Webhooks

Receive real-time notifications when events occur in your Grillo network.

## Overview

Webhooks push data to your server when:
- Earthquakes are detected
- Sensor status changes
- Other configurable events

No polling required—data comes to you.

## Setting up webhooks

### Via dashboard

1. Go to Settings → Notifications → Webhooks
2. Click **"Add Webhook"**
3. Enter your endpoint URL
4. Select events to receive
5. Save

### Via API

```http
POST /v1/webhooks
```

```json
{
  "url": "https://your-server.com/grillo-webhook",
  "events": ["event.detected", "sensor.offline"],
  "secret": "your_shared_secret"
}
```

## Webhook events

### Event detection

**Event:** `event.detected`

Triggered when an earthquake is detected.

```json
{
  "type": "event.detected",
  "timestamp": "2024-01-15T14:32:50Z",
  "data": {
    "event_id": "evt_abc123",
    "origin_time": "2024-01-15T14:32:41.500Z",
    "latitude": 37.7749,
    "longitude": -122.4194,
    "depth_km": 8.5,
    "magnitude": 4.2,
    "magnitude_type": "ML",
    "location_description": "5 km NE of San Francisco, CA",
    "network_id": "net_xyz789"
  }
}
```

### Event updated

**Event:** `event.updated`

Triggered when event parameters are revised.

```json
{
  "type": "event.updated",
  "timestamp": "2024-01-15T14:35:00Z",
  "data": {
    "event_id": "evt_abc123",
    "changes": {
      "magnitude": {
        "old": 4.2,
        "new": 4.4
      }
    }
  }
}
```

### Sensor offline

**Event:** `sensor.offline`

Triggered when a sensor goes offline.

```json
{
  "type": "sensor.offline",
  "timestamp": "2024-01-15T14:32:50Z",
  "data": {
    "sensor_id": "sen_abc123",
    "station_code": "GRIL01",
    "last_seen": "2024-01-15T14:30:00Z",
    "network_id": "net_xyz789"
  }
}
```

### Sensor online

**Event:** `sensor.online`

Triggered when a sensor comes back online.

```json
{
  "type": "sensor.online",
  "timestamp": "2024-01-15T14:32:50Z",
  "data": {
    "sensor_id": "sen_abc123",
    "station_code": "GRIL01",
    "offline_duration_seconds": 3600,
    "network_id": "net_xyz789"
  }
}
```

## Webhook format

### HTTP request

Webhooks are sent as HTTP POST requests:

```http
POST /your-endpoint HTTP/1.1
Host: your-server.com
Content-Type: application/json
X-Grillo-Signature: sha256=abc123...
X-Grillo-Event: event.detected
X-Grillo-Delivery: dlv_xyz789
```

### Headers

| Header | Description |
|--------|-------------|
| Content-Type | Always `application/json` |
| X-Grillo-Signature | HMAC signature for verification |
| X-Grillo-Event | Event type |
| X-Grillo-Delivery | Unique delivery ID |

## Verifying webhooks

Use the signature to verify requests are from Grillo.

### Signature format

```
X-Grillo-Signature: sha256=<signature>
```

### Verification (Node.js)

```javascript
const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const expected = 'sha256=' + crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expected)
  );
}

// In your handler
app.post('/webhook', (req, res) => {
  const signature = req.headers['x-grillo-signature'];
  const payload = JSON.stringify(req.body);

  if (!verifyWebhook(payload, signature, WEBHOOK_SECRET)) {
    return res.status(401).send('Invalid signature');
  }

  // Process webhook
  res.status(200).send('OK');
});
```

### Verification (Python)

```python
import hmac
import hashlib

def verify_webhook(payload, signature, secret):
    expected = 'sha256=' + hmac.new(
        secret.encode(),
        payload.encode(),
        hashlib.sha256
    ).hexdigest()

    return hmac.compare_digest(signature, expected)
```

## Responding to webhooks

### Success response

Return 2xx status to acknowledge receipt:

```http
HTTP/1.1 200 OK
```

### Failure handling

Non-2xx responses trigger retry:
- Retry 1: After 1 minute
- Retry 2: After 5 minutes
- Retry 3: After 30 minutes
- Then marked as failed

## Managing webhooks

### List webhooks

```http
GET /v1/webhooks
```

### Get webhook details

```http
GET /v1/webhooks/{webhook_id}
```

### Update webhook

```http
PATCH /v1/webhooks/{webhook_id}
```

```json
{
  "events": ["event.detected"],
  "active": true
}
```

### Delete webhook

```http
DELETE /v1/webhooks/{webhook_id}
```

### View delivery history

```http
GET /v1/webhooks/{webhook_id}/deliveries
```

## Testing webhooks

### Test endpoint

Send a test webhook:

```http
POST /v1/webhooks/{webhook_id}/test
```

### Using webhook.site

For development:
1. Go to [webhook.site](https://webhook.site)
2. Copy your unique URL
3. Configure as webhook endpoint
4. See incoming requests

## Best practices

### Endpoint design

- Respond quickly (< 5 seconds)
- Process async if needed
- Return 200 immediately, process later

### Error handling

- Implement idempotency (deliveries may retry)
- Use delivery ID to detect duplicates
- Log failures for debugging

### Security

- Always verify signatures
- Use HTTPS endpoints
- Rotate secrets periodically

## Troubleshooting

### Not receiving webhooks

1. Check webhook is active
2. Verify URL is correct
3. Ensure endpoint is publicly accessible
4. Check firewall rules
5. Review delivery history

### Signature verification failing

1. Check secret matches
2. Verify payload format (raw JSON)
3. Check for character encoding issues

### High latency

1. Return 200 immediately
2. Process in background
3. Use message queue if needed

## Related guides

- [Alert configuration](/events/alerts/alert-configuration)
- [API integration](/events/alerts/api-integration)
