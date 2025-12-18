---
sidebar_position: 3
title: Managing Members
---

# Managing Members

Learn how to invite users, manage roles, and control access to your organization.

## Viewing members

To see current organization members:

1. Navigate to your organization
2. Click **"Members"** or **"Team"** in the sidebar
3. View the member list with:
   - Name and email
   - Role
   - Join date
   - Status (active/pending)

![Member list](/img/placeholder-member-list.svg)
<!-- TODO: Replace with actual screenshot -->

## Inviting members

### Sending an invitation

1. Navigate to the Members section
2. Click **"Invite member"** or **"Add member"**
3. Enter the person's email address
4. Select their role (see [User Roles](/dashboard/organizations/user-roles))
5. Click **"Send invitation"**

![Invite member](/img/placeholder-invite-member.svg)
<!-- TODO: Replace with actual screenshot -->

### Invitation process

1. The invitee receives an email with an invitation link
2. They click the link and sign in (or create an account)
3. They're automatically added to your organization
4. Their status changes from "Pending" to "Active"

### Invitation expiration

<!-- TODO: Confirm expiration time -->
- Invitations expire after 7 days
- You can resend expired invitations
- The invitee can request a new invitation

### Bulk invitations

To invite multiple people at once:

1. Click **"Invite member"**
2. Look for **"Bulk invite"** or **"Import"** option
3. Enter multiple email addresses (one per line)
4. Select the role for all invitees
5. Send invitations

## Changing member roles

### Who can change roles?

- **Owners** can change anyone's role
- **Admins** can change roles of Members and Viewers
- Members and Viewers cannot change roles

### How to change a role

1. Navigate to the Members section
2. Find the member you want to update
3. Click on their current role
4. Select the new role from the dropdown
5. Confirm the change

### Role change considerations

| Change | Notes |
|--------|-------|
| Promoting to Admin | Gives significant permissions |
| Demoting from Admin | User loses management capabilities |
| Promoting to Owner | Requires current owner action |
| Any change | Takes effect immediately |

## Removing members

### How to remove a member

1. Navigate to the Members section
2. Find the member to remove
3. Click the menu (⋮) or **"Remove"** button
4. Confirm the removal

### What happens when removed

- User immediately loses access to the organization
- They're removed from all networks in the organization
- Their past actions remain in audit logs
- They can be re-invited later if needed

### Cannot remove yourself

If you're the only owner:
- You cannot remove yourself
- Transfer ownership first, or
- Delete the organization

## Pending invitations

### Viewing pending invitations

1. Navigate to the Members section
2. Look for "Pending" filter or tab
3. See all outstanding invitations

### Resending invitations

1. Find the pending invitation
2. Click **"Resend"**
3. A new email will be sent

### Canceling invitations

1. Find the pending invitation
2. Click **"Cancel"** or **"Revoke"**
3. The invitation link will no longer work

## Member permissions summary

| Action | Owner | Admin | Member | Viewer |
|--------|-------|-------|--------|--------|
| View members | Yes | Yes | Yes | Yes |
| Invite members | Yes | Yes | No | No |
| Change roles | Yes | Limited | No | No |
| Remove members | Yes | Yes | No | No |
| Transfer ownership | Yes | No | No | No |

[Detailed roles guide →](/dashboard/organizations/user-roles)

## Best practices

### Principle of least privilege

- Give users the minimum role they need
- Viewers for read-only access
- Members for operational tasks
- Admins for team management

### Regular audits

- Review member list periodically
- Remove inactive users
- Verify roles are appropriate
- Check pending invitations

### Onboarding new members

When adding new team members:

1. Send invitation with appropriate role
2. Share relevant documentation links
3. Brief them on the networks they'll access
4. Consider starting with Viewer role until trained

## Troubleshooting

### Invitation not received

1. Check spam/junk folder
2. Verify email address is correct
3. Resend the invitation
4. Try a different email address

### Can't change someone's role

1. Verify you have permission (Owner or Admin)
2. You cannot change roles equal to or above your own
3. Contact an Owner if you need higher permissions changed

### Removed member still has access

1. Clear their browser cache/cookies
2. Their session may need to expire
3. Check if they have multiple accounts
4. Contact support if issue persists

## Next steps

- [Understand user roles in detail](/dashboard/organizations/user-roles)
- [Create networks for your team](/dashboard/networks/creating-network)
