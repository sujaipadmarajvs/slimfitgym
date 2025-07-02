# Sky Gym Website - Content Editing Guide

This guide explains how to easily edit various content elements on the Sky Gym website without technical knowledge.

## 📝 Main Configuration File

All editable content is centralized in the `config.json` file located in the root directory. This makes it easy to update information without touching the code.

### 🏢 Gym Information
```json
"gym": {
  "name": "Sky Gym",
  "tagline": "Every Step is Progress",
  "phone": "7994229705",
  "email": "trainer@skygym.com",
  "whatsapp": "7994229705",
  "instagram": "https://www.instagram.com/_sky_gym_?igsh=dmpodm1uYzI4Zmt6",
  "address": "Your gym address here",
  "googleMapsUrl": "https://maps.app.goo.gl/GB5aGj7iQGcpdqzD9",
  "googleReviewsUrl": "Your Google reviews URL"
}
```

**How to edit:**
- Change phone numbers, email, social media links
- Update address and map URLs
- Modify gym name and tagline

### ⏰ Working Hours
```json
"workingHours": {
  "weekdays": "5:30 AM - 11:00 PM",
  "sunday": "OFF"
}
```

### 📍 Locations
```json
"locations": [
  {
    "name": "Sky Gym",
    "address": "Ambanakulangara, Mannanchery, Alappuzha",
    "type": "main"
  },
  {
    "name": "Sky Premium Gym", 
    "address": "Muhamma, Alappuzha",
    "type": "premium"
  }
]
```

### 📖 About Section
```json
"content": {
  "about": "Your gym description here...",
  "highlights": [
    "First 6000 SqFt Gym in Alappuzha",
    "Dedicated lady trainers for ladies",
    "5 trainers available all the time"
  ]
}
```

### 🖼️ Images
```json
"images": {
  "logo": "/gymlogo.png",
  "gallery": [
    "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg",
    "https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg"
  ]
}
```

## 🔧 Direct Code Edits (Advanced)

For elements not in config.json, you'll need to edit the `src/App.tsx` file:

### 👥 Testimonials
Located around line 15-50 in App.tsx:
```javascript
const testimonials = [
  {
    name: "Customer Name",
    rating: 5,
    review: "Customer review text here...",
    initial: "C"
  }
];
```

### 🏋️ Trainers
Located around line 60-70 in App.tsx:
```javascript
const trainers = [
  { 
    name: "Trainer Name", 
    specialty: "Specialty", 
    image: "image-url-here" 
  }
];
```

### 🎯 Highlights
Located around line 80-120 in App.tsx:
```javascript
const highlights = [
  {
    title: "Feature Title",
    description: "Feature description",
    image: "feature-image-url"
  }
];
```

## 🖼️ Image Management

### Gallery Images
- **Current images:** Located in `galleryImages` array in App.tsx
- **To add more:** Add new image URLs to the array
- **Recommended:** Use Pexels URLs for consistency
- **Format:** `https://images.pexels.com/photos/ID/pexels-photo-ID.jpeg?auto=compress&cs=tinysrgb&w=800`

### Map Image
- **Location:** `/public/skygym-location.png`
- **To update:** Replace the file with new map screenshot
- **Link:** Update the Google Maps URL in the contact section

### Logo
- **Location:** `/public/gymlogo.png`
- **To update:** Replace the file with new logo (keep same filename)

## 📱 Contact Information Updates

### Phone Numbers
Update in multiple places:
1. `config.json` - main configuration
2. `src/App.tsx` - direct links in contact section
3. WhatsApp links: `https://wa.me/PHONENUMBER`

### Social Media Links
- **Instagram:** Update URL in config.json and contact section
- **Google Reviews:** Update URL in testimonials section

### Email
- **Main email:** Update in config.json
- **Contact links:** Update `mailto:` links in contact section

## 🎨 Styling Updates

### Colors
Main colors are defined in `tailwind.config.js`:
```javascript
colors: {
  'sky-yellow': '#fbbf24',
  'sky-red': '#dc2626', 
  'sky-black': '#000000',
}
```

### Fonts
- **Main font:** Inter (loaded from Google Fonts)
- **Headings:** Can be changed in CSS classes

## 🚀 Deployment

After making changes:
1. Test locally: `npm run dev`
2. Build for production: `npm run build`
3. Upload `dist` folder contents to your web server
4. Ensure `gymlogo.png` and `skygym-location.png` are in the root directory

## ⚠️ Important Notes

- **Always backup** your files before making changes
- **Test changes locally** before deploying
- **Image optimization:** Compress images for faster loading
- **Mobile responsiveness:** Test on different screen sizes
- **SEO:** Update meta tags in `index.html` when changing gym information

## 🆘 Common Issues

1. **Images not loading:** Check file paths and URLs
2. **Map not showing:** Verify Google Maps URL is correct
3. **Contact links not working:** Check phone numbers and email formats
4. **Styling issues:** Clear browser cache after changes

## 📞 Technical Support

For technical assistance with updates or customizations, contact your web developer or refer to the project documentation.