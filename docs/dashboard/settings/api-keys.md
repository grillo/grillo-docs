---
sidebar_position: 3
title: API Keys
---

# API Keys

Generate and manage API keys to access Grillo Cloud data programmatically.

## Overview

API keys allow you to:
- Access sensor data via API
- Integrate with external systems
- Build custom applications
- Automate data export

## Accessing API key management

1. Navigate to Settings → API Keys
2. Or Profile → Developer Settings → API Keys

## Creating an API key

### Step 1: Start key creation

1. Click **"Create API Key"** or **"+"** button
2. The key creation form opens

### Step 2: Configure the key

| Field | Description |
|-------|-------------|
| Name | Descriptive name (e.g., "Production App") |
| Description | Purpose of this key |
| Permissions | What the key can access |
| Expiration | When the key expires (optional) |

### Step 3: Set permissions

Choose what the key can do:

| Permission | Description |
|------------|-------------|
| Read sensors | View sensor list and data |
| Read events | View detected events |
| Write configuration | Modify sensor settings |
| Admin | Full API access |

:::warning
Follow the principle of least privilege - only grant permissions actually needed.
:::

### Step 4: Generate the key

1. Review settings
2. Click **"Create"**
3. **Copy the key immediately** - it won't be shown again

![API key created](/img/placeholder-api-key.svg)
<!-- TODO: Replace with actual screenshot -->

## Managing API keys

### Viewing keys

The API keys list shows:
- Key name
- Creation date
- Last used
- Permissions
- Status (active/revoked)

### Key details

Click a key to view:
- Full configuration
- Usage statistics
- Activity log

### Editing keys

You can modify:
- Name and description
- Permissions (may require regeneration)
- Expiration date

You cannot modify:
- The key value itself
- Creation date

### Revoking keys

To disable a key:

1. Find the key in the list
2. Click **"Revoke"** or the menu → Revoke
3. Confirm the action

**Effects of revoking:**
- Key immediately stops working
- API calls with this key will fail
- Cannot be undone (create a new key instead)

### Deleting keys

To permanently remove a key:

1. Find the key in the list
2. Click **"Delete"** or menu → Delete
3. Confirm deletion

## API key security

### Best practices

1. **Never share keys publicly**
   - Don't commit to version control
   - Don't share in public forums
   - Use environment variables

2. **Use separate keys for different purposes**
   - Development vs production
   - Different applications
   - Different team members

3. **Set expiration dates**
   - Rotate keys regularly
   - Automatically expire unused keys

4. **Limit permissions**
   - Only grant what's needed
   - Use read-only when possible

5. **Monitor usage**
   - Review activity logs
   - Watch for unusual patterns
   - Set up usage alerts

### Storing keys safely

**Do:**
- Store in environment variables
- Use secrets management systems
- Encrypt at rest

**Don't:**
- Hard-code in source code
- Store in plain text files
- Share via email or chat

### If a key is compromised

1. **Revoke immediately** - Disable the key
2. **Create new key** - Generate replacement
3. **Update applications** - Deploy new key
4. **Review logs** - Check for unauthorized use
5. **Investigate** - Determine how it was exposed

## Rate limits

API keys have usage limits:

<!-- TODO: Confirm actual rate limits -->

| Tier | Requests/minute | Requests/day |
|------|-----------------|--------------|
| Free | 60 | 10,000 |
| Standard | 300 | 100,000 |
| Premium | 1,000 | Unlimited |

### Handling rate limits

When limits are exceeded:
- API returns 429 status code
- Retry-After header indicates wait time
- Implement exponential backoff

## Using API keys

### Authentication

Include the API key in requests:

**Header method (recommended):**
```
Authorization: Bearer YOUR_API_KEY
```

**Query parameter method:**
```
?api_key=YOUR_API_KEY
```

### Example request

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://api.grillo.io/v1/sensors
```

[Full API documentation →](/api)

## Troubleshooting

### Key not working

1. Verify key is not revoked
2. Check key permissions
3. Verify correct header format
4. Check for typos
5. Ensure key hasn't expired

### Permission denied errors

1. Check key has required permission
2. Verify resource is in your organization
3. Review API documentation for required permissions

### Rate limit errors

1. Reduce request frequency
2. Implement caching
3. Use batch endpoints
4. Upgrade tier if needed

## Related guides

- [API overview](/api)
- [API authentication](/api/authentication)
- [Webhooks](/api/webhooks)
