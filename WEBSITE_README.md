# Portfolio Website Documentation

## Overview
This is a modern, responsive portfolio website for **Aishwar Manickavel**, an Industrial & Process Engineer specializing in data-driven manufacturing solutions, digital twins, and process optimization.

## Features

### Design & User Experience
- **Modern Dark Theme** with gradient accents and smooth animations
- **Fully Responsive** - Mobile-first design that works on all devices
- **Smooth Scrolling** with active navigation highlighting
- **Animated Components** - Fade-in effects, typing animation, and counter animations
- **Interactive Elements** - Hover effects, parallax scrolling, and smooth transitions

### Accessibility
- **WCAG Compliant** - High contrast ratios and semantic HTML
- **Keyboard Navigation** - Full keyboard accessibility
- **Screen Reader Friendly** - Proper ARIA labels and alt text
- **Reduced Motion Support** - Respects user's motion preferences

### Performance
- **Optimized Loading** - Lazy loading for images
- **Debounced Scroll Events** - Better performance on scroll
- **Minimal JavaScript** - Lightweight and fast
- **Resource Prefetching** - Important resources preloaded

## File Structure

```
Portfolio/
├── index.html              # Main HTML file
├── styles.css              # Complete styling
├── script.js               # JavaScript functionality
├── README.md               # Portfolio documentation
├── WEBSITE_README.md       # This file
├── Aishwaryeshwar_Manickavel_*.docx  # Resume
│
├── projects/               # Project files
│   ├── tesla-market-analysis/
│   ├── waymo-autonomous-logistics/
│   ├── materials-research/
│   └── factory-layout-design/
│
├── assets/                 # Images and media
│   └── images/
│
└── reference-website/      # Design references
```

## Sections

### 1. **Home / Hero**
- Eye-catching hero section with typing animation
- Professional tagline and philosophy
- Call-to-action buttons (View Work, Download Resume)
- Availability status badge

### 2. **About**
- Professional background and journey
- Core competencies with icons
- Animated statistics (30% efficiency, $100K savings, etc.)

### 3. **Experience**
- Visual timeline of professional roles
- Quantified achievements and impact
- Company details and dates
- Hover effects on cards

### 4. **Projects**
- 6 featured projects with detailed descriptions
- Tech stack tags for each project
- Direct links to project reports and documentation
- Categorized by domain (Market Analysis, Autonomous Vehicles, etc.)

### 5. **Skills**
- Organized by categories:
  - Simulation & Modeling (Digital Twin, FlexSim, Unity)
  - CAD & Design (AutoCAD, SolidWorks)
  - Data & Analytics (Python, SQL, Excel)
  - Process Improvement (DOE, Six Sigma)
  - Visualization & BI (Power BI, Tableau)
  - Automation & Controls (PLC, SCADA)
- Proficiency levels indicated
- Gradient icons for visual appeal

### 6. **Education**
- Master's from University of Houston
- Bachelor's from PSG College of Technology
- Key projects and focus areas

### 7. **Contact**
- Email, phone, LinkedIn, GitHub
- Areas of interest tags
- Hover effects on contact cards

### 8. **Footer**
- Quick navigation links
- Social media icons
- Copyright and tagline
- Back-to-top button

## Customization Guide

### Updating Content

#### Personal Information
Edit `index.html` and find these sections:
```html
<!-- Name -->
<span class="highlight">Aishwar Manickavel</span>

<!-- Email -->
<a href="mailto:ayeshwarm@gmail.com">ayeshwarm@gmail.com</a>

<!-- Phone -->
<a href="tel:+18327752886">832-775-2886</a>
```

#### Colors
Edit `styles.css` and modify the CSS variables:
```css
:root {
    --primary-color: #667eea;      /* Main purple */
    --secondary-color: #764ba2;    /* Darker purple */
    --accent-color: #f093fb;       /* Pink accent */
    --dark-bg: #0f0f1e;           /* Dark background */
}
```

#### Typing Animation Text
Edit `script.js`:
```javascript
const textArray = [
    'Industrial Engineer',
    'Process Optimizer',
    'Data Analyst',
    // Add your own titles here
];
```

### Adding New Projects

1. Open `index.html`
2. Find the `projects-grid` section
3. Copy an existing `project-card` div
4. Update the content:
   - Change the icon class
   - Update project title and description
   - Modify tech tags
   - Update the link to your project file

Example:
```html
<div class="project-card">
    <div class="project-icon">
        <i class="fas fa-your-icon"></i>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p class="project-subtitle">Project Category</p>
        <p class="project-description">Description...</p>
        <!-- Add highlights, tech tags, and links -->
    </div>
</div>
```

### Adding Images

1. Place images in `assets/images/`
2. Reference them in HTML:
```html
<img src="assets/images/your-image.png" alt="Description">
```

For lazy loading:
```html
<img data-src="assets/images/your-image.png" alt="Description">
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment Options

### GitHub Pages
1. Create a GitHub repository
2. Push all files to the repository
3. Go to Settings > Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify
1. Drag and drop the Portfolio folder to [Netlify Drop](https://app.netlify.com/drop)
2. Your site will be deployed instantly
3. Custom domain can be configured

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the Portfolio directory
3. Follow the prompts
4. Your site will be deployed

### Traditional Web Hosting
1. Upload all files via FTP to your hosting provider
2. Ensure `index.html` is in the root directory
3. Access your site via your domain

## Performance Tips

1. **Optimize Images**: Compress images before adding them
2. **Minimize HTTP Requests**: Combine files when possible
3. **Enable Caching**: Configure server to cache static assets
4. **Use CDN**: Serve Font Awesome and fonts from CDN
5. **Compress Files**: Enable gzip compression on server

## SEO Optimization

The website includes:
- Semantic HTML5 elements
- Meta tags for description and keywords
- Open Graph tags for social sharing
- Proper heading hierarchy
- Alt text for images (when added)

### Additional SEO Steps:
1. Add a `robots.txt` file
2. Create a `sitemap.xml`
3. Add Google Analytics tracking code
4. Submit to Google Search Console

## Maintenance

### Regular Updates
- Keep projects current
- Update statistics and achievements
- Refresh resume link
- Update availability status

### Testing Checklist
- [ ] All links work correctly
- [ ] Resume downloads properly
- [ ] Project PDFs open correctly
- [ ] Mobile menu functions
- [ ] Animations work smoothly
- [ ] Forms validate (if added)
- [ ] Contact information is current

## Troubleshooting

### Issue: Animations not working
**Solution**: Check browser console for JavaScript errors. Ensure all scripts are loaded.

### Issue: PDFs not opening
**Solution**: Verify file paths are correct and files exist in the specified locations.

### Issue: Mobile menu not closing
**Solution**: Clear browser cache and test again. Check for JavaScript conflicts.

### Issue: Fonts not loading
**Solution**: Ensure internet connection (fonts load from Google Fonts CDN).

## Credits

### Libraries & Resources
- **Fonts**: Inter & Space Grotesk from Google Fonts
- **Icons**: Font Awesome 6.4.0
- **Inspiration**: Modern portfolio design trends
- **Content**: Based on professional experience and achievements

## Support

For questions or issues with this portfolio website:
- Email: ayeshwarm@gmail.com
- LinkedIn: [linkedin.com/in/aishwarnick](https://www.linkedin.com/in/aishwarnick)
- GitHub: [github.com/aish1999999](https://github.com/aish1999999)

## License

This portfolio and its contents are © 2024 Aishwar Manickavel. All rights reserved.

---

**Last Updated**: October 2024
**Version**: 1.0.0
**Status**: Production Ready

*Engineering excellence through continuous innovation.*
