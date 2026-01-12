---
sidebar_position: 4
title: User Roles
---

# User Roles

Grillo Cloud uses three roles to manage access within an organization.

## Available roles

| Role | Description |
|------|-------------|
| **Owner** | Full control, including billing and deletion |
| **Admin** | Manage members, networks, and settings |
| **User** | Work with sensors and view data |

## Owner

The organization owner has complete control.

**Permissions:**
- All Admin permissions
- Transfer ownership to another user
- Delete the organization
- Manage billing and subscriptions

**Notes:**
- Only one owner per organization
- Usually the person who created the organization
- Must transfer ownership before leaving

## Admin

Administrators manage day-to-day operations.

**Permissions:**
- All User permissions
- Invite and remove members
- Change member roles (except Owner)
- Create and delete networks
- Modify network and organization settings

## User

Regular users work with sensors and data.

**Permissions:**
- View all sensors and networks
- Add and configure sensors
- View and export data
- View events (if enabled)

**Restrictions:**
- Cannot manage other users
- Cannot create or delete networks

## Permission matrix

| Permission | Owner | Admin | User |
|------------|-------|-------|------|
| View sensors and data | Yes | Yes | Yes |
| Add/configure sensors | Yes | Yes | Yes |
| Export data | Yes | Yes | Yes |
| Create networks | Yes | Yes | No |
| Delete networks | Yes | Yes | No |
| Invite members | Yes | Yes | No |
| Remove members | Yes | Yes | No |
| Change roles | Yes | Yes | No |
| Organization settings | Yes | Yes | No |
| Transfer ownership | Yes | No | No |
| Delete organization | Yes | No | No |
| Manage billing | Yes | No | No |

## Assigning roles

### During invitation

1. Click **"Invite member"**
2. Enter email address
3. Select role (Admin or User)
4. Send invitation

### Changing roles

1. Navigate to Members section
2. Find the user
3. Click their current role
4. Select new role

Changes take effect immediately.

## Related guides

- [Managing members](/dashboard/organizations/managing-members)
- [Creating an organization](/dashboard/organizations/creating-org)
