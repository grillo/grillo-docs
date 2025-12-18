---
sidebar_position: 1
title: Organizations
---

# Organizations

Organizations in Grillo Cloud help you manage teams, control access, and organize multiple seismic networks.

## What is an organization?

An organization is a container for:
- **Networks** - Your seismic monitoring networks
- **Members** - Users who can access the organization
- **Settings** - Organization-wide configurations

Think of an organization as your company, research group, or team.

## Organization hierarchy

```
Organization
├── Members (users with various roles)
├── Networks
│   ├── Network A
│   │   ├── Sensor 1
│   │   ├── Sensor 2
│   │   └── ...
│   └── Network B
│       └── ...
└── Settings
```

## Creating an organization

To create a new organization:

1. Log into [cloud.grillo.io](https://cloud.grillo.io)
2. Click on the organization dropdown in the navigation
3. Select **"Create organization"**
4. Enter organization details:
   - Organization name
   - Description (optional)
5. Click **"Create"**

[Detailed guide →](/dashboard/organizations/creating-org)

## Joining an organization

To join an existing organization, you need an invitation from an admin:

1. Receive invitation email from the organization
2. Click the invitation link
3. Sign in or create an account
4. You'll be added to the organization

[Learn about accepting invites →](/dashboard/account/accepting-invites)

## Organization roles

Different roles have different permissions:

| Role | Description |
|------|-------------|
| **Owner** | Full control, billing, can delete organization |
| **Admin** | Manage members and networks, most settings |
| **Member** | Work with sensors and data, limited settings |
| **Viewer** | View-only access to data and sensors |

[Detailed roles guide →](/dashboard/organizations/user-roles)

## Managing multiple organizations

You can belong to multiple organizations:

### Switching organizations

1. Click the organization name in the navigation
2. Select the organization you want to view
3. The dashboard will switch to that organization's context

### Organization context

When you switch organizations:
- You see that organization's networks
- You see that organization's sensors
- Your permissions may differ between organizations

## Organization settings

Access organization settings to:
- Update organization name and details
- Manage billing (owners only)
- Configure organization-wide preferences
- View audit logs

## Guides in this section

- [Creating an organization](/dashboard/organizations/creating-org)
- [Managing members](/dashboard/organizations/managing-members)
- [User roles](/dashboard/organizations/user-roles)

## Best practices

### Organization naming

- Use a clear, recognizable name
- Include location or purpose if you have multiple
- Examples: "ACME Research Lab", "City of Springfield EEW"

### Single vs multiple organizations

**Use one organization when:**
- All networks are managed by the same team
- Users need access to all networks
- Centralized billing is preferred

**Use multiple organizations when:**
- Different teams manage different networks
- You need to separate billing
- Access should be strictly compartmentalized
