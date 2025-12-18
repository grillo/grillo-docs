---
sidebar_position: 2
title: Alert Configuration
---

# Alert Configuration

Step-by-step guide to configuring event alerts for your seismic network.

## Accessing alert configuration

1. Log into [cloud.grillo.io](https://cloud.grillo.io)
2. Select your organization and network
3. Navigate to **Settings** → **Alerts**

## Creating an alert rule

### Step 1: Start new rule

1. Click **"Create Alert Rule"** or **"+"**
2. The rule configuration form opens

### Step 2: Name your rule

Give the rule a descriptive name:
- "Felt Events - Email"
- "All Events - Webhook"
- "Emergency Alert - M5+"

### Step 3: Set magnitude criteria

Configure magnitude threshold:

1. Enable **"Magnitude filter"**
2. Set **minimum magnitude** (e.g., 3.0)
3. Optionally set **maximum magnitude**

Example configurations:
| Use case | Min Mag | Max Mag |
|----------|---------|---------|
| All felt events | 3.0 | - |
| Moderate only | 4.0 | 5.9 |
| Major events | 6.0 | - |

### Step 4: Set location criteria

Configure geographic filter:

**Option A: Radius from point**
1. Enable **"Distance filter"**
2. Set center point (lat/long or search)
3. Set radius in km

**Option B: Geographic area**
1. Enable **"Area filter"**
2. Draw polygon on map
3. Or enter coordinates

**Option C: Named region**
<!-- TODO: Confirm if named regions are available -->
1. Enable **"Region filter"**
2. Select from predefined regions

### Step 5: Set quality criteria

Optionally filter by solution quality:

| Criterion | Purpose |
|-----------|---------|
| Min stations | Require more stations for trigger |
| Max uncertainty | Reject poorly located events |
| Status | Only reviewed events |

### Step 6: Configure channels

Choose how alerts are delivered:

**Email**
1. Enable **"Email"**
2. Enter recipient addresses
3. Configure email template (optional)

**Webhook**
1. Enable **"Webhook"**
2. Enter webhook URL
3. Configure payload format
4. Set authentication (optional)

**Dashboard**
1. Enable **"Dashboard notification"**
2. Configure sound (optional)

### Step 7: Set schedule

Configure when the rule is active:

**Always active:**
- Alerts sent 24/7

**Scheduled:**
- Set active hours
- Set active days
- Useful for business hours only

### Step 8: Save and enable

1. Review all settings
2. Click **"Save Rule"**
3. Toggle **"Enabled"** to activate

## Managing alert rules

### Viewing rules

The alert rules list shows:
- Rule name
- Criteria summary
- Channels configured
- Status (enabled/disabled)
- Last triggered

### Editing rules

1. Click on a rule
2. Modify settings
3. Save changes

Changes take effect immediately.

### Enabling/Disabling

Toggle rules on/off without deleting:
- Click the enable/disable toggle
- Disabled rules don't trigger
- Configuration is preserved

### Deleting rules

1. Click the rule's menu (⋮)
2. Select **"Delete"**
3. Confirm deletion

:::warning
Deleted rules cannot be recovered. Consider disabling instead.
:::

## Email alert configuration

### Recipient management

Add multiple recipients:
1. Enter email address
2. Click **"Add"**
3. Repeat for additional recipients

Remove recipients:
1. Click **"X"** next to address
2. Save changes

### Email content

Default email includes:
- Event summary (magnitude, location, time)
- Map image
- Link to dashboard

Custom template (if available):
- Modify subject line
- Customize body content
- Add organization branding

## Webhook configuration

### Webhook URL

Enter the endpoint to receive events:
```
https://your-server.com/api/grillo-events
```

Requirements:
- HTTPS recommended
- Must respond within timeout
- Return 2xx for success

### Authentication

**API key:**
```
Header: X-API-Key: your-key
```

**Bearer token:**
```
Header: Authorization: Bearer your-token
```

### Payload format

Default JSON payload:
```json
{
  "event_id": "evt_123456",
  "time": "2024-01-15T14:32:45Z",
  "latitude": 37.7749,
  "longitude": -122.4194,
  "depth_km": 8.5,
  "magnitude": 4.2,
  "magnitude_type": "ML",
  "location_description": "5 km NE of City"
}
```

[Full webhook documentation →](/events/alerts/api-integration)

### Retry behavior

Failed webhook deliveries:
- Retry up to 3 times
- Exponential backoff
- Failures logged

## Testing your configuration

### Test alert

1. Open alert rule
2. Click **"Send Test"**
3. Select channel
4. Verify receipt

### Using historical events

1. Find event in catalog
2. Click **"Test Alert Rules"**
3. See which rules would trigger
4. Send test to channels

### Verify webhook

1. Use a webhook testing service
2. Or check your server logs
3. Verify payload received correctly

## Best practices

### Start conservative

Begin with:
- Higher magnitude thresholds
- Broader geographic filters
- Fewer channels

Then adjust based on experience.

### Test thoroughly

Before relying on alerts:
- Test each channel
- Test with real events
- Verify recipient delivery
- Document expected behavior

### Have redundancy

For critical alerts:
- Multiple channels (email + webhook)
- Multiple recipients
- Backup notification systems

### Monitor alert health

Regularly check:
- Are alerts being received?
- Are all channels working?
- Any delivery failures?

## Troubleshooting

### Rule not triggering

1. Check rule is enabled
2. Verify criteria match event
3. Check schedule if configured
4. Review alert history

### Wrong events triggering

1. Review criteria settings
2. Check magnitude threshold
3. Verify geographic filter
4. Tighten criteria

### Delivery failures

**Email:**
- Check spam folders
- Verify email addresses
- Contact support

**Webhook:**
- Check endpoint is accessible
- Verify authentication
- Check server logs
- Review payload format

## Related guides

- [API integration](/events/alerts/api-integration)
- [Notification settings](/dashboard/settings/notifications)
