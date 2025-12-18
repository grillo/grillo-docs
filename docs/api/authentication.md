---
sidebar_position: 2
title: Authentication
---

# API Authentication

How to authenticate with the Grillo API.

## Overview

The Grillo API uses API keys for authentication. Every request must include a valid API key.

## Getting an API key

1. Log into [cloud.grillo.io](https://cloud.grillo.io)
2. Navigate to Settings → API Keys
3. Click **"Create API Key"**
4. Configure key permissions
5. Copy and securely store the key

[Detailed API key management →](/dashboard/settings/api-keys)

:::warning
API keys are shown only once when created. Store them securely.
:::

## Using your API key

### Bearer token (recommended)

Include the API key in the Authorization header:

```http
GET /v1/sensors HTTP/1.1
Host: api.grillo.io
Authorization: Bearer YOUR_API_KEY
```

Example with curl:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.grillo.io/v1/sensors
```

### Query parameter

Alternatively, pass as a query parameter:

```http
GET /v1/sensors?api_key=YOUR_API_KEY HTTP/1.1
Host: api.grillo.io
```

:::note
The header method is preferred as it keeps keys out of URLs and logs.
:::

## API key permissions

Keys can have different permission levels:

| Permission | Allows |
|------------|--------|
| read:sensors | View sensor information |
| read:events | View event data |
| read:networks | View network information |
| write:sensors | Modify sensor configuration |
| write:networks | Modify network settings |
| admin | Full access |

Request only the permissions your application needs.

## Code examples

### Python

```python
import requests

API_KEY = "your_api_key"
BASE_URL = "https://api.grillo.io/v1"

headers = {
    "Authorization": f"Bearer {API_KEY}"
}

response = requests.get(f"{BASE_URL}/sensors", headers=headers)
sensors = response.json()
```

### JavaScript/Node.js

```javascript
const API_KEY = 'your_api_key';
const BASE_URL = 'https://api.grillo.io/v1';

const response = await fetch(`${BASE_URL}/sensors`, {
  headers: {
    'Authorization': `Bearer ${API_KEY}`
  }
});

const sensors = await response.json();
```

### cURL

```bash
API_KEY="your_api_key"

curl -H "Authorization: Bearer $API_KEY" \
  https://api.grillo.io/v1/sensors
```

## Error responses

### 401 Unauthorized

API key is missing or invalid:

```json
{
  "error": {
    "code": "unauthorized",
    "message": "Invalid or missing API key"
  }
}
```

**Solutions:**
- Check API key is included
- Verify key is not revoked
- Check for typos

### 403 Forbidden

API key doesn't have required permissions:

```json
{
  "error": {
    "code": "forbidden",
    "message": "Insufficient permissions for this action"
  }
}
```

**Solutions:**
- Check key has required permissions
- Request additional permissions
- Use a different key

## Security best practices

### Do

- Store keys in environment variables
- Use secrets management systems
- Rotate keys periodically
- Use separate keys per application
- Grant minimum required permissions

### Don't

- Commit keys to version control
- Include keys in client-side code
- Share keys in plain text
- Use production keys for testing
- Ignore key compromise

## Key rotation

Periodically rotate keys for security:

1. Create a new API key
2. Update your application with new key
3. Verify application works
4. Revoke the old key

## If a key is compromised

1. **Revoke immediately** - Go to API Keys settings
2. **Create new key** - Generate replacement
3. **Update applications** - Deploy new key
4. **Check logs** - Review for unauthorized access
5. **Investigate** - Determine exposure cause

## Related guides

- [API key management](/dashboard/settings/api-keys)
- [API endpoints](/api/endpoints)
