# Public Assets

This folder contains static assets that are served directly by Remix.

## Images

Place your branding images in the `/images` folder:
- Logo files
- Character artwork
- Background images
- Icons

## Usage

Reference images in your code using absolute paths from the public folder:

```tsx
// In JSX/TSX files
<img src="/images/logo.png" alt="Galea Gaming" />

// Or in CSS
background-image: url('/images/hero-background.jpg');
```

## File Organization

```
public/
├── images/         # All image assets
│   ├── logo.png
│   ├── hero.jpg
│   └── icons/
├── fonts/          # Custom fonts (if needed)
└── favicon.ico     # Site favicon
```

## Notes

- Files in this folder are served as-is
- No processing or optimization by default
- Use descriptive filenames
- Consider using WebP format for better compression
- Keep file sizes reasonable for web performance
