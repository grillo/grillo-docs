---
sidebar_position: 3
title: API Integration
---

# API Integration for Alerts

Integrate Grillo event alerts with your systems using webhooks and APIs.

## Integration options

### Webhooks (Push)

Grillo pushes events to your endpoint:
- Real-time delivery
- No polling required
- Configure once, receive automatically

### API (Pull)

Query Grillo for events:
- On-demand access
- Historical queries
- Full control over timing

## Webhook integration

### Setting up a webhook

1. Navigate to Alert Configuration
2. Create or edit an alert rule
3. Enable **"Webhook"** channel
4. Enter your endpoint URL
5. Configure authentication
6. Save the rule

### Webhook endpoint requirements

Your endpoint must:
- Accept HTTP POST requests
- Handle JSON payloads
- Respond within 30 seconds
- Return 2xx status for success

### Payload format

Event webhook payload:

```json
{
  "event_type": "earthquake",
  "event_id": "evt_abc123xyz",
  "timestamp": "2024-01-15T14:32:45.123Z",
  "network_id": "net_123",
  "network_name": "My Seismic Network",
  "origin": {
    "time": "2024-01-15T14:32:41.500Z",
    "latitude": 37.7749,
    "longitude": -122.4194,
    "depth_km": 8.5,
    "depth_uncertainty_km": 2.0,
    "location_uncertainty_km": 3.5
  },
  "magnitude": {
    "value": 4.2,
    "type": "ML",
    "uncertainty": 0.2
  },
  "location_description": "5 km NE of San Francisco, CA",
  "quality": {
    "stations_used": 12,
    "azimuthal_gap": 85,
    "rms_residual": 0.45,
    "status": "automatic"
  },
  "alert_rule_id": "rule_xyz789",
  "alert_rule_name": "M4+ Events"
}
```

### Payload fields

| Field | Type | Description |
|-------|------|-------------|
| event_type | string | Always "earthquake" |
| event_id | string | Unique event identifier |
| timestamp | string | When alert was sent (ISO 8601) |
| network_id | string | Your network ID |
| origin.time | string | Earthquake origin time |
| origin.latitude | number | Epicenter latitude |
| origin.longitude | number | Epicenter longitude |
| origin.depth_km | number | Depth in kilometers |
| magnitude.value | number | Magnitude value |
| magnitude.type | string | Magnitude type (ML, Mw, etc.) |

### Authentication

**Option 1: API Key header**
```http
POST /your-endpoint HTTP/1.1
X-Grillo-API-Key: your-shared-secret
Content-Type: application/json
```

**Option 2: Bearer token**
```http
POST /your-endpoint HTTP/1.1
Authorization: Bearer your-token
Content-Type: application/json
```

**Option 3: Basic auth**
```http
POST /your-endpoint HTTP/1.1
Authorization: Basic base64(username:password)
Content-Type: application/json
```

### Verifying requests

To verify requests come from Grillo:

**Check signature (if available):**
```http
X-Grillo-Signature: sha256=abc123...
```

Compute HMAC-SHA256 of body with your secret and compare.

### Example endpoint (Node.js)

```javascript
const express = require('express');
const app = express();

app.post('/grillo-webhook', express.json(), (req, res) => {
  const event = req.body;

  // Verify API key
  if (req.headers['x-grillo-api-key'] !== process.env.GRILLO_SECRET) {
    return res.status(401).send('Unauthorized');
  }

  // Process the event
  console.log(`Earthquake detected: M${event.magnitude.value}`);
  console.log(`Location: ${event.location_description}`);

  // Respond with success
  res.status(200).send('OK');
});

app.listen(3000);
```

### Example endpoint (Python)

```python
from flask import Flask, request, jsonify
import os

app = Flask(__name__)

@app.route('/grillo-webhook', methods=['POST'])
def handle_event():
    # Verify API key
    api_key = request.headers.get('X-Grillo-API-Key')
    if api_key != os.environ.get('GRILLO_SECRET'):
        return 'Unauthorized', 401

    event = request.json

    # Process the event
    print(f"Earthquake: M{event['magnitude']['value']}")
    print(f"Location: {event['location_description']}")

    return 'OK', 200

if __name__ == '__main__':
    app.run(port=3000)
```

### Retry behavior

If your endpoint fails:
1. Initial attempt
2. Retry after 1 minute
3. Retry after 5 minutes
4. Retry after 30 minutes
5. Alert marked as failed

Failures are logged and visible in alert history.

## API integration

### Authentication

Include your API key in requests:
```http
Authorization: Bearer YOUR_API_KEY
```

[API key management →](/dashboard/settings/api-keys)

### Query events

**Get recent events:**
```http
GET /api/v1/events?limit=10
```

**Filter by magnitude:**
```http
GET /api/v1/events?min_magnitude=4.0
```

**Filter by date:**
```http
GET /api/v1/events?start=2024-01-01&end=2024-01-31
```

**Filter by location:**
```http
GET /api/v1/events?lat=37.77&lon=-122.42&radius=100
```

### Response format

```json
{
  "events": [
    {
      "event_id": "evt_abc123",
      "origin": { ... },
      "magnitude": { ... },
      ...
    }
  ],
  "total": 42,
  "page": 1,
  "limit": 10
}
```

[Full API documentation →](/api)

## Integration examples

### Slack notification

```javascript
const axios = require('axios');

async function sendToSlack(event) {
  await axios.post(process.env.SLACK_WEBHOOK_URL, {
    text: `🌍 Earthquake Detected!`,
    blocks: [
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*M${event.magnitude.value}* earthquake detected\n` +
                `📍 ${event.location_description}\n` +
                `🕐 ${event.origin.time}`
        }
      }
    ]
  });
}
```

### Database logging

```python
def log_to_database(event):
    cursor.execute("""
        INSERT INTO earthquakes
        (event_id, time, lat, lon, depth, magnitude)
        VALUES (%s, %s, %s, %s, %s, %s)
    """, (
        event['event_id'],
        event['origin']['time'],
        event['origin']['latitude'],
        event['origin']['longitude'],
        event['origin']['depth_km'],
        event['magnitude']['value']
    ))
    connection.commit()
```

### SMS alert (Twilio)

```javascript
const twilio = require('twilio');
const client = twilio(accountSid, authToken);

async function sendSMS(event) {
  await client.messages.create({
    body: `EARTHQUAKE ALERT: M${event.magnitude.value} - ${event.location_description}`,
    from: '+1234567890',
    to: '+0987654321'
  });
}
```

## Testing

### Webhook testing tools

Use these to test your endpoint:
- [Webhook.site](https://webhook.site)
- [RequestBin](https://requestbin.com)
- Local tunnels (ngrok)

### Test from Grillo

1. Set up webhook with test URL
2. Go to Alert Configuration
3. Click **"Send Test"**
4. Verify payload received

### Sample test payload

```bash
curl -X POST https://your-endpoint.com/grillo-webhook \
  -H "Content-Type: application/json" \
  -H "X-Grillo-API-Key: your-secret" \
  -d '{
    "event_type": "earthquake",
    "event_id": "test_123",
    "magnitude": {"value": 4.5, "type": "ML"},
    "origin": {
      "latitude": 37.77,
      "longitude": -122.42,
      "depth_km": 10
    },
    "location_description": "Test Event"
  }'
```

## Troubleshooting

### Webhook not receiving events

1. Check endpoint URL is correct
2. Verify endpoint is publicly accessible
3. Check firewall allows Grillo IPs
4. Review server logs
5. Test with webhook.site

### Authentication failing

1. Verify credentials match
2. Check header name/format
3. Ensure no extra whitespace
4. Try regenerating secret

### Events delayed

1. Check endpoint response time
2. Verify no rate limiting
3. Review retry history
4. Check for network issues

## Related guides

- [Alert configuration](/events/alerts/alert-configuration)
- [API documentation](/api)
- [API keys](/dashboard/settings/api-keys)
