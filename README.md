# Galea Gaming - Website

A Remix-based landing page for Galea Gaming featuring waiting list signup, affiliate program registration, and social media integration.

## Features

- ✅ Waiting list email signup
- ✅ Affiliate program application form with conditional fields
- ✅ Social media platform selection (Instagram, Facebook, TikTok)
- ✅ Dynamic form fields based on selected platforms
- ✅ Google Analytics integration (placeholder)
- ✅ Social media links with icons
- ✅ Responsive design with Spartan warrior theme

## Setup

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure Google Analytics:
   - Open `app/root.tsx`
   - Replace `GA_MEASUREMENT_ID` with your actual Google Analytics Measurement ID (appears twice in the file)

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Production Build

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Form Data Handling

Currently, form submissions are logged to the console. In production, you'll want to:

1. Set up a database (e.g., PostgreSQL, MongoDB, Supabase)
2. Update the `action` functions in `app/routes/_index.tsx` to save data to your database
3. Consider adding email notifications for new signups

### Example Database Integration

```typescript
// In app/routes/_index.tsx action function
if (formType === "waitlist") {
  const email = formData.get("email");
  
  // Replace console.log with database insert
  await db.waitlist.create({ email });
  
  return json({ success: true, message: "Thank you for joining!" });
}
```

## Deployment

This Remix app can be deployed to various platforms:

- **Vercel**: Connect your GitHub repo and deploy
- **Netlify**: Use Netlify CLI or GitHub integration
- **Fly.io**: `fly launch` and `fly deploy`
- **AWS/Azure**: Use their respective Node.js hosting services

## Customization

### Colors

The color scheme is defined in `app/styles.css` using CSS variables:

```css
:root {
  --color-black: #000000;
  --color-white: #FFFFFF;
  --color-red: #B83B3B;
  --color-dark-red: #5C1A1A;
  --color-pink: #FF00FF;
  --color-dark-pink: #8B2E8B;
  --color-accent: #B83B3B;
}
```

### Content

Edit `app/routes/_index.tsx` to modify:
- Hero text and descriptions
- Form labels and placeholders
- Social media links
- Footer content

## Support

For questions or issues, contact: support@galeagaming.com

## License

© 2026 Galea Gaming. All rights reserved.
