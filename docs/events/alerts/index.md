---
sidebar_position: 1
title: Alerts Overview
---

# Event Alerts

Configure real-time notifications when earthquakes are detected by your network.

## Alert overview

The alert system:
- Monitors for new events continuously
- Evaluates events against your criteria
- Sends notifications via configured channels
- Operates 24/7 automatically

## Alert flow

```
Event Detected → Criteria Check → Alert Triggered → Delivery
```

1. **Detection** - System detects an earthquake
2. **Evaluation** - Event checked against your alert rules
3. **Trigger** - If criteria met, alert is generated
4. **Delivery** - Notifications sent to configured channels

## Alert channels

### Email

Receive event alerts via email:
- Immediate delivery
- Full event details
- Links to dashboard

### Webhook

Receive events via HTTP POST:
- Real-time delivery
- Machine-readable format
- Integration with your systems

[Webhook setup →](/events/alerts/api-integration)

### Dashboard

In-app notifications:
- Bell icon alerts
- Event banners
- Sound notifications (optional)

### SMS

<!-- TODO: Confirm if SMS is available -->

Text message alerts:
- Brief event summary
- Immediate delivery
- Phone number required

## Configuring alerts

### Access alert settings

1. Navigate to your network
2. Click **"Settings"** → **"Alerts"**
3. Or **"Events"** → **"Alert Configuration"**

### Basic configuration

1. **Enable alerts** - Toggle alerting on
2. **Set channels** - Choose how to receive alerts
3. **Set criteria** - Define what triggers alerts
4. **Save** - Activate your configuration

## Alert criteria

### Magnitude threshold

Only alert for events above a certain size:

| Threshold | Typical use |
|-----------|-------------|
| M2.0+ | Research, complete catalog |
| M3.0+ | Felt events, general monitoring |
| M4.0+ | Significant events |
| M5.0+ | Potentially damaging events |

### Geographic filter

Alert only for events in specific areas:
- Draw polygon on map
- Define by coordinates
- Named regions

### Distance filter

Alert based on distance from a point:
- Distance from city center
- Distance from facility
- Custom reference point

### Confidence threshold

Alert based on solution quality:
- Minimum stations required
- Maximum uncertainty allowed
- Reviewed events only

## Alert rules

Create multiple rules for different scenarios:

**Example rules:**

| Rule | Criteria | Channel |
|------|----------|---------|
| All events | M2.0+, Any location | Dashboard |
| Felt events | M3.5+, Within 100km | Email |
| Significant | M5.0+, Any location | Webhook, Email, SMS |

### Rule priority

Rules are evaluated in order:
- First matching rule triggers
- Or all matching rules trigger (configurable)

## Testing alerts

### Test alert button

Send a test notification:
1. Go to Alert Configuration
2. Click **"Send Test Alert"**
3. Select channel
4. Verify delivery

### Using historical events

Test with past events:
1. Find event in catalog
2. Click **"Simulate Alert"**
3. Verify notification received

## Alert templates

Customize alert content:

### Email template

- Subject line format
- Body content
- Included parameters
- Footer/signature

### Webhook payload

- JSON structure
- Included fields
- Custom headers

## Alert history

View past alerts:
- When alerts were sent
- What triggered them
- Delivery status
- Click to view event

## Best practices

### Avoid alert fatigue

- Set appropriate thresholds
- Start with higher thresholds, adjust down
- Use different channels for different severities

### Ensure delivery

- Test all channels periodically
- Have backup channels
- Monitor for failures

### Respond appropriately

- Define response procedures
- Train recipients
- Document actions taken

## Troubleshooting

### Alerts not received

1. Check alert configuration is enabled
2. Verify channel settings (email, webhook URL)
3. Check spam folders (email)
4. Verify event meets criteria
5. Review alert history

### Too many alerts

1. Raise magnitude threshold
2. Narrow geographic filter
3. Require more stations
4. Use digest mode

### Delayed alerts

1. Check network connectivity
2. Verify webhook endpoint responding
3. Review system status
4. Contact support if persistent

## Related guides

- [Alert configuration](/events/alerts/alert-configuration)
- [API integration](/events/alerts/api-integration)
- [Notification settings](/dashboard/settings/notifications)
