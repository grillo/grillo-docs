---
sidebar_position: 2
title: Creating a Network
---

# Creating a Network

This guide walks you through creating a new seismic network in Grillo Cloud.

## Prerequisites

- A Grillo Cloud account
- An organization (you must be Owner or Admin)

## Steps to create a network

### 1. Navigate to networks

1. Log into [cloud.grillo.io](https://cloud.grillo.io)
2. Select your organization
3. Click **"Networks"** in the sidebar

### 2. Start network creation

1. Click **"Create network"** or the **"+"** button
2. The network creation form will appear

![Create network](/img/screenshots/04-network-create.png)

### 3. Enter network details

| Field | Required | Description |
|-------|----------|-------------|
| Network name | Yes | Display name for your network |
| Description | No | Purpose, coverage area, or notes |
| Default location | No | Geographic center for map view |
| Timezone | No | Default timezone for data display |

#### Network name tips

- Use descriptive names
- Include location or purpose
- Keep it concise but clear

**Good examples:**
- "San Francisco Bay Area"
- "University Research Network"
- "Building Complex A"

**Avoid:**
- "Network 1" (not descriptive)
- "test" (not meaningful)

### 4. Configure optional settings

#### Default location

Setting a default location:
- Centers the map view appropriately
- Helps with geographic context
- Enter coordinates or search for a location

#### Timezone

Select the timezone for this network:
- Affects how times are displayed
- Choose the timezone where most sensors are located
- Can be overridden per user in profile settings

### 5. Create the network

1. Review your settings
2. Click **"Create network"**
3. You'll be redirected to your new network's page

## After creating a network

Your network is now ready for sensors:

### Next steps

1. **Add sensors** - [Provision and add your first sensor](/dashboard/sensors/adding-sensor)
2. **Invite team** - Ensure team members have access via [organization membership](/dashboard/organizations/managing-members)
3. **Configure settings** - Fine-tune [network settings](/dashboard/networks/network-settings)

### Empty network view

A new network will show:
- Empty map
- Empty sensor table
- Zero sensors count

This is normal - add sensors to populate the network.

## Network types

### Standard network

Default network type:
- Sensor management
- Data visualization
- Basic monitoring

### Event-enabled network

With events subscription:
- All standard features
- Automatic event detection
- Event catalog
- Alert capabilities

[Learn about Events →](/events)

## Editing network details

To edit a network after creation:

1. Navigate to the network
2. Click **"Settings"** or the gear icon
3. Modify the desired fields
4. Click **"Save"**

## Deleting a network

:::warning
Deleting a network removes all sensor associations and network data.
:::

To delete a network:

1. Navigate to network settings
2. Scroll to "Danger zone"
3. Click **"Delete network"**
4. Confirm by typing the network name
5. Click **"Permanently delete"**

**What happens when deleted:**
- Sensors are disassociated (not deleted from your account)
- Historical data may be retained per data retention policy
- Events associated with the network are retained
- Action cannot be undone

## Troubleshooting

### Can't create network

1. Verify you have Admin or Owner role
2. Check if you've reached network limits
3. Try refreshing the page
4. Contact support if issues persist

### Network name already exists

Network names must be unique within an organization:
- Add a location or number to differentiate
- Example: "Downtown Network" → "Downtown Network - Phase 2"

## Next steps

After creating your network:

1. [Add your first sensor](/dashboard/sensors/adding-sensor)
2. [Configure network settings](/dashboard/networks/network-settings)
3. [Review best practices](/dashboard/networks/network-best-practices)
