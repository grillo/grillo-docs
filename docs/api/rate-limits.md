---
sidebar_position: 5
title: Rate Limits
---

# Rate Limits

Understanding and working with Grillo API rate limits.

## Overview

Rate limits protect the API from abuse and ensure fair usage for all users.

## Limits by tier

<!-- TODO: Confirm actual rate limits -->

| Tier | Requests/minute | Requests/day | Concurrent |
|------|-----------------|--------------|------------|
| Free | 60 | 10,000 | 5 |
| Standard | 300 | 100,000 | 20 |
| Premium | 1,000 | Unlimited | 50 |
| Enterprise | Custom | Custom | Custom |

## Rate limit headers

Every response includes rate limit information:

```http
HTTP/1.1 200 OK
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1610000000
```

| Header | Description |
|--------|-------------|
| X-RateLimit-Limit | Requests allowed per window |
| X-RateLimit-Remaining | Requests remaining |
| X-RateLimit-Reset | Unix timestamp when limit resets |

## Exceeding limits

When you exceed the rate limit:

```http
HTTP/1.1 429 Too Many Requests
Retry-After: 30
```

```json
{
  "error": {
    "code": "rate_limit_exceeded",
    "message": "Rate limit exceeded. Try again in 30 seconds.",
    "retry_after": 30
  }
}
```

## Handling rate limits

### Check headers

Monitor your usage via response headers:

```javascript
const response = await fetch(url, { headers });
const remaining = response.headers.get('X-RateLimit-Remaining');

if (remaining < 10) {
  console.warn('Approaching rate limit');
}
```

### Implement backoff

When rate limited, wait before retrying:

```javascript
async function requestWithRetry(url, options, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    const response = await fetch(url, options);

    if (response.status !== 429) {
      return response;
    }

    const retryAfter = response.headers.get('Retry-After') || 30;
    await sleep(retryAfter * 1000);
  }

  throw new Error('Max retries exceeded');
}
```

### Exponential backoff

For repeated failures:

```javascript
async function exponentialBackoff(fn, maxRetries = 5) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (error.status !== 429 || i === maxRetries - 1) {
        throw error;
      }
      const delay = Math.pow(2, i) * 1000; // 1s, 2s, 4s, 8s, 16s
      await sleep(delay);
    }
  }
}
```

## Best practices

### Reduce requests

**Cache responses:**
- Cache data that doesn't change frequently
- Set appropriate cache TTLs

**Batch requests:**
- Use batch endpoints where available
- Fetch multiple items in one request

**Request only what you need:**
- Use filters to limit results
- Select specific fields if supported

### Spread requests

**Avoid bursts:**
- Distribute requests over time
- Don't request everything at startup

**Implement queuing:**
- Queue requests during high load
- Process at sustainable rate

### Monitor usage

**Track consumption:**
- Log rate limit headers
- Alert when approaching limits

**Analyze patterns:**
- Identify usage spikes
- Optimize high-frequency requests

## Code examples

### Python with rate limit handling

```python
import time
import requests

class RateLimitedClient:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = "https://api.grillo.io/v1"

    def request(self, endpoint, method="GET", **kwargs):
        url = f"{self.base_url}{endpoint}"
        headers = {"Authorization": f"Bearer {self.api_key}"}

        for attempt in range(3):
            response = requests.request(
                method, url, headers=headers, **kwargs
            )

            if response.status_code != 429:
                return response

            retry_after = int(response.headers.get("Retry-After", 30))
            print(f"Rate limited, waiting {retry_after}s")
            time.sleep(retry_after)

        response.raise_for_status()
```

### JavaScript with automatic retry

```javascript
class GrilloClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = 'https://api.grillo.io/v1';
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Authorization': `Bearer ${this.apiKey}`,
      ...options.headers
    };

    for (let attempt = 0; attempt < 3; attempt++) {
      const response = await fetch(url, { ...options, headers });

      if (response.status !== 429) {
        return response.json();
      }

      const retryAfter = response.headers.get('Retry-After') || 30;
      await new Promise(r => setTimeout(r, retryAfter * 1000));
    }

    throw new Error('Rate limit exceeded after retries');
  }
}
```

## Increasing limits

### Upgrade tier

Higher tiers have higher limits:
- Contact sales for upgrade
- Enterprise plans have custom limits

### Request increase

For specific needs:
- Contact support
- Explain use case
- Temporary increases may be available

## Related guides

- [Authentication](/api/authentication)
- [API endpoints](/api/endpoints)
