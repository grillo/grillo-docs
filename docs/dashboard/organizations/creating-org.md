---
sidebar_position: 2
title: Creating an Organization
---

# Creating an Organization

This guide walks you through creating a new organization in Grillo Cloud.

## Prerequisites

- A Grillo Cloud account ([create one here](/dashboard/account/creating-account))

## Steps to create an organization

### 1. Access the organization menu

1. Log into [cloud.grillo.io](https://cloud.grillo.io)
2. Click on the organization dropdown in the top navigation
3. Select **"Create new organization"**

![Create organization](/img/screenshots/12-organization-edit.png)

### 2. Enter organization details

Fill in the required information:

| Field | Required | Description |
|-------|----------|-------------|
| Organization name | Yes | Display name for your organization |
| Description | No | Brief description of the organization's purpose |
| Website | No | Your organization's website URL |

#### Organization name tips

- Keep it short but descriptive
- Use your company or team name
- Include location if you have multiple branches
- Examples:
  - "Grillo Research"
  - "University of California Seismic Lab"
  - "City of Mexico EEW Network"

### 3. Confirm creation

1. Review the entered information
2. Click **"Create organization"**
3. You'll be redirected to your new organization

## After creating

You are automatically the **Owner** of organizations you create. As owner, you can:

### Immediately do

1. **Invite team members** - [Add members to your organization](/dashboard/organizations/managing-members)
2. **Create networks** - [Set up your first seismic network](/dashboard/networks/creating-network)
3. **Configure settings** - Adjust organization preferences

### Your owner permissions

As the organization owner, you have full access to:

- All organization settings
- Member management (invite, remove, change roles)
- Network creation and deletion
- Billing and subscription (if applicable)
- Organization deletion

## Organization limits

<!-- TODO: Confirm actual limits -->

| Resource | Free tier | Paid plans |
|----------|-----------|------------|
| Networks per org | TBD | TBD |
| Members per org | TBD | TBD |
| Sensors per network | TBD | TBD |

## Transferring ownership

If you need to transfer organization ownership:

1. Ensure the new owner is already a member
2. Navigate to organization settings
3. Find "Transfer ownership" option
4. Select the new owner
5. Confirm the transfer

:::warning
Transferring ownership cannot be undone. Make sure you select the correct person.
:::

## Deleting an organization

Only owners can delete an organization:

1. Navigate to organization settings
2. Scroll to "Danger zone"
3. Click **"Delete organization"**
4. Confirm by typing the organization name
5. Click **"Permanently delete"**

:::danger
Deleting an organization:
- Removes all networks within the organization
- Removes all sensor data
- Removes all member access
- **Cannot be undone**
:::

## Troubleshooting

### "Organization name already taken"

Organization names must be unique. Try:
- Adding your location (e.g., "Research Lab - NYC")
- Adding a descriptor (e.g., "ACME Seismic Division")

### Can't create organization

1. Verify you're logged in
2. Check if you've reached organization limits
3. Try refreshing the page
4. Contact support if issues persist

## Next steps

After creating your organization:

1. [Invite team members](/dashboard/organizations/managing-members)
2. [Create your first network](/dashboard/networks/creating-network)
3. [Add your sensors](/dashboard/sensors/adding-sensor)
