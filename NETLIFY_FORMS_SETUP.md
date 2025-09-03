# Netlify Forms Setup Guide

## Overview
Your website now has **2 types of forms** integrated with Netlify Forms:

1. **Main Contact Form** (`name="contact"`) - Located on contact.html
2. **Newsletter/Get In Touch Form** (`name="newsletter"`) - Located in footer of all pages

## What's Been Updated

### Files Updated:
- ✅ `contact.html` - Main contact form + footer newsletter form
- ✅ `index.html` - Footer newsletter form
- ✅ `service-details.html` - Footer newsletter form
- ✅ `team.html` - Footer newsletter form
- ✅ `blogs.html` - Footer newsletter form
- ✅ `blog-details.html` - Footer newsletter form
- ✅ `privacy-policy.html` - Footer newsletter form
- ✅ `terms-of-service.html` - Footer newsletter form
- ✅ `Nihal_details.html` - Footer newsletter form
- ✅ `Rohith K_details.html` - Footer newsletter form
- ✅ `Shreyas_details.html` - Footer newsletter form
- ✅ `Likitha N_details.html` - Footer newsletter form
- ✅ `thank-you.html` - New custom success page

### Form Changes:
- Added `data-netlify="true"` to enable form processing
- Added `method="POST"` for form submission
- Added proper `name` attributes to distinguish forms
- Added `action="/thank-you.html"` for custom success page
- Fixed input types (email validation)
- Added `type="submit"` to buttons

## Deployment Instructions

### 1. Deploy to Netlify
Once you deploy your site to Netlify, the forms will be automatically detected.

### 2. Enable Form Detection (if needed)
1. Go to your Netlify dashboard
2. Navigate to **Forms**
3. Select **Enable form detection**

### 3. Access Form Submissions
After deployment, you can view all form submissions in:
- **Netlify Dashboard** → **Forms** → **Form submissions**

## Setting Up Email Notifications

### Option 1: Basic Email Notifications
1. Go to **Site Settings** → **Forms** → **Form notifications**
2. Click **Add notification**
3. Choose **Email notification**
4. Add recipient email: `contact@astriftech.com`
5. Select which forms to monitor (contact, newsletter, or both)

### Option 2: Advanced Email Integration
For automatic email responses to users, you can integrate with:
- **Zapier** (connects to Gmail, Outlook, etc.)
- **IFTTT** (If This Then That)
- **Netlify Functions** (custom serverless functions)

### Option 3: Webhook Integration
1. Go to **Forms** → **Form notifications**
2. Choose **Webhook notification**
3. Add your webhook URL (if you have external systems)

## Form Data Structure

### Contact Form (`name="contact"`)
```json
{
  "form-name": "contact",
  "name": "User's full name",
  "email": "user@example.com",
  "phone": "+91 1234567890",
  "message": "User's message content"
}
```

### Newsletter Form (`name="newsletter"`)
```json
{
  "form-name": "newsletter",
  "email": "user@example.com"
}
```

## Testing Forms

### After Deployment:
1. Visit your live website
2. Fill out the contact form on contact.html
3. Fill out the newsletter form in any page footer
4. Check your Netlify dashboard for submissions
5. Verify email notifications are working

### Pre-deployment Testing:
Forms will only work after deploying to Netlify. Local testing won't submit to Netlify's servers.

## Benefits

✅ **No Backend Required** - Netlify handles all form processing
✅ **Spam Protection** - Built-in spam filtering
✅ **Data Export** - Download submissions as CSV
✅ **Real-time Notifications** - Get instant email alerts
✅ **API Access** - Programmatic access to form data
✅ **Analytics** - Track form performance

## Monitoring & Analytics

### View Form Performance:
- **Netlify Dashboard** → **Forms** → **Usage and configuration**
- See submission counts, success rates, and storage usage

### Export Data:
- Go to individual form submissions
- Click **Export** to download CSV files
- Data includes timestamps, IP addresses, and all form fields

## Troubleshooting

### If Forms Don't Work:
1. Ensure site is deployed to Netlify
2. Check form detection is enabled
3. Verify forms have `data-netlify="true"` attribute
4. Check for JavaScript errors in browser console
5. Ensure form has proper `name` attribute

### Common Issues:
- **Form not detected**: Missing `data-netlify="true"`
- **Submissions not received**: Form detection disabled
- **Redirect not working**: Check action URL path
- **Emails not sent**: Notification settings not configured

## Next Steps

1. **Deploy your website** to Netlify
2. **Test both forms** after deployment
3. **Set up email notifications** for contact@astriftech.com
4. **Monitor submissions** in Netlify dashboard
5. **Export data regularly** for your records

---

**Need Help?** Check Netlify's documentation or contact support through your Netlify dashboard.
