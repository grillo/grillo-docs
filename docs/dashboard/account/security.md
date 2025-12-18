---
sidebar_position: 4
title: Security
---

# Security Settings

Protect your Grillo Cloud account with strong security settings.

## Accessing security settings

1. Log into [cloud.grillo.io](https://cloud.grillo.io)
2. Click on your profile icon in the top right
3. Select **"Security"** or navigate to Profile > Security

## Password management

### Changing your password

If you signed up with email (not Google/Microsoft):

1. Navigate to Security settings
2. Click **"Change password"**
3. Enter your current password
4. Enter your new password
5. Confirm your new password
6. Click **"Update password"**

### Password requirements

<!-- TODO: Confirm actual requirements -->

Your password must have:
- At least 8 characters
- One uppercase letter (A-Z)
- One lowercase letter (a-z)
- One number (0-9)
- One special character (!@#$%^&*)

### Password tips

- Use a unique password not used on other sites
- Consider using a password manager
- Don't share your password with others
- Change it if you suspect it's been compromised

### Forgot your password?

1. Go to [cloud.grillo.io](https://cloud.grillo.io)
2. Click **"Sign in"**
3. Click **"Forgot password?"**
4. Enter your email address
5. Check your email for reset link
6. Click the link and create a new password

## Two-factor authentication (2FA)

<!-- TODO: Confirm if 2FA is available -->

Add an extra layer of security to your account.

### What is 2FA?

Two-factor authentication requires:
1. Your password (something you know)
2. A code from your phone (something you have)

Even if someone gets your password, they can't access your account without your phone.

### Setting up 2FA

1. Navigate to Security settings
2. Find "Two-factor authentication" section
3. Click **"Enable 2FA"**
4. Choose your method:
   - Authenticator app (recommended)
   - SMS (if available)
5. Follow the setup instructions

### Using an authenticator app

Recommended apps:
- Google Authenticator
- Microsoft Authenticator
- Authy
- 1Password

Setup steps:
1. Install the app on your phone
2. Scan the QR code shown in Grillo dashboard
3. Enter the 6-digit code from the app
4. Save your backup codes securely

### Backup codes

When you enable 2FA, you'll receive backup codes:
- Save these in a secure location
- Use them if you lose access to your phone
- Each code can only be used once
- Generate new codes if you run out

### Disabling 2FA

1. Navigate to Security settings
2. Find "Two-factor authentication" section
3. Click **"Disable 2FA"**
4. Enter your password to confirm
5. Enter a 2FA code or backup code
6. 2FA will be removed from your account

:::warning
Disabling 2FA reduces your account security. Only do this if necessary.
:::

## Active sessions

Monitor and manage where you're logged in.

### Viewing sessions

1. Navigate to Security settings
2. Find "Active sessions" section
3. View all current sessions:
   - Device type and browser
   - Approximate location
   - IP address
   - Last active time

### Suspicious session?

If you see a session you don't recognize:

1. Click **"Sign out"** next to that session
2. Change your password immediately
3. Enable 2FA if not already enabled
4. Review your account activity

### Sign out everywhere

To terminate all sessions:

1. Click **"Sign out of all devices"**
2. Confirm the action
3. You'll be signed out everywhere
4. Sign back in with your password

## Login history

<!-- TODO: Confirm if login history is available -->

Review recent login activity:

1. Navigate to Security settings
2. Find "Login history" section
3. View recent logins:
   - Date and time
   - Location
   - Device/browser
   - Success or failure

### Suspicious activity indicators

Watch for:
- Logins from unfamiliar locations
- Logins from unknown devices
- Multiple failed login attempts
- Logins at unusual times

## Security notifications

Get alerted about security events:

| Event | Notification |
|-------|--------------|
| New login | Email when you log in from new device |
| Password change | Confirmation email |
| 2FA changes | Confirmation email |
| Failed login attempts | Alert after multiple failures |

To configure:
1. Navigate to Security settings
2. Adjust notification preferences
3. Save changes

## Account recovery

### Recovery email

Set up a recovery email in case you lose access:

1. Navigate to Security settings
2. Find "Recovery options" section
3. Add a secondary email address
4. Verify the email

### Connected accounts

Having multiple sign-in methods provides recovery options:

- If you forget your password, use Google/Microsoft
- If you lose access to Google/Microsoft, use email/password

## Best practices

### Do

- Use a strong, unique password
- Enable two-factor authentication
- Review active sessions regularly
- Keep recovery options up to date
- Sign out from shared/public computers

### Don't

- Share your password with anyone
- Use the same password on multiple sites
- Leave sessions active on untrusted devices
- Ignore security alerts
- Click links in suspicious emails

## If your account is compromised

If you suspect unauthorized access:

1. **Change your password immediately**
2. **Sign out of all sessions**
3. **Enable 2FA** if not already enabled
4. **Review account activity** for unauthorized changes
5. **Check connected services** for unauthorized access
6. **Contact support** if you need help

## Next steps

- [Configure profile settings](/dashboard/account/profile-settings)
- [Set up notifications](/dashboard/settings/notifications)
