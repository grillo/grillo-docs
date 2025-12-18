---
sidebar_position: 4
title: User Roles
---

# User Roles

Grillo Cloud uses role-based access control to manage what users can do within an organization.

## Available roles

<!-- TODO: Confirm exact role names and permissions -->

| Role | Description |
|------|-------------|
| **Owner** | Full control over the organization |
| **Admin** | Manage members, networks, and settings |
| **Member** | Work with sensors and data |
| **Viewer** | Read-only access |

## Role hierarchy

```
Owner (highest)
  ↓
Admin
  ↓
Member
  ↓
Viewer (lowest)
```

Higher roles include all permissions of lower roles.

## Owner

The organization owner has complete control.

### Permissions

- All Admin permissions, plus:
- Transfer ownership to another user
- Delete the organization
- Manage billing and subscriptions
- Access all organization settings

### Restrictions

- Only one owner per organization
- Cannot be removed (must transfer ownership first)
- Cannot demote self without transferring ownership

### When to use

- The person ultimately responsible for the organization
- Usually the organization creator
- Typically a manager or department head

## Admin

Administrators can manage the organization's day-to-day operations.

### Permissions

- All Member permissions, plus:
- Invite and remove members
- Change member roles (except Owner)
- Create and delete networks
- Modify network settings
- Access organization settings

### Restrictions

- Cannot transfer ownership
- Cannot delete the organization
- Cannot change Owner's role

### When to use

- Team leads or managers
- IT administrators
- Trusted senior team members

## Member

Members can perform operational tasks with sensors and data.

### Permissions

- All Viewer permissions, plus:
- Add sensors to networks
- Configure sensor settings
- Update sensor metadata
- Export data
- Create and manage alerts (if enabled)

### Restrictions

- Cannot manage other users
- Cannot create or delete networks
- Cannot access organization settings

### When to use

- Field technicians
- Operations staff
- Researchers working with data
- Regular team members

## Viewer

Viewers have read-only access to the organization.

### Permissions

- View sensor list and status
- View sensor data and waveforms
- View network information
- View map and table displays
- View events (if enabled)

### Restrictions

- Cannot modify any settings
- Cannot add or configure sensors
- Cannot manage networks
- Cannot export data (typically)

### When to use

- Stakeholders who need visibility
- External partners
- Auditors or reviewers
- New team members in training

## Permission matrix

### Organization management

| Permission | Owner | Admin | Member | Viewer |
|------------|-------|-------|--------|--------|
| View organization info | Yes | Yes | Yes | Yes |
| Edit organization info | Yes | Yes | No | No |
| Delete organization | Yes | No | No | No |
| Manage billing | Yes | No | No | No |

### Member management

| Permission | Owner | Admin | Member | Viewer |
|------------|-------|-------|--------|--------|
| View members | Yes | Yes | Yes | Yes |
| Invite members | Yes | Yes | No | No |
| Remove members | Yes | Yes | No | No |
| Change to Viewer | Yes | Yes | No | No |
| Change to Member | Yes | Yes | No | No |
| Change to Admin | Yes | No | No | No |
| Transfer ownership | Yes | No | No | No |

### Network management

| Permission | Owner | Admin | Member | Viewer |
|------------|-------|-------|--------|--------|
| View networks | Yes | Yes | Yes | Yes |
| Create networks | Yes | Yes | No | No |
| Edit networks | Yes | Yes | No | No |
| Delete networks | Yes | Yes | No | No |

### Sensor management

| Permission | Owner | Admin | Member | Viewer |
|------------|-------|-------|--------|--------|
| View sensors | Yes | Yes | Yes | Yes |
| View sensor data | Yes | Yes | Yes | Yes |
| Add sensors | Yes | Yes | Yes | No |
| Configure sensors | Yes | Yes | Yes | No |
| Remove sensors | Yes | Yes | Yes | No |
| Export data | Yes | Yes | Yes | No |

### Events & alerts

| Permission | Owner | Admin | Member | Viewer |
|------------|-------|-------|--------|--------|
| View events | Yes | Yes | Yes | Yes |
| Configure alerts | Yes | Yes | Yes | No |
| Manage API keys | Yes | Yes | No | No |

## Assigning roles

### During invitation

1. Click **"Invite member"**
2. Enter email address
3. Select role from dropdown
4. Send invitation

The role is assigned when the invitation is accepted.

### Changing existing roles

1. Navigate to Members section
2. Find the user
3. Click their current role
4. Select new role

Changes take effect immediately.

## Best practices

### Start with minimal access

- Default to Viewer for new users
- Promote after training and verification
- Document role changes

### Regular role audits

- Review roles quarterly
- Remove unnecessary elevated access
- Align with organizational changes

### Role documentation

Consider creating internal documentation for:
- Which roles your team uses
- Criteria for each role level
- Approval process for role changes

## Role-based workflows

### New employee onboarding

1. Invite as Viewer
2. Allow familiarization with dashboard
3. Promote to Member after training
4. Promote to Admin only if needed

### External collaborator access

1. Create account with Viewer role
2. Limited time access
3. Regular review of continued need
4. Remove when project ends

### Contractor or temporary access

1. Use Viewer or Member role
2. Set calendar reminder for review
3. Remove access when contract ends

## Troubleshooting

### "You don't have permission"

The user's role doesn't allow the action. Solutions:
- Contact an Admin or Owner for role upgrade
- Ask someone with appropriate role to perform the action

### Can't change someone to Owner

- Only the current Owner can transfer ownership
- Contact the Owner to request this change

### Role change not taking effect

- User may need to refresh their browser
- User may need to sign out and sign in
- Session cache may need to clear

## Next steps

- [Manage organization members](/dashboard/organizations/managing-members)
- [Create your first network](/dashboard/networks/creating-network)
