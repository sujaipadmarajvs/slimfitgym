# Sky Gym Website

A luxury single-page website for Sky Gym fitness center in Alappuzha, Kerala. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive across all devices
- **Modern Animations**: Smooth scroll animations and micro-interactions
- **Interactive Gallery**: Auto-playing slideshow with manual controls
- **Testimonials Carousel**: Rotating customer reviews with Google branding
- **Contact Integration**: Direct links to phone, WhatsApp, and email
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Performance Optimized**: Lazy loading, preloading, and optimized images

## Sections

1. **Hero Section**: Video background with animated tagline and location markers
2. **Exclusive Launch Offers**: Call-to-action section
3. **About Us**: Detailed gym description with images
4. **Gym Highlights**: Key features and benefits
5. **Gallery**: Auto-playing image slideshow
6. **Trainers**: Expert trainer profiles
7. **Testimonials**: Customer reviews with ratings
8. **Contact**: Complete contact information with embedded map

## Easy Content Editing

All editable content is centralized in `config.json`:

- Phone numbers
- Email addresses
- Social media links
- Gym locations
- Working hours
- Gallery images
- About text

## Deployment Instructions

### For cPanel Hosting:

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload files**:
   - Upload all files from the `dist` folder to your cPanel public_html directory
   - Ensure `gymlogo.png` is in the root directory

3. **Configure Node.js** (if using Node.js hosting):
   - Set the startup file to `server.js`
   - Install dependencies: `npm install`

### For Static Hosting:

1. Build the project: `npm run build`
2. Upload the `dist` folder contents to your web server
3. Ensure proper MIME types are configured for video files

## Customization

### Changing Colors:
Edit the color scheme in `tailwind.config.js`:
```javascript
colors: {
  'sky-yellow': '#fbbf24',
  'sky-red': '#dc2626',
  'sky-black': '#000000',
}
```

### Updating Content:
Edit `config.json` to update:
- Contact information
- Gym details
- Gallery images
- Social media links

### Adding New Images:
1. Add image URLs to the `config.json` file
2. Ensure images are optimized for web (WebP format recommended)
3. Use consistent aspect ratios for gallery images

## Performance Tips

- Images are loaded from Pexels CDN for optimal performance
- All animations use CSS transforms for smooth performance
- Intersection Observer API is used for scroll-triggered animations
- Critical resources are preloaded in the HTML head

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Dependencies

- React 18.3.1
- TypeScript 5.5.3
- Tailwind CSS 3.4.1
- Lucide React (for icons)
- Vite (build tool)

## Contact Information

For technical support or customization requests, contact the development team.

---

**Note**: This website is optimized for the Sky Gym brand with black, red, and yellow color scheme. All contact information and business details are specific to Sky Gym locations in Alappuzha, Kerala.